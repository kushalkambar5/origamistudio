"use client";

import React from "react";
import Image from "next/image";
import ClientVideoCarousel from "./ClientVideoCarousel";
import {
  ArrowRight,
  TrendingUp,
  Award,
  Users,
  Building2,
  Utensils,
  ShoppingBag,
  GraduationCap,
  Sparkles,
  Zap,
  CheckCircle2,
} from "lucide-react";

const TARGET_AUDIENCE = [
  { label: "STARTUP FOUNDERS", icon: Zap },
  { label: "REAL ESTATE BUSINESSES", icon: Building2 },
  { label: "RESTAURANT OWNERS", icon: Utensils },
  { label: "E-COMMERCE BRANDS", icon: ShoppingBag },
  { label: "COACHES & CONSULTANTS", icon: GraduationCap },
];



const STATS = [
  { value: "150+", label: "Campaigns Folded", icon: Award },
  { value: "3.8x", label: "Avg Client ROI", icon: TrendingUp },
  { value: "99.4%", label: "Client Retention", icon: Users },
  { value: "$12M+", label: "Revenue Generated", icon: Sparkles },
];

export default function HeroSection() {
  return (
    <>
      <section
        id="home"
        className="relative w-full h-screen min-h-[640px] pt-24 pb-6 flex flex-col justify-between items-center overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white text-slate-900"
      >
        {/* Background Decorative Origami Facets & Glow Effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FC6100]/10 blur-[140px] rounded-full" />
          <div className="absolute top-1/3 left-10 w-96 h-96 bg-orange-400/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-400/10 blur-[100px] rounded-full" />

          {/* Origami Polygon Wireframe Background Overlay */}
          <svg
            className="absolute inset-0 w-full h-full opacity-20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="origami-grid"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 80 0 L 0 0 0 80 Z M 80 80 L 80 0 0 80 Z"
                  fill="none"
                  stroke="rgba(252,97,0,0.3)"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#origami-grid)" />
          </svg>
        </div>

        {/* Brand Logo Heading - Above Video Carousel */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center z-10 pt-2">
          <h1 className="font-changa text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase text-slate-900">
            ORIGAMI <span className="text-[#FC6100]">STUDIO</span>
          </h1>
        </div>

        {/* Full Viewport Width 3D Video Carousel Container */}
        <div className="w-full relative z-10 overflow-hidden my-auto">
          <ClientVideoCarousel />
        </div>

        {/* Subtitle - Below Video Carousel */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center z-10 pb-4">
          <p className="max-w-3xl text-lg sm:text-2xl text-slate-600 font-light leading-relaxed">
            A digital marketing studio that helps brands{" "}
            <span className="text-slate-900 font-semibold underline decoration-[#FC6100] underline-offset-4">
              stand out
            </span>
            ,{" "}
            <span className="text-slate-900 font-semibold underline decoration-[#FC6100] underline-offset-4">
              scale up
            </span>{" "}
            and stay ahead.
          </p>
        </div>
      </section>

      {/* "WHO WE WORK WITH" Strip - Appears on Scroll */}
      <div className="w-full bg-slate-100/90 border-y border-[#FC6100]/20 py-8 px-4 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#FC6100] animate-pulse" />
            <span className="font-changa text-lg text-slate-900 uppercase tracking-wider">
              WHO WE WORK WITH:
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {TARGET_AUDIENCE.map((audience) => {
              const IconComp = audience.icon;
              return (
                <div
                  key={audience.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-700 font-medium hover:border-[#FC6100]/50 hover:text-slate-950 hover:bg-[#FC6100]/10 transition-all duration-200 shadow-xs"
                >
                  <IconComp className="w-4 h-4 text-[#FC6100]" />
                  <span>{audience.label}</span>
                </div>
              );
            })}
          </div>

          <div className="text-xs font-mono text-[#FC6100] tracking-widest uppercase font-semibold hidden lg:block">
            YOUR BRAND. FOLDED TO PERFECTION.
          </div>
        </div>
      </div>
    </>
  );
}
