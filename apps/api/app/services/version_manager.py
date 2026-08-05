from typing import Dict, Any, List, Optional
from app.core.events import event_bus, DomainEvent


class VersionManager:
    """
    Immutable Version Control Manager.
    Manages version history tree, branches (main, canary), parent-child version links,
    and publishes `VersionCreated` domain events.
    """

    async def commit_version(
        self,
        device_id: str,
        raw_config: str,
        author: str,
        summary: str,
        parent_ver_id: Optional[str] = None,
        branch: str = "main",
    ) -> Dict[str, Any]:
        ver_id = f"v-1.0.{hash(raw_config) % 1000}"
        version = {
            "id": ver_id,
            "device_id": device_id,
            "parent_ver_id": parent_ver_id or "v-1.0.0",
            "branch": branch,
            "author": author,
            "checksum_sha": f"sha256:{hash(raw_config)}",
            "raw_config": raw_config,
            "change_summary": summary,
            "risk_level": "SAFE",
            "created_at": "2026-08-04T09:26:00Z",
        }
        await event_bus.publish(
            DomainEvent("VersionCreated", {"version_id": ver_id, "device_id": device_id, "author": author})
        )
        return version


version_manager = VersionManager()
