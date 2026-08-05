'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ApiExplorerPage;
const react_1 = __importStar(require("react"));
const AppShell_1 = require("../../../layouts/AppShell");
const ui_1 = require("@switchpilot/ui");
function ApiExplorerPage() {
    const [selectedTag, setSelectedTag] = (0, react_1.useState)('ALL');
    const apiEndpoints = [
        { method: 'POST', path: '/api/v1/auth/login', tag: 'Identity', summary: 'Authenticate user & issue JWT tokens' },
        { method: 'GET', path: '/api/v1/devices', tag: 'Inventory', summary: 'List all managed network devices' },
        { method: 'POST', path: '/api/v1/translation/translate', tag: 'Translation', summary: 'Translate neutral CCM into vendor CLI strings' },
        { method: 'POST', path: '/api/v1/execution/plans', tag: 'Execution', summary: 'Create configuration execution plan' },
        { method: 'GET', path: '/api/v1/monitoring/metrics', tag: 'Telemetry', summary: 'Query real-time normalized telemetry metrics' },
        { method: 'POST', path: '/api/v1/desktop/sync/push', tag: 'Desktop', summary: 'Sync offline change queue from desktop' },
    ];
    const methodColorMap = {
        GET: 'bg-emerald-950 text-emerald-300 border-emerald-800',
        POST: 'bg-blue-950 text-blue-300 border-blue-800',
        PUT: 'bg-amber-950 text-amber-300 border-amber-800',
        DELETE: 'bg-red-950 text-red-300 border-red-800',
    };
    return (<AppShell_1.AppShell currentPath="/docs/api-explorer" pageTitle="Interactive REST API Explorer & OpenAPI Specs" pageSubtitle="Test live API endpoints, inspect request/response schemas, and generate client SDK snippets." breadcrumbItems={[{ label: 'Documentation', href: '/docs' }, { label: 'API Explorer' }]}>
      <div className="space-y-4 text-xs">
        <ui_1.Card title="OpenAPI v3 REST Endpoint Directory">
          <div className="space-y-3">
            {apiEndpoints.map((ep, i) => (<div key={i} className="p-3 bg-slate-950 rounded-lg border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold border font-mono ${methodColorMap[ep.method]}`}>
                      {ep.method}
                    </span>
                    <span className="font-mono text-slate-200 font-bold text-sm">{ep.path}</span>
                  </div>
                  <ui_1.Badge variant="secondary" size="sm">{ep.tag}</ui_1.Badge>
                </div>
                <p className="text-slate-400 text-[11px]">{ep.summary}</p>
              </div>))}
          </div>
        </ui_1.Card>
      </div>
    </AppShell_1.AppShell>);
}
