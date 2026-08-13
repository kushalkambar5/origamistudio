"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles,
  Layers,
  CheckCircle2,
  X,
} from "lucide-react";

interface ProcessCard {
  id: string;
  stepNumber: string;
  title: string;
  category: string;
  subtitle: string;
  image: string;
  description: string;
  client: string;
  results: string[];
}

const CAROUSEL_ITEMS: ProcessCard[] = [
  {
    id: "strategy-planning",
    stepNumber: "#01",
    title: "Strategy & Planning",
    category: "Brand Identity & Launch",
    subtitle: "Sol Citrus Organic Beverage Rebrand",
    image:
      "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80",
    description:
      "Complete brand repositioning, packaging refresh, and multi-channel launch campaign for Sol Citrus. We increased brand awareness by 320% across target demographic segments.",
    client: "Sol Citrus Co.",
    results: [
      "+320% Organic Social Reach",
      "4.2x ROAS on Meta Ad Campaigns",
      "Featured in Global Design Monthly",
    ],
  },
  {
    id: "design-development",
    stepNumber: "#02",
    title: "Design & Development",
    category: "Fullstack Web & E-Commerce",
    subtitle: "Vulkan Apparel Streetwear E-Store",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80",
    description:
      "High-performance Next.js e-commerce application with 3D product visualizer, custom headless Shopify checkout, and automated inventory sync.",
    client: "Vulkan Streetwear",
    results: [
      "99/100 Core Web Vitals Score",
      "+185% Increase in Mobile Conversion Rate",
      "Sub-150ms Instant Page Loads",
    ],
  },
  {
    id: "launch-growth",
    stepNumber: "#03",
    title: "Launch & Growth",
    category: "AI & Digital Marketing",
    subtitle: "Aura Tech Smart Beverage Campaign",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    description:
      "Omnichannel product launch combining targeted video reels, Google Business Profile ranking dominance, and automated AI lead capture bots.",
    client: "Aura Innovations",
    results: [
      "$450K Pre-Orders Generated in 30 Days",
      "Top 1 Google Maps Local Ranking",
      "8,500+ Automated AI Leads Qualified",
    ],
  },
  {
    id: "ongoing-support",
    stepNumber: "#04",
    title: "Ongoing Support",
    category: "Sustainable Brand Ecosystem",
    subtitle: "EcoCanvas Global Marketing Retainer",
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    description:
      "Continuous growth optimization, weekly video content production, WhatsApp broadcast marketing, and technical SEO monitoring.",
    client: "EcoCanvas Goods",
    results: [
      "12 Months Sustained +45% MoM Growth",
      "98% WhatsApp Customer Open Rate",
      "#1 Organic Rank for Core Industry Keywords",
    ],
  },
];

