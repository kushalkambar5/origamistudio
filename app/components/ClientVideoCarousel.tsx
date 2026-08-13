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

// Duplicate base videos to create 20 panels around the 360-degree cylinder ring (18 deg step)
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

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(Draggable);

    const container = containerRef.current;
    const ring = ringRef.current;
    const dragger = draggerRef.current;

    if (!container || !ring || !dragger) return;

    const ctx = gsap.context(() => {
      let xPos = 0;

      // Responsive radius for cylinder ring
      const getRadius = () => {
        const w = window.innerWidth;
        if (w < 640) return 260;
        if (w < 1024) return 360;
        return 500; // Exact match to user snippet's 500px radius
      };

      const radius = getRadius();
      const numItems = RING_ITEMS.length; // 20 items
      const angleStep = 360 / numItems; // 18 degrees

      // Parallax calculator matching original snippet:
      // -gsap.utils.wrap(0,360,gsap.getProperty(ring, 'rotationY')-180-i*18)/360*400
      const getBgPos = (i: number) => {
        const ringRotation = (gsap.getProperty(ring, "rotationY") as number) || 0;
        const wrapped = gsap.utils.wrap(
          0,
          360,
          ringRotation - 180 - i * angleStep
        );
        return (-wrapped / 360) * 300;
      };

      const updateParallax = () => {
        cardInnerRefs.current.forEach((el, i) => {
          if (el) {
            const shiftX = getBgPos(i);
            gsap.set(el, { x: shiftX });
          }
        });
      };

      // Set initial GSAP state & animation matching original snippet
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
          duration: 1.5,
          y: 150,
          opacity: 0,
          stagger: 0.08,
          ease: "power3.out",
          onUpdate: updateParallax,
          onComplete: () => {
            // Gentle continuous auto-spin when idle
            autoRotateTween.current = gsap.to(ring, {
              rotationY: "+=360",
              duration: 45,
              ease: "none",
              repeat: -1,
              onUpdate: updateParallax,
            });
          },
        });

      // Draggable creation matching exact snippet logic
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
  }, []);

  // Ensure all videos auto-play reliably
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
            const shiftX = (-wrapped / 360) * 300;
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
      className="relative w-full h-[380px] sm:h-[440px] md:h-[480px] flex items-center justify-center overflow-hidden select-none bg-transparent"
    >
      {/* Invisible Dragger Layer matching #dragger */}
      <div
        ref={draggerRef}
        className="absolute inset-0 z-30 cursor-grab active:cursor-grabbing w-full h-full opacity-0"
      />

      {/* Main 3D Container matching .container */}
      <div
        className="relative z-10 w-[200px] sm:w-[240px] md:w-[280px] h-[280px] sm:h-[330px] md:h-[370px]"
        style={{
          perspective: "2000px",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Ring Container matching #ring */}
        <div
          ref={ringRef}
          className="w-full h-full relative"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {RING_ITEMS.map((video, i) => (
            <div
              key={video.uniqueKey}
              onClick={() => rotateToCard(i)}
              className="ring-img-card absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden border border-slate-300 shadow-xl bg-slate-900 cursor-pointer"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Inner Parallax Video Wrapper */}
              <div
                ref={(el) => {
                  cardInnerRefs.current[i] = el;
                }}
                className="w-[160%] h-full relative left-[-30%] pointer-events-none"
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

              {/* Minimal Dark Gradient for Text Visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Category Badge */}
              <div className="absolute top-2.5 left-2.5 pointer-events-none">
                <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-mono text-[#FC6100] font-semibold border border-white/10">
                  {video.category}
                </span>
              </div>

              {/* Title & Client Name Tag */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-left pointer-events-none">
                <p className="text-[10px] font-mono text-[#FC6100] font-bold uppercase tracking-wider mb-0.5 truncate">
                  {video.client}
                </p>
                <h4 className="font-changa text-xs font-bold text-white truncate">
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
