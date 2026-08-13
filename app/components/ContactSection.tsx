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

const TwitterXIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Fullstack Web & SEO",
    message: "",
  });

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
      className="relative py-24 bg-[#0A0E17] text-white border-t border-slate-800 overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#FC6100]/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FC6100]/10 border border-[#FC6100]/30 text-[#FC6100] text-xs font-semibold uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>CONTACT US</span>
          </div>
          <h2 className="font-changa text-3xl sm:text-5xl font-extrabold uppercase tracking-tight">
            LET'S FOLD YOUR <span className="text-[#FC6100]">NEXT MOVEMENT</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Ready to scale your business with fullstack digital marketing, high-performance web apps, and automated AI systems? Get in touch with us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact & Agency Info */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#0F1420] border border-white/10 shadow-xl space-y-8">
            {/* Live Availability Status */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span>ACCEPTING NEW CLIENTS FOR Q3/Q4</span>
            </div>

            <div>
              <h3 className="font-changa text-2xl font-bold text-white mb-2 uppercase">
                ORIGAMI STUDIO HEADQUARTERS
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                We partner with high-growth startups, ambitious founders, and established enterprises globally.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-black/40 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-[#FC6100]/20 border border-[#FC6100] flex items-center justify-center text-[#FC6100] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">
                    EMAIL DIRECTLY
                  </span>
                  <a
                    href="mailto:hello@origamistudio.in"
                    className="block text-sm sm:text-base font-semibold text-white hover:text-[#FC6100] transition-colors"
                  >
                    hello@origamistudio.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-black/40 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-[#FC6100]/20 border border-[#FC6100] flex items-center justify-center text-[#FC6100] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">
                    CALL / WHATSAPP
                  </span>
                  <a
                    href="tel:+919876543210"
                    className="block text-sm sm:text-base font-semibold text-white hover:text-[#FC6100] transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-black/40 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-[#FC6100]/20 border border-[#FC6100] flex items-center justify-center text-[#FC6100] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">
                    LOCATION
                  </span>
                  <span className="block text-sm font-semibold text-white">
                    Bangalore, India • Remote Worldwide
                  </span>
                </div>
              </div>
            </div>

            {/* Social Handles */}
            <div className="pt-4 border-t border-slate-800">
              <span className="text-xs font-mono text-slate-400 uppercase block mb-3">
                CONNECT WITH US ON SOCIAL:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="p-3 rounded-xl bg-white/5 hover:bg-[#FC6100] text-white transition-colors"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 rounded-xl bg-white/5 hover:bg-[#FC6100] text-white transition-colors"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                  className="p-3 rounded-xl bg-white/5 hover:bg-[#FC6100] text-white transition-colors"
                >
                  <TwitterXIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#0F1420] border border-white/10 shadow-xl">
            <h3 className="font-changa text-2xl font-bold uppercase text-white mb-2">
              SEND US A MESSAGE
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill in your details below and our team will get back to you within 4 business hours.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#FC6100]/15 border border-[#FC6100] text-center animate-in fade-in duration-300">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#FC6100] text-white flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h4 className="font-changa text-2xl font-bold text-white uppercase">
                  MESSAGE RECEIVED!
                </h4>
                <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto">
                  Thank you,{" "}
                  <span className="text-[#FC6100] font-semibold">
                    {formData.name}
                  </span>
                  . Our team at Origami Studio has received your message and will reach out to{" "}
                  <span className="text-white font-semibold">
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
                      service: "Fullstack Web & SEO",
                      message: "",
                    });
                  }}
                  className="mt-6 px-6 py-2.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white bg-white/10"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
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
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-[#FC6100] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
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
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-[#FC6100] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-[#FC6100] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                      COMPANY / BRAND NAME
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Inc."
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-[#FC6100] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                    PRIMARY SERVICE OF INTEREST
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-[#FC6100] focus:outline-none"
                  >
                    <option value="Social Media Management">
                      Social Media Management & Strategy
                    </option>
                    <option value="Fullstack Web & SEO">
                      Fullstack Next.js Website & SEO
                    </option>
                    <option value="Google Business Ranking">
                      Google Business Profile (GBP) Local Ranking
                    </option>
                    <option value="Offline Shoots & Video">
                      Offline Shoots & Motion Video Editing
                    </option>
                    <option value="AI & WhatsApp Agents">
                      AI Agents & WhatsApp Automation
                    </option>
                    <option value="Full Digital Retainer">
                      Full 360° Digital Agency Retainer
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
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
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-[#FC6100] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full font-changa text-lg font-bold text-white bg-gradient-to-r from-[#FC6100] via-[#FF7A18] to-[#FC6100] shadow-[0_0_25px_rgba(252,97,0,0.35)] hover:brightness-110 transition-all flex items-center justify-center gap-2"
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
