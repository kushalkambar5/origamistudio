import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

const nohemi = localFont({
  src: [
    {
      path: "../public/fonts/Nohemi-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Nohemi-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Nohemi-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-nohemi",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://origamistudio.in"),
  title: {
    default: "Origami Studio | Digital Marketing & Tech Services Agency",
    template: "%s | Origami Studio",
  },
  description:
    "Origami Studio is a premier digital marketing & tech agency. We combine strategy, creativity, fullstack web development, SEO, Google Business Profile ranking, video production, AI Agents, and WhatsApp automation to scale brands.",
  keywords: [
    "Digital Marketing Agency",
    "Social Media Marketing",
    "Fullstack Web Development",
    "SEO Services",
    "Google Business Profile Ranking",
    "Local SEO",
    "Offline Shoots",
    "Video Editing",
    "AI Agents",
    "WhatsApp Marketing Automation",
    "Origami Studio",
    "origamistudio.in",
  ],
  authors: [{ name: "Origami Studio Team", url: "https://origamistudio.in" }],
  creator: "Origami Studio",
  publisher: "Origami Studio",
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "Origami Studio",
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Origami Studio | Folding Ideas. Creating Impact.",
    description:
      "A digital marketing studio that helps brands stand out, scale up and stay ahead. Strategy • Creativity • Technology • Results.",
    url: "https://origamistudio.in",
    siteName: "Origami Studio",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Origami Studio Brand Identity",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Origami Studio | Digital Marketing & Tech Services Agency",
    description:
      "Folding ideas. Creating impact. Full-service digital marketing, web apps, SEO, AI agents & video production.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Origami Studio",
  image: "https://origamistudio.in/logo.png",
  "@id": "https://origamistudio.in",
  url: "https://origamistudio.in",
  telephone: "+919876543210",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.9716,
    longitude: 77.5946,
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${nohemi.variable} ${inter.variable} scroll-smooth light h-full antialiased overflow-x-hidden w-full max-w-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-[#000000] text-slate-900 font-sans overflow-x-hidden w-full max-w-full selection:bg-[#ff5e00] selection:text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}

