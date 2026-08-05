from fastapi import APIRouter, Depends
from app.schemas.saas import CreateTenantRequest, TenantResponse, ImpersonateCustomerRequest
from app.services.saas_tenant_service import saas_tenant_service
from app.security.deps import require_permission

router = APIRouter(prefix="/saas/tenants", tags=["Enterprise SaaS & MSP Platform"])


@router.post("", response_model=TenantResponse)
async def create_new_tenant(
    payload: CreateTenantRequest,
    current_user: dict = Depends(require_permission("org:write")),
):
    """Create new multi-tenant organization or MSP customer."""
    res = await saas_tenant_service.create_tenant(payload.name, payload.slug, payload.tenant_type)
    return TenantResponse(**res)


@router.post("/impersonate")
async def impersonate_customer_tenant(
    payload: ImpersonateCustomerRequest,
    current_user: dict = Depends(require_permission("org:write")),
):
    """Audited customer impersonation for MSP engineers."""
    return await saas_tenant_service.impersonate_customer(
        current_user.get("sub", "msp-admin"), payload.target_tenant_id
    )
