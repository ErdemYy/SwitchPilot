# SwitchPilot Enterprise Electron Desktop Platform Architecture

## 1. Architectural Architecture & Cross-Platform Packaging Strategy

```
Cross-Platform Build Target (electron-builder)
 ├── Windows (x64, ARM64, Portable EXE, WiX MSI, NSIS Setup)
 ├── macOS (Intel x64, Apple Silicon arm64, Universal DMG, PKG)
 └── Linux (AppImage, DEB, RPM)
```

- **Electron Main Process**: `apps/desktop/src/main/index.ts`
- **ContextBridge Preload**: `apps/desktop/src/preload/index.ts`
- **Encrypted Local SQLite**: `apps/desktop/src/main/db.ts`
- **Frontend App**: Next.js 16 App Router served locally via Electron BrowserWindow.
