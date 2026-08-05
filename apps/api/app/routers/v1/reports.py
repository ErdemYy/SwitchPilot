from fastapi import APIRouter, Depends
from app.schemas.analytics import (
    GenerateReportRequest,
    ReportArtifactResponse,
    CreateScheduleRequest,
    ReportScheduleResponse,
)
from app.services.reporting_service import reporting_service
from app.security.deps import require_permission

router = APIRouter(prefix="/reports", tags=["Enterprise Reporting & Analytics Platform"])


@router.post("/generate", response_model=ReportArtifactResponse)
async def generate_report_artifact(
    payload: GenerateReportRequest,
    current_user: dict = Depends(require_permission("configs:write")),
):
    """Generate on-demand report artifact in PDF, Excel, CSV, or JSON format."""
    res = await reporting_service.generate_report(payload.report_type, payload.export_format)
    return ReportArtifactResponse(**res)


@router.post("/schedules", response_model=ReportScheduleResponse)
async def create_report_schedule(
    payload: CreateScheduleRequest,
    current_user: dict = Depends(require_permission("configs:write")),
):
    """Schedule recurring automated report generation & email dispatch."""
    res = await reporting_service.create_report_schedule(
        payload.report_type, payload.frequency, payload.recipients, payload.format
    )
    return ReportScheduleResponse(**res)
