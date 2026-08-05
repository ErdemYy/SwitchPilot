from typing import List, Optional, Dict, Any
from pydantic import BaseModel


class PreflightRequest(BaseModel):
    deployment_model: str = "HIGH_AVAILABILITY"


class PreflightResponse(BaseModel):
    timestamp: str
    deployment_model: str
    overall_status: str
    checks: List[Dict[str, Any]]


class AirgappedValidateRequest(BaseModel):
    package_id: str


class AirgappedValidateResponse(BaseModel):
    package_id: str
    status: str
    version: str
    signature_valid: bool
    images_count: int
    plugins_count: int
    size_bytes: int


class BackupTriggerRequest(BaseModel):
    backup_type: str = "FULL"


class BackupTriggerResponse(BaseModel):
    id: str
    type: str
    status: str
    size_mb: float
    checksum: str
    encrypted: bool
    created_at: str
