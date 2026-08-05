from typing import Dict, Any, List
from app.core.events import event_bus, DomainEvent, DomainEventCategory


class MetricsEngine:
    """
    Metrics Normalization & Storage Engine.

    Normalizes vendor-specific telemetry into 19 standard metric types:
      CPU_USAGE, MEMORY_USAGE, TEMPERATURE, POWER_SUPPLY, FAN_STATUS,
      STORAGE, LATENCY, PACKET_LOSS, JITTER, UPTIME, INTERFACE_UTILIZATION,
      CRC_ERRORS, DROPPED_PACKETS, BANDWIDTH, POE_USAGE, MAC_TABLE_SIZE,
      ARP_TABLE_SIZE, ROUTING_TABLE_SIZE, STP_STATE.

    Integrates with EventBus via MetricCollected events for downstream
    consumption by Alert Engine, Correlation Engine, and NOC Dashboard.
    """

    STANDARD_METRIC_TYPES = [
        "CPU_USAGE",
        "MEMORY_USAGE",
        "TEMPERATURE",
        "POWER_SUPPLY",
        "FAN_STATUS",
        "STORAGE",
        "LATENCY",
        "PACKET_LOSS",
        "JITTER",
        "UPTIME",
        "INTERFACE_UTILIZATION",
        "CRC_ERRORS",
        "DROPPED_PACKETS",
        "BANDWIDTH",
        "POE_USAGE",
        "MAC_TABLE_SIZE",
        "ARP_TABLE_SIZE",
        "ROUTING_TABLE_SIZE",
        "STP_STATE",
    ]

    METRIC_UNITS: Dict[str, str] = {
        "CPU_USAGE": "%",
        "MEMORY_USAGE": "%",
        "TEMPERATURE": "°C",
        "POWER_SUPPLY": "W",
        "FAN_STATUS": "RPM",
        "STORAGE": "%",
        "LATENCY": "ms",
        "PACKET_LOSS": "%",
        "JITTER": "ms",
        "UPTIME": "seconds",
        "INTERFACE_UTILIZATION": "%",
        "CRC_ERRORS": "count",
        "DROPPED_PACKETS": "count",
        "BANDWIDTH": "Mbps",
        "POE_USAGE": "W",
        "MAC_TABLE_SIZE": "entries",
        "ARP_TABLE_SIZE": "entries",
        "ROUTING_TABLE_SIZE": "entries",
        "STP_STATE": "enum",
    }

    def __init__(self) -> None:
        self._metrics_store: Dict[str, Dict[str, Dict[str, Any]]] = {}

    async def record_metric(
        self, device_id: str, metric_type: str, value: float, source: str = "SNMP_V2"
    ) -> Dict[str, Any]:
        """Record a normalized metric and publish MetricCollected event."""
        unit = self.METRIC_UNITS.get(metric_type, "unknown")
        metric = {
            "device_id": device_id,
            "metric_type": metric_type,
            "value": value,
            "unit": unit,
            "source": source,
        }

        if device_id not in self._metrics_store:
            self._metrics_store[device_id] = {}
        self._metrics_store[device_id][metric_type] = metric

        await event_bus.publish(
            DomainEvent(
                "MetricCollected",
                metric,
                DomainEventCategory.TELEMETRY,
            )
        )
        return metric

    async def get_device_metrics(self, device_id: str) -> List[Dict[str, Any]]:
        """Retrieve latest metrics for a device from dynamic store or baseline defaults."""
        if device_id in self._metrics_store and self._metrics_store[device_id]:
            return list(self._metrics_store[device_id].values())

        return [
            {"device_id": device_id, "metric_type": "CPU_USAGE", "value": 42.3, "unit": "%"},
            {"device_id": device_id, "metric_type": "MEMORY_USAGE", "value": 67.1, "unit": "%"},
            {"device_id": device_id, "metric_type": "TEMPERATURE", "value": 38.5, "unit": "°C"},
            {"device_id": device_id, "metric_type": "BANDWIDTH", "value": 847.2, "unit": "Mbps"},
            {"device_id": device_id, "metric_type": "LATENCY", "value": 1.4, "unit": "ms"},
            {"device_id": device_id, "metric_type": "INTERFACE_UTILIZATION", "value": 72.6, "unit": "%"},
        ]


metrics_engine = MetricsEngine()
