/**
 * SwitchPilot Enterprise Color System Tokens
 * Strictly styled to match Cisco Meraki, Ubiquiti UniFi, Vercel, Linear, Cloudflare Zero Trust, and Notion aesthetics.
 */
export const colors = {
  primary: '#2563EB',         // Vibrant Blue
  secondary: '#1E293B',       // Slate Secondary
  background: '#0B1220',      // Ultra Dark NOC Background
  surface: '#111827',         // Surface Dark Container
  card: '#172033',            // Premium Dark Card Surface
  border: 'rgba(255,255,255,.08)', // Subtle Linear/Vercel Glass Border
  borderLight: 'rgba(255,255,255,.12)',

  status: {
    success: '#22C55E',       // Green (Online / Healthy)
    successBg: 'rgba(34,197,94,0.1)',
    warning: '#F59E0B',       // Amber (Degraded / Warning)
    warningBg: 'rgba(245,158,11,0.1)',
    danger: '#EF4444',        // Red (Unreachable / Critical)
    dangerBg: 'rgba(239,68,68,0.1)',
    info: '#38BDF8',          // Sky Blue (Syncing / Info)
    infoBg: 'rgba(56,189,248,0.1)',
  },

  slate: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
    950: '#0B1220',
  },
} as const;

export type Colors = typeof colors;
