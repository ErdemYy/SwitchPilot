from typing import List, Optional, Dict, Any
from pydantic import BaseModel


class TemplateResponse(BaseModel):
    code: str
    name: str
    category: str
    desc: str


class WorkflowNodeSchema(BaseModel):
    id: str
    type: str
    name: str
    config: Dict[str, Any] = {}
    next_nodes: List[str] = []


class CreateWorkflowRequest(BaseModel):
    name: str
    nodes: List[WorkflowNodeSchema]
    target_filter: Dict[str, Any] = {}
    is_canary_active: bool = False


class WorkflowResponse(BaseModel):
    id: str
    name: str
    is_canary_active: bool
    status: str = "IDLE"
    created_at: str


class ScheduleResponse(BaseModel):
    id: str
    workflow_id: str
    cron_expression: str
    is_active: bool
    next_run_at: str


class MaintenanceWindowResponse(BaseModel):
    in_maintenance_window: bool
    window_name: str
    is_freeze_window: bool
