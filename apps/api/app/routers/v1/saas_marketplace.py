from typing import List
from fastapi import APIRouter, Depends
from app.schemas.saas import PluginResponse
from app.services.marketplace_service import marketplace_service
from app.security.deps import require_permission

router = APIRouter(prefix="/saas/marketplace", tags=["Enterprise SaaS & MSP Platform"])


@router.get("/plugins", response_model=List[PluginResponse])
async def list_marketplace_plugins(
    current_user: dict = Depends(require_permission("devices:read")),
):
    """List available plugins in Marketplace Store."""
    plugins = await marketplace_service.list_plugins()
    return [PluginResponse(**p) for p in plugins]


@router.post("/install")
async def install_marketplace_plugin(
    plugin_code: str,
    tenant_id: str,
    current_user: dict = Depends(require_permission("org:write")),
):
    """Install plugin into tenant workspace with sandboxing."""
    return await marketplace_service.install_plugin(plugin_code, tenant_id)
