export enum AssetLifecycleState {
  PLANNED = 'PLANNED',
  ORDERED = 'ORDERED',
  IN_TRANSIT = 'IN_TRANSIT',
  INSTALLED = 'INSTALLED',
  PRODUCTION = 'PRODUCTION',
  MAINTENANCE = 'MAINTENANCE',
  DEPRECATED = 'DEPRECATED',
  RETIRED = 'RETIRED',
  DISPOSED = 'DISPOSED',
}

export interface RegionEntity {
  id: string;
  organizationId: string;
  name: string;
  code: string;
}

export interface BuildingEntity {
  id: string;
  regionId: string;
  name: string;
  address?: string;
  floors: number;
}

export interface CmdbServiceEntity {
  id: string;
  organizationId: string;
  serviceName: string;
  appName: string;
  criticality: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  ownerUser: string;
  mappedDeviceIds: string[];
}

export interface TopologySnapshotEntity {
  id: string;
  versionLabel: string;
  nodesJson: string;
  linksJson: string;
  createdById: string;
  createdAt: string;
}

export interface NotificationQueueItemEntity {
  id: string;
  channel: string;
  title: string;
  message: string;
  retryCount: number;
  isDeadLetter: boolean;
  lastError?: string;
  createdAt: string;
}
