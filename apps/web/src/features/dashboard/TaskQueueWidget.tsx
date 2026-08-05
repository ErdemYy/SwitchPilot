import React from 'react';
import { MOCK_TASKS } from '../../constants/mockData';

export const TaskQueueWidget: React.FC = () => {
  return (
    <div className="bg-[#172033] border border-white/10 rounded-xl p-5 shadow-lg space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-100">Automation Task Execution Queue</h3>
        <span className="text-xs text-slate-400">Celery Worker Pool</span>
      </div>

      <div className="space-y-3 text-xs">
        {MOCK_TASKS.map((t) => (
          <div key={t.id} className="p-3 bg-slate-900/60 border border-white/5 rounded-lg space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-200">{t.name}</span>
              <span
                className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  t.status === 'RUNNING'
                    ? 'bg-blue-950 text-blue-400 border border-blue-800'
                    : t.status === 'SUCCESS'
                    ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                    : 'bg-amber-950 text-amber-400 border border-amber-800'
                }`}
              >
                {t.status}
              </span>
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-400">
              <span>Targets: {t.targetCount} Hardware Devices</span>
              <span>{t.startTime}</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-blue-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${t.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
