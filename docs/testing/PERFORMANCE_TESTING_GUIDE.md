# k6 Performance & Stress Testing Guide

## 1. Threshold Definitions
- **Latency**: `http_req_duration p(95) < 200ms`
- **Error Rate**: `http_req_failed < 1%`
- **Sustained Throughput**: 5,000 requests/sec across telemetry collectors.

## 2. Execution
```bash
pnpm --filter @switchpilot/tests test:performance
```
