from typing import List
from fastapi import APIRouter, Depends
from app.schemas.analytics import (
    ExecutiveKpiResponse,
    CapacityForecastSchema,
    ComplianceScorecardResponse,
)
from app.services.analytics_engine import analytics_engine
from app.security.deps import require_permission

router = APIRouter(prefix="/analytics", tags=["Enterprise Reporting & Analytics Platform"])


@router.get("/kpis", response_model=ExecutiveKpiResponse)
async def get_executive_kpi_scorecard(
    current_user: dict = Depends(require_permission("devices:read")),
):
    """Retrieve fleet-wide Executive KPI scorecard."""
    res = await analytics_engine.get_executive_kpis()
    return ExecutiveKpiResponse(**res)


@router.get("/capacity", response_model=List[CapacityForecastSchema])
async def get_capacity_forecasts(
    current_user: dict = Depends(require_permission("devices:read")),
):
    """Retrieve capacity growth trends and resource exhaustion forecasts."""
    results = await analytics_engine.get_capacity_forecasts()
    return [CapacityForecastSchema(**c) for c in results]


@router.get("/compliance", response_model=ComplianceScorecardResponse)
async def get_compliance_scorecard(
    current_user: dict = Depends(require_permission("devices:read")),
):
    """Retrieve corporate policy compliance scorecard."""
    res = await analytics_engine.get_compliance_scorecard()
    return ComplianceScorecardResponse(**res)
