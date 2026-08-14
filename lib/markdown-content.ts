export interface PageMarkdownData {
  title: string;
  description: string;
  image?: string;
  content: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  originalHtmlLengthEstimate?: number;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://origamistudio.in";

const mainJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Origami Studio",
  image: `${siteUrl}/logo.png`,
  "@id": siteUrl,
  url: siteUrl,
  telephone: "+918919300467",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mangalore",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "09:00",
    closes: "20:00",
  },
  sameAs: [
    "https://instagram.com/origamistudio",
    "https://linkedin.com/company/origamistudio",
    "https://twitter.com/origamistudio",
  ],
  description:
    "Full-service digital marketing and tech agency providing Social Media Management, Web Development with SEO, Google Business Profile ranking, Video Production, AI Agents, and WhatsApp Automation.",
};

export const pageMarkdownMap: Record<string, PageMarkdownData> = {
  "/": {
    title: "Origami Studio | Digital Marketing & Tech Services Agency",
    description:
      "Origami Studio is a premier digital marketing & tech agency. We combine strategy, creativity, fullstack web development, SEO, Google Business Profile ranking, video production, AI Agents, and WhatsApp automation to scale brands.",
    image: `${siteUrl}/logo.png`,
    jsonLd: mainJsonLd,
    originalHtmlLengthEstimate: 45000,
    content: `
# Origami Studio — Folding Ideas. Creating Impact.

> **Origami Studio** is a premier full-service digital marketing and technology agency based at NITK Surathkal, Mangalore, Karnataka, India. We combine strategy, design, engineering, and artificial intelligence to build, launch, and scale standout brands.

---

## Core Services

### 1. Social Media Management
- **Brand Strategy & Positioning:** Comprehensive content calendar development, brand voice curation, and visual identity guidelines.
- **Content Creation:** High-engagement graphic designs, carousels, short-form video reels, and copywriting tailored for Instagram, LinkedIn, X, and Facebook.
- **Community Management & Analytics:** Daily audience interaction, follower growth tactics, and actionable performance analytics.

### 2. Fullstack Web Development & Modern SEO
- **Custom Web Applications:** Modern, fluid, high-performance web apps built with Next.js, React, TypeScript, and Tailwind CSS.
- **Technical & On-Page SEO:** Core Web Vitals optimization, semantic HTML5, automated XML sitemaps, structured data markup (JSON-LD), and rapid indexation strategies.
- **Conversion Rate Optimization (CRO):** Frictionless UI/UX design focused on maximizing lead generation and sale conversions.

### 3. Google Business Profile (GBP) & Local SEO Ranking
- **Map Pack Optimization:** Dominating local search results for service keywords in targeted geographic regions.
- **Review & Reputation Building:** Automated feedback workflows and response strategies to establish trust and authority.
- **Local Citations & Geotagged Media:** NAP consistency across directories and geotagged updates.

### 4. Video Production, Offline Shoots & Professional Editing
- **On-Location Media Shoots:** Cinematic 4K video capturing for brand stories, product launches, corporate events, and client testimonials.
- **Post-Production & Motion Graphics:** Color grading, audio mastering, dynamic captioning, and animation.
- **Short-Form Content Engine:** Reels, Shorts, and TikTok style video assets optimized for social algorithms.

### 5. Custom AI Agents & WhatsApp Marketing Automation
- **Conversational AI Assistants:** Autonomous sales, customer support, and lead qualification agents trained on custom brand knowledge bases.
- **WhatsApp API Integration:** Automated order confirmations, appointment scheduling, drip marketing campaigns, and interactive chat flows.
- **Workflow Automation:** Seamlessly connecting CRM tools, lead capture forms, and messaging pipelines.

---

## Featured Work & Case Studies

- **Suhas - Traditional Vegetarian Restaurant:** 350% increase in footfall & local Google Map searches through targeted local SEO and video campaigns.
- **Standardized Test Prep Platform:** 5x increase in qualified lead volume via custom web experience and automated WhatsApp nurture sequences.
- **Fitness & Wellness Brand:** 10x social reach growth with short-form video production and high-converting landing page.

---

## Client Testimonials & Impact

- *"Origami Studio completely transformed our online presence. Their web design and local SEO brought us more customers in 3 months than the entire previous year."* — Business Owner
- *"The AI agent and WhatsApp automation handled 80% of our customer queries automatically while booking qualified meetings 24/7."* — Operations Lead

---

## Frequently Asked Questions (FAQ)

### What sets Origami Studio apart from traditional agencies?
We integrate creative storytelling directly with modern fullstack software development and artificial intelligence workflows, ensuring measurable ROI rather than just superficial vanity metrics.

### How quickly can a project launch?
Standard web app and digital marketing onboardings take between 1 to 3 weeks depending on scope, assets, and custom AI requirements.

### Do you handle ongoing maintenance and optimization?
Yes, we offer ongoing retainers for social media management, continuous SEO optimization, video production, and AI model tuning.

---

## Contact Information

- **Email:** hello@origamistudio.in
- **Phone:** +91 8919300467
- **Location:** NITK Surathkal, Mangalore, Karnataka 575025, India
- **Website:** [https://origamistudio.in](https://origamistudio.in)
`,
  },
  "/privacy-policy": {
    title: "Privacy Policy | Origami Studio",
    description:
      "Privacy Policy governing how Origami Studio collects, uses, and safeguards user and client information.",
    image: `${siteUrl}/logo.png`,
    jsonLd: mainJsonLd,
    originalHtmlLengthEstimate: 12000,
    content: `
# Privacy Policy — Origami Studio

**Last Updated:** August 14, 2026

At **Origami Studio** ("we", "our", "us"), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, store, and safeguard your data when you visit [https://origamistudio.in](https://origamistudio.in) or interact with our services.

---

## 1. Overview & Commitment
We collect minimal necessary personal data to deliver digital marketing, web development, SEO, and AI automation services effectively while maintaining industry-standard security.

## 2. Information We Collect
- **Contact Information:** Your name, work email address, phone number, and company name submitted via inquiry forms or direct communication.
- **Project Details:** Business goals, target audience, and service specifications provided during consultations.
- **Technical & Usage Data:** IP address, browser type, device details, and site usage metrics collected automatically for security and performance optimization.

## 3. How We Use Your Information
- To respond to inquiries and provide custom project quotes.
- To deliver and manage digital marketing, SEO, web development, and AI services.
- To send project updates, invoices, and service communications.
- To analyze website performance and prevent security threats.

> **We do not sell, rent, or trade your personal information to third parties.**

## 4. Data Security & Retention
We implement industry-standard technical safeguards to prevent unauthorized access, disclosure, or alteration of your data. We retain personal information only as long as required for legitimate business and legal purposes.

## 5. Third-Party Tools & Analytics
Our website uses trusted analytics services (such as Google Analytics) to measure site traffic and user engagement. These tools process non-identifiable usage statistics according to their respective privacy policies.

## 6. Your Data Rights
You have the right to request access to, correction of, or deletion of your personal data stored by Origami Studio. Contact us at **hello@origamistudio.in** to exercise these rights.

## 7. Contact Information
- **Email:** hello@origamistudio.in
- **Phone:** +91 8919300467
- **Location:** NITK Surathkal, Mangalore, Karnataka 575025, India
`,
  },
  "/terms-and-conditions": {
    title: "Terms & Conditions | Origami Studio",
    description:
      "Terms and Conditions governing the use of Origami Studio's digital marketing, web development, SEO, and AI services.",
    image: `${siteUrl}/logo.png`,
    jsonLd: mainJsonLd,
    originalHtmlLengthEstimate: 14000,
    content: `
# Terms & Conditions — Origami Studio

**Last Updated:** August 14, 2026

Welcome to **Origami Studio** ("Company", "we", "our", or "us"). By accessing our website ([https://origamistudio.in](https://origamistudio.in)) or engaging our digital marketing, web development, SEO, video production, or AI agent services, you agree to be bound by these Terms and Conditions ("Terms").

---

## 1. Acceptance of Terms
By using our site or services, you acknowledge that you have read, understood, and agreed to these Terms. If you do not agree, you must cease using our website and services immediately.

## 2. Scope of Services
Origami Studio provides full-service digital marketing and tech solutions including:
- Social Media Marketing & Brand Management
- Fullstack Web Design, Development, and Search Engine Optimization (SEO)
- Google Business Profile (GBP) Ranking & Local Marketing
- Video Production, Offline Shoots, and Post-Production Editing
- Custom AI Agents & WhatsApp Marketing Automation

Specific project scope, deliverables, timelines, and fees are governed by individual Service Agreements or Statements of Work (SOW).

## 3. Client Responsibilities
Clients agree to:
- Provide accurate brand assets, content, credentials, and timely feedback.
- Ensure all provided materials do not violate third-party intellectual property or privacy rights.
- Designate an authorized point of contact for approvals.

## 4. Payment Terms & Billing
Invoices are issued according to the schedule in your service agreement. Payments are due by the specified date. Late payments may result in temporary suspension of active campaigns, website hosting, or maintenance services.

## 5. Intellectual Property Rights
Upon full payment of all fees, clients receive full ownership of final custom design deliverables, website code, and promotional media created for their project, excluding pre-existing proprietary tools, frameworks, or third-party stock assets licensed by Origami Studio.

## 6. Confidentiality
Both parties agree to maintain strict confidentiality regarding proprietary business information, strategies, credentials, or financial details disclosed during the project.

## 7. Limitation of Liability
Origami Studio shall not be liable for indirect, incidental, or consequential damages resulting from third-party platform policy changes, algorithm updates, or hosting provider outages beyond our control.

## 8. Contact Information
- **Email:** hello@origamistudio.in
- **Phone:** +91 8919300467
- **Location:** NITK Surathkal, Mangalore, Karnataka 575025, India
`,
  },
};

