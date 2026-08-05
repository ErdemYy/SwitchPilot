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
exports.default = SessionManagementPage;
const react_1 = __importStar(require("react"));
const AppShell_1 = require("../../layouts/AppShell");
function SessionManagementPage() {
    const [sessions, setSessions] = (0, react_1.useState)([
        {
            id: 'ses-101',
            device: 'Windows 11 PC (Chrome 126.0)',
            ip: '192.168.1.50 (Frankfurt, DE)',
            lastActive: 'Just now',
            isCurrent: true,
        },
        {
            id: 'ses-102',
            device: 'MacBook Pro (Safari 17.4)',
            ip: '10.240.8.12 (London, UK)',
            lastActive: '3 hours ago',
            isCurrent: false,
        },
        {
            id: 'ses-103',
            device: 'iPhone 15 Pro (SwitchPilot Mobile)',
            ip: '172.16.20.9 (Tokyo, JP)',
            lastActive: 'Yesterday at 18:40',
            isCurrent: false,
        },
    ]);
    const handleRevoke = (id) => {
        setSessions(sessions.filter((s) => s.id !== id));
    };
    const handleRevokeAllOthers = () => {
        setSessions(sessions.filter((s) => s.isCurrent));
        alert('All other active sessions revoked.');
    };
    return (<AppShell_1.AppShell currentPath="/settings" pageTitle="Active User Sessions & Security Tracking" pageSubtitle="Monitor authenticated device sessions, IP telemetry, and revoke compromised tokens." breadcrumbItems={[{ label: 'Security' }, { label: 'Active Sessions' }]} actionButtons={<button onClick={handleRevokeAllOthers} className="px-3.5 py-1.5 bg-red-950/60 hover:bg-red-900/60 text-red-300 border border-red-800 text-xs font-semibold rounded-lg transition-colors">
          Revoke All Other Sessions
        </button>}>
      <div className="max-w-4xl space-y-4">
        {sessions.map((s) => (<div key={s.id} className={`p-4 rounded-xl border flex items-center justify-between transition-all ${s.isCurrent
                ? 'bg-blue-950/20 border-blue-800/60'
                : 'bg-[#172033] border-white/10'}`}>
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="font-bold text-sm text-slate-100">{s.device}</span>
                {s.isCurrent && (<span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800 font-semibold">
                    Current Session
                  </span>)}
              </div>
              <p className="text-xs text-slate-400 font-mono">{s.ip}</p>
              <p className="text-[10px] text-slate-500">Last active: {s.lastActive}</p>
            </div>
            {!s.isCurrent && (<button onClick={() => handleRevoke(s.id)} className="px-3 py-1.5 text-xs bg-slate-800 hover:bg-red-900/50 text-slate-300 hover:text-red-300 border border-white/10 rounded-md transition-colors">
                Revoke Session
              </button>)}
          </div>))}
      </div>
    </AppShell_1.AppShell>);
}
