from fastapi import APIRouter, Depends
from app.schemas.desktop import SsoAuthRequest, SsoAuthResponse, VerifyTotpRequest
from app.services.enterprise_auth import enterprise_auth_service

router = APIRouter(prefix="/auth/sso", tags=["Enterprise SSO & Desktop Auth"])


@router.post("", response_model=SsoAuthResponse)
async def authenticate_sso(payload: SsoAuthRequest):
    """Authenticate via OIDC, SAML 2.0, Microsoft Entra ID (Azure AD), Google, or GitHub."""
    res = await enterprise_auth_service.authenticate_sso(payload.provider, payload.sso_token, payload.tenant_id)
    return SsoAuthResponse(**res)


@router.post("/mfa/totp")
async def verify_totp_mfa(payload: VerifyTotpRequest):
    """Verify TOTP MFA code for desktop session."""
    return await enterprise_auth_service.verify_totp_mfa("user-001", payload.totp_code)
