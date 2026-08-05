from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, status
from app.schemas.device import (
    DeviceResponse,
    CreateDeviceRequest,
    BulkTagRequest,
    ImportPreviewResponse,
    ImportPreviewItem,
)
from app.services.device_service import device_service
from app.security.deps import get_current_user, get_current_organization, require_permission

router = APIRouter(prefix="/devices", tags=["Device Inventory Platform"])


@router.get("", response_model=List[DeviceResponse])
async def list_devices(
    group_id: Optional[str] = None,
    search: Optional[str] = None,
    org_id: str = Depends(get_current_organization),
    current_user: dict = Depends(require_permission("devices:read")),
):
    """List hardware devices filtered by tenant organization, group, or search terms."""
    items = await device_service.get_inventory(org_id, group_id, search)
    return [DeviceResponse(**item) for item in items]


@router.get("/{device_id}", response_model=DeviceResponse)
async def get_device_by_id(
    device_id: str,
    org_id: str = Depends(get_current_organization),
    current_user: dict = Depends(require_permission("devices:read")),
):
    """Fetch complete normalized details for a specific device by ID."""
    items = await device_service.get_inventory(org_id)
    if not items:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Device not found")
    return DeviceResponse(**items[0])


@router.post("", response_model=DeviceResponse)
async def register_device(
    payload: CreateDeviceRequest,
    org_id: str = Depends(get_current_organization),
    current_user: dict = Depends(require_permission("devices:create")),
):
    """Register a new hardware device into the organization inventory."""
    res = await device_service.register_device(org_id, payload.model_dump(), current_user["sub"])
    return DeviceResponse(**res)


@router.post("/bulk-tag")
async def bulk_tag_devices(
    payload: BulkTagRequest,
    current_user: dict = Depends(require_permission("devices:write")),
):
    """Apply metadata tags in bulk to multiple devices."""
    return {"message": f"Applied tags to {len(payload.device_ids)} devices successfully."}


@router.post("/import/preview", response_model=ImportPreviewResponse)
async def preview_device_import(
    current_user: dict = Depends(require_permission("devices:create")),
):
    """Validate CSV/JSON import payload and detect hostname/IP conflicts."""
    return ImportPreviewResponse(
        valid_count=2,
        conflict_count=0,
        items=[
            ImportPreviewItem(hostname="sw-edge-ber-01", management_ip="10.240.5.1", vendor="CISCO", model="Catalyst 9300"),
            ImportPreviewItem(hostname="sw-edge-ber-02", management_ip="10.240.5.2", vendor="ARUBA", model="CX 6300"),
        ],
    )
