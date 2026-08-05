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
exports.default = GlobalAdminPage;
const react_1 = __importStar(require("react"));
const AppShell_1 = require("../../layouts/AppShell");
const ui_1 = require("@switchpilot/ui");
function GlobalAdminPage() {
    const [activeTab, setActiveTab] = (0, react_1.useState)('TENANTS');
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
    return (<AppShell_1.AppShell currentPath="/admin" pageTitle="Global SaaS & MSP Platform Administration" pageSubtitle="Multi-tenant workspace administration, MSP customer impersonation, subscription tiers, licensing keys, and feature flags." breadcrumbItems={[{ label: 'Platform' }, { label: 'Global Admin' }]} actionButtons={<div className="flex items-center space-x-2">
          <ui_1.Button variant="secondary" size="sm" onClick={() => alert('Add License Key Modal')}>
            🔑 Activate License
          </ui_1.Button>
          <ui_1.Button variant="primary" size="sm" onClick={() => alert('Create Tenant Modal')}>
            + Create New Tenant / MSP
          </ui_1.Button>
        </div>}>
      <div className="flex items-center space-x-2 border-b border-white/10 pb-2 text-xs font-semibold text-slate-400">
        {[
            { id: 'TENANTS', label: 'Tenants & MSP Partners' },
            { id: 'FLAGS', label: 'Feature Flags & Rollouts' },
            { id: 'BILLING', label: 'Subscription & Metered Invoices' },
            { id: 'API_KEYS', label: 'Developer API Keys' },
        ].map((tab) => (<button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-3 py-1.5 rounded-lg transition-colors ${activeTab === tab.id ? 'bg-blue-600 text-white font-bold' : 'hover:bg-slate-800 hover:text-slate-200'}`}>
            {tab.label}
          </button>))}
      </div>

      {activeTab === 'TENANTS' && (<ui_1.Card title="Managed Tenants & MSP Partners">
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
                {tenants.map((t) => (<tr key={t.id} className="border-b border-white/5 font-mono">
                    <td className="py-2.5 pr-4 font-bold text-slate-100">{t.name}</td>
                    <td className="py-2.5 pr-4 text-blue-400">{t.type}</td>
                    <td className="py-2.5 pr-4 font-bold text-emerald-400">{t.plan}</td>
                    <td className="py-2.5 pr-4">{t.devices}</td>
                    <td className="py-2.5 pr-4">
                      <ui_1.Badge variant="success" size="sm">{t.status}</ui_1.Badge>
                    </td>
                    <td className="py-2.5 text-right">
                      <ui_1.Button variant="secondary" size="xs" onClick={() => alert(`Audited Impersonation into ${t.name}...`)}>
                        🕵️ Impersonate
                      </ui_1.Button>
                    </td>
                  </tr>))}
              </tbody>
            </table>
          </div>
        </ui_1.Card>)}

      {activeTab === 'FLAGS' && (<ui_1.Card title="Centralized Feature Flag Management">
          <div className="space-y-2 text-xs font-mono">
            {featureFlags.map((flag) => (<div key={flag.key} className="p-3 bg-slate-950 rounded-lg border border-white/10 flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-200 block">{flag.key}</span>
                  <span className="text-[10px] text-slate-400">Scope: {flag.scope} · Gradual Rollout: {flag.rollout}</span>
                </div>
                <ui_1.Badge variant={flag.status === 'ENABLED' ? 'success' : 'warning'} size="sm">
                  {flag.status}
                </ui_1.Badge>
              </div>))}
          </div>
        </ui_1.Card>)}
    </AppShell_1.AppShell>);
}
