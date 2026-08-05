# Chaos Engineering & Fault Resilience Guide

## 1. Fault Injections Supported
- **Database Failover**: Simulates loss of primary PostgreSQL database connection.
- **Redis Cache Eviction**: Tests fallback behavior when Redis cache drops.
- **Vault Failure**: Verifies graceful degradation when HashiCorp Vault is offline.
- **Network Latency Spike**: Tests UI responsiveness under 1500ms network delays.
