"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
exports.default = (0, test_1.defineConfig)({
    testDir: './e2e',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 2 : undefined,
    reporter: [['html', { outputFolder: 'playwright-report' }], ['junit', { outputFile: 'junit-e2e-report.xml' }]],
    use: {
        baseURL: 'http://localhost:3000',
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
    },
    projects: [
        {
            name: 'chromium-desktop',
            use: { ...test_1.devices['Desktop Chrome'], viewport: { width: 1440, height: 900 } },
        },
        {
            name: 'webkit-desktop',
            use: { ...test_1.devices['Desktop Safari'], viewport: { width: 1440, height: 900 } },
        },
        {
            name: 'responsive-mobile',
            use: { ...test_1.devices['iPhone 14'] },
        },
    ],
});
