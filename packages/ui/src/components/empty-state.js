"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyState = void 0;
const react_1 = __importDefault(require("react"));
const EmptyState = ({ title, description, actionLabel, onAction, icon, }) => {
    return (<div className="flex flex-col items-center justify-center p-8 text-center border border-dashed border-white/10 rounded-xl bg-[#172033]/50 space-y-3">
      <div className="p-3 bg-slate-800/60 rounded-full text-slate-400">
        {icon || (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
          </svg>)}
      </div>
      <h4 className="text-sm font-semibold text-slate-200">{title}</h4>
      <p className="text-xs text-slate-400 max-w-sm">{description}</p>
      {actionLabel && onAction && (<button onClick={onAction} className="mt-2 px-3.5 py-1.5 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors">
          {actionLabel}
        </button>)}
    </div>);
};
exports.EmptyState = EmptyState;
