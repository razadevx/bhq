"use client";

import { ChevronDown, ArrowRight } from "lucide-react";

interface HeroProps {
  onOpenContact: (service?: string) => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-between items-center overflow-hidden bg-[#07080B] text-white pt-28 sm:pt-36 pb-10 select-none"
    >
      {/* ============================================================ */}
      {/* EXECUTIVE AGENCY AMBIENT LIGHTING & SUBTLE GRID SYSTEM       */}
      {/* ============================================================ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        {/* Central Warm Amber-Coral Agency Glow */}
        <div className="absolute top-1/3 w-[600px] sm:w-[950px] h-[350px] sm:h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(255,92,40,0.18)_0%,rgba(236,72,153,0.08)_45%,transparent_75%)] rounded-full blur-3xl" />

        {/* Deep ambient peripheral vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_20%,#07080B_95%)]" />

        {/* Subtle, architectural hairline grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_45%,black_40%,transparent_100%)]"
        />
      </div>

      {/* ============================================================ */}
      {/* COMMANDING AGENCY HERO TYPOGRAPHY & CONVERSION HIERARCHY     */}
      {/* ============================================================ */}
      <div className="relative my-auto flex flex-col items-center text-center px-4 sm:px-6 max-w-5xl w-full z-10">
        {/* Eyebrow Meta Bar */}
        <div className="mb-6 sm:mb-7">
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-1.5 rounded-full text-xs sm:text-[13px] font-medium tracking-wide text-gray-300/90 bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-inner">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C28] animate-pulse" />
            <span className="text-gray-400">Lahore · Karachi · Islamabad</span>
            <span className="text-white/20">•</span>
            <span className="text-gray-300 font-semibold">Full-Service Growth Agency</span>
            <span className="hidden md:inline text-white/20">•</span>
            <span className="hidden md:inline text-gray-400">Paid Media · Creative · SEO · CRM</span>
          </div>
        </div>

        {/* Monumental Agency 3-Line Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-extrabold tracking-[-0.035em] text-white leading-[1.08] sm:leading-[1.06] mb-6 sm:mb-7 max-w-5xl">
          The Agency <br />
          Behind 8-Figure <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] via-[#FF6F3C] to-[#FFA07A] drop-shadow-[0_0_35px_rgba(255,92,40,0.30)]">
            Brand Growth
          </span>
        </h1>

        {/* Punchy, Direct-Response Subheadline */}
        <p className="text-sm sm:text-base md:text-lg text-gray-400 font-normal max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-9">
          From high-converting creative to full-funnel media buying — we run every channel, build every growth engine, and scale compounding revenue.{" "}
          <span className="text-gray-200 font-medium">No juggling. No excuses. Just growth.</span>
        </p>

        {/* High-Converting Agency Dual CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
          <button
            onClick={() => onOpenContact("Free Growth Plan")}
            className="inline-flex items-center justify-center gap-2 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-bold bg-[#FF5C28] text-white hover:bg-[#e64a19] shadow-lg shadow-[#FF5C28]/25 hover:shadow-xl hover:shadow-[#FF5C28]/45 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <span>Book a Free Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="#case-studies"
            className="inline-flex items-center justify-center px-7 sm:px-9 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold bg-[#121620]/90 backdrop-blur-md border border-white/15 text-white/90 hover:text-white hover:border-white/30 hover:bg-[#1A202E] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-sm"
          >
            See Our Results →
          </a>
        </div>

        {/* Downward Scroll Indicator */}
        <div className="mb-8">
          <a
            href="#about"
            aria-label="Scroll down to about section"
            className="inline-flex p-2 rounded-full text-gray-500 hover:text-[#FF5C28] transition-colors animate-bounce"
          >
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>

        {/* Agency Social Proof & Trust Credentials */}
        <div className="text-xs sm:text-[13px] text-gray-400/90 font-medium tracking-wide flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 pt-2 border-t border-white/[0.07] w-full max-w-3xl">
          <span className="text-[#FF5C28] font-bold tracking-widest">★★★★★</span>
          <span className="font-semibold text-gray-200">200+ Brands Scaled</span>
          <span className="text-white/20">•</span>
          <span className="font-semibold text-gray-200">PKR 500M+ Ad Spend</span>
          <span className="text-white/20">•</span>
          <span className="text-gray-400">Google Premier & Meta Certified</span>
          <span className="hidden sm:inline text-white/20">•</span>
          <span className="hidden sm:inline text-gray-400">Lahore · Karachi · Islamabad</span>
        </div>
      </div>
    </section>
  );
}
