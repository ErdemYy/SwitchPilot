'use client';

import React, { useState } from 'react';
import { AppShell } from '../../layouts/AppShell';
import { Card, Button, Badge } from '@switchpilot/ui';

export default function ConfigurationStudioPage() {
  const [targetVendor, setTargetVendor] = useState<string>('CISCO');
  const [hostname, setHostname] = useState<string>('sw-core-fra-01');
  const [vlanId, setVlanId] = useState<number>(100);
  const [vlanName, setVlanName] = useState<string>('CORPORATE-WIFI');
  const [intfName, setIntfName] = useState<string>('Gi1/0/1');
  const [intfMode, setIntfMode] = useState<'ACCESS' | 'TRUNK'>('TRUNK');
  const [allowedVlans, setAllowedVlans] = useState<string>('10,20,100');

  const vendors = ['CISCO', 'ARUBA', 'JUNIPER', 'HUAWEI', 'MIKROTIK', 'UBIQUITI', 'HP'];

  // Dynamic CLI command generator based on selected vendor and Canonical Config Model
  const generateVendorCommands = (vendor: string): string => {
    switch (vendor) {
      case 'CISCO':
        return `hostname ${hostname}\n!\nvlan ${vlanId}\n name ${vlanName}\n!\ninterface ${intfName}\n description Production ${intfMode} Link\n ${
          intfMode === 'ACCESS'
            ? `switchport mode access\n switchport access vlan ${vlanId}`
            : `switchport mode trunk\n switchport trunk allowed vlan ${allowedVlans}`
        }`;
      case 'ARUBA':
        return `hostname ${hostname}\n!\nvlan ${vlanId}\n name ${vlanName}\n!\ninterface ${intfName}\n ${
          intfMode === 'ACCESS' ? `vlan access ${vlanId}` : `vlan trunk allowed ${allowedVlans}`
        }`;
      case 'JUNIPER':
        return `set system host-name ${hostname}\nset vlans ${vlanName} vlan-id ${vlanId}\nset interfaces ${intfName} unit 0 family ethernet-switching interface-mode ${intfMode.toLowerCase()}`;
      case 'HUAWEI':
        return `sysname ${hostname}\n!\nvlan ${vlanId}\n description ${vlanName}\n!\ninterface ${intfName}\n ${
          intfMode === 'ACCESS'
            ? `port link-type access\n port default vlan ${vlanId}`
            : `port link-type trunk\n port trunk allow-pass vlan ${allowedVlans}`
        }`;
      case 'MIKROTIK':
        return `/system identity set name="${hostname}"\n/interface vlan add name="${vlanName}" vlan-id=${vlanId} interface=bridge`;
      case 'UBIQUITI':
        return `hostname ${hostname}\nvlan database\n vlan ${vlanId}\n exit`;
      case 'HP':
        return `sysname ${hostname}\nvlan ${vlanId}\n name ${vlanName}`;
      default:
        return '! Unsupported vendor';
    }
  };

  const isTrunk = intfMode === 'TRUNK';
  const riskLevel = isTrunk ? 'MEDIUM' : 'SAFE';
  const riskBadgeVariant = isTrunk ? 'warning' : 'success';

  return (
    <AppShell
      currentPath="/configuration"
      pageTitle="Vendor Translation Studio"
      pageSubtitle="Vendor-agnostic Canonical Configuration Model (CCM) translation, policy validation, diffing, and risk analysis."
      breadcrumbItems={[{ label: 'Platform' }, { label: 'Configuration Studio' }]}
      actionButtons={
        <div className="flex items-center space-x-2">
          <Button variant="secondary" size="sm" onClick={() => alert('Validation Executed Cleanly')}>
            ✓ Validate Policy Rules
          </Button>
          <Button variant="primary" size="sm" onClick={() => alert('Submit to Change Approval Queue')}>
            Submit to Approval Queue →
          </Button>
        </div>
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Visual Canonical Form Builder (CCM) */}
        <div className="lg:col-span-5 space-y-4">
          <Card title="Canonical Configuration Model (CCM) Form">
            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-400 font-semibold mb-1">Target Hostname</label>
                <input
                  type="text"
                  value={hostname}
                  onChange={(e) => setHostname(e.target.value)}
                  className="w-full bg-[#111827] border border-white/10 rounded p-2 text-slate-200 focus:outline-none focus:border-blue-500 font-mono"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">VLAN ID</label>
                  <input
                    type="number"
                    value={vlanId}
                    onChange={(e) => setVlanId(Number(e.target.value))}
                    className="w-full bg-[#111827] border border-white/10 rounded p-2 text-slate-200 focus:outline-none focus:border-blue-500 font-mono"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">VLAN Name</label>
                  <input
                    type="text"
                    value={vlanName}
                    onChange={(e) => setVlanName(e.target.value)}
                    className="w-full bg-[#111827] border border-white/10 rounded p-2 text-slate-200 focus:outline-none focus:border-blue-500 font-mono"
                  />
                </div>
              </div>

              <div className="border-t border-white/10 pt-3 space-y-3">
                <h4 className="font-bold text-slate-200">Port & Interface Settings</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 font-semibold mb-1">Interface Name</label>
                    <input
                      type="text"
                      value={intfName}
                      onChange={(e) => setIntfName(e.target.value)}
                      className="w-full bg-[#111827] border border-white/10 rounded p-2 text-slate-200 focus:outline-none focus:border-blue-500 font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 font-semibold mb-1">Switchport Mode</label>
                    <select
                      value={intfMode}
                      onChange={(e) => setIntfMode(e.target.value as any)}
                      className="w-full bg-[#111827] border border-white/10 rounded p-2 text-slate-200 focus:outline-none focus:border-blue-500 font-mono"
                    >
                      <option value="ACCESS">ACCESS</option>
                      <option value="TRUNK">TRUNK</option>
                    </select>
                  </div>
                </div>

                {isTrunk && (
                  <div>
                    <label className="block text-slate-400 font-semibold mb-1">Allowed Trunk VLANs</label>
                    <input
                      type="text"
                      value={allowedVlans}
                      onChange={(e) => setAllowedVlans(e.target.value)}
                      className="w-full bg-[#111827] border border-white/10 rounded p-2 text-slate-200 focus:outline-none focus:border-blue-500 font-mono"
                    />
                  </div>
                )}
              </div>
            </div>
          </Card>

          {/* Validation & Risk Analysis Panel */}
          <Card title="Automated Risk & Policy Compliance">
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between p-3 bg-[#111827] rounded border border-white/5">
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase">Change Risk Rating</span>
                  <span className="font-bold text-slate-100">{riskLevel} RISK (Score: {isTrunk ? 55 : 10}/100)</span>
                </div>
                <Badge variant={riskBadgeVariant as any} size="sm">
                  {riskLevel}
                </Badge>
              </div>

              <div className="p-3 bg-slate-900 rounded border border-white/5 space-y-1">
                <span className="text-[10px] text-slate-500 uppercase font-semibold">Causal Reasoning</span>
                <p className="text-slate-300 text-[11px]">
                  {isTrunk
                    ? 'Trunk VLAN modification on uplink Gi1/0/1 may cause brief Spanning-Tree topology re-convergence.'
                    : 'Non-disruptive access VLAN assignment.'}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column: Live Vendor Translator & Diff Viewer */}
        <div className="lg:col-span-7 space-y-4">
          {/* Vendor Selector Bar */}
          <div className="bg-[#172033] border border-white/10 rounded-xl p-3 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">Target Vendor Driver:</span>
            <div className="flex items-center space-x-1.5 overflow-x-auto">
              {vendors.map((v) => (
                <button
                  key={v}
                  onClick={() => setTargetVendor(v)}
                  className={`px-3 py-1 rounded text-xs font-bold transition-colors ${
                    targetVendor === v
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Live Translation CLI Output Box */}
          <Card title={`Generated ${targetVendor} Hardware Commands`}>
            <div className="relative">
              <pre className="p-4 bg-slate-950 rounded-lg font-mono text-xs text-emerald-400 border border-white/10 min-h-48 overflow-x-auto">
                {generateVendorCommands(targetVendor)}
              </pre>
              <span className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-400 font-mono">
                Format: CLI Syntax
              </span>
            </div>
          </Card>

          {/* Unified Diff Previewer */}
          <Card title="Configuration Diff Comparison (Current vs Desired)">
            <pre className="p-4 bg-slate-950 rounded-lg font-mono text-[11px] text-slate-300 border border-white/10 overflow-x-auto">
{`--- current.cfg
+++ desired.cfg
@@ -1,4 +1,8 @@
 hostname sw-core-fra-01
+vlan ${vlanId}
+ name ${vlanName}
 interface ${intfName}
- switchport mode access
+ switchport mode ${intfMode.toLowerCase()}
+ switchport trunk allowed vlan ${allowedVlans}`}
            </pre>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
