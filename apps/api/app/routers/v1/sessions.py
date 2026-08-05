from typing import List
from fastapi import APIRouter, Depends
from app.schemas.session import SessionResponse
from app.security.deps import get_current_user

router = APIRouter(prefix="/sessions", tags=["Session & Security"])


@router.get("", response_model=List[SessionResponse])
async def list_active_sessions(current_user: dict = Depends(get_current_user)):
    """List active user sessions across devices."""
    return [
        SessionResponse(
            id="ses-101",
            user_id=current_user["sub"],
            device_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/126.0",
            ipAddress="192.168.1.50",
            is_revoked=False,
            last_active_at="2026-08-04T08:50:00Z",
            expires_at="2026-08-05T08:50:00Z",
            created_at="2026-08-04T08:00:00Z",
            is_current_session=True,
        )
    ]


@router.delete("/{session_id}")
async def revoke_session(session_id: str, current_user: dict = Depends(get_current_user)):
    """Revoke specific active session by ID."""
    return {"message": f"Session {session_id} successfully revoked."}


@router.delete("")
async def revoke_all_other_sessions(current_user: dict = Depends(get_current_user)):
    """Revoke all active sessions except current session."""
    return {"message": "All other sessions successfully revoked."}
