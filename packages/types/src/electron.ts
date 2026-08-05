export interface ElectronPlatformInfo {
  platform: 'win32' | 'darwin' | 'linux';
  arch: 'x64' | 'arm64' | 'ia32';
  version: string;
  isElectron: boolean;
}

export interface ElectronOfflineChangeRequest {
  id: string;
  deviceId: string;
  ccmPayload: string;
  checksum: string;
  status: 'QUEUED_OFFLINE' | 'SYNCING' | 'SYNCED' | 'CONFLICT';
  createdAt: string;
}

export interface DesktopUpdateManifest {
  version: string;
  releaseNotes: string;
  pub_date: string;
  signature: string;
  files: Array<{
    url: string;
    sha512: string;
    size: number;
  }>;
}
