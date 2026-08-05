'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricsPanel = MetricsPanel;
const react_1 = __importDefault(require("react"));
const ui_1 = require("@switchpilot/ui");
function MetricsPanel() {
    const liveMetrics = [
        { name: 'CPU Usage', value: 42.3, unit: '%', max: 100 },
        { name: 'Memory Usage', value: 67.1, unit: '%', max: 100 },
        { name: 'Temperature', value: 38.5, unit: '°C', max: 85 },
        { name: 'Bandwidth', value: 847, unit: 'Mbps', max: 1000 },
        { name: 'Latency', value: 1.4, unit: 'ms', max: 10 },
        { name: 'Interface Util', value: 72.6, unit: '%', max: 100 },
    ];
    return (<ui_1.Card title="Real-Time Device Metrics (sw-core-fra-01)">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs">
        {liveMetrics.map((m) => {
            const pct = Math.min(100, (m.value / m.max) * 100);
            const barColor = pct > 85 ? 'bg-red-500' : pct > 65 ? 'bg-amber-500' : 'bg-emerald-500';
            return (<div key={m.name} className="bg-[#111827] border border-white/5 rounded-lg p-3 space-y-2">
              <span className="text-slate-400 text-[10px] uppercase tracking-wider block">{m.name}</span>
              <div className="text-xl font-black text-slate-100">
                {m.value}
                <span className="text-xs text-slate-500 ml-1">{m.unit}</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div className={`h-full rounded-full ${barColor} transition-all`} style={{ width: `${pct}%` }}/>
              </div>
            </div>);
        })}
      </div>
    </ui_1.Card>);
}
