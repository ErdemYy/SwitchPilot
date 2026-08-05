from typing import Dict, Any, List


class AiRagKnowledgeService:
    """
    RAG Knowledge Base Engine Architecture.
    Indexes Vendor Docs, RFCs, Corporate Policies, Golden Configs, Best Practices, and Audit Logs.
    """

    async def search_knowledge(self, query: str) -> List[Dict[str, Any]]:
        return [
            {
                "id": "rag-doc-1",
                "source": "COMPANY_POLICIES",
                "title": "Corporate VLAN Naming Standards",
                "snippet": "All guest VLANs must use IDs between 20 and 49 and be tagged on core uplinks.",
                "relevanceScore": 0.94,
            },
            {
                "id": "rag-doc-2",
                "source": "BEST_PRACTICES",
                "title": "Cisco IOS-XE Trunking Best Practices",
                "snippet": "Explicitly define allowed VLANs on 802.1Q trunk interfaces to prevent STP re-convergence.",
                "relevanceScore": 0.88,
            },
        ]


ai_rag_knowledge = AiRagKnowledgeService()
