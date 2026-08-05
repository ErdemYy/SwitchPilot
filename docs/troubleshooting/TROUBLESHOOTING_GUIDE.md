# SwitchPilot Troubleshooting & Recovery Guide

## 1. Diagnostic Matrix
| Error Code | Symptom | Immediate Recovery Step |
|------------|---------|-------------------------|
| `ERR_CCM_TRANSLATION_FAILED` | Translation engine fails | Check CCM schema parameters and verify vendor driver in `translation_engine.py`. |
| `ERR_SSH_CONNECTION_TIMEOUT` | Device connection times out | Verify Bastion host routing and ping target IP address. |
| `ERR_SQLITE_DECRYPTION_FAILED` | Local DB locked | Re-authenticate via OIDC/SAML to refresh DPAPI vault keys. |
