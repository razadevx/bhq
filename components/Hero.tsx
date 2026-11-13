"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  onOpenContact: (service?: string) => void;
}

const SCALE_WORDS = ["8-Figure", "7-Figure", "Multi-Million"];

export default function Hero({ onOpenContact }: HeroProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % SCALE_WORDS.length);
        setFade(false);
      }, 300);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-[100dvh] min-h-[620px] max-h-[1080px] w-full flex flex-col justify-between overflow-hidden bg-[#070709] text-white selection:bg-[#FF5C28] selection:text-white"
    >
      {/* Cinematic Ambient Orange Radial Glow exactly matching reference */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Warm bottom-center radial glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[850px] sm:w-[1100px] h-[480px] bg-gradient-to-t from-[#FF5C28]/20 via-[#FF5C28]/8 to-transparent rounded-full blur-[120px]" />
        {/* Subtle upper glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#FF5C28]/10 rounded-full blur-[100px]" />
      </div>

      {/* Top spacing to account for floating capsule navbar */}
      <div className="pt-20 sm:pt-24 shrink-0" />

      {/* Main Centered Hero Content - Perfectly Balanced in Laptop Viewport */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-5xl mx-auto w-full my-auto">
        {/* Eyebrow Row with subtle dots */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 text-[11px] sm:text-xs text-gray-400 font-medium tracking-wide mb-2 sm:mb-3">
          <span>Pakistan &amp; Nationwide</span>
          <span className="text-gray-600">•</span>
          <span>AI-Powered Strategy</span>
          <span className="text-gray-600">•</span>
          <span>Full-Service Agency</span>
          <span className="text-gray-600">•</span>
          <span>SEO · Ads · CRO · Branding</span>
        </div>

        {/* Massive Centered Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem] font-black tracking-tight leading-[1.04] text-white max-w-4xl mx-auto mb-3 md:mb-4">
          <span className="block">The Agency</span>
          <span className="block">
            Behind{" "}
            <span
              className={`inline-block transition-all duration-300 ${
                fade ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
              }`}
            >
              {SCALE_WORDS[wordIndex]}
            </span>
          </span>
          <span className="block text-[#FF5C28]">Brand Growth</span>
        </h1>

        {/* Centered Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed mb-6 md:mb-7">
          From search rankings to mobile checkouts — we run every channel, build
          every system, and deliver every result. No juggling. No excuses. Just growth.
        </p>

        {/* Dual CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-3 w-full sm:w-auto">
          {/* Glowing Orange Primary Button */}
          <button
            onClick={() => onOpenContact("Free Strategy Call")}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold bg-[#FF5C28] hover:bg-[#e64a19] text-white transition-all duration-300 shadow-xl shadow-[#FF5C28]/35 hover:shadow-2xl hover:shadow-[#FF5C28]/55 hover:scale-[1.02]"
          >
            <span>Book a Free Strategy Call</span>
          </button>

          {/* Glass Dark Secondary Button */}
          <a
            href="#case-studies"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-white/30 transition-all duration-300"
          >
            <span>See Our Results →</span>
          </a>
        </div>

        {/* Down indicator */}
        <div className="pt-1">
          <a
            href="#trusted-by"
            aria-label="Scroll to content"
            className="inline-block p-1 text-gray-500 hover:text-white transition-colors animate-bounce"
          >
            <ChevronDown className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Bottom Trust Line - Anchored at the bottom of the laptop viewport */}
      <div className="relative z-10 pb-4 sm:pb-6 pt-2 shrink-0 border-t border-white/5 bg-gradient-to-t from-black/40 to-transparent">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-[13px] text-gray-400 font-medium">
          <span className="text-[#FF5C28] tracking-widest text-sm font-bold">★★★★★</span>
          <span className="text-gray-600">•</span>
          <span>Pakistan &amp; Nationwide</span>
          <span className="text-gray-600">•</span>
          <span>SEO · Paid Ads · Creative · Shopify</span>
          <span className="text-gray-600">•</span>
          <span>Full-service digital marketing</span>
        </div>
      </div>
    </section>
  );
}
