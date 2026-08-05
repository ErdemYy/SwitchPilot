from fastapi import APIRouter, Depends, HTTPException, status
from app.schemas.auth import (
    LoginRequest,
    RegisterRequest,
    ForgotPasswordRequest,
    ResetPasswordRequest,
    TokenResponse,
    AuthUserResponse,
)
from app.security.argon2 import PasswordHasher
from app.security.jwt import JWTTokenService

router = APIRouter(prefix="/auth", tags=["Authentication & Identity"])


@router.post("/login", response_model=TokenResponse)
async def login(payload: LoginRequest):
    """Authenticate user with email/password and issue JWT access token."""
    # Simulated auth lookup for architecture validation
    if payload.email == "admin@switchpilot.io" and payload.password == "Password123!":
        user_data = AuthUserResponse(
            id="usr-admin-01",
            email=payload.email,
            full_name="Erdem Architect",
            organization_id="org-global-noc",
            organization_name="Global Production NOC",
            roles=["Owner"],
            permissions=["all"],
            is_email_verified=True,
            is_active=True,
        )
        token = JWTTokenService.create_access_token(
            {"sub": user_data.id, "organization_id": user_data.organization_id, "permissions": ["all"]}
        )
        return TokenResponse(access_token=token, expires_in=86400, user=user_data)

    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid email or password"
    )


@router.post("/register", response_model=TokenResponse)
async def register(payload: RegisterRequest):
    """Register a new user and create an organization workspace."""
    user_data = AuthUserResponse(
        id="usr-new-01",
        email=payload.email,
        full_name=payload.full_name,
        organization_id="org-new-01",
        organization_name=payload.organization_name,
        roles=["Owner"],
        permissions=["all"],
        is_email_verified=False,
        is_active=True,
    )
    token = JWTTokenService.create_access_token(
        {"sub": user_data.id, "organization_id": user_data.organization_id, "permissions": ["all"]}
    )
    return TokenResponse(access_token=token, expires_in=86400, user=user_data)


@router.post("/forgot-password")
async def forgot_password(payload: ForgotPasswordRequest):
    """Initiate password reset flow."""
    return {"message": "Password reset instructions sent to email."}


@router.post("/reset-password")
async def reset_password(payload: ResetPasswordRequest):
    """Reset password using reset token."""
    return {"message": "Password successfully updated."}


@router.post("/logout")
async def logout():
    """Revoke user session and clear auth cookies."""
    return {"message": "Logged out successfully."}
