from typing import List
from fastapi import APIRouter, Depends
from app.schemas.device import DeviceGroupTreeNode
from app.services.device_service import device_service
from app.security.deps import get_current_organization, require_permission

router = APIRouter(prefix="/device-groups", tags=["Device Inventory Platform"])


@router.get("/tree", response_model=List[DeviceGroupTreeNode])
async def get_device_group_tree(
    org_id: str = Depends(get_current_organization),
    current_user: dict = Depends(require_permission("devices:read")),
):
    """Fetch full hierarchical device group tree structure."""
    nodes = await device_service.get_group_tree(org_id)
    return [DeviceGroupTreeNode(**node) for node in nodes]
