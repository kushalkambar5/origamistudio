"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight, Globe } from "lucide-react";

const NAV_COLUMNS = [
  [
    { label: "Home", href: "#home" },
    { label: "What We Do", href: "#what-we-do" },
  ],
  [
    { label: "Our Work", href: "#our-work" },
    { label: "Products", href: "#products" },
    { label: "Team", href: "#team" },
  ],
  [
    { label: "FAQs", href: "#faqs" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  ],
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
    <footer className="relative w-full bg-[#012437] text-white font-sans overflow-hidden">
      {/* Background Image Container */}
      <div 
        className="relative w-full bg-cover bg-top bg-no-repeat min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex flex-col justify-between"
        style={{ backgroundImage: "url('/footer_image.png')" }}
      >
        {/* Subtle Gradient Overlay for Seamless Text Contrast & Bottom Blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#012437]/30 to-[#012437] pointer-events-none" />

        {/* Floating Decorative Accent */}
        <div className="absolute top-[45%] left-[32%] w-6 h-6 bg-emerald-400/20 rounded-full blur-md animate-pulse pointer-events-none" />

        {/* Upper Section: Giant Headline Overlay */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 pt-24 sm:pt-32 pb-12 sm:pb-16 flex flex-col justify-end">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] drop-shadow-md">
              Fold your brand <br className="hidden sm:inline" />
              into the future
            </h2>
          </div>
        </div>

        {/* Lower Section: Bottom Navigation & Branding (Over Dark Teal Surface) */}
        <div className="relative z-10 w-full pt-8 pb-10 px-6 sm:px-10 lg:px-16 border-white/10">
          <div className="max-w-7xl mx-auto">
            {/* Upper Row: Brand Info + Navigation Columns + Action Button */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
              
              {/* Left Column: Brand Logo & Copyright */}
              <div className="flex flex-col space-y-3 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-xl bg-white/90 p-1.5 shadow-md flex items-center justify-center">
                    <Image
                      src="/logo.png"
                      alt="Origami Studio Logo"
                      width={40}
                      height={40}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xl font-black uppercase tracking-wider text-white font-changa">
                    ORIGAMI <span className="text-[#ff5e00]">STUDIO</span>
                  </span>
                </div>
                
                <div className="text-xs text-emerald-100/70 space-y-1">
                  <p className="font-medium">Copyright © {new Date().getFullYear()}</p>
                  <p className="text-[11px] text-emerald-200/50">Your brand. Folded to perfection.</p>
                </div>
              </div>

              {/* Center Columns: Pipe-Separated Navigation Links */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-3 text-xs sm:text-sm font-medium text-emerald-100/90">
                {NAV_COLUMNS.map((col, idx) => (
                  <ul key={idx} className="space-y-3">
                    {col.map((link) => {
                      const isInternalPage = link.href.startsWith("/");
                      return (
                        <li key={link.label} className="flex items-center gap-2">
                          {isInternalPage ? (
                            <Link
                              href={link.href}
                              className="hover:text-[#ff5e00] transition-colors"
                            >
                              {link.label}
                            </Link>
                          ) : (
                            <a
                              href={link.href}
                              onClick={(e) => handleNavClick(e, link.href)}
                              className="hover:text-[#ff5e00] transition-colors"
                            >
                              {link.label}
                            </a>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                ))}
              </div>

              {/* Right Column: CTA Button */}
              <div className="shrink-0 w-full sm:w-auto">
                <a
                  href="#contact-us"
                  onClick={(e) => handleNavClick(e, "#contact-us")}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#ff5e00] hover:bg-[#e05300] text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 shadow-[0_4px_20px_rgba(255,94,0,0.4)] hover:scale-105"
                >
                  <span>Book a Call</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Bottom Row Divider */}
            <div className="w-full my-6 sm:my-8" />

            {/* Bottom Footer Meta: Address & Social Icons */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-100/60">
              <div className="flex items-center gap-2 text-center sm:text-left">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>NITK Surathkal, Mangalore, Karnataka 575025</span>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4 text-emerald-200/80">
                {/* Twitter / X */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="p-1.5 rounded-full hover:text-[#ff5e00] hover:bg-white/5 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/origamistudioin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-1.5 rounded-full hover:text-[#ff5e00] hover:bg-white/5 transition-colors"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="p-1.5 rounded-full hover:text-[#ff5e00] hover:bg-white/5 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-1.5 rounded-full hover:text-[#ff5e00] hover:bg-white/5 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
