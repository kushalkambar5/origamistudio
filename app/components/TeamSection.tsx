"use client";

import React, { type MouseEvent, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { Globe, ArrowUpRight } from "lucide-react";

// Social SVG Icons
const LinkedInIcon = ({ className = "w-4 h-4 fill-current" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

interface SocialLink {
  label: string;
  url: string;
  icon: "linkedin" | "website";
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  links: SocialLink[];
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Rudra Prathap",
    role: "video editting & marketting",
    image: "/team/rudra.jpg",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/rudra-prathap-a84402395/",
        icon: "linkedin",
      },
    ],
  },
  {
    name: "Shrujan Satish",
    role: "shoots & marketing",
    image: "/team/shrujan.jpg",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/shrujan-satish-a087ab303/",
        icon: "linkedin",
      },
    ],
  },
  {
    name: "Kushal B K",
    role: "tech (web & ai agents)",
    image: "/team/kushal.jpg",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/kushalbk/",
        icon: "linkedin",
      },
      {
        label: "Website",
        url: "https://kushalbk.vercel.app/",
        icon: "website",
      },
    ],
  },
];

export default function TeamSection() {
  const [img, setImg] = useState<{ src: string | null; alt: string; opacity: number }>({
    src: null,
    alt: "",
    opacity: 0,
  });

  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };

  const imagePos = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const { clientX, clientY } = e;
    const relativeX = clientX - containerRect.left;
    const relativeY = clientY - containerRect.top;

    imagePos.x.set(relativeX - imageRef.current.offsetWidth / 2);
    imagePos.y.set(relativeY - imageRef.current.offsetHeight / 2);
  };

  const handleImageInteraction = (member: TeamMember, opacity: number) => {
    setImg({ src: member.image, alt: member.name, opacity });
  };

  const hideImageInteraction = () => {
    setImg((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <section
      id="team"
      ref={containerRef}
      onMouseMove={handleMove}
      className="relative py-24 bg-slate-50 text-slate-900 border-t border-slate-200 overflow-hidden"
    >
      {/* Ambient Lighting Background */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#ff5e00]/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-changa text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#ff5e00]">
            Team
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg font-light leading-relaxed">
            All three members of the team are from NITK Surathkal, Manglore and pursuing Mechanical Engineering degree.
          </p>
        </div>

        {/* Team Image Reveal List */}
        <div className="w-full max-w-7xl mx-auto border-t border-slate-200">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              onMouseEnter={() => handleImageInteraction(member, 1)}
              onMouseMove={() => handleImageInteraction(member, 1)}
              onMouseLeave={() => handleImageInteraction(member, 0)}
              className="group relative py-7 sm:py-9 px-2 sm:px-6 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-center gap-4 sm:gap-8 cursor-pointer border-b border-slate-200 hover:bg-white/80 transition-colors duration-200"
            >
              {/* Column 1: Left - Name (Single line) */}
              <div className="flex items-center gap-4 justify-start whitespace-nowrap">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#ff5e00]/40 md:hidden flex-shrink-0"
                />
                <h3 className="font-changa text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 group-hover:text-[#ff5e00] transition-colors duration-200 whitespace-nowrap">
                  {member.name}
                </h3>
              </div>

              {/* Column 2: Middle - Role (Centered in remaining space) */}
              <div className="flex items-center justify-start md:justify-center px-2">
                <span className="text-sm sm:text-base text-slate-600 font-medium font-mono capitalize flex items-center gap-2 text-left md:text-center">
                  {member.role}
                  <span className="w-3 h-3 bg-[#ff5e00] inline-block rounded-sm group-hover:scale-125 transition-transform duration-200 flex-shrink-0"></span>
                </span>
              </div>

              {/* Column 3: Right - Links */}
              <div
                className="flex items-center justify-start md:justify-end gap-2 z-20 whitespace-nowrap"
                onMouseEnter={(e) => {
                  e.stopPropagation();
                  hideImageInteraction();
                }}
                onMouseMove={(e) => {
                  e.stopPropagation();
                  hideImageInteraction();
                }}
                onMouseLeave={(e) => {
                  e.stopPropagation();
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {member.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-white hover:bg-[#ff5e00] hover:border-[#ff5e00] text-xs font-semibold shadow-sm transition-all duration-200 group/link"
                    title={link.label}
                  >
                    {link.icon === "linkedin" ? (
                      <LinkedInIcon className="w-3.5 h-3.5 fill-current" />
                    ) : (
                      <Globe className="w-3.5 h-3.5" />
                    )}
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Reveal Image */}
      {img.src && (
        <motion.img
          ref={imageRef}
          src={img.src}
          alt={img.alt}
          className="w-[260px] sm:w-[300px] h-[320px] sm:h-[360px] rounded-2xl object-cover shadow-2xl border-2 border-[#ff5e00]/40 absolute top-0 left-0 transition-opacity duration-200 ease-in-out pointer-events-none z-30 hidden md:block"
          style={{
            x: imagePos.x,
            y: imagePos.y,
            opacity: img.opacity,
          }}
        />
      )}
    </section>
  );
}


