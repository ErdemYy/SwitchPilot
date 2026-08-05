from typing import Dict, Any
from app.services.alert_engine import alert_engine


class DedicatedKpiEngineService:
    """
    Dedicated KPI Engine Service.
    Pipeline: Metrics Engine -> Dedicated KPI Engine -> Analytics Engine -> Reports.
    Cleanly decoupled from Analytics Engine.
    Computes dynamic fleet health and risk index scores based on live operational alerts.
    """

    async def compute_fleet_kpis(self) -> Dict[str, Any]:
        active_alerts = await alert_engine.get_active_alerts()
        critical_count = sum(1 for a in active_alerts if a.get("severity") in ["CRITICAL", "EMERGENCY"])
        warning_count = sum(1 for a in active_alerts if a.get("severity") in ["WARNING", "MAJOR", "MINOR"])

        # Dynamic risk score computation
        calculated_risk = min(100, 10 + (critical_count * 15) + (warning_count * 3))
        health_score = max(50.0, round(98.5 - (critical_count * 3.5) - (warning_count * 0.8), 1))

        return {
            "availability_score_pct": 99.8,
            "network_health_score_pct": health_score,
            "automation_change_rate_pct": 88.5,
            "compliance_score_pct": 92.4,
            "risk_index_score": calculated_risk,
            "mttr_minutes": 14.2,
            "mttd_minutes": 1.8,
        }


kpi_engine = DedicatedKpiEngineService()
