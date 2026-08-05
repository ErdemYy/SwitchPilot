'use client';

import React from 'react';
import { MarketingNavbar } from '../../components/marketing/hero/MarketingNavbar';
import { MarketingFooter } from '../../components/marketing/MarketingFooter';
import { Badge } from '@switchpilot/ui';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f0f0f0] text-slate-800 font-sans">
      <div className="bg-[#111827] text-white">
        <MarketingNavbar />
      </div>

      <div className="py-16 px-6 max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <Badge variant="info" size="sm">ABOUT SWITCHPILOT</Badge>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            Autonomous Multi-Vendor Network Engineering
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            Founded with the mission to eliminate manual vendor CLI configuration errors, reduce network downtime, and empower enterprise NOC teams with AI-driven network intelligence.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-200 space-y-4 text-xs text-slate-700 leading-relaxed">
          <h2 className="text-lg font-bold text-slate-900">Our Engineering Philosophy</h2>
          <p>
            Enterprise network management software has historically been fragmented, vendor-locked, and prone to human configuration mistakes. SwitchPilot unifies device discovery, canonical configuration translation, real-time telemetry, topology mapping, and automated DAG workflows into a single production-grade platform.
          </p>
          <p>
            Whether deployed in high-availability Kubernetes clusters, cloud SaaS, or air-gapped mission-critical enterprise environments, SwitchPilot ensures safety, auditability, and zero configuration drift.
          </p>
        </div>
      </div>

      <MarketingFooter />
    </div>
  );
}
