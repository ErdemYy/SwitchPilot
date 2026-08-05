from fastapi import APIRouter, Depends
from app.schemas.topology import StartDiscoveryRequest, DiscoveryJobResponse
from app.services.discovery_engine import discovery_engine
from app.security.deps import require_permission

router = APIRouter(prefix="/discovery", tags=["Enterprise Network Discovery & Topology Platform"])


@router.post("/jobs", response_model=DiscoveryJobResponse)
async def trigger_discovery_job(
    payload: StartDiscoveryRequest,
    current_user: dict = Depends(require_permission("devices:write")),
):
    """Trigger seed-based network scan & neighbor discovery pipeline."""
    res = await discovery_engine.start_discovery_job(
        payload.name, payload.seed_ips, payload.scan_subnets
    )
    return DiscoveryJobResponse(**res)
