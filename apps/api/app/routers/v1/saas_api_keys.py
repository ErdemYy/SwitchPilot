from fastapi import APIRouter, Depends
from app.schemas.saas import ApiKeyRequest, ApiKeyResponse
from app.services.api_platform_service import api_platform_service
from app.security.deps import require_permission

router = APIRouter(prefix="/saas/api-keys", tags=["Enterprise SaaS & MSP Platform"])


@router.post("", response_model=ApiKeyResponse)
async def generate_api_key(
    payload: ApiKeyRequest,
    tenant_id: str = "tenant-001",
    current_user: dict = Depends(require_permission("org:write")),
):
    """Generate scoped API key for developer platform & integrations."""
    res = await api_platform_service.generate_api_key(payload.name, tenant_id, payload.scopes)
    return ApiKeyResponse(**res)
