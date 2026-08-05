from typing import List
from app.vendors.cisco import commands


class CiscoCommandTranslator:
    """Command Translator Layer: Maps domain intentions to Cisco IOS/NX-OS CLI commands."""

    @staticmethod
    def translate_vlan_creation(vlan_id: int, vlan_name: str) -> List[str]:
        return [
            f"vlan {vlan_id}",
            f" name {vlan_name}",
            "exit"
        ]

    @staticmethod
    def get_backup_command() -> str:
        return commands.SHOW_RUNNING_CONFIG
