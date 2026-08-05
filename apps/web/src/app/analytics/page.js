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
exports.default = AnalyticsPage;
const react_1 = __importStar(require("react"));
const AppShell_1 = require("../../layouts/AppShell");
const ui_1 = require("@switchpilot/ui");
function AnalyticsPage() {
    const [activeTab, setActiveTab] = (0, react_1.useState)('EXECUTIVE');
    const executiveKpis = [
        { label: 'Fleet Availability SLA', value: '99.8%', status: 'OPTIMAL', color: 'emerald' },
        { label: 'Network Health Score', value: '95.2%', status: 'EXCELLENT', color: 'blue' },
        { label: 'Automation Change Rate', value: '88.5%', status: 'HIGH', color: 'violet' },
        { label: 'Corporate Compliance', value: '92.4%', status: 'GOOD', color: 'emerald' },
        { label: 'Fleet Risk Score', value: '18/100', status: 'LOW RISK', color: 'emerald' },
    ];
    const capacityForecasts = [
        { resource: 'Core Switch FRA-01 Bandwidth', usage: 84.7, growth: '+4.2%/mo', daysLeft: 84, status: 'WARNING' },
        { resource: 'Edge Switch LON-01 Memory', usage: 67.1, growth: '+1.5%/mo', daysLeft: 360, status: 'OPTIMAL' },
        { resource: 'Dist Switch BER-01 PoE Power', usage: 92.0, growth: '+5.8%/mo', daysLeft: 32, status: 'CRITICAL' },
    ];
    const complianceItems = [
        { category: 'Password Policies', score: '100%', violations: 0, status: 'PASSED' },
        { category: 'Firmware Lifecycle OS', score: '89.5%', violations: 4, status: 'ATTENTION' },
        { category: 'ACL & Security Compliance', score: '94.0%', violations: 2, status: 'PASSED' },
        { category: 'Golden Baseline Baseline', score: '86.2%', violations: 5, status: 'ATTENTION' },
    ];
    return (<AppShell_1.AppShell currentPath="/analytics" pageTitle="Executive Analytics & Business Intelligence" pageSubtitle="Cross-module BI reporting, capacity growth forecasts, compliance scorecards, and multi-format PDF/Excel export engine." breadcrumbItems={[{ label: 'Platform' }, { label: 'BI Analytics' }]} actionButtons={<div className="flex items-center space-x-2">
          <ui_1.Button variant="secondary" size="sm" onClick={() => alert('Exporting PDF Report...')}>
            📄 Export Executive PDF
          </ui_1.Button>
          <ui_1.Button variant="primary" size="sm" onClick={() => alert('Created Schedule Modal')}>
            📅 Schedule Email Report
          </ui_1.Button>
        </div>}>
      {/* Executive KPI Scorecard Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {executiveKpis.map((kpi) => (<div key={kpi.label} className="bg-[#0f1629] border border-white/5 rounded-xl p-4 space-y-1 text-center">
            <span className="text-[10px] text-slate-400 uppercase tracking-widest block">{kpi.label}</span>
            <span className="text-2xl font-black text-slate-100 block">{kpi.value}</span>
            <span className="inline-block px-1.5 py-0.2 rounded text-[9px] font-bold bg-emerald-950 text-emerald-400 border border-emerald-800">
              {kpi.status}
            </span>
          </div>))}
      </div>

      {/* Console Tab Navigation */}
      <div className="flex items-center space-x-2 border-b border-white/10 pb-2 text-xs font-semibold text-slate-400">
        {[
            { id: 'EXECUTIVE', label: 'Executive Summary' },
            { id: 'CAPACITY', label: 'Capacity Planning & Forecasts' },
            { id: 'COMPLIANCE', label: 'Compliance & Audit Scorecard' },
            { id: 'SCHEDULES', label: 'Report Schedules & Exports' },
        ].map((tab) => (<button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-3 py-1.5 rounded-lg transition-colors ${activeTab === tab.id ? 'bg-blue-600 text-white font-bold' : 'hover:bg-slate-800 hover:text-slate-200'}`}>
            {tab.label}
          </button>))}
      </div>

      {/* Tab Contents */}
      {activeTab === 'EXECUTIVE' && (<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 space-y-4">
            <ui_1.Card title="AI-Generated Executive Summary">
              <div className="space-y-3 text-xs text-slate-300">
                <p>
                  Network availability maintained an impressive <strong>99.8% SLA</strong> across 142 devices over the last 30 days. 
                  Automated change execution rate reached <strong>88.5%</strong>, significantly reducing manual configuration drift.
                </p>
                <div className="p-3 bg-blue-950/40 border border-blue-800 rounded-lg space-y-1 text-[11px]">
                  <strong className="text-blue-300 block">AI Strategic Recommendation:</strong>
                  Prioritize PoE capacity upgrade on Distribution Switch BER-01 before predicted resource exhaustion in 32 days.
                </div>
              </div>
            </ui_1.Card>

            <ui_1.Card title="Multi-Format Export Engine Options">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                {['PDF Document', 'Excel Sheet (.xlsx)', 'Raw Data (.csv)', 'API JSON Payload'].map((fmt) => (<button key={fmt} onClick={() => alert(`Exporting ${fmt}...`)} className="p-3 bg-[#111827] border border-white/10 hover:border-blue-500 rounded-lg font-mono text-center text-slate-200 text-[11px] font-bold">
                    {fmt}
                  </button>))}
              </div>
            </ui_1.Card>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <ui_1.Card title="Compliance Scorecard Breakdown">
              <div className="space-y-2 text-xs">
                {complianceItems.map((c) => (<div key={c.category} className="p-2.5 bg-slate-900 rounded border border-white/5 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-slate-200">{c.category}</span>
                      <span className="text-[10px] text-slate-400 block">{c.violations} policy violations</span>
                    </div>
                    <span className="font-mono font-bold text-emerald-400">{c.score}</span>
                  </div>))}
              </div>
            </ui_1.Card>
          </div>
        </div>)}

      {activeTab === 'CAPACITY' && (<ui_1.Card title="Resource Exhaustion & Capacity Growth Forecasts">
          <div className="space-y-3 text-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-slate-400 border-b border-white/10">
                    <th className="pb-2 pr-4">Hardware Resource</th>
                    <th className="pb-2 pr-4">Current Usage</th>
                    <th className="pb-2 pr-4">Monthly Growth</th>
                    <th className="pb-2 pr-4">Estimated Days to Exhaustion</th>
                    <th className="pb-2">Status</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  {capacityForecasts.map((row, i) => (<tr key={i} className="border-b border-white/5 font-mono">
                      <td className="py-2.5 pr-4 font-bold text-slate-100">{row.resource}</td>
                      <td className="py-2.5 pr-4">{row.usage}%</td>
                      <td className="py-2.5 pr-4 text-blue-400">{row.growth}</td>
                      <td className="py-2.5 pr-4 font-bold text-amber-400">{row.daysLeft} days</td>
                      <td className="py-2.5">
                        <ui_1.Badge variant={row.status === 'CRITICAL' ? 'danger' : row.status === 'WARNING' ? 'warning' : 'success'} size="sm">
                          {row.status}
                        </ui_1.Badge>
                      </td>
                    </tr>))}
                </tbody>
              </table>
            </div>
          </div>
        </ui_1.Card>)}
    </AppShell_1.AppShell>);
}
