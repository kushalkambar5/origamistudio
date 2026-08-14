"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

interface ClientVideo {
  id: string;
  title: string;
  client: string;
  category: string;
  src: string;
}

const BASE_VIDEOS: ClientVideo[] = [
  {
    id: "audecy-ai-ai-platform-launch",
    title: "AI Platform Launch",
    client: "Audecy.ai",
    category: "Client Project",
    src: "/clients/Audecy.ai%20-%20AI%20Platform%20Launch.mp4",
  },
  {
    id: "blendr-reels-3d-visual-experience",
    title: "3D Visual Experience",
    client: "Blendr Reels",
    category: "Client Project",
    src: "/clients/Blendr%20Reels%20-%203D%20Visual%20Experience.mp4",
  },
  {
    id: "blendr-studios-creative-showreel",
    title: "Creative Showreel",
    client: "Blendr Studios",
    category: "Client Project",
    src: "/clients/Blendr%20Studios%20-%20Creative%20Showreel.mp4",
  },
  {
    id: "dr-karthik-healthcare-series",
    title: "Healthcare Series",
    client: "Dr Karthik",
    category: "Client Project",
    src: "/clients/Dr%20Karthik%20-%20Healthcare%20Series.mp4",
  },
  {
    id: "level-up-growth-masterclass",
    title: "Growth Masterclass",
    client: "Level Up",
    category: "Client Project",
    src: "/clients/Level%20Up%20-%20Growth%20Masterclass.mp4",
  },
  {
    id: "level-up-brand-strategy-reel",
    title: "Brand Strategy Reel",
    client: "Level Up",
    category: "Client Project",
    src: "/clients/Level%20Up%20-%20Brand%20Strategy%20Reel.mp4",
  },
  {
    id: "simracing-esports-commercial",
    title: "Esports Commercial",
    client: "SimRacing",
    category: "Client Project",
    src: "/clients/SimRacing%20-%20Esports%20Commercial.mp4",
  },
  {
    id: "simracing-gt-world-challenge",
    title: "GT World Challenge",
    client: "SimRacing",
    category: "Client Project",
    src: "/clients/SimRacing%20-%20GT%20World%20Challenge.mp4",
  },
  {
    id: "simracing-trackside-dynamics",
    title: "Trackside Dynamics",
    client: "SimRacing",
    category: "Client Project",
    src: "/clients/SimRacing%20-%20Trackside%20Dynamics.mp4",
  },
  {
    id: "simracing-pitstop-series",
    title: "Pitstop Series",
    client: "SimRacing",
    category: "Client Project",
    src: "/clients/SimRacing%20-%20Pitstop%20Series.mp4",
  },
  {
    id: "simracing-championship-highlights",
    title: "Championship Highlights",
    client: "SimRacing",
    category: "Client Project",
    src: "/clients/SimRacing%20-%20Championship%20Highlights.mp4",
  },
  {
    id: "xylon-cyberpunk-concept",
    title: "Cyberpunk Concept",
    client: "Xylon",
    category: "Client Project",
    src: "/clients/Xylon%20-%20Cyberpunk%20Concept.mp4",
  },
  {
    id: "xylon-futuristic-showcase",
    title: "Futuristic Showcase",
    client: "Xylon",
    category: "Client Project",
    src: "/clients/Xylon%20-%20Futuristic%20Showcase.mp4",
  },
];

