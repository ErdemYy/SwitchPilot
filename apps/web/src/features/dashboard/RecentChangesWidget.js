"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecentChangesWidget = void 0;
const react_1 = __importDefault(require("react"));
const mockData_1 = require("../../constants/mockData");
const RecentChangesWidget = () => {
    return (<div className="bg-[#172033] border border-white/10 rounded-xl p-5 shadow-lg space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-100">Recent Configuration Audit Logs</h3>
        <button className="text-xs text-blue-400 hover:underline">Full Log</button>
      </div>

      <div className="space-y-2 text-xs">
        {mockData_1.MOCK_AUDITS.map((item) => (<div key={item.id} className="p-2.5 bg-slate-900/60 border border-white/5 rounded-lg flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-slate-200">{item.user}</span>
                <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-blue-950/60 text-blue-400 border border-blue-800/40">
                  {item.action}
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono mt-0.5 block">{item.target}</span>
            </div>
            <span className="text-[10px] text-slate-500">{item.timestamp}</span>
          </div>))}
      </div>
    </div>);
};
exports.RecentChangesWidget = RecentChangesWidget;
