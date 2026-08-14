"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Sparkles,
  Copy,
  Check,
  ExternalLink,
  MessageCircle,
  Clock,
  ArrowRight,
} from "lucide-react";

// Modern Branded Social SVG Icons
const LinkedInIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const CONTACT_SERVICES = [
  "Social Media Marketing",
  "Fullstack Web & SEO",
  "Google Maps & GBP Ranking",
  "Offline Shoot & Video Editing",
  "Custom AI & WhatsApp Agents",
];

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  services: string[];
  message: string;
}

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    services: ["Social Media Marketing", "Fullstack Web & SEO"],
    message: "",
  });

  const toggleService = (serviceName: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(serviceName);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== serviceName)
          : [...prev.services, serviceName],
      };
    });
  };

  const copyToClipboard = async (text: string, fieldName: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    let success = false;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        success = true;
      }
    } catch {
      // Ignore clipboard API error and fallback below
    }

    if (!success) {
      try {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.left = "-999999px";
        textarea.style.top = "-999999px";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        success = document.execCommand("copy");
        textarea.remove();
      } catch {
        // Ignored
      }
    }

    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section
      id="contact-us"
      className="relative py-20 sm:py-28 bg-[#FAFAF9] text-slate-900 border-t border-slate-200/80 overflow-hidden"
    >
      {/* Dynamic Background Ambient Light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#ff5e00]/10 to-amber-500/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#ff5e00]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">

          <h2 className="font-changa text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-slate-900 leading-[1.1]">
            <span className="text-[#ff5e00]">Contact Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Location Hub */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Cards */}
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] space-y-6">
              


              <div className="space-y-4">
                {/* Email Direct Card */}
                <div className="group relative p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-[#ff5e00]/40 hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-11 h-11 rounded-2xl bg-[#ff5e00]/10 border border-[#ff5e00]/20 flex items-center justify-center text-[#ff5e00] shrink-0 group-hover:scale-105 transition-transform">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider block mb-0.5">
                          Email Us Directly
                        </span>
                        <a
                          href="mailto:hello@origamistudio.in"
                          className="text-sm sm:text-base font-bold text-slate-900 hover:text-[#ff5e00] transition-colors truncate block"
                        >
                          hello@origamistudio.in
                        </a>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => copyToClipboard("hello@origamistudio.in", "email", e)}
                      title="Copy email address"
                      aria-label="Copy email address"
                      className="px-2.5 py-1.5 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 transition-all shrink-0 flex items-center gap-1.5 cursor-pointer bg-slate-100/70 border border-slate-200/60"
                    >
                      {copiedField === "email" ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                          <span className="text-xs font-bold text-emerald-600">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span className="text-xs font-medium">Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Call / WhatsApp Card */}
                <div className="group relative p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-[#ff5e00]/40 hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-11 h-11 rounded-2xl bg-[#ff5e00]/10 border border-[#ff5e00]/20 flex items-center justify-center text-[#ff5e00] shrink-0 group-hover:scale-105 transition-transform">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider block mb-0.5">
                          Call / WhatsApp
                        </span>
                        <a
                          href="tel:+918919300467"
                          className="text-sm sm:text-base font-bold text-slate-900 hover:text-[#ff5e00] transition-colors truncate block"
                        >
                          +91 8919300467
                        </a>
                      </div>
                    </div>

                    <a
                      href="https://wa.me/918919300467"
                      target="_blank"
                      rel="noreferrer"
                      title="Chat on WhatsApp"
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 text-xs font-semibold transition-colors shrink-0"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="hidden sm:inline">WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Location Card & Embedded Interactive Map */}
              <div className="pt-2 border-t border-slate-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                    <MapPin className="w-4 h-4 text-[#ff5e00]" />
                    <span>Headquarters & Studio</span>
                  </div>
                  <a
                    href="https://maps.google.com/?q=NITK+Surathkal+Mangalore"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#ff5e00] hover:underline"
                  >
                    <span>View Map</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <p className="text-xs font-medium text-slate-600 mb-3">
                  NITK Surathkal, Mangalore, Karnataka 575025, India
                </p>

                {/* Map Preview Container */}
                <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs group">
                  <iframe
                    title="NITK Surathkal Location Map"
                    src="https://maps.google.com/maps?q=National%20Institute%20of%20Technology%20Karnataka%20Surathkal&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0 grayscale-[20%] contrast-[105%] group-hover:grayscale-0 transition-all duration-500"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-2xl" />
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 uppercase font-semibold">
                  Follow Our Work
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.instagram.com/origamistudioin/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-[#ff5e00] hover:text-white text-slate-600 transition-all duration-200 shadow-xs hover:scale-105 active:scale-95"
                  >
                    <InstagramIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Conversion Form Workspace */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] relative overflow-hidden">
              {/* Decorative Subtle Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#ff5e00] via-amber-500 to-[#ff5e00]" />

              {submitted ? (
                <div className="py-12 sm:py-16 text-center animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center shadow-lg shadow-emerald-500/10">
                    <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-600" />
                  </div>
                  <h3 className="font-changa text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-md mx-auto leading-relaxed">
                    Thank you,{" "}
                    <span className="text-[#ff5e00] font-bold">
                      {formData.name}
                    </span>
                    . We&apos;ve received your project details. Our strategic team will review your goals and reach out to{" "}
                    <span className="text-slate-900 font-bold">
                      {formData.email}
                    </span>{" "}
                    within 4 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        company: "",
                        services: ["Social Media Marketing", "Fullstack Web & SEO"],
                        message: "",
                      });
                    }}
                    className="mt-8 px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 active:scale-95 transition-all shadow-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-changa text-2xl sm:text-3xl font-extrabold uppercase text-slate-900 tracking-tight">
                      Send Us a Message
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
                      Fill in your requirements and we&apos;ll build a customized growth proposal for your brand.
                    </p>
                  </div>

                  {/* Form Inputs Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Full Name <span className="text-[#ff5e00]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-slate-50/60 border border-slate-200 text-slate-900 text-sm focus:border-[#ff5e00] focus:bg-white focus:ring-4 focus:ring-[#ff5e00]/10 focus:outline-none placeholder:text-slate-400 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Work Email <span className="text-[#ff5e00]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-slate-50/60 border border-slate-200 text-slate-900 text-sm focus:border-[#ff5e00] focus:bg-white focus:ring-4 focus:ring-[#ff5e00]/10 focus:outline-none placeholder:text-slate-400 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-slate-50/60 border border-slate-200 text-slate-900 text-sm focus:border-[#ff5e00] focus:bg-white focus:ring-4 focus:ring-[#ff5e00]/10 focus:outline-none placeholder:text-slate-400 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        placeholder="Acme Studios"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-slate-50/60 border border-slate-200 text-slate-900 text-sm focus:border-[#ff5e00] focus:bg-white focus:ring-4 focus:ring-[#ff5e00]/10 focus:outline-none placeholder:text-slate-400 transition-all"
                      />
                    </div>
                  </div>

                  {/* Interactive Services Needed Multi-Select Chips */}
                  <div className="space-y-2.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Services Needed
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {CONTACT_SERVICES.map((svc) => {
                        const isChecked = formData.services.includes(svc);
                        return (
                          <button
                            type="button"
                            key={svc}
                            onClick={() => toggleService(svc)}
                            className={`inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer select-none active:scale-95 ${
                              isChecked
                                ? "bg-[#ff5e00] text-white shadow-md shadow-[#ff5e00]/25 ring-2 ring-[#ff5e00]/30"
                                : "bg-slate-100/80 text-slate-700 hover:bg-slate-200/80 border border-slate-200/60"
                            }`}
                          >
                            {isChecked ? (
                              <Check className="w-3.5 h-3.5 shrink-0 stroke-[3]" />
                            ) : (
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                            )}
                            <span>{svc}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project Details & Goals Textarea */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Project Details &amp; Goals <span className="text-[#ff5e00]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your brand, current growth bottlenecks, timeline, and key targets..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/60 border border-slate-200 text-slate-900 text-sm focus:border-[#ff5e00] focus:bg-white focus:ring-4 focus:ring-[#ff5e00]/10 focus:outline-none placeholder:text-slate-400 transition-all resize-y min-h-[110px]"
                    />
                  </div>

                  {/* High Energy CTA Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full py-4 rounded-2xl font-changa text-base sm:text-lg font-extrabold uppercase tracking-wide text-white bg-[#ff5e00] shadow-[0_8px_25px_rgba(255,94,0,0.35)] hover:bg-[#e05300] hover:shadow-[0_12px_30px_rgba(255,94,0,0.45)] active:scale-[0.99] disabled:opacity-75 transition-all duration-200 flex items-center justify-center gap-2.5 overflow-hidden"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending Inquiry...</span>
                      </div>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

