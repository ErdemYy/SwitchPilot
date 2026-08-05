'use client';

import React from 'react';
import { MarketingNavbar } from '../../components/marketing/hero/MarketingNavbar';
import { MarketingFooter } from '../../components/marketing/MarketingFooter';
import { Button, Badge } from '@switchpilot/ui';
import Link from 'next/link';

export default function PricingPage() {
  const tiers = [
    { name: 'Community', price: '$0', desc: 'Ideal for home labs and network hobbyists.', features: ['Up to 10 Managed Devices', 'Canonical Config Translator', 'Basic SNMP Telemetry', 'Community Forum Support'] },
    { name: 'Pro', price: '$49/mo', desc: 'Built for network engineers and IT admins.', features: ['Up to 100 Managed Devices', 'Full Multi-Vendor Engine', 'Tauri & Electron Desktop App', 'Offline Encrypted SQLite', 'Email & Discord Support'] },
    { name: 'Business', price: '$199/mo', desc: 'Designed for growing IT teams & enterprise NOCs.', features: ['Up to 500 Managed Devices', 'AI Network Engineer Intent Planner', 'Automated DAG Workflows', 'Single Point of Failure (SPOF) Engine', '24/7 Priority Support'] },
    { name: 'Enterprise', price: 'Custom', desc: 'For global enterprises & air-gapped mission-critical networks.', features: ['Unlimited Managed Devices', 'OIDC / SAML / Azure AD SSO', 'Air-Gapped Installation Package', 'Windows DPAPI Vault & mTLS', 'Dedicated Solutions Architect'] },
    { name: 'MSP Partner', price: 'Custom', desc: 'Multi-tenant infrastructure for Managed Service Providers.', features: ['Multi-Tenant & Partner Isolation', 'Audited Customer Impersonation', 'Automated Usage Metering', 'Stripe Billing & Whitelabel', 'SLA 99.99% Guarantee'] },
  ];

  return (
    <div className="min-h-screen bg-[#f0f0f0] text-slate-800 font-sans">
      <div className="bg-[#111827] text-white">
        <MarketingNavbar />
      </div>

      <div className="py-16 px-6 max-w-[1536px] mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="info">TRANSPARENT PRICING</Badge>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            Flexible Plans for Every Scale
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            From free open-source community deployments to air-gapped global enterprise clusters and MSP multi-tenant platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {tiers.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <h2 className="text-lg font-bold text-slate-900">{t.name}</h2>
                <div className="text-3xl font-black text-slate-900">{t.price}</div>
                <p className="text-[11px] text-slate-500 min-h-[36px] leading-relaxed">{t.desc}</p>
                <div className="border-t border-slate-100 pt-3 space-y-2">
                  {t.features.map((f, i) => (
                    <div key={i} className="flex items-start space-x-1.5 text-[11px] text-slate-700">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link href="/contact">
                <Button variant={t.name === 'Enterprise' ? 'primary' : 'secondary'} size="sm" className="w-full">
                  {t.price === '$0' ? 'Get Started' : 'Subscribe Now'}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <MarketingFooter />
    </div>
  );
}
