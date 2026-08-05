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
exports.default = DashboardPage;
const react_1 = __importStar(require("react"));
const AppShell_1 = require("../layouts/AppShell");
const StatWidget_1 = require("../features/dashboard/StatWidget");
const VendorDistributionWidget_1 = require("../features/dashboard/VendorDistributionWidget");
const DeviceHealthWidget_1 = require("../features/dashboard/DeviceHealthWidget");
const AlertsWidget_1 = require("../features/dashboard/AlertsWidget");
const RecentChangesWidget_1 = require("../features/dashboard/RecentChangesWidget");
const TaskQueueWidget_1 = require("../features/dashboard/TaskQueueWidget");
const RollbackWidget_1 = require("../features/dashboard/RollbackWidget");
const SystemStatusWidget_1 = require("../features/dashboard/SystemStatusWidget");
const DataTable_1 = require("../components/table/DataTable");
const DeviceCard_1 = require("../components/device/DeviceCard");
const mockData_1 = require("../constants/mockData");
const ui_1 = require("@switchpilot/ui");
function DashboardPage() {
    const [currentPath, setCurrentPath] = (0, react_1.useState)('/dashboard');
    const [viewMode, setViewMode] = (0, react_1.useState)('table');
    // Columns definition for Enterprise Data Table
    const tableColumns = [
        {
            key: 'hostname',
            header: 'Hostname',
            sortable: true,
            accessor: (item) => (<div className="flex items-center space-x-2">
          <span className="font-bold text-slate-100">{item.hostname}</span>
        </div>),
        },
        {
            key: 'ipAddress',
            header: 'Management IP',
            sortable: true,
            accessor: (item) => <span className="font-mono text-slate-300">{item.ipAddress}</span>,
        },
        {
            key: 'vendor',
            header: 'Vendor',
            sortable: true,
            accessor: (item) => (<span className="px-2 py-0.5 rounded text-[10px] font-extrabold border bg-slate-800 text-blue-400 border-white/10 uppercase">
          {item.vendor}
        </span>),
        },
        {
            key: 'model',
            header: 'Hardware Model',
            sortable: true,
            accessor: (item) => <span className="text-slate-300">{item.model}</span>,
        },
        {
            key: 'osVersion',
            header: 'Firmware OS',
            sortable: true,
            accessor: (item) => <span className="font-mono text-xs text-slate-400">{item.osVersion}</span>,
        },
        {
            key: 'status',
            header: 'State',
            sortable: true,
            accessor: (item) => <ui_1.StatusChip status={item.status}/>,
        },
        {
            key: 'healthPercent',
            header: 'Health',
            sortable: true,
            accessor: (item) => (<div className="flex items-center space-x-2 w-24">
          <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
            <div className={`h-full rounded-full ${item.healthPercent > 80
                    ? 'bg-emerald-500'
                    : item.healthPercent > 50
                        ? 'bg-amber-500'
                        : 'bg-red-500'}`} style={{ width: `${item.healthPercent}%` }}/>
          </div>
          <span className="text-[10px] text-slate-400">{item.healthPercent}%</span>
        </div>),
        },
    ];
    return (<AppShell_1.AppShell currentPath={currentPath} onNavigate={(path) => setCurrentPath(path)} pageTitle="Enterprise Network NOC Console" pageSubtitle="Real-time multi-vendor hardware inventory, compliance, and task execution." breadcrumbItems={[{ label: 'Platform' }, { label: 'NOC Console' }]} actionButtons={<div className="flex items-center space-x-2">
          <ui_1.Button variant="secondary" size="sm" onClick={() => alert('Exporting Inventory CSV...')}>
            Export CSV
          </ui_1.Button>
          <ui_1.Button variant="primary" size="sm" onClick={() => alert('Add Device Modal')}>
            + Register Device
          </ui_1.Button>
        </div>}>
      {/* Stat Widgets Top Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatWidget_1.StatWidget title="Total Devices" value="142" change="12%" isPositive={true} icon="🖥️"/>
        <StatWidget_1.StatWidget title="Online Hardware" value="135" change="95.0%" isPositive={true} icon="🟢"/>
        <StatWidget_1.StatWidget title="Unreachable Devices" value="4" change="2" isPositive={false} icon="🔴"/>
        <StatWidget_1.StatWidget title="Pending Automation Jobs" value="3" change="Active Queue" isPositive={true} icon="⚡"/>
      </div>

      {/* Analytics & System Health Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <VendorDistributionWidget_1.VendorDistributionWidget />
        </div>
        <div>
          <DeviceHealthWidget_1.DeviceHealthWidget />
        </div>
      </div>

      {/* Main Managed Inventory Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <h2 className="text-lg font-bold text-slate-100">Managed Network Hardware</h2>
            <span className="text-xs text-slate-400 bg-slate-800 px-2.5 py-0.5 rounded-full border border-white/5">
              Cisco, Aruba, Juniper, Huawei, MikroTik, Ubiquiti, HP
            </span>
          </div>

          {/* Table vs Grid Toggle */}
          <div className="flex items-center space-x-1 bg-slate-900 p-1 rounded-lg border border-white/10 text-xs">
            <button onClick={() => setViewMode('table')} className={`px-3 py-1 rounded transition-colors ${viewMode === 'table' ? 'bg-blue-600 text-white font-medium' : 'text-slate-400 hover:text-slate-200'}`}>
              Table View
            </button>
            <button onClick={() => setViewMode('cards')} className={`px-3 py-1 rounded transition-colors ${viewMode === 'cards' ? 'bg-blue-600 text-white font-medium' : 'text-slate-400 hover:text-slate-200'}`}>
              Cards View
            </button>
          </div>
        </div>

        {viewMode === 'table' ? (<DataTable_1.DataTable data={mockData_1.MOCK_DEVICES} columns={tableColumns} keyExtractor={(dev) => dev.id} searchPlaceholder="Filter devices by hostname, IP, model..." onRowClick={(dev) => alert(`Selected Device: ${dev.hostname}`)} actions={(item) => (<ui_1.Dropdown align="right" trigger={<button className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded border border-white/10 text-xs">
                    •••
                  </button>} items={[
                    { label: 'View Configuration', onClick: () => alert(`Config for ${item.hostname}`) },
                    { label: 'SSH Console', onClick: () => alert(`SSH to ${item.ipAddress}`) },
                    { label: 'Trigger Backup', onClick: () => alert(`Backup ${item.hostname}`) },
                    { label: 'Remove Device', onClick: () => alert(`Delete ${item.hostname}`), variant: 'danger' },
                ]}/>)}/>) : (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {mockData_1.MOCK_DEVICES.map((dev) => (<DeviceCard_1.DeviceCard key={dev.id} device={dev} onSelect={(d) => alert(`Selected Device Card: ${d.hostname}`)} onAction={(act, d) => alert(`Action [${act}] on ${d.hostname}`)}/>))}
          </div>)}
      </div>

      {/* Grid of NOC Operational Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AlertsWidget_1.AlertsWidget />
        <TaskQueueWidget_1.TaskQueueWidget />
        <RecentChangesWidget_1.RecentChangesWidget />
        <RollbackWidget_1.RollbackWidget />
        <SystemStatusWidget_1.SystemStatusWidget />
      </div>
    </AppShell_1.AppShell>);
}
