from typing import List, Optional, Dict, Any
from pydantic import BaseModel


class AiChatRequest(BaseModel):
    prompt: str
    vendor: str = "CISCO"


class KnowledgeItemResponse(BaseModel):
    id: str
    source: str
    title: str
    snippet: str
    relevance_score: float


class RiskResponse(BaseModel):
    level: str
    score: int
    reasons: List[str]


class AiChatResponse(BaseModel):
    intent: str
    ai_response: str
    ccm_payload: Dict[str, Any]
    translated_commands: List[str]
    command_text: str
    risk_analysis: RiskResponse
    knowledge_references: List[KnowledgeItemResponse]
