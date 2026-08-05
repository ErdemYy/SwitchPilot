# SwitchPilot Offline Mode & Local Persistence Runbook

## 1. Offline Mode Capabilities
When disconnected from cloud network infrastructure, SwitchPilot continues working natively:
- **Searchable Device Inventory**: Indexed locally inside encrypted SQLite database.
- **Topology Graph**: Renders offline cached nodes and links.
- **Configuration & Snapshot History**: Full version diff viewer works offline.
- **Local AI Knowledge Base**: Rule-based RAG searches local vendor reference manuals.
- **Queued Execution Engine**: Offline configuration edits are stored in `queued_change_requests` table until connection is restored.
