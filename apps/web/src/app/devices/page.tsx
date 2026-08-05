'use client';

import React, { useState } from 'react';
import { AppShell } from '../../layouts/AppShell';
import { DataTable, Column } from '../../components/table/DataTable';
import { DeviceGroupTree } from '../../components/device/DeviceGroupTree';
import { DeviceImportModal } from '../../components/device/DeviceImportModal';
import { MOCK_DEVICES } from '../../constants/mockData';
import { DeviceCardData } from '../../components/device/DeviceCard';
import { StatusChip, StatusType, Button, Dropdown } from '@switchpilot/ui';

export default function DevicesPage() {
  const [selectedGroupId, setSelectedGroupId] = useState<string>('');
  const [isImportModalOpen, setIsImportModalOpen] = useState<boolean>(false);
  const [vendorFilter, setVendorFilter] = useState<string>('ALL');

  const mockGroupTree = [
    {
      id: 'grp-global',
      name: 'Global Hardware Network',
      deviceCount: 142,
      children: [
        {
          id: 'grp-eu',
          name: 'Europe Region (NOC)',
          deviceCount: 86,
          children: [
            { id: 'grp-de-fra', name: 'Germany - Frankfurt DC', deviceCount: 42 },
            { id: 'grp-uk-lon', name: 'UK - London Edge', deviceCount: 24 },
          ],
        },
        {
          id: 'grp-apac',
          name: 'Asia Pacific (APAC)',
          deviceCount: 56,
          children: [
            { id: 'grp-jp-tky', name: 'Japan - Tokyo Branch', deviceCount: 18 },
            { id: 'grp-sg-sing', name: 'Singapore Regional Hub', deviceCount: 22 },
          ],
        },
      ],
    },
  ];

  const filteredDevices = MOCK_DEVICES.filter((d) =>
    vendorFilter === 'ALL' ? true : d.vendor.toUpperCase() === vendorFilter,
  );

  const columns: Column<DeviceCardData>[] = [
    {
      key: 'hostname',
      header: 'Hostname',
      sortable: true,
      accessor: (item) => (
        <a href={`/devices/${item.id}`} className="font-bold text-slate-100 hover:text-blue-400">
          {item.hostname}
        </a>
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
        <span className="px-2 py-0.5 rounded text-[10px] font-bold border bg-slate-800 text-blue-400 border-white/10">
          {item.vendor}
        </span>
      ),
    },
    {
      key: 'model',
      header: 'Model',
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
      header: 'Status',
      sortable: true,
      accessor: (item) => <StatusChip status={item.status as StatusType} />,
    },
    {
      key: 'healthPercent',
      header: 'Health',
      sortable: true,
      accessor: (item) => (
        <span className="font-medium text-xs text-emerald-400">{item.healthPercent}%</span>
      ),
    },
  ];

  return (
    <AppShell
      currentPath="/devices"
      pageTitle="Multi-Vendor Device Inventory"
      pageSubtitle="Centralized multi-tenant hardware asset registry, group hierarchy, and telemetry parameters."
      breadcrumbItems={[{ label: 'Platform' }, { label: 'Device Inventory' }]}
      actionButtons={
        <div className="flex items-center space-x-2">
          <Button variant="secondary" size="sm" onClick={() => setIsImportModalOpen(true)}>
            📥 Import (CSV/JSON)
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => alert('Exporting Inventory JSON/CSV...')}
          >
            📤 Export
          </Button>
          <Button variant="primary" size="sm" onClick={() => alert('Register New Device Modal')}>
            + Register Device
          </Button>
        </div>
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar: Device Group Tree & Saved Filters */}
        <div className="space-y-4">
          <DeviceGroupTree
            nodes={mockGroupTree}
            selectedGroupId={selectedGroupId}
            onSelectGroup={(id) => setSelectedGroupId(id)}
          />

          {/* Quick Vendor Filters */}
          <div className="bg-[#172033] border border-white/10 rounded-xl p-4 space-y-2">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
              Filter by Vendor
            </h4>
            {['ALL', 'CISCO', 'ARUBA', 'JUNIPER', 'HUAWEI', 'MIKROTIK', 'UBIQUITI', 'HP'].map((v) => (
              <button
                key={v}
                onClick={() => setVendorFilter(v)}
                className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                  vendorFilter === v
                    ? 'bg-blue-600/20 text-blue-400 font-semibold border border-blue-500/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {v === 'ALL' ? 'All Hardware Vendors' : v}
              </button>
            ))}
          </div>
        </div>

        {/* Main Enterprise Data Table */}
        <div className="lg:col-span-3">
          <DataTable
            data={filteredDevices}
            columns={columns}
            keyExtractor={(dev) => dev.id}
            searchPlaceholder="Search by hostname, IP, model, vendor, tags..."
            onRowClick={(dev) => (window.location.href = `/devices/${dev.id}`)}
            actions={(item) => (
              <Dropdown
                align="right"
                trigger={
                  <button className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded border border-white/10 text-xs">
                    •••
                  </button>
                }
                items={[
                  { label: 'View Details', onClick: () => (window.location.href = `/devices/${item.id}`) },
                  { label: 'Console SSH', onClick: () => alert(`SSH to ${item.ipAddress}`) },
                  { label: 'Backup Config', onClick: () => alert(`Trigger Backup ${item.hostname}`) },
                  { label: 'Delete Device', onClick: () => alert(`Delete ${item.hostname}`), variant: 'danger' },
                ]}
              />
            )}
          />
        </div>
      </div>

      {/* Import Modal */}
      <DeviceImportModal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
        onImportSuccess={() => alert('Devices successfully imported into inventory.')}
      />
    </AppShell>
  );
}
