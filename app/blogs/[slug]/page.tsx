import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Clock,
  Calendar,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Lightbulb,
  CheckCircle2,
  Bookmark,
} from "lucide-react";
import Footer from "../../components/Footer";
import ShareButtons from "./ShareButtons";
import {
  getAllBlogs,
  getBlogBySlug,
  getRelatedBlogs,
  BlogPost,
} from "@/lib/blogs-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogs();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    alternates: {
      canonical: `https://www.origamistudio.in/blogs/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.origamistudio.in/blogs/${post.slug}`,
      siteName: "Origami Studio",
      type: "article",
      publishedTime: post.date,
      images: [
        {
          url: "/logo.png",
          width: 800,
          height: 800,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["/logo.png"],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogs(slug, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: "https://www.origamistudio.in/logo.png",
    datePublished: post.date,
    publisher: {
      "@type": "Organization",
      name: "Origami Studio",
      logo: {
        "@type": "ImageObject",
        url: "https://www.origamistudio.in/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.origamistudio.in/blogs/${post.slug}`,
    },
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
              href="/blogs"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 min-h-[38px] rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 active:scale-95 transition-all"
            >
              <ArrowLeft className="w-4 h-4 shrink-0" />
              <span className="hidden xs:inline sm:inline">All Blogs</span>
              <span className="xs:hidden sm:hidden">Blogs</span>
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

      {/* Main Article Container */}
      <article className="grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 w-full space-y-8 sm:space-y-12">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs font-mono text-slate-500 overflow-x-auto whitespace-nowrap pb-1"
        >
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/blogs" className="hover:text-[#ff5e00] transition-colors">
            Blogs
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-800 font-semibold truncate max-w-[200px] sm:max-w-xs">
            {post.title}
          </span>
        </nav>

        {/* Article Header */}
        <header className="space-y-6">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ff5e00]/10 text-[#ff5e00] text-xs font-semibold font-mono tracking-wide border border-[#ff5e00]/20">
              <Bookmark className="w-3 h-3" />
              {post.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{post.readTime}</span>
            </div>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{post.date}</span>
            </div>
          </div>

          <h1 className="font-changa text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-slate-950 leading-[1.12]">
            {post.title}
          </h1>

          <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
            {post.excerpt}
          </p>

          {/* Social Share Toolbar */}
          <div className="pt-4 border-t border-b border-slate-200 py-4 flex items-center justify-between gap-4">
            <span className="text-xs text-slate-500 font-mono">
              Published: {post.date}
            </span>

            <ShareButtons title={post.title} slug={post.slug} />
          </div>
        </header>

        {/* Article Body */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 lg:p-12 shadow-xs space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">
          {/* Introduction */}
          <div className="border-l-4 border-[#ff5e00] pl-4 sm:pl-6 italic text-slate-800 text-base sm:text-lg leading-relaxed bg-orange-50/40 py-3 rounded-r-2xl">
            {post.content.intro}
          </div>

          {/* Body Sections */}
          {post.content.sections.map((section, idx) => (
            <section key={idx} className="space-y-4 pt-4 border-t border-slate-100 first:border-t-0 first:pt-0">
              <h2 className="font-changa text-xl sm:text-2xl font-bold uppercase tracking-tight text-slate-950">
                {section.heading}
              </h2>

              {section.subheading && (
                <h3 className="font-changa text-base sm:text-lg font-semibold text-[#ff5e00]">
                  {section.subheading}
                </h3>
              )}

              {section.body.map((para, pIdx) => (
                <p key={pIdx} className="text-slate-700 leading-relaxed">
                  {para}
                </p>
              ))}

              {section.keyTakeaway && (
                <div className="my-5 p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3.5">
                  <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-mono font-bold text-amber-800 uppercase mb-1">
                      KEY STRATEGY TAKEAWAY
                    </span>
                    <p className="text-xs sm:text-sm text-slate-800 font-medium">
                      {section.keyTakeaway}
                    </p>
                  </div>
                </div>
              )}

              {section.codeOrList && (
                <div className="my-6 p-5 sm:p-6 rounded-2xl bg-slate-950 text-slate-100 border border-slate-800 space-y-3">
                  {section.codeOrList.title && (
                    <div className="text-xs font-mono font-bold text-[#ff5e00] uppercase tracking-wider">
                      // {section.codeOrList.title}
                    </div>
                  )}
                  <ul className="space-y-2">
                    {section.codeOrList.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-[#ff5e00] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          ))}

          {/* Conclusion */}
          <div className="pt-6 border-t border-slate-200 space-y-3">
            <h3 className="font-changa text-lg font-bold uppercase text-slate-900">
              The Bottom Line
            </h3>
            <p className="text-slate-700 leading-relaxed">
              {post.content.conclusion}
            </p>
          </div>

        </div>


        {/* Call to Action Box */}
        <div className="relative rounded-3xl bg-slate-950 text-white p-8 sm:p-12 overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff5e00]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-[#ff5e00] font-mono text-xs font-bold tracking-wider uppercase">
              GROW WITH ORIGAMI STUDIO
            </span>
            <h2 className="font-changa text-2xl sm:text-4xl font-extrabold uppercase tracking-tight leading-tight">
              Ready to implement these strategies for your brand?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We design and engineer bespoke web experiences, dominate local search, shoot cinematic video campaigns, and automate sales with custom AI.
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

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between">
              <h3 className="font-changa text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-slate-950">
                RELATED <span className="text-[#ff5e00]">ARTICLES</span>
              </h3>
              <Link
                href="/blogs"
                className="text-xs font-bold text-[#ff5e00] hover:underline flex items-center gap-1"
              >
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blogs/${related.slug}`}
                  className="group relative flex flex-col justify-between bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-xl hover:border-[#ff5e00]/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#ff5e00]/10 text-[#ff5e00] border border-[#ff5e00]/20">
                        {related.category}
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">
                        {related.readTime}
                      </span>
                    </div>
                    <h4 className="font-changa text-base font-bold text-slate-900 group-hover:text-[#ff5e00] transition-colors leading-snug">
                      {related.title}
                    </h4>
                    <p className="mt-2 text-xs text-slate-500 line-clamp-2">
                      {related.excerpt}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#ff5e00]">
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
