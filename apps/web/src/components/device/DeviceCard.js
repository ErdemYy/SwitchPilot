"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceCard = void 0;
const react_1 = __importDefault(require("react"));
const ui_1 = require("@switchpilot/ui");
const DeviceCard = ({ device, onSelect, onAction }) => {
    const vendorBadgeColors = {
        CISCO: 'bg-blue-950/80 text-blue-400 border-blue-800',
        ARUBA: 'bg-orange-950/80 text-orange-400 border-orange-800',
        JUNIPER: 'bg-emerald-950/80 text-emerald-400 border-emerald-800',
        HUAWEI: 'bg-red-950/80 text-red-400 border-red-800',
        MIKROTIK: 'bg-purple-950/80 text-purple-400 border-purple-800',
        UBIQUITI: 'bg-sky-950/80 text-sky-400 border-sky-800',
        HP: 'bg-teal-950/80 text-teal-400 border-teal-800',
    };
    const badgeClass = vendorBadgeColors[device.vendor.toUpperCase()] ||
        'bg-slate-800 text-slate-300 border-slate-700';
    return (<div onClick={() => onSelect && onSelect(device)} className="bg-[#172033] border border-white/10 hover:border-blue-600/50 rounded-xl p-4 shadow-lg transition-all duration-200 space-y-3 cursor-pointer group">
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className={`px-2 py-0.5 rounded text-[10px] font-bold border uppercase tracking-wider ${badgeClass}`}>
            {device.vendor}
          </span>
          <h3 className="text-sm font-semibold text-slate-100 group-hover:text-blue-400 transition-colors">
            {device.hostname}
          </h3>
        </div>
        <ui_1.StatusChip status={device.status}/>
      </div>

      {/* Device Details Grid */}
      <div className="grid grid-cols-2 gap-2 text-xs text-slate-400 pt-1">
        <div>
          <span className="block text-[10px] text-slate-500 uppercase font-medium">IP Address</span>
          <span className="font-mono text-slate-200">{device.ipAddress}</span>
        </div>
        <div>
          <span className="block text-[10px] text-slate-500 uppercase font-medium">Hardware Model</span>
          <span className="text-slate-200 truncate block">{device.model}</span>
        </div>
        <div>
          <span className="block text-[10px] text-slate-500 uppercase font-medium">Firmware OS</span>
          <span className="text-slate-300 font-mono text-[11px] truncate block">{device.osVersion}</span>
        </div>
        <div>
          <span className="block text-[10px] text-slate-500 uppercase font-medium">Uptime</span>
          <span className="text-slate-300 text-[11px]">{device.uptime}</span>
        </div>
      </div>

      {/* Health Meter */}
      <div className="space-y-1 pt-1">
        <div className="flex justify-between text-[10px] text-slate-400">
          <span>System Health</span>
          <span className="font-medium text-slate-200">{device.healthPercent}%</span>
        </div>
        <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
          <div className={`h-full rounded-full transition-all duration-500 ${device.healthPercent > 80
            ? 'bg-emerald-500'
            : device.healthPercent > 50
                ? 'bg-amber-500'
                : 'bg-red-500'}`} style={{ width: `${device.healthPercent}%` }}/>
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div className="flex items-center justify-end space-x-2 pt-2 border-t border-white/5">
        <button onClick={(e) => {
            e.stopPropagation();
            onAction && onAction('backup', device);
        }} className="px-2.5 py-1 text-[11px] bg-slate-800 hover:bg-slate-700 text-slate-200 rounded border border-white/10 transition-colors">
          Backup Config
        </button>
        <button onClick={(e) => {
            e.stopPropagation();
            onAction && onAction('terminal', device);
        }} className="px-2.5 py-1 text-[11px] bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded border border-blue-500/30 transition-colors">
          Console SSH
        </button>
      </div>
    </div>);
};
exports.DeviceCard = DeviceCard;
