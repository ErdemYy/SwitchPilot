# Architecture Decision Record (ADR-002): Clean Architecture & Domain-Driven Design

## Status: ACCEPTED

## Context
SwitchPilot must scale as an Enterprise SaaS & MSP Platform without breaking core domain logic as third-party integrations expand.

## Decision
Enforce strict separation between Domain Entities (`packages/types`), Use Case Services (`apps/api/app/services`), REST Presentation (`apps/api/app/routers`), and Infrastructure (`apps/api/prisma`).

## Consequences
- **Positive**: High testability, decoupled dependencies, solid foundation for Marketplace plugins.
- **Negative**: Increased initial boilerplate interfaces.
