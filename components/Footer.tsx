"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#0B0C10] text-gray-400 border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#FF5C28]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="#hero" className="inline-flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#FF5C28] to-[#FF8A65] p-0.5 flex items-center justify-center shadow-md">
                <span className="text-white font-extrabold text-lg">B.</span>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1">
                  brands
                  <span className="w-2 h-2 rounded-full bg-[#FF5C28]" />
                </span>
                <span className="text-[10px] uppercase tracking-widest font-bold -mt-1 text-gray-400">
                  Headquarter
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              <strong className="text-white">Brands Headquarter</strong> — We Build Brands. We Engineer Growth. A full-service digital marketing agency helping ambitious brands across Pakistan grow through performance marketing, creative production, branding, and modern technology.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/brandsheadquarter"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#FF5C28] hover:bg-[#FF5C28] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/brandsheadquarter"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#FF5C28] hover:bg-[#FF5C28] transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/brands-headquarter"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#FF5C28] hover:bg-[#FF5C28] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/923111173477"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-emerald-500 hover:bg-emerald-600 transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Performance Marketing (Meta & Google Ads)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Branding & Visual Identity
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Creative Production & UGC Videos
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Shopify & Next.js Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Social Media Marketing & Management
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  SEO Services & Local Search Pakistan
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors">
                  Case Studies & Work
                </a>
              </li>
              <li>
                <a href="#why-bhq" className="hover:text-white transition-colors">
                  Why Brands Headquarter
                </a>
              </li>
              <li>
                <a href="#portal" className="hover:text-white transition-colors">
                  Client Portal
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Our Offices across Pakistan */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Offices Across Pakistan
            </h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <div>
                <p className="font-bold text-gray-200">Lahore (Main HQ)</p>
                <p className="text-gray-500">M.M. Alam Road, Gulberg III, Lahore, Pakistan</p>
              </div>
              <div>
                <p className="font-bold text-gray-200">Karachi Branch</p>
                <p className="text-gray-500">DHA Phase 6, Karachi, Pakistan</p>
              </div>
              <div>
                <p className="font-bold text-gray-200">Islamabad Branch</p>
                <p className="text-gray-500">Blue Area, Sector F-6, Islamabad, Pakistan</p>
              </div>
            </div>

            <div className="pt-2 text-xs">
              <span className="block font-bold text-gray-200">Direct Inquiries:</span>
              <a
                href="mailto:contact@brandsheadquarter.com"
                className="text-[#FF5C28] hover:underline"
              >
                contact@brandsheadquarter.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {currentYear} Brands Headquarter. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span>Built with Next.js & Tailwind</span>
            <span>·</span>
            <span>Vercel Verified Production</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
