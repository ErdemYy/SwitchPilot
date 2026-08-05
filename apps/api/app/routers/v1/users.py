from fastapi import APIRouter, Depends
from app.schemas.auth import AuthUserResponse
from app.security.deps import get_current_user

router = APIRouter(prefix="/users", tags=["Users & Identity"])


@router.get("/me", response_model=AuthUserResponse)
async def get_my_profile(current_user: dict = Depends(get_current_user)):
    """Retrieve authenticated user profile and roles."""
    return AuthUserResponse(
        id=current_user["sub"],
        email="admin@switchpilot.io",
        full_name="Erdem Architect",
        organization_id=current_user["organization_id"],
        organization_name="Global Production NOC",
        roles=["Owner"],
        permissions=["all"],
        is_email_verified=True,
        is_active=True,
    )
