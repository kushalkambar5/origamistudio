"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp, Heart, Sparkles } from "lucide-react";

const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "About Us", href: "#about" },
  { label: "Our Work", href: "#our-work" },
  { label: "Tech Products", href: "#products" },
  { label: "Our Team", href: "#team" },
  { label: "FAQs", href: "#faqs" },
  { label: "Project Estimator", href: "#get-in-touch" },
  { label: "Contact Us", href: "#contact-us" },
];

const SERVICES_SUMMARY = [
  "Social Media Marketing",
  "Fullstack Websites & SEO",
  "Google Business Profile Ranking",
  "Commercial Offline Shoots",
  "Video Editing & Motion Graphics",
  "AI Lead Qualification Agents",
  "WhatsApp Automation Engines",
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#05070B] text-white border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
          {/* Brand & Slogan Column */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#home" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-black/60 border border-[#FC6100]/40 p-1 flex items-center justify-center shadow-lg">
                <Image
                  src="/logo.png"
                  alt="Origami Studio Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <span className="font-changa text-2xl font-bold uppercase tracking-wider">
                ORIGAMI <span className="text-[#FC6100]">STUDIO</span>
              </span>
            </a>

            <div className="p-4 rounded-2xl bg-[#0A0E17] border border-[#FC6100]/30 max-w-sm">
              <span className="font-changa text-sm text-[#FC6100] uppercase tracking-widest block font-bold">
                YOUR BRAND. FOLDED TO PERFECTION.
              </span>
              <p className="text-slate-400 text-xs mt-1 font-mono">
                origamistudio.in • Digital Marketing & Tech Services Agency
              </p>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md font-light">
              We empower startups, local businesses, and global brands by combining strategic social media marketing, ultra-fast web development, local SEO dominance, and autonomous AI automation.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <h4 className="font-changa text-base font-bold text-white uppercase mb-4 tracking-wider text-[#FC6100]">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-400 hover:text-[#FC6100] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FC6100]/40" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services Column */}
          <div className="lg:col-span-4">
            <h4 className="font-changa text-base font-bold text-white uppercase mb-4 tracking-wider text-[#FC6100]">
              SOLUTIONS & PRODUCTS
            </h4>
            <ul className="space-y-2.5">
              {SERVICES_SUMMARY.map((svc) => (
                <li key={svc} className="text-xs sm:text-sm text-slate-400 flex items-center gap-2">
                  <Sparkles className="w-3 h-3 text-[#FC6100] shrink-0" />
                  <span>{svc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} Origami Studio (origamistudio.in). All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#home" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </a>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-[#FC6100] transition-colors flex items-center gap-1.5 font-changa text-xs"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
