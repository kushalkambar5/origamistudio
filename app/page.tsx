import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import PortfolioCarousel from "./components/PortfolioCarousel";
import ProductsSection from "./components/ProductsSection";
import TeamSection from "./components/TeamSection";
import FaqSection from "./components/FaqSection";
import GetInTouchSection from "./components/GetInTouchSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 relative">
      {/* Top-Middle Transparent Navbar */}
      <Navbar />

      {/* 1. Home Section */}
      <HeroSection />

      {/* 2. What We Do Section */}
      <ServicesSection />

      {/* 3. About Section */}
      <AboutSection />

      {/* 4. Our Work Section ("Behind the Designs" 3D Arc Gallery) */}
      <PortfolioCarousel />

      {/* 5. Products Section */}
      <ProductsSection />

      {/* 6. Team Section */}
      <TeamSection />

      {/* 7. FAQs Section */}
      <FaqSection />

      {/* 8. Get In Touch Section (Interactive Scope Estimator) */}
      <GetInTouchSection />

      {/* 9. Contact Us Section */}
      <ContactSection />

      {/* 10. Footer Section */}
      <Footer />
    </main>
  );
}
