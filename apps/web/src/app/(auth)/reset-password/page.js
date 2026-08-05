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
exports.default = ResetPasswordPage;
const react_1 = __importStar(require("react"));
function ResetPasswordPage() {
    const [newPassword, setNewPassword] = (0, react_1.useState)('');
    const [confirmPassword, setConfirmPassword] = (0, react_1.useState)('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        alert('Password updated successfully. Redirecting to login.');
    };
    return (<div className="min-h-screen bg-[#0B1220] flex flex-col items-center justify-center p-4 font-sans text-slate-100">
      <div className="w-full max-w-md bg-[#111827] border border-white/10 rounded-xl p-8 shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">Set New Password</h1>
          <p className="text-xs text-slate-400">Must satisfy password security policy criteria</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">New Password</label>
            <input type="password" required value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="w-full px-3 py-2 bg-[#172033] border border-white/10 rounded-lg text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"/>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">Confirm New Password</label>
            <input type="password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full px-3 py-2 bg-[#172033] border border-white/10 rounded-lg text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"/>
          </div>
          <button type="submit" className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 font-semibold text-sm text-white rounded-lg shadow-lg transition-colors">
            Update Password
          </button>
        </form>
      </div>
    </div>);
}
