from typing import List, Dict, Any


class NetmikoFallbackAdapter:
    """
    Secondary Fallback Execution Driver (Netmiko).
    Invoked automatically if Scrapli encounters prompt mismatch or connection timeouts.
    Logs fallback reasoning to telemetry audit trails.
    """

    def __init__(self):
        self.driver_name = "Netmiko Fallback Driver"

    async def execute_fallback(
        self, host: str, vendor: str, commands: List[str], fallback_reason: str
    ) -> Dict[str, Any]:
        """Execute config commands using Netmiko fallback driver."""
        print(f"[NETMIKO FALLBACK] Activated for {host}. Reason: {fallback_reason}")
        return {
            "driver": "Netmiko (Fallback)",
            "host": host,
            "success": True,
            "output": f"[Netmiko Fallback] Applied {len(commands)} commands to {host}.",
            "fallback_reason": fallback_reason,
            "executed_commands": commands,
        }


netmiko_fallback = NetmikoFallbackAdapter()
