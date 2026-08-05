"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatWidget = void 0;
const react_1 = __importDefault(require("react"));
const StatWidget = ({ title, value, change, isPositive = true, icon, }) => {
    return (<div className="bg-[#172033] border border-white/10 hover:border-white/20 rounded-xl p-5 shadow-lg transition-all duration-200 flex items-center justify-between">
      <div className="space-y-1">
        <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{title}</span>
        <div className="text-2xl font-extrabold text-slate-100 tracking-tight">{value}</div>
        {change && (<div className={`text-[11px] font-medium flex items-center gap-1 ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
            <span>{isPositive ? '↑' : '↓'}</span>
            <span>{change}</span>
            <span className="text-slate-500 font-normal">vs last week</span>
          </div>)}
      </div>
      <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-white/10 flex items-center justify-center text-xl shadow-inner">
        {icon}
      </div>
    </div>);
};
exports.StatWidget = StatWidget;
