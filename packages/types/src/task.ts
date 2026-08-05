export enum TaskExecutionStatus {
  QUEUED = 'QUEUED',
  RUNNING = 'RUNNING',
  RETRYING = 'RETRYING',
  WAITING_APPROVAL = 'WAITING_APPROVAL',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  ROLLBACK_STARTED = 'ROLLBACK_STARTED',
  ROLLBACK_FINISHED = 'ROLLBACK_FINISHED',
  FAILED = 'FAILED',
}

export enum TaskType {
  CONFIG_BACKUP = 'CONFIG_BACKUP',
  FIRMWARE_UPGRADE = 'FIRMWARE_UPGRADE',
  VLAN_SYNC = 'VLAN_SYNC',
  PORT_CONFIG = 'PORT_CONFIG',
  BULK_COMMAND = 'BULK_COMMAND',
  HEALTH_CHECK = 'HEALTH_CHECK',
}

export interface AutomationTask {
  id: string;
  type: TaskType;
  targetDeviceIds: string[];
  status: TaskExecutionStatus;
  payload: Record<string, unknown>;
  outputLog?: string;
  errorMessage?: string;
  initiatedBy: string;
  startedAt?: string;
  completedAt?: string;
  createdAt: string;
}
