import type { Metadata } from "next";
import { Changa_One, Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const changaOne = Changa_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-changa-one",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
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
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
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
      className={`${changaOne.variable} ${plusJakartaSans.variable} ${geistMono.variable} scroll-smooth light h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-[#F8FAFC] text-slate-900 font-sans overflow-x-hidden selection:bg-[#FC6100] selection:text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}

