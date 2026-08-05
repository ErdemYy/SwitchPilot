# SwitchPilot Folder Structure & Directory Blueprint

```
SwitchPilot/
├── apps/
│   ├── web/                         # Frontend Application (Next.js 16 + React 19)
│   │   ├── src/
│   │   │   ├── app/                 # App Router (pages & global layout)
│   │   │   ├── components/          # Reusable presentation UI elements
│   │   │   ├── layouts/             # Page Shell layouts (Header, Sidebar, NOC frame)
│   │   │   ├── features/            # Feature modules (devices, topologies, configs)
│   │   │   ├── hooks/               # Custom React state & network hooks
│   │   │   ├── services/            # API Client Services
│   │   │   ├── stores/              # Client state stores
│   │   │   ├── providers/           # App Context & Theme Providers
│   │   │   ├── utils/               # Transformation & format helpers
│   │   │   ├── styles/              # Global CSS & Tailwind entry
│   │   │   ├── config/              # Web application settings
│   │   │   ├── constants/           # Web constants
│   │   │   └── types/               # App-specific TS interfaces
│   │   ├── package.json
│   │   └── tailwind.config.ts
│   │
│   └── api/                         # Backend Application (FastAPI Python 3.11+)
│       ├── app/
│       │   ├── main.py              # Application entrypoint & HTTP server
│       │   ├── config/              # Environment & pydantic-settings
│       │   ├── core/                # Lifecycle hooks, event bus, logging
│       │   ├── routers/             # Presentation Controllers (v1 REST API)
│       │   ├── services/            # Use Case Application Logic Engine
│       │   ├── repositories/        # Persistence Data Layer
│       │   ├── models/              # Domain & Database Models
│       │   ├── schemas/             # Request/Response Pydantic DTOs
│       │   ├── middleware/          # HTTP Interceptors (CORS, Trace ID, Audit Log)
│       │   ├── security/            # Tokens, Password Hashing, RBAC
│       │   ├── tasks/               # Background Worker Queue (Celery/Redis)
│       │   ├── adapters/            # External Integration Drivers
│       │   ├── vendors/             # Multi-Vendor Hardware Driver System
│       │   │   ├── base.py          # BaseVendorDriver Abstract Specification
│       │   │   ├── cisco/           # Cisco Driver Architecture
│       │   │   ├── aruba/           # Aruba Driver Architecture
│       │   │   ├── juniper/         # Juniper Driver Architecture
│       │   │   ├── huawei/          # Huawei Driver Architecture
│       │   │   ├── mikrotik/        # MikroTik Driver Architecture
│       │   │   ├── ubiquiti/        # Ubiquiti Driver Architecture
│       │   │   └── hp/              # HP Enterprise Driver Architecture
│       │   └── ssh/                 # Network SSH Engine Abstractions
│       ├── pyproject.toml
│       └── README.md
│
├── packages/                        # Shared Enterprise Monorepo Packages
│   ├── ui/                          # Design System Tokens & Primitive Components
│   │   └── src/
│   │       ├── tokens/              # Colors, Typography, Spacing, Radii, Shadows, Animations
│   │       └── components/          # Button, Card, Badge, Input UI Stubs
│   ├── types/                       # Shared Domain Definitions & DTO Types
│   │   └── src/
│   │       ├── vendor.ts            # Network Vendor Enums & Protocols
│   │       ├── device.ts            # Device & Interface Entities
│   │       ├── task.ts              # Automation Task Payload Types
│   │       ├── auth.ts              # Auth User & JWT Claim Models
│   │       └── api.ts               # Standard API Response Envelope Contracts
│   └── config/                      # Monorepo Configurations (ESLint, TSConfig Base)
│
├── prisma/
│   └── schema.prisma                # Database Schema & Model Definitions
│
├── docker/
│   ├── docker-compose.yml           # Production Orchestration (Web, API, DB, Redis)
│   ├── Dockerfile.web               # Multi-stage Web build container
│   ├── Dockerfile.api               # Multi-stage API build container
│   └── .dockerignore
│
├── scripts/                         # DevOps & Setup Automation Scripts
│   ├── setup.sh                     # Bash environment setup
│   ├── setup.ps1                    # PowerShell environment setup
│   └── lint.sh                      # Monorepo linting script
│
├── docs/                            # Architecture & Governance Documentation
│   ├── ARCHITECTURE.md
│   ├── FOLDER_STRUCTURE.md
│   ├── CODING_GUIDELINES.md
│   ├── CONTRIBUTING.md
│   └── ROADMAP.md
│
├── .husky/                          # Pre-commit & Commit-msg Git Hooks
├── package.json                     # Monorepo root package configuration
├── pnpm-workspace.yaml              # Workspace package index
├── .editorconfig                    # Editor formatting consistency
├── .gitignore                       # Git ignore filters
├── .prettierrc                      # Prettier code styling rules
├── commitlint.config.js             # Conventional commit validation
└── tsconfig.json                    # Root TypeScript compilation target
```
