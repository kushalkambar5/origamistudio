import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BookOpen, Sparkles, ArrowRight } from "lucide-react";
import Footer from "../components/Footer";
import BlogsClient from "./BlogsClient";
import { getAllBlogs } from "@/lib/blogs-data";

export const metadata = {
  title: "Blogs & Tactical Playbooks | Origami Studio",
  description:
    "Explore technical guides, CRO strategies, local SEO playbooks, AI agent automation, and video marketing breakdowns by Origami Studio.",
  openGraph: {
    title: "Blogs & Tactical Playbooks | Origami Studio",
    description:
      "Explore technical guides, CRO strategies, local SEO playbooks, AI agent automation, and video marketing breakdowns by Origami Studio.",
    url: "https://origamistudio.in/blogs",
    siteName: "Origami Studio",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Origami Studio Blogs",
      },
    ],
  },
};

export default function BlogsPage() {
  const allBlogs = getAllBlogs();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://origamistudio.in/blogs",
    name: "Origami Studio Blogs & Tactical Insights",
    url: "https://origamistudio.in/blogs",
    description:
      "Actionable engineering breakdowns, SEO rankings, AI automation workflows, and short-form video strategies from Origami Studio.",
    publisher: {
      "@type": "Organization",
      name: "Origami Studio",
      logo: {
        "@type": "ImageObject",
        url: "https://origamistudio.in/logo.png",
      },
    },
    blogPost: allBlogs.map((blog) => ({
      "@type": "BlogPosting",
      headline: blog.title,
      description: blog.excerpt,
      url: `https://origamistudio.in/blogs/${blog.slug}`,
      datePublished: blog.date,
    })),
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top Bar Navigation */}
      <header className="w-full bg-white/85 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 group transition-transform duration-300 hover:scale-[1.02] shrink-0"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-white to-slate-50 p-1 border border-slate-200 shadow-xs group-hover:border-[#ff5e00]/40 transition-colors">
              <Image
                src="/logo.png"
                alt="Origami Studio Logo"
                width={32}
                height={32}
                className="object-contain"
                priority
              />
            </div>
            <span className="font-changa text-base sm:text-lg font-bold tracking-wider text-slate-900 uppercase">
              ORIGAMI <span className="text-[#ff5e00]">STUDIO</span>
            </span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 min-h-[38px] rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 active:scale-95 transition-all"
            >
              <ArrowLeft className="w-4 h-4 shrink-0" />
              <span className="hidden xs:inline sm:inline">Back to Home</span>
              <span className="xs:hidden sm:hidden">Home</span>
            </Link>
            <Link
              href="/#contact-us"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 min-h-[38px] rounded-full text-xs font-bold text-slate-900 bg-white hover:bg-[#ff5e00] hover:text-white border border-slate-200 shadow-xs transition-all"
            >
              <span>Book Call</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 w-full space-y-12 sm:space-y-16">
        {/* Page Hero Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="font-changa text-3xl sm:text-6xl font-extrabold uppercase tracking-tight text-slate-950 leading-[1.1]">
            <span className="text-[#ff5e00]">BLOGS</span>
          </h1>
        </div>

        {/* Interactive Blog Cards + Filtering */}
        <BlogsClient initialPosts={allBlogs} />

        {/* Conversion Bottom Banner */}
        <div className="relative rounded-3xl bg-slate-950 text-white p-8 sm:p-12 overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff5e00]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-[#ff5e00] font-mono text-xs font-bold tracking-wider uppercase">
              LET&apos;S WORK TOGETHER
            </span>
            <h2 className="font-changa text-2xl sm:text-4xl font-extrabold uppercase tracking-tight leading-tight">
              Ready to turn these insights into measurable revenue for your brand?
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Partner with Origami Studio for high-performing Next.js web applications, Google Business Profile ranking, video production, and custom AI agents.
            </p>
            <div className="pt-2">
              <Link
                href="/#contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ff5e00] hover:bg-orange-600 text-white font-bold text-xs sm:text-sm shadow-[0_4px_20px_rgba(255,94,0,0.4)] transition-all active:scale-95"
              >
                <span>Book a Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
