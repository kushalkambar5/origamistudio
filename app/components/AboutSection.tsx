"use client";

import React from "react";
import Image from "next/image";
import {
  Compass,
  Palette,
  Code2,
  Rocket,
  ShieldCheck,
  Target,
  Sparkles,
} from "lucide-react";

const STAGES = [
  {
    step: "01",
    title: "UNFOLD STRATEGY",
    subtitle: "Deep Analysis & Persona Profiling",
    description:
      "We dissect your target audience, analyze competitors, and map out a bulletproof digital marketing & tech blueprint.",
    icon: Compass,
  },
  {
    step: "02",
    title: "CREASE DESIGN",
    subtitle: "Brand Identity & Visual Mastery",
    description:
      "Our creative team crafts striking visual identities, high-converting copy, and brand assets built to command attention.",
    icon: Palette,
  },
  {
    step: "03",
    title: "ENGINEER TECH",
    subtitle: "Ultra-Fast Code & AI Automation",
    description:
      "We deploy high-speed Next.js web applications, technical SEO architecture, custom AI agents, and automated WhatsApp funnels.",
    icon: Code2,
  },
  {
    step: "04",
    title: "FLY HIGH",
    subtitle: "Campaign Launch & Continuous Scaling",
    description:
      "We launch data-driven campaigns, track real-time conversion metrics, and optimize daily for maximum client ROI.",
    icon: Rocket,
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 bg-[#0A0E17] border-t border-slate-800 text-white overflow-hidden"
    >
      {/* Ambient Radial Lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#FC6100]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Tagline Badge */}
        <div className="text-center mb-6">
          <span className="px-3.5 py-1 rounded-full bg-[#FC6100]/10 border border-[#FC6100]/30 text-[#FC6100] text-xs font-semibold uppercase tracking-widest inline-flex items-center gap-1.5">
            <Target className="w-3.5 h-3.5" />
            <span>ABOUT THE BRAND</span>
          </span>
        </div>

        {/* Headline & Main Paragraph */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-changa text-3xl sm:text-5xl font-extrabold uppercase leading-tight tracking-tight">
            ELEVATING BRANDS IN THE{" "}
            <span className="text-[#FC6100]">DIGITAL AGE</span>
          </h2>
          <p className="mt-6 text-slate-300 text-lg sm:text-xl font-light leading-relaxed">
            Origami Studio is a full-service digital marketing & tech agency crafted to
            elevate brands in the digital age. We combine strategy, creativity and
            technology to deliver measurable results and unforgettable brand experiences.
          </p>
        </div>

        {/* Statement Banner: WE DON'T JUST MARKET. WE CRAFT MOVEMENTS. */}
        <div className="relative mb-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0F1420] via-[#161D2B] to-[#0F1420] border border-[#FC6100]/30 shadow-2xl text-center overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-[#FC6100]/10 rounded-full blur-3xl pointer-events-none" />
          <h3 className="font-changa text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase text-white tracking-wide">
            WE DON'T JUST MARKET.{" "}
            <span className="text-[#FC6100] glow-text-orange block sm:inline">
              WE CRAFT MOVEMENTS.
            </span>
          </h3>

          <div className="mt-6 flex flex-wrap justify-center items-center gap-4 text-xs sm:text-sm font-mono tracking-widest text-slate-300">
            <span className="text-[#FC6100] font-bold">STRATEGY</span>
            <span className="text-slate-600">•</span>
            <span className="text-[#FC6100] font-bold">CREATIVITY</span>
            <span className="text-slate-600">•</span>
            <span className="text-[#FC6100] font-bold">TECHNOLOGY</span>
            <span className="text-slate-600">•</span>
            <span className="text-[#FC6100] font-bold">RESULTS</span>
          </div>
        </div>

        {/* 4-Stage Origami Crafting Process */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="font-changa text-2xl sm:text-3xl font-extrabold uppercase">
              THE ORIGAMI <span className="text-[#FC6100]">PROCESS</span>
            </h3>
            <p className="text-slate-400 text-sm mt-2 font-mono">
              HOW RAW IDEAS ARE FOLDED INTO HIGH-IMPACT MOVEMENTS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STAGES.map((stage) => {
              const IconComp = stage.icon;
              return (
                <div
                  key={stage.step}
                  className="relative p-6 sm:p-8 rounded-3xl bg-[#0F1420]/80 border border-white/10 hover:border-[#FC6100]/60 transition-all duration-300 group hover:-translate-y-2"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-changa text-3xl font-extrabold text-[#FC6100]/40 group-hover:text-[#FC6100] transition-colors">
                      #{stage.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-black/60 border border-[#FC6100]/30 flex items-center justify-center text-[#FC6100] group-hover:bg-[#FC6100] group-hover:text-white transition-all">
                      <IconComp className="w-6 h-6" />
                    </div>
                  </div>

                  <h4 className="font-changa text-xl font-bold text-white mb-1">
                    {stage.title}
                  </h4>
                  <p className="text-xs text-[#FC6100] font-mono mb-3">
                    {stage.subtitle}
                  </p>
                  <p className="text-slate-400 text-sm font-light leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-slate-800">
          <div className="p-6 rounded-2xl bg-black/40 border border-white/5 text-center">
            <ShieldCheck className="w-8 h-8 mx-auto text-[#FC6100] mb-3" />
            <h4 className="font-changa text-lg font-bold text-white uppercase mb-1">
              DATA-DRIVEN PRECISION
            </h4>
            <p className="text-slate-400 text-xs font-light">
              No guessing games. Every strategy is backed by real-time analytics and market metrics.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-black/40 border border-white/5 text-center">
            <Sparkles className="w-8 h-8 mx-auto text-[#FC6100] mb-3" />
            <h4 className="font-changa text-lg font-bold text-white uppercase mb-1">
              CUTTING-EDGE TECH
            </h4>
            <p className="text-slate-400 text-xs font-light">
              Fullstack Next.js web applications, custom AI response agents, and automated WhatsApp CRM funnels.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-black/40 border border-white/5 text-center">
            <Target className="w-8 h-8 mx-auto text-[#FC6100] mb-3" />
            <h4 className="font-changa text-lg font-bold text-white uppercase mb-1">
              TRANSPARENT SCALING
            </h4>
            <p className="text-slate-400 text-xs font-light">
              Clear weekly performance reporting, direct Slack/WhatsApp access, and guaranteed milestone tracking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
