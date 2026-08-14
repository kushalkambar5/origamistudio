"use client";

import React from "react";
import { Marquee } from "@/registry/magicui/marquee";
import { cn } from "@/lib/utils";

interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  body: string;
  img: string;
  rating: number;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Rahul Sharma",
    role: "Founder",
    company: "AeroFit India",
    body: "Origami Studio delivered our Next.js website with perfect Core Web Vitals. Our lead conversions increased by 40% in the first month.",
    img: "https://avatar.vercel.sh/rahul",
    rating: 5,
  },
  {
    name: "Sneha Iyer",
    role: "Marketing Director",
    company: "LuxeSpaces Real Estate",
    body: "Dominating Google Maps local rankings changed our business. We are getting daily inbound calls for property viewings thanks to their GBP strategy.",
    img: "https://avatar.vercel.sh/sneha",
    rating: 5,
  },
  {
    name: "David Miller",
    role: "CEO",
    company: "NexaCore Technologies",
    body: "Their custom AI Agents qualify our leads 24/7 seamlessly. It has automated our appointment booking pipeline entirely.",
    img: "https://avatar.vercel.sh/david",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Founder",
    company: "The Curry Club",
    body: "Their offline shoots and video editing are stellar. Our Instagram Reels went viral, bringing in a massive spike in weekend reservations.",
    img: "https://avatar.vercel.sh/priya",
    rating: 5,
  },
  {
    name: "Carlos Mendes",
    role: "Growth Head",
    company: "FinVantage",
    body: "The WhatsApp marketing automation Origami Studio set up for us reduced our customer response times and boosted repeat orders by 30%.",
    img: "https://avatar.vercel.sh/carlos",
    rating: 5,
  },
  {
    name: "Vikram Aditya",
    role: "Co-Founder",
    company: "DesignGrid",
    body: "Fast, professional, and results-driven. Their team knows exactly how to bridge the gap between creative design and cutting-edge tech.",
    img: "https://avatar.vercel.sh/vikram",
    rating: 5,
  },
];

const TestimonialCard = ({
  img,
  name,
  role,
  company,
  body,
  rating,
}: TestimonialItem) => {
  return (
    <figure
      className={cn(
        "relative h-full w-80 sm:w-96 cursor-pointer overflow-hidden rounded-3xl border p-6 sm:p-8 transition-all duration-300",
        "border-slate-200/80 bg-white/80 backdrop-blur-md shadow-[0_4px_25px_-5px_rgba(0,0,0,0.02)] hover:shadow-lg hover:border-[#ff5e00]/30 hover:bg-white"
      )}
    >
      <div className="flex flex-col gap-4 h-full justify-between">
        {/* Quote Icon */}
        <div className="flex items-center justify-end">
          <span className="text-slate-200 font-serif text-5xl leading-none h-6 select-none">“</span>
        </div>

        {/* Testimonial Text */}
        <blockquote className="text-slate-700 text-sm sm:text-base font-normal leading-relaxed italic flex-grow my-2">
          "{body}"
        </blockquote>

        {/* User Info */}
        <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
          <img
            className="rounded-full object-cover border border-[#ff5e00]/20"
            width="40"
            height="40"
            alt={name}
            src={img}
          />
          <div className="flex flex-col">
            <figcaption className="text-sm font-bold text-slate-900 font-changa">
              {name}
            </figcaption>
            <p className="text-xs text-slate-500 font-medium font-mono">
              {role}, <span className="text-[#ff5e00] font-semibold">{company}</span>
            </p>
          </div>
        </div>
      </div>
    </figure>
  );
};

export default function TestimonialsSection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://origamistudio.in",
    "name": "Origami Studio",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "24",
      "bestRating": "5",
      "worstRating": "1",
    },
    "review": TESTIMONIALS.map((t) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": t.name,
      },
      "reviewBody": t.body,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": t.rating.toString(),
        "bestRating": "5",
        "worstRating": "1",
      },
      "publisher": {
        "@type": "Organization",
        "name": "Origami Studio Clients",
      },
    })),
  };

  return (
    <section
      id="testimonials"
      className="relative py-24 sm:py-32 bg-slate-50 text-slate-900 border-t border-slate-200 overflow-hidden"
    >
      {/* Inject SEO JSON-LD schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Background Decorative Glows */}
      <div className="absolute top-[30%] -left-[10%] w-[500px] h-[500px] bg-[#ff5e00]/8 rounded-full blur-[110px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] -right-[10%] w-[450px] h-[450px] bg-[#ff5e00]/6 rounded-full blur-[90px] pointer-events-none z-0" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16 sm:mb-20">
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-[#ff5e00] font-changa text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight leading-[1.1]">
            What Our Clients Say
          </h2>
        </div>
      </div>

      {/* Single Row Testimonial Marquee */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden z-10">
        <Marquee pauseOnHover className="[--duration:35s] py-4">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </Marquee>

        {/* Left and Right Gradient Fades */}
        <div className="from-slate-50 pointer-events-none absolute inset-y-0 left-0 w-1/12 sm:w-1/6 bg-gradient-to-r z-20"></div>
        <div className="from-slate-50 pointer-events-none absolute inset-y-0 right-0 w-1/12 sm:w-1/6 bg-gradient-to-l z-20"></div>
      </div>
    </section>
  );
}
