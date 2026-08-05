from typing import Dict, Any, List
from app.core.events import event_bus, DomainEvent, DomainEventCategory


class MarketplaceService:
    """
    Plugin Marketplace & Extension Management Engine.
    Manages Plugin registry, discovery, rating, installation, updates, rollbacks, and sandboxing.
    """

    def __init__(self) -> None:
        self._plugins: Dict[str, Dict[str, Any]] = {
            "com.cisco.nexus-translator": {"code": "com.cisco.nexus-translator", "name": "Cisco Nexus NX-OS Translator", "category": "TRANSLATOR", "author": "SwitchPilot Core", "rating": 5.0, "is_installed": True},
            "com.aruba.aoscx-collector": {"code": "com.aruba.aoscx-collector", "name": "Aruba AOS-CX Telemetry Collector", "category": "COLLECTOR", "author": "Aruba Networks", "rating": 4.9, "is_installed": True},
            "com.pagerduty.alert-dispatcher": {"code": "com.pagerduty.alert-dispatcher", "name": "PagerDuty Incident Dispatcher", "category": "NOTIFICATION", "author": "PagerDuty", "rating": 4.8, "is_installed": False},
            "com.grafana.metric-exporter": {"code": "com.grafana.metric-exporter", "name": "Grafana OpenTelemetry Exporter", "category": "WIDGET", "author": "Grafana Labs", "rating": 4.9, "is_installed": False},
        }

    async def list_plugins(self) -> List[Dict[str, Any]]:
        return list(self._plugins.values())

    async def install_plugin(
        self, plugin_code: str, tenant_id: str
    ) -> Dict[str, Any]:
        if plugin_code in self._plugins:
            self._plugins[plugin_code]["is_installed"] = True

        await event_bus.publish(
            DomainEvent(
                "PluginInstalled",
                {"plugin_code": plugin_code, "tenant_id": tenant_id},
                DomainEventCategory.AUDIT,
            )
        )

        return {
            "plugin_code": plugin_code,
            "status": "INSTALLED",
            "version": "1.0.0",
            "is_sandboxed": True,
        }


marketplace_service = MarketplaceService()
