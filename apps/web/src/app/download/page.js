'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DownloadCenterPage;
const react_1 = __importDefault(require("react"));
const MarketingNavbar_1 = require("../../components/marketing/hero/MarketingNavbar");
const MarketingFooter_1 = require("../../components/marketing/MarketingFooter");
const ui_1 = require("@switchpilot/ui");
function DownloadCenterPage() {
    const downloads = [
        {
            os: 'Windows',
            icon: '🪟',
            version: 'v1.0.0 (Release Candidate)',
            builds: [
                { arch: 'Windows x64 Installer (.msi)', size: '12.4 MB', sha256: '3b689a718c949826f43e41e4649b934ca495991b7852b855' },
                { arch: 'Windows ARM64 Installer (.msi)', size: '11.8 MB', sha256: 'e89a4218f3c78201a91e543b81120019284fa212918112ab' },
                { arch: 'Windows Portable Standalone (.exe)', size: '14.2 MB', sha256: '71a4f00119284019281ba4919208124912091240912411aa' },
            ],
        },
        {
            os: 'macOS',
            icon: '🍎',
            version: 'v1.0.0 (Release Candidate)',
            builds: [
                { arch: 'Apple Silicon (M1/M2/M3) DMG', size: '14.1 MB', sha256: 'a12b34c56d78e90f1234567890abcdef1234567890abcdef' },
                { arch: 'Intel Core x64 DMG', size: '15.0 MB', sha256: 'f987654321fedcba0987654321fedcba0987654321fedcba' },
                { arch: 'Universal Binary (.pkg)', size: '28.5 MB', sha256: '99887766554433221100aabbccddeeff9988776655443322' },
            ],
        },
        {
            os: 'Linux',
            icon: '🐧',
            version: 'v1.0.0 (Release Candidate)',
            builds: [
                { arch: 'Linux AppImage (.AppImage)', size: '16.2 MB', sha256: '11223344556677889900aabbccddeeff1122334455667788' },
                { arch: 'Debian / Ubuntu Package (.deb)', size: '12.8 MB', sha256: 'ffeeddccbbaa00998877665544332211ffeeddccbbaa0099' },
                { arch: 'RedHat / RHEL Package (.rpm)', size: '13.1 MB', sha256: '00112233445566778899aabbccddeeff0011223344556677' },
            ],
        },
    ];
    return (<div className="min-h-screen bg-[#f0f0f0] text-slate-800 font-sans">
      <div className="bg-[#111827] text-white">
        <MarketingNavbar_1.MarketingNavbar />
      </div>

      <div className="py-16 px-6 max-w-[1536px] mx-auto space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <ui_1.Badge variant="primary" size="sm">OFFICIAL DOWNLOAD CENTER</ui_1.Badge>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            Download SwitchPilot Desktop App
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            Download native desktop binaries for Windows x64, Windows ARM64, macOS, and Linux with full offline SQLite storage and Windows DPAPI credential vault integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {downloads.map((d) => (<div key={d.os} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-3xl">{d.icon}</span>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">{d.os}</h2>
                  <span className="text-[10px] text-slate-500 font-mono">{d.version}</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                {d.builds.map((b) => (<div key={b.arch} className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-slate-800">{b.arch}</span>
                      <span className="text-[10px] text-slate-500 font-mono">{b.size}</span>
                    </div>
                    <div className="text-[9px] text-slate-400 font-mono truncate">
                      SHA256: {b.sha256}
                    </div>
                    <ui_1.Button variant="primary" size="sm" onClick={() => alert(`Downloading ${b.arch}...`)}>
                      ⬇ Download Binary
                    </ui_1.Button>
                  </div>))}
              </div>
            </div>))}
        </div>
      </div>

      <MarketingFooter_1.MarketingFooter />
    </div>);
}
