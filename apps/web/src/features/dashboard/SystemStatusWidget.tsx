import React from 'react';

export const SystemStatusWidget: React.FC = () => {
  const services = [
    { name: 'FastAPI Engine Core', status: 'Healthy', latency: '12ms' },
    { name: 'PostgreSQL DB Cluster', status: 'Healthy', latency: '4ms' },
    { name: 'Redis Task Queue', status: 'Healthy', latency: '1ms' },
    { name: 'SSH Session Worker Pool', status: 'Healthy', latency: '18ms' },
  ];

  return (
    <div className="bg-[#172033] border border-white/10 rounded-xl p-5 shadow-lg space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-100">SwitchPilot System Health</h3>
        <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          All Services Operational
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs">
        {services.map((s) => (
          <div key={s.name} className="p-2.5 bg-slate-900/60 border border-white/5 rounded-lg flex items-center justify-between">
            <span className="text-slate-300 font-medium">{s.name}</span>
            <span className="text-[10px] font-mono text-slate-400">{s.latency}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
