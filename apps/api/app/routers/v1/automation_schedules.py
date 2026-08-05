from fastapi import APIRouter, Depends
from app.schemas.automation import ScheduleResponse, MaintenanceWindowResponse
from app.services.scheduler_service import scheduler_service
from app.security.deps import get_current_organization, require_permission

router = APIRouter(prefix="/automation/schedules", tags=["Enterprise Automation Platform"])


@router.post("", response_model=ScheduleResponse)
async def create_schedule(
    workflow_id: str,
    cron_expression: str = "0 2 * * *",
    current_user: dict = Depends(require_permission("configs:write")),
):
    """Schedule cron or periodic workflow execution."""
    res = await scheduler_service.schedule_job(workflow_id, cron_expression)
    return ScheduleResponse(
        id=res["schedule_id"],
        workflow_id=workflow_id,
        cron_expression=res["cron_expression"],
        is_active=res["is_active"],
        next_run_at=res["next_run_at"],
    )


@router.get("/maintenance-window", response_model=MaintenanceWindowResponse)
async def get_maintenance_window_status(
    org_id: str = Depends(get_current_organization),
    current_user: dict = Depends(require_permission("configs:read")),
):
    """Check whether current time is within an approved Maintenance Window."""
    res = await scheduler_service.check_maintenance_window(org_id)
    return MaintenanceWindowResponse(**res)
