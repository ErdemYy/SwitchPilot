# SwitchPilot Backup & Disaster Recovery Guide

## 1. Backup Strategies
- **Database Backup**: Automated TimescaleDB pg_dump snapshot every 6 hours.
- **Full Platform Backup**: `POST /api/v1/deployment/backup` generates encrypted `.spbackup` payload containing DB, Vault keys, and AI knowledge.
