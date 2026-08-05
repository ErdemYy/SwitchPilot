'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChangelogPage;
const react_1 = __importDefault(require("react"));
const AppShell_1 = require("../../../layouts/AppShell");
const ui_1 = require("@switchpilot/ui");
function ChangelogPage() {
    const releases = [
        {
            version: 'v1.0.0 Commercial Desktop Release',
            date: 'August 5, 2026',
            highlights: [
                'Enterprise Tauri v2 & Electron Cross-Platform Desktop Runtimes (Windows x64/ARM64, macOS, Linux).',
                'Local Encrypted SQLite Database with Bidirectional Sync Engine & Offline Mode.',
                'Enterprise Auth supporting OIDC, SAML 2.0, Microsoft Entra ID (Azure AD), and TOTP/MFA.',
                'Enterprise Testing Platform featuring Virtual Multi-Vendor Device Simulator and Playwright E2E suites.',
            ],
        },
    ];
    return (<AppShell_1.AppShell currentPath="/docs/changelog" pageTitle="Product Version History & Release Notes" pageSubtitle="Changelog, release highlights, breaking changes, and migration guides." breadcrumbItems={[{ label: 'Documentation', href: '/docs' }, { label: 'Changelog' }]}>
      <div className="space-y-4 text-xs">
        {releases.map((rel) => (<ui_1.Card key={rel.version} title={rel.version}>
            <div className="space-y-3">
              <span className="text-[10px] text-slate-400 font-mono">Released on {rel.date}</span>
              <ul className="space-y-1.5 list-disc list-inside text-slate-300">
                {rel.highlights.map((h, i) => (<li key={i}>{h}</li>))}
              </ul>
            </div>
          </ui_1.Card>))}
      </div>
    </AppShell_1.AppShell>);
}
