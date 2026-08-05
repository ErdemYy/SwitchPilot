from fastapi import APIRouter, Depends
from app.schemas.cmdb import FleetKpiResponse
from app.services.kpi_engine import kpi_engine
from app.security.deps import require_permission

router = APIRouter(prefix="/kpi", tags=["Enterprise Architecture Hardening"])


@router.get("", response_model=FleetKpiResponse)
async def get_fleet_kpis(
    current_user: dict = Depends(require_permission("devices:read")),
):
    """Retrieve computed fleet KPIs from Dedicated KPI Engine Service."""
    res = await kpi_engine.compute_fleet_kpis()
    return FleetKpiResponse(**res)
