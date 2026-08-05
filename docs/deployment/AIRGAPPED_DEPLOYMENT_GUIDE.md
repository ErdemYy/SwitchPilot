# SwitchPilot Air-Gapped Environment Deployment Guide

## 1. Offline Deployment Steps
1. Transfer `switchpilot-v1.0.0-airgapped.spairgapped` tarball to offline network host via secure media.
2. Unpack container image registry archive into local offline Docker / Podman registry.
3. Apply offline Helm chart: `helm install switchpilot ./helm-chart-offline.tgz`.
4. Validate offline digital signature: `POST /api/v1/deployment/airgapped/validate`.
