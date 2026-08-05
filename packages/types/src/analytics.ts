export enum ReportType {
  EXECUTIVE_SUMMARY = 'EXECUTIVE_SUMMARY',
  NETWORK_HEALTH = 'NETWORK_HEALTH',
  DEVICE_INVENTORY = 'DEVICE_INVENTORY',
  CONFIG_DRIFT = 'CONFIG_DRIFT',
  COMPLIANCE = 'COMPLIANCE',
  SECURITY = 'SECURITY',
  FIRMWARE_LIFECYCLE = 'FIRMWARE_LIFECYCLE',
  CAPACITY_PLANNING = 'CAPACITY_PLANNING',
  AVAILABILITY = 'AVAILABILITY',
  PERFORMANCE = 'PERFORMANCE',
  AUTOMATION_ACTIVITY = 'AUTOMATION_ACTIVITY',
  EXECUTION_SUCCESS_RATE = 'EXECUTION_SUCCESS_RATE',
  ROLLBACK_STATISTICS = 'ROLLBACK_STATISTICS',
  ALERT_STATISTICS = 'ALERT_STATISTICS',
  AI_USAGE = 'AI_USAGE',
  LICENSE_USAGE = 'LICENSE_USAGE',
  AUDIT_REPORTS = 'AUDIT_REPORTS',
}

export enum ExportFormat {
  PDF = 'PDF',
  EXCEL = 'EXCEL',
  CSV = 'CSV',
  JSON = 'JSON',
}

export interface ExecutiveKpis {
  availabilityScore: number;
  healthScore: number;
  automationScore: number;
  complianceScore: number;
  riskScore: number;
  totalDevices: number;
  activeAlerts: number;
  recentExecutions: number;
}

export interface CapacityForecastItem {
  resourceName: string;
  currentUsagePct: number;
  growthRateMonthlyPct: number;
  estimatedExhaustionDays: number;
  status: 'OPTIMAL' | 'WARNING' | 'CRITICAL';
}

export interface ComplianceScorecard {
  overallCompliancePct: number;
  passwordPoliciesPct: number;
  firmwareCompliancePct: number;
  aclCompliancePct: number;
  goldenBaselinePct: number;
  totalViolations: number;
}

export interface ReportScheduleEntity {
  id: string;
  organizationId: string;
  reportType: ReportType;
  frequency: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'QUARTERLY' | 'YEARLY';
  recipients: string[];
  format: ExportFormat;
  isActive: boolean;
  lastRunAt?: string;
  nextRunAt?: string;
}

export interface ReportArtifactEntity {
  id: string;
  title: string;
  reportType: ReportType;
  format: ExportFormat;
  fileUrl?: string;
  fileSizeBytes: number;
  generatedBy: string;
  createdAt: string;
}
