"use client";

import React, { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  Clock,
  Zap,
} from "lucide-react";

const SERVICE_OPTIONS = [
  { id: "social", name: "Social Media Marketing", baseDays: 7 },
  { id: "website", name: "Fullstack Web & SEO", baseDays: 14 },
  { id: "gbp", name: "Google Maps & GBP Ranking", baseDays: 10 },
  { id: "video", name: "Offline Shoot & Video Editing", baseDays: 7 },
  { id: "ai", name: "Custom AI & WhatsApp Agents", baseDays: 10 },
];

const BUDGET_OPTIONS = [
  { id: "starter", label: "Startup ($1,000 - $2,500)", multiplier: 1 },
  { id: "growth", label: "Growth ($2,500 - $7,500)", multiplier: 1.5 },
  { id: "enterprise", label: "Enterprise ($7,500+)", multiplier: 2 },
];

export default function GetInTouchSection() {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "social",
    "website",
  ]);
  const [selectedBudget, setSelectedBudget] = useState<string>("growth");
  const [booked, setBooked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
  });

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  // Calculate dynamic scope & timeline
  const totalDays = Math.min(
    30,
    selectedServices.reduce((acc, curr) => {
      const item = SERVICE_OPTIONS.find((s) => s.id === curr);
      return acc + (item ? item.baseDays : 0);
    }, 5)
  );

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setBooked(true);
  };

  return (
    <section
      id="get-in-touch"
      className="relative py-24 bg-[#07090E] text-white border-t border-slate-800 overflow-hidden"
    >
      {/* Ambient Radial Gradients */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#FC6100]/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FC6100]/10 border border-[#FC6100]/30 text-[#FC6100] text-xs font-semibold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE ESTIMATOR</span>
          </div>
          <h2 className="font-changa text-3xl sm:text-5xl font-extrabold uppercase tracking-tight">
            ESTIMATE YOUR <span className="text-[#FC6100]">PROJECT SCOPE</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Select your desired solutions to estimate timeline, deliverables, and lock in a 1-on-1 strategy call with our founders.
          </p>
        </div>

        {/* Estimator Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Options Selector */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#0F1420] border border-white/10 shadow-xl space-y-8">
            {/* Step 1: Select Services */}
            <div>
              <label className="block text-xs font-mono text-[#FC6100] uppercase tracking-wider mb-3 font-semibold">
                STEP 1: SELECT SOLUTIONS NEEDED
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SERVICE_OPTIONS.map((svc) => {
                  const isChecked = selectedServices.includes(svc.id);
                  return (
                    <div
                      key={svc.id}
                      onClick={() => toggleService(svc.id)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 flex items-center justify-between ${
                        isChecked
                          ? "bg-[#FC6100]/15 border-[#FC6100] text-white shadow-[0_0_15px_rgba(252,97,0,0.2)]"
                          : "bg-black/40 border-white/10 text-slate-400 hover:border-white/30"
                      }`}
                    >
                      <span className="text-xs sm:text-sm font-semibold">
                        {svc.name}
                      </span>
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          isChecked
                            ? "bg-[#FC6100] border-[#FC6100] text-white"
                            : "border-slate-600"
                        }`}
                      >
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Budget */}
            <div>
              <label className="block text-xs font-mono text-[#FC6100] uppercase tracking-wider mb-3 font-semibold">
                STEP 2: SELECT INVESTMENT TIER
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {BUDGET_OPTIONS.map((bgt) => {
                  const isSelected = selectedBudget === bgt.id;
                  return (
                    <button
                      key={bgt.id}
                      type="button"
                      onClick={() => setSelectedBudget(bgt.id)}
                      className={`p-3.5 rounded-2xl border text-xs font-semibold transition-all duration-200 text-center ${
                        isSelected
                          ? "bg-[#FC6100] border-[#FC6100] text-white shadow-lg"
                          : "bg-black/40 border-white/10 text-slate-400 hover:border-white/30"
                      }`}
                    >
                      {bgt.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Live Timeline & Output Summary */}
            <div className="p-4 rounded-2xl bg-black/60 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FC6100]/20 border border-[#FC6100] flex items-center justify-center text-[#FC6100]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">
                    ESTIMATED TIMELINE TO LAUNCH
                  </span>
                  <span className="font-changa text-lg font-bold text-white">
                    {totalDays} - {totalDays + 5} Business Days
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono text-[#FC6100] block uppercase font-bold">
                  SCOPE METRICS
                </span>
                <span className="text-xs text-slate-300">
                  {selectedServices.length} Core Solutions
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Strategy Call Booking Form */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0F1420] to-[#0A0E17] border border-[#FC6100]/40 shadow-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-[#FC6100]" />
              <h3 className="font-changa text-xl font-bold uppercase text-white">
                LOCK IN A DISCOVERY CALL
              </h3>
            </div>
            <p className="text-slate-300 text-xs font-light mb-6">
              Schedule a 20-minute 1-on-1 strategy call with Origami Studio founders to review your project roadmap.
            </p>

            {booked ? (
              <div className="p-6 rounded-2xl bg-[#FC6100]/15 border border-[#FC6100] text-center animate-in fade-in duration-300">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#FC6100] text-white flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-changa text-lg font-bold text-white uppercase">
                  DISCOVERY CALL CONFIRMED!
                </h4>
                <p className="text-xs text-slate-300 mt-2">
                  We have reserved your slot for{" "}
                  <span className="text-[#FC6100] font-semibold">
                    {formData.name}
                  </span>
                  . A Google Meet invitation has been sent to{" "}
                  <span className="text-white font-semibold">
                    {formData.email}
                  </span>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-[#FC6100] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                    WORK EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-[#FC6100] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                    PHONE / WHATSAPP NUMBER
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-[#FC6100] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                    PREFERRED DATE
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-[#FC6100] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full font-changa text-base font-bold text-white bg-gradient-to-r from-[#FC6100] to-[#FF8A3C] shadow-[0_0_20px_rgba(252,97,0,0.35)] hover:brightness-110 transition-all flex items-center justify-center gap-2 mt-4"
                >
                  <Calendar className="w-4 h-4" />
                  <span>CONFIRM DISCOVERY CALL</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
