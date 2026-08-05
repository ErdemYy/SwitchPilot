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
exports.CookieBanner = CookieBanner;
const react_1 = __importStar(require("react"));
function CookieBanner() {
    const [visible, setVisible] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const consent = localStorage.getItem('sp_cookie_consent');
        if (!consent) {
            setVisible(true);
        }
    }, []);
    const handleAccept = () => {
        localStorage.setItem('sp_cookie_consent', 'accepted');
        setVisible(false);
    };
    if (!visible)
        return null;
    return (<div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 max-w-md bg-[#111827] border border-white/10 p-4 rounded-xl shadow-2xl z-50 text-xs text-slate-300 space-y-3">
      <div className="flex items-center justify-between">
        <span className="font-bold text-slate-100 text-sm">Cookie & Privacy Notice</span>
        <button onClick={() => setVisible(false)} className="text-slate-500 hover:text-slate-300">✕</button>
      </div>
      <p className="text-[11px] text-slate-400 leading-relaxed">
        SwitchPilot uses essential cookies to ensure secure authentication, telemetry analytics, and user preferences in compliance with KVKK & GDPR.
      </p>
      <div className="flex items-center space-x-2 pt-1">
        <button onClick={handleAccept} className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg font-semibold text-[11px] transition-colors">
          Accept All Cookies
        </button>
        <button onClick={() => setVisible(false)} className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg text-[11px] transition-colors">
          Essential Only
        </button>
      </div>
    </div>);
}
