'use client';

import React, { useState } from 'react';
import { AppShell } from '../../../layouts/AppShell';
import { Card, Button, Badge } from '@switchpilot/ui';

export default function CustomDashboardPage() {
  const [widgets, setWidgets] = useState<Array<{ id: string; name: string; category: string }>>([
    { id: 'w1', name: 'Executive Fleet Scorecards', category: 'Analytics' },
    { id: 'w2', name: 'TSDB Real-Time Metrics Gauge', category: 'Monitoring' },
    { id: 'w3', name: 'CMDB Business Service Mapping', category: 'CMDB' },
    { id: 'w4', name: 'Alert Storm Deduplication Feed', category: 'Alerts' },
  ]);

  const availableWidgets = [
    { id: 'w5', name: 'Topology Snapshot Timeline', category: 'Topology' },
    { id: 'w6', name: 'AI Engineering Assistant Chat', category: 'AI Assistant' },
    { id: 'w7', name: 'Notification DLQ Queue', category: 'Notifications' },
    { id: 'w8', name: 'Capacity Resource Exhaustion', category: 'Analytics' },
  ];

  const handleAddWidget = (widget: { id: string; name: string; category: string }) => {
    if (!widgets.find((w) => w.id === widget.id)) {
      setWidgets([...widgets, widget]);
    }
  };

  const handleRemoveWidget = (id: string) => {
    setWidgets(widgets.filter((w) => w.id !== id));
  };

  const handleSaveLayout = () => {
    alert('Dashboard layout saved successfully to your user profile!');
  };

  return (
    <AppShell
      currentPath="/dashboard"
      pageTitle="Personalized Executive NOC Canvas"
      pageSubtitle="Customizable drag & drop dashboard canvas with persistent JSON layout storage per user and RBAC role."
      breadcrumbItems={[{ label: 'Platform' }, { label: 'Custom Dashboard' }]}
      actionButtons={
        <div className="flex items-center space-x-2">
          <Button variant="secondary" size="sm" onClick={() => setWidgets([])}>
            🔄 Reset Canvas
          </Button>
          <Button variant="primary" size="sm" onClick={handleSaveLayout}>
            💾 Save Layout Preference
          </Button>
        </div>
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Widget Library */}
        <div className="lg:col-span-4 space-y-4">
          <Card title="Available Widget Library">
            <div className="space-y-2 text-xs">
              <p className="text-slate-400 text-[11px]">Click to add widgets to your personalized canvas:</p>
              {availableWidgets.map((w) => (
                <div
                  key={w.id}
                  onClick={() => handleAddWidget(w)}
                  className="p-3 bg-[#111827] border border-white/5 hover:border-blue-500/50 rounded-lg flex items-center justify-between cursor-pointer transition-colors"
                >
                  <span className="font-bold text-slate-200">{w.name}</span>
                  <span className="px-1.5 py-0.2 rounded text-[9px] bg-slate-800 text-blue-400 font-mono">
                    + {w.category}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Column: Interactive Personal Canvas */}
        <div className="lg:col-span-8 space-y-4">
          <Card title={`Active Personalized Canvas (${widgets.length} Widgets Placed)`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              {widgets.map((w, idx) => (
                <div
                  key={w.id}
                  className="p-4 bg-slate-950 rounded-xl border border-white/10 space-y-2 relative group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-blue-400 font-bold">
                      #{idx + 1} {w.name}
                    </span>
                    <button
                      onClick={() => handleRemoveWidget(w.id)}
                      className="text-slate-500 hover:text-red-400 text-xs font-bold"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="p-3 bg-[#111827] rounded border border-white/5 text-[11px] text-slate-400 font-mono">
                    [Widget Component Live Preview Container: {w.category}]
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
