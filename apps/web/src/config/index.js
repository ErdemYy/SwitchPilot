"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webConfig = void 0;
/**
 * Web Application Environment Configurations
 */
exports.webConfig = {
    apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1',
    appName: process.env.NEXT_PUBLIC_APP_NAME || 'SwitchPilot',
    env: process.env.NEXT_PUBLIC_APP_ENV || 'development',
};
