'use client';

import React from 'react';
import { AppShell } from '../../layouts/AppShell';

export default function PermissionRegistryPage() {
  const permissionGroups = [
    {
      group: 'Organization',
      perms: [
        { code: 'organization:read', name: 'View Organization Settings', desc: 'View organization profile and security policies.' },
        { code: 'organization:write', name: 'Manage Organization Settings', desc: 'Modify organization profile and security policies.' },
      ],
    },
    {
      group: 'Identity & RBAC',
      perms: [
        { code: 'users:read', name: 'View Users', desc: 'View user profiles within the organization.' },
        { code: 'users:invite', name: 'Invite Users', desc: 'Send invitation emails to join organization.' },
        { code: 'users:manage', name: 'Manage Users', desc: 'Update roles, deactivate or remove users.' },
        { code: 'roles:read', name: 'View Roles', desc: 'View system and custom roles.' },
        { code: 'roles:manage', name: 'Manage Custom Roles', desc: 'Create, edit, and assign permissions.' },
      ],
    },
    {
      group: 'Hardware Devices',
      perms: [
        { code: 'devices:read', name: 'View Network Devices', desc: 'View device inventory and telemetry status.' },
        { code: 'devices:create', name: 'Register Devices', desc: 'Add new hardware switches/routers.' },
        { code: 'devices:write', name: 'Modify Devices', desc: 'Update device metadata.' },
        { code: 'devices:delete', name: 'Delete Devices', desc: 'Remove devices from inventory.' },
      ],
    },
    {
      group: 'Configurations & Automation',
      perms: [
        { code: 'configs:read', name: 'View Configurations', desc: 'View running configuration backups and diffs.' },
        { code: 'configs:write', name: 'Apply Configurations', desc: 'Push configuration commands to devices.' },
        { code: 'configs:rollback', name: 'Rollback Configurations', desc: 'Execute safe configuration rollbacks.' },
        { code: 'automation:read', name: 'View Automation Queue', desc: 'Monitor Celery background task queue.' },
        { code: 'automation:execute', name: 'Execute Bulk Tasks', desc: 'Trigger bulk network commands and scripts.' },
      ],
    },
  ];

  return (
    <AppShell
      currentPath="/permissions"
      pageTitle="Permission Registry Explorer"
      pageSubtitle="Granular permission codes mapped across Organization, Identity, Hardware, and Configuration domains."
      breadcrumbItems={[{ label: 'Identity' }, { label: 'Permissions' }]}
    >
      <div className="space-y-6">
        {permissionGroups.map((pg) => (
          <div key={pg.group} className="bg-[#172033] border border-white/10 rounded-xl p-5 shadow-lg space-y-3">
            <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider text-blue-400">
              {pg.group} Domain
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {pg.perms.map((p) => (
                <div key={p.code} className="p-3 bg-[#111827] border border-white/5 rounded-lg space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-xs text-slate-200">{p.name}</span>
                    <span className="font-mono text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded">
                      {p.code}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
