"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
} from "lucide-react";

// Modern Branded Social SVG Icons
const FacebookIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Direct Info & Social Hub */}
          <div className="lg:col-span-5 flex flex-col justify-between border-slate-200/80 lg:border-r border-b lg:border-b-0 pb-12 lg:pb-0 lg:pr-12">
            <div className="space-y-8">
              {/* Header */}
              <div className="space-y-3">
                <h2 className="font-changa text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Contact Us
                </h2>
                <p className="text-slate-500 text-sm sm:text-base font-inter">
                  Any question? We would be happy to help you!
                </p>
              </div>

              {/* Stacked Info Cards */}
              <div className="space-y-4">
                {/* Phone Card */}
                <div
                  onClick={(e) => copyToClipboard("+91 8919300467", "phone", e)}
                  title="Click to copy phone number"
                  className="flex items-center gap-5 p-4 rounded-2xl border border-slate-200/80 bg-white hover:border-[#ff5e00]/50 hover:shadow-xs active:scale-[0.99] transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-xl border border-slate-200/85 flex items-center justify-center text-slate-800 bg-slate-50/50 transition-colors shrink-0 group-hover:border-[#ff5e00]/30 group-hover:text-[#ff5e00] group-hover:bg-[#ff5e00]/5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-slate-800 truncate font-inter">
                    {copiedField === "phone" ? "Copied phone number!" : "+91 8919300467"}
                  </span>
                </div>

                {/* Email Card (Highlighted - Dark / Theme Orange Hover) */}
                <div
                  onClick={(e) => copyToClipboard("hello@origamistudio.in", "email", e)}
                  title="Click to copy email address"
                  className="flex items-center gap-5 p-4 rounded-2xl bg-slate-900 border border-slate-900 text-white shadow-[0_10px_25px_rgba(0,0,0,0.12)] hover:bg-[#ff5e00] hover:border-[#ff5e00] hover:shadow-[0_12px_25px_rgba(255,94,0,0.25)] active:scale-[0.99] transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-xl border border-white/20 flex items-center justify-center text-white bg-white/5 transition-colors shrink-0 group-hover:border-white/40">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-sm sm:text-base font-bold truncate font-inter">
                    {copiedField === "email" ? "Copied email address!" : "hello@origamistudio.in"}
                  </span>
                </div>

                {/* Address Card */}
                <a
                  href="https://maps.google.com/?q=NITK+Surathkal+Mangalore"
                  target="_blank"
                  rel="noreferrer"
                  title="Open location in Google Maps"
                  className="flex items-center gap-5 p-4 rounded-2xl border border-slate-200/80 bg-white hover:border-[#ff5e00]/50 hover:shadow-xs active:scale-[0.99] transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-xl border border-slate-200/85 flex items-center justify-center text-slate-800 bg-slate-50/50 transition-colors shrink-0 group-hover:border-[#ff5e00]/30 group-hover:text-[#ff5e00] group-hover:bg-[#ff5e00]/5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-slate-800 truncate font-inter">
                    NITK Surathkal, Mangalore
                  </span>
                </a>
              </div>
            </div>

            {/* Social Channels */}
            <div className="pt-8 flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-slate-900 hover:bg-[#ff5e00] hover:scale-105 active:scale-95 text-white flex items-center justify-center transition-all duration-200 shadow-sm"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-slate-900 hover:bg-[#ff5e00] hover:scale-105 active:scale-95 text-white flex items-center justify-center transition-all duration-200 shadow-sm"
              >
                <TwitterIcon />
              </a>
              <a
                href="https://www.instagram.com/origamistudioin/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-slate-900 hover:bg-[#ff5e00] hover:scale-105 active:scale-95 text-white flex items-center justify-center transition-all duration-200 shadow-sm"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form Workspace */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {submitted ? (
              <div className="py-12 text-center animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center shadow-lg shadow-emerald-500/10">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-changa text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
                  Message Sent!
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-md mx-auto leading-relaxed font-inter">
                  Thank you,{" "}
                  <span className="text-[#ff5e00] font-bold">
                    {formData.firstName} {formData.lastName}
                  </span>
                  . We&apos;ve received your message. Our strategic team will review your message and reach out to{" "}
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
                      firstName: "",
                      lastName: "",
                      email: "",
                      phone: "",
                      message: "",
                    });
                  }}
                  className="mt-8 px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 active:scale-95 transition-all shadow-xs font-changa"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name fields row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-sm font-bold text-slate-800 font-changa">
                      First Name:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your first name"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200/90 text-slate-900 text-sm focus:border-[#ff5e00] focus:ring-4 focus:ring-[#ff5e00]/10 focus:outline-none placeholder:text-slate-400 transition-all font-inter"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-sm font-bold text-slate-800 font-changa">
                      Last Name:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your last name"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200/90 text-slate-900 text-sm focus:border-[#ff5e00] focus:ring-4 focus:ring-[#ff5e00]/10 focus:outline-none placeholder:text-slate-400 transition-all font-inter"
                    />
                  </div>
                </div>

                {/* Email field */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-bold text-slate-800 font-changa">
                    Email:
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="youremail@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200/90 text-slate-900 text-sm focus:border-[#ff5e00] focus:ring-4 focus:ring-[#ff5e00]/10 focus:outline-none placeholder:text-slate-400 transition-all font-inter"
                  />
                </div>

                {/* Phone Number field */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-bold text-slate-800 font-changa">
                    Phone Number:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+9876543210"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200/90 text-slate-900 text-sm focus:border-[#ff5e00] focus:ring-4 focus:ring-[#ff5e00]/10 focus:outline-none placeholder:text-slate-400 transition-all font-inter"
                  />
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-bold text-slate-800 font-changa">
                    Message:
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200/90 text-slate-900 text-sm focus:border-[#ff5e00] focus:ring-4 focus:ring-[#ff5e00]/10 focus:outline-none placeholder:text-slate-400 transition-all font-inter resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full py-4 rounded-xl font-changa text-base font-extrabold uppercase tracking-wider text-white bg-slate-900 hover:bg-[#ff5e00] hover:shadow-[0_8px_25px_rgba(255,94,0,0.3)] active:scale-[0.99] disabled:opacity-75 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
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


