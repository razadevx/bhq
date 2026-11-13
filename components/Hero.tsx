"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, Sparkles, TrendingUp, ShieldCheck, Zap } from "lucide-react";

interface HeroProps {
  onOpenContact: (service?: string) => void;
}

const ROTATING_WORDS = ["Brands", "Businesses", "E-Commerce", "Ventures"];

export default function Hero({ onOpenContact }: HeroProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setIsAnimating(false);
      }, 300);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] pt-32 sm:pt-36 pb-16 flex flex-col justify-between overflow-hidden bg-white dark:bg-[#0B0C10] transition-colors duration-300"
    >
      {/* Ambient background meshes - soft pastel in light mode, deep ambient glow in dark mode */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top center orange glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#FF5C28]/15 via-[#FF8A65]/10 to-transparent rounded-full blur-3xl opacity-70 dark:opacity-40" />
        {/* Right side purple tint */}
        <div className="absolute top-1/4 -right-20 w-[550px] h-[550px] bg-purple-500/10 dark:bg-purple-900/15 rounded-full blur-3xl" />
        {/* Left side cyan/green tint */}
        <div className="absolute top-1/3 -left-20 w-[500px] h-[500px] bg-emerald-400/10 dark:bg-emerald-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8">
        {/* Top Eyebrow Pill */}
        <div className="flex items-center justify-start mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50/80 dark:bg-white/5 backdrop-blur-md shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-[#FF5C28] animate-ping" />
            <span className="text-[11px] font-bold tracking-widest uppercase text-gray-700 dark:text-gray-300">
              STRATEGY · CREATIVE · PERFORMANCE
            </span>
          </div>
        </div>

        {/* Massive 7figures-style Headline */}
        <div className="max-w-5xl">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[5.75rem] font-black tracking-tight leading-[0.98] text-gray-900 dark:text-white">
            <span className="block">We Scale</span>
            <span className="block my-1">
              <span
                className={`inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] via-[#EC4899] to-[#8B5CF6] transition-all duration-300 ${
                  isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                }`}
              >
                {ROTATING_WORDS[currentWordIndex]}
              </span>
            </span>
            <span className="flex items-baseline gap-3 flex-wrap">
              <span>to</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-2xl bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/15 text-gray-900 dark:text-white font-black text-4xl sm:text-6xl md:text-7xl">
                <span className="text-[#FF5C28]">7</span>
              </span>
              <span>Figures</span>
              <span className="text-[#FF5C28]">.</span>
            </span>
          </h1>
        </div>

        {/* Subtitle & Dual CTA layout modeled after 7figures.pk */}
        <div className="mt-10 pt-6 border-t border-gray-200/60 dark:border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Subtitle */}
          <div className="lg:col-span-7">
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-normal max-w-2xl">
              <span className="font-semibold text-gray-900 dark:text-white">
                Likes don&apos;t pay salaries. Sales do.
              </span>{" "}
              Brands Headquarter builds the brand, makes the content, runs the ads, and builds the store —{" "}
              <span className="underline decoration-[#FF5C28] decoration-2 underline-offset-4 font-semibold text-gray-900 dark:text-white">
                one team, one plan, one number that matters: growth.
              </span>
            </p>

            {/* Quick badges */}
            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#FF5C28]" />
                <span>200+ Brands Scaled</span>
              </div>
              <span className="hidden sm:inline opacity-30">•</span>
              <div className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-[#FF5C28]" />
                <span>PKR 500M+ Managed Spend</span>
              </div>
              <span className="hidden sm:inline opacity-30">•</span>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#FF5C28]" />
                <span>Teams Across Pakistan</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-start lg:justify-end gap-3.5">
            <button
              onClick={() => onOpenContact()}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold bg-[#11141C] dark:bg-white text-white dark:text-[#11141C] hover:bg-[#FF5C28] dark:hover:bg-[#FF5C28] dark:hover:text-white transition-all duration-300 shadow-lg hover:shadow-[#FF5C28]/25 group"
            >
              <span>Get My Free Growth Plan</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-7 py-4 rounded-full text-sm font-bold border border-gray-300 dark:border-white/15 bg-white/70 dark:bg-white/5 text-gray-800 dark:text-gray-200 hover:border-[#FF5C28] hover:text-[#FF5C28] transition-all"
            >
              View Services
            </a>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Arrow */}
      <div className="flex justify-center items-center pt-2">
        <a
          href="#trusted-by"
          aria-label="Scroll down"
          className="p-2 rounded-full text-gray-400 hover:text-[#FF5C28] transition-colors animate-bounce"
        >
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
