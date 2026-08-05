from typing import List
from fastapi import APIRouter, Depends
from app.schemas.ai import AiChatRequest, AiChatResponse, KnowledgeItemResponse
from app.services.ai_engineer_service import ai_engineer_service
from app.services.ai_rag_knowledge import ai_rag_knowledge
from app.security.deps import require_permission

router = APIRouter(prefix="/ai", tags=["Enterprise AI Network Engineer Platform"])


@router.post("/chat", response_model=AiChatResponse)
async def process_ai_chat_prompt(
    payload: AiChatRequest,
    current_user: dict = Depends(require_permission("configs:read")),
):
    """
    Process natural language prompt through AI Pipeline:
    Intent -> RAG -> Planner -> CCM -> Validation -> Policy -> Translation -> Risk.
    """
    res = await ai_engineer_service.process_user_prompt(payload.prompt, payload.vendor)
    return AiChatResponse(
        intent=res["intent"],
        ai_response=res["ai_response"],
        ccm_payload=res["ccm_payload"],
        translated_commands=res["translated_commands"],
        command_text=res["command_text"],
        risk_analysis=res["risk_analysis"],
        knowledge_references=[
            KnowledgeItemResponse(
                id=k["id"],
                source=k["source"],
                title=k["title"],
                snippet=k["snippet"],
                relevance_score=k["relevanceScore"],
            )
            for k in res["knowledge_references"]
        ],
    )


@router.get("/knowledge", response_model=List[KnowledgeItemResponse])
async def search_rag_knowledge(
    query: str = "VLAN standards",
    current_user: dict = Depends(require_permission("configs:read")),
):
    """Query AI RAG Knowledge Base (Vendor docs, RFCs, Company Policies)."""
    items = await ai_rag_knowledge.search_knowledge(query)
    return [
        KnowledgeItemResponse(
            id=k["id"],
            source=k["source"],
            title=k["title"],
            snippet=k["snippet"],
            relevance_score=k["relevanceScore"],
        )
        for k in items
    ]
