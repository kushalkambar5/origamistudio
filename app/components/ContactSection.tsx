"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Globe,
  Sparkles,
} from "lucide-react";

// Social SVG Icons
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
      className="relative py-24 bg-white text-slate-900 border-t border-slate-200 overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#ff5e00]/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-changa text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-slate-900">
            <span className="text-[#ff5e00]">Contact Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: Direct Contact & Agency Info */}
          <div className="lg:col-span-5 p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200 shadow-lg space-y-6 sm:space-y-8">

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#ff5e00]/5 border border-[#ff5e00]/30 flex items-center justify-center text-[#ff5e00] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold block">
                    EMAIL DIRECTLY
                  </span>
                  <a
                    href="mailto:hello@origamistudio.in"
                    className="block text-sm sm:text-base font-semibold text-slate-900 hover:text-[#ff5e00] transition-colors truncate"
                  >
                    hello@origamistudio.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#ff5e00]/5 border border-[#ff5e00]/30 flex items-center justify-center text-[#ff5e00] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold block">
                    CALL / WHATSAPP
                  </span>
                  <a
                    href="tel:+918919300467"
                    className="block text-sm sm:text-base font-semibold text-slate-900 hover:text-[#ff5e00] transition-colors truncate"
                  >
                    +91 8919300467
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#ff5e00]/5 border border-[#ff5e00]/30 flex items-center justify-center text-[#ff5e00] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold block">
                    LOCATION
                  </span>
                  <span className="block text-xs sm:text-sm font-semibold text-slate-900 mb-3">
                    NITK Surathkal, Mangalore, Karnataka 575025
                  </span>
                  <div className="w-full h-44 sm:h-56 rounded-xl overflow-hidden border border-slate-200 shadow-xs mt-2">
                    <iframe
                      title="NITK Surathkal Location Map"
                      src="https://maps.google.com/maps?q=National%20Institute%20of%20Technology%20Karnataka%20Surathkal&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      className="w-full h-full border-0"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Social Handles */}
            <div className="pt-3 sm:pt-4 border-t border-slate-200">
              <span className="text-[11px] font-mono text-slate-500 uppercase block mb-3 font-semibold">
                CONNECT WITH US ON SOCIAL:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/origamistudioin/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-white border border-slate-200 hover:bg-[#ff5e00] hover:border-[#ff5e00] text-slate-700 hover:text-white transition-colors shadow-xs active:scale-95"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-white border border-slate-200 hover:bg-[#ff5e00] hover:border-[#ff5e00] text-slate-700 hover:text-white transition-colors shadow-xs active:scale-95"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200 shadow-lg">
            <h3 className="font-changa text-xl sm:text-2xl font-bold uppercase text-slate-900 mb-1 sm:mb-2">
              SEND US A MESSAGE
            </h3>
            <p className="text-xs text-slate-500 mb-5 sm:mb-6 font-normal">
              Fill in your details below and our team will get back to you within 4 business hours.
            </p>

            {submitted ? (
              <div className="p-6 sm:p-8 rounded-2xl bg-[#ff5e00]/5 border border-[#ff5e00] text-center animate-in fade-in duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 rounded-full bg-[#ff5e00] text-white flex items-center justify-center shadow-md">
                  <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h4 className="font-changa text-xl sm:text-2xl font-bold text-slate-900 uppercase">
                  MESSAGE RECEIVED!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
                  Thank you,{" "}
                  <span className="text-[#ff5e00] font-bold">
                    {formData.name}
                  </span>
                  . Our team at Origami Studio has received your message and will reach out to{" "}
                  <span className="text-slate-900 font-bold">
                    {formData.email}
                  </span>{" "}
                  shortly.
                </p>
                <button
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
                  className="mt-6 px-6 py-2.5 min-h-[44px] rounded-full text-xs font-semibold text-slate-700 hover:text-slate-950 bg-white border border-slate-200 shadow-xs active:scale-95 transition-transform"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono text-slate-600 uppercase mb-1 font-semibold">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-base sm:text-sm focus:border-[#ff5e00] focus:outline-none placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-600 uppercase mb-1 font-semibold">
                      WORK EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-base sm:text-sm focus:border-[#ff5e00] focus:outline-none placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono text-slate-600 uppercase mb-1 font-semibold">
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-base sm:text-sm focus:border-[#ff5e00] focus:outline-none placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-600 uppercase mb-1 font-semibold">
                      COMPANY / BRAND NAME
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Inc."
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-base sm:text-sm focus:border-[#ff5e00] focus:outline-none placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-600 uppercase mb-2 font-semibold">
                    SERVICES NEEDED
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {CONTACT_SERVICES.map((svc) => {
                      const isChecked = formData.services.includes(svc);
                      return (
                        <div
                          key={svc}
                          onClick={() => toggleService(svc)}
                          className={`flex items-center gap-3 p-3 min-h-[44px] rounded-xl border cursor-pointer transition-all active:scale-98 ${
                            isChecked
                              ? "bg-[#ff5e00]/10 border-[#ff5e00] text-slate-900 shadow-xs font-medium"
                              : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {}}
                            className="w-4 h-4 rounded border-slate-300 text-[#ff5e00] accent-[#ff5e00] cursor-pointer"
                          />
                          <span className="text-xs font-semibold select-none leading-tight">
                            {svc}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-600 uppercase mb-1 font-semibold">
                    YOUR PROJECT DETAILS & GOALS *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your brand, current challenges, and target growth objectives..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-base sm:text-sm focus:border-[#ff5e00] focus:outline-none placeholder:text-slate-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full min-h-[48px] py-3.5 sm:py-4 rounded-full font-changa text-base sm:text-lg font-bold text-white bg-[#ff5e00] shadow-[0_4px_20px_rgba(255,94,0,0.35)] hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>SENDING MESSAGE...</span>
                  ) : (
                    <>
                      <span>SUBMIT INQUIRY</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
