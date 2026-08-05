from typing import Dict, Any, List
from app.translation.base_translator import BaseVendorTranslator


class UbiquitiVendorTranslator(BaseVendorTranslator):
    @property
    def vendor_name(self) -> str: return "UBIQUITI"

    def translate(self, ccm: Dict[str, Any]) -> List[str]:
        cmds = []
        if ccm.get("hostname"):
            cmds.append(f"hostname {ccm['hostname']}")
        for vlan in ccm.get("vlans", []):
            cmds.append(f"vlan database\n vlan {vlan['id']}\n exit")
        return cmds

    def validate(self, ccm: Dict[str, Any]) -> List[str]: return []
    def capabilities(self) -> List[Dict[str, Any]]: return [{"feature": "EdgeSwitch CLI", "supported": True}]
    def supported_versions(self) -> List[str]: return ["EdgeSwitch OS 1.x/2.x"]
