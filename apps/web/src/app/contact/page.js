'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ContactPage;
const react_1 = __importStar(require("react"));
const MarketingNavbar_1 = require("../../components/marketing/hero/MarketingNavbar");
const MarketingFooter_1 = require("../../components/marketing/MarketingFooter");
const ui_1 = require("@switchpilot/ui");
function ContactPage() {
    const [submitted, setSubmitted] = (0, react_1.useState)(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };
    return (<div className="min-h-screen bg-[#f0f0f0] text-slate-800 font-sans">
      <div className="bg-[#111827] text-white">
        <MarketingNavbar_1.MarketingNavbar />
      </div>

      <div className="py-16 px-6 max-w-xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <ui_1.Badge variant="primary" size="sm">ENTERPRISE SALES & DEMO</ui_1.Badge>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Contact Enterprise Solutions Team
          </h1>
          <p className="text-slate-600 text-xs leading-relaxed">
            Schedule an interactive product demo, request air-gapped package licensing, or inquire about MSP partner pricing.
          </p>
        </div>

        {submitted ? (<div className="bg-emerald-950/20 border border-emerald-800 p-6 rounded-2xl text-center space-y-2">
            <span className="text-3xl">✅</span>
            <h2 className="font-bold text-emerald-900 text-base">Request Submitted</h2>
            <p className="text-xs text-emerald-700">An Enterprise Solutions Architect will reach out within 2 business hours.</p>
          </div>) : (<form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-4 text-xs">
            <div>
              <label className="block text-slate-700 font-bold mb-1">Full Name</label>
              <input required type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800"/>
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-1">Work Email</label>
              <input required type="email" placeholder="john@enterprise.com" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800"/>
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-1">Company / Organization</label>
              <input required type="text" placeholder="Acme Enterprise Inc." className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800"/>
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-1">Project Details / Estimated Switches</label>
              <textarea rows={3} placeholder="We manage ~250 Cisco & Aruba switches across 3 data centers..." className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800"/>
            </div>

            <ui_1.Button variant="primary" size="md" className="w-full">
              🚀 Submit Enterprise Inquiry
            </ui_1.Button>
          </form>)}
      </div>

      <MarketingFooter_1.MarketingFooter />
    </div>);
}
