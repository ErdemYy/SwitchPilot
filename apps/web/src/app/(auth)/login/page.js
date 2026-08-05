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
exports.default = LoginPage;
const react_1 = __importStar(require("react"));
function LoginPage() {
    const [email, setEmail] = (0, react_1.useState)('admin@switchpilot.io');
    const [password, setPassword] = (0, react_1.useState)('Password123!');
    const [rememberMe, setRememberMe] = (0, react_1.useState)(true);
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Logging in as ${email}... Redirecting to Dashboard NOC.`);
    };
    return (<div className="min-h-screen bg-[#0B1220] flex flex-col items-center justify-center p-4 font-sans text-slate-100">
      <div className="w-full max-w-md bg-[#111827] border border-white/10 rounded-xl p-8 shadow-2xl space-y-6">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-extrabold text-2xl mx-auto shadow-lg shadow-blue-600/30">
            S
          </div>
          <h1 className="text-2xl font-bold tracking-tight">
            Sign in to <span className="text-blue-500">SwitchPilot</span>
          </h1>
          <p className="text-xs text-slate-400">Enterprise Multi-Vendor Network Automation Platform</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">Work Email</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 bg-[#172033] border border-white/10 rounded-lg text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"/>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-medium text-slate-300">Password</label>
              <a href="/forgot-password" className="text-xs text-blue-400 hover:underline">
                Forgot password?
              </a>
            </div>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 bg-[#172033] border border-white/10 rounded-lg text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"/>
          </div>

          <div className="flex items-center justify-between text-xs pt-1">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className="rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-0"/>
              <span className="text-slate-300">Remember this device</span>
            </label>
          </div>

          <button type="submit" className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 font-semibold text-sm text-white rounded-lg shadow-lg transition-colors">
            Sign In
          </button>
        </form>

        {/* Footer */}
        <div className="text-center text-xs text-slate-400 pt-2 border-t border-white/5">
          Don't have an organization workspace?{' '}
          <a href="/register" className="text-blue-400 font-medium hover:underline">
            Register Organization
          </a>
        </div>
      </div>
    </div>);
}
