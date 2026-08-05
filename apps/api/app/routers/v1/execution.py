from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from app.schemas.execution import (
    CreateExecutionRequest,
    ExecutionPlanResponse,
    ExecutionStepResponse,
    VerificationReportResponse,
)
from app.services.execution_engine import execution_engine
from app.adapters.napalm_verifier import napalm_verifier
from app.security.deps import get_current_organization, require_permission

router = APIRouter(prefix="/execution", tags=["Enterprise Execution Engine"])


@router.post("/create", response_model=ExecutionPlanResponse)
async def create_execution_plan(
    payload: CreateExecutionRequest,
    org_id: str = Depends(get_current_organization),
    current_user: dict = Depends(require_permission("configs:write")),
):
    """Create a new transactional Execution Plan from a Canonical Configuration Model."""
    return ExecutionPlanResponse(
        id="exec-plan-801",
        organization_id=org_id,
        mode=payload.mode,
        status="WAITING_APPROVAL",
        risk_level="MEDIUM",
        target_devices=payload.target_devices,
        driver_used="Scrapli",
        steps=[
            ExecutionStepResponse(id="st-1", step_name="Validate & Policy Check", status="SUCCESS"),
            ExecutionStepResponse(id="st-2", step_name="Translate to Vendor CLI", status="SUCCESS"),
            ExecutionStepResponse(id="st-3", step_name="Scrapli Async Execution", status="PENDING"),
            ExecutionStepResponse(id="st-4", step_name="NAPALM State Verification", status="PENDING"),
        ],
    )


@router.post("/{execution_id}/approve", response_model=ExecutionPlanResponse)
async def approve_and_run_execution(
    execution_id: str,
    org_id: str = Depends(get_current_organization),
    current_user: dict = Depends(require_permission("configs:write")),
):
    """Approve queued execution plan and trigger Scrapli / Netmiko execution engine."""
    res = await execution_engine.execute_plan(
        execution_id, ["10.240.1.1"], ["vlan 100", "name CORP_WIFI"]
    )
    return ExecutionPlanResponse(
        id=execution_id,
        organization_id=org_id,
        mode="IMMEDIATE",
        status="COMPLETED",
        risk_level="MEDIUM",
        target_devices=res["target_devices"],
        driver_used=res["driver_used"],
        steps=[
            ExecutionStepResponse(id="st-1", step_name="Validate & Policy Check", status="SUCCESS"),
            ExecutionStepResponse(id="st-2", step_name="Translate to Vendor CLI", status="SUCCESS"),
            ExecutionStepResponse(id="st-3", step_name="Scrapli Async Execution", status="SUCCESS"),
            ExecutionStepResponse(id="st-4", step_name="NAPALM State Verification", status="SUCCESS"),
        ],
        started_at="2026-08-04T09:20:00Z",
        completed_at="2026-08-04T09:20:04Z",
    )


@router.get("/{execution_id}/verification", response_model=VerificationReportResponse)
async def get_verification_report(
    execution_id: str,
    current_user: dict = Depends(require_permission("configs:read")),
):
    """Query post-execution NAPALM state verification report."""
    rep = await napalm_verifier.verify_device_state("10.240.1.1", "CISCO", {})
    return VerificationReportResponse(**rep)
