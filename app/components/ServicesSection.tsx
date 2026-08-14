"use client";

import React from "react";
import {
  Share2,
  Camera,
  Video,
  Globe,
  TrendingUp,
  Bot,
  MessageSquare,
} from "lucide-react";
import FlowingMenu, { FlowingMenuItem } from "./FlowingMenu";

const SERVICES: FlowingMenuItem[] = [
  {
    id: "video-editing",
    title: "Video Editing & Motion Graphics",
    subtitle: "High-Retention Reels, Shorts & Brand Films",
    icon: Video,
    badge: "High Impact",
    image: "/what_we_do/video_editing.jpg",
    description:
      "We edit raw footage into captivating short-form videos designed to maximize watch time, retention, and viral reach across Instagram, YouTube Shorts, and TikTok.",
    deliverables: [
      "Dynamic Text Animations & Subtitles",
      "Sound Design & Viral Background Score Sync",
      "3D Motion Graphics & Logo Animations",
      "Hook Testing & Visual Pacing Optimization",
      "Multi-Platform Aspect Ratio Exports (9:16, 16:9, 1:1)",
      "High-Click Thumbnail Graphic Creation",
    ],
    metrics: "2.1M+ Organic Impressions Generated",
  },
  {
    id: "social-media",
    title: "Social Media Management",
    subtitle: "Viral Content & Brand Positioning",
    icon: Share2,
    badge: "Core Service",
    image: "/what_we_do/social_media_management.jpg",
    description:
      "We design end-to-end social media strategies that turn passive scrollers into passionate brand advocates. From visual aesthetic feeds to viral short-form video calendars.",
    deliverables: [
      "Custom Monthly Content Calendars",
      "High-Conversion Reel & Short Video Scripts",
      "Aesthetic Grid & Story Design Templates",
      "24/7 Community & Comment Engagement",
      "Influencer Outreach & Strategic Partnerships",
      "In-Depth Analytics & ROI Reporting",
    ],
    metrics: "+450% Engagement Boost in 60 Days",
  },
  {
    id: "media-production",
    title: "Media Production",
    subtitle: "Cinematic Brand & Commercial Photography",
    icon: Camera,
    badge: "Creative Studio",
    image: "/what_we_do/offline_shoots.jpg",
    description:
      "High-end commercial shoots tailored for products, founder portraits, and corporate facilities. We bring studio lighting, professional cameras, and creative direction to your location.",
    deliverables: [
      "Commercial Product Photography & Styling",
      "Founder & Team Executive Headshots",
      "On-Location Facility & Behind-The-Scenes Shoots",
      "4K Commercial Videography & B-Roll Capture",
      "Professional Lighting & Audio Production",
      "Full Color Grading & Retouching",
    ],
    metrics: "Studio Quality Visuals That Command Attention",
  },
  {
    id: "seo-ready-wesbite",
    title: "Fullstack Websites",
    subtitle: "Next-Gen Web Apps Built for Speed & Conversion",
    icon: Globe,
    badge: "Tech Solution",
    image: "/what_we_do/websites.jpg",
    description:
      "We build ultra-fast, high-performing websites and web applications with Next.js, tailored CSS design systems, and deep search engine optimization engineered into every line of code.",
    deliverables: [
      "Custom Next.js & React App Architecture",
      "100/100 Google PageSpeed & Core Web Vitals",
      "Technical SEO, Schema & OpenGraph Meta",
      "Mobile-First Responsive Layouts & Animations",
      "High-Converting Landing Page Copywriting",
      "Seamless Analytics & Lead Form Integrations",
    ],
    metrics: "Sub-100ms Load Times & 3.4x Higher Conversions",
  },
  {
    id: "ai-agents",
    title: "Custom AI Agents & Bots",
    subtitle: "24/7 Lead Qualification & Auto-Support",
    icon: Bot,
    badge: "AI Powered",
    image: "/what_we_do/ai_agents.png",
    description:
      "Deploy custom AI agents trained on your business knowledge base. Qualify leads instantly, schedule appointments, and provide instant customer support around the clock.",
    deliverables: [
      "Custom Knowledge Base AI Training",
      "Website & Web App Conversational Chatbots",
      "Automated Lead Scoring & CRM Sync",
      "Multi-Language Support & Instant Translations",
      "Calendar Integration for Direct Booking",
      "Security & Privacy Compliant Frameworks",
    ],
    metrics: "Zero Missed Leads & 80% Support Automation",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="what-we-do"
      className="relative py-16 sm:py-24 bg-slate-50 border-t border-slate-200 text-slate-900 overflow-hidden"
    >
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#ff5e00]/10 blur-[100px] sm:blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-amber-400/10 blur-[100px] sm:blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <h2 className="font-changa text-2xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#ff5e00]">
            What We Do?
          </h2>
        </div>

        {/* Flowing Menu Component */}
        <FlowingMenu
          items={SERVICES}
          speed={18}
          textColor="#0f172a"
          bgColor="#ffffff"
          marqueeBgColor="#ff5e00"
          marqueeTextColor="#000000"
          borderColor="#e2e8f0"
        />
      </div>
    </section>
  );
}
