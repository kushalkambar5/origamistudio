"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS: FaqItem[] = [
  {
    question: "What services does Origami Studio provide?",
    answer:
      "Origami Studio is a full-service digital marketing & tech agency. We provide Social Media Management & Marketing, Fullstack Web Development with SEO, Google Business Profile (GBP) Local Ranking, Offline Commercial Shoots, Video Editing & Motion Graphics, AI Lead Capture Agents, and WhatsApp Marketing Automation.",
    category: "Services",
  },
  {
    question: "How fast can you launch a website or digital campaign?",
    answer:
      "For standard digital marketing campaigns & social media management, onboarding and content launch take 5-7 business days. For fullstack Next.js websites, delivery ranges from 2 to 4 weeks depending on scope, complete with 100/100 Core Web Vitals performance and technical SEO built in.",
    category: "Timeline",
  },
  {
    question: "Why are your Next.js websites better for SEO than WordPress or Wix?",
    answer:
      "Traditional CMS platforms like WordPress or Wix suffer from bloated plugin code, slow server response times, and poor Core Web Vitals scores. Our custom Next.js websites render static HTML instantly on edge networks, achieve sub-100ms load times, and include structured JSON-LD schema — giving search engines clean, fast data to index.",
    category: "Technology",
  },
  {
    question: "How do your AI Agents & WhatsApp Bots integrate with our CRM?",
    answer:
      "We build custom AI agents trained specifically on your company documentation, FAQs, and product catalogs. They integrate seamlessly via webhooks and APIs with CRMs such as HubSpot, Salesforce, Zoho, Google Sheets, or custom web apps to automatically qualify leads and schedule appointments 24/7.",
    category: "Automation",
  },
  {
    question: "What is your pricing model (retainer vs project-based)?",
    answer:
      "We offer both flexible monthly retainers (for ongoing Social Media, SEO, GBP Ranking, and Video Production) as well as fixed-price project contracts (for Fullstack Website Development, Brand Redesigns, and AI Bot Deployments). Contact us for a transparent, custom estimate.",
    category: "Pricing",
  },
  {
    question: "Do you work with local businesses as well as international startups?",
    answer:
      "Yes! We work with local brick-and-mortar businesses (restaurants, real estate agencies, clinics, fitness centers) to dominate Google Maps Local 3-Pack rankings, as well as e-commerce brands, startup founders, and global consultants across North America, Europe, and Asia.",
    category: "Scope",
  },
  {
    question: "What reporting and analytics metrics will we receive?",
    answer:
      "Transparency is fundamental to our process. You receive weekly metric dashboards and monthly executive strategy calls detailing organic reach, keyword position shifts, web conversion rates, ROAS on paid campaigns, and total revenue generated.",
    category: "Reporting",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className="relative py-24 bg-[#0A0E17] text-white border-t border-slate-800 overflow-hidden"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FC6100]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FC6100]/10 border border-[#FC6100]/30 text-[#FC6100] text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="font-changa text-3xl sm:text-5xl font-extrabold uppercase tracking-tight">
            GOT QUESTIONS? <span className="text-[#FC6100]">WE HAVE ANSWERS</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Everything you need to know about partnering with Origami Studio.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#0F1420] border-[#FC6100]/50 shadow-[0_0_25px_rgba(252,97,0,0.15)]"
                    : "bg-[#0F1420]/60 border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-[#FC6100] uppercase">
                      {faq.category}
                    </span>
                    <span className="font-changa text-base sm:text-lg font-bold text-white">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-[#FC6100] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#FC6100] text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-slate-300 text-sm sm:text-base font-light leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-black/40 border border-slate-800">
          <p className="text-slate-300 text-sm font-medium">
            Have a custom query or complex technical requirement?
          </p>
          <a
            href="#contact-us"
            className="inline-flex items-center gap-2 mt-3 text-xs font-changa font-bold text-[#FC6100] hover:underline uppercase tracking-wider"
          >
            <span>SPEAK DIRECTLY WITH OUR TEAM →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
