export enum TemplateCategory {
  VLAN_MANAGEMENT = 'VLAN_MANAGEMENT',
  PORT_CONFIG = 'PORT_CONFIG',
  SYSTEM_IDENTITY = 'SYSTEM_IDENTITY',
  TELEMETRY_LOGGING = 'TELEMETRY_LOGGING',
  SECURITY_AAA = 'SECURITY_AAA',
  FIRMWARE_MAINTENANCE = 'FIRMWARE_MAINTENANCE',
  GOLDEN_BASELINE = 'GOLDEN_BASELINE',
  COMPLIANCE = 'COMPLIANCE',
}

export enum WorkflowNodeType {
  STEP_EXECUTION = 'STEP_EXECUTION',
  PARALLEL_BRANCH = 'PARALLEL_BRANCH',
  CONDITIONAL_IF = 'CONDITIONAL_IF',
  APPROVAL_GATE = 'APPROVAL_GATE',
  WAIT_DELAY = 'WAIT_DELAY',
  VERIFICATION = 'VERIFICATION',
  ROLLBACK_TRIGGER = 'ROLLBACK_TRIGGER',
  NOTIFICATION = 'NOTIFICATION',
}

export interface AutomationTemplateEntity {
  id: string;
  organizationId: string;
  name: string;
  code: string;
  category: TemplateCategory;
  description: string;
  ccmSchemaJson: string;
  variableSchema: string;
  isGlobal: boolean;
  createdAt: string;
}

export interface WorkflowNode {
  id: string;
  type: WorkflowNodeType;
  name: string;
  config: Record<string, unknown>;
  nextNodes: string[];
}

export interface AutomationWorkflowEntity {
  id: string;
  organizationId: string;
  name: string;
  nodes: WorkflowNode[];
  targetFilter: {
    groupId?: string;
    vendor?: string;
    locationId?: string;
    tags?: string[];
  };
  isCanaryActive: boolean;
  createdAt: string;
}

export interface AutomationScheduleEntity {
  id: string;
  workflowId: string;
  cronExpression: string;
  isActive: boolean;
  lastRunAt?: string;
  nextRunAt?: string;
}

export interface MaintenanceWindowEntity {
  id: string;
  name: string;
  startTime: string;
  endTime: string;
  isFreezeWindow: boolean;
}
