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
exports.default = TopologyViewerPage;
const react_1 = __importStar(require("react"));
const AppShell_1 = require("../../layouts/AppShell");
const ui_1 = require("@switchpilot/ui");
function TopologyViewerPage() {
    const [activeLayer, setActiveLayer] = (0, react_1.useState)('LAYER_2');
    const [layoutMode, setLayoutMode] = (0, react_1.useState)('FORCE_DIRECTED');
    const [searchQuery, setSearchQuery] = (0, react_1.useState)('');
    const [isScanning, setIsScanning] = (0, react_1.useState)(false);
    const topologyNodes = [
        { id: 'n1', label: 'fw-edge-fra-01', role: 'FIREWALL', ip: '10.10.0.1', isSpof: true, layer: 'L3 Gateway' },
        { id: 'n2', label: 'sw-core-fra-01', role: 'CORE_SWITCH', ip: '10.10.1.1', isSpof: true, layer: 'L2/L3 Core' },
        { id: 'n3', label: 'sw-edge-lon-01', role: 'ACCESS_SWITCH', ip: '10.10.1.2', isSpof: false, layer: 'L2 Access' },
        { id: 'n4', label: 'sw-dist-ber-01', role: 'DISTRIBUTION_SWITCH', ip: '10.20.1.1', isSpof: false, layer: 'L2 Distribution' },
    ];
    const topologyLinks = [
        { source: 'fw-edge-fra-01', target: 'sw-core-fra-01', type: 'CDP Trunk (40G)', status: 'UP', isRedundant: false },
        { source: 'sw-core-fra-01', target: 'sw-edge-lon-01', type: 'LLDP 802.1Q (10G)', status: 'UP', isRedundant: true },
        { source: 'sw-core-fra-01', target: 'sw-dist-ber-01', type: 'LLDP 802.1Q (10G)', status: 'UP', isRedundant: true },
    ];
    const handleStartDiscovery = () => {
        setIsScanning(true);
        setTimeout(() => {
            setIsScanning(false);
            alert('Network Scan Completed! Discovered 3 neighbors & updated L1/L2 topology graph.');
        }, 1500);
    };
    return (<AppShell_1.AppShell currentPath="/topology" pageTitle="Enterprise Network Topology & Discovery" pageSubtitle="Automated seed-based network discovery, multi-layer topology mapping (L1/L2/L3), dependency analysis, and Single Point of Failure (SPOF) detection." breadcrumbItems={[{ label: 'Platform' }, { label: 'Topology Mapper' }]} actionButtons={<div className="flex items-center space-x-2">
          <ui_1.Button variant="secondary" size="sm" onClick={() => alert('Exporting SVG/JSON Graph...')}>
            📥 Export Graph
          </ui_1.Button>
          <ui_1.Button variant="primary" size="sm" onClick={handleStartDiscovery} disabled={isScanning}>
            {isScanning ? 'Scanning Network...' : '🔍 Trigger Seed Discovery'}
          </ui_1.Button>
        </div>}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Multi-Layer & Layout Selector & SPOF Explorer */}
        <div className="lg:col-span-4 space-y-4">
          {/* Layer & Auto Layout Selector */}
          <ui_1.Card title="Topology Layers & Layout Controls">
            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-400 font-semibold mb-1">Topology Layer View:</label>
                <div className="grid grid-cols-3 gap-1.5">
                  {['LAYER_1', 'LAYER_2', 'LAYER_3'].map((l) => (<button key={l} onClick={() => setActiveLayer(l)} className={`px-2.5 py-1.5 rounded text-[10px] font-bold ${activeLayer === l ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-slate-200'}`}>
                      {l.replace('_', ' ')}
                    </button>))}
                </div>
              </div>

              <div>
                <label className="block text-slate-400 font-semibold mb-1">Graph Auto-Layout:</label>
                <div className="grid grid-cols-2 gap-1.5">
                  {['FORCE_DIRECTED', 'HIERARCHICAL', 'RADIAL', 'GRID'].map((mode) => (<button key={mode} onClick={() => setLayoutMode(mode)} className={`px-2 py-1 rounded text-[10px] font-semibold ${layoutMode === mode ? 'bg-blue-950 text-blue-300 border border-blue-800' : 'bg-slate-900 text-slate-400'}`}>
                      {mode.replace('_', ' ')}
                    </button>))}
                </div>
              </div>
            </div>
          </ui_1.Card>

          {/* SPOF & Blast Radius Explorer */}
          <ui_1.Card title="Single Point of Failure (SPOF) Analysis">
            <div className="space-y-2.5 text-xs">
              <div className="p-3 bg-red-950/40 border border-red-800 rounded-lg space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-red-300">fw-edge-fra-01 (Firewall)</span>
                  <ui_1.Badge variant="danger" size="sm">CRITICAL SPOF</ui_1.Badge>
                </div>
                <p className="text-[10px] text-slate-300">
                  No redundant gateway configured. Outage impacts 100% of outbound Internet traffic. Blast Radius: 95/100.
                </p>
              </div>

              <div className="p-3 bg-amber-950/40 border border-amber-800 rounded-lg space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-amber-300">sw-core-fra-01 (Core Switch)</span>
                  <ui_1.Badge variant="warning" size="sm">HIGH SPOF</ui_1.Badge>
                </div>
                <p className="text-[10px] text-slate-300">
                  Single core link to perimeter firewall. Blast Radius: 75/100.
                </p>
              </div>
            </div>
          </ui_1.Card>
        </div>

        {/* Right Column: Interactive Topology Canvas */}
        <div className="lg:col-span-8 space-y-4">
          <ui_1.Card title={`Interactive Topology Graph Canvas (${activeLayer} - ${layoutMode})`}>
            <div className="space-y-3">
              {/* Filter bar */}
              <div className="flex items-center justify-between">
                <input type="text" placeholder="Filter nodes by hostname, IP, role..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="bg-[#111827] border border-white/10 rounded px-3 py-1.5 text-xs text-slate-200 w-64 focus:outline-none focus:border-blue-500"/>
                <span className="text-xs text-slate-400 font-mono">
                  4 Nodes · 3 Links · Active Layer: <strong className="text-blue-400">{activeLayer}</strong>
                </span>
              </div>

              {/* Visual Graph Nodes Diagram */}
              <div className="relative min-h-[380px] bg-slate-950 rounded-xl border border-white/10 p-6 flex flex-col justify-between overflow-hidden">
                {/* Visual Connection Lines */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                  <div className="w-full h-0.5 bg-gradient-to-r from-blue-500 via-emerald-500 to-indigo-500"/>
                </div>

                {/* Nodes Grid Canvas Render */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
                  {topologyNodes.map((node) => (<div key={node.id} className={`p-3 rounded-lg border text-center font-mono space-y-1 transition-all ${node.isSpof
                ? 'bg-red-950/30 border-red-800 text-slate-100 shadow-lg shadow-red-950/50'
                : 'bg-slate-900 border-white/10 text-slate-200 hover:border-blue-500'}`}>
                      <div className="flex items-center justify-center space-x-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"/>
                        <span className="font-bold text-xs">{node.label}</span>
                      </div>
                      <p className="text-[10px] text-slate-400">{node.ip}</p>
                      <span className="inline-block px-1.5 py-0.2 rounded text-[9px] bg-slate-800 text-blue-400">
                        {node.role}
                      </span>
                    </div>))}
                </div>

                {/* Link Summary Box */}
                <div className="mt-6 pt-4 border-t border-white/10 space-y-2 relative z-10">
                  <span className="text-[11px] text-slate-400 font-bold block uppercase tracking-wider">
                    Discovered Neighbor Links (LLDP / CDP)
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
                    {topologyLinks.map((link, idx) => (<div key={idx} className="p-2 bg-[#111827] rounded border border-white/5 space-y-0.5">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-slate-200 font-mono">{link.source}</span>
                          <span className="text-emerald-400 font-bold">↔</span>
                          <span className="text-slate-200 font-mono">{link.target}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 block">{link.type}</span>
                      </div>))}
                  </div>
                </div>
              </div>
            </div>
          </ui_1.Card>
        </div>
      </div>
    </AppShell_1.AppShell>);
}
