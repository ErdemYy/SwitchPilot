export enum ExecutionMode {
  DRY_RUN = 'DRY_RUN',
  PREVIEW_ONLY = 'PREVIEW_ONLY',
  IMMEDIATE = 'IMMEDIATE',
  SCHEDULED = 'SCHEDULED',
  MAINTENANCE_WINDOW = 'MAINTENANCE_WINDOW',
  BULK_EXECUTION = 'BULK_EXECUTION',
  CANARY_DEPLOYMENT = 'CANARY_DEPLOYMENT',
  PHASED_ROLLOUT = 'PHASED_ROLLOUT',
  EMERGENCY = 'EMERGENCY',
  ROLLBACK = 'ROLLBACK',
}

export enum ExecutionStatus {
  QUEUED = 'QUEUED',
  PREPARING = 'PREPARING',
  WAITING_APPROVAL = 'WAITING_APPROVAL',
  CONNECTING = 'CONNECTING',
  AUTHENTICATING = 'AUTHENTICATING',
  EXECUTING = 'EXECUTING',
  VERIFYING = 'VERIFYING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  CANCELLED = 'CANCELLED',
  ROLLING_BACK = 'ROLLING_BACK',
  ROLLBACK_COMPLETED = 'ROLLBACK_COMPLETED',
}

export interface ExecutionStep {
  id: string;
  stepName: string;
  status: 'PENDING' | 'RUNNING' | 'SUCCESS' | 'FAILED';
  commandText?: string;
  outputLog?: string;
  executedAt?: string;
}

export interface NapalmVerificationReport {
  isVerified: boolean;
  runningConfigHash: string;
  startupConfigHash: string;
  diffMatched: boolean;
  interfaceStates: { name: string; operStatus: 'UP' | 'DOWN' }[];
}

export interface ExecutionPlanEntity {
  id: string;
  organizationId: string;
  initiatedBy: string;
  mode: ExecutionMode;
  status: ExecutionStatus;
  riskLevel: string;
  targetDevices: string[];
  driverUsed: 'Scrapli' | 'Netmiko (Fallback)';
  steps: ExecutionStep[];
  startedAt?: string;
  completedAt?: string;
  failureReason?: string;
  verificationReport?: NapalmVerificationReport;
}
