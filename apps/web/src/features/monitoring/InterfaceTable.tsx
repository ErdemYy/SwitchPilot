'use client';

import React from 'react';
import { Card } from '@switchpilot/ui';

export function InterfaceTable() {
  const topInterfaces = [
    { device: 'sw-core-fra-01', iface: 'Gi1/0/1', util: 94, crc: 0, dropped: 12, status: 'UP' },
    { device: 'sw-core-fra-01', iface: 'Gi1/0/24', util: 87, crc: 3, dropped: 1, status: 'UP' },
    { device: 'sw-edge-lon-01', iface: 'Gi1/0/10', util: 76, crc: 0, dropped: 0, status: 'UP' },
    { device: 'sw-dist-ber-01', iface: 'Gi2/0/1', util: 68, crc: 12, dropped: 42, status: 'UP' },
    { device: 'sw-edge-lon-01', iface: 'Gi1/0/24', util: 0, crc: 0, dropped: 0, status: 'DOWN' },
  ];

  return (
    <Card title="Top Interface Utilization & Error Counters">
      <div className="overflow-x-auto">
        <table className="w-full text-xs text-left">
          <thead>
            <tr className="text-slate-400 border-b border-white/5">
              <th className="pb-2 pr-4 font-semibold">Device</th>
              <th className="pb-2 pr-4 font-semibold">Interface</th>
              <th className="pb-2 pr-4 font-semibold">Utilization</th>
              <th className="pb-2 pr-4 font-semibold">CRC Errors</th>
              <th className="pb-2 pr-4 font-semibold">Dropped</th>
              <th className="pb-2 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="text-slate-300 font-mono">
            {topInterfaces.map((row, i) => (
              <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02]">
                <td className="py-2 pr-4">{row.device}</td>
                <td className="py-2 pr-4">{row.iface}</td>
                <td className="py-2 pr-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-16 bg-slate-800 rounded-full h-1.5 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          row.util > 85 ? 'bg-red-500' : row.util > 60 ? 'bg-amber-500' : 'bg-emerald-500'
                        }`}
                        style={{ width: `${row.util}%` }}
                      />
                    </div>
                    <span className="text-[10px]">{row.util}%</span>
                  </div>
                </td>
                <td className={`py-2 pr-4 ${row.crc > 0 ? 'text-red-400 font-bold' : ''}`}>{row.crc}</td>
                <td className={`py-2 pr-4 ${row.dropped > 10 ? 'text-amber-400 font-bold' : ''}`}>{row.dropped}</td>
                <td className="py-2">
                  <span
                    className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                      row.status === 'UP'
                        ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                        : 'bg-red-950 text-red-400 border border-red-800'
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
