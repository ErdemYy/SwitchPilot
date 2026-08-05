'use client';

import React from 'react';
import { AppShell } from '../../layouts/AppShell';
import { Card, Button, Badge } from '@switchpilot/ui';

export default function TestingDashboardPage() {


  const coverageMetrics = {
    totalCoveragePct: 96.4,
    backendCoveragePct: 97.8,
    frontendCoveragePct: 95.2,
    desktopCoveragePct: 96.1,
  };

  const testSuites = [
    { name: 'Pytest Backend Unit Tests', category: 'UNIT', total: 420, passed: 420, failed: 0, duration: '4.2s', status: 'PASSED' },
    { name: 'Vitest Frontend Components', category: 'UNIT', total: 310, passed: 310, failed: 0, duration: '2.8s', status: 'PASSED' },
    { name: 'API Contract & OpenAPI Drift', category: 'CONTRACT', total: 65, passed: 65, failed: 0, duration: '1.1s', status: 'PASSED' },
    { name: 'Playwright Web E2E Suite', category: 'E2E', total: 85, passed: 85, failed: 0, duration: '28.4s', status: 'PASSED' },
    { name: 'Playwright Electron Desktop E2E', category: 'DESKTOP', total: 45, passed: 45, failed: 0, duration: '19.1s', status: 'PASSED' },
    { name: 'OWASP Top 10 Security Suite', category: 'SECURITY', total: 110, passed: 110, failed: 0, duration: '6.5s', status: 'PASSED' },
    { name: 'k6 Performance Load & Stress', category: 'PERFORMANCE', total: 12, passed: 12, failed: 0, duration: '60.0s', status: 'PASSED' },
    { name: 'Chaos Fault Injection Suite', category: 'CHAOS', total: 18, passed: 18, failed: 0, duration: '12.0s', status: 'PASSED' },
  ];

  return (
    <AppShell
      currentPath="/testing"
      pageTitle="Enterprise Testing & Quality Dashboard"
      pageSubtitle="Monitor code coverage (target > 95%), automated test suite runs, API contract compatibility, visual regression diffs, and security scans."
      breadcrumbItems={[{ label: 'Platform' }, { label: 'Testing Platform' }]}
      actionButtons={
        <div className="flex items-center space-x-2">
          <Button variant="secondary" size="sm" onClick={() => alert('Exporting Test Coverage Report...')}>
            📊 Coverage Report
          </Button>
          <Button variant="primary" size="sm" onClick={() => alert('Triggering Complete CI/CD Test Pipeline...')}>
            🚀 Run All Suites
          </Button>
        </div>
      }
    >
      {/* Code Coverage Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'Overall Code Coverage', value: `${coverageMetrics.totalCoveragePct}%`, accent: 'text-emerald-400', badge: 'TARGET > 95%' },
          { label: 'Backend (FastAPI / Services)', value: `${coverageMetrics.backendCoveragePct}%`, accent: 'text-blue-400', badge: 'PASSED' },
          { label: 'Frontend (React / Next.js)', value: `${coverageMetrics.frontendCoveragePct}%`, accent: 'text-purple-400', badge: 'PASSED' },
          { label: 'Desktop (Electron / Tauri)', value: `${coverageMetrics.desktopCoveragePct}%`, accent: 'text-cyan-400', badge: 'PASSED' },
        ].map((card) => (
          <div key={card.label} className="bg-[#0f1629] border border-white/5 rounded-xl p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest">{card.label}</span>
              <Badge variant="success" size="sm">{card.badge}</Badge>
            </div>
            <span className={`text-3xl font-black ${card.accent}`}>{card.value}</span>
            <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
              <div className="bg-emerald-500 h-full rounded-full" style={{ width: card.value }} />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Test Suite Summary List */}
        <div className="lg:col-span-8 space-y-4">
          <Card title="Automated Test Suite Execution Status">
            <div className="space-y-2 text-xs">
              {testSuites.map((suite) => (
                <div key={suite.name} className="p-3 bg-slate-950 rounded-lg border border-white/5 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="font-bold text-slate-200 block">{suite.name}</span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      Category: {suite.category} · {suite.passed}/{suite.total} tests passed · Duration: {suite.duration}
                    </span>
                  </div>
                  <Badge variant="success" size="sm">{suite.status}</Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Virtual Device Simulator & Security Status */}
        <div className="lg:col-span-4 space-y-4">
          <Card title="Virtual Device Simulator">
            <div className="space-y-3 text-xs">
              <div className="p-3 bg-slate-950 rounded-lg border border-white/5">
                <span className="font-bold text-emerald-400 block">7 Vendor Drivers Active</span>
                <p className="text-[10px] text-slate-400 mt-1">
                  Simulating CLI prompts, SNMP polling, and gNMI telemetry for Cisco, Juniper, Aruba, Huawei, Mikrotik, HP, and Ubiquiti.
                </p>
              </div>

              <div className="p-3 bg-blue-950/40 border border-blue-800/40 rounded-lg">
                <span className="font-bold text-blue-300 block">OWASP Security Scanner</span>
                <p className="text-[10px] text-slate-400 mt-1">
                  Zero vulnerabilities detected across JWT, RBAC, SQLi, XSS, CSRF, and SSRF suites.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
