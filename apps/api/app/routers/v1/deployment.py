from fastapi import APIRouter, Depends
from app.schemas.deployment import (
    PreflightRequest,
    PreflightResponse,
    AirgappedValidateRequest,
    AirgappedValidateResponse,
    BackupTriggerRequest,
    BackupTriggerResponse,
)
from app.services.deployment_manager_service import deployment_manager_service
from app.security.deps import require_permission

router = APIRouter(prefix="/deployment", tags=["Enterprise Deployment & Infrastructure Manager"])


@router.post("/preflight", response_model=PreflightResponse)
async def run_preflight_checks(payload: PreflightRequest):
    """Run pre-flight environment checks across CPU, RAM, Disk, Ports, TLS, Docker, and Kubernetes."""
    res = await deployment_manager_service.run_preflight_checks(payload.deployment_model)
    return PreflightResponse(**res)


@router.post("/airgapped/validate", response_model=AirgappedValidateResponse)
async def validate_airgapped_package(payload: AirgappedValidateRequest):
    """Validate offline air-gapped tarball package manifest and digital signature."""
    res = await deployment_manager_service.validate_airgapped_package(payload.package_id)
    return AirgappedValidateResponse(**res)


@router.post("/backup", response_model=BackupTriggerResponse)
async def trigger_platform_backup(
    payload: BackupTriggerRequest,
    current_user: dict = Depends(require_permission("org:admin")),
):
    """Trigger full or incremental platform backup."""
    res = await deployment_manager_service.trigger_platform_backup(payload.backup_type)
    return BackupTriggerResponse(**res)
