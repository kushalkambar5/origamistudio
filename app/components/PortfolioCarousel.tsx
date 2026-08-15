"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface WorkItem {
  id: string;
  title: string;
  category: string;
  description: string;
  link: string;
  image: string;
  side: "left" | "right";
}

const WORK_ITEMS: WorkItem[] = [
  {
    id: "zero-point-five",
    title: "0.5 Show",
    category: "Long-Form Video Editing",
    description: "Long form video editing",
    link: "https://youtube.com/@thezeropointfiveshow?si=8QIY4RAYgQYCqq5H",
    image: "/our_work/zero_point_five_show.png",
    side: "left",
  },
  {
    id: "simracing",
    title: "SIMRacing",
    category: "Short-Form Management",
    description: "Short form content management",
    link: "https://www.instagram.com/simracing.hq?igsh=cjl6NG40MG90MDVl",
    image: "/our_work/simracing.png",
    side: "right",
  },
  {
    id: "boatigo",
    title: "Boatigo",
    category: "Marketing Your Brand",
    description: "Grow your business locally",
    link: "https://www.instagram.com/boatigo.in/",
    image: "/our_work/boatigo.png",
    side: "left",
  },
  {
    id: "xylon",
    title: "Xylon",
    category: "Short-Form Management",
    description: "Short form content management",
    link: "https://www.instagram.com/xylon.bar?igsh=MWJzMjAxYzd5aXU0Yg==",
    image: "/our_work/xylon.png",
    side: "right",
  },
  {
    id: "nitk-racing",
    title: "NITK Racing",
    category: "Our Majestic Work",
    description: "Made GSAP and ThreeJS made 3d animated website for the Formula Student club of NITK.",
    link: "https://nitkracing.vercel.app/",
    image: "/our_work/nitkracing.png",
    side: "left",
  },
];

export default function PortfolioCarousel() {
  return (
    <section
      id="our-work"
      className="relative py-20 sm:py-32 bg-black text-white overflow-hidden"
    >
      {/* Background Radial Glows */}
      <div className="absolute top-1/4 left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#ff5e00]/5 blur-[80px] sm:blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-amber-500/5 blur-[80px] sm:blur-[140px] rounded-full pointer-events-none" />

      <div className="w-full relative z-10">
        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto px-4 mb-20 sm:mb-32">
          <h2 className="font-changa text-5xl sm:text-7xl lg:text-8xl font-extrabold uppercase tracking-tight text-white leading-none">
            <span className="text-[#ff5e00]">OUR WORK</span>
          </h2>
        </div>

        {/* WORK ITEMS GRID */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-40">
          {WORK_ITEMS.map((item) => {
            const isLeft = item.side === "left";
            return (
              <div
                key={item.id}
                className={`flex w-full ${isLeft ? "justify-start" : "justify-end"}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full lg:w-[85%] xl:w-[75%]"
                >
                  {/* Pre-title/Header info */}
                  <div className={`mb-4 ${isLeft ? "text-left pl-2" : "text-right pr-2"}`}>
                    <span className="inline-block text-[#ff5e00] font-changa text-xs sm:text-sm font-semibold tracking-widest uppercase mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-changa text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-none">
                      {item.title}
                    </h3>
                  </div>

                  {/* Card Box */}
                  <div className="group relative bg-neutral-950/40 hover:bg-neutral-900/30 border border-neutral-900 hover:border-neutral-800 transition-all duration-500 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-xs overflow-hidden">
                    {/* Decorative background hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#ff5e00]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className={`flex flex-col md:flex-row gap-6 sm:gap-8 items-center ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}>
                      {/* Card Image */}
                      <div className="w-full md:w-[55%] aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden relative bg-neutral-950 border border-neutral-900 group-hover:border-neutral-800 transition-colors duration-500">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full h-full relative overflow-hidden cursor-pointer"
                        >
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover object-center transform scale-100 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                          />
                        </a>
                      </div>

                      {/* Card Text & Action */}
                      <div className="w-full md:w-[45%] flex flex-col justify-between self-stretch py-2 text-left">
                        <div className="flex-1 flex flex-col justify-center">
                          <p className="text-neutral-300 text-base sm:text-lg lg:text-xl font-light leading-relaxed mb-6">
                            {item.description}
                          </p>
                        </div>

                        <div className="mt-auto">
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-[#ff5e00] hover:text-white transition-all duration-300 transform hover:translate-y-[-2px] active:translate-y-0 shadow-md group/btn cursor-pointer"
                          >
                            <span>Explore Project</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
