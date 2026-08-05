# SwitchPilot Enterprise Testing Strategy & Architecture Guide

## 1. Testing Framework Matrix

```
apps/tests/
 ├── unit/            (Pytest & Vitest Unit Test Suites)
 ├── integration/     (Workflow Integration Tests)
 ├── contract/        (OpenAPI vs TypeScript DTO Zero-Drift Tests)
 ├── e2e/             (Playwright Cross-Browser & Electron E2E Tests)
 ├── visual/          (Visual Regression Screenshot Diffs)
 ├── performance/     (k6 Load & Stress Performance Scripts)
 ├── security/        (OWASP Top 10 Vulnerability Tests)
 ├── chaos/           (Chaos Fault Injection Simulator)
 └── simulator/       (Virtual Multi-Vendor Device Simulator)
```

## 2. Execution Commands

```bash
# Run backend Pytest suite
pytest apps/tests/unit apps/tests/contract apps/tests/security

# Run Playwright E2E suite
pnpm --filter @switchpilot/tests test:e2e

# Run k6 performance load test
pnpm --filter @switchpilot/tests test:performance
```
