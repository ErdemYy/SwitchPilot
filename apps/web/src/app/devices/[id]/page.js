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
exports.default = DeviceDetailsPage;
const react_1 = __importStar(require("react"));
const AppShell_1 = require("../../../layouts/AppShell");
const ui_1 = require("@switchpilot/ui");
function DeviceDetailsPage() {
    const [activeTab, setActiveTab] = (0, react_1.useState)('overview');
    const device = {
        id: 'dev-1',
        hostname: 'sw-core-fra-01',
        managementIp: '10.240.1.1',
        vendor: 'CISCO',
        platform: 'Catalyst 9000 Enterprise Series',
        osVersion: 'Cisco IOS-XE 17.09.04',
        model: 'Catalyst 9500-48Y4C',
        serialNumber: 'FCW2418L099',
        macAddress: '70:69:79:A1:B2:C3',
        assetNumber: 'AST-2026-9041',
        rackPosition: 'Rack A-12 (U21-U22)',
        location: 'Frankfurt DC1 (Bldg 4, 2nd Floor)',
        timezone: 'Europe/Frankfurt (UTC+1)',
        status: 'online',
        healthPercent: 98,
        uptime: '142 days, 12 hrs',
        description: 'Core Distribution Switch for Frankfurt Production Data Center',
        notes: 'Maintained by Frankfurt NOC Team. Dual PSU & Redundant Fans active.',
    };
    const tabs = [
        { id: 'overview', label: 'Overview' },
        { id: 'interfaces', label: 'Interfaces', badge: 48 },
        { id: 'firmware', label: 'Firmware & OS' },
        { id: 'capabilities', label: 'Capabilities' },
        { id: 'health', label: 'Health Telemetry' },
        { id: 'configuration', label: 'Configuration' },
        { id: 'activity', label: 'Activity' },
        { id: 'snapshots', label: 'Snapshots', badge: 14 },
        { id: 'audit', label: 'Audit Timeline' },
        { id: 'connection', label: 'Connection' },
    ];
    return (<AppShell_1.AppShell currentPath="/devices" pageTitle={device.hostname} pageSubtitle={`${device.vendor} ${device.model} • ${device.managementIp}`} breadcrumbItems={[{ label: 'Devices' }, { label: device.hostname }]} actionButtons={<div className="flex items-center space-x-2">
          <ui_1.Button variant="secondary" size="sm" onClick={() => alert('Trigger Backup')}>
            Backup Config
          </ui_1.Button>
          <ui_1.Button variant="primary" size="sm" onClick={() => alert('Open SSH Console')}>
            Console SSH
          </ui_1.Button>
        </div>}>
      {/* Device Summary Header Banner */}
      <div className="bg-[#172033] border border-white/10 rounded-xl p-5 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center font-extrabold text-blue-400 text-lg">
            {device.vendor.slice(0, 2)}
          </div>
          <div>
            <div className="flex items-center space-x-3">
              <h2 className="text-xl font-bold text-slate-100">{device.hostname}</h2>
              <ui_1.StatusChip status={device.status}/>
            </div>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              IP: {device.managementIp} • Serial: {device.serialNumber} • Mac: {device.macAddress}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6 text-xs text-slate-300">
          <div>
            <span className="block text-[10px] text-slate-500 uppercase">Uptime</span>
            <span className="font-medium text-slate-200">{device.uptime}</span>
          </div>
          <div>
            <span className="block text-[10px] text-slate-500 uppercase">Health Status</span>
            <span className="font-bold text-emerald-400">{device.healthPercent}% Excellent</span>
          </div>
        </div>
      </div>

      {/* 10 Navigation Tabs */}
      <ui_1.Tabs tabs={tabs} activeTab={activeTab} onChange={(id) => setActiveTab(id)}/>

      {/* Tab Content Views */}
      <div className="pt-2">
        {activeTab === 'overview' && (<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ui_1.Card title="Hardware & OS Details">
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Vendor</span>
                  <span className="font-bold text-blue-400">{device.vendor}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Platform Series</span>
                  <span>{device.platform}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Hardware Model</span>
                  <span>{device.model}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Firmware OS</span>
                  <span className="font-mono text-slate-200">{device.osVersion}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Serial Number</span>
                  <span className="font-mono">{device.serialNumber}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Asset Tag</span>
                  <span>{device.assetNumber}</span>
                </div>
              </div>
            </ui_1.Card>

            <ui_1.Card title="Location & Physical Setup">
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Physical Site</span>
                  <span>{device.location}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Rack Position</span>
                  <span>{device.rackPosition}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Timezone</span>
                  <span>{device.timezone}</span>
                </div>
                <div className="space-y-1 pt-1">
                  <span className="block text-[10px] text-slate-500 uppercase">Operator Notes</span>
                  <p className="text-slate-400 bg-slate-900 p-2 rounded text-[11px]">{device.notes}</p>
                </div>
              </div>
            </ui_1.Card>
          </div>)}

        {activeTab === 'interfaces' && (<ui_1.Card title="Device Ports & Interfaces (48 Ports)">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2 pt-2">
              {Array.from({ length: 24 }).map((_, i) => (<div key={i} className="p-2 bg-slate-900 border border-white/5 rounded text-center space-y-1 text-xs">
                  <span className="block font-mono text-[11px] text-slate-300">Gi1/0/{i + 1}</span>
                  <span className={`inline-block w-2 h-2 rounded-full ${i % 7 === 0 ? 'bg-slate-600' : 'bg-emerald-500'}`}/>
                  <span className="block text-[9px] text-slate-500 font-mono">VLAN 100</span>
                </div>))}
            </div>
          </ui_1.Card>)}

        {activeTab === 'firmware' && (<ui_1.Card title="Firmware OS & Upgrade Lifecycle">
            <div className="space-y-3 text-xs text-slate-300">
              <p>Active Image: <span className="font-mono text-blue-400">{device.osVersion}</span></p>
              <p>Target Upgrade Image: <span className="font-mono text-emerald-400">Cisco IOS-XE 17.12.01 (Recommended)</span></p>
              <ui_1.Button variant="primary" size="sm" onClick={() => alert('Initiate Firmware Upgrade Task')}>
                Schedule Firmware Upgrade
              </ui_1.Button>
            </div>
          </ui_1.Card>)}

        {activeTab === 'capabilities' && (<ui_1.Card title="Device Capability Discovery">
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-900 rounded border border-white/5">VLAN Management: <strong className="text-emerald-400">Supported</strong></div>
              <div className="p-3 bg-slate-900 rounded border border-white/5">Port Security: <strong className="text-emerald-400">Supported</strong></div>
              <div className="p-3 bg-slate-900 rounded border border-white/5">Diff Backup Comparison: <strong className="text-emerald-400">Supported</strong></div>
              <div className="p-3 bg-slate-900 rounded border border-white/5">RESTCONF / NETCONF: <strong className="text-slate-500">Disabled</strong></div>
            </div>
          </ui_1.Card>)}

        {activeTab === 'health' && (<ui_1.Card title="Real-Time Telemetry & Environmental Status">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-slate-900 rounded-lg">
                <span className="text-[10px] text-slate-400 uppercase">CPU Usage</span>
                <div className="text-2xl font-bold text-slate-100 mt-1">18.4%</div>
              </div>
              <div className="p-4 bg-slate-900 rounded-lg">
                <span className="text-[10px] text-slate-400 uppercase">Memory Usage</span>
                <div className="text-2xl font-bold text-slate-100 mt-1">42.1%</div>
              </div>
              <div className="p-4 bg-slate-900 rounded-lg">
                <span className="text-[10px] text-slate-400 uppercase">Chassis Temp</span>
                <div className="text-2xl font-bold text-emerald-400 mt-1">34.5 °C</div>
              </div>
            </div>
          </ui_1.Card>)}

        {activeTab === 'configuration' && (<ui_1.Card title="Running Configuration Backup (SHA-256 Verified)">
            <pre className="p-4 bg-slate-950 rounded font-mono text-[11px] text-slate-300 max-h-80 overflow-y-auto">
            {`! Running Configuration for ${device.hostname}
version 17.9
hostname ${device.hostname}
!
interface GigabitEthernet1/0/1
 description Trunk to Aggregation
 switchport mode trunk
 switchport trunk allowed vlan 10,20,100
!
interface GigabitEthernet1/0/2
 description User Workstation Access
 switchport mode access
 switchport access vlan 100
!
end`}
            </pre>
          </ui_1.Card>)}

        {activeTab === 'activity' && (<ui_1.Card title="Realtime Command & Event Stream">
            <p className="text-xs text-slate-400">Stream listening for Scrapli / SSH execution events...</p>
          </ui_1.Card>)}

        {activeTab === 'snapshots' && (<ui_1.Card title="Configuration Revision History (14 Snapshots)">
            <div className="space-y-2 text-xs">
              <div className="p-3 bg-slate-900 rounded border border-white/5 flex justify-between">
                <div>
                  <span className="font-bold text-slate-200">cfg-rev-419 (Current)</span>
                  <span className="block text-[10px] text-slate-500 font-mono">Checksum: sha256:8f9a2b...</span>
                </div>
                <span className="text-slate-400">Today 08:30 AM</span>
              </div>
            </div>
          </ui_1.Card>)}

        {activeTab === 'audit' && (<ui_1.Card title="Audit Event Timeline">
            <p className="text-xs text-slate-400">Captured via EventBus domain events.</p>
          </ui_1.Card>)}

        {activeTab === 'connection' && (<ui_1.Card title="Connection Parameters & Timeout Settings">
            <div className="space-y-2 text-xs text-slate-300">
              <p>Protocol: <strong className="text-blue-400">SSH (v2)</strong></p>
              <p>Port: <strong>22</strong></p>
              <p>Connect Timeout: <strong>15s</strong></p>
              <p>Read Timeout: <strong>30s</strong></p>
            </div>
          </ui_1.Card>)}
      </div>
    </AppShell_1.AppShell>);
}
