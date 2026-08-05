"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusChip = void 0;
const react_1 = __importDefault(require("react"));
const StatusChip = ({ status, label, pulse = true, className = '', }) => {
    const statusConfig = {
        online: {
            color: 'bg-emerald-500',
            text: 'text-emerald-400',
            bg: 'bg-emerald-950/40 border-emerald-800/50',
            defaultLabel: 'ONLINE',
        },
        offline: {
            color: 'bg-slate-500',
            text: 'text-slate-400',
            bg: 'bg-slate-900 border-slate-700/50',
            defaultLabel: 'OFFLINE',
        },
        warning: {
            color: 'bg-amber-500',
            text: 'text-amber-400',
            bg: 'bg-amber-950/40 border-amber-800/50',
            defaultLabel: 'DEGRADED',
        },
        syncing: {
            color: 'bg-sky-500',
            text: 'text-sky-400',
            bg: 'bg-sky-950/40 border-sky-800/50',
            defaultLabel: 'SYNCING',
        },
        error: {
            color: 'bg-red-500',
            text: 'text-red-400',
            bg: 'bg-red-950/40 border-red-800/50',
            defaultLabel: 'CRITICAL',
        },
    };
    const cfg = statusConfig[status];
    return (<span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium border ${cfg.bg} ${cfg.text} ${className}`}>
      <span className="relative flex h-2 w-2">
        {pulse && (<span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${cfg.color}`}/>)}
        <span className={`relative inline-flex rounded-full h-2 w-2 ${cfg.color}`}/>
      </span>
      {label || cfg.defaultLabel}
    </span>);
};
exports.StatusChip = StatusChip;
