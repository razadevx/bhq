"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight, Sun, Moon, FileText } from "lucide-react";

interface NavbarProps {
  onOpenContact: (service?: string) => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Default to dark theme as reference image
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Why BHQ", href: "#why-bhq" },
    { label: "Process", href: "#process" },
    { label: "Client Portal", href: "#portal" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pointer-events-none px-3 sm:px-6 transition-all duration-500 ease-out">
      {/* Floating Capsule Bar */}
      <div
        className={`pointer-events-auto w-full transition-all duration-500 ease-out ${
          isScrolled
            ? "mt-2.5 sm:mt-3 max-w-5xl rounded-full bg-black/85 dark:bg-[#070709]/90 backdrop-blur-xl border border-white/15 px-4 sm:px-6 py-2 sm:py-2.5 shadow-2xl shadow-black/60 ring-1 ring-white/10"
            : "mt-3.5 sm:mt-4 max-w-7xl rounded-full bg-black/60 dark:bg-black/60 backdrop-blur-md border border-white/10 px-5 sm:px-8 py-2.5 sm:py-3 shadow-md"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Logo with signature orange dot */}
          <Link href="#hero" className="flex items-center group shrink-0">
            <Image
              src="/images/brands-headquarter-logo.png"
              alt="Brands Headquarter"
              width={160}
              height={72}
              priority
              className="h-7 sm:h-8 md:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav - Clean Centered Pill Links */}
          <nav className="hidden lg:flex items-center gap-0.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-xs">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1 text-xs font-semibold text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action buttons matching reference image */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            {/* Free Audit Button */}
            <button
              onClick={() => onOpenContact("Free Brand Audit")}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-white/5 hover:bg-white/10 text-gray-200 hover:text-white border border-white/15 transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-[#FF5C28]" />
              <span>Free Audit</span>
            </button>

            {/* Book a Call glowing orange button */}
            <button
              onClick={() => onOpenContact("Strategy Call")}
              className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold bg-[#FF5C28] hover:bg-[#e64a19] text-white transition-all duration-300 shadow-md shadow-[#FF5C28]/35 hover:shadow-lg hover:shadow-[#FF5C28]/50"
            >
              <span>Book a Call</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:text-[#FF5C28] hover:border-[#FF5C28]/40 transition-all ml-1"
            >
              {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-gray-300" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenContact("Strategy Call")}
              className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#FF5C28] text-white"
            >
              Book Call
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-gray-200 rounded-full hover:bg-white/10"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown Capsule */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto mt-2 w-full max-w-5xl rounded-3xl bg-[#0B0C10]/95 backdrop-blur-2xl border border-white/15 px-6 py-6 transition-all shadow-2xl text-white animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-semibold text-gray-200 hover:text-[#FF5C28] border-b border-white/10"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact("Strategy Call");
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-sm font-bold bg-[#FF5C28] text-white shadow-lg shadow-[#FF5C28]/30"
              >
                <span>Book a Free Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
