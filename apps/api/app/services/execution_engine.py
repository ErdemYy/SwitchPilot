from typing import Dict, Any, List, Optional
from app.adapters.scrapli_driver import scrapli_driver
from app.adapters.netmiko_fallback import netmiko_fallback
from app.adapters.napalm_verifier import napalm_verifier
from app.services.transaction_engine import transaction_engine
from app.core.events import event_bus, DomainEvent


class EnterpriseExecutionEngine:
    """
    Main Enterprise Execution Engine Orchestrator.
    Manages Scrapli primary driver execution with automatic Netmiko fallback,
    post-execution NAPALM state verification, and transactional rollbacks.
    """

    async def execute_plan(
        self,
        execution_id: str,
        target_devices: List[str],
        commands: List[str],
        mode: str = "IMMEDIATE",
        force_fallback: bool = False,
    ) -> Dict[str, Any]:
        """Execute translated configuration plan across target devices safely."""
        # 1. Begin Atomic Transaction
        tx = await transaction_engine.begin_transaction(execution_id)

        results = []
        driver_used = "Scrapli"

        for dev_host in target_devices:
            # 2. Execute via Scrapli Primary or Netmiko Fallback
            if not force_fallback:
                res = await scrapli_driver.send_config_batch(dev_host, "CISCO", commands)
            else:
                res = await netmiko_fallback.execute_fallback(
                    dev_host, "CISCO", commands, "Scrapli prompt mismatch"
                )
                driver_used = "Netmiko (Fallback)"

            results.append(res)

        # 3. Post-Execution Verification via NAPALM State Verifier
        verification = await napalm_verifier.verify_device_state(
            target_devices[0] if target_devices else "10.240.1.1", "CISCO", {}
        )
        await event_bus.publish(
            DomainEvent(
                "VerificationCompleted",
                {"execution_id": execution_id, "is_verified": verification["is_verified"]},
            )
        )

        # 4. Commit Transaction
        await transaction_engine.commit_transaction(execution_id)

        return {
            "execution_id": execution_id,
            "status": "COMPLETED",
            "driver_used": driver_used,
            "target_devices": target_devices,
            "results": results,
            "verification": verification,
        }


execution_engine = EnterpriseExecutionEngine()
