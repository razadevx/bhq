"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesSection from "@/components/ServicesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ClientPortalSection from "@/components/ClientPortalSection";
import ProcessSection from "@/components/ProcessSection";
import PartnersSection from "@/components/PartnersSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>();

  const handleOpenContact = (service?: string) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-[#0B0C10] text-[#11141C] dark:text-[#F8FAFC] selection:bg-[#FF5C28] selection:text-white transition-colors duration-300">
      {/* Sticky Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Hero Section */}
      <Hero onOpenContact={handleOpenContact} />

      {/* 200+ Brand Logo Marquee */}
      <Marquee />

      {/* About & Core Values */}
      <AboutSection onOpenContact={() => handleOpenContact("General Strategy")} />

      {/* The BHQ Difference / Why Choose Us */}
      <WhyChooseUs />

      {/* CRAFT / Services Section */}
      <ServicesSection onOpenContact={handleOpenContact} />

      {/* Real Case Studies */}
      <CaseStudiesSection onOpenContact={handleOpenContact} />

      {/* Proprietary Client Portal & Tech */}
      <ClientPortalSection />

      {/* 5-Step Process */}
      <ProcessSection />

      {/* Official Certified Partners */}
      <PartnersSection />

      {/* Leadership & Growth Squad */}
      <TeamSection />

      {/* Verified Client Testimonials */}
      <TestimonialsSection />

      {/* Interactive FAQ with Schema */}
      <FAQSection />

      {/* High-Impact CTA Banner */}
      <CTASection onOpenContact={() => handleOpenContact("Scale Strategy Session")} />

      {/* Full Contact Form & Office Details */}
      <ContactSection preselectedService={selectedService} />

      {/* Multi-column Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp />

      {/* Lead Capture Modal */}
      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedService={selectedService}
      />
    </main>
  );
}
