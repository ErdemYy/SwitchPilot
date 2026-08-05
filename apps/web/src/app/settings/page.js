'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SettingsPage;
const react_1 = __importStar(require("react"));
const AppShell_1 = require("../../layouts/AppShell");
const ui_1 = require("@switchpilot/ui");
function SettingsPage() {
    const [activeTab, setActiveTab] = (0, react_1.useState)('GENERAL');
    const [releaseChannel, setReleaseChannel] = (0, react_1.useState)('STABLE');
    const [appLockMinutes, setAppLockMinutes] = (0, react_1.useState)(15);
    const [telemetryEnabled, setTelemetryEnabled] = (0, react_1.useState)(true);
    const tabs = [
        { id: 'GENERAL', label: 'General' },
        { id: 'APPEARANCE', label: 'Appearance & Theme' },
        { id: 'NETWORK', label: 'Network & Proxy' },
        { id: 'CERTIFICATES', label: 'Custom CA Certificates' },
        { id: 'AUTH', label: 'Enterprise SSO & MFA' },
        { id: 'NOTIFICATIONS', label: 'Desktop Notifications' },
        { id: 'UPDATES', label: 'Auto-Updates' },
        { id: 'STORAGE', label: 'Local Encrypted SQLite' },
        { id: 'SECURITY', label: 'Security & DPAPI Vault' },
        { id: 'ADVANCED', label: 'Diagnostics & Bundles' },
    ];
    const handleExportDiagnostics = () => {
        alert('Exporting encrypted diagnostic bundle (switchpilot-diag-20260805.spdiag)...');
    };
    return (<AppShell_1.AppShell currentPath="/settings" pageTitle="Enterprise Desktop Settings Center" pageSubtitle="Configure Windows desktop runtime settings, DPAPI secure credentials, proxy servers, SSO authentication, and release channels." breadcrumbItems={[{ label: 'Platform' }, { label: 'Desktop Settings' }]} actionButtons={<div className="flex items-center space-x-2">
          <ui_1.Button variant="secondary" size="sm" onClick={handleExportDiagnostics}>
            📦 Export Diagnostic Bundle (.spdiag)
          </ui_1.Button>
          <ui_1.Button variant="primary" size="sm" onClick={() => alert('Desktop Settings Saved!')}>
            💾 Save Preferences
          </ui_1.Button>
        </div>}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Settings Navigation Tabs */}
        <div className="lg:col-span-3 space-y-1">
          <ui_1.Card title="Settings Category">
            <div className="space-y-1 text-xs">
              {tabs.map((tab) => (<button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`w-full text-left px-3 py-2 rounded-lg font-semibold transition-colors ${activeTab === tab.id
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}`}>
                  {tab.label}
                </button>))}
            </div>
          </ui_1.Card>
        </div>

        {/* Right Column: Active Settings Content */}
        <div className="lg:col-span-9 space-y-4">
          {activeTab === 'GENERAL' && (<ui_1.Card title="General Desktop Configuration">
              <div className="space-y-4 text-xs">
                <div className="flex items-center justify-between p-3 bg-slate-950 rounded-lg border border-white/5">
                  <div>
                    <span className="font-bold text-slate-200 block">Launch on Windows Startup</span>
                    <span className="text-[10px] text-slate-400">Automatically open SwitchPilot in System Tray when logging into Windows.</span>
                  </div>
                  <input type="checkbox" defaultChecked className="toggle"/>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-950 rounded-lg border border-white/5">
                  <div>
                    <span className="font-bold text-slate-200 block">System Tray Minimization</span>
                    <span className="text-[10px] text-slate-400">Minimize to Windows Notification Area instead of closing application.</span>
                  </div>
                  <input type="checkbox" defaultChecked className="toggle"/>
                </div>
              </div>
            </ui_1.Card>)}

          {activeTab === 'UPDATES' && (<ui_1.Card title="Auto-Updater & Release Channels">
              <div className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-300 font-bold mb-1">Release Channel:</label>
                  <select value={releaseChannel} onChange={(e) => setReleaseChannel(e.target.value)} className="w-full bg-[#111827] border border-white/10 rounded px-3 py-2 text-slate-200">
                    <option value="STABLE">Stable Channel (Production Approved)</option>
                    <option value="BETA">Beta Channel (Pre-release Features)</option>
                    <option value="CANARY">Canary Channel (Nightly Builds)</option>
                    <option value="DEVELOPER">Developer Channel (Experimental)</option>
                  </select>
                </div>

                <div className="p-3 bg-blue-950/40 border border-blue-800 rounded-lg flex items-center justify-between">
                  <div>
                    <span className="font-bold text-blue-300 block">Current Installed Build</span>
                    <span className="text-[10px] text-slate-400">v1.0.0 (Windows x64 / Rust Native Runtime)</span>
                  </div>
                  <ui_1.Badge variant="success" size="sm">Up to Date</ui_1.Badge>
                </div>
              </div>
            </ui_1.Card>)}

          {activeTab === 'SECURITY' && (<ui_1.Card title="Security & Windows DPAPI Vault Integration">
              <div className="space-y-4 text-xs">
                <div className="p-3 bg-slate-950 rounded-lg border border-white/5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-200">Windows Credential Manager (DPAPI)</span>
                    <ui_1.Badge variant="success" size="sm">ACTIVE (AES-256-GCM)</ui_1.Badge>
                  </div>
                  <p className="text-[10px] text-slate-400">
                    All authentication tokens, SSH private keys, and Vault secrets are encrypted using DPAPI system hardware keys.
                  </p>
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">Idle Application Lock Timeout:</label>
                  <select value={appLockMinutes} onChange={(e) => setAppLockMinutes(Number(e.target.value))} className="w-full bg-[#111827] border border-white/10 rounded px-3 py-2 text-slate-200 font-mono">
                    <option value={5}>5 Minutes</option>
                    <option value={15}>15 Minutes (Default)</option>
                    <option value={30}>30 Minutes</option>
                    <option value={0}>Disabled (Not Recommended)</option>
                  </select>
                </div>
              </div>
            </ui_1.Card>)}
        </div>
      </div>
    </AppShell_1.AppShell>);
}
