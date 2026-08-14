"use client";

import React, { useEffect, useRef, useState } from "react";

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

export default function ClientVideoCarousel() {
  const ringRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [videos, setVideos] = useState<ClientVideo[]>(BASE_VIDEOS);

  // Animation & Motion Refs (mutated directly without triggering React re-renders)
  const rotationRef = useRef<number>(0);
  const velocityRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);
  const isHoveredRef = useRef<boolean>(false);
  const targetAngleRef = useRef<number | null>(null);

  // Drag tracking refs
  const startXRef = useRef<number>(0);
  const lastXRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const animFrameRef = useRef<number | null>(null);

  // Load videos from API or fallback
  useEffect(() => {
    let isMounted = true;
    async function fetchVideos() {
      try {
        const res = await fetch("/api/clients/videos");
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length >= 6) {
            if (isMounted) setVideos(data);
            return;
          }
        }
      } catch (err) {
        console.error("Failed to load videos from API:", err);
      }
    }
    fetchVideos();
    return () => {
      isMounted = false;
    };
  }, []);

  // Main high-performance RAF Animation Loop
  useEffect(() => {
    let lastFrameTime = performance.now();
    const AUTO_SPIN_SPEED = 0.12; // Degrees per frame (~60fps target)

    const updateLoop = (now: number) => {
      const dt = Math.min(32, Math.max(1, now - lastFrameTime)); // cap dt to avoid skips
      lastFrameTime = now;
      const timeScale = dt / 16.667; // Normalized frame scale (1.0 @ 60fps)

      if (isDraggingRef.current) {
        // Pointer drag is actively updating rotationRef directly in move handler
        targetAngleRef.current = null;
      } else if (targetAngleRef.current !== null) {
        // Smoothly damp towards target card angle (card click to center)
        const diff = targetAngleRef.current - rotationRef.current;
        if (Math.abs(diff) < 0.05) {
          rotationRef.current = targetAngleRef.current;
          targetAngleRef.current = null;
          velocityRef.current = 0;
        } else {
          const step = diff * Math.min(1, 0.12 * timeScale);
          rotationRef.current += step;
        }
      } else {
        // Momentum & Auto-spin state
        if (Math.abs(velocityRef.current) > 0.02) {
          rotationRef.current += velocityRef.current * timeScale;
          // Apply friction decay
          velocityRef.current *= Math.pow(0.92, timeScale);
        } else {
          velocityRef.current = 0;
          // Smooth auto-spin (decelerated to 25% speed when hovered)
          const currentSpeed = isHoveredRef.current ? AUTO_SPIN_SPEED * 0.25 : AUTO_SPIN_SPEED;
          rotationRef.current += currentSpeed * timeScale;
        }
      }

      // Hardware-accelerated direct DOM transform update (0 React re-renders!)
      if (ringRef.current) {
        ringRef.current.style.transform = `rotateY(${rotationRef.current}deg)`;
      }

      animFrameRef.current = requestAnimationFrame(updateLoop);
    };

    animFrameRef.current = requestAnimationFrame(updateLoop);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  // Pointer drag event handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    // Primary button or touch only
    if (e.button !== undefined && e.button !== 0) return;

    isDraggingRef.current = true;
    targetAngleRef.current = null;
    startXRef.current = e.clientX;
    lastXRef.current = e.clientX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;

    // Attach global window listeners so drag continues even if cursor leaves element
    window.addEventListener("pointermove", handleWindowPointerMove);
    window.addEventListener("pointerup", handleWindowPointerUp);
    window.addEventListener("pointercancel", handleWindowPointerUp);
  };

  const handleWindowPointerMove = (e: PointerEvent) => {
    if (!isDraggingRef.current) return;

    const now = performance.now();
    const dt = Math.max(1, now - lastTimeRef.current);
    const dx = e.clientX - lastXRef.current;

    // Sensitivity factor: 0.35 deg per pixel drag (drag left -> rotate right)
    const deltaAngle = -dx * 0.35;
    rotationRef.current += deltaAngle;

    // Exponential moving average for velocity estimation
    const instVelocity = deltaAngle / (dt / 16.667);
    velocityRef.current = velocityRef.current * 0.4 + instVelocity * 0.6;

    lastXRef.current = e.clientX;
    lastTimeRef.current = now;
  };

  const handleWindowPointerUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    // Clean up global window listeners
    window.removeEventListener("pointermove", handleWindowPointerMove);
    window.removeEventListener("pointerup", handleWindowPointerUp);
    window.removeEventListener("pointercancel", handleWindowPointerUp);

    // Clamp maximum drag release launch velocity
    if (Math.abs(velocityRef.current) > 10) {
      velocityRef.current = Math.sign(velocityRef.current) * 10;
    }
  };

  // Clean up window listeners on unmount as safety measure
  useEffect(() => {
    return () => {
      window.removeEventListener("pointermove", handleWindowPointerMove);
      window.removeEventListener("pointerup", handleWindowPointerUp);
      window.removeEventListener("pointercancel", handleWindowPointerUp);
    };
  }, []);

  // Click card to center it in front
  const handleCardClick = (index: number) => {
    // Prevent triggering click if user was dragging
    const totalDragDistance = Math.abs(lastXRef.current - startXRef.current);
    if (totalDragDistance > 6) return;

    const n = videos.length;
    const angleStep = 360 / n;

    // Target angle where card index i faces front (0 deg)
    const cardTarget = -index * angleStep;
    const current = rotationRef.current;

    // Shortest rotation path delta
    const diff = ((cardTarget - current) % 360 + 540) % 360 - 180;
    targetAngleRef.current = current + diff;
    velocityRef.current = 0;
  };

  // Ensure videos autoplay properly
  useEffect(() => {
    videoRefs.current.forEach((vid) => {
      if (vid && vid.paused) {
        vid.play().catch(() => {});
      }
    });
  }, [videos]);

  const n = videos.length;

  return (
    <div
      ref={containerRef}
      className="scene scene-3d relative w-full overflow-visible select-none py-4 sm:py-6 cursor-grab active:cursor-grabbing touch-pan-y"
      onPointerDown={handlePointerDown}
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
      }}
    >
      <div
        ref={ringRef}
        className="a3d a3d-ring"
        style={{
          ["--n" as string]: n,
        }}
      >
        {videos.map((video, i) => (
          <div
            key={`${video.id}-${i}`}
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick(i);
            }}
            className="card card-3d group relative overflow-hidden bg-slate-950 border border-white/20 shadow-2xl rounded-[1.5em] transition-all duration-300 hover:border-[#ff5e00]/80 hover:shadow-[0_0_25px_rgba(255,94,0,0.35)] cursor-pointer"
            style={{
              ["--i" as string]: i,
            }}
          >
            {/* Video Player */}
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
              className="w-full h-full object-cover select-none pointer-events-none"
            />

            {/* Gradient Overlay for Sleek Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
}
