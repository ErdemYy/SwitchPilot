'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MarketingLandingPage;
const react_1 = __importDefault(require("react"));
const Hero_1 = require("../../components/marketing/hero/Hero");
const MarketingFooter_1 = require("../../components/marketing/MarketingFooter");
const CookieBanner_1 = require("../../components/marketing/CookieBanner");
const ui_1 = require("@switchpilot/ui");
const link_1 = __importDefault(require("next/link"));
function MarketingLandingPage() {
    const featureHighlights = [
        { title: 'Canonical Configuration Model (CCM)', icon: '⚡', desc: 'Define neutral network configurations (VLANs, Hostname, AAA, Syslog, BGP) and auto-translate into Cisco, Aruba, Juniper, Huawei & Mikrotik CLI strings.' },
        { title: 'Real-Time NOC Telemetry Polling', icon: '📊', desc: 'Normalize 19 standard metric types across SNMP, gNMI, Syslog, and streaming telemetry with sub-second correlation.' },
        { title: 'Interactive Multi-Layer Topology Engine', icon: '🌐', desc: 'Auto-discover L1/L2/L3 topology graphs with force-directed layout algorithms and Single Point of Failure (SPOF) blast radius analysis.' },
        { title: 'Autonomous AI Network Engineer', icon: '🤖', desc: 'Structured DAG intent planner generating validated CCM payloads with safety policy enforcement.' },
        { title: 'Offline Encrypted Desktop Runtime', icon: '💻', desc: 'Native Windows x64/ARM64 desktop application with SQLCipher AES-256 local database and DPAPI vault key storage.' },
        { title: 'Enterprise Plugin Marketplace', icon: '🧩', desc: 'Extend platform capabilities with sandboxed custom translators, telemetry collectors, and widget components.' },
    ];
    return (<div className="min-h-screen bg-[#f0f0f0] text-slate-800 font-sans selection:bg-blue-500 selection:text-white">
      {/* Premium Hero Section */}
      <Hero_1.Hero />

      {/* Feature Showcase Grid */}
      <section className="py-20 px-6 max-w-[1536px] mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <ui_1.Badge variant="primary" size="sm">ENTERPRISE PLATFORM CAPABILITIES</ui_1.Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1E293B]">
            Engineered for Modern Enterprise NOCs
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Eliminate vendor lock-in and manual CLI syntax errors with automated multi-vendor translation and real-time observability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureHighlights.map((f) => (<div key={f.title} className="p-6 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-300 transition-all space-y-3">
              <span className="text-3xl block">{f.icon}</span>
              <h3 className="text-lg font-bold text-slate-800">{f.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{f.desc}</p>
            </div>))}
        </div>
      </section>

      {/* Download Center CTA Banner */}
      <section className="py-16 px-6 max-w-[1536px] mx-auto">
        <div className="bg-[#111827] text-white rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 max-w-xl">
            <ui_1.Badge variant="success" size="sm">DESKTOP READY</ui_1.Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Download SwitchPilot Desktop for Windows, macOS & Linux
            </h2>
            <p className="text-slate-400 text-xs leading-relaxed">
              Native offline capability, SQLCipher encrypted SQLite local database, and Windows DPAPI credential vault integration.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <link_1.default href="/download">
              <ui_1.Button variant="primary" size="lg">
                💻 Download Windows x64 / ARM64
              </ui_1.Button>
            </link_1.default>
            <link_1.default href="/docs">
              <ui_1.Button variant="secondary" size="lg">
                📖 View Documentation
              </ui_1.Button>
            </link_1.default>
          </div>
        </div>
      </section>

      {/* Marketing Footer */}
      <MarketingFooter_1.MarketingFooter />
      <CookieBanner_1.CookieBanner />
    </div>);
}
