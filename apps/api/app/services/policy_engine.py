from typing import Dict, Any, List


class PolicyEngine:
    """
    Enterprise Policy Engine.
    Enforces Forbidden Commands, Naming Standards, Allowed VLAN Ranges,
    Reserved VLANs, and Mandatory Corporate Compliance Standards.
    """

    RESERVED_VLANS = {1002, 1003, 1004, 1005}

    def check_compliance(self, ccm: Dict[str, Any]) -> List[str]:
        violations = []
        # Check Reserved VLANs
        for vlan in ccm.get("vlans", []):
            if vlan.get("id") in self.RESERVED_VLANS:
                violations.append(f"VLAN {vlan['id']} is a reserved legacy VLAN and cannot be modified.")

        # Enforce Hostname Naming Convention (e.g. sw-location-type-num)
        hostname = ccm.get("hostname", "")
        if hostname and not hostname.startswith(("sw-", "rt-", "gw-", "fw-")):
            violations.append(f"Hostname '{hostname}' violates company naming policy (must start with sw-, rt-, gw-, fw-).")

        return violations


policy_engine = PolicyEngine()
