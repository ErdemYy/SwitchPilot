from fastapi import APIRouter, Depends
from app.schemas.saas import InvoiceResponse
from app.services.licensing_billing_service import licensing_billing_service
from app.security.deps import require_permission

router = APIRouter(prefix="/saas/billing", tags=["Enterprise SaaS & MSP Platform"])


@router.get("/invoices/{tenant_id}", response_model=InvoiceResponse)
async def get_usage_billing_invoice(
    tenant_id: str,
    current_user: dict = Depends(require_permission("org:read")),
):
    """Retrieve usage consumption invoice & line items."""
    res = await licensing_billing_service.generate_usage_billing(tenant_id)
    return InvoiceResponse(**res)
