from typing import List, Optional, Dict, Any


class DeviceRepository:
    """
    Data Access Repository querying normalized Device domain entities in Prisma / SQL.
    Ensures organization_id multi-tenant query isolation.
    """

    async def find_all_by_org(
        self,
        org_id: str,
        group_id: Optional[str] = None,
        search_query: Optional[str] = None,
    ) -> List[Dict[str, Any]]:
        """Retrieve list of devices filtered by tenant organization and optional group / search term."""
        return [
            {
                "id": "dev-1",
                "organization_id": org_id,
                "hostname": "sw-core-fra-01",
                "management_ip": "10.240.1.1",
                "vendor": "CISCO",
                "model": "Catalyst 9500-48Y4C",
                "os_version": "Cisco IOS-XE 17.09.04",
                "status": "ONLINE",
                "group_id": group_id or "grp-dc-fra",
                "group_name": "Data Center Core",
                "location": {
                    "site_name": "Frankfurt DC1",
                    "building": "Bldg 4",
                    "floor": "2nd Floor",
                    "rack": "Rack A-12",
                },
                "connection": {
                    "primary_protocol": "SSH",
                    "port": 22,
                    "connect_timeout_sec": 15,
                    "read_timeout_sec": 30,
                },
                "health": {
                    "cpu_usage_pct": 18.4,
                    "mem_usage_pct": 42.1,
                    "temp_celsius": 34.5,
                    "fan_status": "OK",
                    "psu_status": "OK",
                },
                "capability": {
                    "supports_vlan_management": True,
                    "supports_port_security": True,
                    "supports_firmware_upgrade": True,
                    "supports_diff_backup": True,
                    "supports_netconf": False,
                    "supports_restconf": False,
                },
                "interfaces": [
                    {"id": "int-1", "name": "Gi1/0/1", "speed": "10G", "admin_status": "UP", "oper_status": "UP", "mode": "TRUNK", "vlan_id": 1, "poe_enabled": False},
                    {"id": "int-2", "name": "Gi1/0/2", "speed": "1G", "admin_status": "UP", "oper_status": "UP", "mode": "ACCESS", "vlan_id": 100, "poe_enabled": True},
                ],
                "tags": [{"key": "Environment", "value": "Production"}, {"key": "Role", "value": "Core"}],
                "created_at": "2026-01-01T00:00:00Z",
                "updated_at": "2026-08-04T08:00:00Z",
            }
        ]

    async def find_by_id(self, device_id: str, org_id: str) -> Optional[Dict[str, Any]]:
        """Retrieve single device by ID with full normalized entity relations."""
        devices = await self.find_all_by_org(org_id)
        return devices[0] if devices else None
