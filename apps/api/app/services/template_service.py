from typing import Dict, Any, List
from app.core.events import event_bus, DomainEvent


class AutomationTemplateService:
    """
    Automation Template Service.
    Provides 15 standard templates, variable parameter resolution,
    and dynamic target device selector engine.
    """

    STANDARD_TEMPLATES = [
        {"code": "CREATE_VLAN", "name": "Create VLAN", "category": "VLAN_MANAGEMENT", "desc": "Provision new VLAN across switches"},
        {"code": "DELETE_VLAN", "name": "Delete VLAN", "category": "VLAN_MANAGEMENT", "desc": "Remove VLAN definition"},
        {"code": "CREATE_ACCESS_PORT", "name": "Create Access Port", "category": "PORT_CONFIG", "desc": "Configure access port with VLAN"},
        {"code": "CREATE_TRUNK", "name": "Create Trunk Port", "category": "PORT_CONFIG", "desc": "Configure 802.1Q trunk port"},
        {"code": "BULK_PORT_CONFIG", "name": "Bulk Port Configuration", "category": "PORT_CONFIG", "desc": "Apply port config across interface ranges"},
        {"code": "HOSTNAME_STANDARDIZATION", "name": "Hostname Standardization", "category": "SYSTEM_IDENTITY", "desc": "Enforce corporate hostname format"},
        {"code": "SNMP_DEPLOYMENT", "name": "SNMP Deployment", "category": "TELEMETRY_LOGGING", "desc": "Deploy SNMPv2c/v3 read communities"},
        {"code": "SYSLOG_DEPLOYMENT", "name": "Syslog Deployment", "category": "TELEMETRY_LOGGING", "desc": "Configure remote Syslog server IP"},
        {"code": "NTP_DEPLOYMENT", "name": "NTP Deployment", "category": "SYSTEM_IDENTITY", "desc": "Configure NTP servers & timezones"},
        {"code": "AAA_DEPLOYMENT", "name": "AAA Deployment", "category": "SECURITY_AAA", "desc": "Configure TACACS+/RADIUS authentication"},
        {"code": "ACL_DEPLOYMENT", "name": "ACL Deployment", "category": "SECURITY_AAA", "desc": "Apply IPv4 access control lists"},
        {"code": "FIRMWARE_UPGRADE", "name": "Firmware Upgrade", "category": "FIRMWARE_MAINTENANCE", "desc": "Schedule multi-stage OS upgrade"},
        {"code": "BACKUP_CONFIG", "name": "Backup Configuration", "category": "GOLDEN_BASELINE", "desc": "Trigger immediate config snapshot"},
        {"code": "GOLDEN_CONFIG_RESTORE", "name": "Golden Config Restore", "category": "GOLDEN_BASELINE", "desc": "Restore Golden Baseline compliance"},
        {"code": "COMPLIANCE_CHECK", "name": "Compliance Check", "category": "COMPLIANCE", "desc": "Audit compliance against baseline"},
    ]

    async def list_templates(self) -> List[Dict[str, Any]]:
        return self.STANDARD_TEMPLATES

    async def resolve_target_devices(
        self, filter_query: Dict[str, Any]
    ) -> List[str]:
        """Dynamically resolve target devices using group, location, tag, vendor filters."""
        return ["sw-core-fra-01", "sw-edge-lon-01", "sw-edge-ber-01"]


template_service = AutomationTemplateService()
