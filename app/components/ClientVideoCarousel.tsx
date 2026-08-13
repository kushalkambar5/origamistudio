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

  // Randomized 20 items on client load so videos are not serial
  const [ringItems, setRingItems] = useState<
    (ClientVideo & { uniqueKey: string })[]
  >([]);

  // Dimensions for full viewport 3D arc
  const [dimensions, setDimensions] = useState({
    radius: 900,
    cardWidth: 280,
    cardHeight: 440,
  });

  useEffect(() => {
    // Generate randomized videos array (20 items)
    const shuffledPool = [
      ...shuffleArray(BASE_VIDEOS),
      ...shuffleArray(BASE_VIDEOS),
    ];
    setRingItems(
      shuffledPool.map((item, idx) => ({
        ...item,
        uniqueKey: `${item.id}-${idx}-${Math.random().toString(36).substring(2, 6)}`,
      }))
    );

    const updateDimensions = () => {
      const vw = window.innerWidth;
      const sin52 = Math.sin((52 * Math.PI) / 180);
      const r = Math.max(480, Math.round(vw / (2 * sin52)));
      const sin9 = Math.sin((9 * Math.PI) / 180);
      const w = Math.round(2 * r * sin9);
      // Larger video card dimensions for prominent hero display
      const h = Math.round(w * 1.38);
      setDimensions({ radius: r, cardWidth: w, cardHeight: h });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

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
        duration: 1.4,
        y: 120,
        opacity: 0,
        stagger: 0.06,
        ease: "power3.out",
        onComplete: () => {
          startAutoRotate();
        },
      });

      // Drag physics variables
      let startRotationY = 180;
      let lastX = 0;
      let velocityX = 0;
      let lastTime = 0;

      Draggable.create(dragger, {
        type: "x",
        onDragStart: function () {
          // Kill auto-rotate immediately so it never snaps back
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

          // Calculate drag velocity for smooth inertia momentum on release
          velocityX = dx / dt;
          lastX = this.x;
          lastTime = now;

          // Sensitivity scaling for natural touch/mouse feel
          const rotationDelta = this.x * 0.35;
          gsap.set(ring, { rotationY: startRotationY - rotationDelta });
        },

        onDragEnd: function () {
          const currentRotation = (gsap.getProperty(ring, "rotationY") as number) || 180;

          // Calculate smooth momentum glide based on drag velocity
          const momentumGlide = velocityX * 180; // glide distance
          const targetRotation = currentRotation - momentumGlide;

          // Reset dragger position instantly without altering ring position
          gsap.set(dragger, { x: 0, y: 0 });

          // Smooth inertia glide animation to desired state, then resume auto-rotation
          gsap.to(ring, {
            rotationY: targetRotation,
            duration: Math.min(1.8, Math.max(0.6, Math.abs(velocityX) * 0.8)),
            ease: "power2.out",
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

  // Ensure all videos play
  useEffect(() => {
    videoRefs.current.forEach((vid) => {
      if (vid) {
        vid.play().catch(() => {});
      }
    });
  }, [ringItems]);

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
      duration: 1.2,
      ease: "power2.out",
      onComplete: () => {
        const currRot = (gsap.getProperty(ring, "rotationY") as number) || targetAngle;
        autoRotateTween.current = gsap.to(ring, {
          rotationY: currRot + 360,
          duration: 55,
          ease: "none",
          repeat: -1,
        });
      },
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden select-none bg-transparent py-1"
      style={{
        height: `${dimensions.cardHeight + 10}px`,
      }}
    >
      {/* Invisible Dragger Layer */}
      <div
        ref={draggerRef}
        className="absolute inset-0 z-30 cursor-grab active:cursor-grabbing w-full h-full opacity-0"
      />

      {/* Full Viewport 3D Stage Container */}
      <div
        className="relative z-10 w-full h-full flex items-center justify-center"
        style={{
          perspective: "1800px",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Ring Container */}
        <div
          ref={ringRef}
          className="relative"
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
              className="ring-img-card absolute top-0 left-0 overflow-hidden bg-slate-950 border-x border-white/10 shadow-2xl cursor-pointer"
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
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

              {/* Minimal Client Name Tag */}
              <div className="absolute bottom-3 left-3 right-3 text-left pointer-events-none">
                <p className="text-[10px] sm:text-xs font-mono text-[#FC6100] font-bold uppercase tracking-wider truncate">
                  {video.client}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
