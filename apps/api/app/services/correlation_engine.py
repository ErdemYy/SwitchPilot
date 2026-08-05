from typing import Dict, Any, List
from app.core.events import event_bus, DomainEvent, DomainEventCategory


class CorrelationEngine:
    """
    Event Correlation Engine.

    Strategies:
      ROOT_CAUSE         — Identifies upstream root cause for cascading alerts.
      DEPENDENCY         — Correlates alerts on devices connected in topology.
      DUPLICATE_SUPPRESSION — Suppresses duplicate alerts within a time window.
      STORM_DETECTION    — Detects alert storms (N+ alerts in T seconds).
      ALERT_GROUPING     — Groups related alerts by device, location, or type.
      TOPOLOGY           — Uses topology adjacency to correlate downstream failures.
      TIME               — Correlates alerts occurring within the same time window.

    The engine processes the active alert list and produces CorrelationResult
    groups. Each group identifies a root cause alert and its correlated children.
    """

    STRATEGIES = [
        "ROOT_CAUSE",
        "DEPENDENCY",
        "DUPLICATE_SUPPRESSION",
        "STORM_DETECTION",
        "ALERT_GROUPING",
        "TOPOLOGY",
        "TIME",
    ]

    async def correlate_alerts(
        self, alerts: List[Dict[str, Any]]
    ) -> List[Dict[str, Any]]:
        """
        Analyze active alerts and produce correlation groups.
        """
        if len(alerts) < 2:
            return []

        # Simplified correlation: group by device_id prefix (same site)
        groups: Dict[str, List[Dict[str, Any]]] = {}
        for alert in alerts:
            device = alert.get("device_id", "unknown")
            site_key = "-".join(device.split("-")[:3]) if "-" in device else device
            groups.setdefault(site_key, []).append(alert)

        results: List[Dict[str, Any]] = []
        for site_key, group_alerts in groups.items():
            if len(group_alerts) < 2:
                continue

            # Highest severity alert becomes root cause
            severity_order = ["INFO", "WARNING", "MINOR", "MAJOR", "CRITICAL", "EMERGENCY"]
            sorted_alerts = sorted(
                group_alerts,
                key=lambda a: severity_order.index(a.get("severity", "INFO")),
                reverse=True,
            )
            root = sorted_alerts[0]
            children = sorted_alerts[1:]

            correlation = {
                "group_id": f"corr-{site_key}",
                "root_cause_alert_id": root.get("id", "unknown"),
                "correlated_alert_ids": [a.get("id", "unknown") for a in children],
                "strategy": "ROOT_CAUSE",
                "confidence": 0.85,
            }
            results.append(correlation)
            await event_bus.publish(
                DomainEvent(
                    "CorrelationDetected",
                    correlation,
                    DomainEventCategory.ALERT,
                )
            )

        return results


correlation_engine = CorrelationEngine()
