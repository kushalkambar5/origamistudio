"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Home, Sparkles, FolderGit2, Compass, Mail, HelpCircle } from "lucide-react";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#000000] text-white flex flex-col font-sans relative overflow-x-hidden selection:bg-[#ff5e00] selection:text-white">
      {/* Background Ambient Glows & Grid Details */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none z-0">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[450px] bg-[#ff5e00]/15 rounded-full blur-[120px]" />
        <div className="absolute top-[30%] left-[20%] w-48 sm:w-72 h-48 sm:h-72 bg-orange-600/10 rounded-full blur-[90px]" />
      </div>

      {/* Top Header Navigation */}
      <header className="w-full relative z-20 px-4 sm:px-8 py-4 sm:py-6 max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3 group transition-transform duration-300 active:scale-95"
        >
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-neutral-900 border border-neutral-800 p-1 group-hover:border-[#ff5e00]/50 transition-colors">
            <Image
              src="/logo.png"
              alt="Origami Studio Logo"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
          </div>
          <span className="font-changa text-sm sm:text-lg font-bold tracking-wider uppercase text-white">
            ORIGAMI <span className="text-[#ff5e00]">STUDIO</span>
          </span>
        </Link>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-neutral-200 bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 transition-all active:scale-95 shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-[#ff5e00]" />
          <span>Back to Home</span>
        </Link>
      </header>

      {/* Main 404 Hero Content */}
      <div className="grow flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10 max-w-4xl mx-auto w-full">
        
        {/* Origami Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-[#ff5e00]/30 text-[#ff5e00] text-xs font-semibold tracking-wide uppercase shadow-sm mb-6 animate-in fade-in duration-500">
          <Compass className="w-3.5 h-3.5 animate-spin-slow" />
          <span>404 • Page Not Found</span>
        </div>

        {/* Large 404 Hero Graphic */}
        <h1 className="font-changa text-7xl sm:text-9xl lg:text-[11rem] font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-500 selection:bg-[#ff5e00] select-none">
          4<span className="text-[#ff5e00] inline-block hover:scale-105 transition-transform duration-300">0</span>4
        </h1>

        {/* Subtitle & Descriptive Message */}
        <h2 className="mt-4 font-changa text-xl sm:text-3xl font-bold uppercase tracking-wide text-white">
          Folded into the wrong dimension
        </h2>
        <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-md mx-auto leading-relaxed font-sans">
          The page you are looking for might have been moved, renamed, or refolded into oblivion. Let’s get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#ff5e00] hover:bg-[#e05300] shadow-[0_0_25px_rgba(255,94,0,0.35)] hover:shadow-[0_0_35px_rgba(255,94,0,0.5)] transition-all active:scale-95"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/#what-we-do"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-neutral-200 bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 transition-all active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-[#ff5e00]" />
            <span>Explore Our Services</span>
          </Link>
        </div>

        {/* Popular Destination Quick Links Grid */}
        <div className="mt-14 sm:mt-16 w-full pt-10 border-t border-neutral-800/80">
          <p className="text-xs font-mono tracking-widest text-neutral-500 uppercase mb-6">
            POPULAR DESTINATIONS
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
            <Link
              href="/"
              className="p-3.5 sm:p-4 rounded-2xl bg-neutral-900/50 hover:bg-neutral-900 border border-neutral-800/70 hover:border-[#ff5e00]/40 transition-all group"
            >
              <div className="w-8 h-8 rounded-xl bg-neutral-800/80 flex items-center justify-center mb-2.5 text-[#ff5e00] group-hover:scale-110 transition-transform">
                <Home className="w-4 h-4" />
              </div>
              <h3 className="font-changa text-xs sm:text-sm font-bold text-white uppercase group-hover:text-[#ff5e00] transition-colors">
                Home
              </h3>
              <p className="text-[11px] text-neutral-400 mt-0.5">Start from the beginning</p>
            </Link>

            <Link
              href="/#our-work"
              className="p-3.5 sm:p-4 rounded-2xl bg-neutral-900/50 hover:bg-neutral-900 border border-neutral-800/70 hover:border-[#ff5e00]/40 transition-all group"
            >
              <div className="w-8 h-8 rounded-xl bg-neutral-800/80 flex items-center justify-center mb-2.5 text-[#ff5e00] group-hover:scale-110 transition-transform">
                <FolderGit2 className="w-4 h-4" />
              </div>
              <h3 className="font-changa text-xs sm:text-sm font-bold text-white uppercase group-hover:text-[#ff5e00] transition-colors">
                Our Work
              </h3>
              <p className="text-[11px] text-neutral-400 mt-0.5">Explore recent projects</p>
            </Link>

            <Link
              href="/#faqs"
              className="p-3.5 sm:p-4 rounded-2xl bg-neutral-900/50 hover:bg-neutral-900 border border-neutral-800/70 hover:border-[#ff5e00]/40 transition-all group"
            >
              <div className="w-8 h-8 rounded-xl bg-neutral-800/80 flex items-center justify-center mb-2.5 text-[#ff5e00] group-hover:scale-110 transition-transform">
                <HelpCircle className="w-4 h-4" />
              </div>
              <h3 className="font-changa text-xs sm:text-sm font-bold text-white uppercase group-hover:text-[#ff5e00] transition-colors">
                FAQs
              </h3>
              <p className="text-[11px] text-neutral-400 mt-0.5">Got questions? We've answers</p>
            </Link>

            <Link
              href="/#contact-us"
              className="p-3.5 sm:p-4 rounded-2xl bg-neutral-900/50 hover:bg-neutral-900 border border-neutral-800/70 hover:border-[#ff5e00]/40 transition-all group"
            >
              <div className="w-8 h-8 rounded-xl bg-neutral-800/80 flex items-center justify-center mb-2.5 text-[#ff5e00] group-hover:scale-110 transition-transform">
                <Mail className="w-4 h-4" />
              </div>
              <h3 className="font-changa text-xs sm:text-sm font-bold text-white uppercase group-hover:text-[#ff5e00] transition-colors">
                Contact Us
              </h3>
              <p className="text-[11px] text-neutral-400 mt-0.5">Get in touch with us</p>
            </Link>
          </div>
        </div>

      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
