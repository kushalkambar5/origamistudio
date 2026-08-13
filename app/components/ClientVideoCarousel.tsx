"use client";

import React, { useState, useEffect, useRef } from "react";

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

export default function ClientVideoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [spacing, setSpacing] = useState(170);
  const [cardDimensions, setCardDimensions] = useState({ width: 240, height: 360 });

  // Smooth drag/swipe sliding state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const total = CLIENT_VIDEOS.length;

  // Responsive card dimensions & overlapping spacing
  useEffect(() => {
    const updateDimensions = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setCardDimensions({ width: 140, height: 220 });
        setSpacing(95);
      } else if (w < 768) {
        setCardDimensions({ width: 180, height: 280 });
        setSpacing(125);
      } else if (w < 1024) {
        setCardDimensions({ width: 210, height: 320 });
        setSpacing(145);
      } else {
        setCardDimensions({ width: 250, height: 370 });
        setSpacing(175);
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Auto-advance loop when not dragging or hovered
  useEffect(() => {
    if (isPaused || isDragging) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 2800);
    return () => clearInterval(timer);
  }, [isPaused, isDragging, total]);

  // Circular offset calculation (-total/2 to total/2)
  const getOffset = (index: number) => {
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  // Drag & Swipe Handlers
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setDragOffset(0);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const deltaX = clientX - startX;
    setDragOffset(deltaX);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const draggedCards = dragOffset / spacing;
    if (Math.abs(draggedCards) > 0.15) {
      const shift = Math.round(-draggedCards) || (dragOffset < 0 ? 1 : -1);
      setActiveIndex((prev) => (prev + shift + total * 100) % total);
    }
    setDragOffset(0);
  };

  // Drag ratio (-1 to 1 per card spacing)
  const dragRatio = dragOffset / spacing;

  return (
    <div
      className="relative w-full py-8 overflow-hidden select-none cursor-grab active:cursor-grabbing"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        if (isDragging) handleDragEnd();
      }}
      onMouseDown={(e) => handleDragStart(e.clientX)}
      onMouseMove={(e) => handleDragMove(e.clientX)}
      onMouseUp={handleDragEnd}
      onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
      onTouchEnd={handleDragEnd}
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-[#FC6100]/10 blur-[140px] rounded-full pointer-events-none" />

      {/* 3D Inward Concave Ring Video Stage */}
      <div className="relative z-10 w-full min-h-[320px] sm:min-h-[400px] md:min-h-[460px] flex items-center justify-center overflow-hidden py-4">
        <div
          className="relative w-full flex items-center justify-center"
          style={{ perspective: "1100px", transformStyle: "preserve-3d" }}
        >
          {CLIENT_VIDEOS.map((video, idx) => {
            const baseOffset = getOffset(idx);
            const continuousOffset = baseOffset + dragRatio;
            const absOffset = Math.abs(continuousOffset);

            // Render visible cards across viewport
            if (absOffset > 4) return null;

            // 3D Inward Ring Trigonometry & Depth Scaling Math:
            // Middle is pushed INWARDS (smaller scale, deeper in Z)
            // Sides extend OUTWARDS towards camera (larger scale, higher Z, overlapping cards in front!)
            const translateX = continuousOffset * spacing;
            const translateZ = -220 + Math.pow(absOffset, 1.35) * 80;
            const translateY = Math.pow(absOffset, 1.4) * 6;
            const scale = Math.min(1.18, 0.72 + absOffset * 0.12);
            const rotateY = continuousOffset * -16;

            // Outer cards have higher Z-index so they overlap inner cards in front!
            const zIndex = 10 + Math.round(absOffset * 10);
            const isActive = Math.abs(continuousOffset) < 0.5;

            return (
              <div
                key={video.id}
                onClick={() => {
                  if (Math.abs(dragOffset) < 5) {
                    setActiveIndex(idx);
                  }
                }}
                style={{
                  transform: `translateX(${translateX.toFixed(2)}px) translateY(${translateY.toFixed(2)}px) translateZ(${translateZ.toFixed(2)}px) rotateY(${rotateY.toFixed(2)}deg) scale(${scale.toFixed(3)})`,
                  width: `${cardDimensions.width}px`,
                  height: `${cardDimensions.height}px`,
                  zIndex,
                  transition: isDragging
                    ? "none"
                    : "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), z-index 0.5s ease",
                }}
                className={`absolute cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 bg-slate-900 shadow-2xl transition-shadow duration-300 group ${
                  isActive ? "ring-2 ring-[#FC6100]/50 shadow-[0_12px_40px_rgba(252,97,0,0.3)]" : "hover:border-slate-300"
                }`}
              >
                {/* HTML5 Video Element with Rounded Corners */}
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
                  className="w-full h-full object-cover pointer-events-none rounded-2xl sm:rounded-3xl"
                />

                {/* Ambient Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Minimal Overlay Tag */}
                <div className="absolute bottom-3 left-3 right-3 text-left pointer-events-none">
                  <p className="text-[10px] sm:text-xs font-mono text-[#FC6100] font-semibold uppercase tracking-wider mb-0.5 truncate">
                    {video.client}
                  </p>
                  <h4 className="font-changa text-xs sm:text-sm font-bold text-white truncate">
                    {video.title}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


