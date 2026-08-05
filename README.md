# SwitchPilot 🚀

> **Enterprise Multi-Vendor Network Automation Platform**

SwitchPilot is a production-grade, commercial-ready enterprise platform designed for multi-vendor network management, configuration backup, orchestration, and topology compliance across enterprise network infrastructure.

---

## 🛠 Multi-Vendor Support Architecture
SwitchPilot natively abstracts hardware driver capabilities for:
- **Cisco** (IOS, IOS-XE, NX-OS)
- **Aruba Networks** (AOS-S, AOS-CX)
- **Juniper Networks** (Junos OS)
- **Huawei Technologies** (VRP OS)
- **MikroTik** (RouterOS, SwitchOS)
- **Ubiquiti** (EdgeSwitch, UniFi OS)
- **HP Enterprise** (ProCurve, Comware)
- *Extensible Architecture for future hardware vendor plugins.*

---

## 🏗 Enterprise Monorepo Stack
- **Frontend App (`/apps/web`)**: Next.js 16 (App Router), React 19, Strict TypeScript, Tailwind CSS, Shadcn/UI Design System Tokens.
- **Backend App (`/apps/api`)**: Python FastAPI 0.111+, Async Clean Architecture (Presentation Routers, Application Services, Data Repositories, Vendor Abstraction Drivers).
- **Shared Packages (`/packages`)**:
  - `@switchpilot/ui`: Enterprise Design System & Primitive Components.
  - `@switchpilot/types`: Enterprise TS Domain Contracts & Vendor Specifications.
  - `@switchpilot/config`: Shared TSConfig, ESLint, Prettier, and Commitlint standards.
- **Database & Persistence**: PostgreSQL 16 managed via Prisma ORM schemas.
- **Queue & Async Task Processing**: Redis 7 & Celery queue execution engine.
- **DevOps**: Docker Compose & Multi-stage container builds (`/docker`).

---

## 📚 Technical Documentation

Explore the complete architecture documentation:
1. 🏗 [Architecture Overview](file:///c:/Users/erdem/OneDrive/Belgeler/SwitchPilot/docs/ARCHITECTURE.md)
2. 📁 [Folder Structure Guide](file:///c:/Users/erdem/OneDrive/Belgeler/SwitchPilot/docs/FOLDER_STRUCTURE.md)
3. 📐 [Coding Guidelines](file:///c:/Users/erdem/OneDrive/Belgeler/SwitchPilot/docs/CODING_GUIDELINES.md)
4. 🤝 [Contributing Guidelines](file:///c:/Users/erdem/OneDrive/Belgeler/SwitchPilot/docs/CONTRIBUTING.md)
5. 🗺 [Product Roadmap](file:///c:/Users/erdem/OneDrive/Belgeler/SwitchPilot/docs/ROADMAP.md)

---

## 🚀 Quick Setup

```bash
# Clone the repository
git clone https://github.com/switchpilot/switchpilot.git
cd switchpilot

# Run initialization script
./scripts/setup.sh
# or on Windows PowerShell:
# .\scripts\setup.ps1

# Run localized development apps
pnpm dev
```

---

## 🐳 Docker Deployment

```bash
cd docker
docker compose up --build -d
```

---

## 📜 License
COMMERCIAL ENTERPRISE SOFTWARE - ALL RIGHTS RESERVED.
