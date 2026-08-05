import React from 'react';
import { MOCK_ROLLBACKS } from '../../constants/mockData';

export const RollbackWidget: React.FC = () => {
  return (
    <div className="bg-[#172033] border border-white/10 rounded-xl p-5 shadow-lg space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-100">Latest Configuration Rollbacks</h3>
        <span className="text-xs text-slate-400">Safeguard Engine</span>
      </div>

      <div className="space-y-2 text-xs">
        {MOCK_ROLLBACKS.map((r) => (
          <div key={r.id} className="p-3 bg-slate-900/60 border border-white/5 rounded-lg flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="flex items-center space-x-2">
                <span className="font-bold text-slate-200">{r.device}</span>
                <span className="text-[10px] text-slate-500 font-mono">({r.vendor})</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Restored to <span className="font-mono text-blue-400">{r.previousVersion}</span> by {r.restoredBy}
              </p>
            </div>
            <span className="text-[10px] text-slate-500 whitespace-nowrap ml-2">{r.timestamp}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
