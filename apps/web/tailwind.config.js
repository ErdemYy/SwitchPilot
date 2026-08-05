"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                background: '#0B1220',
                surface: '#111827',
                card: '#172033',
                primary: {
                    DEFAULT: '#2563EB',
                    hover: '#1D4ED8',
                    light: '#3B82F6',
                },
                secondary: '#1E293B',
                success: '#22C55E',
                warning: '#F59E0B',
                danger: '#EF4444',
                info: '#38BDF8',
            },
            borderColor: {
                DEFAULT: 'rgba(255,255,255,0.08)',
                subtle: 'rgba(255,255,255,0.08)',
                highlight: 'rgba(255,255,255,0.16)',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
exports.default = config;
