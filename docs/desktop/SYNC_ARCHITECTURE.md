# SwitchPilot Bidirectional Sync & Offline Mode Specification

## 1. Bidirectional Sync Pipeline

```
Cloud Backend (FastAPI / PostgreSQL)
 ↕ (HTTPS / REST Sync Protocol with Checksum Validation)
Desktop Sync Engine Service (apps/api/app/services/desktop_sync_service.py)
 ↕ (IPC Channel `desktop:trigger-sync`)
Local Encrypted SQLite Database (apps/desktop/src/main/db.ts)
```

- **Conflict Detection**: Compares SHA-256 local configuration payload checksum against cloud baseline checksum.
- **Priority Queue**: Queued offline execution jobs are processed sequentially with automatic retry logic upon network reconnection.
