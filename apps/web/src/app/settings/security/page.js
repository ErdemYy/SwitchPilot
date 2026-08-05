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
exports.default = SecuritySettingsPage;
const react_1 = __importStar(require("react"));
const AppShell_1 = require("../../layouts/AppShell");
function SecuritySettingsPage() {
    const [minPasswordLength, setMinPasswordLength] = (0, react_1.useState)(12);
    const [requireUppercase, setRequireUppercase] = (0, react_1.useState)(true);
    const [requireNumbers, setRequireNumbers] = (0, react_1.useState)(true);
    const [requireSpecialChars, setRequireSpecialChars] = (0, react_1.useState)(true);
    const [sessionMaxDurationMin, setSessionMaxDurationMin] = (0, react_1.useState)(1440);
    const [idleTimeoutMin, setIdleTimeoutMin] = (0, react_1.useState)(60);
    const [enforceMfa, setEnforceMfa] = (0, react_1.useState)(false);
    const handleSave = (e) => {
        e.preventDefault();
        alert('Security and password policies updated.');
    };
    return (<AppShell_1.AppShell currentPath="/settings" pageTitle="Organization Security Policies" pageSubtitle="Configure tenant-wide Argon2 password complexity, session duration, and MFA requirements." breadcrumbItems={[{ label: 'Security' }, { label: 'Policies' }]}>
      <div className="max-w-4xl space-y-6">
        <form onSubmit={handleSave} className="bg-[#172033] border border-white/10 rounded-xl p-6 shadow-xl space-y-6">
          <h2 className="text-base font-bold text-slate-100 border-b border-white/10 pb-3">
            Password Policy Settings
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Minimum Password Length
              </label>
              <input type="number" min={8} max={64} value={minPasswordLength} onChange={(e) => setMinPasswordLength(Number(e.target.value))} className="w-full px-3 py-2 bg-[#111827] border border-white/10 rounded-lg text-sm text-slate-100 focus:outline-none"/>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Session Idle Timeout (Minutes)
              </label>
              <input type="number" value={idleTimeoutMin} onChange={(e) => setIdleTimeoutMin(Number(e.target.value))} className="w-full px-3 py-2 bg-[#111827] border border-white/10 rounded-lg text-sm text-slate-100 focus:outline-none"/>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="checkbox" checked={requireUppercase} onChange={(e) => setRequireUppercase(e.target.checked)} className="rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-0"/>
              <span className="text-xs text-slate-200">Require at least one uppercase letter (A-Z)</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="checkbox" checked={requireNumbers} onChange={(e) => setRequireNumbers(e.target.checked)} className="rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-0"/>
              <span className="text-xs text-slate-200">Require at least one numeric digit (0-9)</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="checkbox" checked={requireSpecialChars} onChange={(e) => setRequireSpecialChars(e.target.checked)} className="rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-0"/>
              <span className="text-xs text-slate-200">Require at least one special character (!@#$%^&*)</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer pt-2 border-t border-white/5">
              <input type="checkbox" checked={enforceMfa} onChange={(e) => setEnforceMfa(e.target.checked)} className="rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-0"/>
              <span className="text-xs text-slate-200 font-semibold">
                Enforce Multi-Factor Authentication (MFA) for all workspace users
              </span>
            </label>
          </div>

          <div className="flex justify-end pt-4 border-t border-white/10">
            <button type="submit" className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-xs font-semibold text-white rounded-lg shadow-lg transition-colors">
              Update Security Policy
            </button>
          </div>
        </form>
      </div>
    </AppShell_1.AppShell>);
}
