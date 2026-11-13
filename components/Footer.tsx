"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#0c0c12] text-gray-400 border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Mission */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="#hero" className="inline-flex items-center group">
              <Image
                src="/images/brands-headquarter-logo.png"
                alt="Brands Headquarter"
                width={180}
                height={82}
                className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Full-service marketing agency helping businesses scale through innovative digital strategies since 2016.
            </p>
          </div>

          {/* Column 2: Navigate */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              NAVIGATE
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-white transition-colors">
                  Partners
                </a>
              </li>
              <li>
                <a href="#clients" className="hover:text-white transition-colors">
                  Clients
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              SERVICES
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Branding
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Video Editing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Consultation
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials (Matching Page 8) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {currentYear} Brands Headquarter. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/brandsheadquarter"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/brandsheadquarter"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/brands-headquarter"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/923111173477"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
