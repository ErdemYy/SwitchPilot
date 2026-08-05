from typing import List
from fastapi import APIRouter, Depends
from app.schemas.automation import CreateWorkflowRequest, WorkflowResponse
from app.services.workflow_engine import workflow_engine
from app.security.deps import require_permission

router = APIRouter(prefix="/automation/workflows", tags=["Enterprise Automation Platform"])


@router.post("", response_model=WorkflowResponse)
async def create_workflow(
    payload: CreateWorkflowRequest,
    current_user: dict = Depends(require_permission("configs:write")),
):
    """Save visual DAG workflow graph."""
    return WorkflowResponse(
        id="wf-101",
        name=payload.name,
        is_canary_active=payload.is_canary_active,
        status="IDLE",
        created_at="2026-08-04T09:35:00Z",
    )


@router.post("/{workflow_id}/run")
async def trigger_workflow_execution(
    workflow_id: str,
    is_canary: bool = False,
    current_user: dict = Depends(require_permission("configs:write")),
):
    """Trigger visual DAG workflow execution engine."""
    return await workflow_engine.execute_workflow(workflow_id, is_canary)
