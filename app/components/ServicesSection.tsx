"use client";

import React, { useState } from "react";
import {
  Share2,
  Camera,
  Video,
  Globe,
  TrendingUp,
  Bot,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  X,
} from "lucide-react";
import FlowingMenu, { FlowingMenuItem } from "./FlowingMenu";

const SERVICES: FlowingMenuItem[] = [
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
    id: "websites-seo",
    title: "Fullstack Websites with SEO",
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
    id: "gbp-ranking",
    title: "Google Business Profile Ranking",
    subtitle: "Dominate Local Google Maps & Search",
    icon: TrendingUp,
    badge: "Local SEO",
    image: "/what_we_do/google_business_profile.png",
    description:
      "Claim top positions in the coveted Google Local 3-Pack. We optimize your business profile, automate customer review flows, and establish local map dominance.",
    deliverables: [
      "Complete Business Profile Audit & Geo-Optimization",
      "Local Map Pack Rank Boosting & Citation Building",
      "Automated Review Request & AI Reply Systems",
      "Geo-Tagged Local Product & Service Posts",
      "Competitor Map Spam Removal & Monitoring",
      "Monthly Local Search Insights & Call Analytics",
    ],
    metrics: "Top 3 Map Pack Ranking in 45 Days",
  },
  {
    id: "offline-shoots",
    title: "Offline Shoots & Studio Production",
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
  {
    id: "whatsapp-agents",
    title: "WhatsApp Marketing & Agents",
    subtitle: "Direct Broadcasts & Conversational Funnels",
    icon: MessageSquare,
    badge: "Automation",
    image: "/what_we_do/whatsapp.jpg",
    description:
      "Turn WhatsApp into your highest-converting sales channel. Broadcast promotions, automate cart recovery, and deliver 1-on-1 customer journeys right inside WhatsApp.",
    deliverables: [
      "Official WhatsApp Business API Setup",
      "Automated Broadcast Campaign Engine",
      "Interactive Product Catalog & Cart Checkout",
      "Custom Conversational Chatbot Flow Design",
      "CRM & Payment Gateway Integrations",
      "Opt-In Growth & Compliance Management",
    ],
    metrics: "98% Open Rate & 35% Direct Click-Through",
  },
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<FlowingMenuItem | null>(
    null
  );

  return (
    <section
      id="what-we-do"
      className="relative py-24 bg-slate-50 border-t border-slate-200 text-slate-900 overflow-hidden"
    >
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FC6100]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#FC6100] uppercase tracking-widest bg-orange-100/80 px-4 py-1.5 rounded-full inline-block mb-3 border border-orange-200">
            Interactive Experience
          </span>
          <h2 className="font-changa text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-slate-900">
            WHAT WE DO?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-xl mx-auto font-medium">
            Hover over any service to reveal the interactive flow. Click to view complete deliverables and expected outcomes.
          </p>
        </div>

        {/* Flowing Menu Component */}
        <FlowingMenu
          items={SERVICES}
          onSelectService={setSelectedService}
          speed={18}
          textColor="#0f172a"
          bgColor="#ffffff"
          marqueeBgColor="#FC6100"
          marqueeTextColor="#ffffff"
          borderColor="#e2e8f0"
        />
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white border border-[#FC6100]/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-[#FC6100] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-[#FC6100]/40 flex items-center justify-center text-[#FC6100]">
                {React.createElement(selectedService.icon, {
                  className: "w-7 h-7",
                })}
              </div>
              <div>
                <span className="text-xs font-mono text-[#FC6100] uppercase tracking-wider font-bold">
                  {selectedService.badge}
                </span>
                <h3 className="font-changa text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              {selectedService.description}
            </p>

            <div className="mb-6 p-4 rounded-2xl bg-orange-50/60 border border-orange-200">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-1">
                EXPECTED IMPACT
              </span>
              <span className="text-base sm:text-lg font-changa font-bold text-[#FC6100]">
                {selectedService.metrics}
              </span>
            </div>

            <div className="mb-8">
              <h4 className="font-changa text-lg font-bold text-slate-900 uppercase mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FC6100]" />
                WHAT'S INCLUDED IN DELIVERABLES:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedService.deliverables.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#FC6100] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200">
              <button
                onClick={() => setSelectedService(null)}
                className="px-5 py-2.5 rounded-full text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                Close
              </button>
              <a
                href="#get-in-touch"
                onClick={() => setSelectedService(null)}
                className="px-6 py-2.5 rounded-full text-xs font-changa font-bold text-white bg-gradient-to-r from-[#FC6100] to-[#FF8A3C] shadow-md hover:brightness-110"
              >
                GET CUSTOM PROPOSAL →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
