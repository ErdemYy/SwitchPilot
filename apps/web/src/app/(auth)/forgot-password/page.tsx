'use client';

import React, { useState } from 'react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[#0B1220] flex flex-col items-center justify-center p-4 font-sans text-slate-100">
      <div className="w-full max-w-md bg-[#111827] border border-white/10 rounded-xl p-8 shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">Reset Password</h1>
          <p className="text-xs text-slate-400">Enter your work email to receive password reset link</p>
        </div>

        {sent ? (
          <div className="p-4 bg-emerald-950/40 border border-emerald-800 rounded-lg text-emerald-300 text-xs text-center space-y-2">
            <p className="font-semibold">Reset Email Sent</p>
            <p className="text-[11px] opacity-80">Check your inbox for password reset instructions.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Work Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full px-3 py-2 bg-[#172033] border border-white/10 rounded-lg text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 font-semibold text-sm text-white rounded-lg shadow-lg transition-colors"
            >
              Send Reset Link
            </button>
          </form>
        )}

        <div className="text-center text-xs">
          <a href="/login" className="text-slate-400 hover:text-slate-200">
            ← Back to Sign In
          </a>
        </div>
      </div>
    </div>
  );
}
