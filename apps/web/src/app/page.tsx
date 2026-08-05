'use client';

import React, { useState } from 'react';
import { AppShell } from '../layouts/AppShell';
import { StatWidget } from '../features/dashboard/StatWidget';
import { VendorDistributionWidget } from '../features/dashboard/VendorDistributionWidget';
import { DeviceHealthWidget } from '../features/dashboard/DeviceHealthWidget';
import { AlertsWidget } from '../features/dashboard/AlertsWidget';
import { RecentChangesWidget } from '../features/dashboard/RecentChangesWidget';
import { TaskQueueWidget } from '../features/dashboard/TaskQueueWidget';
import { RollbackWidget } from '../features/dashboard/RollbackWidget';
import { SystemStatusWidget } from '../features/dashboard/SystemStatusWidget';
import { DataTable, Column } from '../components/table/DataTable';
import { DeviceCard, DeviceCardData } from '../components/device/DeviceCard';
import { MOCK_DEVICES } from '../constants/mockData';
import { StatusChip, StatusType, Button, Dropdown } from '@switchpilot/ui';

export default function DashboardPage() {
  const [currentPath, setCurrentPath] = useState('/dashboard');
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');

  // Columns definition for Enterprise Data Table
  const tableColumns: Column<DeviceCardData>[] = [
    {
      key: 'hostname',
      header: 'Hostname',
      sortable: true,
      accessor: (item) => (
        <div className="flex items-center space-x-2">
          <span className="font-bold text-slate-100">{item.hostname}</span>
        </div>
      ),
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
      accessor: (item) => (
        <span className="px-2 py-0.5 rounded text-[10px] font-extrabold border bg-slate-800 text-blue-400 border-white/10 uppercase">
          {item.vendor}
        </span>
      ),
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
      accessor: (item) => <StatusChip status={item.status as StatusType} />,
    },
    {
      key: 'healthPercent',
      header: 'Health',
      sortable: true,
      accessor: (item) => (
        <div className="flex items-center space-x-2 w-24">
          <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
            <div
              className={`h-full rounded-full ${
                item.healthPercent > 80
                  ? 'bg-emerald-500'
                  : item.healthPercent > 50
                  ? 'bg-amber-500'
                  : 'bg-red-500'
              }`}
              style={{ width: `${item.healthPercent}%` }}
            />
          </div>
          <span className="text-[10px] text-slate-400">{item.healthPercent}%</span>
        </div>
      ),
    },
  ];

  return (
    <AppShell
      currentPath={currentPath}
      onNavigate={(path) => setCurrentPath(path)}
      pageTitle="Enterprise Network NOC Console"
      pageSubtitle="Real-time multi-vendor hardware inventory, compliance, and task execution."
      breadcrumbItems={[{ label: 'Platform' }, { label: 'NOC Console' }]}
      actionButtons={
        <div className="flex items-center space-x-2">
          <Button variant="secondary" size="sm" onClick={() => alert('Exporting Inventory CSV...')}>
            Export CSV
          </Button>
          <Button variant="primary" size="sm" onClick={() => alert('Add Device Modal')}>
            + Register Device
          </Button>
        </div>
      }
    >
      {/* Stat Widgets Top Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatWidget
          title="Total Devices"
          value="142"
          change="12%"
          isPositive={true}
          icon="🖥️"
        />
        <StatWidget
          title="Online Hardware"
          value="135"
          change="95.0%"
          isPositive={true}
          icon="🟢"
        />
        <StatWidget
          title="Unreachable Devices"
          value="4"
          change="2"
          isPositive={false}
          icon="🔴"
        />
        <StatWidget
          title="Pending Automation Jobs"
          value="3"
          change="Active Queue"
          isPositive={true}
          icon="⚡"
        />
      </div>

      {/* Analytics & System Health Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <VendorDistributionWidget />
        </div>
        <div>
          <DeviceHealthWidget />
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
            <button
              onClick={() => setViewMode('table')}
              className={`px-3 py-1 rounded transition-colors ${
                viewMode === 'table' ? 'bg-blue-600 text-white font-medium' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Table View
            </button>
            <button
              onClick={() => setViewMode('cards')}
              className={`px-3 py-1 rounded transition-colors ${
                viewMode === 'cards' ? 'bg-blue-600 text-white font-medium' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Cards View
            </button>
          </div>
        </div>

        {viewMode === 'table' ? (
          <DataTable
            data={MOCK_DEVICES}
            columns={tableColumns}
            keyExtractor={(dev) => dev.id}
            searchPlaceholder="Filter devices by hostname, IP, model..."
            onRowClick={(dev) => alert(`Selected Device: ${dev.hostname}`)}
            actions={(item) => (
              <Dropdown
                align="right"
                trigger={
                  <button className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded border border-white/10 text-xs">
                    •••
                  </button>
                }
                items={[
                  { label: 'View Configuration', onClick: () => alert(`Config for ${item.hostname}`) },
                  { label: 'SSH Console', onClick: () => alert(`SSH to ${item.ipAddress}`) },
                  { label: 'Trigger Backup', onClick: () => alert(`Backup ${item.hostname}`) },
                  { label: 'Remove Device', onClick: () => alert(`Delete ${item.hostname}`), variant: 'danger' },
                ]}
              />
            )}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {MOCK_DEVICES.map((dev) => (
              <DeviceCard
                key={dev.id}
                device={dev}
                onSelect={(d) => alert(`Selected Device Card: ${d.hostname}`)}
                onAction={(act, d) => alert(`Action [${act}] on ${d.hostname}`)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Grid of NOC Operational Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AlertsWidget />
        <TaskQueueWidget />
        <RecentChangesWidget />
        <RollbackWidget />
        <SystemStatusWidget />
      </div>
    </AppShell>
  );
}
