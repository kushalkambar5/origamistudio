import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import Footer from "../components/Footer";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy governing how Origami Studio collects, uses, and safeguards user and client information.",
  alternates: {
    canonical: "https://www.origamistudio.in/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Origami Studio",
    description: "Privacy Policy governing how Origami Studio collects, uses, and safeguards user and client information.",
    url: "https://www.origamistudio.in/privacy-policy",
    siteName: "Origami Studio",
    images: [{ url: "/logo.png", width: 800, height: 800, alt: "Origami Studio Privacy Policy" }],
  },
};

export default function PrivacyPolicy() {
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
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>DATA PROTECTION</span>
            </div>
            <h1 className="font-changa text-2xl sm:text-5xl font-extrabold uppercase tracking-tight text-slate-950">
              PRIVACY <span className="text-[#ff5e00]">POLICY</span>
            </h1>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-500 font-mono">
              LAST UPDATED: AUGUST 14, 2026
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
            
            <section className="space-y-3">
              <h2 className="font-changa text-xl font-bold uppercase text-slate-900 tracking-wide">
                1. Overview & Commitment
              </h2>
              <p>
                At <strong>Origami Studio</strong> (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, store, and safeguard your data when you visit <a href="https://www.origamistudio.in" className="text-[#ff5e00] hover:underline font-medium">origamistudio.in</a> or interact with our services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-changa text-xl font-bold uppercase text-slate-900 tracking-wide">
                2. Information We Collect
              </h2>
              <p>
                We may collect personal and technical information when you interact with our website or contact form:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-600">
                <li><strong>Contact Information:</strong> Your name, work email address, phone number, and company name when submitted via our inquiry form.</li>
                <li><strong>Project Details:</strong> Information regarding your business goals, target audience, and requested services.</li>
                <li><strong>Usage & Technical Data:</strong> IP address, browser type, device information, and site interaction analytics collected automatically to improve user experience.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-changa text-xl font-bold uppercase text-slate-900 tracking-wide">
                3. How We Use Your Information
              </h2>
              <p>
                We use collected information solely for legitimate business purposes:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-600">
                <li>To respond to inquiries and provide custom project quotes.</li>
                <li>To deliver and manage digital marketing, SEO, web development, and AI services.</li>
                <li>To send project updates, invoices, and service-related communications.</li>
                <li>To analyze website performance and enhance system security.</li>
              </ul>
              <p>
                <strong>We do not sell, rent, or trade your personal information to third parties.</strong>
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-changa text-xl font-bold uppercase text-slate-900 tracking-wide">
                4. Data Security & Retention
              </h2>
              <p>
                We implement industry-standard technical and organizational security measures to protect your data against unauthorized access, loss, or misuse. We retain your contact and project information only as long as necessary to fulfill project requirements and legal obligations.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-changa text-xl font-bold uppercase text-slate-900 tracking-wide">
                5. Third-Party Tools & Analytics
              </h2>
              <p>
                Our site may utilize trusted third-party analytics and communication integrations (such as Google Analytics or Meta Pixel) to measure site traffic and optimize conversion campaigns. These tools process non-identifiable usage statistics according to their respective privacy policies.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-changa text-xl font-bold uppercase text-slate-900 tracking-wide">
                6. Your Data Rights
              </h2>
              <p>
                You have the right to request access to, correction of, or deletion of your personal data stored by Origami Studio. To exercise these rights or request data removal, please contact us at <a href="mailto:hello@origamistudio.in" className="text-[#ff5e00] hover:underline font-medium">hello@origamistudio.in</a>.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-changa text-xl font-bold uppercase text-slate-900 tracking-wide">
                7. Contact Information
              </h2>
              <p>
                For any privacy-related questions or data requests, please reach out to:
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
