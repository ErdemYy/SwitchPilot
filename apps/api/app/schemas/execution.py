from typing import List, Optional, Dict, Any
from pydantic import BaseModel


class CreateExecutionRequest(BaseModel):
    mode: str = "IMMEDIATE"
    target_devices: List[str]
    ccm_payload: Dict[str, Any]


class ExecutionStepResponse(BaseModel):
    id: str
    step_name: str
    status: str
    command_text: Optional[str] = None
    output_log: Optional[str] = None


class ExecutionPlanResponse(BaseModel):
    id: str
    organization_id: str
    mode: str
    status: str
    risk_level: str = "SAFE"
    target_devices: List[str]
    driver_used: str = "Scrapli"
    steps: List[ExecutionStepResponse] = []
    started_at: Optional[str] = None
    completed_at: Optional[str] = None
    failure_reason: Optional[str] = None


class VerificationReportResponse(BaseModel):
    is_verified: bool
    target_host: str
    running_config_hash: str
    startup_config_hash: str
    diff_matched: bool
    verification_summary: str
