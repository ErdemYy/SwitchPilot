from typing import Dict, Any, List
from app.translation.base_translator import BaseVendorTranslator


class HPVendorTranslator(BaseVendorTranslator):
    @property
    def vendor_name(self) -> str: return "HP"

    def translate(self, ccm: Dict[str, Any]) -> List[str]:
        cmds = []
        if ccm.get("hostname"):
            cmds.append(f"sysname {ccm['hostname']}")
        for vlan in ccm.get("vlans", []):
            cmds.append(f"vlan {vlan['id']}")
            cmds.append(f" name {vlan['name']}")
        return cmds

    def validate(self, ccm: Dict[str, Any]) -> List[str]: return []
    def capabilities(self) -> List[Dict[str, Any]]: return [{"feature": "Comware CLI", "supported": True}]
    def supported_versions(self) -> List[str]: return ["Comware 7.x", "ProCurve WB.16"]
