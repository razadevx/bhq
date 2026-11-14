"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, MessageCircle, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#0c0c12] text-gray-400 border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Bio (Exact from PDF Page 8) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="#hero" className="inline-flex items-center group">
              <Image
                src="/images/brands-headquarter-logo.png"
                alt="Brands Headquarter"
                width={180}
                height={82}
                className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            <p className="text-xs sm:text-sm font-semibold text-white/90">
              We Build Brands. We Engineer Growth.
            </p>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              A full-service digital marketing agency helping ambitious brands across Pakistan grow through performance marketing, creative production, branding and technology.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-[#FF5C28] hover:text-white hover:border-[#FF5C28] flex items-center justify-center transition-colors text-gray-400"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-[#FF5C28] hover:text-white hover:border-[#FF5C28] flex items-center justify-center transition-colors text-gray-400"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-[#FF5C28] hover:text-white hover:border-[#FF5C28] flex items-center justify-center transition-colors text-gray-400"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://wa.me/923111173477"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] flex items-center justify-center transition-colors text-gray-400"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Exact from PDF Page 8) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs font-medium">
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
                <a href="#case-studies" className="hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#why-bhq" className="hover:text-white transition-colors">
                  Why BHQ
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  How We Work
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (Exact from PDF Page 8) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              SERVICES
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Performance Marketing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Branding &amp; Strategy
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Creative Production &amp; UGC
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Shopify &amp; Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Social Media Marketing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  SEO &amp; Organic Growth
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Our Offices (Lahore, Karachi, Islamabad - Exact from PDF Page 8) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              OUR OFFICES
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="space-y-0.5">
                <span className="font-semibold text-gray-200 block">Lahore (Main HQ)</span>
                <span className="text-gray-400">M.M. Alam Road, Gulberg III, Lahore</span>
              </li>
              <li className="space-y-0.5">
                <span className="font-semibold text-gray-200 block">Karachi Branch</span>
                <span className="text-gray-400">DHA Phase 6, Karachi</span>
              </li>
              <li className="space-y-0.5">
                <span className="font-semibold text-gray-200 block">Islamabad Branch</span>
                <span className="text-gray-400">Blue Area, Islamabad (Coming Soon)</span>
              </li>
            </ul>

            <div className="pt-2 text-xs space-y-1 text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FF5C28]" />
                <a href="mailto:hello@brandsheadquarter.com" className="hover:text-white">
                  hello@brandsheadquarter.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#FF5C28]" />
                <a href="tel:+923111173477" className="hover:text-white">
                  +92 311 1173477
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {currentYear} Brands Headquarter. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#terms" className="hover:text-gray-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-gray-400 transition-colors">
              Terms of Service
            </a>
            <a href="#sitemap" className="hover:text-gray-400 transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
