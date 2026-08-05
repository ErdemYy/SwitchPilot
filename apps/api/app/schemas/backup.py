from typing import List, Optional, Dict, Any
from pydantic import BaseModel


class SnapshotResponse(BaseModel):
    id: str
    device_id: str
    type: str
    raw_config: str
    checksum_sha: str
    version_label: str
    created_at: str


class ConfigVersionResponse(BaseModel):
    id: str
    device_id: str
    parent_ver_id: Optional[str] = None
    branch: str
    author: str
    checksum_sha: str
    raw_config: str
    change_summary: Optional[str] = None
    risk_level: str
    created_at: str


class RollbackPreviewRequest(BaseModel):
    device_id: str
    current_version_id: str
    target_version_id: str
    selective_mode: str = "FULL"


class SafetyCheckItem(BaseModel):
    name: str
    status: str


class RollbackPreviewResponse(BaseModel):
    device_id: str
    current_version_id: str
    target_version_id: str
    selective_mode: str
    unified_diff: str
    is_safety_validated: bool
    safety_checks: List[SafetyCheckItem]


class CreateChangeRequestPayload(BaseModel):
    title: str
    description: str
    category: str = "STANDARD"
    target_devices: List[str]


class ChangeApprovalStepResponse(BaseModel):
    id: str
    step_name: str
    approver_name: str
    is_approved: bool
    comments: Optional[str] = None


class ChangeRequestResponse(BaseModel):
    id: str
    organization_id: str
    requester_name: str
    title: str
    description: str
    category: str
    status: str
    target_devices: List[str]
    approvals: List[ChangeApprovalStepResponse]
    created_at: str
