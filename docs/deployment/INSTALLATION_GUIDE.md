# SwitchPilot Enterprise Installation Guide

## 1. Single Server & High Availability Installation
```bash
# Docker Compose Installation
docker compose -f docker/docker-compose.yml up -d

# Kubernetes Helm Installation
helm install switchpilot helm/switchpilot -n switchpilot-system --create-namespace
```
