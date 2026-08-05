import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';
import { Breadcrumb, CommandPalette, CommandItem } from '@switchpilot/ui';

export interface AppShellProps {
  currentPath?: string;
  onNavigate?: (path: string) => void;
  pageTitle: string;
  pageSubtitle?: string;
  actionButtons?: React.ReactNode;
  breadcrumbItems?: { label: string; href?: string }[];
  children: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({
  currentPath = '/dashboard',
  onNavigate,
  pageTitle,
  pageSubtitle,
  actionButtons,
  breadcrumbItems = [{ label: 'Network' }, { label: 'Dashboard' }],
  children,
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  const commands: CommandItem[] = [
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

  return (
    <div className="min-h-screen bg-[#0B1220] text-slate-100 flex font-sans antialiased">
      {/* Responsive Sidebar */}
      <Sidebar
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed(!collapsed)}
        currentPath={currentPath}
        onNavigate={onNavigate}
      />

      {/* Main App Container */}
      <div
        className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${
          collapsed ? 'ml-16' : 'ml-64'
        }`}
      >
        {/* Topbar */}
        <Topbar onOpenCommandPalette={() => setIsCommandOpen(true)} />

        {/* Header & Page Title Bar */}
        <div className="px-8 py-5 bg-[#111827]/40 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <Breadcrumb items={breadcrumbItems} />
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
      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        commands={commands}
      />
    </div>
  );
};
