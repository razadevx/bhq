"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesSection from "@/components/ServicesSection";
import ClientPortalSection from "@/components/ClientPortalSection";
import PartnersSection from "@/components/PartnersSection";
import FlagshipPartnersSection from "@/components/FlagshipPartnersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TeamSection from "@/components/TeamSection";
import WallOfFameSection from "@/components/WallOfFameSection";
import CEOSpotlightSection from "@/components/CEOSpotlightSection";
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
      {/* Sticky Capsule Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Hero Section (Preserved Exactly As Requested) */}
      <Hero onOpenContact={handleOpenContact} />

      {/* Page 1: About Us ("Ready to Grow?" + 5 Values + Dark Stats Banner) */}
      <AboutSection onOpenContact={() => handleOpenContact("General Strategy")} />

      {/* Page 2: Why Choose Brands Headquarter (6 Bento Grid Cards) */}
      <WhyChooseUs />

      {/* Page 2: Services That Drive Results (Watermark Cards & Controls) */}
      <ServicesSection onOpenContact={handleOpenContact} />

      {/* Page 3: Client Portal ("Your Work. Your Control." - App Mockup) */}
      <ClientPortalSection onOpenContact={() => handleOpenContact("Client Portal Demo")} />

      {/* Page 3 & 4: Certified Partners (Google Premier 2026 & Shopify Select) */}
      <PartnersSection onOpenContact={() => handleOpenContact("Platform Partnership")} />

      {/* Page 4 & 5: Our Flagship Partners (18 Brand Logo Cards) */}
      <FlagshipPartnersSection />

      {/* Page 5: Real Results, Real Growth (3 Stat Boxes & Reviews) */}
      <TestimonialsSection />

      {/* Page 5 & 6: The Minds Behind the Magic (Founders & Team Heads) */}
      <TeamSection />

      {/* Page 6 & 7: Wall of Fame (5 Recognition Cards) */}
      <WallOfFameSection />

      {/* Page 7: Leadership with Purpose (CEO Spotlight - High-Contrast Dark Section) */}
      <CEOSpotlightSection />

      {/* Page 7 & 8: Let's Build Something Great (Contact Info + Intake Form) */}
      <ContactSection preselectedService={selectedService} />

      {/* Page 8: Ready to Make It Happen? (High-Contrast Dark CTA Banner) */}
      <CTASection onOpenContact={() => handleOpenContact("Scale Strategy Session")} />

      {/* Page 8: Obsidian Dark Footer */}
      <Footer />

      {/* Quick Interactive Modal */}
      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedService={selectedService}
      />
    </main>
  );
}
