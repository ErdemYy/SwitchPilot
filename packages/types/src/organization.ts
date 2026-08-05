export interface SecurityPolicy {
  id: string;
  organizationId: string;
  minPasswordLength: number;
  requireUppercase: boolean;
  requireNumbers: boolean;
  requireSpecialChars: boolean;
  sessionMaxDurationMin: number;
  idleTimeoutMin: number;
  enforceMfa: boolean;
}

export interface Organization {
  id: string;
  name: string;
  slug: string;
  logoUrl?: string;
  timezone: string;
  language: string;
  securityPolicy?: SecurityPolicy;
  createdAt: string;
  updatedAt: string;
}

export interface CreateOrganizationPayload {
  name: string;
  slug: string;
  timezone?: string;
  language?: string;
}
