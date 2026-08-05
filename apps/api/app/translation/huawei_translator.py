from typing import Dict, Any, List
from app.translation.base_translator import BaseVendorTranslator


class HuaweiVendorTranslator(BaseVendorTranslator):
    @property
    def vendor_name(self) -> str: return "HUAWEI"

    def translate(self, ccm: Dict[str, Any]) -> List[str]:
        cmds = []
        if ccm.get("hostname"):
            cmds.append(f"sysname {ccm['hostname']}")
        for vlan in ccm.get("vlans", []):
            cmds.append(f"vlan {vlan['id']}")
            cmds.append(f" description {vlan['name']}")
        for intf in ccm.get("interfaces", []):
            cmds.append(f"interface {intf['name']}")
            if intf.get("mode") == "ACCESS":
                cmds.append(" port link-type access")
                if intf.get("vlanId"):
                    cmds.append(f" port default vlan {intf['vlanId']}")
        return cmds

    def validate(self, ccm: Dict[str, Any]) -> List[str]: return []
    def capabilities(self) -> List[Dict[str, Any]]: return [{"feature": "VRP VLAN Config", "supported": True}]
    def supported_versions(self) -> List[str]: return ["VRP 8.x"]
