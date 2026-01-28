"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0B1C2D] text-white/80 overflow-hidden">
      {/* TOP SECTION */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-14 text-center md:text-left">
          {/* CONTACT */}
          <div className="relative md:pr-10">
            <h4 className="text-sm tracking-[0.25em] text-white mb-6">
              CONTACT US
            </h4>
            <p className="text-sm leading-loose text-white/80">
              T. +12 344 0567899 <br />
              M. fidalgo@example.com
            </p>
          </div>

          {/* ADDRESS */}
          <div className="relative md:px-10 md:border-l md:border-r border-white/20">
            <h4 className="text-sm tracking-[0.25em] text-white mb-6">
              ADDRESS
            </h4>
            <p className="text-sm leading-loose text-white/80">
              Piazza Della Signoria, 12 <br />
              21562 · Firenze · Italy
            </p>
          </div>

          {/* OPENING HOURS */}
          <div className="relative md:pl-10">
            <h4 className="text-sm tracking-[0.25em] text-white mb-6">
              OPENING HOURS
            </h4>
            <p className="text-sm leading-loose text-white/80">
              Everyday : From 12.30 To 23.00 <br />
              Kitchen Closes At 22.00
            </p>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="relative flex items-center justify-center">
        <span className="absolute left-0 right-0 h-px bg-white/20" />
        <span
          className="relative z-10 bg-[#0B1C2D] px-6 sm:px-8 text-3xl sm:text-4xl text-white"
          style={{ fontFamily: "var(--font-mrs-saint)" }}
        >
          Blue Door
        </span>
      </div>

      {/* BOTTOM BAR */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* SOCIAL */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-3 text-xs tracking-widest text-white">
            <Link href="#" className="hover:text-white transition">
              PINTEREST
            </Link>
            <span className="text-white/50 hidden sm:inline">◊</span>
            <Link href="#" className="hover:text-white transition">
              FACEBOOK
            </Link>
            <span className="text-white/50 hidden sm:inline">◊</span>
            <Link href="#" className="hover:text-white transition">
              INSTAGRAM
            </Link>
          </div>

          {/* COPYRIGHT */}
          <p className="text-xs tracking-widest text-white/60 text-center uppercase">
            © {year} bluedoor cafe and bistro, ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
