# SwitchPilot Enterprise Administrator Guide

## 1. Enterprise Setup
- **SSO Authentication**: Configure Microsoft Entra ID (Azure AD), SAML 2.0, or OIDC providers under Settings.
- **Local Persistence & Sync**: Manage local Encrypted SQLite storage and desktop auto-update settings.
- **Audit Logging**: All actions are logged into `AuditLogs` table and emitted over `DomainEventCategory.AUDIT`.
