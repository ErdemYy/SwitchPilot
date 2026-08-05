'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroBadge = HeroBadge;
const react_1 = __importDefault(require("react"));
const framer_motion_1 = require("framer-motion");
const lucide_react_1 = require("lucide-react");
function HeroBadge() {
    return (<framer_motion_1.motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/20 mx-auto mb-3 w-fit shadow-sm">
      <lucide_react_1.Sparkles className="w-4 h-4 text-[rgba(30,50,90,0.8)]"/>
      <span className="text-[14px] font-normal text-[rgba(30,50,90,0.9)]">
        Autonomous Network Engine v1.0 RC
      </span>
    </framer_motion_1.motion.div>);
}
