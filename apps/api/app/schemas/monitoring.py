from typing import List, Optional, Dict, Any
from pydantic import BaseModel


class DeviceMetricResponse(BaseModel):
    device_id: str
    metric_type: str
    value: float
    unit: str


class AlertResponse(BaseModel):
    id: str
    device_id: str
    type: str
    severity: str
    status: str
    title: str
    description: str


class AlertAckRequest(BaseModel):
    user_id: str


class CollectorResponse(BaseModel):
    id: str
    source: str
    status: str
    devices_monitored: int
    last_poll_at: Optional[str] = None


class CorrelationGroupResponse(BaseModel):
    group_id: str
    root_cause_alert_id: str
    correlated_alert_ids: List[str]
    strategy: str
    confidence: float


class EventTimelineItem(BaseModel):
    event_name: str
    category: str
    timestamp: str
    payload: Dict[str, Any]
