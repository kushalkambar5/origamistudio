"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { InteractiveHoverButton } from "@/registry/magicui/interactive-hover-button";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Our Work", href: "#our-work" },
  { label: "Products", href: "#products" },
  { label: "Team", href: "#team" },
  { label: "FAQs", href: "#faqs" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact Us", href: "#contact-us" },
];


export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isWhatWeDoFullScreen, setIsWhatWeDoFullScreen] = useState(false);

  const prevScrollY = useRef(0);
  const navContainerRef = useRef<HTMLElement>(null);
  const isTicking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isTicking.current) return;
      isTicking.current = true;

      window.requestAnimationFrame(() => {
        const currentScrollY = Math.max(0, window.scrollY);

        // Keep visible if mobile menu is open
        if (!mobileMenuOpen) {
          if (currentScrollY <= 60) {
            setIsVisible(true);
          } else if (currentScrollY > prevScrollY.current + 10) {
            setIsVisible(false);
          } else if (currentScrollY < prevScrollY.current - 10) {
            setIsVisible(true);
          }
        }

        setScrolled(currentScrollY > 20);
        prevScrollY.current = currentScrollY;

        // Active section highlight tracking
        const scrollPosition = currentScrollY + 220;
        let currentSection = "home";
        for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
          const sectionId = NAV_ITEMS[i].href.replace("#", "");
          if (sectionId === "home") continue;

          const el = document.getElementById(sectionId);
          if (el) {
            const top = el.getBoundingClientRect().top + currentScrollY;
            if (scrollPosition >= top) {
              currentSection = sectionId;
              break;
            }
          }
        }
        setActiveSection(currentSection);

        // Fullscreen detection for "What We Do" section
        const whatWeDoEl = document.getElementById("what-we-do");
        if (whatWeDoEl) {
          const rect = whatWeDoEl.getBoundingClientRect();
          // When top of What We Do section reaches viewport top area (<= 60px), it has taken full screen
          setIsWhatWeDoFullScreen(rect.top <= 60);
        } else {
          setIsWhatWeDoFullScreen(currentScrollY >= window.innerHeight - 80);
        }

        isTicking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  // Close mobile drawer on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (
        mobileMenuOpen &&
        navContainerRef.current &&
        !navContainerRef.current.contains(e.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");

    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
      setIsWhatWeDoFullScreen(false);
      return;
    }

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 90;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
      setActiveSection(targetId);
    }
  };

  return (
    <>
      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-xs z-40 lg:hidden animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <header
        ref={navContainerRef}
        className={`fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-7xl transition-all duration-300 ease-out transform ${
          isVisible
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-28 opacity-0 pointer-events-none"
        }`}
      >
        <nav
          className="w-full bg-transparent border-none shadow-none px-0.5 sm:px-2 py-1 flex items-center justify-between transition-all duration-300 gap-1"
          aria-label="Main Navigation"
        >
          {/* Left: Brand Logo & Title */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-1.5 sm:gap-3 group transition-all duration-300 active:scale-98 px-1 sm:px-2 py-1 rounded-2xl bg-transparent shrink min-w-0"
          >
            <div className="relative w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center rounded-xl p-0.5 sm:p-1 transition-transform duration-300 group-hover:scale-105 shrink-0">
              <Image
                src="/logo.png"
                alt="Origami Studio Logo"
                width={32}
                height={32}
                className="object-contain"
                priority
              />
            </div>
            <span
              className={`font-changa text-xs xs:text-sm sm:text-lg font-bold tracking-wider uppercase whitespace-nowrap transition-colors duration-300 ${
                activeSection === "our-work"
                  ? "text-white"
                  : isWhatWeDoFullScreen
                  ? "text-slate-900"
                  : "text-white"
              }`}
            >
              ORIGAMI <span className="text-[#ff5e00]">STUDIO</span>
            </span>
          </a>

          {/* Center Nav Links (Desktop) - Glassmorphism Liquid Glass background after What We Do is full screen */}
          <div
            className={`hidden lg:flex items-center gap-1 p-1.5 rounded-full transition-all duration-300 ${
              activeSection === "our-work"
                ? "bg-black/55 backdrop-blur-2xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
                : isWhatWeDoFullScreen
                ? "bg-white/75 backdrop-blur-2xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-saturate-150"
                : "border-white/15 shadow-sm"
            }`}
          >
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 ${
                    isActive
                      ? "text-[#ff5e00] font-bold shadow-sm"
                      : activeSection === "our-work"
                      ? "text-white hover:text-[#ff5e00] hover:bg-white/10"
                      : isWhatWeDoFullScreen
                      ? "text-slate-800 hover:text-[#ff5e00] hover:bg-slate-900/5"
                      : "text-white hover:text-[#ff5e00] hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Right CTA Button (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <InteractiveHoverButton
              onClick={(e) => handleNavClick(e, "#contact-us")}
              className="text-xs font-bold py-2 px-5 bg-white/90 hover:bg-white text-slate-900 shadow-[0_4px_16px_rgba(255,94,0,0.25)] border-white/50"
            >
              Book Call
            </InteractiveHoverButton>
          </div>

          {/* Mobile Actions (Phone & Tablet) */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 shrink-0">
            <InteractiveHoverButton
              onClick={(e) => handleNavClick(e, "#contact-us")}
              className="text-[11px] sm:text-xs font-bold py-1 px-2.5 sm:py-1.5 sm:px-4 bg-white/90 text-slate-900 border-white/50 min-h-[32px] sm:min-h-[36px] whitespace-nowrap"
            >
              Book Call
            </InteractiveHoverButton>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
              className={`w-8 h-8 sm:w-9 sm:h-9 min-h-[32px] sm:min-h-[36px] min-w-[32px] sm:min-w-[36px] flex items-center justify-center rounded-xl border transition-all active:scale-95 ${
                activeSection === "our-work"
                  ? "bg-neutral-900/80 text-white border-neutral-800 shadow-sm backdrop-blur-xl hover:bg-neutral-800"
                  : isWhatWeDoFullScreen
                  ? "bg-white/80 text-slate-800 border-white/80 shadow-sm backdrop-blur-xl hover:bg-white"
                  : "bg-slate-950/40 text-white border-white/20 backdrop-blur-md hover:bg-slate-900/60"
              }`}
            >
              {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-3.5 rounded-2xl bg-white/98 backdrop-blur-2xl border border-slate-200 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="grid grid-cols-2 gap-2">
              {NAV_ITEMS.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`min-h-[44px] px-3.5 py-2.5 rounded-xl text-xs font-medium flex items-center justify-between transition-all active:scale-98 ${
                      isActive
                        ? "bg-[#ff5e00]/10 text-[#ff5e00] border border-[#ff5e00]/30 font-bold shadow-xs"
                        : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 bg-slate-50/60"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#ff5e00] shrink-0 ml-1" />}
                  </a>
                );
              })}
            </div>
            <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs px-1">
              <span className="text-slate-400 font-mono text-[10px]">ORIGAMI STUDIO</span>
              <a
                href="#contact-us"
                onClick={(e) => handleNavClick(e, "#contact-us")}
                className="text-[#ff5e00] font-semibold flex items-center gap-1 min-h-[36px] items-center"
              >
                <span>Get Custom Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
