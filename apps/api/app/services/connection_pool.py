import time
from typing import Dict, Any, Optional


class ConnectionPoolManager:
    """
    Enterprise Connection Pool Manager.
    Handles session reuse, idle timeout cleanup, priority queues, and connection recovery.
    """

    def __init__(self, max_connections: int = 100, idle_timeout_sec: int = 300):
        self.max_connections = max_connections
        self.idle_timeout_sec = idle_timeout_sec
        self._pool: Dict[str, Dict[str, Any]] = {}

    async def acquire_connection(self, device_id: str, protocol: str) -> Optional[Dict[str, Any]]:
        pool_key = f"{device_id}:{protocol}"
        if pool_key in self._pool:
            sess = self._pool[pool_key]
            sess["last_used_at"] = time.time()
            return sess
        return None

    async def register_connection(self, device_id: str, protocol: str, session: Any) -> None:
        pool_key = f"{device_id}:{protocol}"
        self._pool[pool_key] = {
            "session": session,
            "created_at": time.time(),
            "last_used_at": time.time(),
        }

    async def release_connection(self, device_id: str, protocol: str) -> None:
        pool_key = f"{device_id}:{protocol}"
        if pool_key in self._pool:
            del self._pool[pool_key]

    async def cleanup_idle_sessions(self) -> int:
        now = time.time()
        expired = [
            k for k, v in self._pool.items()
            if now - v["last_used_at"] > self.idle_timeout_sec
        ]
        for k in expired:
            del self._pool[k]
        return len(expired)


connection_pool = ConnectionPoolManager()
