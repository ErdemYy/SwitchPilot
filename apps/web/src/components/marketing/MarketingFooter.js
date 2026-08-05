'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketingFooter = MarketingFooter;
const react_1 = __importDefault(require("react"));
const link_1 = __importDefault(require("next/link"));
function MarketingFooter() {
    return (<footer className="bg-[#111827] text-slate-400 border-t border-white/10 py-12 px-6 md:px-12 text-xs">
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
            <li><link_1.default href="/features" className="hover:text-slate-200 transition-colors">Features</link_1.default></li>
            <li><link_1.default href="/download" className="hover:text-slate-200 transition-colors">Download App</link_1.default></li>
            <li><link_1.default href="/pricing" className="hover:text-slate-200 transition-colors">Pricing Tiers</link_1.default></li>
            <li><link_1.default href="/marketplace-store" className="hover:text-slate-200 transition-colors">Plugin Marketplace</link_1.default></li>
          </ul>
        </div>

        <div className="space-y-2">
          <span className="font-bold text-slate-200 uppercase tracking-widest text-[10px] block">Developers</span>
          <ul className="space-y-1.5 text-[11px]">
            <li><link_1.default href="/docs" className="hover:text-slate-200 transition-colors">Documentation</link_1.default></li>
            <li><link_1.default href="/docs/api-explorer" className="hover:text-slate-200 transition-colors">API Explorer</link_1.default></li>
            <li><link_1.default href="/docs/developer" className="hover:text-slate-200 transition-colors">Plugin SDK</link_1.default></li>
            <li><link_1.default href="/docs/architecture" className="hover:text-slate-200 transition-colors">Architecture Map</link_1.default></li>
          </ul>
        </div>

        <div className="space-y-2">
          <span className="font-bold text-slate-200 uppercase tracking-widest text-[10px] block">Company & Legal</span>
          <ul className="space-y-1.5 text-[11px]">
            <li><link_1.default href="/about" className="hover:text-slate-200 transition-colors">About Us</link_1.default></li>
            <li><link_1.default href="/contact" className="hover:text-slate-200 transition-colors">Contact Sales</link_1.default></li>
            <li><link_1.default href="/status-page" className="hover:text-slate-200 transition-colors">System Status</link_1.default></li>
            <li><link_1.default href="/privacy" className="hover:text-slate-200 transition-colors">Privacy Policy (KVKK)</link_1.default></li>
            <li><link_1.default href="/terms" className="hover:text-slate-200 transition-colors">Terms of Service</link_1.default></li>
          </ul>
        </div>
      </div>
    </footer>);
}
