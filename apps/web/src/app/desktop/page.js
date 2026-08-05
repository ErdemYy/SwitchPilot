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
exports.default = DesktopDashboardPage;
const react_1 = __importStar(require("react"));
const AppShell_1 = require("../../layouts/AppShell");
const ui_1 = require("@switchpilot/ui");
function DesktopDashboardPage() {
    const [isOffline, setIsOffline] = (0, react_1.useState)(false);
    const [syncStatus, setSyncStatus] = (0, react_1.useState)('IDLE');
    const [queuedChangesCount, setQueuedChangesCount] = (0, react_1.useState)(3);
    const handleManualSync = () => {
        setSyncStatus('SYNCING');
        setTimeout(() => {
            setSyncStatus('COMPLETED');
            setQueuedChangesCount(0);
            alert('Offline changes synced successfully with cloud backend!');
        }, 1500);
    };
    const handleExportBackup = (format) => {
        alert(`Exporting encrypted network configuration snapshot archive (.spbackup / ${format})...`);
    };
    return (<AppShell_1.AppShell currentPath="/desktop" pageTitle="Enterprise Desktop Console" pageSubtitle="Manage desktop application state, offline database synchronization, local encrypted SQLite storage, and multi-format file exports." breadcrumbItems={[{ label: 'Platform' }, { label: 'Desktop Console' }]} actionButtons={<div className="flex items-center space-x-2">
          <ui_1.Button variant="secondary" size="sm" onClick={() => handleExportBackup('ZIP')}>
            📦 Export Backup (.spbackup)
          </ui_1.Button>
          <ui_1.Button variant="primary" size="sm" onClick={handleManualSync}>
            🔄 Sync Offline Queue ({queuedChangesCount})
          </ui_1.Button>
        </div>}>
      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#0f1629] border border-white/5 rounded-xl p-4 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Connection State</span>
          <div className="flex items-center space-x-2">
            <span className={`w-3 h-3 rounded-full ${isOffline ? 'bg-amber-500' : 'bg-emerald-500'}`}/>
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
          <ui_1.Card title="Offline Pending Configuration Execution Queue">
            <div className="space-y-2 text-xs">
              {[
            { id: 'off-req-001', device: 'sw-core-fra-01', action: 'VLAN 100 Provisioning', status: 'QUEUED_OFFLINE', time: '10 min ago' },
            { id: 'off-req-002', device: 'sw-edge-lon-01', action: 'Hostname Standardization', status: 'QUEUED_OFFLINE', time: '25 min ago' },
            { id: 'off-req-003', device: 'fw-edge-fra-01', action: 'Syslog IP Update', status: 'QUEUED_OFFLINE', time: '40 min ago' },
        ].map((item) => (<div key={item.id} className="p-3 bg-slate-950 rounded-lg border border-white/5 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-200 block">{item.action}</span>
                    <span className="text-[10px] text-slate-400">{item.device} · {item.time}</span>
                  </div>
                  <ui_1.Badge variant="warning" size="sm">{item.status}</ui_1.Badge>
                </div>))}
            </div>
          </ui_1.Card>
        </div>

        {/* Right Column: Import / Export & File Associations */}
        <div className="lg:col-span-5 space-y-4">
          <ui_1.Card title="Multi-Format Import / Export Engine">
            <div className="space-y-3 text-xs">
              <p className="text-[10px] text-slate-400">
                Export or import network inventory baselines, snapshots, and automation workflows.
              </p>
              <div className="grid grid-cols-2 gap-2">
                <ui_1.Button variant="secondary" size="sm" onClick={() => handleExportBackup('CSV')}>Export CSV</ui_1.Button>
                <ui_1.Button variant="secondary" size="sm" onClick={() => handleExportBackup('Excel')}>Export Excel</ui_1.Button>
                <ui_1.Button variant="secondary" size="sm" onClick={() => handleExportBackup('JSON')}>Export JSON</ui_1.Button>
                <ui_1.Button variant="secondary" size="sm" onClick={() => handleExportBackup('YAML')}>Export YAML</ui_1.Button>
              </div>
            </div>
          </ui_1.Card>
        </div>
      </div>
    </AppShell_1.AppShell>);
}
