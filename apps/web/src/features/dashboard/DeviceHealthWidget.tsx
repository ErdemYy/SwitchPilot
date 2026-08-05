import React from 'react';

export const DeviceHealthWidget: React.FC = () => {
  return (
    <div className="bg-[#172033] border border-white/10 rounded-xl p-5 shadow-lg space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-100">Global Network Health</h3>
        <span className="text-xs font-semibold text-emerald-400">96.8% Operational</span>
      </div>

      <div className="grid grid-cols-3 gap-3 text-center">
        <div className="bg-slate-900/60 p-3 rounded-lg border border-white/5">
          <span className="block text-[10px] text-slate-400 uppercase font-semibold">Avg CPU Load</span>
          <span className="text-lg font-bold text-slate-200">18.4%</span>
        </div>
        <div className="bg-slate-900/60 p-3 rounded-lg border border-white/5">
          <span className="block text-[10px] text-slate-400 uppercase font-semibold">Memory Usage</span>
          <span className="text-lg font-bold text-slate-200">42.1%</span>
        </div>
        <div className="bg-slate-900/60 p-3 rounded-lg border border-white/5">
          <span className="block text-[10px] text-slate-400 uppercase font-semibold">Config Compliance</span>
          <span className="text-lg font-bold text-emerald-400">99.2%</span>
        </div>
      </div>
    </div>
  );
};
