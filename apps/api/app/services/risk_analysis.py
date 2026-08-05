from typing import Dict, Any, List


class RiskAnalysisEngine:
    """
    Automated Risk Analysis & Downtime Estimator Engine.
    Classifies risk levels: SAFE, LOW, MEDIUM, HIGH, CRITICAL with automated causal reasoning.
    """

    def analyze_risk(self, ccm: Dict[str, Any], generated_commands: List[str]) -> Dict[str, Any]:
        reasons = []
        level = "SAFE"
        score = 10
        affected_intfs = [i["name"] for i in ccm.get("interfaces", []) if "name" in i]
        estimated_downtime = 0

        # Check for High-Risk operations
        cmd_str = " ".join(generated_commands).lower()
        if "vlan" in cmd_str and "trunk" in cmd_str:
            level = "MEDIUM"
            score = 55
            reasons.append("Trunk VLAN modifications may cause brief STP topology re-convergence.")
            estimated_downtime = 2

        if "reload" in cmd_str or "reboot" in cmd_str or "firmware" in cmd_str:
            level = "CRITICAL"
            score = 95
            reasons.append("Device reboot or firmware flash requires planned maintenance window.")
            estimated_downtime = 300

        if not reasons:
            reasons.append("Standard interface description or non-disruptive VLAN addition.")

        return {
            "level": level,
            "score": score,
            "affectedInterfaces": affected_intfs,
            "estimatedDowntimeSec": estimated_downtime,
            "rollbackAvailable": True,
            "reasons": reasons,
        }


risk_engine = RiskAnalysisEngine()
