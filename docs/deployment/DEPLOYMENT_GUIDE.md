# SwitchPilot Enterprise Production Deployment Guide

## 1. Prerequisites & Infrastructure Setup
- Kubernetes 1.28+ cluster (EKS, GKE, AKS, or On-Premise RKE2)
- Helm 3.12+
- PostgreSQL 15+ (TimescaleDB extension enabled for TSDB)
- Redis Cluster 7.0+ (Rate limiting & deduplication cache)

## 2. Helm Deployment Pipeline
```bash
# 1. Add SwitchPilot Helm repository
helm repo add switchpilot https://charts.switchpilot.io
helm repo update

# 2. Deploy to Production namespace
helm upgrade --install switchpilot-prod switchpilot/switchpilot \
  --namespace production \
  --create-namespace \
  --values ./helm/switchpilot/values.yaml
```

## 3. Post-Deployment Verification
```bash
# Verify Pod health & Readiness probes
kubectl get pods -n production -l app=switchpilot

# Verify Liveness Probe API endpoint
curl http://api.switchpilot.io/api/v1/health/readiness
```
