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
exports.default = MarketplacePage;
const react_1 = __importStar(require("react"));
const AppShell_1 = require("../../layouts/AppShell");
const ui_1 = require("@switchpilot/ui");
function MarketplacePage() {
    const [selectedCategory, setSelectedCategory] = (0, react_1.useState)('ALL');
    const plugins = [
        { code: 'com.cisco.nexus-translator', name: 'Cisco Nexus NX-OS Translator', category: 'TRANSLATOR', author: 'SwitchPilot Core', rating: 5.0, isInstalled: true, desc: 'Adds support for Cisco Nexus 7000/9000 switches.' },
        { code: 'com.aruba.aoscx-collector', name: 'Aruba AOS-CX Telemetry Collector', category: 'COLLECTOR', author: 'Aruba Networks', rating: 4.9, isInstalled: true, desc: 'gNMI streaming telemetry collector for Aruba AOS-CX.' },
        { code: 'com.pagerduty.alert-dispatcher', name: 'PagerDuty Incident Dispatcher', category: 'NOTIFICATION', author: 'PagerDuty', rating: 4.8, isInstalled: false, desc: 'Dispatches critical alerts directly to PagerDuty services.' },
        { code: 'com.grafana.metric-exporter', name: 'Grafana OpenTelemetry Exporter', category: 'WIDGET', author: 'Grafana Labs', rating: 4.9, isInstalled: false, desc: 'Export TSDB metrics to external Grafana instances.' },
    ];
    return (<AppShell_1.AppShell currentPath="/marketplace" pageTitle="Plugin Marketplace & Extension Store" pageSubtitle="Discover, install, update, and sandbox third-party Vendor Translators, Telemetry Collectors, Notification Channels, and Visual Widgets." breadcrumbItems={[{ label: 'Platform' }, { label: 'Marketplace' }]} actionButtons={<div className="flex items-center space-x-2">
          <ui_1.Button variant="secondary" size="sm" onClick={() => alert('Check Installed Plugin Updates')}>
            🔄 Check Plugin Updates
          </ui_1.Button>
          <ui_1.Button variant="primary" size="sm" onClick={() => alert('Publish Plugin Modal')}>
            📤 Publish Custom Extension
          </ui_1.Button>
        </div>}>
      <div className="space-y-4">
        {/* Category Filter */}
        <div className="flex items-center space-x-2 text-xs font-semibold text-slate-400">
          {['ALL', 'TRANSLATOR', 'COLLECTOR', 'NOTIFICATION', 'WIDGET'].map((cat) => (<button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-3 py-1.5 rounded-lg transition-colors ${selectedCategory === cat ? 'bg-blue-600 text-white font-bold' : 'bg-[#111827] text-slate-400 hover:text-slate-200'}`}>
              {cat}
            </button>))}
        </div>

        {/* Plugin Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {plugins.map((plugin) => (<ui_1.Card key={plugin.code}>
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
                  {plugin.isInstalled ? (<ui_1.Badge variant="success" size="sm">✓ Installed</ui_1.Badge>) : (<ui_1.Button variant="primary" size="xs" onClick={() => alert(`Installing ${plugin.name}...`)}>
                      + Install Extension
                    </ui_1.Button>)}
                </div>
              </div>
            </ui_1.Card>))}
        </div>
      </div>
    </AppShell_1.AppShell>);
}
