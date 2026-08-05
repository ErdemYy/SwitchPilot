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
exports.Sidebar = void 0;
const react_1 = __importStar(require("react"));
const Sidebar = ({ currentPath = '/dashboard', onNavigate, collapsed, onToggleCollapse, }) => {
    const [workspace, setWorkspace] = (0, react_1.useState)('Global Production NOC');
    const navItems = [
        { label: 'Dashboard', path: '/dashboard', icon: '⚡' },
        { label: 'Devices', path: '/devices', icon: '🖥️', badge: '142' },
        { label: 'Device Groups', path: '/groups', icon: '📁' },
        { label: 'Templates', path: '/templates', icon: '📜' },
        { label: 'Configurations', path: '/configs', icon: '⚙️' },
        { label: 'Tasks', path: '/tasks', icon: '🔄', badge: '3' },
        { label: 'Rollback', path: '/rollback', icon: '⏪' },
        { label: 'Audit Logs', path: '/audit', icon: '📋' },
        { label: 'Users', path: '/users', icon: '👥' },
        { label: 'Roles', path: '/roles', icon: '🛡️' },
        { label: 'Settings', path: '/settings', icon: '🔧' },
        { label: 'Help', path: '/help', icon: '❓' },
    ];
    return (<aside className={`fixed left-0 top-0 bottom-0 z-40 bg-[#111827] border-r border-white/10 flex flex-col transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'}`}>
      {/* Brand Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/10 h-16">
        <div className="flex items-center space-x-3 overflow-hidden">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-black text-white text-lg shadow-lg shadow-blue-600/30 flex-shrink-0">
            S
          </div>
          {!collapsed && (<div className="flex flex-col">
              <span className="font-extrabold text-sm text-slate-100 tracking-wider uppercase">
                Switch<span className="text-blue-500">Pilot</span>
              </span>
              <span className="text-[10px] text-slate-400">Enterprise Network</span>
            </div>)}
        </div>
        <button onClick={onToggleCollapse} className="text-slate-400 hover:text-slate-200 p-1 rounded hover:bg-slate-800 transition-colors" title={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}>
          {collapsed ? '→' : '←'}
        </button>
      </div>

      {/* Workspace Selector */}
      {!collapsed && (<div className="p-3 border-b border-white/5">
          <label className="block text-[10px] font-semibold uppercase text-slate-500 mb-1">
            Active Workspace
          </label>
          <select value={workspace} onChange={(e) => setWorkspace(e.target.value)} className="w-full bg-[#172033] border border-white/10 rounded-md px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-600">
            <option value="Global Production NOC">Global Production NOC</option>
            <option value="EU Data Center - Frankfurt">EU Data Center - Frankfurt</option>
            <option value="US East Edge Network">US East Edge Network</option>
            <option value="APAC Regional Campus">APAC Regional Campus</option>
          </select>
        </div>)}

      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto p-2 space-y-1">
        {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (<button key={item.path} onClick={() => onNavigate && onNavigate(item.path)} className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all ${isActive
                    ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                    : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'}`} title={collapsed ? item.label : undefined}>
              <div className="flex items-center space-x-3 truncate">
                <span className="text-base">{item.icon}</span>
                {!collapsed && <span className="truncate">{item.label}</span>}
              </div>
              {!collapsed && item.badge && (<span className={`px-1.5 py-0.2 rounded-full text-[10px] ${isActive ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                  {item.badge}
                </span>)}
            </button>);
        })}
      </nav>

      {/* User Profile Footer */}
      <div className="p-3 border-t border-white/10 flex items-center space-x-3 bg-[#0B1220]/50">
        <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center font-bold text-xs text-slate-200 flex-shrink-0">
          EA
        </div>
        {!collapsed && (<div className="flex-1 truncate">
            <div className="text-xs font-semibold text-slate-200 truncate">Erdem Architect</div>
            <div className="text-[10px] text-slate-400 truncate">admin@switchpilot.io</div>
          </div>)}
      </div>
    </aside>);
};
exports.Sidebar = Sidebar;
