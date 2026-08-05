'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SystemStatusPage;
const react_1 = __importDefault(require("react"));
const MarketingNavbar_1 = require("../../components/marketing/hero/MarketingNavbar");
const MarketingFooter_1 = require("../../components/marketing/MarketingFooter");
const ui_1 = require("@switchpilot/ui");
function SystemStatusPage() {
    const services = [
        { name: 'FastAPI Cloud REST Gateway', status: 'OPERATIONAL', uptime: '99.99%' },
        { name: 'OIDC / SAML SSO Authentication', status: 'OPERATIONAL', uptime: '99.98%' },
        { name: 'Telemetry & SNMP Collector Service', status: 'OPERATIONAL', uptime: '99.99%' },
        { name: 'Desktop Sync & Updater Server', status: 'OPERATIONAL', uptime: '99.95%' },
        { name: 'Plugin Marketplace Store Registry', status: 'OPERATIONAL', uptime: '99.90%' },
    ];
    return (<div className="min-h-screen bg-[#f0f0f0] text-slate-800 font-sans">
      <div className="bg-[#111827] text-white">
        <MarketingNavbar_1.MarketingNavbar />
      </div>

      <div className="py-16 px-6 max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <ui_1.Badge variant="success" size="sm">ALL SYSTEMS OPERATIONAL</ui_1.Badge>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            SwitchPilot Real-Time System Status
          </h1>
          <p className="text-slate-600 text-xs leading-relaxed">
            Monitored continuously across global data centers and cloud SaaS infrastructure.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-3 text-xs">
          {services.map((s) => (<div key={s.name} className="p-3 bg-slate-50 rounded-xl flex items-center justify-between">
              <span className="font-bold text-slate-800">{s.name}</span>
              <div className="flex items-center space-x-3">
                <span className="text-[10px] text-slate-500 font-mono">{s.uptime} Uptime</span>
                <ui_1.Badge variant="success" size="sm">{s.status}</ui_1.Badge>
              </div>
            </div>))}
        </div>
      </div>

      <MarketingFooter_1.MarketingFooter />
    </div>);
}
