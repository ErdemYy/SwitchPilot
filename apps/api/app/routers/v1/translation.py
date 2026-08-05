from typing import List, Dict, Any
from fastapi import APIRouter, Depends
from app.schemas.translation import (
    TranslateRequest,
    TranslationResponse,
    ValidationResponse,
    DiffRequest,
    DiffResponse,
    RiskAnalysisResponse,
)
from app.services.translation_engine import translation_engine
from app.services.validation_engine import validation_engine
from app.services.policy_engine import policy_engine
from app.services.diff_engine import diff_engine
from app.services.risk_analysis import risk_engine
from app.security.deps import require_permission

router = APIRouter(prefix="/translation", tags=["Vendor Translation Engine"])


@router.post("/validate", response_model=ValidationResponse)
async def validate_canonical_model(
    payload: TranslateRequest,
    current_user: dict = Depends(require_permission("configs:read")),
):
    """Validate CCM against Business Rules, Dependency Rules, and Corporate Security Policies."""
    ccm_dict = payload.ccm.model_dump()
    b_errors = validation_engine.validate_ccm(ccm_dict)
    p_violations = policy_engine.check_compliance(ccm_dict)
    return ValidationResponse(
        valid=len(b_errors) == 0 and len(p_violations) == 0,
        business_errors=b_errors,
        policy_violations=p_violations,
    )


@router.post("/translate", response_model=TranslationResponse)
async def translate_configuration(
    payload: TranslateRequest,
    current_user: dict = Depends(require_permission("configs:read")),
):
    """Translate Canonical Configuration Model (CCM) into target vendor CLI commands."""
    res = translation_engine.translate_ccm(payload.vendor, payload.ccm.model_dump())
    return TranslationResponse(
        vendor=res["vendor"],
        format=res["format"],
        generated_commands=res["generatedCommands"],
        command_text=res["commandText"],
    )


@router.post("/diff", response_model=DiffResponse)
async def generate_config_diff(
    payload: DiffRequest,
    current_user: dict = Depends(require_permission("configs:read")),
):
    """Generate Unified Diff and Side-by-side Diff comparing current vs desired configuration."""
    res = diff_engine.generate_diff(payload.current_config, payload.desired_config)
    return DiffResponse(
        unified_diff=res["unifiedDiff"],
        current_lines=res["currentLines"],
        desired_lines=res["desiredLines"],
    )


@router.post("/risk", response_model=RiskAnalysisResponse)
async def analyze_change_risk(
    payload: TranslateRequest,
    current_user: dict = Depends(require_permission("configs:read")),
):
    """Perform automated risk analysis, downtime estimation, and impact assessment."""
    ccm_dict = payload.ccm.model_dump()
    translated = translation_engine.translate_ccm(payload.vendor, ccm_dict)
    res = risk_engine.analyze_risk(ccm_dict, translated["generatedCommands"])
    return RiskAnalysisResponse(
        level=res["level"],
        score=res["score"],
        affected_interfaces=res["affectedInterfaces"],
        estimated_downtime_sec=res["estimatedDowntimeSec"],
        rollback_available=res["rollbackAvailable"],
        reasons=res["reasons"],
    )


@router.get("/capabilities")
async def list_capability_matrix():
    """Query multi-vendor hardware driver capability matrix."""
    return translation_engine.get_capability_matrix()
