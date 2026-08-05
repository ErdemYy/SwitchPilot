'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitoringClient = MonitoringClient;
const react_1 = __importDefault(require("react"));
const AppShell_1 = require("../../layouts/AppShell");
const ui_1 = require("@switchpilot/ui");
const AlertPanel_1 = require("./AlertPanel");
const MetricsPanel_1 = require("./MetricsPanel");
const EventTimeline_1 = require("./EventTimeline");
const InterfaceTable_1 = require("./InterfaceTable");
function MonitoringClient() {
    const healthSummary = {
        totalDevices: 142,
        online: 135,
        warning: 3,
        offline: 4,
        uptimePct: 95.1,
    };
    return (<AppShell_1.AppShell currentPath="/monitoring" pageTitle="Enterprise NOC Monitoring Console" pageSubtitle="Real-time telemetry, alert center, event correlation, and observability across all managed network devices." breadcrumbItems={[{ label: 'Platform' }, { label: 'Monitoring' }]} actionButtons={<div className="flex items-center space-x-2">
          <ui_1.Button variant="secondary" size="sm" onClick={() => alert('Export Alert Report')}>
            📊 Export Alert Report
          </ui_1.Button>
          <ui_1.Button variant="primary" size="sm" onClick={() => alert('Configure Alert Policies')}>
            ⚙ Alert Policies
          </ui_1.Button>
        </div>}>
      {/* Health Overview Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {[
            { label: 'Total Devices', value: healthSummary.totalDevices, icon: '🖥️', accent: 'text-slate-100' },
            { label: 'Online', value: healthSummary.online, icon: '🟢', accent: 'text-emerald-400' },
            { label: 'Warning', value: healthSummary.warning, icon: '🟡', accent: 'text-amber-400' },
            { label: 'Offline', value: healthSummary.offline, icon: '🔴', accent: 'text-red-400' },
            { label: 'Fleet Uptime', value: `${healthSummary.uptimePct}%`, icon: '⏱️', accent: 'text-blue-400' },
        ].map((card) => (<div key={card.label} className="bg-[#0f1629] border border-white/5 rounded-xl p-4 flex flex-col items-center justify-center space-y-1">
            <span className="text-xl">{card.icon}</span>
            <span className={`text-2xl font-black ${card.accent}`}>{card.value}</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest">{card.label}</span>
          </div>))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 space-y-4">
          <AlertPanel_1.AlertPanel />
          <ui_1.Card title="Event Correlation Groups">
            <div className="space-y-2 text-xs">
              <div className="p-3 bg-red-950/30 border border-red-900/40 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-red-300">Root Cause: sw-core-fra cluster</span>
                  <span className="text-[10px] text-red-400/60">Confidence: 85%</span>
                </div>
                <p className="text-[10px] text-slate-400 mt-1">
                  Root alert: <strong>CPU &gt; 90%</strong> on sw-core-fra-01 correlates with{' '}
                  <strong>Interface DOWN</strong> on sw-edge-lon-01.
                </p>
              </div>
            </div>
          </ui_1.Card>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <MetricsPanel_1.MetricsPanel />
          <InterfaceTable_1.InterfaceTable />
          <EventTimeline_1.EventTimeline />
        </div>
      </div>
    </AppShell_1.AppShell>);
}
