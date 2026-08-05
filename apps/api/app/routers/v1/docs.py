from typing import Optional
from fastapi import APIRouter
from app.schemas.docs import DocsSearchResponse, ErrorCodeResponse
from app.services.docs_knowledge_service import docs_knowledge_service

router = APIRouter(prefix="/docs", tags=["Documentation & Knowledge Base"])


@router.get("/search", response_model=DocsSearchResponse)
async def search_docs(query: str = "", category: Optional[str] = None):
    """Universal search query across Documentation, Knowledge Base, API specs, and Guides."""
    results = await docs_knowledge_service.search_knowledge_base(query, category)
    return DocsSearchResponse(query=query, results=results, total=len(results))


@router.get("/error-codes", response_model=ErrorCodeResponse)
async def list_error_codes():
    """Retrieve full error code matrix, root causes, and recovery steps."""
    codes = await docs_knowledge_service.get_error_codes()
    return ErrorCodeResponse(error_codes=codes)
