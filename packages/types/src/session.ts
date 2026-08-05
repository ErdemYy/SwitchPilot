export interface UserSession {
  id: string;
  userId: string;
  deviceAgent?: string;
  ipAddress?: string;
  isRevoked: boolean;
  lastActiveAt: string;
  expiresAt: string;
  createdAt: string;
  isCurrentSession?: boolean;
}
