from typing import List, Optional, Dict, Any
from pydantic import BaseModel


class VlanSchema(BaseModel):
    id: int
    name: str
    description: Optional[str] = None


class InterfaceSchema(BaseModel):
    name: str
    mode: str = "ACCESS"
    vlan_id: Optional[int] = None
    native_vlan_id: Optional[int] = None
    allowed_vlans: Optional[str] = None
    description: Optional[str] = None


class CanonicalConfigSchema(BaseModel):
    hostname: Optional[str] = None
    vlans: List[VlanSchema] = []
    interfaces: List[InterfaceSchema] = []


class TranslateRequest(BaseModel):
    vendor: str = "CISCO"
    ccm: CanonicalConfigSchema


class TranslationResponse(BaseModel):
    vendor: str
    format: str = "CLI"
    generated_commands: List[str]
    command_text: str


class ValidationResponse(BaseModel):
    valid: bool
    business_errors: List[str]
    policy_violations: List[str]


class DiffRequest(BaseModel):
    current_config: str
    desired_config: str


class DiffResponse(BaseModel):
    unified_diff: str
    current_lines: List[str]
    desired_lines: List[str]


class RiskAnalysisResponse(BaseModel):
    level: str
    score: int
    affected_interfaces: List[str]
    estimated_downtime_sec: int
    rollback_available: bool
    reasons: List[str]
