"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertsWidget = void 0;
const react_1 = __importDefault(require("react"));
const mockData_1 = require("../../constants/mockData");
const AlertsWidget = () => {
    return (<div className="bg-[#172033] border border-white/10 rounded-xl p-5 shadow-lg space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h3 className="text-sm font-semibold text-slate-100">Active NOC Alerts</h3>
          <span className="px-2 py-0.5 rounded-full text-[10px] bg-red-950/80 text-red-400 border border-red-800">
            {mockData_1.MOCK_ALERTS.length} Active
          </span>
        </div>
        <button className="text-xs text-blue-400 hover:underline">View All</button>
      </div>

      <div className="space-y-2">
        {mockData_1.MOCK_ALERTS.map((alert) => (<div key={alert.id} className={`p-3 rounded-lg border flex items-start justify-between text-xs transition-colors ${alert.severity === 'critical'
                ? 'bg-red-950/20 border-red-800/40 text-red-300'
                : alert.severity === 'warning'
                    ? 'bg-amber-950/20 border-amber-800/40 text-amber-300'
                    : 'bg-slate-900 border-white/5 text-slate-300'}`}>
            <div className="space-y-0.5">
              <div className="flex items-center space-x-2">
                <span className="font-bold text-slate-100">{alert.device}</span>
                <span className="text-[10px] opacity-75 font-mono">({alert.vendor})</span>
              </div>
              <p className="text-[11px] opacity-90">{alert.message}</p>
            </div>
            <span className="text-[10px] text-slate-500 whitespace-nowrap ml-2">{alert.time}</span>
          </div>))}
      </div>
    </div>);
};
exports.AlertsWidget = AlertsWidget;
