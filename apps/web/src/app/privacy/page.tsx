'use client';

import React from 'react';
import { MarketingNavbar } from '../../components/marketing/hero/MarketingNavbar';
import { MarketingFooter } from '../../components/marketing/MarketingFooter';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#f0f0f0] text-slate-800 font-sans">
      <div className="bg-[#111827] text-white">
        <MarketingNavbar />
      </div>

      <div className="py-16 px-6 max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-slate-900">Privacy Policy (KVKK & GDPR Compliant)</h1>
        <div className="bg-white p-8 rounded-2xl border border-slate-200 text-xs text-slate-700 leading-relaxed space-y-4">
          <p>Effective Date: August 5, 2026</p>
          <h2 className="text-sm font-bold text-slate-900">1. Information We Collect</h2>
          <p>SwitchPilot collects minimal operational telemetry metrics and user account data strictly necessary to deliver multi-vendor network management services.</p>
          <h2 className="text-sm font-bold text-slate-900">2. Local Storage & Desktop Security</h2>
          <p>All local database credentials and session tokens on SwitchPilot Desktop are encrypted via Windows DPAPI hardware keys or SQLCipher AES-256 databases.</p>
        </div>
      </div>

      <MarketingFooter />
    </div>
  );
}
