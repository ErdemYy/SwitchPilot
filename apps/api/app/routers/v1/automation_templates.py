from typing import List
from fastapi import APIRouter, Depends
from app.schemas.automation import TemplateResponse
from app.services.template_service import template_service
from app.security.deps import require_permission

router = APIRouter(prefix="/automation/templates", tags=["Enterprise Automation Platform"])


@router.get("", response_model=List[TemplateResponse])
async def list_automation_templates(
    current_user: dict = Depends(require_permission("configs:read")),
):
    """List 15 standard automation templates and marketplace entries."""
    res = await template_service.list_templates()
    return [TemplateResponse(**t) for t in res]
