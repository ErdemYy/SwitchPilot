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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketingNavbar = MarketingNavbar;
const react_1 = __importStar(require("react"));
const framer_motion_1 = require("framer-motion");
const lucide_react_1 = require("lucide-react");
const link_1 = __importDefault(require("next/link"));
function MarketingNavbar() {
    const [lang, setLang] = (0, react_1.useState)('EN');
    const navItems = [
        { label: 'Ecosystem', href: '/features', hasDropdown: false },
        { label: 'Platform', href: '/download', hasDropdown: true },
        { label: 'Developers', href: '/docs/developer', hasDropdown: false },
        { label: 'Pricing', href: '/pricing', hasDropdown: true },
    ];
    return (<nav className="flex items-center justify-between py-6 px-6 md:px-10 w-full relative z-20">
      {/* Left Side (hidden spacer for centering) */}
      <div className="flex-1 hidden md:flex items-center space-x-3">
        <link_1.default href="/" className="flex items-center space-x-2">
          <span className="font-black text-2xl tracking-tight text-[rgba(30,50,90,0.95)]">
            SwitchPilot<span className="text-blue-600">.io</span>
          </span>
        </link_1.default>
      </div>

      {/* Center Menu */}
      <ul className="hidden md:flex items-center gap-8 text-[rgb(45,45,45)] font-normal text-sm">
        {navItems.map((item) => (<li key={item.label}>
            <link_1.default href={item.href} className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group">
              <span>{item.label}</span>
              {item.hasDropdown && (<lucide_react_1.ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5"/>)}
            </link_1.default>
          </li>))}
      </ul>

      {/* Mobile Logo */}
      <div className="md:hidden">
        <span className="font-bold tracking-tighter text-xl text-[rgba(30,50,90,0.9)]">
          SwitchPilot
        </span>
      </div>

      {/* Right Button & Language Toggle */}
      <div className="flex-1 flex justify-end items-center space-x-3">
        <button onClick={() => setLang(lang === 'EN' ? 'TR' : 'EN')} className="flex items-center space-x-1 text-xs font-semibold px-2.5 py-1.5 rounded-full bg-white/40 border border-white/20 text-[rgba(30,50,90,0.9)] hover:bg-white/60 transition-colors">
          <lucide_react_1.Globe className="w-3.5 h-3.5"/>
          <span>{lang}</span>
        </button>

        <link_1.default href="/download">
          <framer_motion_1.motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex items-center bg-[rgba(30,50,90,0.85)] text-white rounded-full pl-2 pr-4 md:pr-6 py-1.5 md:py-2 gap-2 md:gap-3 hover:bg-[rgba(30,50,90,1)] transition-colors group shadow-md">
            <div className="bg-white/20 p-1 md:p-1.5 rounded-full flex items-center justify-center">
              <lucide_react_1.ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/>
            </div>
            <span className="text-xs md:text-sm font-normal">Download App</span>
          </framer_motion_1.motion.button>
        </link_1.default>
      </div>
    </nav>);
}
