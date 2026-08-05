from typing import Optional
from pydantic import BaseModel


class SecurityPolicySchema(BaseModel):
    min_password_length: int = 12
    require_uppercase: bool = True
    require_numbers: bool = True
    require_special_chars: bool = True
    session_max_duration_min: int = 1440
    idle_timeout_min: int = 60
    enforce_mfa: bool = False


class OrganizationResponse(BaseModel):
    id: str
    name: str
    slug: str
    logo_url: Optional[str] = None
    timezone: str = "UTC"
    language: str = "en"
    security_policy: Optional[SecurityPolicySchema] = None
    created_at: str


class UpdateOrganizationRequest(BaseModel):
    name: Optional[str] = None
    logo_url: Optional[str] = None
    timezone: Optional[str] = None
    language: Optional[str] = None
    security_policy: Optional[SecurityPolicySchema] = None
