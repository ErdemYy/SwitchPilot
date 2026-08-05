export enum DiscoveryMethod {
  LLDP = 'LLDP',
  CDP = 'CDP',
  SNMP = 'SNMP',
  NETCONF = 'NETCONF',
  RESTCONF = 'RESTCONF',
  REST_API = 'REST_API',
  SSH_DISCOVERY = 'SSH_DISCOVERY',
  ARP_TABLES = 'ARP_TABLES',
  MAC_TABLES = 'MAC_TABLES',
  ROUTING_TABLES = 'ROUTING_TABLES',
  STREAMING_TELEMETRY = 'STREAMING_TELEMETRY',
}

export enum DiscoveryStatus {
  QUEUED = 'QUEUED',
  SCANNING_SEEDS = 'SCANNING_SEEDS',
  DISCOVERING_NEIGHBORS = 'DISCOVERING_NEIGHBORS',
  FINGERPRINTING = 'FINGERPRINTING',
  SYNCHRONIZING_INVENTORY = 'SYNCHRONIZING_INVENTORY',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

export enum TopologyLayer {
  LAYER_1 = 'LAYER_1',
  LAYER_2 = 'LAYER_2',
  LAYER_3 = 'LAYER_3',
  VIRTUAL = 'VIRTUAL',
}

export enum LayoutType {
  FORCE_DIRECTED = 'FORCE_DIRECTED',
  HIERARCHICAL = 'HIERARCHICAL',
  RADIAL = 'RADIAL',
  GRID = 'GRID',
}

export interface DiscoveryJobEntity {
  id: string;
  organizationId: string;
  name: string;
  seedIps: string[];
  scanSubnets: string[];
  status: DiscoveryStatus;
  discoveredCount: number;
  startedAt?: string;
  completedAt?: string;
}

export interface TopologyNodeEntity {
  id: string;
  deviceId: string;
  label: string;
  role: string;
  layer: TopologyLayer;
  posX: number;
  posY: number;
  isSpof: boolean;
}

export interface TopologyLinkEntity {
  id: string;
  sourceNodeId: string;
  targetNodeId: string;
  linkType: string;
  protocol: string;
  bandwidth: string;
  status: 'UP' | 'DOWN' | 'DEGRADED';
  isRedundant: boolean;
}

export interface DeviceDependencyEntity {
  id: string;
  parentDeviceId: string;
  childDeviceId: string;
  dependencyType: string;
  criticality: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  blastRadiusScore: number;
}
