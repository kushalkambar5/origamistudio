"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const SERVICES_LINKS = [
  { label: "Social Media Marketing", href: "#what-we-do" },
  { label: "Fullstack Web & SEO", href: "#what-we-do" },
  { label: "Google Maps & GBP Ranking", href: "#what-we-do" },
  { label: "Offline Shoot & Video Editing", href: "#what-we-do" },
  { label: "Custom AI & WhatsApp Agents", href: "#products" },
];

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "About Us", href: "#about" },
  { label: "Our Work", href: "#our-work" },
  { label: "Products", href: "#products" },
  { label: "Team", href: "#team" },
  { label: "FAQs", href: "#faqs" },
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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {/* Column 1: SERVICES */}
          <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-start">
            <h3 className="text-xs sm:text-sm font-bold uppercase text-slate-900 tracking-wider mb-6">
              OUR SERVICES
            </h3>
            <ul className="space-y-3">
              {SERVICES_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-xs sm:text-sm text-slate-600 hover:text-[#ff5e00] transition-colors font-normal block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: QUICK LINKS */}
          <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-start">
            <h3 className="text-xs sm:text-sm font-bold uppercase text-slate-900 tracking-wider mb-6">
              QUICK NAVIGATION
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              <ul className="space-y-3">
                {QUICK_LINKS.slice(0, 4).map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-xs sm:text-sm text-slate-600 hover:text-[#ff5e00] transition-colors font-normal block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {QUICK_LINKS.slice(4).map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-xs sm:text-sm text-slate-600 hover:text-[#ff5e00] transition-colors font-normal block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: CONTACT & CTA */}
          <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-xs sm:text-sm font-bold uppercase text-slate-900 tracking-wider mb-6">
                GET IN TOUCH
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-600">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#ff5e00] shrink-0" />
                  <a
                    href="mailto:hello@origamistudio.in"
                    className="hover:text-[#ff5e00] transition-colors"
                  >
                    hello@origamistudio.in
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#ff5e00] shrink-0" />
                  <a
                    href="tel:+918919300467"
                    className="hover:text-[#ff5e00] transition-colors"
                  >
                    +91 8919300467
                  </a>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#ff5e00] shrink-0 mt-0.5" />
                  <span>NITK Surathkal, Mangalore, Karnataka 575025</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="#contact-us"
                onClick={(e) => handleNavClick(e, "#contact-us")}
                className="w-full py-3.5 px-6 rounded-full bg-[#ff5e00] hover:bg-[#e05300] text-white text-xs font-bold tracking-wider uppercase transition-all duration-200 text-center flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(255,94,0,0.3)] hover:scale-[1.02]"
              >
                <span>Book a Call</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Banner: Giant Branding & Logo */}
      <div className="border-t border-slate-200 py-6 sm:py-12 px-4 sm:px-8 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 overflow-hidden">
          <div className="flex items-center gap-3 sm:gap-6 w-full justify-between">
            {/* Origami Studio Logo Image */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="relative w-14 h-14 sm:w-22 sm:h-22 lg:w-28 lg:h-28 flex items-center justify-center p-2 sm:p-3 rounded-2xl bg-white border border-slate-200/90 shadow-md">
                <Image
                  src="/logo.png"
                  alt="Origami Studio Logo"
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>

            {/* Giant Title Typography */}
            <div className="grow text-right md:text-center lg:text-right">
              <h2 className="text-2xl xs:text-3xl sm:text-6xl md:text-7xl lg:text-[7vw] xl:text-[7.5vw] font-black uppercase text-slate-950 tracking-tight sm:tracking-tighter leading-none select-none font-changa">
                ORIGAMI <span className="text-[#ff5e00]">STUDIO</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar Section */}
      <div className="border-t border-slate-200 py-4 sm:py-5 px-4 sm:px-8 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] sm:text-xs text-slate-500 font-mono tracking-wider text-center md:text-left">
          <div className="uppercase font-semibold text-slate-700">
            YOUR BRAND. FOLDED TO PERFECTION.
          </div>

          <div className="flex items-center gap-4 sm:gap-6 font-semibold uppercase flex-wrap justify-center">
            <Link
              href="/terms-and-conditions"
              className="py-1 px-2 hover:text-[#ff5e00] transition-colors min-h-[36px] flex items-center"
            >
              TERMS & CONDITIONS
            </Link>
            <Link
              href="/privacy-policy"
              className="py-1 px-2 hover:text-[#ff5e00] transition-colors min-h-[36px] flex items-center"
            >
              PRIVACY POLICY
            </Link>
          </div>

          <div className="uppercase font-medium text-slate-500">
            ©{new Date().getFullYear()} ORIGAMI STUDIO. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
