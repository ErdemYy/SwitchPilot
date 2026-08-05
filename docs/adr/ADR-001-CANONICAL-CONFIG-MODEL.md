# Architecture Decision Record (ADR-001): Canonical Configuration Model (CCM)

## Status: ACCEPTED

## Context
Enterprise networks consist of heterogeneous multi-vendor hardware (Cisco IOS-XE/NX-OS, Aruba AOS-CX, Juniper JunOS, Huawei VRP). Direct CLI command generation creates tight coupling and vendor lock-in.

## Decision
All user intents, AI Assistant proposals, and Automation Workflows MUST operate through a vendor-neutral **Canonical Configuration Model (CCM)** structured JSON schema. Direct vendor CLI generation is prohibited prior to the Vendor Translation Engine.

## Consequences
- **Positive**: 100% decoupling from vendor CLI syntax, seamless multi-vendor translation, policy validation before execution.
- **Negative**: Requires maintainable translator drivers for each hardware vendor.
