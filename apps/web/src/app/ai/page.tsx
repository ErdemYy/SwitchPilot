'use client';

import React, { useState } from 'react';
import { AppShell } from '../../layouts/AppShell';
import { Card, Button, Badge } from '@switchpilot/ui';

export default function AiWorkspacePage() {
  const [prompt, setPrompt] = useState<string>('Create VLAN 20 and configure port 10 as trunk.');
  const [vendor, setVendor] = useState<string>('CISCO');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [hasResponse, setHasResponse] = useState<boolean>(true);

  const mockPlanSteps = [
    { num: 1, name: '1. Intent Detection & RAG Retrieval', desc: 'Identified NATURAL_LANGUAGE_CONFIG intent and retrieved Company VLAN policies.' },
    { num: 2, name: '2. Generated Canonical Config Model (CCM)', desc: 'Created vendor-agnostic CCM for VLAN 20 and Gi1/0/10 Trunk.' },
    { num: 3, name: '3. Policy Compliance Check', desc: 'Verified VLAN ID boundary and corporate naming rules.' },
    { num: 4, name: '4. Vendor Translation Engine', desc: `Translated CCM into ${vendor} CLI commands.` },
    { num: 5, name: '5. Change Risk Analysis', desc: 'Assessed as MEDIUM RISK (STP topology re-convergence).' },
  ];

  const handleSendPrompt = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setHasResponse(true);
    }, 1000);
  };

  return (
    <AppShell
      currentPath="/ai"
      pageTitle="AI Network Engineer Assistant"
      pageSubtitle="AI-powered Network Engineering Assistant deeply integrated via Canonical Configuration Model (CCM), Validation, Policy, Translation, and Risk Analysis."
      breadcrumbItems={[{ label: 'Platform' }, { label: 'AI Workspace' }]}
      actionButtons={
        <div className="flex items-center space-x-2">
          <Button variant="secondary" size="sm" onClick={() => alert('Search RAG Knowledge Base')}>
            🔍 Query RAG Knowledge Base
          </Button>
          <Button variant="primary" size="sm" onClick={() => alert('Submitted AI Change to Approval Queue')}>
            Submit AI Plan to Approval Queue →
          </Button>
        </div>
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: AI Assistant Chat & Prompt Input */}
        <div className="lg:col-span-5 space-y-4">
          <Card title="AI Assistant Conversation Panel">
            <div className="space-y-4 text-xs">
              <div className="p-3 bg-[#111827] rounded-lg border border-white/5 space-y-2">
                <span className="text-[10px] text-blue-400 uppercase font-bold">User Prompt</span>
                <p className="text-slate-200 font-mono text-xs font-semibold">"{prompt}"</p>
              </div>

              <div className="space-y-2">
                <label className="block text-slate-400 font-semibold">Target Hardware Vendor:</label>
                <div className="flex items-center space-x-2">
                  {['CISCO', 'ARUBA', 'JUNIPER', 'HUAWEI'].map((v) => (
                    <button
                      key={v}
                      onClick={() => setVendor(v)}
                      className={`px-3 py-1 rounded text-xs font-bold ${
                        vendor === v ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-slate-400 font-semibold mb-1">Natural Language Prompt:</label>
                <textarea
                  rows={3}
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="w-full bg-[#111827] border border-white/10 rounded p-2.5 text-slate-200 font-mono text-xs focus:outline-none focus:border-blue-500"
                  placeholder="e.g. Create VLAN 20 and set port 10 as trunk..."
                />
              </div>

              <Button
                variant="primary"
                size="sm"
                fullWidth
                disabled={isProcessing}
                onClick={handleSendPrompt}
              >
                {isProcessing ? 'Processing AI Pipeline...' : '⚡ Generate Structured CCM & Translation'}
              </Button>
            </div>
          </Card>

          {/* AI Plan Step Breakdown */}
          <Card title="AI Execution Pipeline Steps">
            <div className="space-y-2.5 text-xs pt-1">
              {mockPlanSteps.map((st) => (
                <div key={st.num} className="p-2.5 bg-slate-900 rounded border border-white/5 space-y-0.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-200">{st.name}</span>
                    <span className="text-emerald-400 text-[10px] font-semibold">PASSED</span>
                  </div>
                  <p className="text-[10px] text-slate-400">{st.desc}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Column: Generated CCM, Live Translation & Risk Panel */}
        <div className="lg:col-span-7 space-y-4">
          {/* Generated CCM Viewer */}
          <Card title="Generated Canonical Configuration Model (CCM) - Zero Raw CLI">
            <div className="relative">
              <pre className="p-4 bg-slate-950 rounded-lg font-mono text-xs text-blue-400 border border-white/10 overflow-x-auto max-h-44">
{`{
  "hostname": "sw-core-fra-01",
  "vlans": [
    { "id": 20, "name": "GUEST_NETWORK" }
  ],
  "interfaces": [
    {
      "name": "Gi1/0/10",
      "mode": "TRUNK",
      "nativeVlanId": 1,
      "allowedVlans": "10,20,100"
    }
  ]
}`}
              </pre>
              <span className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] bg-blue-950 text-blue-300 font-mono border border-blue-800">
                Safety Guarantee: Struct JSON
              </span>
            </div>
          </Card>

          {/* Translated Vendor CLI */}
          <Card title={`Validated ${vendor} Hardware Commands`}>
            <pre className="p-4 bg-slate-950 rounded-lg font-mono text-xs text-emerald-400 border border-white/10 overflow-x-auto">
{`hostname sw-core-fra-01
vlan 20
 name GUEST_NETWORK
interface Gi1/0/10
 switchport mode trunk
 switchport trunk allowed vlan 10,20,100`}
            </pre>
          </Card>

          {/* AI Risk & Compliance Explanation */}
          <Card title="AI Risk & Corporate Policy Explanation">
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between p-3 bg-amber-950/40 border border-amber-800 rounded">
                <div>
                  <span className="font-bold text-amber-300">MEDIUM RISK (Score: 55/100)</span>
                  <p className="text-[11px] text-slate-300 mt-0.5">
                    Trunk VLAN addition on Gi1/0/10 may cause temporary Spanning-Tree (STP) topology re-convergence.
                  </p>
                </div>
                <Badge variant="warning" size="sm">MEDIUM RISK</Badge>
              </div>

              <div className="p-3 bg-slate-900 rounded border border-white/5 text-[11px] text-slate-300">
                <strong>RAG Knowledge Grounding:</strong> Referenced Corporate Policy <i>"VLAN Naming & Uplink Tagging Standards"</i>.
              </div>
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
