// ---------------------------------------------------------------------------
// Enterprise Monitoring, Telemetry & Event Platform — Domain Contracts
// ---------------------------------------------------------------------------

// ── Telemetry Sources ───────────────────────────────────────────────────────

export enum TelemetrySource {
  SNMP_V2 = 'SNMP_V2',
  SNMP_V3 = 'SNMP_V3',
  STREAMING_TELEMETRY = 'STREAMING_TELEMETRY',
  GNMI = 'GNMI',
  SYSLOG = 'SYSLOG',
  REST_API = 'REST_API',
  NETCONF_NOTIFICATION = 'NETCONF_NOTIFICATION',
  WEBHOOK = 'WEBHOOK',
  CUSTOM_COLLECTOR = 'CUSTOM_COLLECTOR',
}

// ── Metric Types ────────────────────────────────────────────────────────────

export enum MetricType {
  CPU_USAGE = 'CPU_USAGE',
  MEMORY_USAGE = 'MEMORY_USAGE',
  TEMPERATURE = 'TEMPERATURE',
  POWER_SUPPLY = 'POWER_SUPPLY',
  FAN_STATUS = 'FAN_STATUS',
  STORAGE = 'STORAGE',
  LATENCY = 'LATENCY',
  PACKET_LOSS = 'PACKET_LOSS',
  JITTER = 'JITTER',
  UPTIME = 'UPTIME',
  INTERFACE_UTILIZATION = 'INTERFACE_UTILIZATION',
  CRC_ERRORS = 'CRC_ERRORS',
  DROPPED_PACKETS = 'DROPPED_PACKETS',
  BANDWIDTH = 'BANDWIDTH',
  POE_USAGE = 'POE_USAGE',
  MAC_TABLE_SIZE = 'MAC_TABLE_SIZE',
  ARP_TABLE_SIZE = 'ARP_TABLE_SIZE',
  ROUTING_TABLE_SIZE = 'ROUTING_TABLE_SIZE',
  STP_STATE = 'STP_STATE',
}

// ── Alert Severity ──────────────────────────────────────────────────────────

export enum AlertSeverity {
  INFO = 'INFO',
  WARNING = 'WARNING',
  MINOR = 'MINOR',
  MAJOR = 'MAJOR',
  CRITICAL = 'CRITICAL',
  EMERGENCY = 'EMERGENCY',
}

export enum AlertType {
  THRESHOLD = 'THRESHOLD',
  RATE = 'RATE',
  ANOMALY = 'ANOMALY',
  MISSING_TELEMETRY = 'MISSING_TELEMETRY',
  DEVICE_DOWN = 'DEVICE_DOWN',
  INTERFACE_DOWN = 'INTERFACE_DOWN',
  CONFIG_DRIFT = 'CONFIG_DRIFT',
  AUTH_FAILURE = 'AUTH_FAILURE',
  EXECUTION_FAILURE = 'EXECUTION_FAILURE',
  WORKFLOW_FAILURE = 'WORKFLOW_FAILURE',
}

export enum AlertStatus {
  ACTIVE = 'ACTIVE',
  ACKNOWLEDGED = 'ACKNOWLEDGED',
  RESOLVED = 'RESOLVED',
  SUPPRESSED = 'SUPPRESSED',
}

// ── Entities ────────────────────────────────────────────────────────────────

export interface DeviceMetricEntity {
  id: string;
  deviceId: string;
  metricType: MetricType;
  value: number;
  unit: string;
  source: TelemetrySource;
  collectedAt: string;
}

export interface AlertEntity {
  id: string;
  organizationId: string;
  deviceId: string;
  type: AlertType;
  severity: AlertSeverity;
  status: AlertStatus;
  title: string;
  description: string;
  acknowledgedBy?: string;
  resolvedAt?: string;
  correlationGroupId?: string;
  createdAt: string;
}

export interface AlertPolicyEntity {
  id: string;
  organizationId: string;
  name: string;
  metricType: MetricType;
  condition: 'GREATER_THAN' | 'LESS_THAN' | 'EQUALS' | 'NOT_EQUALS';
  thresholdValue: number;
  severity: AlertSeverity;
  isActive: boolean;
}

export interface CorrelationResult {
  groupId: string;
  rootCauseAlertId: string;
  correlatedAlertIds: string[];
  strategy: 'ROOT_CAUSE' | 'DEPENDENCY' | 'DUPLICATE_SUPPRESSION' | 'STORM_DETECTION' | 'TOPOLOGY';
  confidence: number;
}

export interface CollectorStatusEntity {
  id: string;
  name: string;
  source: TelemetrySource;
  status: 'RUNNING' | 'STOPPED' | 'ERROR';
  devicesMonitored: number;
  lastPollAt?: string;
}

export interface DashboardWidgetData {
  widgetId: string;
  title: string;
  type: 'GAUGE' | 'TIMESERIES' | 'TABLE' | 'HEATMAP' | 'COUNTER' | 'STATUS';
  data: Record<string, unknown>;
}

// ── Domain Event Category Enum (mirrored from backend) ──────────────────────

export enum DomainEventCategory {
  DEVICE = 'DEVICE',
  EXECUTION = 'EXECUTION',
  WORKFLOW = 'WORKFLOW',
  AI = 'AI',
  TELEMETRY = 'TELEMETRY',
  ALERT = 'ALERT',
  AUDIT = 'AUDIT',
  NOTIFICATION = 'NOTIFICATION',
  TOPOLOGY = 'TOPOLOGY',
  POLICY = 'POLICY',
}
