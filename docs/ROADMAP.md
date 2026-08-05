# SwitchPilot Product & Engineering Roadmap

## Phase 1: Enterprise Architecture Foundation (Current Phase) ✅
- Enterprise monorepo structure setup (`/apps`, `/packages`, `/docker`, `/docs`).
- Multi-vendor hardware driver abstraction layer (`cisco`, `aruba`, `juniper`, `huawei`, `mikrotik`, `ubiquiti`, `hp`).
- Design System tokens & primitive components (`@switchpilot/ui`).
- Shared TypeScript domain contracts (`@switchpilot/types`).
- Quality assurance governance (ESLint, Prettier, Husky, Commitlint, EditorConfig).
- Docker Compose & Container multi-stage orchestration scripts.

## Phase 2: Core Domain Models & Database Persistence Layer
- Prisma database migration scripts & PostgreSQL connection pool tuning.
- Device registry & site hierarchy management endpoints.
- User management & RBAC security token engine.

## Phase 3: Network Driver & SSH Connector Engine
- Async SSH connection pooling framework with Scrapli / Netmiko adapters.
- Multi-vendor running configuration backup engine with diff comparison.
- Vendor command execution sandbox & error sanitization.

## Phase 4: Topology, Compliance & Automation Workflow
- VLAN & interface configuration sync automation.
- Task execution queue with Celery & Redis real-time progress events.
- Audit logging, NOC console dashboard UI & interactive topology visualizer.
