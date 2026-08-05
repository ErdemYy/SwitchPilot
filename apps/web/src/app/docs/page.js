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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DocsPortalPage;
const react_1 = __importStar(require("react"));
const link_1 = __importDefault(require("next/link"));
const AppShell_1 = require("../../layouts/AppShell");
function DocsPortalPage() {
    const [searchQuery, setSearchQuery] = (0, react_1.useState)('');
    const sections = [
        { href: '/docs/api-explorer', title: 'Interactive API Explorer', icon: '🔌', desc: 'Browse OpenAPI endpoints, test REST calls, and inspect Pydantic & TypeScript DTO schemas.' },
        { href: '/docs/developer', title: 'Plugin Developer Portal', icon: '🧩', desc: 'Build custom translators, telemetry collectors, and widget extensions with the SwitchPilotPlugin SDK.' },
        { href: '/docs/architecture', title: 'Interactive Architecture Viewer', icon: '🏗️', desc: 'Explore system architecture, Event Bus, Execution Engine, Telemetry Pipeline, and Desktop Runtimes.' },
        { href: '/docs/learning', title: 'Learning Center & Certifications', icon: '🎓', desc: 'Interactive hands-on labs and certification paths for Network Engineers, Admins, and Developers.' },
        { href: '/docs/troubleshooting', title: 'Troubleshooting & Error Codes', icon: '🛠️', desc: 'Error code matrix, diagnostic commands, recovery steps, and log analysis guides.' },
        { href: '/docs/changelog', title: 'Release Notes & Changelog', icon: '📜', desc: 'Product version history, migration guides, breaking changes, and new feature highlights.' },
    ];
    return (<AppShell_1.AppShell currentPath="/docs" pageTitle="Enterprise Documentation & Knowledge Platform" pageSubtitle="Search guides, REST API specifications, SDK documentation, architecture maps, and interactive learning courses." breadcrumbItems={[{ label: 'Platform' }, { label: 'Documentation' }]}>
      {/* Universal Search Banner */}
      <div className="bg-[#0f1629] border border-white/10 rounded-2xl p-6 space-y-4">
        <div className="max-w-2xl mx-auto space-y-2 text-center">
          <h2 className="text-xl font-bold text-slate-100">Universal Knowledge & Documentation Search</h2>
          <p className="text-xs text-slate-400">
            Search across user guides, CLI translation rules, OpenAPI endpoints, plugin SDK references, and error codes.
          </p>
          <div className="relative mt-3">
            <input type="text" placeholder="Search documentation (e.g. CCM format, OIDC auth, PySNMP, SQLite sync)..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-[#111827] border border-white/15 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500"/>
            <span className="absolute right-4 top-3.5 text-xs text-slate-500 font-mono">⌘K</span>
          </div>
        </div>
      </div>

      {/* Main Feature Portals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map((sec) => (<link_1.default key={sec.href} href={sec.href}>
            <div className="h-full p-5 bg-[#0f1629] border border-white/5 rounded-xl hover:border-blue-500/40 hover:bg-slate-900/60 transition-all space-y-3 cursor-pointer group">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{sec.icon}</span>
                <h3 className="font-bold text-slate-200 group-hover:text-blue-400 transition-colors text-sm">{sec.title}</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{sec.desc}</p>
            </div>
          </link_1.default>))}
      </div>
    </AppShell_1.AppShell>);
}
