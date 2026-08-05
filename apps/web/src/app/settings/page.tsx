'use client';

import React, { useState } from 'react';
import { AppShell } from '../../layouts/AppShell';
import { Card, Button, Badge } from '@switchpilot/ui';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<string>('GENERAL');
  const [releaseChannel, setReleaseChannel] = useState<string>('STABLE');
  const [appLockMinutes, setAppLockMinutes] = useState<number>(15);
  const [telemetryEnabled, setTelemetryEnabled] = useState<boolean>(true);

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

  return (
    <AppShell
      currentPath="/settings"
      pageTitle="Enterprise Desktop Settings Center"
      pageSubtitle="Configure Windows desktop runtime settings, DPAPI secure credentials, proxy servers, SSO authentication, and release channels."
      breadcrumbItems={[{ label: 'Platform' }, { label: 'Desktop Settings' }]}
      actionButtons={
        <div className="flex items-center space-x-2">
          <Button variant="secondary" size="sm" onClick={handleExportDiagnostics}>
            📦 Export Diagnostic Bundle (.spdiag)
          </Button>
          <Button variant="primary" size="sm" onClick={() => alert('Desktop Settings Saved!')}>
            💾 Save Preferences
          </Button>
        </div>
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Settings Navigation Tabs */}
        <div className="lg:col-span-3 space-y-1">
          <Card title="Settings Category">
            <div className="space-y-1 text-xs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg font-semibold transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Column: Active Settings Content */}
        <div className="lg:col-span-9 space-y-4">
          {activeTab === 'GENERAL' && (
            <Card title="General Desktop Configuration">
              <div className="space-y-4 text-xs">
                <div className="flex items-center justify-between p-3 bg-slate-950 rounded-lg border border-white/5">
                  <div>
                    <span className="font-bold text-slate-200 block">Launch on Windows Startup</span>
                    <span className="text-[10px] text-slate-400">Automatically open SwitchPilot in System Tray when logging into Windows.</span>
                  </div>
                  <input type="checkbox" defaultChecked className="toggle" />
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-950 rounded-lg border border-white/5">
                  <div>
                    <span className="font-bold text-slate-200 block">System Tray Minimization</span>
                    <span className="text-[10px] text-slate-400">Minimize to Windows Notification Area instead of closing application.</span>
                  </div>
                  <input type="checkbox" defaultChecked className="toggle" />
                </div>
              </div>
            </Card>
          )}

          {activeTab === 'UPDATES' && (
            <Card title="Auto-Updater & Release Channels">
              <div className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-300 font-bold mb-1">Release Channel:</label>
                  <select
                    value={releaseChannel}
                    onChange={(e) => setReleaseChannel(e.target.value)}
                    className="w-full bg-[#111827] border border-white/10 rounded px-3 py-2 text-slate-200"
                  >
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
                  <Badge variant="success" size="sm">Up to Date</Badge>
                </div>
              </div>
            </Card>
          )}

          {activeTab === 'SECURITY' && (
            <Card title="Security & Windows DPAPI Vault Integration">
              <div className="space-y-4 text-xs">
                <div className="p-3 bg-slate-950 rounded-lg border border-white/5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-200">Windows Credential Manager (DPAPI)</span>
                    <Badge variant="success" size="sm">ACTIVE (AES-256-GCM)</Badge>
                  </div>
                  <p className="text-[10px] text-slate-400">
                    All authentication tokens, SSH private keys, and Vault secrets are encrypted using DPAPI system hardware keys.
                  </p>
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">Idle Application Lock Timeout:</label>
                  <select
                    value={appLockMinutes}
                    onChange={(e) => setAppLockMinutes(Number(e.target.value))}
                    className="w-full bg-[#111827] border border-white/10 rounded px-3 py-2 text-slate-200 font-mono"
                  >
                    <option value={5}>5 Minutes</option>
                    <option value={15}>15 Minutes (Default)</option>
                    <option value={30}>30 Minutes</option>
                    <option value={0}>Disabled (Not Recommended)</option>
                  </select>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </AppShell>
  );
}
