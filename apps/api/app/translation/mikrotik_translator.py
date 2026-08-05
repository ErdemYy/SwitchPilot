from typing import Dict, Any, List
from app.translation.base_translator import BaseVendorTranslator


class MikroTikVendorTranslator(BaseVendorTranslator):
    @property
    def vendor_name(self) -> str: return "MIKROTIK"

    def translate(self, ccm: Dict[str, Any]) -> List[str]:
        cmds = []
        if ccm.get("hostname"):
            cmds.append(f"/system identity set name=\"{ccm['hostname']}\"")
        for vlan in ccm.get("vlans", []):
            cmds.append(f"/interface vlan add name=\"{vlan['name']}\" vlan-id={vlan['id']} interface=bridge")
        return cmds

    def validate(self, ccm: Dict[str, Any]) -> List[str]: return []
    def capabilities(self) -> List[Dict[str, Any]]: return [{"feature": "RouterOS Scripting", "supported": True}]
    def supported_versions(self) -> List[str]: return ["RouterOS 7.x"]
