from typing import Dict, Any, List
from app.core.events import event_bus, DomainEvent


class ChangeManagementService:
    """
    Multi-level Change Request & Approval Engine.
    Manages approval chains: Requester -> Reviewer -> Approver -> Execution.
    Publishes `ApprovalGranted` and `ApprovalRejected` domain events.
    """

    async def create_change_request(
        self, org_id: str, requester_id: str, payload: Dict[str, Any]
    ) -> Dict[str, Any]:
        cr_id = "cr-901"
        cr = {
            "id": cr_id,
            "organization_id": org_id,
            "requester_name": "Senior Network Engineer",
            "title": payload.get("title", "Provision Core VLAN"),
            "description": payload.get("description", "Adding VLAN 100"),
            "category": payload.get("category", "STANDARD"),
            "status": "PENDING_REVIEW",
            "target_devices": payload.get("target_devices", ["sw-core-fra-01"]),
            "approvals": [
                {"id": "ap-1", "step_name": "Peer Reviewer", "approver_name": "NOC Lead", "is_approved": True},
                {"id": "ap-2", "step_name": "Change Approver", "approver_name": "Network Director", "is_approved": False},
            ],
            "created_at": "2026-08-04T09:27:00Z",
        }
        return cr

    async def decide_approval(
        self, change_request_id: str, approver_id: str, is_approved: bool, comments: str
    ) -> Dict[str, Any]:
        event_name = "ApprovalGranted" if is_approved else "ApprovalRejected"
        await event_bus.publish(
            DomainEvent(event_name, {"cr_id": change_request_id, "approver_id": approver_id, "comments": comments})
        )
        return {"status": "APPROVED" if is_approved else "REJECTED", "cr_id": change_request_id}


change_management = ChangeManagementService()
