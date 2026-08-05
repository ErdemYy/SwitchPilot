'use client';

import React, { useState } from 'react';
import { AppShell } from '../../layouts/AppShell';
import { TestConnectionModal } from '../../components/connection/TestConnectionModal';
import { Card, Button, StatusChip } from '@switchpilot/ui';

export default function ConnectionsPage() {
  const [isTestModalOpen, setIsTestModalOpen] = useState(false);
  const [selectedHost] = useState('10.240.1.1');
  const [selectedProtocol, setSelectedProtocol] = useState('SSH');

  const protocols = [
    { name: 'SSH (v2)', port: 22, status: 'Active', adapter: 'SSHProtocolAdapter' },
    { name: 'NETCONF', port: 830, status: 'Active', adapter: 'NETCONFProtocolAdapter' },
    { name: 'RESTCONF', port: 443, status: 'Active', adapter: 'RESTCONFProtocolAdapter' },
    { name: 'SNMP (v2c/v3)', port: 161, status: 'Active', adapter: 'SNMPProtocolAdapter' },
    { name: 'HTTPS API', port: 443, status: 'Active', adapter: 'RESTAPIProtocolAdapter' },
    { name: 'gRPC Telemetry', port: 50051, status: 'Ready', adapter: 'gRPCProtocolAdapter' },
  ];

  const credentials = [
    { name: 'Cisco Core SSH Key', type: 'SSH_KEY', ref: 'vault/kv/v2/cisco-core', lastUsed: '2 mins ago' },
    { name: 'SNMPv3 NOC Read Credentials', type: 'SNMP_V3_USER', ref: 'vault/kv/v2/snmp-noc', lastUsed: '15 mins ago' },
    { name: 'Aruba AOS-CX API Token', type: 'API_TOKEN', ref: 'vault/kv/v2/aruba-token', lastUsed: '1 hour ago' },
  ];

  const bastions = [
    { name: 'Frankfurt NOC Jump Host', ip: '10.240.0.254', port: 22, status: 'ONLINE', tunnels: 14 },
    { name: 'London Edge Proxy Host', ip: '192.168.100.254', port: 22, status: 'ONLINE', tunnels: 6 },
  ];

  return (
    <AppShell
      currentPath="/connections"
      pageTitle="Enterprise Connection Platform"
      pageSubtitle="Universal connection pipeline, Credential Vault engine, Bastion proxy chains, and protocol adapters."
      breadcrumbItems={[{ label: 'Platform' }, { label: 'Connection Architecture' }]}
      actionButtons={
        <div className="flex items-center space-x-2">
          <Button variant="secondary" size="sm" onClick={() => alert('Add Credential to Vault')}>
            + Store Secret in Vault
          </Button>
          <Button variant="primary" size="sm" onClick={() => setIsTestModalOpen(true)}>
            ⚡ Test Connection Pipeline
          </Button>
        </div>
      }
    >
      {/* Connection Pool Telemetry Top Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-[#172033] border border-white/10 rounded-xl p-5 shadow-lg space-y-1">
          <span className="text-xs text-slate-400 uppercase font-semibold">Active Connection Pool</span>
          <div className="text-2xl font-extrabold text-slate-100">42 Sessions</div>
          <span className="text-[11px] text-emerald-400 font-medium">100% Reuse Efficiency</span>
        </div>
        <div className="bg-[#172033] border border-white/10 rounded-xl p-5 shadow-lg space-y-1">
          <span className="text-xs text-slate-400 uppercase font-semibold">Average Latency</span>
          <div className="text-2xl font-extrabold text-blue-400">14.2 ms</div>
          <span className="text-[11px] text-slate-400 font-medium">NOC Fiber Backbone</span>
        </div>
        <div className="bg-[#172033] border border-white/10 rounded-xl p-5 shadow-lg space-y-1">
          <span className="text-xs text-slate-400 uppercase font-semibold">Vault Secret Engine</span>
          <div className="text-2xl font-extrabold text-emerald-400">AES-256-GCM</div>
          <span className="text-[11px] text-slate-400 font-medium">HashiCorp KMS v1.16</span>
        </div>
        <div className="bg-[#172033] border border-white/10 rounded-xl p-5 shadow-lg space-y-1">
          <span className="text-xs text-slate-400 uppercase font-semibold">Bastion Jump Tunnels</span>
          <div className="text-2xl font-extrabold text-slate-100">20 Tunnels</div>
          <span className="text-[11px] text-slate-400 font-medium">2 Active Proxy Chains</span>
        </div>
      </div>

      {/* Protocol Adapters & Credential Vault Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Protocol Adapter Registry */}
        <Card title="Protocol Adapter Capability Registry">
          <div className="space-y-2 text-xs pt-1">
            {protocols.map((p) => (
              <div
                key={p.name}
                className="p-3 bg-[#111827] border border-white/5 rounded-lg flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-slate-100">{p.name}</span>
                    <span className="text-[10px] font-mono text-slate-400">Port {p.port}</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">{p.adapter}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800 font-semibold">
                    {p.status}
                  </span>
                  <button
                    onClick={() => {
                      setSelectedProtocol(p.name.split(' ')[0]);
                      setIsTestModalOpen(true);
                    }}
                    className="px-2.5 py-1 text-[11px] bg-slate-800 hover:bg-slate-700 text-slate-200 rounded border border-white/10"
                  >
                    Test
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Credential Vault Manager */}
        <Card title="Credential Vault Manager (HashiCorp / KMS)">
          <div className="space-y-2 text-xs pt-1">
            {credentials.map((c) => (
              <div
                key={c.name}
                className="p-3 bg-[#111827] border border-white/5 rounded-lg flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-slate-100">{c.name}</span>
                    <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-blue-950 text-blue-400 border border-blue-800">
                      {c.type}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">{c.ref}</span>
                </div>
                <span className="text-[10px] text-slate-400">Used: {c.lastUsed}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Bastion Hosts & Error Model Reference */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Bastion Jump Hosts & SSH Proxy Chains">
          <div className="space-y-2 text-xs pt-1">
            {bastions.map((b) => (
              <div
                key={b.name}
                className="p-3 bg-[#111827] border border-white/5 rounded-lg flex items-center justify-between"
              >
                <div>
                  <span className="font-bold text-slate-100">{b.name}</span>
                  <span className="block text-[10px] font-mono text-slate-400">
                    root@{b.ip}:{b.port}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[10px] text-blue-400">{b.tunnels} Active Tunnels</span>
                  <StatusChip status="online" />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Standardized Connection Error Model">
          <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
            <div className="p-2 bg-slate-900 rounded border border-white/5">AUTH_FAILED</div>
            <div className="p-2 bg-slate-900 rounded border border-white/5">HOST_UNREACHABLE</div>
            <div className="p-2 bg-slate-900 rounded border border-white/5">DNS_FAILURE</div>
            <div className="p-2 bg-slate-900 rounded border border-white/5">CONNECTION_REFUSED</div>
            <div className="p-2 bg-slate-900 rounded border border-white/5">TIMEOUT (15s)</div>
            <div className="p-2 bg-slate-900 rounded border border-white/5">PROTOCOL_UNSUPPORTED</div>
          </div>
        </Card>
      </div>

      {/* Interactive Test Connection Workflow Modal */}
      <TestConnectionModal
        isOpen={isTestModalOpen}
        onClose={() => setIsTestModalOpen(false)}
        targetHost={selectedHost}
        protocol={selectedProtocol}
      />
    </AppShell>
  );
}
