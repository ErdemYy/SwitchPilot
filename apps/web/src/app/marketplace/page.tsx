'use client';

import React, { useState } from 'react';
import { AppShell } from '../../layouts/AppShell';
import { Card, Button, Badge } from '@switchpilot/ui';

export default function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const plugins = [
    { code: 'com.cisco.nexus-translator', name: 'Cisco Nexus NX-OS Translator', category: 'TRANSLATOR', author: 'SwitchPilot Core', rating: 5.0, isInstalled: true, desc: 'Adds support for Cisco Nexus 7000/9000 switches.' },
    { code: 'com.aruba.aoscx-collector', name: 'Aruba AOS-CX Telemetry Collector', category: 'COLLECTOR', author: 'Aruba Networks', rating: 4.9, isInstalled: true, desc: 'gNMI streaming telemetry collector for Aruba AOS-CX.' },
    { code: 'com.pagerduty.alert-dispatcher', name: 'PagerDuty Incident Dispatcher', category: 'NOTIFICATION', author: 'PagerDuty', rating: 4.8, isInstalled: false, desc: 'Dispatches critical alerts directly to PagerDuty services.' },
    { code: 'com.grafana.metric-exporter', name: 'Grafana OpenTelemetry Exporter', category: 'WIDGET', author: 'Grafana Labs', rating: 4.9, isInstalled: false, desc: 'Export TSDB metrics to external Grafana instances.' },
  ];

  return (
    <AppShell
      currentPath="/marketplace"
      pageTitle="Plugin Marketplace & Extension Store"
      pageSubtitle="Discover, install, update, and sandbox third-party Vendor Translators, Telemetry Collectors, Notification Channels, and Visual Widgets."
      breadcrumbItems={[{ label: 'Platform' }, { label: 'Marketplace' }]}
      actionButtons={
        <div className="flex items-center space-x-2">
          <Button variant="secondary" size="sm" onClick={() => alert('Check Installed Plugin Updates')}>
            🔄 Check Plugin Updates
          </Button>
          <Button variant="primary" size="sm" onClick={() => alert('Publish Plugin Modal')}>
            📤 Publish Custom Extension
          </Button>
        </div>
      }
    >
      <div className="space-y-4">
        {/* Category Filter */}
        <div className="flex items-center space-x-2 text-xs font-semibold text-slate-400">
          {['ALL', 'TRANSLATOR', 'COLLECTOR', 'NOTIFICATION', 'WIDGET'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                selectedCategory === cat ? 'bg-blue-600 text-white font-bold' : 'bg-[#111827] text-slate-400 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Plugin Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {plugins.map((plugin) => (
            <Card key={plugin.code}>
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-slate-100 text-sm">{plugin.name}</h3>
                    <span className="text-[10px] text-slate-400">By {plugin.author} · ★ {plugin.rating}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-blue-400 font-mono font-bold">
                    {plugin.category}
                  </span>
                </div>

                <p className="text-slate-300 text-xs">{plugin.desc}</p>

                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                  <span className="text-[10px] text-slate-500 font-mono">{plugin.code}</span>
                  {plugin.isInstalled ? (
                    <Badge variant="success" size="sm">✓ Installed</Badge>
                  ) : (
                    <Button variant="primary" size="xs" onClick={() => alert(`Installing ${plugin.name}...`)}>
                      + Install Extension
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
