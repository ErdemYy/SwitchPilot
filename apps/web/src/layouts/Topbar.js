"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Topbar = void 0;
const react_1 = __importDefault(require("react"));
const ui_1 = require("@switchpilot/ui");
const Topbar = ({ onOpenCommandPalette }) => {
    const quickActions = [
        { label: 'Add Device', onClick: () => alert('Quick Action: Add Device') },
        { label: 'Run Bulk Config', onClick: () => alert('Quick Action: Bulk Config') },
        { label: 'Schedule Backup', onClick: () => alert('Quick Action: Schedule Backup') },
    ];
    const userMenuItems = [
        { label: 'My Profile', onClick: () => alert('Profile clicked') },
        { label: 'API Tokens', onClick: () => alert('API Tokens clicked') },
        { label: 'System Audit', onClick: () => alert('Audit clicked') },
        { label: 'Sign Out', onClick: () => alert('Signed out'), variant: 'danger' },
    ];
    return (<header className="h-16 bg-[#111827] border-b border-white/10 px-6 flex items-center justify-between sticky top-0 z-30 shadow-md">
      {/* Global Search Bar Trigger */}
      <div className="w-80">
        <ui_1.Search readOnly onClick={onOpenCommandPalette} onShortcutClick={onOpenCommandPalette} placeholder="Global Search (Devices, IPs, Tasks)..."/>
      </div>

      {/* Right Controls */}
      <div className="flex items-center space-x-3">
        {/* Quick Actions Dropdown */}
        <ui_1.Dropdown trigger={<button className="px-3 py-1.5 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors flex items-center space-x-1">
              <span>+ Quick Action</span>
            </button>} items={quickActions}/>

        {/* Notifications Bell */}
        <button className="relative p-2 text-slate-400 hover:text-slate-200 rounded-lg hover:bg-slate-800 transition-colors" title="Notifications">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
          </svg>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full animate-pulse"/>
        </button>

        {/* Theme Switch */}
        <button className="p-2 text-slate-400 hover:text-slate-200 rounded-lg hover:bg-slate-800 transition-colors" title="Toggle Dark/Light Mode">
          🌙
        </button>

        {/* User Account Menu */}
        <ui_1.Dropdown trigger={<button className="flex items-center space-x-2 p-1 rounded-lg hover:bg-slate-800 transition-colors">
              <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xs text-white">
                EA
              </div>
              <span className="text-xs text-slate-300 font-medium">Erdem (Admin)</span>
            </button>} items={userMenuItems}/>
      </div>
    </header>);
};
exports.Topbar = Topbar;
