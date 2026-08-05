# SwitchPilot Disaster Recovery & Business Continuity Plan

## 1. Recovery Objectives
- **Recovery Time Objective (RTO)**: < 15 Minutes (Full service restoration)
- **Recovery Point Objective (RPO)**: < 1 Minute (Data loss threshold)

## 2. Backup & Point-in-Time Recovery (PITR) Strategies
- **Hot Replication**: Active-Active database read-replicas across multi-region availability zones.
- **Warm Standby**: Secondary Kubernetes cluster standby with automated DNS failover.
- **Cold Backups**: Daily encrypted WAL-G PostgreSQL backups pushed to immutable S3 Object Lock storage.
