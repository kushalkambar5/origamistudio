"use client";

import React from "react";
import Image from "next/image";

const PLATFORM_LINKS = [
  { label: "Dashboard", href: "#home" },
  { label: "AI Assistant", href: "#products" },
  { label: "Automations", href: "#what-we-do" },
  { label: "Integrations", href: "#products" },
  { label: "API", href: "#products" },
];

const SOLUTIONS_COL_1 = [
  { label: "Marketing", href: "#what-we-do" },
  { label: "Operations", href: "#what-we-do" },
  { label: "Sales", href: "#what-we-do" },
  { label: "HR", href: "#what-we-do" },
  { label: "Finance", href: "#what-we-do" },
];

const SOLUTIONS_COL_2 = [
  { label: "AI Assistants", href: "#products" },
  { label: "Enterprise", href: "#products" },
  { label: "Threat Center", href: "#products" },
  { label: "Solutions", href: "#what-we-do" },
  { label: "Renovation", href: "#what-we-do" },
];

const COMPANY_LINKS = [
  { label: "About", href: "#about" },
  { label: "Blog", href: "#about" },
  { label: "Careers", href: "#team" },
  { label: "Contact", href: "#contact-us" },
  { label: "Help Center", href: "#faqs" },
];

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      if (targetId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerOffset = 90;
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: Math.max(0, elementPosition - headerOffset),
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <footer className="w-full bg-[#FAF9F6] text-slate-900 border-t border-slate-200 overflow-hidden font-sans">
      {/* Top Main Grid Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {/* Column 1: PLATFORM */}
          <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-start">
            <h3 className="text-xs sm:text-sm font-bold uppercase text-slate-900 tracking-wider mb-6">
              PLATFORM
            </h3>
            <ul className="space-y-3">
              {PLATFORM_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-xs sm:text-sm text-slate-600 hover:text-[#FC6100] transition-colors font-normal block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: SOLUTIONS (2 Sub-columns) */}
          <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-start">
            <h3 className="text-xs sm:text-sm font-bold uppercase text-slate-900 tracking-wider mb-6">
              SOLUTIONS
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              <ul className="space-y-3">
                {SOLUTIONS_COL_1.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-xs sm:text-sm text-slate-600 hover:text-[#FC6100] transition-colors font-normal block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {SOLUTIONS_COL_2.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-xs sm:text-sm text-slate-600 hover:text-[#FC6100] transition-colors font-normal block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: COMPANY */}
          <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-start">
            <h3 className="text-xs sm:text-sm font-bold uppercase text-slate-900 tracking-wider mb-6">
              COMPANY
            </h3>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-xs sm:text-sm text-slate-600 hover:text-[#FC6100] transition-colors font-normal block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: CONTACT */}
          <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-xs sm:text-sm font-bold uppercase text-slate-900 tracking-wider mb-6">
                CONTACT
              </h3>

              <div className="mb-4">
                <span className="text-[11px] font-bold uppercase text-slate-900 tracking-wider block mb-1">
                  GENERAL INQUIRIES:
                </span>
                <a
                  href="mailto:hello@origamistudio.in"
                  className="text-xs sm:text-sm text-slate-600 hover:text-[#FC6100] transition-colors font-normal block"
                >
                  hello@origamistudio.in
                </a>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase text-slate-900 tracking-wider block mb-1">
                  SUPPORT:
                </span>
                <a
                  href="mailto:support@origamistudio.in"
                  className="text-xs sm:text-sm text-slate-600 hover:text-[#FC6100] transition-colors font-normal block"
                >
                  support@origamistudio.in
                </a>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-2.5 pt-2">
              <a
                href="#contact-us"
                onClick={(e) => handleNavClick(e, "#contact-us")}
                className="w-full py-3 px-5 rounded-lg bg-slate-950 hover:bg-[#FC6100] text-white text-xs font-bold tracking-wider uppercase transition-all duration-200 text-center block shadow-xs"
              >
                START FREE
              </a>
              <a
                href="#contact-us"
                onClick={(e) => handleNavClick(e, "#contact-us")}
                className="w-full py-3 px-5 rounded-lg bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-50 text-slate-900 text-xs font-bold tracking-wider uppercase transition-all duration-200 text-center block shadow-xs"
              >
                BOOK DEMO
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Banner: Giant Branding & Logo */}
      <div className="border-t border-slate-200 py-8 sm:py-12 px-4 sm:px-8 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
          <div className="flex items-center gap-4 sm:gap-6 w-full justify-between">
            {/* Origami Custom Geometric Logo Mark */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="relative w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex items-center justify-center p-2 rounded-2xl bg-white border border-slate-200 shadow-sm">
                {/* Embedded Origami Fold Geometric Icon */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full drop-shadow-sm"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Orange Fold Facet */}
                    <path
                      d="M15 85 L45 15 L35 85 Z"
                      fill="#FC6100"
                    />
                    {/* Dark Primary Fold Facet */}
                    <path
                      d="M35 85 L45 15 L75 85 Z"
                      fill="#0F172A"
                    />
                    {/* Accent Fold Shadow Facet */}
                    <path
                      d="M75 85 L45 15 L88 48 Z"
                      fill="#1E293B"
                    />
                  </svg>
                  <Image
                    src="/logo.png"
                    alt="Origami Logo"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>
            </div>

            {/* Giant Title Typography */}
            <div className="grow text-right md:text-center lg:text-right">
              <h2 className="text-3xl sm:text-6xl md:text-7xl lg:text-[7vw] xl:text-[7.5vw] font-black uppercase text-slate-950 tracking-tighter leading-none select-none font-changa">
                ORIGAMI <span className="text-[#FC6100]">STUDIO</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar Section */}
      <div className="border-t border-slate-200 py-5 px-4 sm:px-8 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-slate-500 font-mono tracking-wider">
          <div className="uppercase font-semibold text-slate-700">
            YOUR BRAND. FOLDED TO PERFECTION.
          </div>

          <div className="flex items-center gap-6 font-semibold uppercase">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="hover:text-slate-900 transition-colors"
            >
              TERMS & CONDITIONS
            </a>
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="hover:text-slate-900 transition-colors"
            >
              PRIVACY POLICY
            </a>
          </div>

          <div className="uppercase font-medium text-slate-500">
            ©{new Date().getFullYear()} ORIGAMI STUDIO. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}

