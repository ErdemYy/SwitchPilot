from fastapi import APIRouter, Depends
from app.schemas.desktop import SyncPushRequest, SyncResponse
from app.services.sync_engine import sync_engine_service
from app.security.deps import require_permission

router = APIRouter(prefix="/sync", tags=["Enterprise Desktop Sync Engine"])


@router.post("/push", response_model=SyncResponse)
async def push_sync_changes(
    payload: SyncPushRequest,
    current_user: dict = Depends(require_permission("devices:write")),
):
    """Execute incremental sync between local Encrypted SQLite and Cloud Backend."""
    res = await sync_engine_service.execute_incremental_sync(
        payload.device_id, payload.local_checksum, payload.cloud_checksum
    )
    return SyncResponse(**res)
