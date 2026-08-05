'use client';

import React from 'react';
import { AppShell } from '../../../layouts/AppShell';
import { Card, Badge, Button } from '@switchpilot/ui';

export default function LearningCenterPage() {
  const courses = [
    { title: 'SwitchPilot Essentials for NOC Operators', level: 'BEGINNER', duration: '45 mins', desc: 'Learn how to monitor device health, inspect active alerts, and review root cause correlations.' },
    { title: 'Multi-Vendor CCM & Translation Masterclass', level: 'INTERMEDIATE', duration: '90 mins', desc: 'Deep-dive into Canonical Configuration Models and vendor CLI translator drivers.' },
    { title: 'Enterprise Desktop & Offline Mode Administration', level: 'ADVANCED', duration: '60 mins', desc: 'Configure local Encrypted SQLite databases, Windows DPAPI integration, and sync conflict resolution.' },
  ];

  return (
    <AppShell
      currentPath="/docs/learning"
      pageTitle="Learning Center & Certification Paths"
      pageSubtitle="Interactive hands-on courses, practice labs, and official SwitchPilot certifications."
      breadcrumbItems={[{ label: 'Documentation', href: '/docs' }, { label: 'Learning Center' }]}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        {courses.map((c) => (
          <Card key={c.title} title={c.title}>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant="primary" size="sm">{c.level}</Badge>
                <span className="text-[10px] text-slate-400 font-mono">⏱ {c.duration}</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">{c.desc}</p>
              <Button variant="secondary" size="sm" onClick={() => alert(`Starting Course: ${c.title}`)}>
                Start Course
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
