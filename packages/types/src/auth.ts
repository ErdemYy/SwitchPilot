export interface AuthUser {
  id: string;
  email: string;
  fullName: string;
  avatarUrl?: string;
  organizationId: string;
  organizationName?: string;
  roles: string[];
  permissions: string[];
  isEmailVerified: boolean;
  isActive: boolean;
}

export interface LoginResponse {
  accessToken: string;
  tokenType: string;
  expiresIn: number;
  user: AuthUser;
}

export interface RegisterPayload {
  email: string;
  password: string;
  fullName: string;
  organizationName: string;
}

export interface InviteUserPayload {
  email: string;
  roleId: string;
}

export interface AcceptInvitePayload {
  token: string;
  password: string;
  fullName: string;
}
