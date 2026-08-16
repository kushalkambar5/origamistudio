"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, ArrowUpRight } from "lucide-react";
import { Marquee } from "@/registry/magicui/marquee";
import { BLOG_POSTS, BlogPost } from "@/lib/blogs-data";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      className={cn(
        "group/card relative flex flex-col justify-between w-[320px] sm:w-[380px] md:w-[420px] shrink-0 h-full",
        "bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-slate-200/90",
        "shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:border-[#ff5e00]/40 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
      )}
    >
      {/* Subtle Top-Right Gradient Accent on Hover */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#ff5e00]/15 via-orange-500/5 to-transparent rounded-bl-full pointer-events-none opacity-50 group-hover/card:opacity-100 group-hover/card:scale-110 transition-all duration-500" />

      <div>
        {/* Category & Read Time Row */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff5e00]/10 text-[#ff5e00] text-xs font-semibold font-mono tracking-wide border border-[#ff5e00]/20">
            {post.category}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-changa text-lg sm:text-xl font-bold text-slate-900 group-hover/card:text-[#ff5e00] transition-colors leading-snug tracking-tight">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>

      </div>

      {/* Date & Read CTA Footer */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        <span className="text-xs text-slate-500 font-mono">
          {post.date}
        </span>

        <div className="inline-flex items-center gap-1 text-xs font-bold text-[#ff5e00] group-hover/card:translate-x-0.5 transition-transform shrink-0">
          <span>Read</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </Link>
  );
};

export default function BlogsSection() {
  return (
    <section
      id="blogs"
      className="relative py-24 sm:py-32 bg-slate-50 text-slate-900 border-t border-slate-200 overflow-hidden"
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-[20%] -right-[10%] w-[500px] h-[500px] bg-[#ff5e00]/7 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] -left-[10%] w-[450px] h-[450px] bg-[#ff5e00]/5 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12 sm:mb-16">
        <div className="flex items-center justify-between gap-6">
          <div>
            <h2 className="font-changa text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#ff5e00] leading-[1.1]">
              BLOGS
            </h2>
          </div>

          {/* Top-Right Corner Button redirecting to /blogs page */}
          <div className="shrink-0">
            <Link
              href="/blogs"
              className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-slate-900 font-bold text-xs sm:text-sm border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#ff5e00]/50 hover:bg-[#ff5e00] hover:text-white transition-all duration-300 active:scale-95"
            >
              <span>Explore All Blogs</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Single Row Infinite Loop Blog Marquee */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden z-10">
        <Marquee pauseOnHover className="[--duration:45s] py-4">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </Marquee>

        {/* Left and Right Gradient Fades */}
        <div className="from-slate-50 pointer-events-none absolute inset-y-0 left-0 w-1/12 sm:w-1/6 bg-gradient-to-r z-20"></div>
        <div className="from-slate-50 pointer-events-none absolute inset-y-0 right-0 w-1/12 sm:w-1/6 bg-gradient-to-l z-20"></div>
      </div>

      {/* Mobile View All CTA below marquee */}
      <div className="mt-8 px-4 text-center md:hidden relative z-10">
        <Link
          href="/blogs"
          className="inline-flex items-center justify-center gap-2 w-full max-w-sm px-6 py-3.5 rounded-2xl bg-slate-900 text-white font-bold text-sm shadow-md active:scale-98 transition-all"
        >
          <span>View All {BLOG_POSTS.length} Articles</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
