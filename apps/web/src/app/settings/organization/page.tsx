'use client';

import React, { useState } from 'react';
import { AppShell } from '../../layouts/AppShell';

export default function OrganizationSettingsPage() {
  const [orgName, setOrgName] = useState('Global Production NOC');
  const [orgSlug, setOrgSlug] = useState('global-noc');
  const [timezone, setTimezone] = useState('UTC');
  const [language, setLanguage] = useState('en');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Organization workspace settings updated.');
  };

  return (
    <AppShell
      currentPath="/settings"
      pageTitle="Organization Workspace Settings"
      pageSubtitle="Manage tenant profile, workspace metadata, and default localization."
      breadcrumbItems={[{ label: 'Organization' }, { label: 'Settings' }]}
    >
      <div className="max-w-4xl space-y-6">
        <form onSubmit={handleSave} className="bg-[#172033] border border-white/10 rounded-xl p-6 shadow-xl space-y-6">
          <h2 className="text-base font-bold text-slate-100 border-b border-white/10 pb-3">
            Organization Identity
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Organization Name</label>
              <input
                type="text"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                className="w-full px-3 py-2 bg-[#111827] border border-white/10 rounded-lg text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Workspace Slug</label>
              <input
                type="text"
                value={orgSlug}
                onChange={(e) => setOrgSlug(e.target.value)}
                className="w-full px-3 py-2 bg-[#111827] border border-white/10 rounded-lg text-sm font-mono text-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Default Timezone</label>
              <select
                value={timezone}
                onChange={(e) => setTimezone(e.target.value)}
                className="w-full px-3 py-2 bg-[#111827] border border-white/10 rounded-lg text-sm text-slate-100 focus:outline-none"
              >
                <option value="UTC">UTC (Coordinated Universal Time)</option>
                <option value="Europe/Frankfurt">Europe/Frankfurt (CET)</option>
                <option value="America/New_York">America/New_York (EST)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Default Language</label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full px-3 py-2 bg-[#111827] border border-white/10 rounded-lg text-sm text-slate-100 focus:outline-none"
              >
                <option value="en">English (US)</option>
                <option value="de">German (Deutsch)</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t border-white/10">
            <button
              type="submit"
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-xs font-semibold text-white rounded-lg shadow-lg transition-colors"
            >
              Update Organization Settings
            </button>
          </div>
        </form>
      </div>
    </AppShell>
  );
}
