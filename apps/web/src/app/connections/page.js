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
exports.default = ConnectionsPage;
const react_1 = __importStar(require("react"));
const AppShell_1 = require("../../layouts/AppShell");
const TestConnectionModal_1 = require("../../components/connection/TestConnectionModal");
const ui_1 = require("@switchpilot/ui");
function ConnectionsPage() {
    const [isTestModalOpen, setIsTestModalOpen] = (0, react_1.useState)(false);
    const [selectedHost, setSelectedHost] = (0, react_1.useState)('10.240.1.1');
    const [selectedProtocol, setSelectedProtocol] = (0, react_1.useState)('SSH');
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
    return (<AppShell_1.AppShell currentPath="/connections" pageTitle="Enterprise Connection Platform" pageSubtitle="Universal connection pipeline, Credential Vault engine, Bastion proxy chains, and protocol adapters." breadcrumbItems={[{ label: 'Platform' }, { label: 'Connection Architecture' }]} actionButtons={<div className="flex items-center space-x-2">
          <ui_1.Button variant="secondary" size="sm" onClick={() => alert('Add Credential to Vault')}>
            + Store Secret in Vault
          </ui_1.Button>
          <ui_1.Button variant="primary" size="sm" onClick={() => setIsTestModalOpen(true)}>
            ⚡ Test Connection Pipeline
          </ui_1.Button>
        </div>}>
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
        <ui_1.Card title="Protocol Adapter Capability Registry">
          <div className="space-y-2 text-xs pt-1">
            {protocols.map((p) => (<div key={p.name} className="p-3 bg-[#111827] border border-white/5 rounded-lg flex items-center justify-between">
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
                  <button onClick={() => {
                setSelectedProtocol(p.name.split(' ')[0]);
                setIsTestModalOpen(true);
            }} className="px-2.5 py-1 text-[11px] bg-slate-800 hover:bg-slate-700 text-slate-200 rounded border border-white/10">
                    Test
                  </button>
                </div>
              </div>))}
          </div>
        </ui_1.Card>

        {/* Credential Vault Manager */}
        <ui_1.Card title="Credential Vault Manager (HashiCorp / KMS)">
          <div className="space-y-2 text-xs pt-1">
            {credentials.map((c) => (<div key={c.name} className="p-3 bg-[#111827] border border-white/5 rounded-lg flex items-center justify-between">
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
              </div>))}
          </div>
        </ui_1.Card>
      </div>

      {/* Bastion Hosts & Error Model Reference */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ui_1.Card title="Bastion Jump Hosts & SSH Proxy Chains">
          <div className="space-y-2 text-xs pt-1">
            {bastions.map((b) => (<div key={b.name} className="p-3 bg-[#111827] border border-white/5 rounded-lg flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-100">{b.name}</span>
                  <span className="block text-[10px] font-mono text-slate-400">
                    {b.username}@{b.ip}:{b.port}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[10px] text-blue-400">{b.tunnels} Active Tunnels</span>
                  <ui_1.StatusChip status="online"/>
                </div>
              </div>))}
          </div>
        </ui_1.Card>

        <ui_1.Card title="Standardized Connection Error Model">
          <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
            <div className="p-2 bg-slate-900 rounded border border-white/5">AUTH_FAILED</div>
            <div className="p-2 bg-slate-900 rounded border border-white/5">HOST_UNREACHABLE</div>
            <div className="p-2 bg-slate-900 rounded border border-white/5">DNS_FAILURE</div>
            <div className="p-2 bg-slate-900 rounded border border-white/5">CONNECTION_REFUSED</div>
            <div className="p-2 bg-slate-900 rounded border border-white/5">TIMEOUT (15s)</div>
            <div className="p-2 bg-slate-900 rounded border border-white/5">PROTOCOL_UNSUPPORTED</div>
          </div>
        </ui_1.Card>
      </div>

      {/* Interactive Test Connection Workflow Modal */}
      <TestConnectionModal_1.TestConnectionModal isOpen={isTestModalOpen} onClose={() => setIsTestModalOpen(false)} targetHost={selectedHost} protocol={selectedProtocol}/>
    </AppShell_1.AppShell>);
}
