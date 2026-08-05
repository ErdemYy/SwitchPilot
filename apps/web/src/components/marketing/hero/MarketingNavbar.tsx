'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowUpRight, Globe } from 'lucide-react';
import Link from 'next/link';

export function MarketingNavbar() {
  const [lang, setLang] = useState<'EN' | 'TR'>('EN');

  const navItems = [
    { label: 'Ecosystem', href: '/features', hasDropdown: false },
    { label: 'Platform', href: '/download', hasDropdown: true },
    { label: 'Developers', href: '/docs/developer', hasDropdown: false },
    { label: 'Pricing', href: '/pricing', hasDropdown: true },
  ];

  return (
    <nav className="flex items-center justify-between py-6 px-6 md:px-10 w-full relative z-20">
      {/* Left Side (hidden spacer for centering) */}
      <div className="flex-1 hidden md:flex items-center space-x-3">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-black text-2xl tracking-tight text-[rgba(30,50,90,0.95)]">
            SwitchPilot<span className="text-blue-600">.io</span>
          </span>
        </Link>
      </div>

      {/* Center Menu */}
      <ul className="hidden md:flex items-center gap-8 text-[rgb(45,45,45)] font-normal text-sm">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group"
            >
              <span>{item.label}</span>
              {item.hasDropdown && (
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              )}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Logo */}
      <div className="md:hidden">
        <span className="font-bold tracking-tighter text-xl text-[rgba(30,50,90,0.9)]">
          SwitchPilot
        </span>
      </div>

      {/* Right Button & Language Toggle */}
      <div className="flex-1 flex justify-end items-center space-x-3">
        <button
          onClick={() => setLang(lang === 'EN' ? 'TR' : 'EN')}
          className="flex items-center space-x-1 text-xs font-semibold px-2.5 py-1.5 rounded-full bg-white/40 border border-white/20 text-[rgba(30,50,90,0.9)] hover:bg-white/60 transition-colors"
        >
          <Globe className="w-3.5 h-3.5" />
          <span>{lang}</span>
        </button>

        <Link href="/download">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center bg-[rgba(30,50,90,0.85)] text-white rounded-full pl-2 pr-4 md:pr-6 py-1.5 md:py-2 gap-2 md:gap-3 hover:bg-[rgba(30,50,90,1)] transition-colors group shadow-md"
          >
            <div className="bg-white/20 p-1 md:p-1.5 rounded-full flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
            <span className="text-xs md:text-sm font-normal">Download App</span>
          </motion.button>
        </Link>
      </div>
    </nav>
  );
}
