# SwitchPilot OpenAPI REST API Guide

## 1. Authentication
Pass JWT Bearer token in request headers:
```http
Authorization: Bearer <your_jwt_access_token>
```

## 2. API Endpoints Summary
- `POST /api/v1/auth/login`: Issue JWT token
- `POST /api/v1/translation/translate`: Convert CCM payload into vendor CLI strings
- `POST /api/v1/execution/plans`: Build configuration execution plan
- `GET /api/v1/monitoring/metrics`: Query telemetry metrics
- `POST /api/v1/desktop/sync/push`: Push offline sync queue
