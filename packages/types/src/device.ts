import { NetworkVendor, ConnectionProtocol } from './vendor';

export enum DeviceStatus {
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE',
  UNREACHABLE = 'UNREACHABLE',
  MAINTENANCE = 'MAINTENANCE',
  SYNCING = 'SYNCING',
  ERROR = 'ERROR',
}

export interface DeviceLocation {
  id: string;
  siteName: string;
  building?: string;
  floor?: string;
  rack?: string;
  gpsCoords?: string;
}

export interface DeviceCredential {
  id: string;
  name: string;
  username: string;
  sshKeyPath?: string;
}

export interface DeviceConnection {
  deviceId: string;
  primaryProtocol: ConnectionProtocol;
  port: number;
  connectTimeoutSec: number;
  readTimeoutSec: number;
  lastConnectedAt?: string;
}

export interface DeviceHealth {
  deviceId: string;
  cpuUsagePct: number;
  memUsagePct: number;
  tempCelsius?: number;
  fanStatus: string;
  psuStatus: string;
  updatedAt: string;
}

export interface DeviceCapability {
  deviceId: string;
  supportsVlanManagement: boolean;
  supportsPortSecurity: boolean;
  supportsFirmwareUpgrade: boolean;
  supportsDiffBackup: boolean;
  supportsNetconf: boolean;
  supportsRestconf: boolean;
}

export interface DeviceInterface {
  id: string;
  deviceId: string;
  name: string;
  description?: string;
  speed: string;
  adminStatus: 'UP' | 'DOWN';
  operStatus: 'UP' | 'DOWN';
  mode: 'ACCESS' | 'TRUNK' | 'HYBRID';
  vlanId?: number;
  poeEnabled: boolean;
}

export interface DeviceSnapshot {
  id: string;
  deviceId: string;
  rawConfig: string;
  checksumSha: string;
  versionLabel: string;
  createdAt: string;
}

export interface DeviceInventory {
  id: string;
  deviceId: string;
  slotName: string;
  component: string;
  serialNumber?: string;
  partNumber?: string;
}

export interface DeviceTag {
  id: string;
  deviceId: string;
  key: string;
  value: string;
}

export interface DeviceGroup {
  id: string;
  organizationId: string;
  name: string;
  description?: string;
  parentId?: string;
}

export interface Firmware {
  id: string;
  organizationId: string;
  vendor: NetworkVendor;
  targetModel: string;
  version: string;
  filename: string;
  checksumSha256: string;
  sizeBytes: number;
  createdAt: string;
}

export interface NetworkDevice {
  id: string;
  organizationId: string;
  hostname: string;
  managementIp: string;
  vendor: NetworkVendor;
  model: string;
  osVersion: string;
  status: DeviceStatus;
  groupId?: string;
  location?: DeviceLocation;
  connection?: DeviceConnection;
  health?: DeviceHealth;
  capability?: DeviceCapability;
  tags?: DeviceTag[];
  createdAt: string;
  updatedAt: string;
}
