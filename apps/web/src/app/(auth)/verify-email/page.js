'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = VerifyEmailPage;
const react_1 = __importDefault(require("react"));
function VerifyEmailPage() {
    return (<div className="min-h-screen bg-[#0B1220] flex flex-col items-center justify-center p-4 font-sans text-slate-100">
      <div className="w-full max-w-md bg-[#111827] border border-white/10 rounded-xl p-8 shadow-2xl space-y-6 text-center">
        <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-full flex items-center justify-center text-xl mx-auto border border-blue-500/30">
          ✉️
        </div>
        <h1 className="text-2xl font-bold tracking-tight">Verify Your Email</h1>
        <p className="text-xs text-slate-400">
          We sent a verification link to your email address. Please click the link in the email to activate your user account.
        </p>
        <button onClick={() => alert('Resent verification email.')} className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 rounded-lg border border-white/10 transition-colors">
          Resend Verification Email
        </button>
      </div>
    </div>);
}
