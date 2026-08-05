'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TermsOfServicePage;
const react_1 = __importDefault(require("react"));
const MarketingNavbar_1 = require("../../components/marketing/hero/MarketingNavbar");
const MarketingFooter_1 = require("../../components/marketing/MarketingFooter");
function TermsOfServicePage() {
    return (<div className="min-h-screen bg-[#f0f0f0] text-slate-800 font-sans">
      <div className="bg-[#111827] text-white">
        <MarketingNavbar_1.MarketingNavbar />
      </div>

      <div className="py-16 px-6 max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-slate-900">Terms of Service</h1>
        <div className="bg-white p-8 rounded-2xl border border-slate-200 text-xs text-slate-700 leading-relaxed space-y-4">
          <p>Effective Date: August 5, 2026</p>
          <h2 className="text-sm font-bold text-slate-900">1. Acceptance of Terms</h2>
          <p>By accessing switchpilot.io or deploying SwitchPilot software, you agree to comply with these Enterprise Terms of Service.</p>
        </div>
      </div>

      <MarketingFooter_1.MarketingFooter />
    </div>);
}
