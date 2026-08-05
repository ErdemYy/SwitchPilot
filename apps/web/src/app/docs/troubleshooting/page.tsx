'use client';

import React from 'react';
import { AppShell } from '../../../layouts/AppShell';
import { Card, Badge } from '@switchpilot/ui';

export default function TroubleshootingPage() {
  const errorCodes = [
    { code: 'ERR_CCM_TRANSLATION_FAILED', category: 'TRANSLATION', message: 'Vendor translation engine failed to map CCM parameters into vendor CLI strings.', cause: 'Unsupported syntax or missing driver.', recovery: 'Check CCM parameters and verify vendor driver in translation_engine.py.' },
    { code: 'ERR_SSH_CONNECTION_TIMEOUT', category: 'CONNECTION', message: 'SSH connection timed out while connecting to device IP.', cause: 'Network unreachable or port 22 blocked.', recovery: 'Ping target IP and verify Bastion host routing.' },
    { code: 'ERR_SQLITE_DECRYPTION_FAILED', category: 'DESKTOP', message: 'Encrypted local SQLite database failed to unlock.', cause: 'Invalid DPAPI encryption key.', recovery: 'Re-authenticate via OIDC/SAML to refresh DPAPI vault key.' },
  ];

  return (
    <AppShell
      currentPath="/docs/troubleshooting"
      pageTitle="Enterprise Troubleshooting Center & Error Code Lookup"
      pageSubtitle="Error code reference matrix, diagnostic commands, and recovery procedures."
      breadcrumbItems={[{ label: 'Documentation', href: '/docs' }, { label: 'Troubleshooting' }]}
    >
      <div className="space-y-4 text-xs">
        <Card title="Error Code Matrix & Recovery Procedures">
          <div className="space-y-3">
            {errorCodes.map((err) => (
              <div key={err.code} className="p-3 bg-slate-950 rounded-lg border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-red-400 font-bold text-sm">{err.code}</span>
                  <Badge variant="warning" size="sm">{err.category}</Badge>
                </div>
                <p className="text-slate-300 font-semibold">{err.message}</p>
                <div className="p-2 bg-slate-900 rounded text-[11px] text-slate-400 font-mono space-y-1">
                  <div><strong>Possible Cause:</strong> {err.cause}</div>
                  <div><strong>Recovery Steps:</strong> {err.recovery}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
