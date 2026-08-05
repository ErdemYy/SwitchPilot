'use client';

import React, { useState } from 'react';
import { AppShell } from '../../layouts/AppShell';
import { Card, Button, Badge } from '@switchpilot/ui';

export default function ExecutionConsolePage() {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('exec-801');
  const [useFallback, setUseFallback] = useState<boolean>(false);
  const [isExecuting, setIsExecuting] = useState<boolean>(false);
  const [executionState, setExecutionState] = useState<'QUEUED' | 'EXECUTING' | 'VERIFYING' | 'COMPLETED'>('QUEUED');

  const executionPlans = [
    {
      id: 'exec-801',
      title: 'Frankfurt Core VLAN 100 Provisioning',
      targetDevices: ['sw-core-fra-01 (10.240.1.1)'],
      mode: 'IMMEDIATE',
      risk: 'MEDIUM',
      status: executionState,
      driver: useFallback ? 'Netmiko (Fallback)' : 'Scrapli (Async Primary)',
    },
    {
      id: 'exec-802',
      title: 'London Edge Access Port Security Patch',
      targetDevices: ['sw-edge-lon-01', 'sw-edge-lon-02'],
      mode: 'SCHEDULED',
      risk: 'LOW',
      status: 'WAITING_APPROVAL',
      driver: 'Scrapli (Async Primary)',
    },
  ];

  const pipelineSteps = [
    { name: '1. Validation & Policy Check', status: 'SUCCESS', desc: 'Rules & company standards validated' },
    { name: '2. Vendor Translation Engine', status: 'SUCCESS', desc: 'Translated to Cisco IOS-XE CLI syntax' },
    {
      name: '3. Driver Execution (Scrapli/Netmiko)',
      status: executionState === 'QUEUED' ? 'PENDING' : executionState === 'EXECUTING' ? 'RUNNING' : 'SUCCESS',
      desc: useFallback ? 'Executed via Netmiko Fallback' : 'Executed via Scrapli Async SSH Driver',
    },
    {
      name: '4. NAPALM State Verification',
      status: executionState === 'COMPLETED' ? 'SUCCESS' : executionState === 'VERIFYING' ? 'RUNNING' : 'PENDING',
      desc: 'Running & startup state diff verified',
    },
  ];

  const handleApproveAndRun = () => {
    setIsExecuting(true);
    setExecutionState('EXECUTING');

    setTimeout(() => setExecutionState('VERIFYING'), 1500);
    setTimeout(() => {
      setExecutionState('COMPLETED');
      setIsExecuting(false);
    }, 3000);
  };

  return (
    <AppShell
      currentPath="/execution"
      pageTitle="Enterprise Execution Engine"
      pageSubtitle="Scrapli primary async driver, Netmiko automatic fallback, NAPALM state verification, and transactional rollbacks."
      breadcrumbItems={[{ label: 'Platform' }, { label: 'Execution Engine' }]}
      actionButtons={
        <div className="flex items-center space-x-2">
          <Button
            variant={useFallback ? 'danger' : 'secondary'}
            size="sm"
            onClick={() => setUseFallback(!useFallback)}
          >
            {useFallback ? '⚠️ Fallback: Netmiko Active' : '⚡ Driver: Scrapli Primary'}
          </Button>
          <Button
            variant="primary"
            size="sm"
            disabled={isExecuting || executionState === 'COMPLETED'}
            onClick={handleApproveAndRun}
          >
            {executionState === 'COMPLETED' ? '✓ Execution Completed' : '▶ Approve & Execute Plan'}
          </Button>
        </div>
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Execution Approval Queue */}
        <div className="lg:col-span-5 space-y-4">
          <Card title="Execution Approval Queue">
            <div className="space-y-3 pt-1">
              {executionPlans.map((plan) => (
                <div
                  key={plan.id}
                  onClick={() => setSelectedPlanId(plan.id)}
                  className={`p-3 rounded-lg border text-xs cursor-pointer transition-all ${
                    selectedPlanId === plan.id
                      ? 'bg-blue-600/10 border-blue-500/40 text-slate-100'
                      : 'bg-[#111827] border-white/5 text-slate-400 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-100">{plan.title}</span>
                    <Badge variant={plan.risk === 'MEDIUM' ? 'warning' : 'info'} size="sm">
                      {plan.risk} RISK
                    </Badge>
                  </div>
                  <div className="mt-1 text-[11px] font-mono text-slate-400">
                    Devices: {plan.targetDevices.join(', ')}
                  </div>
                  <div className="mt-2 flex items-center justify-between text-[10px]">
                    <span className="text-blue-400 font-mono">{plan.driver}</span>
                    <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 font-semibold">
                      {plan.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Transaction Control Box */}
          <Card title="Transactional Rollback Engine">
            <div className="space-y-3 text-xs">
              <div className="p-3 bg-slate-900 rounded border border-white/5 space-y-1">
                <span className="text-[10px] text-slate-500 uppercase font-semibold">Transaction Status</span>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-emerald-400 font-bold">
                    {executionState === 'COMPLETED' ? 'COMMITTED (Atomic)' : 'TX_ACTIVE'}
                  </span>
                  {executionState === 'COMPLETED' && (
                    <button
                      onClick={() => alert('Initiating Atomic Rollback via Checkpoint Snapshot...')}
                      className="px-2.5 py-1 text-[10px] bg-red-950 hover:bg-red-900 text-red-300 border border-red-800 rounded font-semibold"
                    >
                      ↺ Trigger Emergency Rollback
                    </button>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column: Execution Timeline & NAPALM Verification */}
        <div className="lg:col-span-7 space-y-4">
          <Card title="Live Pipeline Execution Timeline">
            <div className="space-y-4 pt-1">
              {pipelineSteps.map((step, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-xs">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[11px] mt-0.5 ${
                      step.status === 'SUCCESS'
                        ? 'bg-emerald-500 text-slate-950'
                        : step.status === 'RUNNING'
                        ? 'bg-blue-600 text-white animate-pulse'
                        : 'bg-slate-800 text-slate-500'
                    }`}
                  >
                    {step.status === 'SUCCESS' ? '✓' : idx + 1}
                  </div>
                  <div className="flex-1 pb-3 border-b border-white/5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-200">{step.name}</span>
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                          step.status === 'SUCCESS'
                            ? 'text-emerald-400 bg-emerald-950'
                            : step.status === 'RUNNING'
                            ? 'text-blue-400 bg-blue-950 animate-pulse'
                            : 'text-slate-500'
                        }`}
                      >
                        {step.status}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* NAPALM Verification Report Panel */}
          <Card title="NAPALM Post-Execution Verification Report">
            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-slate-900 rounded border border-white/5">
                  <span className="text-[10px] text-slate-500 uppercase">Running Config Hash</span>
                  <div className="font-mono text-slate-200 text-[11px] mt-0.5">sha256:7f8a9b0c...</div>
                </div>
                <div className="p-3 bg-slate-900 rounded border border-white/5">
                  <span className="text-[10px] text-slate-500 uppercase">Startup Config Hash</span>
                  <div className="font-mono text-slate-200 text-[11px] mt-0.5">sha256:7f8a9b0c...</div>
                </div>
              </div>

              <div className="p-3 bg-emerald-950/40 border border-emerald-800 rounded text-emerald-300 text-[11px]">
                ✓ State Verified: 48 Interface states and VLAN configurations match desired state.
              </div>
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
