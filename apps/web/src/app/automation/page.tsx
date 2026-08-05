'use client';

import React, { useState } from 'react';
import { AppShell } from '../../layouts/AppShell';
import { Card, Button, Badge } from '@switchpilot/ui';

export default function AutomationStudioPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<string>('CREATE_VLAN');
  const [isCanaryEnabled, setIsCanaryEnabled] = useState<boolean>(true);
  const [cronExpression, setCronExpression] = useState<string>('0 2 * * *');

  const templates = [
    { code: 'CREATE_VLAN', name: 'Create VLAN', category: 'VLAN Management', desc: 'Provision new 802.1Q VLAN definition' },
    { code: 'BULK_PORT_CONFIG', name: 'Bulk Port Configuration', category: 'Port Config', desc: 'Apply port settings across interface ranges' },
    { code: 'HOSTNAME_STANDARDIZATION', name: 'Hostname Standardization', category: 'System Identity', desc: 'Enforce corporate naming rules' },
    { code: 'SYSLOG_DEPLOYMENT', name: 'Syslog Deployment', category: 'Telemetry & Logging', desc: 'Deploy remote Syslog server IP' },
    { code: 'AAA_DEPLOYMENT', name: 'AAA Security Deployment', category: 'Security AAA', desc: 'Enforce RADIUS/TACACS+ authentication' },
    { code: 'FIRMWARE_UPGRADE', name: 'Firmware Upgrade', category: 'Maintenance', desc: 'Schedule OS image upgrade' },
  ];

  const workflowNodes = [
    { id: 'n1', type: 'STEP_EXECUTION', name: '1. Validate CCM Parameters', status: 'COMPLETED' },
    { id: 'n2', type: 'CONDITIONAL_IF', name: '2. Check Device Vendor (Cisco vs Aruba)', status: 'COMPLETED' },
    { id: 'n3', type: 'APPROVAL_GATE', name: '3. Require Peer Change Approval', status: 'APPROVED' },
    { id: 'n4', type: 'STEP_EXECUTION', name: '4. Scrapli Primary Async Execution', status: 'READY' },
    { id: 'n5', type: 'VERIFICATION', name: '5. NAPALM State Verification', status: 'PENDING' },
    { id: 'n6', type: 'NOTIFICATION', name: '6. Dispatch Slack/Teams Alert', status: 'PENDING' },
  ];

  return (
    <AppShell
      currentPath="/automation"
      pageTitle="Enterprise Automation Studio"
      pageSubtitle="Reusable templates, visual DAG workflow builder, Canary rollouts, cron scheduling, and multi-channel notifications."
      breadcrumbItems={[{ label: 'Platform' }, { label: 'Automation Engine' }]}
      actionButtons={
        <div className="flex items-center space-x-2">
          <Button variant="secondary" size="sm" onClick={() => alert('Template Exported to Marketplace')}>
            📦 Export Template
          </Button>
          <Button variant="primary" size="sm" onClick={() => alert('Trigger Workflow Engine')}>
            ▶ Execute Automation Workflow
          </Button>
        </div>
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Reusable Template Library */}
        <div className="lg:col-span-5 space-y-4">
          <Card title="Reusable Automation Template Library (15 Templates)">
            <div className="space-y-2.5 pt-1">
              {templates.map((tpl) => (
                <div
                  key={tpl.code}
                  onClick={() => setSelectedTemplate(tpl.code)}
                  className={`p-3 rounded-lg border text-xs cursor-pointer transition-all ${
                    selectedTemplate === tpl.code
                      ? 'bg-blue-600/10 border-blue-500/40 text-slate-100'
                      : 'bg-[#111827] border-white/5 text-slate-400 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-100">{tpl.name}</span>
                    <span className="px-1.5 py-0.2 rounded text-[9px] bg-slate-800 text-blue-400 font-mono font-bold">
                      {tpl.category}
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-400">{tpl.desc}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Canary Rollout & Maintenance Windows Box */}
          <Card title="Canary Deployment & Maintenance Window Rules">
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between p-3 bg-[#111827] rounded border border-white/5">
                <div>
                  <span className="font-bold text-slate-100 block">Canary Pilot Rollout</span>
                  <span className="text-[10px] text-slate-400">Pilot Device → 10% Batch → 100% Rollout</span>
                </div>
                <input
                  type="checkbox"
                  checked={isCanaryEnabled}
                  onChange={() => setIsCanaryEnabled(!isCanaryEnabled)}
                  className="rounded text-blue-600 focus:ring-0 w-4 h-4"
                />
              </div>

              <div className="p-3 bg-emerald-950/40 border border-emerald-800 rounded text-emerald-300 text-[11px]">
                ✓ Active Maintenance Window: NOC Weekly Maintenance (Sun 02:00-04:00 UTC)
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column: Visual Workflow Builder Canvas & Nodes */}
        <div className="lg:col-span-7 space-y-4">
          <Card title="Visual Drag & Drop Workflow Builder Canvas">
            <div className="space-y-3 pt-1">
              <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-white/10">
                <span>Selected Template: <strong className="text-blue-400">{selectedTemplate}</strong></span>
                <span className="text-slate-300 font-mono">6 Nodes Connected (DAG)</span>
              </div>

              {/* Node Graph Steps */}
              <div className="space-y-2">
                {workflowNodes.map((node, i) => (
                  <div
                    key={node.id}
                    className="p-3 bg-slate-950 rounded-lg border border-white/10 flex items-center justify-between text-xs font-mono"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="w-5 h-5 rounded bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-[10px]">
                        {i + 1}
                      </span>
                      <span className="font-bold text-slate-200">{node.name}</span>
                    </div>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-sans font-semibold ${
                        node.status === 'COMPLETED' || node.status === 'APPROVED'
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                          : node.status === 'READY'
                          ? 'bg-blue-950 text-blue-400 border border-blue-800 animate-pulse'
                          : 'bg-slate-900 text-slate-500'
                      }`}
                    >
                      {node.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Scheduler & Notification Integrations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card title="Cron Job Scheduler">
              <div className="space-y-2 text-xs">
                <label className="block text-slate-400">Cron Schedule Expression:</label>
                <input
                  type="text"
                  value={cronExpression}
                  onChange={(e) => setCronExpression(e.target.value)}
                  className="w-full bg-[#111827] border border-white/10 rounded p-2 text-slate-200 font-mono"
                />
                <span className="text-[10px] text-slate-500 block">Next Run: Tomorrow at 02:00:00 UTC</span>
              </div>
            </Card>

            <Card title="Multi-Channel Notifications">
              <div className="space-y-1.5 text-xs text-slate-300">
                <div className="flex justify-between"><span>Slack (#noc-alerts):</span><span className="text-emerald-400 font-bold">Connected</span></div>
                <div className="flex justify-between"><span>MS Teams (NetOps):</span><span className="text-emerald-400 font-bold">Connected</span></div>
                <div className="flex justify-between"><span>Webhook Dispatcher:</span><span className="text-emerald-400 font-bold">Active</span></div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
