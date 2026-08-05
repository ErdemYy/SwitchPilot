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
exports.AlertPanel = AlertPanel;
const react_1 = __importStar(require("react"));
const ui_1 = require("@switchpilot/ui");
function AlertPanel() {
    const [selectedSeverity, setSelectedSeverity] = (0, react_1.useState)('ALL');
    const activeAlerts = [
        { id: 'alrt-001', device: 'sw-core-fra-01', type: 'THRESHOLD', severity: 'CRITICAL', title: 'CPU > 90% on sw-core-fra-01', time: '2 min ago', status: 'ACTIVE' },
        { id: 'alrt-002', device: 'sw-edge-lon-01', type: 'INTERFACE_DOWN', severity: 'MAJOR', title: 'Gi1/0/24 DOWN on sw-edge-lon-01', time: '8 min ago', status: 'ACTIVE' },
        { id: 'alrt-003', device: 'sw-dist-ber-01', type: 'CONFIG_DRIFT', severity: 'WARNING', title: 'Config drift detected (14 lines diff)', time: '22 min ago', status: 'ACTIVE' },
        { id: 'alrt-004', device: 'ap-wifi-muc-03', type: 'MISSING_TELEMETRY', severity: 'MINOR', title: 'No telemetry from ap-wifi-muc-03', time: '35 min ago', status: 'ACKNOWLEDGED' },
        { id: 'alrt-005', device: 'sw-core-fra-02', type: 'ANOMALY', severity: 'WARNING', title: 'Unusual traffic pattern on Gi2/0/1', time: '1 hr ago', status: 'ACTIVE' },
    ];
    const severityColorMap = {
        CRITICAL: 'bg-red-950 text-red-400 border-red-800',
        MAJOR: 'bg-orange-950 text-orange-400 border-orange-800',
        WARNING: 'bg-amber-950 text-amber-400 border-amber-800',
        MINOR: 'bg-sky-950 text-sky-400 border-sky-800',
        INFO: 'bg-slate-800 text-slate-400 border-slate-700',
    };
    const filteredAlerts = selectedSeverity === 'ALL'
        ? activeAlerts
        : activeAlerts.filter((a) => a.severity === selectedSeverity);
    return (<ui_1.Card title="Live Alert Center">
      <div className="space-y-3 text-xs">
        <div className="flex items-center space-x-1.5">
          {['ALL', 'CRITICAL', 'MAJOR', 'WARNING', 'MINOR'].map((sev) => (<button key={sev} onClick={() => setSelectedSeverity(sev)} className={`px-2.5 py-1 rounded text-[10px] font-bold transition-colors ${selectedSeverity === sev
                ? 'bg-blue-600 text-white'
                : 'bg-slate-800 text-slate-400 hover:text-slate-200'}`}>
              {sev}
            </button>))}
        </div>

        <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
          {filteredAlerts.map((al) => (<div key={al.id} className={`p-3 rounded-lg border ${severityColorMap[al.severity] || 'bg-slate-900 text-slate-300 border-white/5'}`}>
              <div className="flex items-center justify-between">
                <span className="font-bold">{al.title}</span>
                <span className="text-[9px] opacity-60">{al.time}</span>
              </div>
              <div className="flex items-center justify-between mt-1.5">
                <span className="text-[10px] opacity-70">
                  {al.device} · {al.type}
                </span>
                <span className={`px-1.5 py-0.5 rounded text-[9px] font-semibold ${al.status === 'ACKNOWLEDGED'
                ? 'bg-sky-950 text-sky-300 border border-sky-800'
                : 'bg-slate-900/50 text-slate-300'}`}>
                  {al.status}
                </span>
              </div>
            </div>))}
        </div>
      </div>
    </ui_1.Card>);
}
