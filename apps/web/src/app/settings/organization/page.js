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
exports.default = OrganizationSettingsPage;
const react_1 = __importStar(require("react"));
const AppShell_1 = require("../../layouts/AppShell");
function OrganizationSettingsPage() {
    const [orgName, setOrgName] = (0, react_1.useState)('Global Production NOC');
    const [orgSlug, setOrgSlug] = (0, react_1.useState)('global-noc');
    const [timezone, setTimezone] = (0, react_1.useState)('UTC');
    const [language, setLanguage] = (0, react_1.useState)('en');
    const handleSave = (e) => {
        e.preventDefault();
        alert('Organization workspace settings updated.');
    };
    return (<AppShell_1.AppShell currentPath="/settings" pageTitle="Organization Workspace Settings" pageSubtitle="Manage tenant profile, workspace metadata, and default localization." breadcrumbItems={[{ label: 'Organization' }, { label: 'Settings' }]}>
      <div className="max-w-4xl space-y-6">
        <form onSubmit={handleSave} className="bg-[#172033] border border-white/10 rounded-xl p-6 shadow-xl space-y-6">
          <h2 className="text-base font-bold text-slate-100 border-b border-white/10 pb-3">
            Organization Identity
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Organization Name</label>
              <input type="text" value={orgName} onChange={(e) => setOrgName(e.target.value)} className="w-full px-3 py-2 bg-[#111827] border border-white/10 rounded-lg text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"/>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Workspace Slug</label>
              <input type="text" value={orgSlug} onChange={(e) => setOrgSlug(e.target.value)} className="w-full px-3 py-2 bg-[#111827] border border-white/10 rounded-lg text-sm font-mono text-blue-400 focus:outline-none"/>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Default Timezone</label>
              <select value={timezone} onChange={(e) => setTimezone(e.target.value)} className="w-full px-3 py-2 bg-[#111827] border border-white/10 rounded-lg text-sm text-slate-100 focus:outline-none">
                <option value="UTC">UTC (Coordinated Universal Time)</option>
                <option value="Europe/Frankfurt">Europe/Frankfurt (CET)</option>
                <option value="America/New_York">America/New_York (EST)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Default Language</label>
              <select value={language} onChange={(e) => setLanguage(e.target.value)} className="w-full px-3 py-2 bg-[#111827] border border-white/10 rounded-lg text-sm text-slate-100 focus:outline-none">
                <option value="en">English (US)</option>
                <option value="de">German (Deutsch)</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t border-white/10">
            <button type="submit" className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-xs font-semibold text-white rounded-lg shadow-lg transition-colors">
              Update Organization Settings
            </button>
          </div>
        </form>
      </div>
    </AppShell_1.AppShell>);
}
