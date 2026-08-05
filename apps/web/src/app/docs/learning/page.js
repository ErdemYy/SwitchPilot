'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LearningCenterPage;
const react_1 = __importDefault(require("react"));
const AppShell_1 = require("../../../layouts/AppShell");
const ui_1 = require("@switchpilot/ui");
function LearningCenterPage() {
    const courses = [
        { title: 'SwitchPilot Essentials for NOC Operators', level: 'BEGINNER', duration: '45 mins', desc: 'Learn how to monitor device health, inspect active alerts, and review root cause correlations.' },
        { title: 'Multi-Vendor CCM & Translation Masterclass', level: 'INTERMEDIATE', duration: '90 mins', desc: 'Deep-dive into Canonical Configuration Models and vendor CLI translator drivers.' },
        { title: 'Enterprise Desktop & Offline Mode Administration', level: 'ADVANCED', duration: '60 mins', desc: 'Configure local Encrypted SQLite databases, Windows DPAPI integration, and sync conflict resolution.' },
    ];
    return (<AppShell_1.AppShell currentPath="/docs/learning" pageTitle="Learning Center & Certification Paths" pageSubtitle="Interactive hands-on courses, practice labs, and official SwitchPilot certifications." breadcrumbItems={[{ label: 'Documentation', href: '/docs' }, { label: 'Learning Center' }]}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        {courses.map((c) => (<ui_1.Card key={c.title} title={c.title}>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <ui_1.Badge variant="primary" size="sm">{c.level}</ui_1.Badge>
                <span className="text-[10px] text-slate-400 font-mono">⏱ {c.duration}</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">{c.desc}</p>
              <ui_1.Button variant="secondary" size="sm" onClick={() => alert(`Starting Course: ${c.title}`)}>
                Start Course
              </ui_1.Button>
            </div>
          </ui_1.Card>))}
      </div>
    </AppShell_1.AppShell>);
}
