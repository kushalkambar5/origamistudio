"use client";

import React from "react";

export default function PortfolioCarousel() {
  return (
    <section
      id="our-work"
      className="relative py-24 bg-slate-50 text-slate-900 border-t border-slate-200 overflow-hidden min-h-[300px]"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#ff5e00]/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="w-full relative z-10">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto px-4">
          <h2 className="font-changa text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-slate-900 leading-none">
            <span className="text-[#ff5e00]">Our Work</span>
          </h2>
        </div>
      </div>
    </section>
  );
}

