'use client';

import React from 'react';
import { Hero } from '../../components/marketing/hero/Hero';
import { MarketingFooter } from '../../components/marketing/MarketingFooter';
import { CookieBanner } from '../../components/marketing/CookieBanner';
import { Button, Badge } from '@switchpilot/ui';
import Link from 'next/link';

export default function MarketingLandingPage() {
  const featureHighlights = [
    { title: 'Canonical Configuration Model (CCM)', icon: '⚡', desc: 'Define neutral network configurations (VLANs, Hostname, AAA, Syslog, BGP) and auto-translate into Cisco, Aruba, Juniper, Huawei & Mikrotik CLI strings.' },
    { title: 'Real-Time NOC Telemetry Polling', icon: '📊', desc: 'Normalize 19 standard metric types across SNMP, gNMI, Syslog, and streaming telemetry with sub-second correlation.' },
    { title: 'Interactive Multi-Layer Topology Engine', icon: '🌐', desc: 'Auto-discover L1/L2/L3 topology graphs with force-directed layout algorithms and Single Point of Failure (SPOF) blast radius analysis.' },
    { title: 'Autonomous AI Network Engineer', icon: '🤖', desc: 'Structured DAG intent planner generating validated CCM payloads with safety policy enforcement.' },
    { title: 'Offline Encrypted Desktop Runtime', icon: '💻', desc: 'Native Windows x64/ARM64 desktop application with SQLCipher AES-256 local database and DPAPI vault key storage.' },
    { title: 'Enterprise Plugin Marketplace', icon: '🧩', desc: 'Extend platform capabilities with sandboxed custom translators, telemetry collectors, and widget components.' },
  ];

  return (
    <div className="min-h-screen bg-[#f0f0f0] text-slate-800 font-sans selection:bg-blue-500 selection:text-white">
      {/* Premium Hero Section */}
      <Hero />

      {/* Feature Showcase Grid */}
      <section className="py-20 px-6 max-w-[1536px] mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="info">ENTERPRISE PLATFORM CAPABILITIES</Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1E293B]">
            Engineered for Modern Enterprise NOCs
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Eliminate vendor lock-in and manual CLI syntax errors with automated multi-vendor translation and real-time observability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureHighlights.map((f) => (
            <div
              key={f.title}
              className="p-6 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-300 transition-all space-y-3"
            >
              <span className="text-3xl block">{f.icon}</span>
              <h3 className="text-lg font-bold text-slate-800">{f.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Download Center CTA Banner */}
      <section className="py-16 px-6 max-w-[1536px] mx-auto">
        <div className="bg-[#111827] text-white rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 max-w-xl">
            <Badge variant="success">DESKTOP READY</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Download SwitchPilot Desktop for Windows, macOS & Linux
            </h2>
            <p className="text-slate-400 text-xs leading-relaxed">
              Native offline capability, SQLCipher encrypted SQLite local database, and Windows DPAPI credential vault integration.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Link href="/download">
              <Button variant="primary" size="lg">
                💻 Download Windows x64 / ARM64
              </Button>
            </Link>
            <Link href="/docs">
              <Button variant="secondary" size="lg">
                📖 View Documentation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Marketing Footer */}
      <MarketingFooter />
      <CookieBanner />
    </div>
  );
}
