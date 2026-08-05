'use client';

import React, { useState } from 'react';
import { AppShell } from '../../../layouts/AppShell';
import { Card, Button, Badge } from '@switchpilot/ui';

export default function ApiExplorerPage() {
  const [selectedTag, setSelectedTag] = useState<string>('ALL');

  const apiEndpoints = [
    { method: 'POST', path: '/api/v1/auth/login', tag: 'Identity', summary: 'Authenticate user & issue JWT tokens' },
    { method: 'GET', path: '/api/v1/devices', tag: 'Inventory', summary: 'List all managed network devices' },
    { method: 'POST', path: '/api/v1/translation/translate', tag: 'Translation', summary: 'Translate neutral CCM into vendor CLI strings' },
    { method: 'POST', path: '/api/v1/execution/plans', tag: 'Execution', summary: 'Create configuration execution plan' },
    { method: 'GET', path: '/api/v1/monitoring/metrics', tag: 'Telemetry', summary: 'Query real-time normalized telemetry metrics' },
    { method: 'POST', path: '/api/v1/desktop/sync/push', tag: 'Desktop', summary: 'Sync offline change queue from desktop' },
  ];

  const methodColorMap: Record<string, string> = {
    GET: 'bg-emerald-950 text-emerald-300 border-emerald-800',
    POST: 'bg-blue-950 text-blue-300 border-blue-800',
    PUT: 'bg-amber-950 text-amber-300 border-amber-800',
    DELETE: 'bg-red-950 text-red-300 border-red-800',
  };

  return (
    <AppShell
      currentPath="/docs/api-explorer"
      pageTitle="Interactive REST API Explorer & OpenAPI Specs"
      pageSubtitle="Test live API endpoints, inspect request/response schemas, and generate client SDK snippets."
      breadcrumbItems={[{ label: 'Documentation', href: '/docs' }, { label: 'API Explorer' }]}
    >
      <div className="space-y-4 text-xs">
        <Card title="OpenAPI v3 REST Endpoint Directory">
          <div className="space-y-3">
            {apiEndpoints.map((ep, i) => (
              <div key={i} className="p-3 bg-slate-950 rounded-lg border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold border font-mono ${methodColorMap[ep.method]}`}>
                      {ep.method}
                    </span>
                    <span className="font-mono text-slate-200 font-bold text-sm">{ep.path}</span>
                  </div>
                  <Badge variant="secondary" size="sm">{ep.tag}</Badge>
                </div>
                <p className="text-slate-400 text-[11px]">{ep.summary}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
