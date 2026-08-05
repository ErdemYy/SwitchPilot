'use client';

import React, { useState } from 'react';
import { AppShell } from '../../layouts/AppShell';
import { Card, Button, Badge } from '@switchpilot/ui';

export default function GlobalAdminPage() {
  const [activeTab, setActiveTab] = useState<string>('TENANTS');

  const tenants = [
    { id: 't-101', name: 'Acme Financial Systems', type: 'ENTERPRISE_TENANT', plan: 'ENTERPRISE', devices: 142, status: 'ACTIVE' },
    { id: 't-102', name: 'Global Telco MSP', type: 'MSP_TENANT', plan: 'MSP', devices: 1250, status: 'ACTIVE' },
    { id: 't-103', name: 'Nordic Healthcare Trust', type: 'MULTI_TENANT', plan: 'BUSINESS', devices: 85, status: 'ACTIVE' },
  ];

  const featureFlags = [
    { key: 'ENABLE_AI_NETWORK_ENGINEER', scope: 'GLOBAL', status: 'ENABLED', rollout: '100%' },
    { key: 'ENABLE_CANARY_ROLLOUTS', scope: 'TENANT', status: 'BETA', rollout: '25%' },
    { key: 'ENABLE_TSDB_DOWNSAMPLING', scope: 'ORGANIZATION', status: 'ENABLED', rollout: '100%' },
  ];

  return (
    <AppShell
      currentPath="/admin"
      pageTitle="Global SaaS & MSP Platform Administration"
      pageSubtitle="Multi-tenant workspace administration, MSP customer impersonation, subscription tiers, licensing keys, and feature flags."
      breadcrumbItems={[{ label: 'Platform' }, { label: 'Global Admin' }]}
      actionButtons={
        <div className="flex items-center space-x-2">
          <Button variant="secondary" size="sm" onClick={() => alert('Add License Key Modal')}>
            🔑 Activate License
          </Button>
          <Button variant="primary" size="sm" onClick={() => alert('Create Tenant Modal')}>
            + Create New Tenant / MSP
          </Button>
        </div>
      }
    >
      <div className="flex items-center space-x-2 border-b border-white/10 pb-2 text-xs font-semibold text-slate-400">
        {[
          { id: 'TENANTS', label: 'Tenants & MSP Partners' },
          { id: 'FLAGS', label: 'Feature Flags & Rollouts' },
          { id: 'BILLING', label: 'Subscription & Metered Invoices' },
          { id: 'API_KEYS', label: 'Developer API Keys' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              activeTab === tab.id ? 'bg-blue-600 text-white font-bold' : 'hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'TENANTS' && (
        <Card title="Managed Tenants & MSP Partners">
          <div className="overflow-x-auto text-xs">
            <table className="w-full text-left">
              <thead>
                <tr className="text-slate-400 border-b border-white/10">
                  <th className="pb-2 pr-4">Tenant Name</th>
                  <th className="pb-2 pr-4">Tenant Type</th>
                  <th className="pb-2 pr-4">Plan Tier</th>
                  <th className="pb-2 pr-4">Active Devices</th>
                  <th className="pb-2 pr-4">Status</th>
                  <th className="pb-2 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {tenants.map((t) => (
                  <tr key={t.id} className="border-b border-white/5 font-mono">
                    <td className="py-2.5 pr-4 font-bold text-slate-100">{t.name}</td>
                    <td className="py-2.5 pr-4 text-blue-400">{t.type}</td>
                    <td className="py-2.5 pr-4 font-bold text-emerald-400">{t.plan}</td>
                    <td className="py-2.5 pr-4">{t.devices}</td>
                    <td className="py-2.5 pr-4">
                      <Badge variant="success" size="sm">{t.status}</Badge>
                    </td>
                    <td className="py-2.5 text-right">
                      <Button variant="secondary" size="xs" onClick={() => alert(`Audited Impersonation into ${t.name}...`)}>
                        🕵️ Impersonate
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {activeTab === 'FLAGS' && (
        <Card title="Centralized Feature Flag Management">
          <div className="space-y-2 text-xs font-mono">
            {featureFlags.map((flag) => (
              <div key={flag.key} className="p-3 bg-slate-950 rounded-lg border border-white/10 flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-200 block">{flag.key}</span>
                  <span className="text-[10px] text-slate-400">Scope: {flag.scope} · Gradual Rollout: {flag.rollout}</span>
                </div>
                <Badge variant={flag.status === 'ENABLED' ? 'success' : 'warning'} size="sm">
                  {flag.status}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      )}
    </AppShell>
  );
}
