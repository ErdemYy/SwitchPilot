import React from 'react';

export const VendorDistributionWidget: React.FC = () => {
  const vendors = [
    { name: 'Cisco Systems', count: 54, percent: 38, color: 'bg-blue-500' },
    { name: 'Aruba Networks', count: 32, percent: 22, color: 'bg-orange-500' },
    { name: 'Juniper Networks', count: 24, percent: 17, color: 'bg-emerald-500' },
    { name: 'Huawei Tech', count: 14, percent: 10, color: 'bg-red-500' },
    { name: 'Ubiquiti UniFi', count: 10, percent: 7, color: 'bg-sky-500' },
    { name: 'MikroTik OS', count: 5, percent: 4, color: 'bg-purple-500' },
    { name: 'HP Enterprise', count: 3, percent: 2, color: 'bg-teal-500' },
  ];

  return (
    <div className="bg-[#172033] border border-white/10 rounded-xl p-5 shadow-lg space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-100">Multi-Vendor Hardware Distribution</h3>
        <span className="text-xs text-slate-400">7 Supported Vendors</span>
      </div>

      {/* Multi-segmented Progress Bar */}
      <div className="w-full bg-slate-900 rounded-full h-3 flex overflow-hidden p-0.5 border border-white/5">
        {vendors.map((v) => (
          <div
            key={v.name}
            className={`h-full ${v.color} first:rounded-l-full last:rounded-r-full transition-all duration-300`}
            style={{ width: `${v.percent}%` }}
            title={`${v.name}: ${v.count} devices (${v.percent}%)`}
          />
        ))}
      </div>

      {/* Legend List */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
        {vendors.map((v) => (
          <div key={v.name} className="flex items-center space-x-2 text-xs">
            <span className={`w-2.5 h-2.5 rounded-full ${v.color}`} />
            <span className="text-slate-300 truncate">{v.name}</span>
            <span className="text-slate-500 font-mono">({v.count})</span>
          </div>
        ))}
      </div>
    </div>
  );
};
