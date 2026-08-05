from typing import List, Optional, Dict, Any
from pydantic import BaseModel


class ExecutiveKpiResponse(BaseModel):
    availabilityScore: float
    healthScore: float
    automationScore: float
    complianceScore: float
    riskScore: int
    totalDevices: int
    activeAlerts: int
    recentExecutions: int


class CapacityForecastSchema(BaseModel):
    resourceName: str
    currentUsagePct: float
    growthRateMonthlyPct: float
    estimatedExhaustionDays: int
    status: str


class ComplianceScorecardResponse(BaseModel):
    overallCompliancePct: float
    passwordPoliciesPct: float
    firmwareCompliancePct: float
    aclCompliancePct: float
    goldenBaselinePct: float
    totalViolations: int


class GenerateReportRequest(BaseModel):
    report_type: str = "EXECUTIVE_SUMMARY"
    export_format: str = "PDF"


class ReportArtifactResponse(BaseModel):
    artifact_id: str
    title: str
    report_type: str
    format: str
    file_url: str
    file_size_bytes: int
    generated_by: str
    created_at: str


class CreateScheduleRequest(BaseModel):
    report_type: str = "EXECUTIVE_SUMMARY"
    frequency: str = "WEEKLY"
    recipients: List[str] = ["noc-team@switchpilot.io"]
    format: str = "PDF"


class ReportScheduleResponse(BaseModel):
    schedule_id: str
    report_type: str
    frequency: str
    recipients: List[str]
    format: str
    is_active: bool
    next_run_at: str
