"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight, FileText } from "lucide-react";

interface NavbarProps {
  onOpenContact: (service?: string) => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Client Portal", href: "#portal" },
    { label: "Portfolio", href: "#case-studies" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pointer-events-none px-3 sm:px-6 transition-all duration-500 ease-out">
      {/* Floating Capsule Bar */}
      <div
        className={`pointer-events-auto w-full transition-all duration-500 ease-out ${
          isScrolled
            ? "mt-2.5 sm:mt-3 max-w-5xl rounded-full bg-white/90 backdrop-blur-xl border border-gray-200/90 px-4 sm:px-6 py-2 sm:py-2.5 shadow-xl shadow-black/5 ring-1 ring-black/5"
            : "mt-3.5 sm:mt-5 max-w-7xl rounded-full bg-white/80 backdrop-blur-md border border-gray-200/70 px-5 sm:px-8 py-3 sm:py-3.5 shadow-sm"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Real Brand Logo */}
          <Link href="#hero" className="flex items-center group shrink-0">
            <Image
              src="/images/brands-headquarter-logo-dark.png"
              alt="Brands Headquarter"
              width={160}
              height={72}
              priority
              className="h-7 sm:h-8 md:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav - Clean Centered Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-gray-100/70 px-3.5 py-1.5 rounded-full border border-gray-200/80 backdrop-blur-xs">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1 text-xs font-semibold text-gray-700 hover:text-[#FF5C28] hover:bg-white rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons: Free Audit & Let's Talk */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            {/* Free Audit Button */}
            <button
              onClick={() => onOpenContact("Free Brand Audit")}
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold border border-gray-300/90 bg-white hover:border-[#FF5C28] hover:text-[#FF5C28] text-gray-800 transition-all duration-300 shadow-xs hover:shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-[#FF5C28]" />
              <span>Free Audit</span>
            </button>

            {/* Let's Talk Button */}
            <button
              onClick={() => onOpenContact("General Inquiry")}
              className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs font-bold bg-[#11141C] text-white hover:bg-[#FF5C28] transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[#FF5C28]/25"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenContact("Free Brand Audit")}
              className="px-3 py-1.5 rounded-full text-[11px] font-bold border border-gray-200 bg-white text-gray-800"
            >
              Free Audit
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-gray-700 rounded-full hover:bg-gray-100"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown Capsule */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto mt-2 w-full max-w-5xl rounded-3xl bg-white/95 backdrop-blur-2xl border border-gray-200 px-6 py-6 transition-all shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-semibold text-gray-800 hover:text-[#FF5C28] border-b border-gray-100"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact("Free Brand Audit");
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-sm font-bold border border-gray-300 bg-white text-gray-800 shadow-xs"
              >
                <FileText className="w-4 h-4 text-[#FF5C28]" />
                <span>Get Free Brand Audit</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact("General Inquiry");
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-sm font-bold bg-[#FF5C28] text-white shadow-lg shadow-[#FF5C28]/25"
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
