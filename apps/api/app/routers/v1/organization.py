from fastapi import APIRouter, Depends
from app.schemas.organization import OrganizationResponse, UpdateOrganizationRequest, SecurityPolicySchema
from app.security.deps import get_current_organization, require_permission

router = APIRouter(prefix="/organizations", tags=["Organization SaaS Multi-Tenancy"])


@router.get("/current", response_model=OrganizationResponse)
async def get_current_organization_details(
    org_id: str = Depends(get_current_organization),
):
    """Fetch current organization details and security policies."""
    return OrganizationResponse(
        id=org_id,
        name="Global Production NOC",
        slug="global-noc",
        timezone="UTC",
        language="en",
        security_policy=SecurityPolicySchema(),
        created_at="2026-01-01T00:00:00Z",
    )


@router.patch("/current", response_model=OrganizationResponse)
async def update_current_organization(
    payload: UpdateOrganizationRequest,
    current_user: dict = Depends(require_permission("organization:write")),
):
    """Update organization settings and security policies."""
    return OrganizationResponse(
        id=current_user["organization_id"],
        name=payload.name or "Global Production NOC",
        slug="global-noc",
        timezone=payload.timezone or "UTC",
        language=payload.language or "en",
        security_policy=payload.security_policy or SecurityPolicySchema(),
        created_at="2026-01-01T00:00:00Z",
    )
