"use client";

import { ArrowRight, ChevronDown } from "lucide-react";

interface HeroProps {
  onOpenContact: (service?: string) => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative h-[100dvh] min-h-[580px] max-h-[960px] flex flex-col justify-between items-center overflow-hidden bg-[#FAFAFC] dark:bg-[#08080A] text-[#11141C] dark:text-[#F8FAFC] transition-colors duration-500 pt-24 sm:pt-28 pb-3 sm:pb-4"
    >
      {/* Cinematic Ambient Glow - Optimized for both dark & light mode */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Center Orange Radial Glow - exact match to reference image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[320px] sm:h-[400px] bg-[#FF5C28]/15 dark:bg-[#FF5C28]/22 rounded-full blur-[90px] sm:blur-[120px] opacity-90 transition-opacity" />
        
        {/* Subtle Top Ember Warmth */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[#FF8A65]/10 dark:bg-[#FF5C28]/12 rounded-full blur-[100px]" />

        {/* Ambient Corner Accents */}
        <div className="absolute top-1/3 -left-20 w-[350px] h-[350px] bg-[#FF5C28]/5 dark:bg-[#FF5C28]/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 -right-20 w-[350px] h-[350px] bg-[#FF5C28]/5 dark:bg-[#FF5C28]/8 rounded-full blur-[100px]" />
      </div>

      {/* Main Centered Content - Scaled to fit laptop screen gracefully */}
      <div className="relative my-auto flex flex-col items-center text-center px-4 sm:px-6 max-w-5xl w-full z-10">
        {/* Eyebrow Tagline with separators */}
        <div className="mb-3 sm:mb-4">
          <p className="text-[10px] sm:text-xs md:text-[13px] font-medium tracking-wide text-gray-500 dark:text-gray-400/90 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            <span>Pakistan &amp; Nationwide</span>
            <span className="opacity-40">•</span>
            <span>Data-Driven Strategy</span>
            <span className="opacity-40">•</span>
            <span>Full-Service Agency</span>
            <span className="opacity-40">•</span>
            <span>SEO · Ads · Creative · Shopify</span>
          </p>
        </div>

        {/* Headline with aesthetic Light vs Heavy Font-Weight Contrast */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.65rem] tracking-tight leading-[1.06] text-center mb-3 sm:mb-4">
          {/* Light Font-Weight Contrast */}
          <span className="block font-light sm:font-normal text-gray-700 dark:text-[#EAEBED] tracking-[-0.03em]">
            The Agency
          </span>
          {/* Heavy Bold Font-Weight */}
          <span className="block font-extrabold sm:font-black text-gray-900 dark:text-white tracking-[-0.035em] my-0.5 sm:my-1">
            Behind 8-Figure
          </span>
          {/* Signature Vibrant Glowing Orange Line */}
          <span className="block font-black text-[#FF5C28] tracking-[-0.025em] drop-shadow-[0_0_35px_rgba(255,92,40,0.30)] dark:drop-shadow-[0_0_50px_rgba(255,92,40,0.50)]">
            Brand Growth
          </span>
        </h1>

        {/* Subtitle - Clean, readable, aesthetic */}
        <p className="text-xs sm:text-sm md:text-base font-light text-gray-600 dark:text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-7">
          From search rankings to ad screens — we run every channel, build every system, and deliver every result. No juggling. No excuses. Just growth.
        </p>

        {/* Centered Dual Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-5 sm:mb-6">
          <button
            onClick={() => onOpenContact()}
            className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#FF5C28] text-white hover:bg-[#e64a19] shadow-lg shadow-[#FF5C28]/35 hover:shadow-[#FF5C28]/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
          >
            Book a Free Strategy Call
          </button>
          <a
            href="#case-studies"
            className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-gray-100/90 dark:bg-white/5 border border-gray-300/80 dark:border-white/15 text-gray-800 dark:text-gray-200 hover:bg-gray-200/80 dark:hover:bg-white/10 hover:border-gray-400 dark:hover:border-white/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
          >
            See Our Results →
          </a>
        </div>

        {/* Star Rating & Trust Line */}
        <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 font-medium tracking-wide flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          <span className="text-[#FF5C28] tracking-tighter font-bold">★★★★★</span>
          <span className="opacity-40">•</span>
          <span>Lahore, Karachi &amp; Nationwide</span>
          <span className="opacity-40">•</span>
          <span>SEO · Paid Ads · CRM · AI Search · Full-Service Digital Marketing</span>
        </div>
      </div>

      {/* Subtle Bottom Scroll Indicator - Kept clean and compact */}
      <div className="relative z-10 flex justify-center items-center pb-1">
        <a
          href="#trusted-by"
          aria-label="Scroll down to trusted brands"
          className="p-1.5 rounded-full text-gray-400 dark:text-gray-500 hover:text-[#FF5C28] transition-colors animate-bounce"
        >
          <ChevronDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
