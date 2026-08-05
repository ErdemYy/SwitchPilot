export enum DeploymentModel {
  CLOUD_SAAS = 'CLOUD_SAAS',
  SINGLE_SERVER = 'SINGLE_SERVER',
  ON_PREMISE = 'ON_PREMISE',
  AIR_GAPPED = 'AIR_GAPPED',
  HIGH_AVAILABILITY = 'HIGH_AVAILABILITY',
  MULTI_REGION = 'MULTI_REGION',
  DISASTER_RECOVERY = 'DISASTER_RECOVERY',
  MSP_MULTI_TENANT = 'MSP_MULTI_TENANT',
  HYBRID_CLOUD = 'HYBRID_CLOUD',
  EDGE = 'EDGE',
}

export interface PreflightResourceCheck {
  item: string;
  required: string;
  actual: string;
  status: 'PASSED' | 'WARNING' | 'FAILED';
}

export interface PreflightReport {
  timestamp: string;
  deploymentModel: DeploymentModel;
  overallStatus: 'READY' | 'WARNING' | 'BLOCKED';
  checks: PreflightResourceCheck[];
}

export interface AirgappedPackageManifest {
  packageId: string;
  version: string;
  signature: string;
  sizeBytes: number;
  components: string[];
  imagesCount: number;
  pluginsCount: number;
  createdAt: string;
}

export interface BackupSnapshotMetadata {
  id: string;
  type: 'FULL' | 'INCREMENTAL' | 'DATABASE' | 'AI_KNOWLEDGE' | 'CONFIG';
  sizeMb: number;
  checksum: string;
  encrypted: boolean;
  createdAt: string;
}

export interface MigrationPlan {
  currentTier: 'COMMUNITY' | 'PRO' | 'ENTERPRISE' | 'MSP';
  targetTier: 'PRO' | 'ENTERPRISE' | 'MSP';
  currentTopology: 'SINGLE_TENANT' | 'MULTI_TENANT';
  targetTopology: 'SINGLE_TENANT' | 'MULTI_TENANT';
  estimatedDurationMinutes: number;
  requiresDowntime: boolean;
}
