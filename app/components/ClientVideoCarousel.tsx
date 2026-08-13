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

// 20 items in total (18° step per card)
const RING_ITEMS = [...BASE_VIDEOS, ...BASE_VIDEOS].map((item, idx) => ({
  ...item,
  uniqueKey: `${item.id}-${idx}`,
}));

export default function ClientVideoCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const draggerRef = useRef<HTMLDivElement>(null);
  const cardInnerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const autoRotateTween = useRef<gsap.core.Tween | null>(null);

  // Dynamic dimensions for 0-gap, 0-overlap full viewport width arc
  const [dimensions, setDimensions] = useState({
    radius: 900,
    cardWidth: 280,
    cardHeight: 420,
  });

  useEffect(() => {
    const updateDimensions = () => {
      const vw = window.innerWidth;
      // Calculate radius R to span full viewport width edge-to-edge
      // R * sin(52 deg) = vw / 2 => R = vw / (2 * sin(52 deg))
      const sin52 = Math.sin((52 * Math.PI) / 180);
      const r = Math.max(480, Math.round(vw / (2 * sin52)));

      // Exact mathematical card width W for 0 gap and 0 overlap between adjacent 18-degree panels:
      // W = 2 * R * sin(9 deg)
      const sin9 = Math.sin((9 * Math.PI) / 180);
      const w = Math.round(2 * r * sin9);

      // Card height maintaining sleek aspect ratio
      const h = Math.round(w * 1.45);

      setDimensions({ radius: r, cardWidth: w, cardHeight: h });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(Draggable);

    const container = containerRef.current;
    const ring = ringRef.current;
    const dragger = draggerRef.current;

    if (!container || !ring || !dragger) return;

    const ctx = gsap.context(() => {
      let xPos = 0;

      const { radius } = dimensions;
      const numItems = RING_ITEMS.length; // 20
      const angleStep = 360 / numItems; // 18 degrees

      // Parallax offset matching original formula
      const getBgPos = (i: number) => {
        const ringRotation = (gsap.getProperty(ring, "rotationY") as number) || 0;
        const wrapped = gsap.utils.wrap(
          0,
          360,
          ringRotation - 180 - i * angleStep
        );
        return (-wrapped / 360) * 350;
      };

      const updateParallax = () => {
        cardInnerRefs.current.forEach((el, i) => {
          if (el) {
            const shiftX = getBgPos(i);
            gsap.set(el, { x: shiftX });
          }
        });
      };

      // Set initial GSAP timeline
      const tl = gsap.timeline();

      tl.set(dragger, { opacity: 0 })
        .set(ring, { rotationY: 180 })
        .set(".ring-img-card", {
          rotateY: (i: number) => i * -angleStep,
          transformOrigin: `50% 50% ${radius}px`,
          z: -radius,
          backfaceVisibility: "hidden",
          opacity: 1,
        })
        .from(".ring-img-card", {
          duration: 1.4,
          y: 120,
          opacity: 0,
          stagger: 0.06,
          ease: "power3.out",
          onUpdate: updateParallax,
          onComplete: () => {
            autoRotateTween.current = gsap.to(ring, {
              rotationY: "+=360",
              duration: 50,
              ease: "none",
              repeat: -1,
              onUpdate: updateParallax,
            });
          },
        });

      // Draggable setup matching exact snippet logic
      Draggable.create(dragger, {
        type: "x,y",
        onDragStart: (e) => {
          if (autoRotateTween.current) {
            autoRotateTween.current.pause();
          }
          let clientX = 0;
          if (e.touches && e.touches.length > 0) {
            clientX = e.touches[0].clientX;
          } else if ((e as MouseEvent).clientX !== undefined) {
            clientX = (e as MouseEvent).clientX;
          }
          xPos = Math.round(clientX);
        },

        onDrag: function (e) {
          let clientX = 0;
          if (e.touches && e.touches.length > 0) {
            clientX = e.touches[0].clientX;
          } else if ((e as MouseEvent).clientX !== undefined) {
            clientX = (e as MouseEvent).clientX;
          }

          const currentX = Math.round(clientX);
          const delta = (currentX - xPos) % 360;

          gsap.to(ring, {
            rotationY: `-=${delta}`,
            duration: 0.1,
            ease: "power1.out",
            onUpdate: updateParallax,
          });

          xPos = currentX;
        },

        onDragEnd: function () {
          gsap.set(dragger, { x: 0, y: 0 });
          if (autoRotateTween.current) {
            autoRotateTween.current.resume();
          }
        },
      });

      updateParallax();
    }, container);

    return () => {
      ctx.revert();
    };
  }, [dimensions]);

  // Ensure all HTML5 videos auto-play
  useEffect(() => {
    videoRefs.current.forEach((vid) => {
      if (vid) {
        vid.play().catch(() => {});
      }
    });
  }, []);

  const rotateToCard = (i: number) => {
    const ring = ringRef.current;
    if (!ring) return;

    if (autoRotateTween.current) {
      autoRotateTween.current.pause();
    }

    const angleStep = 360 / RING_ITEMS.length;
    const targetAngle = 180 + i * angleStep;

    gsap.to(ring, {
      rotationY: targetAngle,
      duration: 1.2,
      ease: "power2.out",
      onUpdate: () => {
        cardInnerRefs.current.forEach((el, idx) => {
          if (el) {
            const ringRotation = (gsap.getProperty(ring, "rotationY") as number) || 0;
            const wrapped = gsap.utils.wrap(
              0,
              360,
              ringRotation - 180 - idx * angleStep
            );
            const shiftX = (-wrapped / 360) * 350;
            gsap.set(el, { x: shiftX });
          }
        });
      },
      onComplete: () => {
        if (autoRotateTween.current) {
          autoRotateTween.current.resume();
        }
      },
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden select-none bg-transparent py-4"
      style={{
        height: `${dimensions.cardHeight + 40}px`,
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
        {/* Ring Container centered horizontally */}
        <div
          ref={ringRef}
          className="relative"
          style={{
            width: `${dimensions.cardWidth}px`,
            height: `${dimensions.cardHeight}px`,
            transformStyle: "preserve-3d",
          }}
        >
          {RING_ITEMS.map((video, i) => (
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
              {/* Inner Parallax Video Wrapper */}
              <div
                ref={(el) => {
                  cardInnerRefs.current[i] = el;
                }}
                className="w-[180%] h-full relative left-[-40%] pointer-events-none"
              >
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

              {/* Gradient overlay for subtitle readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />

              {/* Category Pill Tag */}
              <div className="absolute top-3 left-3 pointer-events-none">
                <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-[10px] sm:text-xs font-mono font-semibold text-[#FC6100] border border-white/10">
                  {video.category}
                </span>
              </div>

              {/* Client Title Tag */}
              <div className="absolute bottom-3 left-3 right-3 text-left pointer-events-none">
                <p className="text-[10px] sm:text-xs font-mono text-[#FC6100] font-bold uppercase tracking-wider mb-0.5 truncate">
                  {video.client}
                </p>
                <h4 className="font-changa text-xs sm:text-sm font-bold text-white truncate">
                  {video.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
