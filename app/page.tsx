"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FlagshipPartnersSection from "@/components/FlagshipPartnersSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessSection from "@/components/ProcessSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import IndustriesSection from "@/components/IndustriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ClientPortalSection from "@/components/ClientPortalSection";
import PartnersSection from "@/components/PartnersSection";
import WallOfFameSection from "@/components/WallOfFameSection";
import CEOSpotlightSection from "@/components/CEOSpotlightSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>();

  const handleOpenContact = (service?: string) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-white text-[#11141C] selection:bg-[#FF5C28] selection:text-white">
      {/* Aesthetic Brand Preloader with Logo Shimmer Animation */}
      <Preloader />

      {/* High-Performance Smooth Inertial Scroll Engine (Lenis) */}
      <SmoothScroll />

      {/* 1. Floating Capsule Round Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* 2. Hero Section (High-Performance GPU Animated Paper Background + Uniform 3-Line H1) */}
      <Hero onOpenContact={handleOpenContact} />

      {/* 3. Trusted By (Pakistan's Fastest-Growing Brands Already Trust Us) */}
      <FlagshipPartnersSection />

      {/* 4. About Us (Not Another Marketing Agency. Your Growth Team.) */}
      <AboutSection onOpenContact={() => handleOpenContact("General Strategy")} />

      {/* 5. Services (Digital Marketing Services That Pay for Themselves) */}
      <ServicesSection onOpenContact={handleOpenContact} />

      {/* 6. Why Brands Headquarter (We Don't Run Campaigns. We Build Growth Systems.) */}
      <WhyChooseUs />

      {/* 7. Our Process (From First Call to Full Scale in 5 Steps) */}
      <ProcessSection />

      {/* 8. Case Studies (Real Brands. Real Numbers. Real Growth.) */}
      <CaseStudiesSection onOpenContact={handleOpenContact} />

      {/* 9. Industries (Marketing That Speaks Your Industry's Language) */}
      <IndustriesSection onOpenContact={handleOpenContact} />

      {/* 10. Testimonials (Don't Take Our Word for It) */}
      <TestimonialsSection />

      {/* 11. Client Portal ("Your Work. Your Control." - Interactive App Mockup) */}
      <ClientPortalSection onOpenContact={() => handleOpenContact("Client Portal Demo")} />

      {/* 12. Certified Partners (Google Premier 2026 & Shopify Select Partner) */}
      <PartnersSection onOpenContact={handleOpenContact} />

      {/* 13. Wall of Fame (Awards & Industry Recognition) */}
      <WallOfFameSection />

      {/* 14. CEO Spotlight (Leadership with Purpose - High-Contrast Dark Section) */}
      <CEOSpotlightSection />

      {/* 15. FAQ (Frequently Asked Questions + FAQPage Schema) */}
      <FAQSection />

      {/* 16. Contact Intake & Booking Form */}
      <ContactSection preselectedService={selectedService} />

      {/* 17. Final CTA (Ready to Stop Guessing and Start Growing?) */}
      <CTASection onOpenContact={() => handleOpenContact("Growth Strategy Session")} />

      {/* 18. Footer (Offices in Lahore, Karachi, Islamabad + Full Taglines) */}
      <Footer />

      {/* Interactive Contact & Audit Modal */}
      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedService={selectedService}
      />
    </main>
  );
}
