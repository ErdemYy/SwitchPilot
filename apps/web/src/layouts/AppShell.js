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
exports.AppShell = void 0;
const react_1 = __importStar(require("react"));
const Sidebar_1 = require("./Sidebar");
const Topbar_1 = require("./Topbar");
const ui_1 = require("@switchpilot/ui");
const AppShell = ({ currentPath = '/dashboard', onNavigate, pageTitle, pageSubtitle, actionButtons, breadcrumbItems = [{ label: 'Network' }, { label: 'Dashboard' }], children, }) => {
    const [collapsed, setCollapsed] = (0, react_1.useState)(false);
    const [isCommandOpen, setIsCommandOpen] = (0, react_1.useState)(false);
    const commands = [
        {
            id: '1',
            title: 'Go to Devices Overview',
            category: 'Navigation',
            shortcut: 'G D',
            onSelect: () => onNavigate && onNavigate('/devices'),
        },
        {
            id: '2',
            title: 'Go to Task Execution Queue',
            category: 'Navigation',
            shortcut: 'G T',
            onSelect: () => onNavigate && onNavigate('/tasks'),
        },
        {
            id: '3',
            title: 'Backup All Cisco Switches',
            category: 'Automation',
            onSelect: () => alert('Triggered Cisco Backup Task'),
        },
        {
            id: '4',
            title: 'Sync VLAN Database across Sites',
            category: 'Orchestration',
            onSelect: () => alert('Triggered VLAN Sync'),
        },
    ];
    return (<div className="min-h-screen bg-[#0B1220] text-slate-100 flex font-sans antialiased">
      {/* Responsive Sidebar */}
      <Sidebar_1.Sidebar collapsed={collapsed} onToggleCollapse={() => setCollapsed(!collapsed)} currentPath={currentPath} onNavigate={onNavigate}/>

      {/* Main App Container */}
      <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${collapsed ? 'ml-16' : 'ml-64'}`}>
        {/* Topbar */}
        <Topbar_1.Topbar onOpenCommandPalette={() => setIsCommandOpen(true)}/>

        {/* Header & Page Title Bar */}
        <div className="px-8 py-5 bg-[#111827]/40 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <ui_1.Breadcrumb items={breadcrumbItems}/>
            <h1 className="text-2xl font-bold text-slate-100 tracking-tight mt-1">
              {pageTitle}
            </h1>
            {pageSubtitle && <p className="text-xs text-slate-400 mt-0.5">{pageSubtitle}</p>}
          </div>
          {actionButtons && <div className="flex items-center space-x-3">{actionButtons}</div>}
        </div>

        {/* Scrollable Main Area */}
        <main className="flex-1 p-8 overflow-y-auto space-y-6">{children}</main>
      </div>

      {/* Global Cmd+K Command Palette Modal */}
      <ui_1.CommandPalette isOpen={isCommandOpen} onClose={() => setIsCommandOpen(false)} commands={commands}/>
    </div>);
};
exports.AppShell = AppShell;
