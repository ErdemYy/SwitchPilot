export enum SystemDefaultRole {
  OWNER = 'Owner',
  ADMINISTRATOR = 'Administrator',
  NETWORK_ENGINEER = 'Network Engineer',
  OPERATOR = 'Operator',
  READ_ONLY = 'Read Only',
}

export interface Permission {
  id: string;
  code: string;
  name: string;
  description: string;
  group: string;
}

export interface Role {
  id: string;
  name: string;
  description?: string;
  isSystemDefault: boolean;
  organizationId: string;
  permissions: Permission[];
  createdAt: string;
  updatedAt: string;
}

export interface CreateRolePayload {
  name: string;
  description?: string;
  permissionIds: string[];
}
