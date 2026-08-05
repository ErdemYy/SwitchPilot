from fastapi import APIRouter, Depends
from app.schemas.saas import LicenseResponse
from app.services.licensing_billing_service import licensing_billing_service
from app.security.deps import require_permission

router = APIRouter(prefix="/saas/licenses", tags=["Enterprise SaaS & MSP Platform"])


@router.post("/activate", response_model=LicenseResponse)
async def activate_license_key(
    key_string: str,
    tenant_id: str,
    current_user: dict = Depends(require_permission("org:write")),
):
    """Activate cloud, offline, floating, or trial license key."""
    res = await licensing_billing_service.activate_license(key_string, tenant_id)
    return LicenseResponse(**res)
