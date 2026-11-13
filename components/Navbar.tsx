"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight, Sun, Moon } from "lucide-react";

interface NavbarProps {
  onOpenContact: (service?: string) => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Check system or saved preference
    const savedTheme = localStorage.getItem("theme");
    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
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
            ? "mt-2.5 sm:mt-3 max-w-5xl rounded-full bg-white/85 dark:bg-[#0B0C10]/85 backdrop-blur-xl border border-gray-200/90 dark:border-white/15 px-4 sm:px-6 py-2 sm:py-2.5 shadow-xl shadow-black/5 dark:shadow-black/40 ring-1 ring-black/5 dark:ring-white/10"
            : "mt-3.5 sm:mt-5 max-w-7xl rounded-full bg-white/70 dark:bg-[#11141C]/70 backdrop-blur-md border border-gray-200/60 dark:border-white/10 px-5 sm:px-8 py-3 sm:py-3.5 shadow-sm"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Real Logo from public/images/brands-headquarter-logo */}
          <Link href="#hero" className="flex items-center group shrink-0">
            {/* Light mode: dark charcoal text + orange dot */}
            <Image
              src="/images/brands-headquarter-logo-dark.png"
              alt="Brands Headquarter"
              width={160}
              height={72}
              priority
              className="h-7 sm:h-8 md:h-9 w-auto object-contain dark:hidden transition-transform duration-300 group-hover:scale-105"
            />
            {/* Dark mode: white text + orange dot */}
            <Image
              src="/images/brands-headquarter-logo.png"
              alt="Brands Headquarter"
              width={160}
              height={72}
              priority
              className="h-7 sm:h-8 md:h-9 w-auto object-contain hidden dark:block transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav - Clean Centered Pill Links */}
          <nav className="hidden lg:flex items-center gap-0.5 bg-gray-100/60 dark:bg-white/5 px-3 py-1.5 rounded-full border border-gray-200/70 dark:border-white/10 backdrop-blur-xs">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-[#FF5C28] dark:hover:text-[#FF5C28] hover:bg-white dark:hover:bg-white/10 rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-full border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:text-[#FF5C28] hover:border-[#FF5C28]/40 transition-all"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-gray-700" />}
            </button>

            {/* Let's Talk CTA button */}
            <button
              onClick={() => onOpenContact()}
              className="group relative inline-flex items-center gap-2 px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold bg-[#11141C] dark:bg-white text-white dark:text-[#11141C] hover:bg-[#FF5C28] dark:hover:bg-[#FF5C28] dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[#FF5C28]/25"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-1.5 rounded-full border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 text-gray-700 dark:text-gray-300"
            >
              {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-gray-700" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-white/10"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown Capsule */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto mt-2 w-full max-w-5xl rounded-3xl bg-white/95 dark:bg-[#0B0C10]/95 backdrop-blur-2xl border border-gray-200 dark:border-white/10 px-6 py-6 transition-all shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-[#FF5C28] dark:hover:text-[#FF5C28] border-b border-gray-100 dark:border-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-sm font-bold bg-[#FF5C28] text-white shadow-lg shadow-[#FF5C28]/25"
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
