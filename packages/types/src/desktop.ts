export enum AuthProviderType {
  LOCAL = 'LOCAL',
  OIDC = 'OIDC',
  OAUTH2 = 'OAUTH2',
  AZURE_AD = 'AZURE_AD',
  GOOGLE = 'GOOGLE',
  GITHUB = 'GITHUB',
  SAML2 = 'SAML2',
  LDAP = 'LDAP',
  ACTIVE_DIRECTORY = 'ACTIVE_DIRECTORY',
}

export enum MfaType {
  TOTP = 'TOTP',
  HARDWARE_KEY = 'HARDWARE_KEY',
  RECOVERY_CODE = 'RECOVERY_CODE',
}

export enum ReleaseChannel {
  STABLE = 'STABLE',
  BETA = 'BETA',
  CANARY = 'CANARY',
  DEVELOPER = 'DEVELOPER',
}

export enum SyncStatus {
  IDLE = 'IDLE',
  SYNCING = 'SYNCING',
  CONFLICT = 'CONFLICT',
  ERROR = 'ERROR',
}

export interface EnterpriseAuthSession {
  sessionId: string;
  userId: string;
  provider: AuthProviderType;
  accessToken: string;
  refreshToken: string;
  isOfflineCached: boolean;
  rememberDevice: boolean;
  mfaVerified: boolean;
  expiresAt: string;
}

export interface SyncConflictItem {
  id: string;
  entityType: 'DEVICE' | 'CONFIG' | 'SNAPSHOT' | 'WORKFLOW';
  localChecksum: string;
  cloudChecksum: string;
  timestamp: string;
  conflictReason: string;
}

export interface DesktopSettingsEntity {
  theme: 'dark' | 'light' | 'system';
  language: string;
  networkProxy?: string;
  customCaCertificates: string[];
  autoUpdateChannel: ReleaseChannel;
  telemetryEnabled: boolean;
  appLockTimeoutMinutes: number;
  clipboardAutoClearSeconds: number;
  offlineSyncIntervalSeconds: number;
  hardwareAcceleration: boolean;
}

export interface UpdaterManifest {
  version: string;
  releaseNotes: string;
  pub_date: string;
  signature: string;
  platforms: {
    'windows-x86_64': { url: string; signature: string };
    'windows-aarch64': { url: string; signature: string };
  };
}
