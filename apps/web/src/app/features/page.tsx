'use client';

import React from 'react';
import { MarketingNavbar } from '../../components/marketing/hero/MarketingNavbar';
import { MarketingFooter } from '../../components/marketing/MarketingFooter';
import { Badge } from '@switchpilot/ui';

export default function FeaturesPage() {
  const modules = [
    { title: 'Device Inventory & Asset Lifecycle', desc: 'Centralized registry supporting Cisco, Aruba, Juniper, Huawei, Mikrotik, HP, and Ubiquiti with hardware asset state tracking (PLANNED to DISPOSED).' },
    { title: 'Canonical Configuration Model (CCM)', desc: 'Vendor-neutral YAML/JSON schema for network intents. Zero CLI string guessing.' },
    { title: 'Scrapli & Netmiko Connection Platform', desc: 'Secure SSH connection pooling with Bastion host proxy support and fallback mock terminal drivers.' },
    { title: 'Snapshot Versioning & Atomic Rollback', desc: 'Unified side-by-side diff engine generating automatic 1-click rollback configuration commands.' },
    { title: 'Enterprise DAG Workflow Automation', desc: '15 pre-configured automation templates, visual DAG node builder, cron scheduler, and Canary rollout controls.' },
    { title: 'AI Autonomous Network Engineer', icon: '🤖', desc: '20 Intent categories, step-by-step DAG planner, and local RAG knowledge base.' },
  ];

  return (
    <div className="min-h-screen bg-[#f0f0f0] text-slate-800 font-sans">
      <div className="bg-[#111827] text-white">
        <MarketingNavbar />
      </div>

      <div className="py-16 px-6 max-w-[1536px] mx-auto space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="info">DEEP-DIVE MODULE SHOWCASE</Badge>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            Every Enterprise Feature, Out of the Box
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            Built from the ground up following Clean Architecture, SOLID, and Domain-Driven Design principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m) => (
            <div key={m.title} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-3">
              <h2 className="text-lg font-bold text-slate-900">{m.title}</h2>
              <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <MarketingFooter />
    </div>
  );
}