/**
 * Estimate token count from string length (roughly 4 characters per token)
 */
export function estimateTokenCount(text: string): number {
  if (!text) return 0;
  return Math.max(1, Math.ceil(text.length / 4));
}

/**
 * Format page data into Cloudflare-compliant Markdown for Agents response
 */
export function generateMarkdownForAgents(path: string): {
  markdown: string;
  markdownTokens: number;
  originalTokens: number;
} {
  const normalizedPath = path === "" || path === "/" ? "/" : path.replace(/\/$/, "");
  const pageData = pageMarkdownMap[normalizedPath] || pageMarkdownMap["/"];

  // 1. Frontmatter
  let frontmatter = "---\n";
  frontmatter += `title: ${JSON.stringify(pageData.title)}\n`;
  frontmatter += `description: ${JSON.stringify(pageData.description)}\n`;
  if (pageData.image) {
    frontmatter += `image: ${JSON.stringify(pageData.image)}\n`;
  }
  frontmatter += "---\n\n";

  // 2. Body Markdown
  const bodyMarkdown = pageData.content.trim();

  // 3. JSON-LD block
  let jsonLdBlock = "";
  if (pageData.jsonLd) {
    jsonLdBlock = `\n\n\`\`\`json\n${JSON.stringify(
      pageData.jsonLd,
      null,
      2
    )}\n\`\`\`\n`;
  }

  const fullMarkdown = `${frontmatter}${bodyMarkdown}${jsonLdBlock}`;

  const markdownTokens = estimateTokenCount(fullMarkdown);
  const originalTokens = estimateTokenCount(
    `<html><head><title>${pageData.title}</title><meta name="description" content="${pageData.description}"></head><body>${fullMarkdown.repeat(
      2
    )}</body></html>`
  );

  return {
    markdown: fullMarkdown,
    markdownTokens,
    originalTokens,
  };
}
