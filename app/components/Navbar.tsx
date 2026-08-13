"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "About", href: "#about" },
  { label: "Our Work", href: "#our-work" },
  { label: "Products", href: "#products" },
  { label: "Team", href: "#team" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact Us", href: "#contact-us" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine navbar visibility based on scroll direction
      if (currentScrollY <= 60) {
        // Always visible at the top of the page
        setIsVisible(true);
      } else if (currentScrollY > prevScrollY.current + 8) {
        // Scrolling DOWN -> Hide navbar
        setIsVisible(false);
        setMobileMenuOpen(false); // Close mobile menu if user scrolls down
      } else if (currentScrollY < prevScrollY.current - 8) {
        // Scrolling UP -> Show navbar
        setIsVisible(true);
      }

      setScrolled(currentScrollY > 20);
      prevScrollY.current = currentScrollY;

      // Active section highlight tracking
      const sections = NAV_ITEMS.map((item) => item.href.replace("#", ""));
      const scrollPosition = currentScrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");

    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
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
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-300 ease-in-out transform ${
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-28 opacity-0 pointer-events-none"
      }`}
    >
      <nav
        className={`w-full rounded-2xl px-4 py-2.5 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
            : "bg-white/70 backdrop-blur-md border border-slate-200/60 shadow-sm"
        }`}
        aria-label="Main Navigation"
      >
        {/* Left: Brand Logo & Title */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-3 group transition-transform duration-300 hover:scale-[1.02]"
        >
          <div className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-white to-slate-50 p-1 border border-slate-200 shadow-sm group-hover:border-[#FC6100]/40 transition-colors">
            <Image
              src="/logo.png"
              alt="Origami Studio Logo"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
          </div>
          <span className="font-changa text-lg font-bold tracking-wider text-slate-900 uppercase">
            ORIGAMI <span className="text-[#FC6100]">STUDIO</span>
          </span>
        </a>

        {/* Center Nav Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-1 bg-slate-100/70 p-1 rounded-full border border-slate-200/50">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-white text-[#FC6100] shadow-sm"
                    : "text-slate-600 hover:text-slate-950 hover:bg-white/50"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Right CTA Button (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact-us"
            onClick={(e) => handleNavClick(e, "#contact-us")}
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#FC6100] to-[#FF8A3C] shadow-[0_4px_16px_rgba(252,97,0,0.3)] hover:shadow-[0_6px_20px_rgba(252,97,0,0.45)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>Book Call</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href="#contact-us"
            onClick={(e) => handleNavClick(e, "#contact-us")}
            className="px-3 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-[#FC6100] to-[#FF8A3C] rounded-full shadow-sm"
          >
            Book Call
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? "bg-[#FC6100]/10 text-[#FC6100] border border-[#FC6100]/30 font-bold"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#FC6100]" />}
                </a>
              );
            })}
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-end text-xs">
            <a
              href="#contact-us"
              onClick={(e) => handleNavClick(e, "#contact-us")}
              className="text-[#FC6100] font-semibold flex items-center gap-1 hover:underline"
            >
              <span>Get Custom Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
