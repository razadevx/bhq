"use client";

import { ChevronDown } from "lucide-react";

interface HeroProps {
  onOpenContact: (service?: string) => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative h-[100dvh] min-h-[580px] max-h-[960px] flex flex-col justify-between items-center overflow-hidden bg-[#FAFAFC] text-[#11141C] pt-24 sm:pt-28 pb-3 sm:pb-4"
    >
      {/* Aesthetic Moving Light Gradient Background Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Slow Morphing Ambient Conic Mesh */}
        <div className="absolute -top-[30%] -left-[20%] w-[140%] h-[160%] opacity-35 animate-hero-conic blur-[130px] bg-[conic-gradient(from_0deg_at_50%_50%,#FFF0EB_0deg,#FFE5D9_90deg,#FDE2E4_180deg,#EBF0FF_270deg,#FFF0EB_360deg)]" />

        {/* Moving Fluid Blob 1 - Warm Brand Orange / Coral (Top-Left / Center Drift) */}
        <div className="absolute top-[12%] left-[18%] w-[550px] sm:w-[700px] h-[340px] sm:h-[420px] bg-gradient-to-tr from-[#FF5C28]/22 via-[#FFA07A]/18 to-[#FFD166]/15 rounded-full blur-[100px] sm:blur-[130px] animate-hero-blob-1" />

        {/* Moving Fluid Blob 2 - Soft Rose / Sunset Pink (Top-Right / Mid Drift) */}
        <div className="absolute top-[16%] right-[12%] w-[480px] sm:w-[620px] h-[350px] sm:h-[440px] bg-gradient-to-bl from-[#EC4899]/16 via-[#F472B6]/14 to-[#FF8A65]/18 rounded-full blur-[110px] sm:blur-[140px] animate-hero-blob-2" />

        {/* Moving Fluid Blob 3 - Soft Lavender / Gentle Indigo / Cyan Breeze (Bottom-Left Drift) */}
        <div className="absolute bottom-[8%] left-[10%] w-[460px] sm:w-[580px] h-[330px] sm:h-[400px] bg-gradient-to-br from-[#8B5CF6]/14 via-[#C084FC]/10 to-[#38BDF8]/10 rounded-full blur-[100px] sm:blur-[130px] animate-hero-blob-3" />

        {/* Pulsing Core Warmth - Anchored directly behind headline & Brand Growth */}
        <div className="absolute top-1/2 left-1/2 w-[400px] sm:w-[560px] h-[250px] sm:h-[320px] bg-gradient-to-r from-[#FF5C28]/20 via-[#FF8A65]/18 to-[#FFA07A]/22 rounded-full blur-[85px] sm:blur-[110px] animate-hero-blob-4" />

        {/* Soft bottom vignette to blend seamlessly into the rest of the page */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#FAFAFC] to-transparent pointer-events-none" />
      </div>

      {/* Main Centered Content - Scaled to fit laptop screen gracefully */}
      <div className="relative my-auto flex flex-col items-center text-center px-4 sm:px-6 max-w-5xl w-full z-10">
        {/* Eyebrow Tagline with separators */}
        <div className="mb-3 sm:mb-4">
          <p className="text-[10px] sm:text-xs md:text-[13px] font-medium tracking-wide text-gray-500 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
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
          <span className="block font-light sm:font-normal text-gray-700 tracking-[-0.03em]">
            The Agency
          </span>
          {/* Heavy Bold Font-Weight */}
          <span className="block font-extrabold sm:font-black text-gray-900 tracking-[-0.035em] my-0.5 sm:my-1">
            Behind 8-Figure
          </span>
          {/* Signature Vibrant Glowing Orange Line */}
          <span className="block font-black text-[#FF5C28] tracking-[-0.025em] drop-shadow-[0_0_35px_rgba(255,92,40,0.25)]">
            Brand Growth
          </span>
        </h1>

        {/* Subtitle - Clean, readable, aesthetic */}
        <p className="text-xs sm:text-sm md:text-base font-light text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-7">
          From search rankings to ad screens — we run every channel, build every system, and deliver every result. No juggling. No excuses. Just growth.
        </p>

        {/* Centered Dual Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-5 sm:mb-6">
          <button
            onClick={() => onOpenContact("Free Strategy Call")}
            className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#FF5C28] text-white hover:bg-[#e64a19] shadow-lg shadow-[#FF5C28]/30 hover:shadow-[#FF5C28]/45 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
          >
            Book a Free Strategy Call
          </button>
          <a
            href="#case-studies"
            className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-white border border-gray-300/90 text-gray-800 hover:bg-gray-50 hover:border-gray-400 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-xs"
          >
            See Our Results →
          </a>
        </div>

        {/* Star Rating & Trust Line */}
        <div className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-wide flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          <span className="text-[#FF5C28] tracking-tighter font-bold">★★★★★</span>
          <span className="opacity-40">•</span>
          <span>Lahore, Karachi &amp; Nationwide</span>
          <span className="opacity-40">•</span>
          <span>SEO · Paid Ads · CRM · AI Search · Full-Service Digital Marketing</span>
        </div>
      </div>

      {/* Subtle Bottom Scroll Indicator */}
      <div className="relative z-10 flex justify-center items-center pb-1">
        <a
          href="#about"
          aria-label="Scroll down to about section"
          className="p-1.5 rounded-full text-gray-400 hover:text-[#FF5C28] transition-colors animate-bounce"
        >
          <ChevronDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
