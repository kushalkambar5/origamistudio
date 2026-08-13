"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) =>
        item.href.replace("#", "")
      );
      
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(targetId);
    }
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-300">
      <nav
        className="w-full bg-transparent border-none px-4 py-2 flex items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* Left: Brand Logo & Title */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-2.5 group transition-transform duration-300 hover:scale-105"
        >
          <div className="relative w-9 h-9 flex items-center justify-center rounded-lg bg-white/80 backdrop-blur-md p-1 border border-[#FC6100]/30 shadow-[0_2px_15px_rgba(252,97,0,0.15)]">
            <Image
              src="/logo.png"
              alt="Origami Studio Logo"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-changa text-lg font-bold tracking-wider text-slate-900 uppercase flex items-center gap-1">
              ORIGAMI <span className="text-[#FC6100]">STUDIO</span>
            </span>
            <span className="text-[9px] tracking-widest text-slate-500 font-mono -mt-1 hidden sm:block">
              origamistudio.in
            </span>
          </div>
        </a>

        {/* Center Nav Links (Desktop) - No background, transparent, no border */}
        <div className="hidden lg:flex items-center gap-1 bg-white/70 backdrop-blur-md border border-slate-200/80 shadow-sm px-3 py-1.5 rounded-full">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3 py-1.5 text-xs font-medium transition-all duration-200 rounded-full ${
                  isActive
                    ? "text-[#FC6100] font-semibold"
                    : "text-slate-700 hover:text-slate-950 hover:bg-slate-100"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#FC6100] glow-orange-sm animate-pulse" />
                )}
              </a>
            );
          })}
        </div>

        {/* Right CTA Button (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact-us"
            onClick={(e) => handleNavClick(e, "#contact-us")}
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#FC6100] to-[#FF8A3C] hover:brightness-110 shadow-[0_4px_15px_rgba(252,97,0,0.3)] transition-all duration-300 hover:scale-105 active:scale-95"
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
            className="px-3 py-1.5 text-xs font-semibold text-white bg-[#FC6100] rounded-full shadow-sm"
          >
            Contact
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="p-2 rounded-lg bg-white/90 backdrop-blur-md text-slate-700 hover:text-slate-900 border border-slate-200 shadow-sm"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-[#FC6100]/30 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
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
                      ? "bg-[#FC6100]/10 text-[#FC6100] border border-[#FC6100]/30 font-semibold"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-[#FC6100]" />}
                </a>
              );
            })}
          </div>
          <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>origamistudio.in</span>
            <a
              href="#contact-us"
              onClick={(e) => handleNavClick(e, "#contact-us")}
              className="text-[#FC6100] font-semibold underline underline-offset-4"
            >
              Get Custom Quote →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
