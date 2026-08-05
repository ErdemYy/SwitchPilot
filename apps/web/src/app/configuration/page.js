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
exports.default = ConfigurationStudioPage;
const react_1 = __importStar(require("react"));
const AppShell_1 = require("../../layouts/AppShell");
const ui_1 = require("@switchpilot/ui");
function ConfigurationStudioPage() {
    const [targetVendor, setTargetVendor] = (0, react_1.useState)('CISCO');
    const [hostname, setHostname] = (0, react_1.useState)('sw-core-fra-01');
    const [vlanId, setVlanId] = (0, react_1.useState)(100);
    const [vlanName, setVlanName] = (0, react_1.useState)('CORPORATE-WIFI');
    const [intfName, setIntfName] = (0, react_1.useState)('Gi1/0/1');
    const [intfMode, setIntfMode] = (0, react_1.useState)('TRUNK');
    const [allowedVlans, setAllowedVlans] = (0, react_1.useState)('10,20,100');
    const vendors = ['CISCO', 'ARUBA', 'JUNIPER', 'HUAWEI', 'MIKROTIK', 'UBIQUITI', 'HP'];
    // Dynamic CLI command generator based on selected vendor and Canonical Config Model
    const generateVendorCommands = (vendor) => {
        switch (vendor) {
            case 'CISCO':
                return `hostname ${hostname}\n!\nvlan ${vlanId}\n name ${vlanName}\n!\ninterface ${intfName}\n description Production ${intfMode} Link\n ${intfMode === 'ACCESS'
                    ? `switchport mode access\n switchport access vlan ${vlanId}`
                    : `switchport mode trunk\n switchport trunk allowed vlan ${allowedVlans}`}`;
            case 'ARUBA':
                return `hostname ${hostname}\n!\nvlan ${vlanId}\n name ${vlanName}\n!\ninterface ${intfName}\n ${intfMode === 'ACCESS' ? `vlan access ${vlanId}` : `vlan trunk allowed ${allowedVlans}`}`;
            case 'JUNIPER':
                return `set system host-name ${hostname}\nset vlans ${vlanName} vlan-id ${vlanId}\nset interfaces ${intfName} unit 0 family ethernet-switching interface-mode ${intfMode.toLowerCase()}`;
            case 'HUAWEI':
                return `sysname ${hostname}\n!\nvlan ${vlanId}\n description ${vlanName}\n!\ninterface ${intfName}\n ${intfMode === 'ACCESS'
                    ? `port link-type access\n port default vlan ${vlanId}`
                    : `port link-type trunk\n port trunk allow-pass vlan ${allowedVlans}`}`;
            case 'MIKROTIK':
                return `/system identity set name="${hostname}"\n/interface vlan add name="${vlanName}" vlan-id=${vlanId} interface=bridge`;
            case 'UBIQUITI':
                return `hostname ${hostname}\nvlan database\n vlan ${vlanId}\n exit`;
            case 'HP':
                return `sysname ${hostname}\nvlan ${vlanId}\n name ${vlanName}`;
            default:
                return '! Unsupported vendor';
        }
    };
    const isTrunk = intfMode === 'TRUNK';
    const riskLevel = isTrunk ? 'MEDIUM' : 'SAFE';
    const riskBadgeVariant = isTrunk ? 'warning' : 'success';
    return (<AppShell_1.AppShell currentPath="/configuration" pageTitle="Vendor Translation Studio" pageSubtitle="Vendor-agnostic Canonical Configuration Model (CCM) translation, policy validation, diffing, and risk analysis." breadcrumbItems={[{ label: 'Platform' }, { label: 'Configuration Studio' }]} actionButtons={<div className="flex items-center space-x-2">
          <ui_1.Button variant="secondary" size="sm" onClick={() => alert('Validation Executed Cleanly')}>
            ✓ Validate Policy Rules
          </ui_1.Button>
          <ui_1.Button variant="primary" size="sm" onClick={() => alert('Submit to Change Approval Queue')}>
            Submit to Approval Queue →
          </ui_1.Button>
        </div>}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Visual Canonical Form Builder (CCM) */}
        <div className="lg:col-span-5 space-y-4">
          <ui_1.Card title="Canonical Configuration Model (CCM) Form">
            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-400 font-semibold mb-1">Target Hostname</label>
                <input type="text" value={hostname} onChange={(e) => setHostname(e.target.value)} className="w-full bg-[#111827] border border-white/10 rounded p-2 text-slate-200 focus:outline-none focus:border-blue-500 font-mono"/>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">VLAN ID</label>
                  <input type="number" value={vlanId} onChange={(e) => setVlanId(Number(e.target.value))} className="w-full bg-[#111827] border border-white/10 rounded p-2 text-slate-200 focus:outline-none focus:border-blue-500 font-mono"/>
                </div>
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">VLAN Name</label>
                  <input type="text" value={vlanName} onChange={(e) => setVlanName(e.target.value)} className="w-full bg-[#111827] border border-white/10 rounded p-2 text-slate-200 focus:outline-none focus:border-blue-500 font-mono"/>
                </div>
              </div>

              <div className="border-t border-white/10 pt-3 space-y-3">
                <h4 className="font-bold text-slate-200">Port & Interface Settings</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 font-semibold mb-1">Interface Name</label>
                    <input type="text" value={intfName} onChange={(e) => setIntfName(e.target.value)} className="w-full bg-[#111827] border border-white/10 rounded p-2 text-slate-200 focus:outline-none focus:border-blue-500 font-mono"/>
                  </div>
                  <div>
                    <label className="block text-slate-400 font-semibold mb-1">Switchport Mode</label>
                    <select value={intfMode} onChange={(e) => setIntfMode(e.target.value)} className="w-full bg-[#111827] border border-white/10 rounded p-2 text-slate-200 focus:outline-none focus:border-blue-500 font-mono">
                      <option value="ACCESS">ACCESS</option>
                      <option value="TRUNK">TRUNK</option>
                    </select>
                  </div>
                </div>

                {isTrunk && (<div>
                    <label className="block text-slate-400 font-semibold mb-1">Allowed Trunk VLANs</label>
                    <input type="text" value={allowedVlans} onChange={(e) => setAllowedVlans(e.target.value)} className="w-full bg-[#111827] border border-white/10 rounded p-2 text-slate-200 focus:outline-none focus:border-blue-500 font-mono"/>
                  </div>)}
              </div>
            </div>
          </ui_1.Card>

          {/* Validation & Risk Analysis Panel */}
          <ui_1.Card title="Automated Risk & Policy Compliance">
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between p-3 bg-[#111827] rounded border border-white/5">
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase">Change Risk Rating</span>
                  <span className="font-bold text-slate-100">{riskLevel} RISK (Score: {isTrunk ? 55 : 10}/100)</span>
                </div>
                <ui_1.Badge variant={riskBadgeVariant} size="sm">
                  {riskLevel}
                </ui_1.Badge>
              </div>

              <div className="p-3 bg-slate-900 rounded border border-white/5 space-y-1">
                <span className="text-[10px] text-slate-500 uppercase font-semibold">Causal Reasoning</span>
                <p className="text-slate-300 text-[11px]">
                  {isTrunk
            ? 'Trunk VLAN modification on uplink Gi1/0/1 may cause brief Spanning-Tree topology re-convergence.'
            : 'Non-disruptive access VLAN assignment.'}
                </p>
              </div>
            </div>
          </ui_1.Card>
        </div>

        {/* Right Column: Live Vendor Translator & Diff Viewer */}
        <div className="lg:col-span-7 space-y-4">
          {/* Vendor Selector Bar */}
          <div className="bg-[#172033] border border-white/10 rounded-xl p-3 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">Target Vendor Driver:</span>
            <div className="flex items-center space-x-1.5 overflow-x-auto">
              {vendors.map((v) => (<button key={v} onClick={() => setTargetVendor(v)} className={`px-3 py-1 rounded text-xs font-bold transition-colors ${targetVendor === v
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'}`}>
                  {v}
                </button>))}
            </div>
          </div>

          {/* Live Translation CLI Output Box */}
          <ui_1.Card title={`Generated ${targetVendor} Hardware Commands`}>
            <div className="relative">
              <pre className="p-4 bg-slate-950 rounded-lg font-mono text-xs text-emerald-400 border border-white/10 min-h-48 overflow-x-auto">
                {generateVendorCommands(targetVendor)}
              </pre>
              <span className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-400 font-mono">
                Format: CLI Syntax
              </span>
            </div>
          </ui_1.Card>

          {/* Unified Diff Previewer */}
          <ui_1.Card title="Configuration Diff Comparison (Current vs Desired)">
            <pre className="p-4 bg-slate-950 rounded-lg font-mono text-[11px] text-slate-300 border border-white/10 overflow-x-auto">
        {`--- current.cfg
+++ desired.cfg
@@ -1,4 +1,8 @@
 hostname sw-core-fra-01
+vlan ${vlanId}
+ name ${vlanName}
 interface ${intfName}
- switchport mode access
+ switchport mode ${intfMode.toLowerCase()}
+ switchport trunk allowed vlan ${allowedVlans}`}
            </pre>
          </ui_1.Card>
        </div>
      </div>
    </AppShell_1.AppShell>);
}
