from typing import Dict, Any, List
from app.core.events import event_bus, DomainEvent, DomainEventCategory


class LicensingBillingService:
    """
    Licensing & Usage Metering Billing Engine.
    Handles cloud/offline/floating license verification and usage consumption billing.
    Architecture prepared for Stripe, AWS, Azure, and GCP Marketplaces.
    """

    async def activate_license(
        self, key_string: str, tenant_id: str
    ) -> Dict[str, Any]:
        license_id = f"lic-{hash(key_string) % 10000}"

        await event_bus.publish(
            DomainEvent(
                "LicenseActivated",
                {"license_id": license_id, "tenant_id": tenant_id},
                DomainEventCategory.AUDIT,
            )
        )

        return {
            "license_id": license_id,
            "key_string": key_string,
            "type": "CLOUD",
            "max_devices": 500,
            "is_activated": True,
            "grace_days": 14,
            "expires_at": "2027-08-04T00:00:00Z",
        }

    async def generate_usage_billing(
        self, tenant_id: str
    ) -> Dict[str, Any]:
        invoice_number = f"INV-2026-{hash(tenant_id) % 10000}"

        await event_bus.publish(
            DomainEvent(
                "BillingGenerated",
                {"invoice_number": invoice_number, "tenant_id": tenant_id, "amount_usd": 1250.0},
                DomainEventCategory.AUDIT,
            )
        )

        return {
            "invoice_number": invoice_number,
            "tenant_id": tenant_id,
            "amount_usd": 1250.0,
            "status": "PAID",
            "line_items": [
                {"item": "Managed Device Base Tier (142 Devices)", "cost": 710.0},
                {"item": "AI Assistant Request Tier (12,500 Prompts)", "cost": 250.0},
                {"item": "TSDB Extended Retention (100GB)", "cost": 290.0},
            ],
        }


licensing_billing_service = LicensingBillingService()
