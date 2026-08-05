export enum PlatformPlan {
  COMMUNITY = 'COMMUNITY',
  PROFESSIONAL = 'PROFESSIONAL',
  BUSINESS = 'BUSINESS',
  ENTERPRISE = 'ENTERPRISE',
  MSP = 'MSP',
  CUSTOM = 'CUSTOM',
}

export enum TenantType {
  SINGLE_TENANT = 'SINGLE_TENANT',
  MULTI_TENANT = 'MULTI_TENANT',
  ENTERPRISE_TENANT = 'ENTERPRISE_TENANT',
  MSP_TENANT = 'MSP_TENANT',
}

export enum FeatureFlagScope {
  GLOBAL = 'GLOBAL',
  TENANT = 'TENANT',
  ORGANIZATION = 'ORGANIZATION',
  USER = 'USER',
}

export enum LicenseType {
  CLOUD = 'CLOUD',
  OFFLINE = 'OFFLINE',
  FLOATING = 'FLOATING',
  TRIAL = 'TRIAL',
  ACADEMIC = 'ACADEMIC',
}

export interface MspPartnerEntity {
  id: string;
  name: string;
  slug: string;
  contactEmail: string;
  isVerified: boolean;
  createdAt: string;
}

export interface SubscriptionEntity {
  id: string;
  organizationId: string;
  plan: PlatformPlan;
  status: string;
  deviceLimit: number;
  userLimit: number;
  aiLimit: number;
  currentPeriodEnd: string;
}

export interface LicenseKeyEntity {
  id: string;
  organizationId: string;
  keyString: string;
  type: LicenseType;
  maxDevices: number;
  isActivated: boolean;
  expiresAt: string;
  graceDays: number;
}

export interface FeatureFlagEntity {
  id: string;
  key: string;
  scope: FeatureFlagScope;
  isEnabled: boolean;
  rolloutPercentage: number;
}

export interface ApiKeyEntity {
  id: string;
  organizationId: string;
  name: string;
  prefix: string;
  scopes: string[];
  rateLimitPerMin: number;
  lastUsedAt?: string;
  expiresAt?: string;
}

export interface MarketplacePluginEntity {
  id: string;
  code: string;
  name: string;
  version: string;
  category: string;
  author: string;
  description: string;
  rating: number;
  isVerified: boolean;
  isInstalled: boolean;
}

export interface BillingInvoiceEntity {
  id: string;
  organizationId: string;
  invoiceNumber: string;
  amountUsd: number;
  status: 'DRAFT' | 'OPEN' | 'PAID' | 'UNCOLLECTIBLE' | 'VOID';
  dueDate: string;
  createdAt: string;
}

export interface TenantQuotaEntity {
  id: string;
  organizationId: string;
  maxDevices: number;
  maxUsers: number;
  maxApiCalls: number;
  maxStorageGb: number;
  usedDevices: number;
  usedStorageGb: number;
}
