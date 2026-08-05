from typing import Optional
from pydantic import BaseModel


class SessionResponse(BaseModel):
    id: str
    user_id: str
    device_agent: Optional[str] = None
    ip_address: Optional[str] = None
    is_revoked: bool
    last_active_at: str
    expires_at: str
    created_at: str
    is_current_session: Optional[bool] = False
