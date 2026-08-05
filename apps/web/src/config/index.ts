/**
 * Web Application Environment Configurations
 */
export const webConfig = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1',
  appName: process.env.NEXT_PUBLIC_APP_NAME || 'SwitchPilot',
  env: process.env.NEXT_PUBLIC_APP_ENV || 'development',
} as const;
