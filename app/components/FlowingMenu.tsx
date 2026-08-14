"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./FlowingMenu.css";

export interface FlowingMenuItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  description: string;
  deliverables: string[];
  metrics: string;
  badge: string;
  image?: string;
}

interface FlowingMenuProps {
  items: FlowingMenuItem[];
  onSelectService?: (service: FlowingMenuItem) => void;
  speed?: number;
  textColor?: string;
  bgColor?: string;
  marqueeBgColor?: string;
  marqueeTextColor?: string;
  borderColor?: string;
}

export default function FlowingMenu({
  items = [],
  onSelectService,
  speed = 15,
  textColor = "#0f172a",
  bgColor = "#ffffff",
  marqueeBgColor = "#ff5e00",
  marqueeTextColor = "#ffffff",
  borderColor = "#e2e8f0",
}: FlowingMenuProps) {
  return (
    <div className="menu-wrap" style={{ backgroundColor: bgColor, borderColor }}>
      <nav className="menu">
        {items.map((item, idx) => (
          <MenuItem
            key={item.id}
            item={item}
            index={idx}
            speed={speed}
            textColor={textColor}
            marqueeBgColor={marqueeBgColor}
            marqueeTextColor={marqueeTextColor}
            borderColor={borderColor}
            onClick={onSelectService ? () => onSelectService(item) : undefined}
          />
        ))}
      </nav>
    </div>
  );
}

interface MenuItemProps {
  item: FlowingMenuItem;
  index: number;
  speed: number;
  textColor: string;
  marqueeBgColor: string;
  marqueeTextColor: string;
  borderColor: string;
  onClick?: () => void;
}

function MenuItem({
  item,
  speed,
  textColor,
  marqueeBgColor,
  marqueeTextColor,
  borderColor,
  onClick,
}: MenuItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeInnerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const [repetitions, setRepetitions] = useState<number>(4);

  const animationDefaults = { duration: 0.5, ease: "power2.out" };

  const findClosestEdge = (
    mouseX: number,
    mouseY: number,
    width: number,
    height: number
  ): "top" | "bottom" => {
    const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0);
    const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height);
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  };

  const distMetric = (
    x: number,
    y: number,
    x2: number,
    y2: number
  ): number => {
    const xDiff = x - x2;
    const yDiff = y - y2;
    return xDiff * xDiff + yDiff * yDiff;
  };

  useEffect(() => {
    const calculateRepetitions = () => {
      if (!marqueeInnerRef.current) return;

      const marqueeContent =
        marqueeInnerRef.current.querySelector<HTMLElement>(".marquee__part");
      if (!marqueeContent) return;

      const contentWidth = marqueeContent.offsetWidth;
      if (contentWidth === 0) return;
      const viewportWidth = window.innerWidth;

      const needed = Math.ceil(viewportWidth / contentWidth) + 2;
      setRepetitions(Math.max(4, needed));
    };

    calculateRepetitions();
    window.addEventListener("resize", calculateRepetitions);
    return () => window.removeEventListener("resize", calculateRepetitions);
  }, [item.title, item.image]);

  useEffect(() => {
    const setupMarquee = () => {
      if (!marqueeInnerRef.current) return;

      const marqueeContent =
        marqueeInnerRef.current.querySelector<HTMLElement>(".marquee__part");
      if (!marqueeContent) return;

      const contentWidth = marqueeContent.offsetWidth;
      if (contentWidth === 0) return;

      if (animationRef.current) {
        animationRef.current.kill();
      }

      animationRef.current = gsap.to(marqueeInnerRef.current, {
        x: -contentWidth,
        duration: speed,
        ease: "none",
        repeat: -1,
      });
    };

    const timer = setTimeout(setupMarquee, 50);

    return () => {
      clearTimeout(timer);
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [item.title, item.image, repetitions, speed]);

  const [isMarqueeOpen, setIsMarqueeOpen] = useState(false);

  const handleMouseEnter = (ev: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }, 0)
      .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" }, 0);
  };

  const handleMouseLeave = (ev: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }, 0)
      .to(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" }, 0);
    setIsMarqueeOpen(false);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (onClick) onClick();
    if (!marqueeRef.current || !marqueeInnerRef.current) return;

    if (!isMarqueeOpen) {
      gsap
        .timeline({ defaults: animationDefaults })
        .set(marqueeRef.current, { y: "101%" }, 0)
        .set(marqueeInnerRef.current, { y: "-101%" }, 0)
        .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" }, 0);
      setIsMarqueeOpen(true);
    } else {
      gsap
        .timeline({ defaults: animationDefaults })
        .to(marqueeRef.current, { y: "101%" }, 0)
        .to(marqueeInnerRef.current, { y: "-101%" }, 0);
      setIsMarqueeOpen(false);
    }
  };

  return (
    <div className="menu__item group" ref={itemRef} style={{ borderColor }}>
      <div
        className="menu__item-link"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ color: textColor }}
      >
        <h3 className="font-changa text-lg sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-tight text-slate-900 group-hover:text-[#ff5e00] transition-colors text-center w-full px-2">
          {item.title}
        </h3>
      </div>

      {/* Marquee Flowing Menu Overlay */}
      <div
        className="marquee"
        ref={marqueeRef}
        style={{ backgroundColor: marqueeBgColor }}
      >
        <div className="marquee__inner-wrap">
          <div
            className="marquee__inner"
            ref={marqueeInnerRef}
            aria-hidden="true"
          >
            {[...Array(repetitions)].map((_, idx) => (
              <div
                className="marquee__part"
                key={idx}
                style={{ color: marqueeTextColor }}
              >
                <span className="font-changa">{item.title}</span>
                {item.image && (
                  <div
                    className="marquee__img"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
