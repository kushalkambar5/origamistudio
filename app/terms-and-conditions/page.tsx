import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import Footer from "../components/Footer";

export const metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions governing the use of Origami Studio's digital marketing, web development, SEO, and AI services.",
  alternates: {
    canonical: "https://www.origamistudio.in/terms-and-conditions",
  },
  openGraph: {
    title: "Terms & Conditions | Origami Studio",
    description: "Terms and Conditions governing the use of Origami Studio's digital marketing, web development, SEO, and AI services.",
    url: "https://www.origamistudio.in/terms-and-conditions",
    siteName: "Origami Studio",
    images: [{ url: "/logo.png", width: 800, height: 800, alt: "Origami Studio Terms & Conditions" }],
  },
};

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans">
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

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 min-h-[38px] rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 active:scale-95 transition-all"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" />
            <span className="hidden xs:inline sm:inline">Back to Home</span>
            <span className="xs:hidden sm:hidden">Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="grow max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-16 w-full">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-md p-4 sm:p-10 lg:p-12 space-y-6 sm:space-y-8">
          
          {/* Header Title */}
          <div className="border-b border-slate-200 pb-6 sm:pb-8">
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#ff5e00]/10 border border-[#ff5e00]/20 text-[#ff5e00] text-xs font-semibold mb-3 sm:mb-4">
              <FileText className="w-3.5 h-3.5" />
              <span>LEGAL AGREEMENT</span>
            </div>
            <h1 className="font-changa text-2xl sm:text-5xl font-extrabold uppercase tracking-tight text-slate-950">
              TERMS & <span className="text-[#ff5e00]">CONDITIONS</span>
            </h1>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-500 font-mono">
              LAST UPDATED: AUGUST 14, 2026
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
            
            <section className="space-y-3">
              <h2 className="font-changa text-xl font-bold uppercase text-slate-900 tracking-wide">
                1. Acceptance of Terms
              </h2>
              <p>
                Welcome to <strong>Origami Studio</strong> (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). By accessing our website (<a href="https://www.origamistudio.in" className="text-[#ff5e00] hover:underline font-medium">origamistudio.in</a>), engaging our digital marketing, web development, SEO, video production, or AI agent services, you agree to be bound by these Terms and Conditions (&quot;Terms&quot;).
              </p>
              <p>
                If you do not agree with any part of these Terms, you must not use our website or services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-changa text-xl font-bold uppercase text-slate-900 tracking-wide">
                2. Scope of Services
              </h2>
              <p>
                Origami Studio provides full-service digital marketing and tech solutions, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-600">
                <li>Social Media Marketing & Brand Management</li>
                <li>Fullstack Web Design, Development, and Search Engine Optimization (SEO)</li>
                <li>Google Business Profile (GBP) Ranking & Local Marketing</li>
                <li>Video Production, Offline Shoots, and Editing</li>
                <li>Custom AI Agents & WhatsApp Marketing Automation</li>
              </ul>
              <p>
                Detailed project scopes, deliverables, timelines, and payment structures are defined in individual service agreements, client proposals, or statements of work (SOW).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-changa text-xl font-bold uppercase text-slate-900 tracking-wide">
                3. Client Responsibilities
              </h2>
              <p>
                To ensure timely and effective project execution, clients agree to:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-600">
                <li>Provide accurate brand assets, content, credentials, and feedback in a timely manner.</li>
                <li>Ensure all materials provided to Origami Studio do not infringe upon any third-party intellectual property or privacy rights.</li>
                <li>Designate a point of contact responsible for communication and approvals.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-changa text-xl font-bold uppercase text-slate-900 tracking-wide">
                4. Payment Terms & Billing
              </h2>
              <p>
                Invoices are issued according to the payment schedule specified in your project agreement. Payments must be made via authorized payment methods within the stipulated due dates. Late payments may result in suspension of ongoing campaign operations, web maintenance, or ad management.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-changa text-xl font-bold uppercase text-slate-900 tracking-wide">
                5. Intellectual Property Rights
              </h2>
              <p>
                Upon full payment of all fees, the client acquires ownership of final approved design deliverables, website code, and promotional media created specifically for their project, excluding pre-existing proprietary tools, frameworks, and third-party stock assets licensed by Origami Studio.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-changa text-xl font-bold uppercase text-slate-900 tracking-wide">
                6. Confidentiality
              </h2>
              <p>
                Both parties agree to protect and keep confidential any sensitive business information, passwords, financial details, or strategies disclosed during the engagement.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-changa text-xl font-bold uppercase text-slate-900 tracking-wide">
                7. Limitation of Liability
              </h2>
              <p>
                Origami Studio shall not be liable for any indirect, incidental, consequential, or special damages arising out of or related to the use of our services, including third-party platform algorithm updates, advertising policy changes, or domain/hosting downtime beyond our reasonable control.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-changa text-xl font-bold uppercase text-slate-900 tracking-wide">
                8. Contact Us
              </h2>
              <p>
                If you have any questions regarding these Terms & Conditions, please contact us at:
              </p>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-sm space-y-1 font-mono">
                <p><strong>Email:</strong> <a href="mailto:hello@origamistudio.in" className="text-[#ff5e00] hover:underline">hello@origamistudio.in</a></p>
                <p><strong>Phone:</strong> +91 8919300467</p>
                <p><strong>Location:</strong> NITK Surathkal, Mangalore, Karnataka 575025</p>
              </div>
            </section>

          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
