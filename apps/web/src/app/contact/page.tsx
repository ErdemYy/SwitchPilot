'use client';

import React, { useState } from 'react';
import { MarketingNavbar } from '../../components/marketing/hero/MarketingNavbar';
import { MarketingFooter } from '../../components/marketing/MarketingFooter';
import { Button, Badge } from '@switchpilot/ui';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f0f0f0] text-slate-800 font-sans">
      <div className="bg-[#111827] text-white">
        <MarketingNavbar />
      </div>

      <div className="py-16 px-6 max-w-xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <Badge variant="info">ENTERPRISE SALES & DEMO</Badge>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Contact Enterprise Solutions Team
          </h1>
          <p className="text-slate-600 text-xs leading-relaxed">
            Schedule an interactive product demo, request air-gapped package licensing, or inquire about MSP partner pricing.
          </p>
        </div>

        {submitted ? (
          <div className="bg-emerald-950/20 border border-emerald-800 p-6 rounded-2xl text-center space-y-2">
            <span className="text-3xl">✅</span>
            <h2 className="font-bold text-emerald-900 text-base">Request Submitted</h2>
            <p className="text-xs text-emerald-700">An Enterprise Solutions Architect will reach out within 2 business hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-4 text-xs">
            <div>
              <label className="block text-slate-700 font-bold mb-1">Full Name</label>
              <input required type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800" />
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-1">Work Email</label>
              <input required type="email" placeholder="john@enterprise.com" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800" />
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-1">Company / Organization</label>
              <input required type="text" placeholder="Acme Enterprise Inc." className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800" />
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-1">Project Details / Estimated Switches</label>
              <textarea rows={3} placeholder="We manage ~250 Cisco & Aruba switches across 3 data centers..." className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800" />
            </div>

            <Button variant="primary" size="md" className="w-full">
              🚀 Submit Enterprise Inquiry
            </Button>
          </form>
        )}
      </div>

      <MarketingFooter />
    </div>
  );
}
