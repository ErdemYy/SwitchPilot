# SwitchPilot Multi-Platform Desktop Packaging & Release Guide

## 1. Electron Builder Build Commands

```bash
# Package for Windows (x64 and ARM64 NSIS EXE, MSI, Portable EXE)
pnpm --filter @switchpilot/desktop package:win

# Package for macOS (Intel x64, Apple Silicon arm64, Universal DMG, PKG)
pnpm --filter @switchpilot/desktop package:mac

# Package for Linux (AppImage, DEB, RPM)
pnpm --filter @switchpilot/desktop package:linux
```

## 2. File Association Support
- `.switchpilot` (SwitchPilot Baseline)
- `.spbackup` (Snapshot Archive)
- `.spworkflow` (Workflow DAG)
- `.sppolicy` (Compliance Policy)
- `.spreport` (BI Executive Report)
