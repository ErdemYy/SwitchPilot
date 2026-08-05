from typing import List
from fastapi import APIRouter, Depends
from app.schemas.rbac import RoleResponse, CreateRoleRequest, PermissionSchema
from app.security.deps import get_current_organization, require_permission
from app.security.rbac import PERMISSION_REGISTRY

router = APIRouter(prefix="/roles", tags=["RBAC Roles & Permissions"])


@router.get("", response_model=List[RoleResponse])
async def list_roles(org_id: str = Depends(get_current_organization)):
    """List system default and custom organization roles."""
    sample_perms = [
        PermissionSchema(
            id=f"perm-{code}",
            code=code,
            name=meta["name"],
            description=meta["desc"],
            group=meta["group"],
        )
        for code, meta in list(PERMISSION_REGISTRY.items())[:5]
    ]

    return [
        RoleResponse(
            id="role-owner-01",
            name="Owner",
            description="Full organization super-admin privileges",
            is_system_default=True,
            organization_id=org_id,
            permissions=sample_perms,
            created_at="2026-01-01T00:00:00Z",
        ),
        RoleResponse(
            id="role-eng-02",
            name="Network Engineer",
            description="Network device configuration and automation permissions",
            is_system_default=True,
            organization_id=org_id,
            permissions=sample_perms[:3],
            created_at="2026-01-01T00:00:00Z",
        ),
    ]


@router.post("", response_model=RoleResponse)
async def create_custom_role(
    payload: CreateRoleRequest,
    current_user: dict = Depends(require_permission("roles:manage")),
):
    """Create a new custom organization role with selected permissions."""
    return RoleResponse(
        id="role-custom-99",
        name=payload.name,
        description=payload.description,
        is_system_default=False,
        organization_id=current_user["organization_id"],
        permissions=[],
        created_at="2026-08-04T00:00:00Z",
    )
