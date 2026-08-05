from typing import List
from fastapi import APIRouter, Depends
from app.schemas.backup import CreateChangeRequestPayload, ChangeRequestResponse
from app.services.change_management import change_management
from app.security.deps import get_current_organization, require_permission

router = APIRouter(prefix="/change-requests", tags=["Change Management Engine"])


@router.post("", response_model=ChangeRequestResponse)
async def create_change_request(
    payload: CreateChangeRequestPayload,
    org_id: str = Depends(get_current_organization),
    current_user: dict = Depends(require_permission("configs:write")),
):
    """Submit a multi-level Change Request into the Approval Workflow."""
    res = await change_management.create_change_request(org_id, current_user["sub"], payload.model_dump())
    return ChangeRequestResponse(**res)


@router.get("", response_model=List[ChangeRequestResponse])
async def list_change_requests(
    org_id: str = Depends(get_current_organization),
    current_user: dict = Depends(require_permission("configs:read")),
):
    """List pending and approved Change Requests."""
    res = await change_management.create_change_request(org_id, current_user["sub"], {})
    return [ChangeRequestResponse(**res)]
