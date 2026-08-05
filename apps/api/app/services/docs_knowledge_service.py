from typing import Dict, Any, List, Optional


class DocsKnowledgeService:
    """
    Universal Knowledge Base & Documentation Search Engine.
    Provides indexing, search querying, OpenAPI metadata inspection, error code matrix, and changelog history.
    """

    ARTICLES = [
        {
            "id": "doc-001",
            "title": "Getting Started with SwitchPilot",
            "slug": "getting-started",
            "category": "Getting Started",
            "tags": ["quickstart", "setup", "onboarding"],
            "summary": "Step-by-step guide to registering network devices, executing CCM configuration changes, and enabling NOC monitoring.",
            "audience": "USER",
            "updatedAt": "2026-08-05T08:00:00Z",
        },
        {
            "id": "doc-002",
            "title": "Plugin SDK & Marketplace Developer Guide",
            "slug": "plugin-sdk-guide",
            "category": "Developer Guide",
            "tags": ["plugin", "sdk", "marketplace"],
            "summary": "Build custom network translators, telemetry collectors, and widget extensions using the SwitchPilotPlugin interface.",
            "audience": "DEVELOPER",
            "updatedAt": "2026-08-05T08:00:00Z",
        },
        {
            "id": "doc-003",
            "title": "Tauri & Electron Desktop Offline Synchronization",
            "slug": "desktop-offline-sync",
            "category": "Desktop Guide",
            "tags": ["desktop", "offline", "sync", "sqlite"],
            "summary": "How SwitchPilot Desktop operates offline with local Encrypted SQLite and background conflict resolution.",
            "audience": "ADMIN",
            "updatedAt": "2026-08-05T08:00:00Z",
        },
    ]

    ERROR_CODES = [
        {
            "code": "ERR_CCM_TRANSLATION_FAILED",
            "category": "TRANSLATION",
            "message": "Vendor translation engine failed to map CCM parameters into vendor CLI strings.",
            "cause": "Unsupported syntax or missing vendor driver.",
            "recoverySteps": ["Verify vendor OS model", "Check CCM schema parameters", "Ensure driver registration in translation_engine.py"],
        },
        {
            "code": "ERR_SSH_CONNECTION_TIMEOUT",
            "category": "CONNECTION",
            "message": "SSH socket connection timed out while attempting connection to device IP.",
            "cause": "Network unreachable or firewall blocking port 22.",
            "recoverySteps": ["Ping target IP", "Verify Bastion host routing", "Check credentials in Windows DPAPI / Vault"],
        },
    ]

    async def search_knowledge_base(self, query: str, category: Optional[str] = None) -> List[Dict[str, Any]]:
        if not query:
            return self.ARTICLES
        q = query.lower()
        return [
            a for a in self.ARTICLES
            if q in a["title"].lower() or q in a["summary"].lower() or any(q in t for t in a["tags"])
        ]

    async def get_error_codes(self) -> List[Dict[str, Any]]:
        return self.ERROR_CODES


docs_knowledge_service = DocsKnowledgeService()
