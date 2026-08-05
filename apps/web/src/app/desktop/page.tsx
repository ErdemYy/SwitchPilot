'use client';

import React, { useState } from 'react';
import { AppShell } from '../../layouts/AppShell';
import { Card, Button, Badge } from '@switchpilot/ui';

export default function DesktopDashboardPage() {
  const [isOffline] = useState<boolean>(false);
  const [syncStatus, setSyncStatus] = useState<string>('IDLE');
  const [queuedChangesCount, setQueuedChangesCount] = useState<number>(3);

  const handleManualSync = () => {
    setSyncStatus('SYNCING');
    setTimeout(() => {
      setSyncStatus('COMPLETED');
      setQueuedChangesCount(0);
      alert('Offline changes synced successfully with cloud backend!');
    }, 1500);
  };

  const handleExportBackup = (format: string) => {
    alert(`Exporting encrypted network configuration snapshot archive (.spbackup / ${format})...`);
  };

  return (
    <AppShell
      currentPath="/desktop"
      pageTitle="Enterprise Desktop Console"
      pageSubtitle="Manage desktop application state, offline database synchronization, local encrypted SQLite storage, and multi-format file exports."
      breadcrumbItems={[{ label: 'Platform' }, { label: 'Desktop Console' }]}
      actionButtons={
        <div className="flex items-center space-x-2">
          <Button variant="secondary" size="sm" onClick={() => handleExportBackup('ZIP')}>
            📦 Export Backup (.spbackup)
          </Button>
          <Button variant="primary" size="sm" onClick={handleManualSync}>
            🔄 Sync Offline Queue ({queuedChangesCount})
          </Button>
        </div>
      }
    >
      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#0f1629] border border-white/5 rounded-xl p-4 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Connection State</span>
          <div className="flex items-center space-x-2">
            <span className={`w-3 h-3 rounded-full ${isOffline ? 'bg-amber-500' : 'bg-emerald-500'}`} />
            <span className="text-lg font-bold text-slate-100">{isOffline ? 'Offline Mode' : 'Cloud Connected'}</span>
          </div>
        </div>

        <div className="bg-[#0f1629] border border-white/5 rounded-xl p-4 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Sync Engine Status</span>
          <span className="text-lg font-bold text-blue-400">{syncStatus}</span>
        </div>

        <div className="bg-[#0f1629] border border-white/5 rounded-xl p-4 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Queued Offline Jobs</span>
          <span className="text-lg font-bold text-amber-400">{queuedChangesCount} Pending</span>
        </div>

        <div className="bg-[#0f1629] border border-white/5 rounded-xl p-4 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Desktop Runtime</span>
          <span className="text-lg font-bold text-slate-200">Electron / Tauri</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Offline Queue & Sync Operations */}
        <div className="lg:col-span-7 space-y-4">
          <Card title="Offline Pending Configuration Execution Queue">
            <div className="space-y-2 text-xs">
              {[
                { id: 'off-req-001', device: 'sw-core-fra-01', action: 'VLAN 100 Provisioning', status: 'QUEUED_OFFLINE', time: '10 min ago' },
                { id: 'off-req-002', device: 'sw-edge-lon-01', action: 'Hostname Standardization', status: 'QUEUED_OFFLINE', time: '25 min ago' },
                { id: 'off-req-003', device: 'fw-edge-fra-01', action: 'Syslog IP Update', status: 'QUEUED_OFFLINE', time: '40 min ago' },
              ].map((item) => (
                <div key={item.id} className="p-3 bg-slate-950 rounded-lg border border-white/5 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-200 block">{item.action}</span>
                    <span className="text-[10px] text-slate-400">{item.device} · {item.time}</span>
                  </div>
                  <Badge variant="warning" size="sm">{item.status}</Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Column: Import / Export & File Associations */}
        <div className="lg:col-span-5 space-y-4">
          <Card title="Multi-Format Import / Export Engine">
            <div className="space-y-3 text-xs">
              <p className="text-[10px] text-slate-400">
                Export or import network inventory baselines, snapshots, and automation workflows.
              </p>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="secondary" size="sm" onClick={() => handleExportBackup('CSV')}>Export CSV</Button>
                <Button variant="secondary" size="sm" onClick={() => handleExportBackup('Excel')}>Export Excel</Button>
                <Button variant="secondary" size="sm" onClick={() => handleExportBackup('JSON')}>Export JSON</Button>
                <Button variant="secondary" size="sm" onClick={() => handleExportBackup('YAML')}>Export YAML</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
