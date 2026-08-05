from typing import List
from fastapi import APIRouter, Depends
from app.schemas.backup import (
    SnapshotResponse,
    ConfigVersionResponse,
    RollbackPreviewRequest,
    RollbackPreviewResponse,
)
from app.services.snapshot_service import snapshot_service
from app.services.version_manager import version_manager
from app.services.rollback_engine import rollback_engine
from app.security.deps import get_current_organization, require_permission

router = APIRouter(prefix="/backups", tags=["Configuration Backup & Rollback Engine"])


@router.get("/snapshots", response_model=List[SnapshotResponse])
async def list_snapshots(
    device_id: str = "dev-1",
    current_user: dict = Depends(require_permission("configs:read")),
):
    """List snapshots for a hardware device."""
    return [
        SnapshotResponse(
            id="snap-101",
            device_id=device_id,
            type="GOLDEN_CONFIG",
            raw_config="! Golden Configuration Baseline\nhostname sw-core-fra-01\n",
            checksum_sha="sha256:8f9a2b0c1d...",
            version_label="Golden Baseline v1.0",
            created_at="2026-01-01T00:00:00Z",
        )
    ]


@router.get("/versions", response_model=List[ConfigVersionResponse])
async def list_versions(
    device_id: str = "dev-1",
    current_user: dict = Depends(require_permission("configs:read")),
):
    """List immutable configuration versions and branches."""
    return [
        ConfigVersionResponse(
            id="v-1.0.42",
            device_id=device_id,
            parent_ver_id="v-1.0.41",
            branch="main",
            author="Senior Network Engineer",
            checksum_sha="sha256:8f9a2b0c1d...",
            raw_config="! Configuration Version 42\nhostname sw-core-fra-01\n",
            change_summary="Provisioned VLAN 100 on Gi1/0/1",
            risk_level="SAFE",
            created_at="2026-08-04T09:00:00Z",
        )
    ]


@router.post("/rollback/preview", response_model=RollbackPreviewResponse)
async def preview_rollback(
    payload: RollbackPreviewRequest,
    current_user: dict = Depends(require_permission("configs:read")),
):
    """Preview rollback diff and pre-rollback safety checks."""
    res = await rollback_engine.preview_rollback(
        payload.device_id, payload.current_version_id, payload.target_version_id, payload.selective_mode
    )
    return RollbackPreviewResponse(**res)
