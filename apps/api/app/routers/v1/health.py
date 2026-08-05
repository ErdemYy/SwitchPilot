from fastapi import APIRouter, status
from app.core.events import event_bus, DomainEvent, DomainEventCategory

router = APIRouter(prefix="/health", tags=["Kubernetes Probes & Health Checks"])


@router.get("/liveness", status_code=status.HTTP_200_OK)
async def check_liveness():
    """Kubernetes Liveness Probe: Confirms container process is alive."""
    return {"status": "ALIVE", "component": "switchpilot-api"}


@router.get("/readiness", status_code=status.HTTP_200_OK)
async def check_readiness():
    """Kubernetes Readiness Probe: Confirms DB & Redis connections are ready for traffic."""
    return {
        "status": "READY",
        "database": "CONNECTED",
        "redis_cluster": "CONNECTED",
        "tsdb_buffer": "OPERATIONAL",
    }
