"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Clock,
  ArrowUpRight,
  Sparkles,
  ArrowRight,
  Tag,
  BookOpen,
} from "lucide-react";
import { BlogPost, getAllCategories } from "@/lib/blogs-data";

interface BlogsClientProps {
  initialPosts: BlogPost[];
}

export default function BlogsClient({ initialPosts }: BlogsClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = useMemo(() => getAllCategories(), []);

  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [initialPosts, selectedCategory, searchQuery]);

  return (
    <div className="space-y-12">
      {/* Search & Category Filter Controls */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-4 sm:p-6 space-y-4">
        {/* Search Bar */}
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles by title, topic, or keyword (e.g. Next.js, SEO, WhatsApp)..."
            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#ff5e00]/20 focus:border-[#ff5e00] transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-mono"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? "bg-[#ff5e00] text-white shadow-[0_2px_12px_rgba(255,94,0,0.35)]"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 border border-slate-200/60"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count / Filter Label */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-500 px-1">
        <span>
          SHOWING {filteredPosts.length} OF {initialPosts.length} ARTICLES
        </span>
        {selectedCategory !== "All" && (
          <span className="text-[#ff5e00] font-semibold">
            Filtered by: {selectedCategory}
          </span>
        )}
      </div>

      {/* Blog Cards Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="group relative flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:border-[#ff5e00]/40 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle Corner Glow */}
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

              {/* Author & Read Link */}
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
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-lg mx-auto">
          <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
          <h3 className="font-changa text-lg font-bold text-slate-900">
            No articles found
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            We couldn&apos;t find any articles matching &quot;{searchQuery}&quot;. Try adjusting your search query or category filter.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="mt-5 px-5 py-2.5 rounded-full bg-[#ff5e00] text-white text-xs font-bold shadow-md hover:bg-orange-600 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
