import hashlib
from typing import Dict, Any, List
from app.core.events import event_bus, DomainEvent


class SnapshotService:
    """
    Configuration Snapshot Engine.
    Supports 8 Snapshot Types (Running, Startup, Candidate, Golden, LKG, Pre-Change, Post-Change, Emergency),
    calculates SHA-256 checksums, and emits `SnapshotCreated` audit events.
    """

    async def capture_snapshot(
        self, device_id: str, snapshot_type: str, raw_config: str, label: str
    ) -> Dict[str, Any]:
        checksum = hashlib.sha256(raw_config.encode("utf-8")).hexdigest()
        snapshot = {
            "id": f"snap-{device_id[:8]}-{checksum[:8]}",
            "device_id": device_id,
            "type": snapshot_type,
            "raw_config": raw_config,
            "checksum_sha": checksum,
            "version_label": label,
            "created_at": "2026-08-04T09:25:00Z",
        }
        await event_bus.publish(
            DomainEvent(
                "SnapshotCreated",
                {
                    "snapshot_id": snapshot["id"],
                    "device_id": device_id,
                    "type": snapshot_type,
                    "checksum": checksum,
                },
            )
        )
        return snapshot


snapshot_service = SnapshotService()
