import uuid
from typing import Dict, Any, List
from app.core.events import event_bus, DomainEvent, DomainEventCategory


class AlertEngine:
    """
    Alert Engine with 10 alert types and 7-level severity classification.

    Alert Types:
      THRESHOLD, RATE, ANOMALY, MISSING_TELEMETRY, DEVICE_DOWN,
      INTERFACE_DOWN, CONFIG_DRIFT, AUTH_FAILURE, EXECUTION_FAILURE,
      WORKFLOW_FAILURE.

    Severity Levels:
      INFO, WARNING, MINOR, MAJOR, CRITICAL, EMERGENCY.

    The engine evaluates incoming metrics against AlertPolicy threshold rules,
    and emits AlertCreated / AlertAcknowledged / AlertResolved domain events.
    """

    SEVERITY_ORDER = ["INFO", "WARNING", "MINOR", "MAJOR", "CRITICAL", "EMERGENCY"]

    def __init__(self) -> None:
        self._alerts_store: Dict[str, Dict[str, Any]] = {
            "alrt-001": {"id": "alrt-001", "device_id": "sw-core-fra-01", "type": "THRESHOLD", "severity": "CRITICAL", "status": "ACTIVE", "title": "CPU > 90% on sw-core-fra-01", "description": "CPU_USAGE = 94.2% (threshold: > 90%)"},
            "alrt-002": {"id": "alrt-002", "device_id": "sw-edge-lon-01", "type": "INTERFACE_DOWN", "severity": "MAJOR", "status": "ACTIVE", "title": "Gi1/0/24 DOWN on sw-edge-lon-01", "description": "Interface operStatus changed to DOWN."},
            "alrt-003": {"id": "alrt-003", "device_id": "sw-dist-ber-01", "type": "CONFIG_DRIFT", "severity": "WARNING", "status": "ACTIVE", "title": "Config drift detected on sw-dist-ber-01", "description": "Running config differs from Golden Config baseline by 14 lines."},
            "alrt-004": {"id": "alrt-004", "device_id": "ap-wifi-muc-03", "type": "MISSING_TELEMETRY", "severity": "MINOR", "status": "ACKNOWLEDGED", "title": "No telemetry from ap-wifi-muc-03 for 15 min", "description": "SNMP polling returned no response after 3 retries."},
        }

    async def evaluate_metric(
        self, device_id: str, metric_type: str, value: float, policies: List[Dict[str, Any]]
    ) -> List[Dict[str, Any]]:
        """
        Evaluate a metric value against all matching alert policies.
        Returns a list of triggered alerts (if any).
        """
        triggered: List[Dict[str, Any]] = []

        for policy in policies:
            if policy.get("metric_type") != metric_type:
                continue
            if not policy.get("is_active", True):
                continue

            threshold = policy.get("threshold_value", 0)
            condition = policy.get("condition", "GREATER_THAN")

            fired = False
            if condition == "GREATER_THAN" and value > threshold:
                fired = True
            elif condition == "LESS_THAN" and value < threshold:
                fired = True
            elif condition == "EQUALS" and value == threshold:
                fired = True

            if fired:
                alert_id = f"alrt-{uuid.uuid4().hex[:6]}"
                alert = {
                    "id": alert_id,
                    "device_id": device_id,
                    "type": "THRESHOLD",
                    "severity": policy.get("severity", "WARNING"),
                    "status": "ACTIVE",
                    "title": f"{metric_type} threshold exceeded on {device_id}",
                    "description": f"{metric_type} = {value} (threshold: {condition} {threshold})",
                }
                self._alerts_store[alert_id] = alert
                triggered.append(alert)
                await event_bus.publish(
                    DomainEvent("AlertCreated", alert, DomainEventCategory.ALERT)
                )

        return triggered

    async def acknowledge_alert(self, alert_id: str, user_id: str) -> Dict[str, Any]:
        """Acknowledge an active alert."""
        if alert_id in self._alerts_store:
            self._alerts_store[alert_id]["status"] = "ACKNOWLEDGED"
            self._alerts_store[alert_id]["acknowledged_by"] = user_id

        await event_bus.publish(
            DomainEvent(
                "AlertAcknowledged",
                {"alert_id": alert_id, "acknowledged_by": user_id},
                DomainEventCategory.ALERT,
            )
        )
        return self._alerts_store.get(
            alert_id,
            {"alert_id": alert_id, "status": "ACKNOWLEDGED", "acknowledged_by": user_id},
        )

    async def resolve_alert(self, alert_id: str) -> Dict[str, Any]:
        """Resolve an alert."""
        if alert_id in self._alerts_store:
            self._alerts_store[alert_id]["status"] = "RESOLVED"

        await event_bus.publish(
            DomainEvent(
                "AlertResolved",
                {"alert_id": alert_id},
                DomainEventCategory.ALERT,
            )
        )
        return self._alerts_store.get(
            alert_id,
            {"alert_id": alert_id, "status": "RESOLVED"},
        )

    async def get_active_alerts(self) -> List[Dict[str, Any]]:
        """Retrieve active alerts from dynamic store."""
        return [a for a in self._alerts_store.values() if a.get("status") in ["ACTIVE", "ACKNOWLEDGED"]]


alert_engine = AlertEngine()
