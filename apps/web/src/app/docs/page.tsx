'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppShell } from '../../layouts/AppShell';


export default function DocsPortalPage() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const sections = [
    { href: '/docs/api-explorer', title: 'Interactive API Explorer', icon: '🔌', desc: 'Browse OpenAPI endpoints, test REST calls, and inspect Pydantic & TypeScript DTO schemas.' },
    { href: '/docs/developer', title: 'Plugin Developer Portal', icon: '🧩', desc: 'Build custom translators, telemetry collectors, and widget extensions with the SwitchPilotPlugin SDK.' },
    { href: '/docs/architecture', title: 'Interactive Architecture Viewer', icon: '🏗️', desc: 'Explore system architecture, Event Bus, Execution Engine, Telemetry Pipeline, and Desktop Runtimes.' },
    { href: '/docs/learning', title: 'Learning Center & Certifications', icon: '🎓', desc: 'Interactive hands-on labs and certification paths for Network Engineers, Admins, and Developers.' },
    { href: '/docs/troubleshooting', title: 'Troubleshooting & Error Codes', icon: '🛠️', desc: 'Error code matrix, diagnostic commands, recovery steps, and log analysis guides.' },
    { href: '/docs/changelog', title: 'Release Notes & Changelog', icon: '📜', desc: 'Product version history, migration guides, breaking changes, and new feature highlights.' },
  ];

  return (
    <AppShell
      currentPath="/docs"
      pageTitle="Enterprise Documentation & Knowledge Platform"
      pageSubtitle="Search guides, REST API specifications, SDK documentation, architecture maps, and interactive learning courses."
      breadcrumbItems={[{ label: 'Platform' }, { label: 'Documentation' }]}
    >
      {/* Universal Search Banner */}
      <div className="bg-[#0f1629] border border-white/10 rounded-2xl p-6 space-y-4">
        <div className="max-w-2xl mx-auto space-y-2 text-center">
          <h2 className="text-xl font-bold text-slate-100">Universal Knowledge & Documentation Search</h2>
          <p className="text-xs text-slate-400">
            Search across user guides, CLI translation rules, OpenAPI endpoints, plugin SDK references, and error codes.
          </p>
          <div className="relative mt-3">
            <input
              type="text"
              placeholder="Search documentation (e.g. CCM format, OIDC auth, PySNMP, SQLite sync)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#111827] border border-white/15 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
            <span className="absolute right-4 top-3.5 text-xs text-slate-500 font-mono">⌘K</span>
          </div>
        </div>
      </div>

      {/* Main Feature Portals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map((sec) => (
          <Link key={sec.href} href={sec.href}>
            <div className="h-full p-5 bg-[#0f1629] border border-white/5 rounded-xl hover:border-blue-500/40 hover:bg-slate-900/60 transition-all space-y-3 cursor-pointer group">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{sec.icon}</span>
                <h3 className="font-bold text-slate-200 group-hover:text-blue-400 transition-colors text-sm">{sec.title}</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{sec.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </AppShell>
  );
}
