from typing import List, Optional, Dict, Any
from pydantic import BaseModel


class CreateTenantRequest(BaseModel):
    name: str
    slug: str
    tenant_type: str = "ENTERPRISE_TENANT"


class TenantResponse(BaseModel):
    tenant_id: str
    name: str
    slug: str
    tenant_type: str
    created_at: str


class ImpersonateCustomerRequest(BaseModel):
    target_tenant_id: str


class SubscriptionResponse(BaseModel):
    tenant_id: str
    plan: str
    device_limit: int
    status: str


class LicenseResponse(BaseModel):
    license_id: str
    key_string: str
    type: str
    max_devices: int
    is_activated: bool
    grace_days: int
    expires_at: str


class ApiKeyRequest(BaseModel):
    name: str
    scopes: List[str] = ["read", "write"]


class ApiKeyResponse(BaseModel):
    key_id: str
    name: str
    prefix: str
    raw_key: str
    scopes: List[str]
    rate_limit_per_min: int
    created_at: str


class PluginResponse(BaseModel):
    code: str
    name: str
    category: str
    author: str
    rating: float
    is_installed: bool


class InvoiceResponse(BaseModel):
    invoice_number: str
    tenant_id: str
    amount_usd: float
    status: str
    line_items: List[Dict[str, Any]]
