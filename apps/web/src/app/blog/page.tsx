'use client';

import React from 'react';
import { MarketingNavbar } from '../../components/marketing/hero/MarketingNavbar';
import { MarketingFooter } from '../../components/marketing/MarketingFooter';
import { Badge } from '@switchpilot/ui';

export default function BlogPage() {
  const posts = [
    { title: 'Why Multi-Vendor Network Automation Requires a Canonical Model', date: 'August 5, 2026', author: 'SwitchPilot Core Architecture Team', readTime: '5 min read', desc: 'How neutral configuration abstraction prevents CLI syntax drift across Cisco IOS-XE, Aruba AOS-CX, and Juniper JunOS.' },
    { title: 'Building a 12MB Native Windows Desktop App with Tauri v2 & Rust', date: 'August 3, 2026', author: 'Desktop Engineering Team', readTime: '8 min read', desc: 'A technical deep-dive into Windows DPAPI vault integration, local SQLCipher AES-256 databases, and offline sync queues.' },
    { title: 'High-Throughput Telemetry Normalization for 10,000+ Switches', date: 'July 28, 2026', author: 'Telemetry & Observability Lead', readTime: '6 min read', desc: 'Normalizing 19 standard metric types across SNMP, gNMI, and Syslog streams with sub-second correlation.' },
  ];

  return (
    <div className="min-h-screen bg-[#f0f0f0] text-slate-800 font-sans">
      <div className="bg-[#111827] text-white">
        <MarketingNavbar />
      </div>

      <div className="py-16 px-6 max-w-[1536px] mx-auto space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="info">ENGINEERING BLOG</Badge>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            Technical Insights & Architecture Deep-Dives
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            Articles written by SwitchPilot software architects, networking engineers, and security researchers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <div key={p.title} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono">
                  <span>{p.date}</span>
                  <span>{p.readTime}</span>
                </div>
                <h2 className="text-lg font-bold text-slate-900 leading-snug">{p.title}</h2>
                <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
              <span className="text-[10px] text-slate-500 font-semibold pt-2">By {p.author}</span>
            </div>
          ))}
        </div>
      </div>

      <MarketingFooter />
    </div>
  );
}
