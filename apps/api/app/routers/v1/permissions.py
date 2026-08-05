from typing import List
from fastapi import APIRouter
from app.schemas.rbac import PermissionSchema
from app.security.rbac import PERMISSION_REGISTRY

router = APIRouter(prefix="/permissions", tags=["RBAC Roles & Permissions"])


@router.get("", response_model=List[PermissionSchema])
async def list_permission_registry():
    """Query permission registry code definitions and groups."""
    return [
        PermissionSchema(
            id=f"perm-{code}",
            code=code,
            name=meta["name"],
            description=meta["desc"],
            group=meta["group"],
        )
        for code, meta in PERMISSION_REGISTRY.items()
    ]
