"use client";

import React, { useState, useMemo } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
  category: "Services" | "Web & SEO" | "AI & Automation" | "Social & Video" | "Pricing & Ownership";
}

const FAQS: FaqItem[] = [
  {
    question: "What services does Origami Studio offer, and can we hire you for a single service?",
    answer:
      "Origami Studio is a full-service digital marketing and technology agency. You can hire us for standalone specialized projects — such as Next.js Web Development, Google Business Profile Local SEO, AI Lead Capture Agents, or Video Production — or partner with us for an end-to-end multi-channel growth bundle designed to scale your brand.",
    category: "Services",
  },
  {
    question: "Why should we build a custom Next.js website with Origami Studio over WordPress or Wix?",
    answer:
      "Traditional CMS platforms like WordPress or Wix suffer from heavy plugin bloat, slow server response times, and poor Core Web Vitals scores that lower your search engine rankings. Our custom Next.js web applications render instantly on edge networks with sub-100ms load speeds, 100/100 Google Lighthouse performance, and built-in JSON-LD structured data that search engines rank higher.",
    category: "Web & SEO",
  },
  {
    question: "How fast is project delivery, and what is your onboarding process?",
    answer:
      "Onboarding is fast and simple: after an initial discovery call, we deliver a detailed strategy roadmap within 48 hours. Standard social media management and digital campaign launches take 5 to 7 business days. Custom Next.js web development and AI bot deployments are typically completed in 2 to 4 weeks.",
    category: "Services",
  },
  {
    question: "How do your AI Lead Capture Agents and WhatsApp Automation integrate with our CRM?",
    answer:
      "We engineer custom conversational AI agents trained specifically on your brand documentation, service offerings, and product catalogs. Via robust APIs and webhooks, they connect directly to CRMs like HubSpot, Salesforce, Zoho, Google Sheets, or custom databases to automatically qualify leads, answer customer queries, and schedule appointments 24/7 on WhatsApp and your website.",
    category: "AI & Automation",
  },
  {
    question: "How does Google Business Profile (GBP) Local SEO help our business get more customers?",
    answer:
      "We optimize your Google Business Profile to dominate the local Google Maps 'Local 3-Pack' for targeted geographic searches ('near me' intent). By maintaining NAP consistency across local directories, geotagging uploaded media, and establishing automated review workflows, we convert local online searchers into phone calls, map directions, and in-person customers.",
    category: "Web & SEO",
  },
  {
    question: "Do you provide complete end-to-end commercial video production and offline shoots?",
    answer:
      "Yes! We handle the entire video production pipeline — from creative concepting, scriptwriting, and storyboarding to on-location 4K filming, lighting, color grading, dynamic motion graphics, and audio mastering. We deliver high-converting video assets optimized for Instagram Reels, YouTube Shorts, commercial ads, and site banners.",
    category: "Social & Video",
  },
  {
    question: "What is your pricing model, and who owns the website code & video assets?",
    answer:
      "We offer transparent, fixed-price contracts for web app development, brand redesigns, and AI bot builds, alongside flexible monthly retainers for ongoing Social Media, GBP Ranking, and Video Production. Upon final payment, you retain 100% full ownership of all intellectual property, custom website source code, design assets, and raw video footage.",
    category: "Pricing & Ownership",
  },
  {
    question: "What performance reporting and ROI metrics will we receive?",
    answer:
      "Complete transparency is fundamental to our agency. You receive live analytics dashboards and monthly executive strategy calls detailing organic reach, keyword position shifts, web conversion rates, ad Return on Ad Spend (ROAS), and total revenue driven by our campaigns.",
    category: "Pricing & Ownership",
  },
];

const CATEGORIES = [
  "All",
  "Web & SEO",
  "AI & Automation",
  "Social & Video",
  "Pricing & Ownership",
] as const;

export default function FaqSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filteredFaqs = useMemo(() => {
    if (selectedCategory === "All") return FAQS;
    return FAQS.filter((faq) => faq.category === selectedCategory);
  }, [selectedCategory]);

  const faqSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    }),
    []
  );

  return (
    <section
      id="faqs"
      className="relative py-24 sm:py-32 bg-white text-slate-900 border-t border-slate-200 overflow-hidden"
    >
      {/* FAQPage JSON-LD Structured Data for SEO Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Background Decorative Glows */}
      <div className="absolute top-[20%] -right-[10%] w-[500px] h-[500px] bg-[#ff5e00]/10 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] -left-[10%] w-[400px] h-[400px] bg-[#ff5e00]/8 rounded-full blur-[80px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-changa text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-slate-900 mb-4">
            <span className="text-[#ff5e00]">FAQS</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base font-normal">
            Everything you need to know about our services, technology stack, project delivery, and pricing models.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setActiveIndex(null);
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#ff5e00] text-white shadow-md shadow-[#ff5e00]/20 scale-105"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Accordion Container */}
        <LayoutGroup>
          <motion.div
            layout
            className="border border-slate-200 rounded-2xl sm:rounded-3xl p-3 sm:p-6 bg-slate-50/70 backdrop-blur-md shadow-lg"
          >
            {filteredFaqs.map((faq, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.div
                  key={faq.question}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className={`overflow-hidden transition-colors ${
                    index !== filteredFaqs.length - 1 ? "border-b border-slate-200" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveIndex(isActive ? null : index)}
                    aria-expanded={isActive}
                    className="w-full py-4 sm:py-5 px-2 sm:px-3 flex items-center justify-between gap-3 sm:gap-4 text-left font-changa font-bold text-slate-900 text-sm sm:text-lg lg:text-xl bg-transparent border-none outline-none cursor-pointer group active:text-[#ff5e00]"
                  >
                    <span className="leading-snug">{faq.question}</span>
                    <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-[#ff5e00]/50 transition-colors">
                      <Plus
                        size={18}
                        className={`shrink-0 transition-transform duration-300 ${
                          isActive
                            ? "rotate-45 text-[#ff5e00]"
                            : "rotate-0 text-slate-500"
                        }`}
                      />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.25,
                          ease: "easeOut",
                        }}
                      >
                        <p className="text-slate-600 px-2 sm:px-3 pb-5 pt-1 text-xs sm:text-base leading-relaxed max-w-3xl font-normal">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
}


