"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tabs = void 0;
const react_1 = __importDefault(require("react"));
const Tabs = ({ tabs, activeTab, onChange, className = '' }) => {
    return (<div className={`flex border-b border-white/10 space-x-6 ${className}`}>
      {tabs.map((t) => {
            const isActive = t.id === activeTab;
            return (<button key={t.id} onClick={() => onChange(t.id)} className={`flex items-center gap-2 pb-2.5 text-xs font-medium border-b-2 transition-all ${isActive
                    ? 'border-blue-600 text-blue-400 font-semibold'
                    : 'border-transparent text-slate-400 hover:text-slate-200'}`}>
            <span>{t.label}</span>
            {t.badge !== undefined && (<span className={`px-1.5 py-0.2 rounded-full text-[10px] ${isActive ? 'bg-blue-600/20 text-blue-300' : 'bg-slate-800 text-slate-400'}`}>
                {t.badge}
              </span>)}
          </button>);
        })}
    </div>);
};
exports.Tabs = Tabs;
