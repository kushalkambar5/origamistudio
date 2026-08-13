"use client";

import React, { useState } from "react";
import {
  Cpu,
  MessageCircle,
  MapPin,
  BarChart3,
  Code,
  CheckCircle,
  ArrowUpRight,
  Zap,
  Sparkles,
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  tagline: string;
  icon: React.ElementType;
  category: string;
  description: string;
  features: string[];
  metric: string;
  version: string;
}

const PRODUCTS: Product[] = [
  {
    id: "ai-scheduler",
    name: "Origami AI Content Engine",
    tagline: "Autonomous Social Content & Multi-Platform Scheduler",
    icon: Cpu,
    category: "AI & Content Tech",
    description:
      "Engineered in-house to automatically generate high-converting social copy, design trend-aligned visual carousels, and schedule posts across Instagram, LinkedIn, X, and Facebook.",
    features: [
      "Custom Brand Voice AI Fine-Tuning",
      "Automated Multi-Platform Scheduling",
      "Viral Trend & Hashtag Analytics",
      "Visual Carousel & Reel Template Generator",
      "Team Approval & Workflow Control",
    ],
    metric: "Saves 25+ Hours Per Week",
    version: "v3.2 Enterprise",
  },
  {
    id: "whatsapp-crm",
    name: "WhatsApp Blast & CRM Connect",
    tagline: "Conversational Sales & Broadcast Funnel Engine",
    icon: MessageCircle,
    category: "Automation Tech",
    description:
      "Turn WhatsApp into your primary revenue driver. Send personalized broadcasts to segmented lists, auto-qualify leads with natural language AI, and close deals directly.",
    features: [
      "Official Meta WhatsApp API Integration",
      "Segmented List Broadcast Engine",
      "Conversational AI Sales Bot",
      "Automated Cart Recovery & Reminders",
      "HubSpot, Salesforce & Custom CRM Sync",
    ],
    metric: "98% Open Rate & 35% Conversion",
    version: "v2.8 Pro",
  },
  {
    id: "gbp-booster",
    name: "GBP Rank Maximizer",
    tagline: "Google Business Profile Maps Ranking System",
    icon: MapPin,
    category: "Local SEO Tech",
    description:
      "Dominates local search results. Monitors your Google Maps local 3-pack rank in real time, automates review request SMS/emails, and generates sentiment-optimized AI replies.",
    features: [
      "Geo-Grid Map Rank Tracking",
      "Automated Customer Review Collector",
      "AI Review Reply & Sentiment Analysis",
      "Competitor Citation & Spam Monitor",
      "Automated Local Geo-Post Publisher",
    ],
    metric: "#1 Map Rank in 30-45 Days",
    version: "v4.0 Growth",
  },
  {
    id: "seo-pulse",
    name: "SEO Pulse Command Center",
    tagline: "Real-Time Keyword & Technical Site Monitor",
    icon: BarChart3,
    category: "Analytics Tech",
    description:
      "A comprehensive search engine intelligence platform that audits your technical SEO daily, tracks keyword ranking shifts, and alerts you to algorithm updates.",
    features: [
      "Daily Keyword Position Tracking",
      "Core Web Vitals & Speed Auditor",
      "Competitor Rank Alert Notifications",
      "Schema & OpenGraph Validator",
      "Automated PDF Executive Reports",
    ],
    metric: "100% Technical SEO Accuracy",
    version: "v1.9 Live",
  },
  {
    id: "web-stack",
    name: "Origami WebStack Engine",
    tagline: "Ultra-Fast Next.js 16 Web Architecture",
    icon: Code,
    category: "Web Tech",
    description:
      "Our battle-tested enterprise Next.js boilerplate stack loaded with Tailwind CSS v4, built-in SEO metadata, internationalization support, and sub-100ms response times.",
    features: [
      "Next.js 16 App Router Foundation",
      "Tailwind v4 Theme System",
      "Structured JSON-LD SEO Built-In",
      "Zero Cumulative Layout Shift (CLS)",
      "Vercel & Cloudflare Edge Deployment Ready",
    ],
    metric: "100/100 PageSpeed Performance",
    version: "v2.5 Release",
  },
];

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState<string>(PRODUCTS[0].id);

  const activeProduct =
    PRODUCTS.find((p) => p.id === activeTab) || PRODUCTS[0];

  return (
    <section
      id="products"
      className="relative py-24 bg-[#0A0E17] text-white border-t border-slate-800 overflow-hidden"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FC6100]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FC6100]/10 border border-[#FC6100]/30 text-[#FC6100] text-xs font-semibold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>PROPRIETARY PRODUCTS & SOLUTIONS</span>
          </div>
          <h2 className="font-changa text-3xl sm:text-5xl font-extrabold uppercase tracking-tight">
            PROPRIETARY <span className="text-[#FC6100]">TECH PRODUCTS</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            We don't just use existing tools — we engineer our own internal marketing software and AI automation systems to give our clients an unbeatable advantage.
          </p>
        </div>

        {/* Product Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {PRODUCTS.map((prod) => {
            const IconComp = prod.icon;
            const isSelected = prod.id === activeTab;
            return (
              <button
                key={prod.id}
                onClick={() => setActiveTab(prod.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isSelected
                    ? "bg-[#FC6100] text-white shadow-[0_0_20px_rgba(252,97,0,0.4)] scale-105"
                    : "bg-[#0F1420] text-slate-300 hover:text-white border border-white/10 hover:border-[#FC6100]/40"
                }`}
              >
                <IconComp className="w-4 h-4" />
                <span>{prod.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Product Card Showcase */}
        <div className="relative p-6 sm:p-10 rounded-3xl bg-[#0F1420] border border-[#FC6100]/30 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="absolute top-0 right-0 p-8 opacity-5 text-[#FC6100] pointer-events-none hidden lg:block">
            {React.createElement(activeProduct.icon, { className: "w-64 h-64" })}
          </div>

          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-[#FC6100]/20 text-[#FC6100] border border-[#FC6100]/40 text-xs font-mono font-bold uppercase">
                {activeProduct.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {activeProduct.version}
              </span>
            </div>

            <h3 className="font-changa text-2xl sm:text-4xl font-extrabold text-white mb-2">
              {activeProduct.name}
            </h3>
            <p className="text-sm font-semibold text-[#FC6100] mb-4">
              {activeProduct.tagline}
            </p>
            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-6">
              {activeProduct.description}
            </p>

            <div className="space-y-3 mb-8">
              {activeProduct.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle className="w-4 h-4 text-[#FC6100] shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#get-in-touch"
                className="px-6 py-3 rounded-full font-changa text-sm font-bold text-white bg-gradient-to-r from-[#FC6100] to-[#FF8A3C] shadow-lg hover:brightness-110 flex items-center gap-2"
              >
                <span>REQUEST PRODUCT DEMO</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <div className="text-xs font-mono text-slate-400">
                ⚡ Included in Enterprise retainers
              </div>
            </div>
          </div>

          {/* Metric Highlight Box */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-black/60 border border-white/10 flex flex-col justify-center items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-[#FC6100]/20 border border-[#FC6100] flex items-center justify-center text-[#FC6100] mb-4">
              {React.createElement(activeProduct.icon, { className: "w-8 h-8" })}
            </div>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1">
              PROVEN PERFORMANCE METRIC
            </span>
            <div className="font-changa text-2xl sm:text-3xl font-extrabold text-white text-gradient-orange mb-2">
              {activeProduct.metric}
            </div>
            <p className="text-xs text-slate-400 font-light">
              Continuous updates & dedicated technical support included.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
