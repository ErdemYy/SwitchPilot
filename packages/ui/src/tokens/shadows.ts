/**
 * SwitchPilot Design System - Shadows Tokens
 */
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  glowBlue: '0 0 15px rgba(15, 82, 186, 0.35)',
  glowSuccess: '0 0 15px rgba(16, 185, 129, 0.35)',
  glowDanger: '0 0 15px rgba(239, 68, 68, 0.35)',
} as const;

export type Shadows = typeof shadows;
