from typing import Dict, Any, List


class ValidationEngine:
    """
    Validation Engine.
    Validates Business Rules, Configuration Rules, Dependency Rules,
    and Vendor/Firmware compatibility before translation.
    """

    def validate_ccm(self, ccm: Dict[str, Any]) -> List[str]:
        errors = []
        # Rule 1: Validate VLAN Range (1 - 4094)
        for vlan in ccm.get("vlans", []):
            v_id = vlan.get("id")
            if not v_id or v_id < 1 or v_id > 4094:
                errors.append(f"Invalid VLAN ID '{v_id}'. Allowed range is 1-4094.")

        # Rule 2: Validate Interface VLAN references
        vlan_ids = {v["id"] for v in ccm.get("vlans", [])}
        for intf in ccm.get("interfaces", []):
            if intf.get("mode") == "ACCESS" and intf.get("vlanId"):
                if intf["vlanId"] not in vlan_ids and intf["vlanId"] != 1:
                    errors.append(
                        f"Interface '{intf['name']}' references undefined Access VLAN {intf['vlanId']}."
                    )
        return errors


validation_engine = ValidationEngine()
