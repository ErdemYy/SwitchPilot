'use client';

import React from 'react';
import { AppShell } from '../../../layouts/AppShell';
import { Card } from '@switchpilot/ui';

export default function ArchitectureViewerPage() {
  return (
    <AppShell
      currentPath="/docs/architecture"
      pageTitle="Interactive System Architecture Viewer"
      pageSubtitle="Visual overview of SwitchPilot Clean Architecture, EventBus domain events, Execution Pipeline, and Desktop Runtimes."
      breadcrumbItems={[{ label: 'Documentation', href: '/docs' }, { label: 'Architecture Viewer' }]}
    >
      <div className="space-y-4 text-xs">
        <Card title="SwitchPilot Platform Clean Architecture Map">
          <div className="p-4 bg-slate-950 rounded-lg border border-white/10 space-y-3 font-mono">
            <div className="p-3 bg-blue-950/40 border border-blue-800/40 rounded flex items-center justify-between">
              <span className="font-bold text-blue-300">Presentation Layer</span>
              <span className="text-[10px] text-slate-400">Next.js 16 App Router · Tauri v2 Rust · Electron</span>
            </div>
            <div className="p-3 bg-indigo-950/40 border border-indigo-800/40 rounded flex items-center justify-between">
              <span className="font-bold text-indigo-300">Application Layer</span>
              <span className="text-[10px] text-slate-400">FastAPI Routers · Pydantic Schemas · EventBus</span>
            </div>
            <div className="p-3 bg-emerald-950/40 border border-emerald-800/40 rounded flex items-center justify-between">
              <span className="font-bold text-emerald-300">Domain Layer</span>
              <span className="text-[10px] text-slate-400">CCM Translation Engine · Execution Engine · Alert Engine</span>
            </div>
            <div className="p-3 bg-slate-900 border border-white/10 rounded flex items-center justify-between">
              <span className="font-bold text-slate-300">Infrastructure Layer</span>
              <span className="text-[10px] text-slate-400">Prisma PostgreSQL · Encrypted SQLite · PySNMP · Scrapli</span>
            </div>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
