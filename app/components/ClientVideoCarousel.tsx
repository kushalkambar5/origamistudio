"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

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
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [videos, setVideos] = useState<ClientVideo[]>(BASE_VIDEOS);

  // Interaction & drag state
  const [isManualControl, setIsManualControl] = useState(false);
  const [rotationY, setRotationY] = useState(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startRotationRef = useRef(0);
  const lastXRef = useRef(0);
  const velocityXRef = useRef(0);
  const lastTimeRef = useRef(0);
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

  // Helper: Extract current visual rotation angle from computed matrix
  const getComputedAngle = useCallback((): number => {
    if (!ringRef.current) return rotationY;
    const computed = window.getComputedStyle(ringRef.current).transform;
    if (computed === "none" || !computed) return rotationY;

    try {
      const values = computed.split("(")[1]?.split(")")[0]?.split(",");
      if (values && values.length === 16) {
        // matrix3d(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p)
        // a = cos(Y), c = -sin(Y)
        const a = parseFloat(values[0]);
        const c = parseFloat(values[2]);
        const rad = Math.atan2(-c, a);
        const deg = (rad * 180) / Math.PI;
        return deg;
      } else if (values && values.length === 6) {
        const a = parseFloat(values[0]);
        const b = parseFloat(values[1]);
        const rad = Math.atan2(b, a);
        return (rad * 180) / Math.PI;
      }
    } catch {
      // Fallback
    }
    return rotationY;
  }, [rotationY]);

  // Pointer drag handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }
    const currentAngle = isManualControl ? rotationY : getComputedAngle();
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    lastXRef.current = e.clientX;
    startRotationRef.current = currentAngle;
    velocityXRef.current = 0;
    lastTimeRef.current = performance.now();

    setIsManualControl(true);
    setRotationY(currentAngle);

    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const now = performance.now();
    const dt = Math.max(1, now - lastTimeRef.current);
    const dx = e.clientX - lastXRef.current;

    velocityXRef.current = dx / dt;
    lastXRef.current = e.clientX;
    lastTimeRef.current = now;

    const totalDeltaX = e.clientX - startXRef.current;
    // 0.35 degrees per pixel drag (negative to track finger/cursor naturally)
    const newAngle = startRotationRef.current - totalDeltaX * 0.35;
    setRotationY(newAngle);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    try {
      (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
    } catch {}

    // Momentum glide in the direction of the swipe
    let currentVel = -velocityXRef.current * 18; // momentum boost in correct direction
    let currentRot = rotationY;

    const friction = 0.94;
    const minVel = 0.08;

    const step = () => {
      if (Math.abs(currentVel) > minVel) {
        currentRot += currentVel;
        currentVel *= friction;
        setRotationY(currentRot);
        animFrameRef.current = requestAnimationFrame(step);
      } else {
        // Continuous slow rotation loop after drag ends
        const autoSpinStep = () => {
          if (!isDraggingRef.current) {
            currentRot += 0.18; // ~32s full revolution speed
            setRotationY((prev) => prev + 0.18);
            animFrameRef.current = requestAnimationFrame(autoSpinStep);
          }
        };
        animFrameRef.current = requestAnimationFrame(autoSpinStep);
      }
    };

    animFrameRef.current = requestAnimationFrame(step);
  };

  // Click card to center it in front
  const handleCardClick = (index: number) => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);

    const n = videos.length;
    const angleStep = 360 / n;
    const currentAngle = isManualControl ? rotationY : getComputedAngle();

    // Target rotation where card i is at front facing viewer (angle = -i * angleStep)
    const cardTarget = -index * angleStep;
    // Find shortest rotational path
    const diff = ((cardTarget - currentAngle) % 360 + 540) % 360 - 180;
    const finalAngle = currentAngle + diff;

    setIsManualControl(true);

    const startTime = performance.now();
    const duration = 650;
    const startAngle = currentAngle;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const animateToTarget = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const eased = easeOutCubic(progress);
      const current = startAngle + (finalAngle - startAngle) * eased;
      setRotationY(current);

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(animateToTarget);
      } else {
        // Resume slow rotation
        let cur = finalAngle;
        const autoSpinStep = () => {
          if (!isDraggingRef.current) {
            cur += 0.18;
            setRotationY(cur);
            animFrameRef.current = requestAnimationFrame(autoSpinStep);
          }
        };
        animFrameRef.current = requestAnimationFrame(autoSpinStep);
      }
    };

    animFrameRef.current = requestAnimationFrame(animateToTarget);
  };

  // Clean up RAF on unmount
  useEffect(() => {
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

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
      className="scene scene-3d relative w-full overflow-hidden select-none py-6 sm:py-10"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <div
        ref={ringRef}
        className={`a3d a3d-ring ${isManualControl ? "is-dragging" : ""}`}
        style={{
          ["--n" as string]: n,
          ...(isManualControl
            ? {
                transform: `rotateY(${rotationY}deg)`,
                animation: "none",
              }
            : {}),
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

            {/* Client & Project Badge Overlay */}
            <div className="absolute bottom-2.5 sm:bottom-3.5 left-2.5 sm:left-3.5 right-2.5 sm:right-3.5 text-left pointer-events-none">
              <span className="inline-block px-2 py-0.5 mb-1 rounded-full bg-[#ff5e00]/90 text-[9px] sm:text-[10px] font-mono font-bold text-white uppercase tracking-wider backdrop-blur-sm shadow-sm">
                {video.client}
              </span>
              <p className="text-[10px] sm:text-xs font-semibold text-white/95 truncate leading-tight drop-shadow-sm">
                {video.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
