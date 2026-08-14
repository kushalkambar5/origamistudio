"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

// Social SVG Icons matching design
const InstagramIcon = () => (
  <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const XIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-4 h-4 fill-[#25D366] hover:scale-110 transition-transform" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
      className="relative bg-white text-slate-900 py-16 sm:py-24 px-6 sm:px-12 lg:px-16 overflow-hidden border-t border-slate-200/60"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch min-h-[580px]">
          
          {/* Left Column: Heading + Interactive Google Map + Social Icons */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div>
              {/* Giant Heading */}
              <h2 className="text-6xl sm:text-7xl lg:text-[84px] font-normal tracking-tight text-[#ff5e00] leading-[1.04] font-sans mb-8">
                Let&apos;s Work
                <br />
                Together
              </h2>

              {/* Google Map Box */}
              <div className="relative w-full h-[280px] sm:h-[340px] rounded-3xl overflow-hidden shadow-sm border border-slate-200 bg-slate-50 group">
                <iframe
                  title="Google Map Location"
                  src="https://maps.google.com/maps?q=NITK+Surathkal,Mangalore&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "brightness(1.02) contrast(0.96) saturate(0.85)" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
              </div>
            </div>

            {/* Bottom Left Social Icons: Instagram, Facebook, LinkedIn, X */}
            <div className="flex items-center gap-5 text-black pt-4">
              <a
                href="https://www.instagram.com/origamistudioin/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:scale-110 hover:text-emerald-700 transition-all duration-200"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="hover:scale-110 hover:text-emerald-700 transition-all duration-200"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:scale-110 hover:text-emerald-700 transition-all duration-200"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="hover:scale-110 hover:text-emerald-700 transition-all duration-200"
              >
                <XIcon />
              </a>
            </div>
          </div>

          {/* Right Column: Underline Form + Pill Send Button + Address */}
          <div className="lg:col-span-6 flex flex-col justify-between pt-4 lg:pt-8 space-y-10">
            {submitted ? (
              <div className="my-auto py-12 text-center animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-black text-white flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-medium text-black">
                  Message Sent!
                </h3>
                <p className="text-slate-700 text-base mt-3 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-black">{formData.name}</span>. We have received your message and will reach out to <span className="font-semibold text-black">{formData.email}</span> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", message: "" });
                  }}
                  className="mt-8 px-8 py-3.5 rounded-full text-sm font-medium text-white bg-black hover:bg-neutral-800 transition-all cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">
                {/* Your Name */}
                <div className="space-y-2">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-slate-400 focus:border-black py-2.5 text-xl sm:text-2xl font-light text-black placeholder:text-slate-600 focus:outline-none transition-colors"
                  />
                </div>

                {/* Your e-Mail */}
                <div className="space-y-2">
                  <input
                    type="email"
                    required
                    placeholder="Your e-Mail"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-slate-400 focus:border-black py-2.5 text-xl sm:text-2xl font-light text-black placeholder:text-slate-600 focus:outline-none transition-colors"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-slate-400 focus:border-black py-2.5 text-xl sm:text-2xl font-light text-black placeholder:text-slate-600 focus:outline-none transition-colors"
                  />
                </div>

                {/* Your message to us */}
                <div className="space-y-2">
                  <textarea
                    required
                    rows={1}
                    placeholder="Your message to us"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-slate-400 focus:border-black py-2.5 text-xl sm:text-2xl font-light text-black placeholder:text-slate-600 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Pill Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 sm:py-5 bg-black hover:bg-neutral-800 active:scale-[0.98] text-white rounded-full text-xl sm:text-2xl font-light flex items-center justify-between gap-12 transition-all shadow-sm group cursor-pointer disabled:opacity-75"
                  >
                    <span>{isSubmitting ? "Sending..." : "Send the message"}</span>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                      <svg
                        className="w-6 h-6 fill-white text-white"
                        viewBox="0 0 24 24"
                      >
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                      </svg>
                    </div>
                  </button>
                </div>
              </form>
            )}

            {/* Bottom Right Address and Phone Numbers */}
            <div className="text-right space-y-1.5 pt-6 text-black tracking-tight">
              <p className="font-medium text-sm sm:text-base text-black">NITK Surathkal, Manglore</p>
              <div className="text-xs sm:text-sm text-slate-800 space-y-1">
                <div className="flex flex-wrap items-center justify-end gap-x-2 gap-y-1">
                  <span>Rudra -</span>
                  <a href="mailto:rudra@origamistudio.in" className="hover:underline text-slate-800">
                    rudra@origamistudio.in
                  </a>
                  <span className="text-slate-300">|</span>
                  <a href="tel:+918919300467" className="hover:underline font-semibold text-black">
                    +91 8919300467
                  </a>
                  <a
                    href="https://wa.me/918919300467"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp Rudra"
                    title="WhatsApp Rudra"
                    className="inline-flex items-center justify-center p-1 rounded-full hover:bg-emerald-50 transition-colors"
                  >
                    <WhatsAppIcon />
                  </a>
                </div>
                <div className="flex flex-wrap items-center justify-end gap-x-2 gap-y-1">
                  <span>Shrujan -</span>
                  <a href="mailto:shrujan@origamistudio.in" className="hover:underline text-slate-800">
                    shrujan@origamistudio.in
                  </a>
                  <span className="text-slate-300">|</span>
                  <a href="tel:+919008464605" className="hover:underline font-semibold text-black">
                    +91 9008464605
                  </a>
                  <a
                    href="https://wa.me/919008464605"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp Shrujan"
                    title="WhatsApp Shrujan"
                    className="inline-flex items-center justify-center p-1 rounded-full hover:bg-emerald-50 transition-colors"
                  >
                    <WhatsAppIcon />
                  </a>
                </div>
                <div className="flex flex-wrap items-center justify-end gap-x-2 gap-y-1">
                  <span>Kushal -</span>
                  <a href="mailto:kushal@origamistudio.in" className="hover:underline text-slate-800">
                    kushal@origamistudio.in
                  </a>
                  <span className="text-slate-300">|</span>
                  <a href="tel:+919035035884" className="hover:underline font-semibold text-black">
                    +91 9035035884
                  </a>
                  <a
                    href="https://wa.me/919035035884"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp Kushal"
                    title="WhatsApp Kushal"
                    className="inline-flex items-center justify-center p-1 rounded-full hover:bg-emerald-50 transition-colors"
                  >
                    <WhatsAppIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}





