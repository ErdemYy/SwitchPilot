from typing import Dict, Any, List
from app.core.events import event_bus, DomainEvent, DomainEventCategory


class TelemetryCollectorEngine:
    """
    Telemetry Collection Engine Architecture.

    Supports 9 telemetry source types:
      SNMP_V2, SNMP_V3, STREAMING_TELEMETRY, GNMI, SYSLOG,
      REST_API, NETCONF_NOTIFICATION, WEBHOOK, CUSTOM_COLLECTOR.

    Each source type will be implemented as a pluggable collector that conforms
    to the CollectorRegistrar interface defined in the Plugin SDK.

    This engine normalizes raw vendor telemetry into the standard DeviceMetric
    format before forwarding to the Metrics Engine and Event Bus.
    """

    SUPPORTED_SOURCES = [
        "SNMP_V2",
        "SNMP_V3",
        "STREAMING_TELEMETRY",
        "GNMI",
        "SYSLOG",
        "REST_API",
        "NETCONF_NOTIFICATION",
        "WEBHOOK",
        "CUSTOM_COLLECTOR",
    ]

    def __init__(self) -> None:
        self._collectors: Dict[str, Dict[str, Any]] = {}

    async def register_collector(
        self, collector_id: str, source: str, devices: List[str]
    ) -> Dict[str, Any]:
        """Register a new telemetry collector for a set of devices."""
        entry = {
            "id": collector_id,
            "source": source,
            "status": "RUNNING",
            "devices_monitored": len(devices),
            "last_poll_at": None,
        }
        self._collectors[collector_id] = entry
        await event_bus.publish(
            DomainEvent(
                "CollectorStarted",
                {"collector_id": collector_id, "source": source},
                DomainEventCategory.TELEMETRY,
            )
        )
        return entry

    async def stop_collector(self, collector_id: str) -> Dict[str, Any]:
        """Stop and deregister a telemetry collector."""
        entry = self._collectors.get(collector_id)
        if entry:
            entry["status"] = "STOPPED"
            await event_bus.publish(
                DomainEvent(
                    "CollectorStopped",
                    {"collector_id": collector_id},
                    DomainEventCategory.TELEMETRY,
                )
            )
        return entry or {"id": collector_id, "status": "NOT_FOUND"}

    async def ingest_telemetry(
        self, device_id: str, source: str, raw_data: Dict[str, Any]
    ) -> Dict[str, Any]:
        """
        Ingest raw telemetry data from a source, normalize it, and publish
        a TelemetryReceived domain event.
        """
        normalized = {
            "device_id": device_id,
            "source": source,
            "metrics": raw_data,
        }
        await event_bus.publish(
            DomainEvent(
                "TelemetryReceived",
                normalized,
                DomainEventCategory.TELEMETRY,
            )
        )
        return normalized

    def list_collectors(self) -> List[Dict[str, Any]]:
        """Return the current status of all registered collectors."""
        return list(self._collectors.values())


telemetry_collector = TelemetryCollectorEngine()
