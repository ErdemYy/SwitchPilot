from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from app.security.jwt import JWTTokenService
from app.security.rbac import RBACPermissionEngine

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/auth/login")


async def get_current_user(token: str = Depends(oauth2_scheme)) -> dict:
    """FastAPI Dependency extracting authenticated user payload from JWT token."""
    payload = JWTTokenService.decode_token(token)
    if not payload or payload.get("type") != "access":
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or expired access token",
            headers={"WWW-Authenticate": "Bearer"},
        )
    return payload


async def get_current_organization(
    current_user: dict = Depends(get_current_user),
) -> str:
    """FastAPI Dependency retrieving active organization ID for multi-tenant isolation."""
    org_id = current_user.get("organization_id")
    if not org_id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="User does not belong to a valid organization",
        )
    return org_id


def require_permission(permission_code: str):
    """FastAPI Guard decorator verifying user possesses the required permission code."""

    async def permission_checker(current_user: dict = Depends(get_current_user)):
        user_permissions = set(current_user.get("permissions", []))
        if not RBACPermissionEngine.has_permission(
            user_permissions, permission_code
        ):
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail=f"Permission denied. Required permission: '{permission_code}'",
            )
        return current_user

    return permission_checker
