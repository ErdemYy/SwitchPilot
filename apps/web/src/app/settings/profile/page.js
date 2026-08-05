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
exports.default = UserProfilePage;
const react_1 = __importStar(require("react"));
const AppShell_1 = require("../../layouts/AppShell");
function UserProfilePage() {
    const [fullName, setFullName] = (0, react_1.useState)('Erdem Architect');
    const [email] = (0, react_1.useState)('admin@switchpilot.io');
    const [timezone, setTimezone] = (0, react_1.useState)('UTC');
    const [language, setLanguage] = (0, react_1.useState)('en');
    const handleSave = (e) => {
        e.preventDefault();
        alert('User profile updated successfully.');
    };
    return (<AppShell_1.AppShell currentPath="/settings" pageTitle="User Account Settings" pageSubtitle="Manage your personal profile, preferences, and notifications." breadcrumbItems={[{ label: 'Account' }, { label: 'User Profile' }]}>
      <div className="max-w-4xl space-y-6">
        <form onSubmit={handleSave} className="bg-[#172033] border border-white/10 rounded-xl p-6 shadow-xl space-y-6">
          <h2 className="text-base font-bold text-slate-100 border-b border-white/10 pb-3">
            Personal Information
          </h2>

          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xl text-white">
              EA
            </div>
            <div>
              <button type="button" onClick={() => alert('Avatar upload dialog')} className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 rounded border border-white/10 transition-colors">
                Change Avatar
              </button>
              <p className="text-[10px] text-slate-400 mt-1">JPG, PNG or GIF. Max 2MB.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Full Name</label>
              <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full px-3 py-2 bg-[#111827] border border-white/10 rounded-lg text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"/>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Email Address</label>
              <input type="email" disabled value={email} className="w-full px-3 py-2 bg-[#111827]/50 border border-white/5 rounded-lg text-sm text-slate-400 cursor-not-allowed"/>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Preferred Timezone</label>
              <select value={timezone} onChange={(e) => setTimezone(e.target.value)} className="w-full px-3 py-2 bg-[#111827] border border-white/10 rounded-lg text-sm text-slate-100 focus:outline-none">
                <option value="UTC">UTC (Coordinated Universal Time)</option>
                <option value="Europe/Frankfurt">Europe/Frankfurt (CET)</option>
                <option value="America/New_York">America/New_York (EST)</option>
                <option value="Asia/Tokyo">Asia/Tokyo (JST)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Language</label>
              <select value={language} onChange={(e) => setLanguage(e.target.value)} className="w-full px-3 py-2 bg-[#111827] border border-white/10 rounded-lg text-sm text-slate-100 focus:outline-none">
                <option value="en">English (US)</option>
                <option value="de">German (Deutsch)</option>
                <option value="fr">French (Français)</option>
                <option value="ja">Japanese (日本語)</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t border-white/10">
            <button type="submit" className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-xs font-semibold text-white rounded-lg shadow-lg transition-colors">
              Save Profile Changes
            </button>
          </div>
        </form>
      </div>
    </AppShell_1.AppShell>);
}
