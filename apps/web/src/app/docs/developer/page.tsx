'use client';

import React from 'react';
import { AppShell } from '../../../layouts/AppShell';
import { Card } from '@switchpilot/ui';

export default function DeveloperPortalPage() {
  return (
    <AppShell
      currentPath="/docs/developer"
      pageTitle="Plugin Developer Portal & SDK Documentation"
      pageSubtitle="Build, test, and publish custom plugin extensions using the SwitchPilotPlugin TypeScript interface."
      breadcrumbItems={[{ label: 'Documentation', href: '/docs' }, { label: 'Developer Portal' }]}
    >
      <div className="space-y-4 text-xs">
        <Card title="SwitchPilotPlugin SDK Interface Contract">
          <div className="p-4 bg-slate-950 rounded-lg border border-white/10 font-mono text-[11px] text-slate-300 overflow-x-auto">
            <pre>{`export interface SwitchPilotPlugin {
  manifest: PluginManifest;
  initialize(context: PluginContext): Promise<void>;
  registerRoutes?(router: PluginRouter): void;
  registerTranslator?(engine: TranslationEngine): void;
  registerPolicy?(engine: PolicyEngine): void;
  registerWorkflow?(engine: WorkflowEngine): void;
  registerWidgets?(registry: WidgetRegistry): void;
  dispose(): Promise<void>;
}`}</pre>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
