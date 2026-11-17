"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

interface HeroProps {
  onOpenContact: (service?: string) => void;
}

// Key rotating agency phrases in sequence
const ROTATING_PHRASES = [
  "Brand Growth",
  "Revenue Scale",
  "High ROAS",
  "Real Profit",
  "Market Scale",
];

export default function Hero({ onOpenContact }: HeroProps) {
  // Rotating typography state
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [fadeState, setFadeState] = useState<"in" | "out">("in");

  // Smooth word rotation timer (2.6s cycle with 180ms ease)
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState("out");
      setTimeout(() => {
        setPhraseIndex((prev) => (prev + 1) % ROTATING_PHRASES.length);
        setFadeState("in");
      }, 180);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-[100dvh] min-h-[580px] max-h-[960px] lg:max-h-[1050px] flex flex-col justify-between items-center overflow-hidden bg-[#010101] text-[#ffffff] pt-20 sm:pt-24 lg:pt-28 pb-3 sm:pb-4 select-none"
    >
      {/* ============================================================ */}
      {/* EXECUTIVE AGENCY AMBIENT LIGHTING & SUBTLE GRID (ORANGE & BLACK, NO PINK) */}
      {/* ============================================================ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        {/* Central Warm Amber-Orange Agency Glow (#fb8e00) */}
        <div className="absolute top-1/3 w-[550px] sm:w-[850px] h-[300px] sm:h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(251,142,0,0.18)_0%,rgba(251,142,0,0.06)_50%,transparent_75%)] rounded-full blur-3xl" />

        {/* Deep pure black peripheral vignette (#010101) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_20%,#010101_95%)]" />

        {/* Subtle, architectural hairline grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_45%,black_40%,transparent_100%)]" />
      </div>

      {/* ============================================================ */}
      {/* COMMANDING AGENCY HERO TYPOGRAPHY & CONVERSION HIERARCHY     */}
      {/* ============================================================ */}
      <div className="relative my-auto flex flex-col items-center text-center px-4 sm:px-6 max-w-5xl w-full z-10">
        {/* Eyebrow Meta Bar */}
        <div className="mb-3 sm:mb-4">
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-medium tracking-wide text-gray-300 bg-white/[0.05] border border-white/10 backdrop-blur-md shadow-inner">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fb8e00] animate-pulse" />
            <span className="text-gray-300">Lahore · Karachi · Islamabad</span>
            <span className="text-white/20">•</span>
            <span className="text-white font-semibold">Full-Service Growth Agency</span>
            <span className="hidden md:inline text-white/20">•</span>
            <span className="hidden md:inline text-gray-300">Paid Media · Creative · SEO · CRM</span>
          </div>
        </div>

        {/* Monumental Agency 3-Line Headline with Text Changing Animation */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.4rem] font-extrabold tracking-[-0.03em] text-[#ffffff] leading-[1.08] mb-3 sm:mb-4 max-w-5xl">
          The Agency <br />
          Behind 8-Figure <br />
          <span className="inline-block">
            <span
              className={`inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#fb8e00] via-[#ffb03a] to-[#ffffff] drop-shadow-[0_0_35px_rgba(251,142,0,0.35)] transition-all duration-200 ease-out transform ${
                fadeState === "in"
                  ? "opacity-100 translate-y-0 filter-none"
                  : "opacity-0 -translate-y-2 blur-[2px]"
              }`}
            >
              {ROTATING_PHRASES[phraseIndex]}
            </span>
          </span>
        </h1>

        {/* Punchy, Direct-Response Subheadline */}
        <p className="text-xs sm:text-sm md:text-base text-gray-300 font-normal max-w-xl mx-auto leading-relaxed mb-5 sm:mb-6">
          From high-converting creative to full-funnel media buying — we run every channel, build every growth engine, and scale compounding revenue.{" "}
          <span className="text-[#ffffff] font-semibold">No juggling. No excuses. Just growth.</span>
        </p>

        {/* High-Converting Agency Dual CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-5">
          <button
            onClick={() => onOpenContact("Free Growth Plan")}
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm md:text-base font-bold bg-[#fb8e00] text-[#ffffff] hover:bg-[#e07d00] shadow-lg shadow-[#fb8e00]/25 hover:shadow-xl hover:shadow-[#fb8e00]/45 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <span>Book a Free Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="#case-studies"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm md:text-base font-semibold bg-white/[0.06] backdrop-blur-md border border-white/15 text-white hover:text-white hover:border-[#fb8e00]/50 hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-sm"
          >
            See Our Results →
          </a>
        </div>

        {/* Agency Social Proof & Trust Credentials */}
        <div className="text-xs sm:text-[13px] text-gray-300 font-medium tracking-wide flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 pt-2.5 border-t border-white/10 w-full max-w-2xl">
          <span className="text-[#fb8e00] font-bold tracking-widest">★★★★★</span>
          <span className="font-semibold text-white">200+ Brands Scaled</span>
          <span className="text-white/20">•</span>
          <span className="font-semibold text-white">PKR 500M+ Ad Spend</span>
          <span className="text-white/20">•</span>
          <span className="text-gray-300">Google Premier & Meta Certified</span>
          <span className="hidden sm:inline text-white/20">•</span>
          <span className="hidden sm:inline text-gray-300">Lahore · Karachi · Islamabad</span>
        </div>
      </div>

      {/* Subtle Downward Scroll Indicator */}
      <div className="relative z-10 flex justify-center items-center pb-1 sm:pb-2">
        <a
          href="#about"
          aria-label="Scroll down to about section"
          className="p-1.5 rounded-full text-gray-400 hover:text-[#fb8e00] transition-colors animate-bounce"
        >
          <ChevronDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
