import React from 'react';
import dynamic from 'next/dynamic';

// Code-split MonitoringClient to isolate heavy interactive telemetry JS bundle
const MonitoringClient = dynamic(
  () => import('../../features/monitoring/MonitoringClient').then((mod) => mod.MonitoringClient),
  {
    loading: () => (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400 font-mono text-xs">
        Loading Monitoring Console...
      </div>
    ),
  }
);

export const metadata = {
  title: 'Enterprise NOC Monitoring Console | SwitchPilot',
  description: 'Real-time multi-vendor telemetry, alert center, and observability.',
};

export default function MonitoringPage() {
  return <MonitoringClient />;
}
