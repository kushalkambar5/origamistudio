"use client";

import React from "react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 bg-white border-t border-slate-200 text-slate-900 overflow-hidden min-h-[300px]"
    >
      {/* Ambient Radial Lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#FC6100]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Headline */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-changa text-3xl sm:text-5xl font-extrabold uppercase leading-tight tracking-tight text-slate-900">
            <span className="text-[#FC6100]">About US</span>
          </h2>
        </div>
      </div>
    </section>
  );
}

