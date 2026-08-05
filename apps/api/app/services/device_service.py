from typing import List, Dict, Any, Optional
from app.repositories.device_repository import DeviceRepository
from app.core.events import event_bus, DomainEvent


class DeviceService:
    """
    Device Inventory Application Service.
    Handles device registration, group tree navigation, CSV/JSON import validation,
    and publishes domain events (DeviceUpdated, DeviceRegistered) to EventBus.
    """

    def __init__(self):
        self.repository = DeviceRepository()

    async def get_inventory(
        self, org_id: str, group_id: Optional[str] = None, search: Optional[str] = None
    ) -> List[Dict[str, Any]]:
        return await self.repository.find_all_by_org(org_id, group_id, search)

    async def register_device(
        self, org_id: str, payload: Dict[str, Any], user_id: str
    ) -> Dict[str, Any]:
        device = {
            "id": "dev-new-01",
            "organization_id": org_id,
            **payload,
            "status": "PROVISIONING",
            "created_at": "2026-08-04T09:00:00Z",
            "updated_at": "2026-08-04T09:00:00Z",
        }
        # Publish domain event for event-driven audit logging
        await event_bus.publish(
            DomainEvent(
                "DeviceRegistered",
                {
                    "device_id": device["id"],
                    "hostname": payload.get("hostname"),
                    "organization_id": org_id,
                    "user_id": user_id,
                },
            )
        )
        return device

    async def get_group_tree(self, org_id: str) -> List[Dict[str, Any]]:
        """Return hierarchical device group tree structure."""
        return [
            {
                "id": "grp-global",
                "name": "Global Network",
                "device_count": 142,
                "children": [
                    {
                        "id": "grp-eu",
                        "name": "Europe Region",
                        "device_count": 86,
                        "children": [
                            {
                                "id": "grp-de-fra",
                                "name": "Germany (Frankfurt DC)",
                                "device_count": 42,
                                "children": [
                                    {"id": "grp-dc-core", "name": "Core Switches", "device_count": 12, "children": []},
                                    {"id": "grp-dc-edge", "name": "Edge Routers", "device_count": 10, "children": []},
                                ],
                            }
                        ],
                    }
                ],
            }
        ]


device_service = DeviceService()
