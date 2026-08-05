# SwitchPilot Production Deployment Administrator Checklist

## Pre-Flight Checklist
- [x] CPU >= 8 Cores, RAM >= 16 GB, Disk NVMe >= 100 GB.
- [x] Network Ports 80, 443, 8000, 5432, 6379, 8200 open and listening.
- [x] Valid TLS RSA 2048 or 4096 certificate loaded.
- [x] Pre-flight system check passes: `POST /api/v1/deployment/preflight`.
