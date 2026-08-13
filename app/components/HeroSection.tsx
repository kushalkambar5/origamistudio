"use client";

import React from "react";
import Image from "next/image";
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

const CAPABILITIES = [
  "SOCIAL MEDIA MANAGEMENT",
  "OFFLINE SHOOTS",
  "VIDEO EDITING",
  "WEBSITES",
  "SEO",
  "AI AGENTS",
  "WHATSAPP AGENTS & MORE",
];

const STATS = [
  { value: "150+", label: "Campaigns Folded", icon: Award },
  { value: "3.8x", label: "Avg Client ROI", icon: TrendingUp },
  { value: "99.4%", label: "Client Retention", icon: Users },
  { value: "$12M+", label: "Revenue Generated", icon: Sparkles },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-[#07090E] via-[#0B0F19] to-[#07090E] text-white"
    >
      {/* Background Decorative Origami Facets & Glow Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FC6100]/15 blur-[140px] rounded-full" />
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-orange-600/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-500/10 blur-[100px] rounded-full" />

        {/* Origami Polygon Wireframe Background Overlay */}
        <svg
          className="absolute inset-0 w-full h-full opacity-15"
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
                stroke="rgba(252,97,0,0.25)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#origami-grid)" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center z-10">
        {/* Brand Logo & Origami Emblem */}
        <div className="mb-6 flex flex-col items-center">
          <div className="relative group p-4 rounded-3xl bg-black/40 backdrop-blur-xl border border-[#FC6100]/40 shadow-[0_0_50px_rgba(252,97,0,0.3)] transition-transform duration-500 hover:scale-105">
            <Image
              src="/logo.png"
              alt="Origami Studio Bird Logo"
              width={140}
              height={140}
              className="object-contain drop-shadow-[0_0_25px_rgba(252,97,0,0.6)]"
              priority
            />
            {/* Ambient Pulsing Polygon Ring */}
            <div className="absolute inset-0 rounded-3xl border border-[#FC6100]/30 animate-pulse pointer-events-none" />
          </div>

          <h1 className="font-changa text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mt-6 uppercase">
            ORIGAMI <span className="text-[#FC6100] glow-text-orange">STUDIO</span>
          </h1>
          
          <div className="mt-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FC6100]/10 border border-[#FC6100]/30 text-[#FC6100] text-xs sm:text-sm font-semibold tracking-widest uppercase">
            <Sparkles className="w-4 h-4 text-[#FC6100]" />
            <span>FOLDING IDEAS. CREATING IMPACT.</span>
          </div>
        </div>

        {/* Main Subtitle */}
        <p className="max-w-3xl text-lg sm:text-2xl text-slate-300 font-light leading-relaxed mb-8">
          A digital marketing studio that helps brands{" "}
          <span className="text-white font-semibold underline decoration-[#FC6100] underline-offset-4">
            stand out
          </span>
          ,{" "}
          <span className="text-white font-semibold underline decoration-[#FC6100] underline-offset-4">
            scale up
          </span>{" "}
          and stay ahead.
        </p>

        {/* Services & Capabilities Ticker Bar */}
        <div className="w-full max-w-4xl mb-10 overflow-hidden py-3 px-4 rounded-2xl bg-black/50 backdrop-blur-md border border-white/10 shadow-lg">
          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-xs sm:text-sm font-mono text-slate-300">
            {CAPABILITIES.map((cap, index) => (
              <React.Fragment key={cap}>
                <span className="hover:text-[#FC6100] transition-colors cursor-default">
                  {cap}
                </span>
                {index < CAPABILITIES.length - 1 && (
                  <span className="text-[#FC6100] font-bold">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-16">
          <a
            href="#what-we-do"
            className="w-full sm:w-auto px-8 py-4 rounded-full font-changa text-lg font-bold text-white bg-gradient-to-r from-[#FC6100] via-[#FF7A18] to-[#FC6100] shadow-[0_0_30px_rgba(252,97,0,0.4)] hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3"
          >
            <span>EXPLORE OUR SOLUTIONS</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href="#get-in-touch"
            className="w-full sm:w-auto px-8 py-4 rounded-full font-changa text-lg font-bold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#FC6100]/50 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>GET ESTIMATE</span>
          </a>
        </div>

        {/* Stat Cards Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mb-16">
          {STATS.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.label}
                className="p-5 rounded-2xl bg-[#0F1420]/80 backdrop-blur-md border border-[#FC6100]/20 hover:border-[#FC6100]/50 shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-[#FC6100]/10 border border-[#FC6100]/30 flex items-center justify-center text-[#FC6100] group-hover:scale-110 transition-transform">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="font-changa text-3xl sm:text-4xl font-extrabold text-white text-gradient-orange">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* "WHO WE WORK WITH" Strip */}
      <div className="w-full bg-[#0A0D15] border-y border-[#FC6100]/20 py-8 px-4 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#FC6100] animate-pulse" />
            <span className="font-changa text-lg text-white uppercase tracking-wider">
              WHO WE WORK WITH:
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {TARGET_AUDIENCE.map((audience) => {
              const IconComp = audience.icon;
              return (
                <div
                  key={audience.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-300 font-medium hover:border-[#FC6100]/50 hover:text-white hover:bg-[#FC6100]/10 transition-all duration-200"
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
    </section>
  );
}
