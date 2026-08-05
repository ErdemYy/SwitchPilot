from typing import List
from fastapi import APIRouter, Depends
from app.schemas.connection import ConnectionResponse, TestConnectionRequest, TestConnectionResponse
from app.services.connection_manager import connection_manager
from app.security.deps import get_current_organization, require_permission

router = APIRouter(prefix="/connections", tags=["Enterprise Connection Platform"])


@router.get("", response_model=List[ConnectionResponse])
async def list_active_connections(
    org_id: str = Depends(get_current_organization),
    current_user: dict = Depends(require_permission("devices:read")),
):
    """List active connection sessions and parameters."""
    return [
        ConnectionResponse(
            id="conn-101",
            device_id="dev-1",
            protocol="SSH",
            port=22,
            timeout_sec=15,
            retries=3,
            keep_alive=True,
            compression=True,
            status="CONNECTED",
            last_connected_at="2026-08-04T09:00:00Z",
            latency_ms=14,
        )
    ]


@router.post("/test", response_model=TestConnectionResponse)
async def test_connection_workflow(
    payload: TestConnectionRequest,
    current_user: dict = Depends(require_permission("devices:read")),
):
    """Run connection testing workflow without executing hardware commands."""
    res = await connection_manager.test_connection(payload.target_ip, payload.protocol, payload.port)
    return TestConnectionResponse(**res)
