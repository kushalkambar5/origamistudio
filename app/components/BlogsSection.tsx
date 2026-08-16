"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Clock, Calendar, ArrowUpRight } from "lucide-react";
import { BLOG_POSTS, BlogPost } from "@/lib/blogs-data";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="group relative flex flex-col justify-between bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:border-[#ff5e00]/40 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
    >
      {/* Subtle Top-Right Gradient Accent on Hover */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#ff5e00]/15 via-orange-500/5 to-transparent rounded-bl-full pointer-events-none opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />

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
        <h3 className="font-changa text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#ff5e00] transition-colors leading-snug tracking-tight">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] sm:text-xs font-medium px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200/80 group-hover:bg-orange-50/50 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Author & Read CTA Footer */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-slate-200 bg-slate-100 shrink-0">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col truncate">
            <span className="text-xs font-bold text-slate-900 truncate">
              {post.author.name}
            </span>
            <span className="text-[11px] text-slate-500 font-mono truncate">
              {post.date}
            </span>
          </div>
        </div>

        <div className="inline-flex items-center gap-1 text-xs font-bold text-[#ff5e00] group-hover:translate-x-0.5 transition-transform shrink-0">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Top-Right Redirect Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <h2 className="font-changa text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#ff5e00] leading-[1.1]">BLOGS
            </h2>
          </div>

          {/* Top-Right Corner Button redirecting to /blogs page */}
          <div className="shrink-0">
            <Link
              href="/blogs"
              className="group inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-white text-slate-900 font-bold text-xs sm:text-sm border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#ff5e00]/50 hover:bg-[#ff5e00] hover:text-white transition-all duration-300 active:scale-95"
            >
              <span>Explore All Blogs</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Blog Cards Loop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BLOG_POSTS.slice(0, 6).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {/* Mobile View All CTA */}
        <div className="mt-10 text-center md:hidden">
          <Link
            href="/blogs"
            className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-2xl bg-slate-900 text-white font-bold text-sm shadow-md active:scale-98 transition-all"
          >
            <span>View All {BLOG_POSTS.length} Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
