from typing import List, Optional, Dict, Any
from pydantic import BaseModel


class DesktopSyncPushPayload(BaseModel):
    tenant_id: str = "tenant-001"
    queued_changes: List[Dict[str, Any]] = []


class DesktopSyncPushResult(BaseModel):
    status: str
    synced_count: int
    conflicts: List[Dict[str, Any]] = []
    timestamp: str
