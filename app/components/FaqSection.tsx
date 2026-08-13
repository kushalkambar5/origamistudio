"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";

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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="faqs"
      className="relative py-24 sm:py-32 bg-white text-slate-900 border-t border-slate-200 overflow-hidden"
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-[20%] -right-[10%] w-[500px] h-[500px] bg-[#FC6100]/10 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] -left-[10%] w-[400px] h-[400px] bg-[#FC6100]/8 rounded-full blur-[80px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <h2 className="font-changa text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-center text-slate-900 mb-12 sm:mb-16">
          <span className="text-[#FC6100]">FAQS</span>
        </h2>

        {/* Accordion Container matching Horyn2 layout */}
        <LayoutGroup>
          <motion.div
            layout
            className="border border-slate-200 rounded-3xl p-4 sm:p-6 bg-slate-50/50 backdrop-blur-md shadow-lg"
            onMouseLeave={() => setActiveIndex(null)}
          >
            {FAQS.map((faq, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.div
                  key={faq.question}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`overflow-hidden cursor-pointer transition-colors ${
                    index !== FAQS.length - 1 ? "border-b border-slate-200" : ""
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(isActive ? null : index)}
                >
                  <button
                    type="button"
                    className="w-full py-5 px-3 flex items-center gap-4 text-left font-changa font-bold text-slate-900 text-base sm:text-xl bg-transparent border-none outline-none cursor-pointer"
                  >
                    <Plus
                      size={20}
                      className={`shrink-0 transition-transform duration-300 ${
                        isActive
                          ? "rotate-45 text-[#FC6100]"
                          : "rotate-0 text-slate-400"
                      }`}
                    />
                    <span>{faq.question}</span>
                  </button>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.2,
                          ease: "easeOut",
                        }}
                      >
                        <p className="text-slate-600 pl-11 sm:pl-12 pr-4 pb-6 pt-1 text-sm sm:text-base leading-relaxed max-w-3xl font-normal">
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

        {/* Still have questions banner */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
          <p className="text-slate-700 text-sm font-medium">
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

