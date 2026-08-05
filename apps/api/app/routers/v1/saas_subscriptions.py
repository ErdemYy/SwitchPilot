from fastapi import APIRouter, Depends
from app.schemas.saas import SubscriptionResponse
from app.services.subscription_quota_service import subscription_quota_service
from app.security.deps import require_permission

router = APIRouter(prefix="/saas/subscriptions", tags=["Enterprise SaaS & MSP Platform"])


@router.post("/{tenant_id}/plan", response_model=SubscriptionResponse)
async def update_subscription_plan(
    tenant_id: str,
    plan: str = "ENTERPRISE",
    current_user: dict = Depends(require_permission("org:write")),
):
    """Upgrade or downgrade tenant subscription plan."""
    res = await subscription_quota_service.update_subscription(tenant_id, plan)
    return SubscriptionResponse(**res)
