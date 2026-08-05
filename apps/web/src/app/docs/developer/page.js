'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DeveloperPortalPage;
const react_1 = __importDefault(require("react"));
const AppShell_1 = require("../../../layouts/AppShell");
const ui_1 = require("@switchpilot/ui");
function DeveloperPortalPage() {
    return (<AppShell_1.AppShell currentPath="/docs/developer" pageTitle="Plugin Developer Portal & SDK Documentation" pageSubtitle="Build, test, and publish custom plugin extensions using the SwitchPilotPlugin TypeScript interface." breadcrumbItems={[{ label: 'Documentation', href: '/docs' }, { label: 'Developer Portal' }]}>
      <div className="space-y-4 text-xs">
        <ui_1.Card title="SwitchPilotPlugin SDK Interface Contract">
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
        </ui_1.Card>
      </div>
    </AppShell_1.AppShell>);
}
