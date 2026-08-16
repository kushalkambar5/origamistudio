"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Clock, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { BlogPost } from "@/lib/blogs-data";

interface BlogsClientProps {
  initialPosts: BlogPost[];
}

const ITEMS_PER_PAGE = 6;

export default function BlogsClient({ initialPosts }: BlogsClientProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(initialPosts.length / ITEMS_PER_PAGE);

  const currentPosts = initialPosts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 120, behavior: "smooth" });
  };

  return (
    <div className="space-y-10">
      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {currentPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className="group/card relative flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:border-[#ff5e00]/40 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
          >
            {/* Subtle Corner Glow */}
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

            {/* Date & Read Link */}
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
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
          <span className="text-xs font-mono text-slate-500">
            SHOWING PAGE {currentPage} OF {totalPages} ({initialPosts.length} TOTAL ARTICLES)
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs font-bold bg-white border border-slate-200 text-slate-700 hover:border-[#ff5e00] hover:text-[#ff5e00] disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-700 transition-all shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Prev</span>
            </button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-9 h-9 rounded-xl text-xs font-bold transition-all ${
                    currentPage === page
                      ? "bg-[#ff5e00] text-white shadow-md"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-[#ff5e00] hover:text-[#ff5e00]"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs font-bold bg-white border border-slate-200 text-slate-700 hover:border-[#ff5e00] hover:text-[#ff5e00] disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-700 transition-all shadow-xs"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
