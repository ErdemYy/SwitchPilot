from typing import Dict, Any, List
from app.translation.base_translator import BaseVendorTranslator


class CiscoVendorTranslator(BaseVendorTranslator):
    @property
    def vendor_name(self) -> str:
        return "CISCO"

    def translate(self, ccm: Dict[str, Any]) -> List[str]:
        cmds = []
        if "hostname" in ccm and ccm["hostname"]:
            cmds.append(f"hostname {ccm['hostname']}")

        for vlan in ccm.get("vlans", []):
            cmds.append(f"vlan {vlan['id']}")
            cmds.append(f" name {vlan['name']}")

        for intf in ccm.get("interfaces", []):
            cmds.append(f"interface {intf['name']}")
            if intf.get("description"):
                cmds.append(f" description {intf['description']}")
            if intf.get("mode") == "ACCESS":
                cmds.append(" switchport mode access")
                if intf.get("vlanId"):
                    cmds.append(f" switchport access vlan {intf['vlanId']}")
            elif intf.get("mode") == "TRUNK":
                cmds.append(" switchport mode trunk")
                if intf.get("nativeVlanId"):
                    cmds.append(f" switchport trunk native vlan {intf['nativeVlanId']}")
                if intf.get("allowedVlans"):
                    cmds.append(f" switchport trunk allowed vlan {intf['allowedVlans']}")
        return cmds

    def validate(self, ccm: Dict[str, Any]) -> List[str]:
        return []

    def capabilities(self) -> List[Dict[str, Any]]:
        return [
            {"feature": "VLAN Management", "supported": True},
            {"feature": "Port Security", "supported": True},
            {"feature": "Voice VLAN", "supported": True},
        ]

    def supported_versions(self) -> List[str]:
        return ["Cisco IOS 15.x", "Cisco IOS-XE 16.x/17.x", "Cisco NX-OS 9.x/10.x"]
