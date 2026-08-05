# SwitchPilot FastAPI Backend

Clean Architecture Enterprise Backend for Multi-Vendor Network Automation.

## Architecture Layers
- `routers/`: Presentation layer - HTTP REST Controller endpoints.
- `services/`: Application layer - Business logic & use cases.
- `repositories/`: Infrastructure layer - Data persistence abstractions.
- `models/`: Domain & ORM entity definitions.
- `schemas/`: Request/Response validation DTOs (Pydantic).
- `core/`: Global logging, exception handling, and event hooks.
- `middleware/`: HTTP Interceptors (CORS, Trace ID, Audit Logging).
- `security/`: Authentication, Token verification, RBAC permissions.
- `tasks/`: Async Queue Workers (Celery/Redis execution engine).
- `adapters/`: External service integration drivers.
- `vendors/`: Multi-vendor network driver abstraction layer.
- `ssh/`: SSH session & connector pool engine interfaces.
- `config/`: Environment configuration management.
