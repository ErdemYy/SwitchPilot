'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RoleManagementPage;
const react_1 = __importDefault(require("react"));
const AppShell_1 = require("../../layouts/AppShell");
function RoleManagementPage() {
    const roles = [
        {
            name: 'Owner',
            type: 'System Default',
            desc: 'Full organization super-admin privileges and workspace ownership.',
            usersCount: 1,
            permCount: 22,
        },
        {
            name: 'Administrator',
            type: 'System Default',
            desc: 'Full tenant management excluding workspace ownership transfer.',
            usersCount: 2,
            permCount: 21,
        },
        {
            name: 'Network Engineer',
            type: 'System Default',
            desc: 'Hardware device management, configuration push, and automation execution.',
            usersCount: 8,
            permCount: 14,
        },
        {
            name: 'Operator',
            type: 'System Default',
            desc: 'Read-only telemetry and task monitoring.',
            usersCount: 15,
            permCount: 6,
        },
        {
            name: 'Read Only',
            type: 'System Default',
            desc: 'Strict read-only access to devices and audit logs.',
            usersCount: 4,
            permCount: 3,
        },
    ];
    return (<AppShell_1.AppShell currentPath="/roles" pageTitle="Role-Based Access Control (RBAC) Roles" pageSubtitle="Manage system default and custom organizational roles and permission assignments." breadcrumbItems={[{ label: 'Identity' }, { label: 'Role Management' }]} actionButtons={<button onClick={() => alert('Create Custom Role Dialog')} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-xs font-semibold text-white rounded-lg shadow-lg transition-colors">
          + Create Custom Role
        </button>}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {roles.map((role) => (<div key={role.name} className="bg-[#172033] border border-white/10 rounded-xl p-5 shadow-lg space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <h3 className="text-base font-bold text-slate-100">{role.name}</h3>
                <span className="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-400 border border-white/5 uppercase">
                  {role.type}
                </span>
              </div>
              <span className="text-xs text-blue-400 font-mono">{role.permCount} Permissions</span>
            </div>
            <p className="text-xs text-slate-400">{role.desc}</p>
            <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs text-slate-400">
              <span>Assigned Users: <strong className="text-slate-200">{role.usersCount}</strong></span>
              <button onClick={() => alert(`Editing permissions for role: ${role.name}`)} className="text-blue-400 hover:underline">
                Edit Permissions →
              </button>
            </div>
          </div>))}
      </div>
    </AppShell_1.AppShell>);
}
