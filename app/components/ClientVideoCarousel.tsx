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
  const [cardDimensions, setCardDimensions] = useState({ width: 270, height: 420 });

  // Smooth drag/swipe sliding state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const total = CLIENT_VIDEOS.length;

  // Responsive card dimension updates
  useEffect(() => {
    const updateDimensions = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setCardDimensions({ width: 160, height: 260 });
      } else if (w < 768) {
        setCardDimensions({ width: 200, height: 320 });
      } else if (w < 1024) {
        setCardDimensions({ width: 230, height: 360 });
      } else {
        setCardDimensions({ width: 270, height: 420 });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Auto-advance loop when not actively dragging or hovered
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

  // Cylinder Arc Trigonometry for Zero-Gap Touching Sides
  const thetaDeg = 14;
  const thetaHalfRad = ((thetaDeg / 2) * Math.PI) / 180;
  const radius = cardDimensions.width / (2 * Math.sin(thetaHalfRad));

  // Drag & Swipe Interaction Handlers
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

    const draggedCards = dragOffset / cardDimensions.width;
    if (Math.abs(draggedCards) > 0.15) {
      const shift = Math.round(-draggedCards) || (dragOffset < 0 ? 1 : -1);
      setActiveIndex((prev) => (prev + shift + total * 100) % total);
    }
    setDragOffset(0);
  };

  // Drag ratio (-1 to 1 per card width)
  const dragRatio = dragOffset / cardDimensions.width;

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

      {/* 3D Curved Continuous Video Ribbon Stage */}
      <div className="relative z-10 w-full min-h-[300px] sm:min-h-[380px] md:min-h-[460px] flex items-center justify-center overflow-hidden py-4">
        <div
          className="relative w-full flex items-center justify-center"
          style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
        >
          {CLIENT_VIDEOS.map((video, idx) => {
            const baseOffset = getOffset(idx);
            const continuousOffset = baseOffset + dragRatio;
            const absOffset = Math.abs(continuousOffset);

            // Render visible cards across screen
            if (absOffset > 4.5) return null;

            // Compute exact 3D positioning where adjacent edges touch with 0 gap
            const angleKRad = (continuousOffset * thetaDeg * Math.PI) / 180;
            const translateX = radius * Math.sin(angleKRad);
            const translateZ = -radius * (1 - Math.cos(angleKRad));
            const rotateY = -continuousOffset * thetaDeg;
            const zIndex = 50 - Math.round(absOffset);

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
                  transform: `translate3d(${translateX.toFixed(2)}px, 0px, ${translateZ.toFixed(2)}px) rotateY(${rotateY.toFixed(2)}deg)`,
                  width: `${cardDimensions.width}px`,
                  height: `${cardDimensions.height}px`,
                  zIndex,
                  transition: isDragging
                    ? "none"
                    : "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), z-index 0.5s ease",
                }}
                className={`absolute cursor-pointer rounded-none border border-slate-900/10 bg-slate-900 overflow-hidden shadow-xl transition-all duration-300 group ${
                  isActive ? "brightness-105" : "brightness-90 hover:brightness-100"
                }`}
              >
                {/* HTML5 Video Element with Zero Border Radius */}
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
                  className="w-full h-full object-cover rounded-none pointer-events-none"
                />

                {/* Subtle Bottom Ambient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

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

