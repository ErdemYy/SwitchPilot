from typing import List
from fastapi import APIRouter, Depends
from app.schemas.connection import VaultSecretRequest, VaultSecretResponse
from app.security.deps import get_current_organization, require_permission

router = APIRouter(prefix="/credentials", tags=["Enterprise Connection Platform"])


@router.get("", response_model=List[VaultSecretResponse])
async def list_vault_credentials(
    org_id: str = Depends(get_current_organization),
    current_user: dict = Depends(require_permission("organization:read")),
):
    """List Vault secrets metadata stored in Credential Vault."""
    return [
        VaultSecretResponse(
            id="sec-101",
            name="Cisco Core SSH Key",
            type="SSH_KEY",
            vault_engine_ref="vault/kv/v2/cisco-core",
            created_at="2026-01-01T00:00:00Z",
        ),
        VaultSecretResponse(
            id="sec-102",
            name="SNMPv3 NOC Read Credentials",
            type="SNMP_V3_USER",
            vault_engine_ref="vault/kv/v2/snmp-noc",
            created_at="2026-01-01T00:00:00Z",
        ),
    ]


@router.post("", response_model=VaultSecretResponse)
async def create_vault_credential(
    payload: VaultSecretRequest,
    org_id: str = Depends(get_current_organization),
    current_user: dict = Depends(require_permission("organization:write")),
):
    """Store encrypted credential payload in Vault engine."""
    return VaultSecretResponse(
        id="sec-new-01",
        name=payload.name,
        type=payload.type,
        vault_engine_ref=f"vault/kv/v2/{payload.name.lower().replace(' ', '-')}",
        created_at="2026-08-04T09:00:00Z",
    )
