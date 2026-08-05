"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = MonitoringPage;
const react_1 = __importDefault(require("react"));
const dynamic_1 = __importDefault(require("next/dynamic"));
// Code-split MonitoringClient to isolate heavy interactive telemetry JS bundle
const MonitoringClient = (0, dynamic_1.default)(() => import('../../features/monitoring/MonitoringClient').then((mod) => mod.MonitoringClient), {
    ssr: false,
    loading: () => (<div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400 font-mono text-xs">
        Loading Monitoring Console...
      </div>),
});
exports.metadata = {
    title: 'Enterprise NOC Monitoring Console | SwitchPilot',
    description: 'Real-time multi-vendor telemetry, alert center, and observability.',
};
function MonitoringPage() {
    return <MonitoringClient />;
}
