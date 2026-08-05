from typing import Dict, Any, List
from app.translation.base_translator import BaseVendorTranslator


class ArubaVendorTranslator(BaseVendorTranslator):
    @property
    def vendor_name(self) -> str: return "ARUBA"

    def translate(self, ccm: Dict[str, Any]) -> List[str]:
        cmds = []
        if ccm.get("hostname"):
            cmds.append(f"hostname {ccm['hostname']}")
        for vlan in ccm.get("vlans", []):
            cmds.append(f"vlan {vlan['id']}")
            cmds.append(f" name {vlan['name']}")
        for intf in ccm.get("interfaces", []):
            cmds.append(f"interface {intf['name']}")
            if intf.get("mode") == "ACCESS":
                cmds.append(f" vlan access {intf.get('vlanId', 1)}")
            elif intf.get("mode") == "TRUNK":
                cmds.append(f" vlan trunk allowed {intf.get('allowedVlans', 'all')}")
        return cmds

    def validate(self, ccm: Dict[str, Any]) -> List[str]: return []
    def capabilities(self) -> List[Dict[str, Any]]:
        return [{"feature": "VLAN Management", "supported": True}]
    def supported_versions(self) -> List[str]: return ["AOS-CX 10.x", "AOS-S 16.x"]
