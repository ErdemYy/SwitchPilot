export enum ConnectionProtocol {
  SSH = 'SSH',
  TELNET = 'TELNET',
  NETCONF = 'NETCONF',
  RESTCONF = 'RESTCONF',
  SNMP_V2C = 'SNMP_V2C',
  SNMP_V3 = 'SNMP_V3',
  HTTPS_API = 'HTTPS_API',
  HTTP_API = 'HTTP_API',
  GRPC = 'GRPC',
}

export enum ConnectionErrorType {
  AUTH_FAILED = 'AUTH_FAILED',
  HOST_UNREACHABLE = 'HOST_UNREACHABLE',
  DNS_FAILURE = 'DNS_FAILURE',
  CONNECTION_REFUSED = 'CONNECTION_REFUSED',
  TIMEOUT = 'TIMEOUT',
  PERMISSION_DENIED = 'PERMISSION_DENIED',
  PROTOCOL_UNSUPPORTED = 'PROTOCOL_UNSUPPORTED',
  CERTIFICATE_ERROR = 'CERTIFICATE_ERROR',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
}

export enum CredentialType {
  PASSWORD = 'PASSWORD',
  SSH_KEY = 'SSH_KEY',
  API_TOKEN = 'API_TOKEN',
  OAUTH_TOKEN = 'OAUTH_TOKEN',
  SNMP_COMMUNITY = 'SNMP_COMMUNITY',
  SNMP_V3_USER = 'SNMP_V3_USER',
  CLIENT_CERTIFICATE = 'CLIENT_CERTIFICATE',
}

export enum TestConnectionState {
  QUEUED = 'QUEUED',
  CONNECTING = 'CONNECTING',
  AUTHENTICATING = 'AUTHENTICATING',
  NEGOTIATING = 'NEGOTIATING',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
  TIMEOUT = 'TIMEOUT',
  CANCELLED = 'CANCELLED',
}

export interface VaultSecret {
  id: string;
  organizationId: string;
  name: string;
  type: CredentialType;
  vaultEngineRef?: string;
  createdAt: string;
  updatedAt: string;
}

export interface BastionHost {
  id: string;
  organizationId: string;
  name: string;
  hostname: string;
  port: number;
  username: string;
  sshKeyRef?: string;
}

export interface ConnectionEntity {
  id: string;
  deviceId: string;
  protocol: ConnectionProtocol;
  port: number;
  timeoutSec: number;
  retries: number;
  keepAlive: boolean;
  compression: boolean;
  bastionId?: string;
  status: 'IDLE' | 'CONNECTED' | 'FAILED';
  lastConnectedAt?: string;
  latencyMs?: number;
  lastErrorType?: ConnectionErrorType;
  lastErrorMessage?: string;
}

export interface ConnectionTestResult {
  state: TestConnectionState;
  protocol: ConnectionProtocol;
  targetHost: string;
  port: number;
  latencyMs?: number;
  errorMessage?: string;
  steps: { name: string; status: 'SUCCESS' | 'FAILED' | 'PENDING' }[];
}
