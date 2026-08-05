'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottomLeftCard = BottomLeftCard;
const react_1 = __importDefault(require("react"));
const framer_motion_1 = require("framer-motion");
const lucide_react_1 = require("lucide-react");
const link_1 = __importDefault(require("next/link"));
function BottomLeftCard() {
    return (<framer_motion_1.motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="absolute bottom-28 right-4 left-auto md:left-6 md:right-auto md:bottom-6 lg:bottom-10 lg:left-10 p-3 md:p-4 lg:p-5 rounded-[1.2rem] md:rounded-[1.5rem] lg:rounded-[2.2rem] bg-white/30 backdrop-blur-xl flex flex-col gap-2 lg:gap-3 min-w-[140px] md:min-w-[150px] lg:min-w-[180px] w-fit shadow-lg border border-white/20 z-20">
      <div className="flex flex-col">
        <span className="text-2xl md:text-3xl font-normal text-[rgba(30,50,90,0.95)] tracking-tight">
          142+
        </span>
        <span className="text-[10px] md:text-[12px] font-normal text-[rgba(30,50,90,0.7)] uppercase tracking-wider">
          Active Switches Managed
        </span>
      </div>

      <link_1.default href="/contact">
        <framer_motion_1.motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex items-center bg-white rounded-full pl-1.5 pr-5 py-1.5 gap-2 hover:bg-white/90 transition-colors self-start group shadow-sm">
          <div className="bg-[rgba(30,50,90,0.1)] p-1 rounded-full flex items-center justify-center">
            <lucide_react_1.ArrowUpRight className="w-4 h-4 text-[rgba(30,50,90,0.9)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/>
          </div>
          <span className="text-[14px] font-normal text-[rgba(30,50,90,0.9)]">
            Book Enterprise Demo
          </span>
        </framer_motion_1.motion.button>
      </link_1.default>
    </framer_motion_1.motion.div>);
}
