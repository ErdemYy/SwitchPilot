from fastapi import APIRouter, Depends
from app.schemas.electron import DesktopSyncPushPayload, DesktopSyncPushResult
from app.services.desktop_sync_service import desktop_sync_service
from app.security.deps import require_permission

router = APIRouter(prefix="/desktop/sync", tags=["Electron Desktop Sync Engine"])


@router.post("/push", response_model=DesktopSyncPushResult)
async def push_desktop_offline_queue(
    payload: DesktopSyncPushPayload,
    current_user: dict = Depends(require_permission("devices:write")),
):
    """Sync queued offline change requests from Electron/Tauri local database to cloud backend."""
    res = await desktop_sync_service.sync_offline_queue(payload.tenant_id, payload.queued_changes)
    return DesktopSyncPushResult(**res)
