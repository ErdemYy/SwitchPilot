from typing import List, Optional
from pydantic import BaseModel


class PermissionSchema(BaseModel):
    id: str
    code: str
    name: str
    description: str
    group: str


class RoleResponse(BaseModel):
    id: str
    name: str
    description: Optional[str] = None
    is_system_default: bool
    organization_id: str
    permissions: List[PermissionSchema]
    created_at: str


class CreateRoleRequest(BaseModel):
    name: str
    description: Optional[str] = None
    permission_ids: List[str]
