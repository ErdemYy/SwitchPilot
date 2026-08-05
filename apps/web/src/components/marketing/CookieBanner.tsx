'use client';

import React, { useState, useEffect } from 'react';

export function CookieBanner() {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const consent = localStorage.getItem('sp_cookie_consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('sp_cookie_consent', 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 max-w-md bg-[#111827] border border-white/10 p-4 rounded-xl shadow-2xl z-50 text-xs text-slate-300 space-y-3">
      <div className="flex items-center justify-between">
        <span className="font-bold text-slate-100 text-sm">Cookie & Privacy Notice</span>
        <button onClick={() => setVisible(false)} className="text-slate-500 hover:text-slate-300">✕</button>
      </div>
      <p className="text-[11px] text-slate-400 leading-relaxed">
        SwitchPilot uses essential cookies to ensure secure authentication, telemetry analytics, and user preferences in compliance with KVKK & GDPR.
      </p>
      <div className="flex items-center space-x-2 pt-1">
        <button
          onClick={handleAccept}
          className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg font-semibold text-[11px] transition-colors"
        >
          Accept All Cookies
        </button>
        <button
          onClick={() => setVisible(false)}
          className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg text-[11px] transition-colors"
        >
          Essential Only
        </button>
      </div>
    </div>
  );
}
