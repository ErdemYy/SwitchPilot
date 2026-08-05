'use client';

import React, { useState } from 'react';
import { AppShell } from '../../layouts/AppShell';
import { Card, Button, Badge } from '@switchpilot/ui';

export default function BackupsPage() {
  const [selectedVerId, setSelectedVerId] = useState<string>('v-1.0.42');
  const [isRollbackWizardOpen, setIsRollbackWizardOpen] = useState<boolean>(false);
  const [rollbackMode, setRollbackMode] = useState<'FULL' | 'SELECTIVE'>('FULL');

  const versions = [
    {
      id: 'v-1.0.42',
      author: 'Senior Network Engineer',
      timestamp: 'Today 09:00 AM',
      summary: 'Provisioned VLAN 100 on Gi1/0/1',
      checksum: 'sha256:8f9a2b0c...',
      risk: 'SAFE',
      isGolden: false,
    },
    {
      id: 'v-1.0.41',
      author: 'NOC Operator',
      timestamp: 'Yesterday 16:30 PM',
      summary: 'Updated interface descriptions on Gi1/0/2',
      checksum: 'sha256:7e6d5c4b...',
      risk: 'SAFE',
      isGolden: true,
    },
    {
      id: 'v-1.0.40',
      author: 'Automated Compliance Worker',
      timestamp: '01 Aug 2026',
      summary: 'Enforced AAA & Syslog logging server IPs',
      checksum: 'sha256:3a2b1c0d...',
      risk: 'LOW',
      isGolden: false,
    },
  ];

  const changeRequests = [
    {
      id: 'CR-901',
      title: 'Provision Frankfurt Core VLAN 100',
      requester: 'Erdem (Senior Engineer)',
      category: 'STANDARD',
      status: 'APPROVED',
      steps: [
        { name: 'Peer Review', approver: 'NOC Lead', status: 'APPROVED' },
        { name: 'Change Approver', approver: 'Network Director', status: 'APPROVED' },
      ],
    },
    {
      id: 'CR-902',
      title: 'Upgrade Edge Switch Firmware to 17.12',
      requester: 'Alex (Ops Lead)',
      category: 'MAJOR',
      status: 'PENDING_REVIEW',
      steps: [
        { name: 'Peer Review', approver: 'Security Manager', status: 'PENDING' },
        { name: 'Change Approver', approver: 'VP Engineering', status: 'PENDING' },
      ],
    },
  ];

  return (
    <AppShell
      currentPath="/backups"
      pageTitle="Configuration Backup, Versioning & Rollback Hub"
      pageSubtitle="8-type snapshot engine, immutable version history, Golden config baselines, selective rollback, and Change Approvals."
      breadcrumbItems={[{ label: 'Platform' }, { label: 'Backups & Change Management' }]}
      actionButtons={
        <div className="flex items-center space-x-2">
          <Button variant="secondary" size="sm" onClick={() => alert('Snapshot Taken Successfully')}>
            📷 Take Immediate Snapshot
          </Button>
          <Button variant="primary" size="sm" onClick={() => setIsRollbackWizardOpen(true)}>
            ↺ Launch Rollback Wizard
          </Button>
        </div>
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Version History & Snapshot Explorer */}
        <div className="lg:col-span-5 space-y-4">
          <Card title="Immutable Configuration Version History">
            <div className="space-y-3 pt-1">
              {versions.map((ver) => (
                <div
                  key={ver.id}
                  onClick={() => setSelectedVerId(ver.id)}
                  className={`p-3 rounded-lg border text-xs cursor-pointer transition-all ${
                    selectedVerId === ver.id
                      ? 'bg-blue-600/10 border-blue-500/40 text-slate-100'
                      : 'bg-[#111827] border-white/5 text-slate-400 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-slate-100">{ver.id}</span>
                      {ver.isGolden && (
                        <span className="px-1.5 py-0.2 rounded text-[9px] bg-amber-950 text-amber-400 border border-amber-800 font-bold">
                          GOLDEN BASELINE
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-slate-500">{ver.timestamp}</span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-300 font-medium">{ver.summary}</p>
                  <div className="mt-2 flex items-center justify-between text-[10px]">
                    <span className="text-slate-400 font-mono">By: {ver.author}</span>
                    <span className="font-mono text-slate-500">{ver.checksum}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Change Approval Center Panel */}
          <Card title="Multi-level Change Request Approval Center">
            <div className="space-y-3 text-xs pt-1">
              {changeRequests.map((cr) => (
                <div key={cr.id} className="p-3 bg-[#111827] border border-white/5 rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-100">{cr.id}: {cr.title}</span>
                    <Badge variant={cr.status === 'APPROVED' ? 'success' : 'warning'} size="sm">
                      {cr.status}
                    </Badge>
                  </div>
                  <div className="text-[10px] text-slate-400">Requester: {cr.requester}</div>
                  <div className="space-y-1 pt-1 border-t border-white/5">
                    {cr.steps.map((st, i) => (
                      <div key={i} className="flex justify-between text-[10px]">
                        <span className="text-slate-400">{st.name} ({st.approver})</span>
                        <span className={st.status === 'APPROVED' ? 'text-emerald-400 font-semibold' : 'text-amber-400'}>
                          {st.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Column: Advanced Diff Viewer & Version Details */}
        <div className="lg:col-span-7 space-y-4">
          <Card title={`Side-by-Side Diff Viewer (Selected Version: ${selectedVerId})`}>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-white/10">
                <span>Comparing <strong>{selectedVerId}</strong> with <strong>v-1.0.41 (Parent)</strong></span>
                <span className="text-emerald-400 font-mono font-bold">+4 Lines Added, -2 Lines Removed</span>
              </div>

              <pre className="p-4 bg-slate-950 rounded-lg font-mono text-[11px] text-slate-300 border border-white/10 overflow-x-auto">
{`--- v-1.0.41 (Parent Baseline)
+++ ${selectedVerId} (Current Version)
@@ -10,6 +10,10 @@
 interface GigabitEthernet1/0/1
  description Production Link
- switchport mode access
+ switchport mode trunk
+ switchport trunk allowed vlan 10,20,100
+ vlan 100
+  name CORPORATE_WIFI`}
              </pre>
            </div>
          </Card>

          {/* Snapshot Explorer Details */}
          <Card title="Snapshot Repository Explorer (8 Active Types)">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-slate-900 rounded border border-white/5">
                <span className="text-[10px] text-slate-500 uppercase block">Golden Config</span>
                <strong className="text-amber-400">Active Baseline</strong>
              </div>
              <div className="p-3 bg-slate-900 rounded border border-white/5">
                <span className="text-[10px] text-slate-500 uppercase block">Last Known Good</span>
                <strong className="text-emerald-400">v-1.0.41</strong>
              </div>
              <div className="p-3 bg-slate-900 rounded border border-white/5">
                <span className="text-[10px] text-slate-500 uppercase block">Pre-Change Snap</span>
                <strong className="text-blue-400">09:00 AM Today</strong>
              </div>
              <div className="p-3 bg-slate-900 rounded border border-white/5">
                <span className="text-[10px] text-slate-500 uppercase block">Emergency Snap</span>
                <strong className="text-slate-400">Available</strong>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Interactive Rollback Wizard Modal */}
      {isRollbackWizardOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-150">
          <div className="relative w-full max-w-lg bg-[#111827] border border-white/10 rounded-xl shadow-2xl p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <h3 className="text-lg font-bold text-slate-100">Rollback Safety Wizard</h3>
                <p className="text-xs text-slate-400">Revert hardware configuration safely to a validated version</p>
              </div>
              <button onClick={() => setIsRollbackWizardOpen(false)} className="text-slate-400 text-xl font-bold">
                &times;
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              <label className="block text-slate-400 font-semibold">Rollback Mode:</label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-1 cursor-pointer">
                  <input
                    type="radio"
                    checked={rollbackMode === 'FULL'}
                    onChange={() => setRollbackMode('FULL')}
                    className="text-blue-600 focus:ring-0"
                  />
                  <span>Full Configuration Reversion</span>
                </label>
                <label className="flex items-center space-x-1 cursor-pointer">
                  <input
                    type="radio"
                    checked={rollbackMode === 'SELECTIVE'}
                    onChange={() => setRollbackMode('SELECTIVE')}
                    className="text-blue-600 focus:ring-0"
                  />
                  <span>Selective Lines / Interfaces Only</span>
                </label>
              </div>

              <div className="p-3 bg-slate-900 rounded border border-white/5 space-y-1">
                <span className="text-[10px] text-slate-500 uppercase font-semibold">Pre-Rollback Safety Checks</span>
                <div className="space-y-1 pt-1 text-[11px]">
                  <div className="flex justify-between text-emerald-400"><span>✓ Firmware OS Compatibility</span><span>PASSED</span></div>
                  <div className="flex justify-between text-emerald-400"><span>✓ Hardware Model Constraints</span><span>PASSED</span></div>
                  <div className="flex justify-between text-emerald-400"><span>✓ Corporate Policy Checks</span><span>PASSED</span></div>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-2 pt-2 border-t border-white/10">
              <button
                onClick={() => setIsRollbackWizardOpen(false)}
                className="px-4 py-2 text-xs bg-slate-800 text-slate-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert('Rollback Executed Cleanly to Golden Baseline.');
                  setIsRollbackWizardOpen(false);
                }}
                className="px-4 py-2 text-xs bg-red-600 text-white font-semibold rounded hover:bg-red-700"
              >
                Confirm & Execute Rollback
              </button>
            </div>
          </div>
        </div>
      )}
    </AppShell>
  );
}
