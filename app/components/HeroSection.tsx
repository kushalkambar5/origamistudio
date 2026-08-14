"use client";

import React from "react";
import Image from "next/image";
import ClientVideoCarousel from "./ClientVideoCarousel";

export default function HeroSection() {
  return (
    <>
      <section
        id="home"
        className="relative w-full h-full pt-16 sm:pt-20 pb-3 sm:pb-5 flex flex-col justify-between items-center overflow-hidden bg-white text-slate-900"
      >
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <Image
            src="/hero_section_background.webp"
            alt="Hero Background"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Background Decorative Origami Grid Overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Origami Polygon Wireframe Background Overlay */}
          <svg
            className="absolute inset-0 w-full h-full opacity-20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="origami-grid"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 80 0 L 0 0 0 80 Z M 80 80 L 80 0 0 80 Z"
                  fill="none"
                  stroke="rgba(255,94,0,0.3)"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#origami-grid)" />
          </svg>
        </div>


        {/* Full Viewport Width 3D Video Carousel Container */}
        <div className="w-full relative z-10 overflow-visible my-auto py-2">
          <ClientVideoCarousel />
        </div>

        {/* Subtitle / Big Headline - Below Video Carousel */}
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center z-10 -mt-6 sm:-mt-10 md:-mt-14 pb-4 sm:pb-8">
          <h2 className="font-changa text-8xl2xl sm:text-6xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] sm:leading-[1.1] max-w-4xl">
            We help you outgrow the competetion{" "}
            {/* <span className="underline decoration-[#ff5e00] decoration-2 sm:decoration-4 underline-offset-4 sm:underline-offset-8">
              stand out
            </span>,{" "}
            <br />
            <span className="underline decoration-[#ff5e00] decoration-2 sm:decoration-4 underline-offset-4 sm:underline-offset-8">
              scale up
            </span>{" "}
            and{" "}
            <span className="underline decoration-[#ff5e00] decoration-2 sm:decoration-4 underline-offset-4 sm:underline-offset-8">
              stay ahead
            </span> */}
            .
          </h2>
        </div>
      </section>
    </>
  );
}
