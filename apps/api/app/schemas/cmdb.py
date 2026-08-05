from typing import List, Optional, Dict, Any
from pydantic import BaseModel


class ServiceMappingResponse(BaseModel):
    service_id: str
    service_name: str
    app_name: str
    criticality: str
    owner_user: str
    hierarchy: Dict[str, Any]


class TopologySnapshotResponse(BaseModel):
    snapshot_id: str
    version_label: str
    node_count: int
    link_count: int
    created_by: str
    created_at: str


class DeadLetterItemResponse(BaseModel):
    id: str
    channel: str
    title: str
    message: str
    retry_count: int
    is_dead_letter: bool
    created_at: str


class FleetKpiResponse(BaseModel):
    availability_score_pct: float
    network_health_score_pct: float
    automation_change_rate_pct: float
    compliance_score_pct: float
    risk_index_score: int
    mttr_minutes: float
    mttd_minutes: float
