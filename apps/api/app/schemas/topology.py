from typing import List, Optional, Dict, Any
from pydantic import BaseModel


class StartDiscoveryRequest(BaseModel):
    name: str
    seed_ips: List[str]
    scan_subnets: List[str] = ["10.10.0.0/24"]


class DiscoveryJobResponse(BaseModel):
    job_id: str
    name: str
    status: str
    discovered_count: int
    discovered_neighbors: List[Dict[str, Any]] = []


class TopologyNodeSchema(BaseModel):
    id: str
    deviceId: str
    label: str
    role: str
    layer: str
    posX: float
    posY: float
    isSpof: bool


class TopologyLinkSchema(BaseModel):
    id: str
    sourceNodeId: str
    targetNodeId: str
    linkType: str
    protocol: str
    bandwidth: str
    status: str
    isRedundant: bool


class TopologyGraphResponse(BaseModel):
    layer: str
    layout: str
    nodes: List[TopologyNodeSchema]
    links: List[TopologyLinkSchema]


class DependencyResponse(BaseModel):
    dependencies: List[Dict[str, Any]]
    single_points_of_failure: List[str]
    total_failure_domains: int
