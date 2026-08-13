"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

interface ClientVideo {
  id: string;
  title: string;
  client: string;
  category: string;
  src: string;
}

const CLIENT_VIDEOS: ClientVideo[] = [
  {
    id: "audecy",
    title: "AI Platform Launch",
    client: "Audecy.ai",
    category: "AI & Tech",
    src: "/clients/audecy.mp4",
  },
  {
    id: "blender-reel-2",
    title: "3D Visual Experience",
    client: "Blendr Reels",
    category: "3D & Motion",
    src: "/clients/blender-reel-2.mp4",
  },
  {
    id: "boatigo",
    title: "Brand Logo Motion",
    client: "BoaTiGo",
    category: "Brand Identity",
    src: "/clients/boatigo-logo-animation.mp4",
  },
  {
    id: "neuroscience",
    title: "Healthcare Series",
    client: "Dr. Karthik",
    category: "EdTech & Health",
    src: "/clients/neuroscience-video1.mp4",
  },
  {
    id: "levelup-1",
    title: "Growth Masterclass",
    client: "Level Up",
    category: "Personal Brand",
    src: "/clients/levelup-video1.mp4",
  },
  {
    id: "simracing",
    title: "Esports Commercial",
    client: "SimRacing",
    category: "Commercial Shoot",
    src: "/clients/simracing.mp4",
  },
  {
    id: "blenderreel-full",
    title: "Creative Showreel",
    client: "Blendr Studios",
    category: "Video Editing",
    src: "/clients/blenderreel-2.mp4",
  },
  {
    id: "levelup-2",
    title: "Brand Strategy Reel",
    client: "Level Up",
    category: "Digital Marketing",
    src: "/clients/levelup-video2.mp4",
  },
  {
    id: "levelup-3",
    title: "Scaling Business Series",
    client: "Level Up",
    category: "Growth Hacking",
    src: "/clients/levelup-video3.mp4",
  },
  {
    id: "levelup-4",
    title: "Executive Keynote",
    client: "Level Up",
    category: "Content Creation",
    src: "/clients/levelup-video4.mp4",
  },
];

const PROCESS_STEPS = [
  { step: "#01", title: "Strategy & Planning" },
  { step: "#02", title: "Design & Development" },
  { step: "#03", title: "Launch & Growth" },
  { step: "#04", title: "Ongoing Support" },
];

export default function ClientVideoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [spacing, setSpacing] = useState(260);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const total = CLIENT_VIDEOS.length;

  // Dynamically calculate horizontal spacing to ensure edge-to-edge screen coverage
  useEffect(() => {
    const updateSpacing = () => {
      const w = window.innerWidth;
      if (w < 640) setSpacing(145);
      else if (w < 768) setSpacing(195);
      else if (w < 1024) setSpacing(235);
      else if (w < 1440) setSpacing(270);
      else setSpacing(300);
    };
    updateSpacing();
    window.addEventListener("resize", updateSpacing);
    return () => window.removeEventListener("resize", updateSpacing);
  }, []);

  // Auto-advance loop for infinite carousel
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 2800);
    return () => clearInterval(timer);
  }, [isPaused, total]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  // Helper to calculate circular offset (-total/2 to total/2)
  const getOffset = (index: number) => {
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <div className="w-full overflow-hidden mb-6 pt-2 select-none">
      {/* 3D Arc Infinite Video Carousel Container */}
      <div
        className="relative min-h-[320px] sm:min-h-[420px] md:min-h-[460px] flex items-center justify-center overflow-hidden py-6 select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Curved Arch 3D Stage */}
        <div
          className="relative w-full flex items-center justify-center"
          style={{ perspective: "1200px" }}
        >
          {CLIENT_VIDEOS.map((video, idx) => {
            const offset = getOffset(idx);
            const absOffset = Math.abs(offset);

            // Render up to 4 cards on each side so cards reach all the way to screen boundaries
            if (absOffset > 4) return null;

            // 3D Curved Perspective Transformation Math
            const rotateY = offset * -15; // degree tilt
            const scale = Math.max(0.68, 1 - absOffset * 0.1);
            const translateX = offset * spacing; // spacing dynamically calculated for screen width
            const translateY = Math.pow(absOffset, 1.6) * 12; // curved arch effect
            const zIndex = 50 - absOffset * 10;
            const opacity = Math.max(0.35, 1 - absOffset * 0.18);

            const isActive = offset === 0;

            return (
              <div
                key={video.id}
                onClick={() => {
                  if (!isActive) {
                    setActiveIndex(idx);
                  }
                }}
                style={{
                  transform: `translateX(${translateX}px) translateY(${translateY}px) rotateY(${rotateY}deg) scale(${scale})`,
                  zIndex,
                  opacity,
                  transition:
                    "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s ease, z-index 0.6s ease",
                }}
                className={`absolute cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden border-2 transition-all duration-300 group shadow-xl ${
                  isActive
                    ? "border-[#FC6100] shadow-[0_12px_40px_rgba(252,97,0,0.35)] ring-4 ring-[#FC6100]/20"
                    : "border-slate-200/80 hover:border-slate-300 bg-slate-900"
                } w-[170px] h-[250px] sm:w-[230px] sm:h-[330px] md:w-[260px] md:h-[380px]`}
              >
                {/* HTML5 Video Element */}
                <video
                  ref={(el) => {
                    videoRefs.current[video.id] = el;
                  }}
                  src={video.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Ambient Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                {/* Top Badge / Client Name Tag */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-[10px] sm:text-xs font-mono font-bold text-white border border-white/10">
                    {video.client}
                  </span>
                  {isActive && (
                    <span className="px-2 py-0.5 rounded-full bg-[#FC6100] text-white text-[9px] font-bold uppercase tracking-wider animate-pulse">
                      PLAYING
                    </span>
                  )}
                </div>

                {/* Bottom Content Info */}
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <p className="text-[10px] sm:text-xs font-mono text-[#FC6100] font-semibold uppercase tracking-wider mb-0.5">
                    {video.category}
                  </p>
                  <h4 className="font-changa text-xs sm:text-base font-bold text-white truncate drop-shadow-sm">
                    {video.title}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Navigation Buttons */}
        <button
          onClick={handlePrev}
          aria-label="Previous Video"
          className="absolute left-3 sm:left-8 md:left-12 z-50 p-2.5 sm:p-3.5 rounded-full bg-white/90 hover:bg-[#FC6100] text-slate-800 hover:text-white border border-slate-200 hover:border-[#FC6100] transition-all shadow-lg backdrop-blur-md active:scale-95"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next Video"
          className="absolute right-3 sm:right-8 md:right-12 z-50 p-2.5 sm:p-3.5 rounded-full bg-white/90 hover:bg-[#FC6100] text-slate-800 hover:text-white border border-slate-200 hover:border-[#FC6100] transition-all shadow-lg backdrop-blur-md active:scale-95"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Pagination Indicator Dots */}
      <div className="flex items-center justify-center gap-1.5 mt-2">
        {CLIENT_VIDEOS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            aria-label={`Jump to video ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "w-8 bg-[#FC6100]"
                : "w-2 bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>

      {/* 4 Process Step Labels matching reference image & image 1 */}
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 md:gap-16 mt-8 px-4">
        {PROCESS_STEPS.map((item) => (
          <div key={item.step} className="flex flex-col items-center text-center">
            <span className="font-changa text-[#FC6100] text-sm sm:text-base font-bold">
              {item.step}
            </span>
            <span className="text-xs sm:text-sm text-slate-700 font-semibold uppercase tracking-tight">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
