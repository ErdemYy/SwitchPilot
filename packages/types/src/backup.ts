export enum SnapshotType {
  RUNNING_CONFIG = 'RUNNING_CONFIG',
  STARTUP_CONFIG = 'STARTUP_CONFIG',
  CANDIDATE_CONFIG = 'CANDIDATE_CONFIG',
  GOLDEN_CONFIG = 'GOLDEN_CONFIG',
  LAST_KNOWN_GOOD = 'LAST_KNOWN_GOOD',
  PRE_CHANGE_SNAPSHOT = 'PRE_CHANGE_SNAPSHOT',
  POST_CHANGE_SNAPSHOT = 'POST_CHANGE_SNAPSHOT',
  EMERGENCY_SNAPSHOT = 'EMERGENCY_SNAPSHOT',
}

export enum ChangeCategory {
  EMERGENCY = 'EMERGENCY',
  STANDARD = 'STANDARD',
  MAJOR = 'MAJOR',
  MINOR = 'MINOR',
}

export enum ChangeApprovalStatus {
  DRAFT = 'DRAFT',
  PENDING_REVIEW = 'PENDING_REVIEW',
  PENDING_APPROVAL = 'PENDING_APPROVAL',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  EXECUTED = 'EXECUTED',
  CANCELLED = 'CANCELLED',
}

export interface ConfigSnapshotEntity {
  id: string;
  deviceId: string;
  type: SnapshotType;
  rawConfig: string;
  checksumSha: string;
  versionLabel: string;
  createdAt: string;
}

export interface ConfigVersionEntity {
  id: string;
  deviceId: string;
  parentVerId?: string;
  branch: string;
  author: string;
  checksumSha: string;
  rawConfig: string;
  changeSummary?: string;
  riskLevel: string;
  createdAt: string;
}

export interface ChangeApprovalStep {
  id: string;
  stepName: string;
  approverName: string;
  isApproved: boolean;
  comments?: string;
  decidedAt?: string;
}

export interface ChangeRequestEntity {
  id: string;
  organizationId: string;
  requesterName: string;
  title: string;
  description: string;
  category: ChangeCategory;
  status: ChangeApprovalStatus;
  targetDevices: string[];
  approvals: ChangeApprovalStep[];
  createdAt: string;
}

export interface RollbackPreviewResult {
  deviceId: string;
  currentVersionId: string;
  targetVersionId: string;
  selectiveMode: 'FULL' | 'SELECTIVE_LINES' | 'SELECTIVE_INTERFACES';
  unifiedDiff: string;
  isSafetyValidated: boolean;
  safetyChecks: { name: string; status: 'PASSED' | 'FAILED' }[];
}
