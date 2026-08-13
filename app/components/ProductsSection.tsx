"use client";

import React from "react";

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="relative py-24 bg-white text-slate-900 border-t border-slate-200 overflow-hidden min-h-[300px]"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FC6100]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-changa text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-slate-900">
            <span className="text-[#FC6100]">PRODUCTS</span>
          </h2>
        </div>
      </div>
    </section>
  );
}