// Helper to shuffle array randomly
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function ClientVideoCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const draggerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const autoRotateTween = useRef<gsap.core.Tween | gsap.core.Timeline | null>(null);

  const [ringItems, setRingItems] = useState<
    (ClientVideo & { uniqueKey: string })[]
  >([]);

  // Dimensions for full viewport 3D arc (9:16 aspect ratio for Reel videos, tuned for 100vh fit)
  const [dimensions, setDimensions] = useState({
    radius: 700,
    cardWidth: 205,
    cardHeight: 364, // 205 * (16 / 9)
  });

  // Fetch videos dynamically from API or fallback to BASE_VIDEOS
  useEffect(() => {
    let isMounted = true;

    async function loadVideos() {
      let videosList: ClientVideo[] = BASE_VIDEOS;
      try {
        const res = await fetch("/api/clients/videos");
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            videosList = data;
          }
        }
      } catch (err) {
        console.error("Failed to load dynamic client videos, using fallback", err);
      }

      if (!isMounted) return;

      // Duplicate list to ensure ring has at least 18-20 cards for complete 360 degree arc
      let pool = [...videosList];
      while (pool.length < 18 && pool.length > 0) {
        pool = [...pool, ...videosList];
      }

      const shuffledPool = shuffleArray(pool);
      setRingItems(
        shuffledPool.map((item, idx) => ({
          ...item,
          uniqueKey: `${item.id}-${idx}-${Math.random().toString(36).substring(2, 6)}`,
        }))
      );
    }

    loadVideos();

    const updateDimensions = () => {
      const vw = window.innerWidth;
      const isMobile = vw < 640;
      const isTablet = vw >= 640 && vw < 1024;

      if (isMobile) {
        // Mobile-tuned 9:16 card dimensions
        const cardW = Math.min(160, Math.max(130, Math.round(vw * 0.38)));
        const cardH = Math.round((cardW * 16) / 9);
        const r = Math.max(360, Math.round(vw * 1.0));
        setDimensions({ radius: r, cardWidth: cardW, cardHeight: cardH });
      } else if (isTablet) {
        const cardW = 180;
        const cardH = Math.round((cardW * 16) / 9);
        const r = 580;
        setDimensions({ radius: r, cardWidth: cardW, cardHeight: cardH });
      } else {
        const sin52 = Math.sin((52 * Math.PI) / 180);
        const r = Math.max(680, Math.round(vw / (2 * sin52)));
        const sin9 = Math.sin((9 * Math.PI) / 180);
        const w = Math.min(215, Math.max(185, Math.round(2 * r * sin9)));
        const h = Math.round((w * 16) / 9);
        setDimensions({ radius: r, cardWidth: w, cardHeight: h });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions, { passive: true });
    return () => {
      isMounted = false;
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  // Selective video playback helper: only play front-facing cards to maintain 60+ FPS on mobile
  const manageVideoPlayback = (currentRotY: number) => {
    if (videoRefs.current.length === 0) return;
    const numItems = ringItems.length || 20;
    const angleStep = 360 / numItems;

    videoRefs.current.forEach((vid, i) => {
      if (!vid) return;
      // Calculate normalized relative angle facing viewer (0deg = front center)
      const cardAngle = (i * -angleStep + currentRotY) % 360;
      const normalized = ((cardAngle % 360) + 540) % 360 - 180; // range [-180, 180]

      // If within 75 degrees of the front camera view, play; else pause to save GPU/battery
      if (Math.abs(normalized) < 80) {
        if (vid.paused) {
          vid.play().catch(() => {});
        }
      } else {
        if (!vid.paused) {
          vid.pause();
        }
      }
    });
  };

  useEffect(() => {
    if (typeof window === "undefined" || ringItems.length === 0) return;

    gsap.registerPlugin(Draggable);

    const container = containerRef.current;
    const ring = ringRef.current;
    const dragger = draggerRef.current;

    if (!container || !ring || !dragger) return;

    const ctx = gsap.context(() => {
      const { radius } = dimensions;
      const numItems = ringItems.length; // 20
      const angleStep = 360 / numItems; // 18 deg

      // Function to launch a fresh infinite auto-spin from current rotation
      const startAutoRotate = () => {
        if (autoRotateTween.current) {
          autoRotateTween.current.kill();
        }
        const currRot = (gsap.getProperty(ring, "rotationY") as number) || 180;
        autoRotateTween.current = gsap.to(ring, {
          rotationY: currRot + 360,
          duration: 55,
          ease: "none",
          repeat: -1,
          onUpdate: () => {
            const rot = (gsap.getProperty(ring, "rotationY") as number) || 180;
            manageVideoPlayback(rot);
          },
        });
      };

      // Set initial 3D positions of cards
      gsap.set(dragger, { opacity: 0 });
      gsap.set(ring, { rotationY: 180 });
      gsap.set(".ring-img-card", {
        rotateY: (i: number) => i * -angleStep,
        transformOrigin: `50% 50% ${radius}px`,
        z: -radius,
        backfaceVisibility: "hidden",
        opacity: 1,
      });

      // Entrance animation
      gsap.from(".ring-img-card", {
        duration: 1.2,
        y: 80,
        opacity: 0,
        stagger: 0.04,
        ease: "power3.out",
        onComplete: () => {
          startAutoRotate();
          manageVideoPlayback(180);
        },
      });

      // Drag physics variables
      let startRotationY = 180;
      let lastX = 0;
      let velocityX = 0;
      let lastTime = 0;

      Draggable.create(dragger, {
        type: "x",
        allowNativeTouchScrolling: true,
        dragResistance: 0.1,
        minimumMovement: 6,
        dragClickables: true,

        onDragStart: function () {
          if (autoRotateTween.current) {
            autoRotateTween.current.kill();
          }
          startRotationY = (gsap.getProperty(ring, "rotationY") as number) || 180;
          lastX = this.x;
          velocityX = 0;
          lastTime = Date.now();
        },

        onDrag: function () {
          const now = Date.now();
          const dt = Math.max(1, now - lastTime);
          const dx = this.x - lastX;

          velocityX = dx / dt;
          lastX = this.x;
          lastTime = now;

          const rotationDelta = this.x * 0.35;
          const newRot = startRotationY - rotationDelta;
          gsap.set(ring, { rotationY: newRot });
          manageVideoPlayback(newRot);
        },

        onDragEnd: function () {
          const currentRotation = (gsap.getProperty(ring, "rotationY") as number) || 180;
          const momentumGlide = velocityX * 160;
          const targetRotation = currentRotation - momentumGlide;

          gsap.set(dragger, { x: 0, y: 0 });

          gsap.to(ring, {
            rotationY: targetRotation,
            duration: Math.min(1.6, Math.max(0.5, Math.abs(velocityX) * 0.7)),
            ease: "power2.out",
            onUpdate: () => {
              const rot = (gsap.getProperty(ring, "rotationY") as number) || targetRotation;
              manageVideoPlayback(rot);
            },
            onComplete: () => {
              startAutoRotate();
            },
          });
        },
      });
    }, container);

    return () => {
      ctx.revert();
    };
  }, [dimensions, ringItems]);

  const rotateToCard = (i: number) => {
    const ring = ringRef.current;
    if (!ring) return;

    if (autoRotateTween.current) {
      autoRotateTween.current.kill();
    }

    const angleStep = 360 / ringItems.length;
    const targetAngle = 180 + i * angleStep;

    gsap.to(ring, {
      rotationY: targetAngle,
      duration: 1.1,
      ease: "power2.out",
      onUpdate: () => {
        const rot = (gsap.getProperty(ring, "rotationY") as number) || targetAngle;
        manageVideoPlayback(rot);
      },
      onComplete: () => {
        const currRot = (gsap.getProperty(ring, "rotationY") as number) || targetAngle;
        if (autoRotateTween.current) {
          autoRotateTween.current.kill();
        }
        autoRotateTween.current = gsap.to(ring, {
          rotationY: currRot + 360,
          duration: 55,
          ease: "none",
          repeat: -1,
          onUpdate: () => {
            const rot = (gsap.getProperty(ring, "rotationY") as number) || currRot;
            manageVideoPlayback(rot);
          },
        });
      },
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden select-none bg-transparent py-1 touch-pan-y"
      style={{
        height: `${dimensions.cardHeight + 14}px`,
      }}
    >
      {/* Invisible Dragger Layer with touch-pan-y */}
      <div
        ref={draggerRef}
        className="absolute inset-0 z-30 cursor-grab active:cursor-grabbing w-full h-full opacity-0 touch-pan-y"
      />

      {/* Full Viewport 3D Stage Container */}
      <div
        className="relative z-10 w-full h-full flex items-center justify-center pointer-events-none"
        style={{
          perspective: "1600px",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Ring Container */}
        <div
          ref={ringRef}
          className="relative pointer-events-auto"
          style={{
            width: `${dimensions.cardWidth}px`,
            height: `${dimensions.cardHeight}px`,
            transformStyle: "preserve-3d",
          }}
        >
          {ringItems.map((video, i) => (
            <div
              key={video.uniqueKey}
              onClick={() => rotateToCard(i)}
              className="ring-img-card absolute top-0 left-0 overflow-hidden bg-slate-950 rounded-xl border border-white/10 shadow-2xl cursor-pointer will-change-transform"
              style={{
                width: `${dimensions.cardWidth}px`,
                height: `${dimensions.cardHeight}px`,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Full Video Container - Uncropped */}
              <div className="w-full h-full relative pointer-events-none overflow-hidden">
                <video
                  ref={(el) => {
                    videoRefs.current[i] = el;
                  }}
                  src={video.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Minimal Client Name Tag */}
              <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3 text-left pointer-events-none">
                <p className="text-[10px] sm:text-xs font-mono text-[#ff5e00] font-bold uppercase tracking-wider truncate">
                  {video.client}
                </p>
                <p className="text-[9px] sm:text-[11px] text-white/80 font-medium truncate">
                  {video.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
