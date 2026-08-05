from typing import List, Optional, Dict, Any
from pydantic import BaseModel


class SsoAuthRequest(BaseModel):
    provider: str = "AZURE_AD"
    sso_token: str
    tenant_id: str = "tenant-001"


class SsoAuthResponse(BaseModel):
    session_id: str
    provider: str
    access_token: str
    refresh_token: str
    is_offline_cached: bool
    mfa_verified: bool
    expires_at: str


class VerifyTotpRequest(BaseModel):
    totp_code: str


class SyncPushRequest(BaseModel):
    device_id: str
    local_checksum: str
    cloud_checksum: str


class SyncResponse(BaseModel):
    sync_id: str
    status: str
    items_synced: Optional[int] = 0
    checksum_matched: Optional[bool] = True
    action_required: Optional[str] = None


class UpdaterCheckResponse(BaseModel):
    version: str
    releaseNotes: str
    pub_date: str
    signature: str
    platforms: Dict[str, Any]
