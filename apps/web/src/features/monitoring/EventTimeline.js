'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventTimeline = EventTimeline;
const react_1 = __importDefault(require("react"));
const ui_1 = require("@switchpilot/ui");
function EventTimeline() {
    const eventTimeline = [
        { time: '09:14:22', event: 'AlertCreated', category: 'ALERT', detail: 'CPU > 90% on sw-core-fra-01' },
        { time: '09:12:05', event: 'TelemetryReceived', category: 'TELEMETRY', detail: 'SNMP poll completed for 142 devices' },
        { time: '09:10:31', event: 'CorrelationDetected', category: 'ALERT', detail: 'Root cause group: sw-core-fra cluster' },
        { time: '09:08:18', event: 'ExecutionCompleted', category: 'EXECUTION', detail: 'VLAN 20 deployed to sw-edge-lon-01' },
        { time: '09:05:42', event: 'MetricCollected', category: 'TELEMETRY', detail: 'Bandwidth metrics normalized for 142 devices' },
        { time: '09:02:11', event: 'DeviceOnline', category: 'DEVICE', detail: 'sw-access-par-05 reconnected after 3 min downtime' },
    ];
    const categoryColorMap = {
        ALERT: 'text-red-400',
        TELEMETRY: 'text-cyan-400',
        EXECUTION: 'text-emerald-400',
        DEVICE: 'text-blue-400',
    };
    return (<ui_1.Card title="Domain Event Timeline (All Categories)">
      <div className="space-y-2 text-xs max-h-52 overflow-y-auto pr-1">
        {eventTimeline.map((ev, i) => (<div key={i} className="flex items-start space-x-3 p-2 rounded hover:bg-white/[0.02]">
            <span className="text-[10px] text-slate-500 font-mono w-16 flex-shrink-0 pt-0.5">{ev.time}</span>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <span className={`font-bold ${categoryColorMap[ev.category] || 'text-slate-300'}`}>
                  {ev.event}
                </span>
                <span className="text-[9px] bg-slate-800 text-slate-500 px-1.5 py-0.5 rounded font-mono">
                  {ev.category}
                </span>
              </div>
              <p className="text-[10px] text-slate-400 mt-0.5">{ev.detail}</p>
            </div>
          </div>))}
      </div>
    </ui_1.Card>);
}
