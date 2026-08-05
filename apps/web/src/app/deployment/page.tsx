'use client';

import React, { useState } from 'react';
import { AppShell } from '../../layouts/AppShell';
import { Card, Button, Badge } from '@switchpilot/ui';

export default function DeploymentDashboardPage() {
  const [deploymentModel, setDeploymentModel] = useState<string>('HIGH_AVAILABILITY');
  const [preflightStatus, setPreflightStatus] = useState<string>('READY');
  const [airgappedPackage, setAirgappedPackage] = useState<string>('switchpilot-v1.0.0-airgapped.spairgapped');

  const preflightChecks = [
    { item: 'CPU Cores', required: '8 Cores', actual: '16 Cores', status: 'PASSED' },
    { item: 'RAM Memory', required: '16 GB', actual: '32 GB', status: 'PASSED' },
    { item: 'Disk I/O Storage', required: '100 GB NVMe', actual: '500 GB NVMe', status: 'PASSED' },
    { item: 'Network Ports (80, 443, 8000, 5432, 6379, 8200)', required: 'OPEN', actual: 'OPEN', status: 'PASSED' },
    { item: 'Docker Engine', required: 'v26.0+', actual: 'v26.1.0', status: 'PASSED' },
    { item: 'Kubernetes Cluster Health', required: 'v1.30+', actual: 'v1.30.2', status: 'PASSED' },
    { item: 'TLS Certificate Validation', required: 'Valid RSA 2048', actual: 'Valid Let\'s Encrypt RSA 4096', status: 'PASSED' },
  ];

  const handleRunPreflight = () => {
    alert(`Running pre-flight system validation for ${deploymentModel} model...`);
  };

  const handleTriggerBackup = () => {
    alert('Triggering full platform backup (bak-20260805-001.spbackup)...');
  };

  return (
    <AppShell
      currentPath="/deployment"
      pageTitle="Enterprise Deployment & Infrastructure Health Console"
      pageSubtitle="Validate environment pre-flight requirements, manage air-gapped packages, execute backup/restore tasks, and configure High Availability."
      breadcrumbItems={[{ label: 'Platform' }, { label: 'Deployment Platform' }]}
      actionButtons={
        <div className="flex items-center space-x-2">
          <Button variant="secondary" size="sm" onClick={handleTriggerBackup}>
            📦 Full Platform Backup
          </Button>
          <Button variant="primary" size="sm" onClick={handleRunPreflight}>
            ⚡ Run Pre-Flight Validation
          </Button>
        </div>
      }
    >
      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#0f1629] border border-white/5 rounded-xl p-4 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Active Model</span>
          <span className="text-lg font-bold text-slate-100">{deploymentModel}</span>
        </div>

        <div className="bg-[#0f1629] border border-white/5 rounded-xl p-4 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Pre-Flight Readiness</span>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-lg font-bold text-emerald-400">{preflightStatus}</span>
          </div>
        </div>

        <div className="bg-[#0f1629] border border-white/5 rounded-xl p-4 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Air-Gapped Package</span>
          <span className="text-lg font-bold text-slate-200">VERIFIED</span>
        </div>

        <div className="bg-[#0f1629] border border-white/5 rounded-xl p-4 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase tracking-widest block">HA Node Count</span>
          <span className="text-lg font-bold text-blue-400">3 Replicas</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Pre-flight Checks Table */}
        <div className="lg:col-span-8 space-y-4">
          <Card title="Pre-Flight System & Resource Validation Matrix">
            <div className="space-y-2 text-xs">
              {preflightChecks.map((chk, i) => (
                <div key={i} className="p-3 bg-slate-950 rounded-lg border border-white/5 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-200 block">{chk.item}</span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      Required: {chk.required} · Detected: {chk.actual}
                    </span>
                  </div>
                  <Badge variant="success" size="sm">{chk.status}</Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Air-Gapped & Backup Manager */}
        <div className="lg:col-span-4 space-y-4">
          <Card title="Air-Gapped Installation Package">
            <div className="space-y-3 text-xs">
              <div className="p-3 bg-slate-950 rounded-lg border border-white/5 space-y-1">
                <span className="font-bold text-slate-200 block">Offline Package</span>
                <span className="text-[10px] text-slate-400 font-mono block">{airgappedPackage}</span>
                <span className="text-[10px] text-emerald-400 block">Digital Signature Validated</span>
              </div>
              <Button variant="secondary" size="sm" onClick={() => alert('Air-gapped package verified successfully!')}>
                Verify Offline Package
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
