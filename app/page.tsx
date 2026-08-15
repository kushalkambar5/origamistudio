import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioCarousel from "./components/PortfolioCarousel";
import ProductsSection from "./components/ProductsSection";
import TeamSection from "./components/TeamSection";
import FaqSection from "./components/FaqSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000000] text-slate-900 relative w-full max-w-full overflow-x-hidden">
      {/* Top-Middle Transparent Navbar */}
      <Navbar />

      {/* 1. Home Section (Pinned Sticky Hero) */}
      <div className="sticky top-0 h-[100dvh] w-full max-w-full z-0 overflow-hidden">
        <HeroSection />
      </div>

      {/* Main Content Overlaying Sticky Hero on Scroll */}
      <div className="relative z-10 bg-slate-50 shadow-[0_-25px_60px_rgba(0,0,0,0.25)] rounded-t-3xl sm:rounded-t-[2.5rem] w-full max-w-full overflow-x-hidden">
        {/* 2. What We Do Section */}
        <ServicesSection />

        {/* 4. Our Work Section ("Behind the Designs" 3D Arc Gallery) */}
        <PortfolioCarousel />

        {/* 5. Products Section */}
        <ProductsSection />

        {/* 6. Team Section */}
        <TeamSection />

        {/* 7. FAQs Section */}
        <FaqSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* 8. Contact Us Section */}
        <ContactSection />


        {/* 10. Footer Section */}
        <Footer />
      </div>
    </main>
  );
}
