'use client';

import React from 'react';
import Link from 'next/link';

export function MarketingFooter() {
  return (
    <footer className="bg-[#111827] text-slate-400 border-t border-white/10 py-12 px-6 md:px-12 text-xs">
      <div className="max-w-[1536px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2 space-y-3">
          <span className="font-bold text-xl text-slate-100 tracking-tight block">
            SwitchPilot<span className="text-blue-500">.io</span>
          </span>
          <p className="text-slate-400 max-w-sm leading-relaxed text-[11px]">
            Enterprise Network Automation, Multi-Vendor Discovery, Real-Time Monitoring & Desktop Engine. Built for NOC Operators, MSPs & Network Engineers.
          </p>
          <span className="text-[10px] text-slate-500 block">
            © 2026 SwitchPilot Inc. All rights reserved.
          </span>
        </div>

        <div className="space-y-2">
          <span className="font-bold text-slate-200 uppercase tracking-widest text-[10px] block">Product</span>
          <ul className="space-y-1.5 text-[11px]">
            <li><Link href="/features" className="hover:text-slate-200 transition-colors">Features</Link></li>
            <li><Link href="/download" className="hover:text-slate-200 transition-colors">Download App</Link></li>
            <li><Link href="/pricing" className="hover:text-slate-200 transition-colors">Pricing Tiers</Link></li>
            <li><Link href="/marketplace-store" className="hover:text-slate-200 transition-colors">Plugin Marketplace</Link></li>
          </ul>
        </div>

        <div className="space-y-2">
          <span className="font-bold text-slate-200 uppercase tracking-widest text-[10px] block">Developers</span>
          <ul className="space-y-1.5 text-[11px]">
            <li><Link href="/docs" className="hover:text-slate-200 transition-colors">Documentation</Link></li>
            <li><Link href="/docs/api-explorer" className="hover:text-slate-200 transition-colors">API Explorer</Link></li>
            <li><Link href="/docs/developer" className="hover:text-slate-200 transition-colors">Plugin SDK</Link></li>
            <li><Link href="/docs/architecture" className="hover:text-slate-200 transition-colors">Architecture Map</Link></li>
          </ul>
        </div>

        <div className="space-y-2">
          <span className="font-bold text-slate-200 uppercase tracking-widest text-[10px] block">Company & Legal</span>
          <ul className="space-y-1.5 text-[11px]">
            <li><Link href="/about" className="hover:text-slate-200 transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-slate-200 transition-colors">Contact Sales</Link></li>
            <li><Link href="/status-page" className="hover:text-slate-200 transition-colors">System Status</Link></li>
            <li><Link href="/privacy" className="hover:text-slate-200 transition-colors">Privacy Policy (KVKK)</Link></li>
            <li><Link href="/terms" className="hover:text-slate-200 transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
