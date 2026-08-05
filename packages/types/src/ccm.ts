export enum RiskLevel {
  SAFE = 'SAFE',
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL',
}

export interface VlanConfig {
  id: number;
  name: string;
  description?: string;
  ipAddress?: string;
  netmask?: string;
}

export interface InterfaceConfig {
  name: string;
  mode: 'ACCESS' | 'TRUNK' | 'HYBRID';
  vlanId?: number;
  nativeVlanId?: number;
  allowedVlans?: string;
  description?: string;
  speed?: string;
  duplex?: 'auto' | 'full' | 'half';
  poeEnabled?: boolean;
  portSecurityEnabled?: boolean;
  maxMacCount?: number;
}

export interface StpConfig {
  enabled: boolean;
  mode: 'STP' | 'RSTP' | 'MSTP';
  priority: number;
}

export interface SyslogConfig {
  enabled: boolean;
  serverIp?: string;
  severityLevel?: string;
}

export interface CanonicalConfigModel {
  hostname: string;
  domainName?: string;
  vlans: VlanConfig[];
  interfaces: InterfaceConfig[];
  stp?: StpConfig;
  syslog?: SyslogConfig;
  bannerLogin?: string;
  bannerMotd?: string;
}

export interface TranslationOutput {
  vendor: string;
  format: 'CLI' | 'NETCONF_XML' | 'RESTCONF_JSON' | 'REST_API';
  generatedCommands: string[];
  commandText: string;
}

export interface DiffResult {
  unifiedDiff: string;
  currentLines: string[];
  desiredLines: string[];
}

export interface RiskAnalysisResult {
  level: RiskLevel;
  score: number; // 0 - 100
  affectedInterfaces: string[];
  estimatedDowntimeSec: number;
  rollbackAvailable: boolean;
  reasons: string[];
}

export interface CapabilityInfo {
  feature: string;
  supported: boolean;
  note?: string;
}

export interface VendorCapabilityMatrix {
  vendor: string;
  supportedVersions: string[];
  capabilities: CapabilityInfo[];
}
