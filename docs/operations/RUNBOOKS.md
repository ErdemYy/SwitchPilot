# SwitchPilot Operations & Incident Response Runbooks

## 1. Emergency Rollback Runbook
```bash
# Emergency rollback to previous Helm revision
helm rollback switchpilot-prod 0 -n production

# Trigger automated configuration rollback on target switches
curl -X POST http://api.switchpilot.io/api/v1/backups/rollback/preview \
  -H "Authorization: Bearer $TOKEN" \
  -d '{"device_id": "sw-core-fra-01", "rollback_type": "FULL_ROLLBACK"}'
```

## 2. Unreachable Device Incident Procedure
1. Check Connection Manager health: `curl /api/v1/connections/status`
2. Verify Bastion Host SSH key rotation and credential vault secrets.
3. Review Monitoring Alert Center for upstream topology link failures.