export default function PortfolioCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState<ProcessCard | null>(null);
  const [spacing, setSpacing] = useState(270);

  const total = CAROUSEL_ITEMS.length;

  // Responsive dynamic spacing for full viewport coverage
  React.useEffect(() => {
    const updateSpacing = () => {
      const w = window.innerWidth;
      if (w < 640) setSpacing(150);
      else if (w < 768) setSpacing(200);
      else if (w < 1024) setSpacing(240);
      else if (w < 1440) setSpacing(280);
      else setSpacing(320);
    };
    updateSpacing();
    window.addEventListener("resize", updateSpacing);
    return () => window.removeEventListener("resize", updateSpacing);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const getOffset = (index: number) => {
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section
      id="our-work"
      className="relative py-24 bg-slate-50 text-slate-900 border-t border-slate-200 overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#FC6100]/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="w-full relative z-10">
        {/* HEADER matching uploaded reference image */}
        <div className="text-center max-w-3xl mx-auto mb-10 px-4">
          {/* Subtag: Behind the Designs */}
          <div className="inline-block mb-2">
            <span className="font-changa text-base sm:text-lg text-[#FC6100] tracking-wide font-bold">
              Behind the Designs
            </span>
          </div>

          {/* Main Title: Curious What Else We've Created? */}
          <h2 className="font-changa text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-slate-900 leading-none mb-4">
            Curious What Else We’ve Created?
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed mb-6">
            Explore more brand identities, packaging, and digital design work in our extended portfolio.
          </p>

          {/* See More Projects CTA Button matching reference image */}
          <div className="flex justify-center">
            <a
              href="#get-in-touch"
              className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all duration-300 shadow-md hover:scale-105 active:scale-95 group"
            >
              <span>See more Projects</span>
              <div className="w-6 h-6 rounded-full bg-[#FC6100] text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </a>
          </div>
        </div>

        {/* CURVED 3D PERSPECTIVE GALLERY ARC SLIDER (Matching Reference Image 2) */}
        <div className="relative w-full overflow-hidden my-8 py-6 select-none">
          <div
            className="relative min-h-[380px] sm:min-h-[460px] md:min-h-[500px] flex items-center justify-center overflow-hidden py-4"
            style={{ perspective: "1200px" }}
          >
            {CAROUSEL_ITEMS.map((item, idx) => {
              const offset = getOffset(idx);
              const absOffset = Math.abs(offset);

              if (absOffset > 3) return null;

              const rotateY = offset * -16;
              const scale = Math.max(0.72, 1 - absOffset * 0.1);
              const translateX = offset * spacing;
              const translateY = Math.pow(absOffset, 1.5) * 14;
              const zIndex = 40 - absOffset * 10;
              const opacity = Math.max(0.4, 1 - absOffset * 0.2);

              const isActive = offset === 0;

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    setActiveIndex(idx);
                    setSelectedItem(item);
                  }}
                  style={{
                    transform: `translateX(${translateX}px) translateY(${translateY}px) rotateY(${rotateY}deg) scale(${scale})`,
                    zIndex,
                    opacity,
                    transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s ease, z-index 0.6s ease",
                  }}
                  className={`absolute cursor-pointer rounded-3xl overflow-hidden border transition-all duration-300 group shadow-xl bg-white ${
                    isActive
                      ? "border-[#FC6100] shadow-[0_12px_40px_rgba(252,97,0,0.3)] ring-2 ring-[#FC6100]/20"
                      : "border-slate-200 hover:border-slate-300"
                  } w-[220px] h-[300px] sm:w-[280px] sm:h-[380px] md:w-[320px] md:h-[420px]`}
                >
                  {/* Image Frame */}
                  <div className="relative h-[65%] w-full overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80" />

                    {/* Step Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#FC6100]/40 text-[#FC6100] font-changa text-xs font-bold shadow-xs">
                      {item.stepNumber}
                    </div>

                    <div className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur-md text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity shadow-xs">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Card Label Content matching Reference Image */}
                  <div className="p-4 sm:p-5 text-center bg-white h-[35%] flex flex-col justify-center items-center">
                    <span className="font-changa text-sm sm:text-base font-bold text-[#FC6100] block mb-0.5">
                      {item.stepNumber}
                    </span>
                    <h3 className="font-changa text-base sm:text-lg font-bold text-slate-900 uppercase tracking-tight truncate w-full">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-mono mt-0.5 truncate w-full">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Slider Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              aria-label="Previous portfolio card"
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-[#FC6100] hover:text-white hover:border-[#FC6100] transition-colors shadow-sm active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {CAROUSEL_ITEMS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-8 bg-[#FC6100]"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next portfolio card"
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-[#FC6100] hover:text-white hover:border-[#FC6100] transition-colors shadow-sm active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Expanded Project Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-white border border-[#FC6100]/40 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 text-slate-700 hover:bg-[#FC6100] hover:text-white transition-colors shadow-md"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-64 sm:h-80 w-full">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-slate-900/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 rounded-full bg-[#FC6100] text-white text-xs font-mono font-bold uppercase shadow-sm">
                  {selectedItem.stepNumber} • {selectedItem.category}
                </span>
                <h3 className="font-changa text-2xl sm:text-4xl font-extrabold text-white drop-shadow-md mt-2">
                  {selectedItem.subtitle}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                {selectedItem.description}
              </p>

              <div className="mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 uppercase">
                  CLIENT / BRAND
                </span>
                <span className="font-changa text-lg font-bold text-[#FC6100]">
                  {selectedItem.client}
                </span>
              </div>

              <div className="mb-8">
                <h4 className="font-changa text-lg font-bold text-slate-900 uppercase mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#FC6100]" />
                  VERIFIED CAMPAIGN RESULTS:
                </h4>
                <div className="space-y-2">
                  {selectedItem.results.map((res) => (
                    <div
                      key={res}
                      className="flex items-center gap-2.5 text-sm text-slate-700 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#FC6100]" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-200">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold text-slate-600 hover:text-slate-900"
                >
                  Close
                </button>
                <a
                  href="#get-in-touch"
                  onClick={() => setSelectedItem(null)}
                  className="px-6 py-2.5 rounded-full text-xs font-changa font-bold text-white bg-gradient-to-r from-[#FC6100] to-[#FF8A3C] shadow-md hover:brightness-110"
                >
                  START A SIMILAR PROJECT →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
