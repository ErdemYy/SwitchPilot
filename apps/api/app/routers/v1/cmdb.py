from typing import List
from fastapi import APIRouter, Depends
from app.schemas.cmdb import ServiceMappingResponse, TopologySnapshotResponse, DeadLetterItemResponse
from app.services.cmdb_service import cmdb_service
from app.services.topology_versioning import topology_versioning
from app.services.notification_queue import notification_queue
from app.security.deps import require_permission

router = APIRouter(prefix="/cmdb", tags=["Enterprise Architecture Hardening"])


@router.get("/service-mapping/{service_id}", response_model=ServiceMappingResponse)
async def get_service_mapping(
    service_id: str,
    current_user: dict = Depends(require_permission("devices:read")),
):
    """Retrieve CMDB full dependency hierarchy mapping (App -> Service -> Rack -> Switch -> VM -> User)."""
    res = await cmdb_service.get_service_mapping(service_id)
    return ServiceMappingResponse(**res)


@router.post("/snapshots", response_model=TopologySnapshotResponse)
async def create_topology_snapshot(
    version_label: str = "v1.2.0-baseline",
    current_user: dict = Depends(require_permission("devices:write")),
):
    """Create persistent historical topology snapshot."""
    res = await topology_versioning.create_topology_snapshot(version_label, current_user.get("sub", "admin"))
    return TopologySnapshotResponse(**res)


@router.get("/dlq", response_model=List[DeadLetterItemResponse])
async def get_notification_dlq(
    current_user: dict = Depends(require_permission("devices:read")),
):
    """Retrieve Dead Letter Queue (DLQ) failed notification deliveries."""
    results = await notification_queue.get_dead_letter_items()
    return [DeadLetterItemResponse(**d) for d in results]
