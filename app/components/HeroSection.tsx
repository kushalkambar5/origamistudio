"use client";

import React from "react";
import Image from "next/image";
import ClientVideoCarousel from "./ClientVideoCarousel";
import LogoLoop, { LogoItem } from "./LogoLoop";
import {
  ArrowRight,
  TrendingUp,
  Award,
  Users,
  Sparkles,
} from "lucide-react";

const CLIENT_LOGOS: LogoItem[] = [
  {
    src: "/clients_logo/sim_racing_hq.jpg",
    alt: "Sim Racing HQ",
    title: "Sim Racing HQ",
    href: "https://www.instagram.com/simracing.hq?igsh=cjl6NG40MG90MDVl",
  },
  {
    src: "/clients_logo/xylon.jpg",
    alt: "Xylon Bar",
    title: "Xylon Bar",
    href: "https://www.instagram.com/xylon.bar?igsh=MWJzMjAxYzd5aXU0Yg==",
  },
  {
    src: "/clients_logo/0.5_show.jpg",
    alt: "0.5 Show",
    title: "0.5 Show",
    href: "https://www.instagram.com/zeropointfiveshow?igsh=MTkxeXM3Y250bGE1aQ==",
  },
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
        className="relative w-full min-h-[100dvh] pt-20 sm:pt-24 pb-4 sm:pb-6 flex flex-col justify-between items-center overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white text-slate-900"
      >
        {/* Background Decorative Origami Facets & Glow Effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] bg-[#ff5e00]/10 blur-[100px] sm:blur-[140px] rounded-full" />
          <div className="absolute top-1/3 left-4 sm:left-10 w-48 sm:w-96 h-48 sm:h-96 bg-[#ff5e00]/10 blur-[80px] sm:blur-[100px] rounded-full" />
          <div className="absolute bottom-10 right-4 sm:right-10 w-48 sm:w-80 h-48 sm:h-80 bg-amber-400/10 blur-[80px] sm:blur-[100px] rounded-full" />

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
                  stroke="rgba(255,94,0,0.3)"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#origami-grid)" />
          </svg>
        </div>

        {/* Brand Logo Heading - Above Video Carousel */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center z-10 pt-2 sm:pt-4">
          <h1 className="font-changa text-3xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase text-slate-900 leading-tight">
            ORIGAMI <span className="text-[#ff5e00]">STUDIO</span>
          </h1>
        </div>

        {/* Full Viewport Width 3D Video Carousel Container */}
        <div className="w-full relative z-10 overflow-hidden my-auto py-2">
          <ClientVideoCarousel />
        </div>

        {/* Subtitle - Below Video Carousel */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center z-10 pb-3 sm:pb-4">
          <p className="max-w-2xl text-sm sm:text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
            A digital marketing studio that helps brands{" "}
            <span className="text-slate-900 font-semibold underline decoration-[#ff5e00] underline-offset-4">
              stand out
            </span>
            ,{" "}
            <span className="text-slate-900 font-semibold underline decoration-[#ff5e00] underline-offset-4">
              scale up
            </span>{" "}
            and stay ahead.
          </p>
        </div>
      </section>

      {/* Client Logos Loop Strip */}
      <div className="w-full bg-slate-100/90 border-y border-[#ff5e00]/20 py-3 sm:py-4 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <LogoLoop
            logos={CLIENT_LOGOS}
            speed={50}
            pauseOnHover={true}
            scaleOnHover={true}
            fadeOut={true}
            fadeOutColor="#f1f5f9"
            logoHeight={42}
            gap={40}
          />
        </div>
      </div>
    </>
  );
}
