export interface BlogAuthor {
  name: string;
  role: string;
  avatar: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: BlogAuthor;
  coverGradient: string;
  tags: string[];
  featured?: boolean;
  content: {
    intro: string;
    sections: {
      heading: string;
      subheading?: string;
      body: string[];
      keyTakeaway?: string;
      codeOrList?: {
        title?: string;
        items: string[];
      };
    }[];
    conclusion: string;
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "high-converting-landing-pages-2026",
    title: "The Anatomy of a High-Converting Agency Landing Page in 2026",
    excerpt:
      "Why traditional agency websites fail to convert traffic, and the exact architectural blueprint to turn visitors into booked strategy calls.",
    category: "Web Development",
    readTime: "5 min read",
    date: "Aug 15, 2026",
    featured: true,
    author: {
      name: "Kushal B K",
      role: "Lead Tech & AI",
      avatar: "/team/kushal.jpg",
    },
    coverGradient: "from-[#ff5e00]/20 via-orange-500/10 to-slate-900",
    tags: ["Next.js", "CRO", "UI/UX", "Web Design"],
    content: {
      intro:
        "In 2026, user attention spans on landing pages average less than 3.2 seconds. If your agency website relies on vague corporate buzzwords, sluggish templates, or cluttered navigation, high-intent prospective clients will bounce before they ever discover your value proposition. Building a high-converting digital experience requires stripping away friction and engineering every visual anchor toward clear action.",
      sections: [
        {
          heading: "1. The 3-Second Rule & Above-the-Fold Clarity",
          body: [
            "Your above-the-fold canvas must answer three fundamental questions instantly: What do you do? Who do you do it for? And how do I get started?",
            "Avoid generic hero copy like 'We build tomorrow's solutions'. Instead, utilize unambiguous, benefit-driven headlines that quantify real business impact. Combine this with direct call-to-action buttons that minimize form fatigue.",
          ],
          keyTakeaway:
            "A clear headline paired with a high-contrast booking CTA converts up to 4.2x higher than ambiguous artistic mission statements.",
          codeOrList: {
            title: "Core Hero Anchors",
            items: [
              "One crystal-clear primary headline stating the outcome",
              "Subhead highlighting the target niche and timeframe",
              "Prominent, single primary CTA button with tactile hover feedback",
              "Instant social proof pill (e.g. '⭐ 4.9/5 from 24+ high-growth brands')",
            ],
          },
        },
        {
          heading: "2. Performance as a Core Design Feature",
          body: [
            "Every 100ms delay in page load time reduces conversions by 7%. Modern web applications must be engineered with server components, optimized asset pipelines, and zero-layout-shift typography.",
            "By pairing Next.js with modern CSS optimization and static generation, we achieve sub-100ms initial response times that keep users immersed.",
          ],
          keyTakeaway:
            "Speed is not an afterthought; it is the foundation of user trust and Google search ranking.",
        },
        {
          heading: "3. Social Proof and Dynamic Case Studies",
          body: [
            "Modern buyers don't trust claims; they trust proof. High-converting landing pages interlace client video testimonials, live performance metrics, and recognizable client logos throughout the scroll sequence.",
            "Structuring testimonials with specific before-and-after results (e.g. '350% increase in qualified inquiries') turns passive readers into motivated leads.",
          ],
          codeOrList: {
            title: "Essential Proof Elements",
            items: [
              "Video snippets showcasing real client reactions",
              "Quantified case studies with before vs. after metrics",
              "Interactive before-and-after visual sliders",
              "Authentic founder and team portraits",
            ],
          },
        },
        {
          heading: "4. Frictionless Booking Sequences",
          body: [
            "Never redirect interested prospects to a 10-field contact form. High-performing agency sites embed instant calendar scheduling or streamlined two-field inquiry forms that trigger automatic WhatsApp or email confirmation workflows.",
          ],
        },
      ],
      conclusion:
        "Converting landing pages are engineered systems combining aesthetic brilliance with scientific conversion psychology. When your agency's digital home is fast, clear, and trustworthy, scaling your client roster becomes systematic.",
    },
  },
  {
    slug: "ai-agents-whatsapp-automation",
    title: "How Custom AI Agents & WhatsApp Automation 10x Lead Capture",
    excerpt:
      "Learn how automated conversational workflows and custom trained AI assistants turn passive midnight website visits into pre-qualified sales appointments.",
    category: "AI & Automation",
    readTime: "6 min read",
    date: "Aug 12, 2026",
    featured: true,
    author: {
      name: "Kushal B K",
      role: "Lead Tech & AI",
      avatar: "/team/kushal.jpg",
    },
    coverGradient: "from-blue-600/20 via-[#ff5e00]/15 to-slate-950",
    tags: ["AI Agents", "WhatsApp API", "CRM Automation", "Lead Gen"],
    content: {
      intro:
        "Over 65% of customer inquiries happen outside standard business hours. When prospects reach out on WhatsApp or via a web contact form at 10 PM and wait until the next morning for a reply, the likelihood of booking a deal drops by over 80%. Custom AI agents bridge this gap by qualifying leads, answering intricate service questions, and locking appointments within seconds.",
      sections: [
        {
          heading: "1. Moving Beyond Dumb Rule-Based Chatbots",
          body: [
            "Traditional decision-tree bots irritate users with rigid menus and inability to handle natural phrasing. Modern AI assistants are powered by fine-tuned language models and retrieval-augmented generation (RAG) trained on your agency's proprietary service documents, pricing models, and case studies.",
            "They understand nuance, overcome common objections, and communicate seamlessly in the exact voice of your brand.",
          ],
          keyTakeaway:
            "Context-aware AI agents understand colloquial inquiries and provide accurate quotes without human intervention.",
        },
        {
          heading: "2. The WhatsApp API Advantage",
          body: [
            "WhatsApp boasts an unmatched 98% open rate and 45% click-through rate compared to email's declining numbers. Integrating custom AI workflows directly with the WhatsApp Business API allows businesses to engage customers where they are already active.",
            "From automated instant quotes to calendar booking reminders, WhatsApp workflows minimize no-show rates drastically.",
          ],
          codeOrList: {
            title: "Top WhatsApp Automation Workflows",
            items: [
              "Instant lead qualification and budget scoring",
              "Interactive calendar booking with Google Calendar / Cal.com sync",
              "Automated reminder sequences 24 hours and 1 hour before calls",
              "Instant PDF proposal and portfolio delivery",
            ],
          },
        },
        {
          heading: "3. Direct CRM & Pipeline Sync",
          body: [
            "Every lead conversation is automatically summarized, categorized by lead score, and synced into your CRM (HubSpot, Zoho, Notion, or custom databases). Your human sales team enters calls with full situational context.",
          ],
        },
      ],
      conclusion:
        "By deploying custom AI agents and WhatsApp pipelines, your brand operates a tireless 24/7 sales engine that captures every opportunity the moment interest is hottest.",
    },
  },
  {
    slug: "google-business-profile-ranking-secrets",
    title: "Dominating Local Search: The 2026 Google Business Profile Playbook",
    excerpt:
      "A step-by-step masterclass on ranking in the Google Local 3-Pack and converting nearby searchers into loyal foot traffic and paying clients.",
    category: "Local SEO",
    readTime: "7 min read",
    date: "Aug 08, 2026",
    featured: true,
    author: {
      name: "Shrujan Satish",
      role: "Shoots & Marketing",
      avatar: "/team/shrujan.jpg",
    },
    coverGradient: "from-emerald-500/20 via-[#ff5e00]/15 to-slate-900",
    tags: ["GBP", "Local SEO", "Google Maps", "Reputation"],
    content: {
      intro:
        "When a prospective customer searches for high-intent queries like 'best video production agency near me' or 'digital marketing studio in Mangalore', 72% of clicks go directly to the Google Maps 3-Pack. Ranking in this top cluster is the single most lucrative organic acquisition channel for local and regional businesses.",
      sections: [
        {
          heading: "1. The Pillars of Google Map Pack Dominance",
          body: [
            "Google's local algorithm weighs three primary factors: Relevance, Distance, and Prominence. While you cannot manipulate physical proximity to every searcher, you can masterfully optimize relevance and prominence through targeted profile signals.",
          ],
          codeOrList: {
            title: "Key Ranking Pillars",
            items: [
              "Exact primary business category alignment",
              "Consistent NAP (Name, Address, Phone) across 50+ citations",
              "Continuous stream of keyword-rich, photo-backed customer reviews",
              "High-resolution geotagged photos and weekly video updates",
            ],
          },
        },
        {
          heading: "2. The Review Generation Flywheel",
          body: [
            "It is not just the overall star rating that matters; review velocity, recency, and customer keyword inclusion play a decisive role. Asking satisfied clients to mention the specific service (e.g. 'web redesign' or 'product shoot') boosts semantic relevance for those queries.",
            "Responding to every single review within 24 hours signals active management to Google's ranking crawlers.",
          ],
          keyTakeaway:
            "Reviews containing specific service keywords have a 300% higher weight on local search positioning.",
        },
        {
          heading: "3. Geotagged Media & Weekly Google Posts",
          body: [
            "Profiles that upload fresh, geotagged on-site media weekly experience up to 42% more requests for directions on Google Maps. Treating your GBP like an active micro-social network creates insurmountable local authority.",
          ],
        },
      ],
      conclusion:
        "Local SEO is a compounding moat. Once your business secures the #1 position in the Google 3-Pack, the continuous influx of high-intent inquiries provides predictable growth.",
    },
  },
  {
    slug: "short-form-video-strategy-for-brands",
    title: "From Views to Revenue: Building a Viral Short-Form Video Engine",
    excerpt:
      "How brands can stop chasing empty viral vanity metrics and create short-form video systems that generate qualified inbound business.",
    category: "Video Production",
    readTime: "5 min read",
    date: "Aug 02, 2026",
    featured: false,
    author: {
      name: "Rudra Prathap",
      role: "Video Editing & Marketing",
      avatar: "/team/rudra.jpg",
    },
    coverGradient: "from-purple-600/20 via-[#ff5e00]/15 to-slate-900",
    tags: ["Reels", "Shorts", "Video Editing", "Content Strategy"],
    content: {
      intro:
        "Millions of views mean nothing if none of those viewers convert into customers. The era of dancing trends and generic clickbait is over. Today's most successful brands utilize structured short-form narratives engineered with precision pacing, dynamic visual hooks, and direct conversion pathways.",
      sections: [
        {
          heading: "1. The 1.5-Second Visual Hook",
          body: [
            "On Instagram Reels and YouTube Shorts, users swipe away within 1.5 seconds if the visual entry point doesn't create instant curiosity. High-retention videos pair sudden motion, bold on-screen typography, and high-energy audio immediately.",
          ],
          keyTakeaway:
            "Visual pattern interrupts retain up to 60% more audience through the crucial first 3 seconds.",
        },
        {
          heading: "2. The Problem-Agitate-Solve Micro-Structure",
          body: [
            "A 45-second reel should deliver a mini-documentary experience: identify a acute problem your audience suffers from, agitate the consequences of ignoring it, and reveal your solution with crisp B-roll and motion graphic evidence.",
          ],
          codeOrList: {
            title: "45-Second Reel Architecture",
            items: [
              "0-3s: Visual pattern interrupt & polarizing hook",
              "3-15s: Agitating the core audience friction",
              "15-35s: Clear, actionable step-by-step breakdown",
              "35-45s: Specific CTA (e.g., 'Comment WORK to get our free system')",
            ],
          },
        },
        {
          heading: "3. Professional Post-Production & Color Grading",
          body: [
            "Studio-grade audio mastering, kinetic subtitle typography, and bespoke color grading instantly separate premium brands from amateur competitors. Quality signals credibility.",
          ],
        },
      ],
      conclusion:
        "When short-form video is built upon deep customer empathy and cinematic polish, it transforms social channels into high-velocity customer acquisition engines.",
    },
  },
  {
    slug: "mastering-modern-seo-nextjs",
    title: "Next.js SEO Mastery: Sub-100ms Speeds & Structured Data Dominance",
    excerpt:
      "A technical deep dive into Server Components, OpenGraph generation, JSON-LD automation, and Core Web Vitals optimization for competitive search rankings.",
    category: "SEO & Tech",
    readTime: "8 min read",
    date: "Jul 28, 2026",
    featured: false,
    author: {
      name: "Kushal B K",
      role: "Lead Tech & AI",
      avatar: "/team/kushal.jpg",
    },
    coverGradient: "from-cyan-500/20 via-[#ff5e00]/15 to-slate-900",
    tags: ["Next.js", "SEO", "TypeScript", "Core Web Vitals"],
    content: {
      intro:
        "Modern search engine algorithms prioritize real user experience metrics over keyword stuffing. Next.js App Router gives engineers the ultimate toolkit to deliver instant render speeds, automated structured data, and flawless indexability out of the box.",
      sections: [
        {
          heading: "1. Server Components & Zero Client JavaScript Bloat",
          body: [
            "By default, Next.js Server Components execute on the edge/server and transmit pure HTML to the client. This results in ultra-low Largest Contentful Paint (LCP) scores and immediate search spider parsing without client-side rendering hurdles.",
          ],
          keyTakeaway:
            "Zero client-side JS overhead on content pages guarantees 100/100 Google Lighthouse performance scores.",
        },
        {
          heading: "2. Deep JSON-LD Schema Integration",
          body: [
            "Schema markup translates your website's content into structured entities that Google's Knowledge Graph understands effortlessly. Implementing ProfessionalService, FAQPage, and BlogPosting schemas unlocks rich snippet results in search rankings.",
          ],
          codeOrList: {
            title: "Crucial Structured Schemas",
            items: [
              "Organization & ProfessionalService with local NAP data",
              "FAQPage for collapsible search snippet SERP real-estate",
              "BlogPosting with author, dates, and publisher metadata",
              "BreadcrumbList for hierarchical search navigation",
            ],
          },
        },
        {
          heading: "3. Automated Dynamic Sitemaps & Meta Tags",
          body: [
            "Leverage dynamic `sitemap.ts` and `robots.ts` to automatically expose all published articles and service routes to search crawlers the instant new content is added.",
          ],
        },
      ],
      conclusion:
        "Engineering your web assets on modern fullstack frameworks like Next.js establishes an unbreakable technical foundation that elevates every marketing and content effort.",
    },
  },
  {
    slug: "brand-identity-visual-storytelling",
    title: "Visual Storytelling: How Cohesive Brand Identity Drives Trust & Conversions",
    excerpt:
      "Why fragmented branding silently kills sales and how cohesive art direction across web, video, and social establishes pricing power.",
    category: "Branding & Strategy",
    readTime: "6 min read",
    date: "Jul 20, 2026",
    featured: false,
    author: {
      name: "Rudra Prathap",
      role: "Video Editing & Marketing",
      avatar: "/team/rudra.jpg",
    },
    coverGradient: "from-rose-500/20 via-[#ff5e00]/15 to-slate-900",
    tags: ["Branding", "Design System", "Art Direction", "Typography"],
    content: {
      intro:
        "Every touchpoint of your brand — from your website's font weight to the color grading of your social video reels — tells a story. When those touchpoints feel fragmented, customers subconsciously perceive risk. When they align in harmony, your agency commands premium pricing and immediate credibility.",
      sections: [
        {
          heading: "1. The Unified Design System",
          body: [
            "A brand is far more than a logo. It is a coherent design system spanning curated color palettes (like our signature `#ff5e00` origami orange), bespoke typography scales, and tactile micro-interactions that make every screen memorable.",
          ],
          keyTakeaway:
            "Consistent visual branding across all touchpoints increases client retention and revenue by up to 23%.",
        },
        {
          heading: "2. The Psychology of Motion & Micro-Interactions",
          body: [
            "Subtle physics-based animations and interactive button states give interfaces a tactile, high-end feel. They reward user curiosity and turn sterile digital interactions into delight.",
          ],
          codeOrList: {
            title: "Brand Harmony Checklist",
            items: [
              "Harmonized primary and accent color system",
              "Consistent typographical hierarchy across web and video assets",
              "Signature motion curves for UI transitions and video cuts",
              "High-fidelity brand tone and voice guidelines",
            ],
          },
        },
      ],
      conclusion:
        "Invest in thoughtful visual storytelling. When your brand looks, feels, and moves like an industry leader, clients treat you like one.",
    },
  },
];

export function getAllBlogs(): BlogPost[] {
  return BLOG_POSTS;
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug.toLowerCase() === slug.toLowerCase());
}

export function getFeaturedBlogs(): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.featured);
}

export function getRelatedBlogs(currentSlug: string, limit: number = 3): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.slug.toLowerCase() !== currentSlug.toLowerCase()).slice(
    0,
    limit
  );
}

export function getAllCategories(): string[] {
  const categories = new Set(BLOG_POSTS.map((b) => b.category));
  return ["All", ...Array.from(categories)];
}
