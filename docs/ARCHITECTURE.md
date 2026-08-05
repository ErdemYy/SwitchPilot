# SwitchPilot Architecture & Security Specification

## 1. Architectural Philosophy
SwitchPilot is engineered using **Clean Architecture** and **Domain-Driven Design (DDD)** principles to ensure strict separation of concerns, testability, and long-term scalability across multi-vendor enterprise network environments and commercial desktop platforms.

---

## 2. Commercial Enterprise Windows Desktop Architecture (Tauri v2)

```
Windows OS (x64 / ARM64)
 ↓
Tauri v2 Native Rust Core Engine        (Win32 System Tray, DPAPI Vault, Encrypted SQLite)
 ↓
Local Encrypted SQLite (SQLCipher)      (Offline device cache, queued change requests)
 ↓
Enterprise Sync & Merge Engine          (Incremental Sync, Checksum Validation, Conflict Resolution)
 ↓
FastAPI Cloud Backend                   (OIDC, SAML 2.0, Microsoft Entra ID Azure AD)
```

### 11 Production Desktop Subsystems

1. **Desktop Runtime**: Tauri v2 native Rust framework supporting Windows x64 and Windows ARM64 with separate MSI (WiX) and EXE (NSIS) installers.
2. **Enterprise Authentication**: SSO supporting OIDC, OAuth2, Microsoft Entra ID (Azure AD), Google, GitHub, SAML 2.0, LDAP / Active Directory, TOTP, and Hardware Keys.
3. **Desktop Native Features**: System Tray, Win32 Notifications, Window Restore, Deep Linking (`switchpilot://`), File Associations (`.spconfig`, `.spbackup`), Native File Dialogs.
4. **Offline Mode**: Local Encrypted SQLite (SQLCipher AES-256) storing offline device inventories, queued execution jobs, and offline audit logs.
5. **Sync Engine**: `Cloud` $\longleftrightarrow$ `Local DB` $\longleftrightarrow$ `Checksum Validation` $\longleftrightarrow$ `Conflict Resolution` $\longleftrightarrow$ `Merge` $\longleftrightarrow$ `Audit`.
6. **Windows Credential Manager Integration**: All sensitive SSH keys, API tokens, and Vault passphrases are encrypted using native Windows DPAPI hardware keys.
7. **Desktop Auto-Updater Engine**: Delta Updates, Authenticode Digital Signature Validation, Release Channels (*Stable, Beta, Canary, Developer*).
8. **Installer Architecture**: WiX MSI, NSIS EXE, Winget, Chocolatey, Offline Enterprise Package, Portable EXE.
9. **Desktop Enterprise Settings Center**: 12 Configuration Tabs (*General, Appearance, Network/Proxy, CA Certificates, Auth, Notifications, Updates, Telemetry, Storage, Security, Advanced*).
10. **Desktop Observability**: Desktop Logging, Memory/CPU Metrics, `.spdiag` Diagnostic Bundle Generator.
11. **Desktop Security**: Application Lock, Idle Timeout, Session Expiration, Clipboard Auto-Clear.
