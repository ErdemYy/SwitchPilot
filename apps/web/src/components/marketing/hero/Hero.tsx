'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MarketingNavbar } from './MarketingNavbar';
import { HeroBadge } from './HeroBadge';
import { BottomLeftCard } from './BottomLeftCard';
import { BottomRightCorner } from './BottomRightCorner';

export function Hero() {
  return (
    <div className="w-full h-screen flex items-center justify-center p-3 md:p-5 bg-[#f0f0f0]">
      <section className="relative w-full max-w-[1536px] h-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-none flex flex-col items-center bg-white/10 group">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-[65%] lg:object-center z-0 pointer-events-none"
        >
          <source
            src="https://res.cloudinary.com/jlr1pa3m/video/upload/v1785915278/Site_switch_konfig%C3%BCrasyonu_arka___202608051031_nwz3ot.mp4"
            type="video/mp4"
          />
        </video>

        {/* Glassmorphic Overlay for Contrast */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] z-0 pointer-events-none" />

        {/* Content Layer */}
        <div className="relative z-10 w-full h-full flex flex-col items-center">
          <MarketingNavbar />

          {/* Text Container */}
          <div className="w-full flex flex-col items-center pt-8 px-6 text-center max-w-4xl">
            <HeroBadge />

            <motion.h1
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-normal text-[#2A303C] mb-3 tracking-tight leading-[1.05]"
            >
              Autonomous Multi-Vendor Network Intelligence
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg text-[#4A505E] opacity-90 leading-relaxed max-w-2xl font-normal"
            >
              Unified Device Inventory, Real-Time Telemetry, Topology Mapping & AI-Driven Configuration Execution across Cisco, Aruba, Juniper, Huawei & Mikrotik.
            </motion.p>
          </div>

          <BottomLeftCard />
          <BottomRightCorner />
        </div>
      </section>
    </div>
  );
}
