from typing import Dict, Any, List
from app.translation.base_translator import BaseVendorTranslator


class JuniperVendorTranslator(BaseVendorTranslator):
    @property
    def vendor_name(self) -> str: return "JUNIPER"

    def translate(self, ccm: Dict[str, Any]) -> List[str]:
        cmds = []
        if ccm.get("hostname"):
            cmds.append(f"set system host-name {ccm['hostname']}")
        for vlan in ccm.get("vlans", []):
            cmds.append(f"set vlans {vlan['name']} vlan-id {vlan['id']}")
        for intf in ccm.get("interfaces", []):
            if intf.get("mode") == "ACCESS":
                cmds.append(f"set interfaces {intf['name']} unit 0 family ethernet-switching interface-mode access")
            elif intf.get("mode") == "TRUNK":
                cmds.append(f"set interfaces {intf['name']} unit 0 family ethernet-switching interface-mode trunk")
        return cmds

    def validate(self, ccm: Dict[str, Any]) -> List[str]: return []
    def capabilities(self) -> List[Dict[str, Any]]: return [{"feature": "Junos Set Syntax", "supported": True}]
    def supported_versions(self) -> List[str]: return ["Junos OS 21.x/22.x"]
