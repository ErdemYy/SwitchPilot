from typing import List, Dict, Any
from fastapi import APIRouter, Depends
from app.schemas.topology import TopologyGraphResponse, DependencyResponse
from app.services.topology_engine import topology_engine
from app.services.dependency_engine import dependency_engine
from app.security.deps import require_permission

router = APIRouter(prefix="/topology", tags=["Enterprise Network Discovery & Topology Platform"])


@router.get("/graph", response_model=TopologyGraphResponse)
async def get_topology_graph(
    layer: str = "LAYER_2",
    current_user: dict = Depends(require_permission("devices:read")),
):
    """Retrieve multi-layer topology graph (Layer 1/2/3)."""
    res = await topology_engine.get_topology_graph(layer)
    return TopologyGraphResponse(**res)


@router.get("/dependencies", response_model=DependencyResponse)
async def get_device_dependencies(
    current_user: dict = Depends(require_permission("devices:read")),
):
    """Calculate dependencies, single points of failure (SPOFs), and blast radius."""
    res = await dependency_engine.calculate_dependencies()
    return DependencyResponse(**res)


@router.post("/layout")
async def save_topology_layout(
    positions: List[Dict[str, Any]],
    current_user: dict = Depends(require_permission("devices:write")),
):
    """Save persistent node layout positions."""
    await topology_engine.save_layout(positions)
    return {"status": "SUCCESS", "saved_count": len(positions)}
