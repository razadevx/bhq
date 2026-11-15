"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { ChevronDown } from "lucide-react";

// Dynamically import the Dithering WebGL shader with SSR disabled for optimal performance
const Dithering = dynamic(
  () => import("@paper-design/shaders-react").then((mod) => mod.Dithering),
  {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-transparent" />,
  }
);

interface HeroProps {
  onOpenContact: (service?: string) => void;
}

// Consistent short words (7-11 characters) so line lengths stay perfectly uniform
const ROTATING_WORDS = [
  "Revenue",
  "High ROAS",
  "Real Profit",
  "Real Scale",
  "Pure Growth",
];

export default function Hero({ onOpenContact }: HeroProps) {
  // Rotating typography state
  const [wordIndex, setWordIndex] = useState(0);
  const [fadeState, setFadeState] = useState<"in" | "out">("in");
  const [isHovered, setIsHovered] = useState(false);

  // Smooth word rotation timer
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState("out");
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setFadeState("in");
      }, 180);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative h-[100dvh] min-h-[580px] max-h-[920px] flex flex-col justify-between items-center overflow-hidden bg-[#FAFAFC] text-[#0F172A] pt-20 sm:pt-24 pb-4 select-none"
    >
      {/* ============================================================ */}
      {/* PAPER-DESIGN DITHERING SHADER BACKGROUND ANIMATION           */}
      {/* (Lightened opacity by 20% for optimal contrast & subtlety)   */}
      {/* ============================================================ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        {/* Soft Ambient Warm Glow under the shader */}
        <div className="absolute w-[650px] sm:w-[900px] h-[400px] sm:h-[550px] bg-gradient-to-tr from-[#FF5C28]/10 via-[#FFA07A]/08 to-[#EC4899]/08 rounded-full blur-3xl animate-float-1" />

        {/* Paper-Design Dithering WebGL Shader Canvas - Lightened by 20% */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20 sm:opacity-25 mix-blend-multiply transition-opacity duration-700">
          <Dithering
            colorBack="#00000000" // Fully transparent
            colorFront="#EC4E02"  // Brands Headquarter Signature Coral Orange Accent
            shape="warp"
            type="4x4"
            speed={isHovered ? 0.45 : 0.2}
            className="w-full h-full object-cover"
            minPixelRatio={1}
          />
        </div>

        {/* Subtle Radial Vignette Softener (Provides clean contrast around central text) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_48%,rgba(250,250,252,0.85)_0%,rgba(250,250,252,0.25)_65%,transparent_100%)] pointer-events-none" />
      </div>

      {/* ============================================================ */}
      {/* HIGH-CONTRAST, BALANCED 3-LINE HERO TYPOGRAPHY               */}
      {/* ============================================================ */}
      <div className="relative my-auto flex flex-col items-center text-center px-4 sm:px-6 max-w-5xl w-full z-10">
        {/* Eyebrow Pill */}
        <div className="mb-4 sm:mb-5">
          <span className="badge-eyebrow text-gray-800 bg-white/95 border border-gray-200/90 shadow-2xs backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C28] animate-pulse" />
            STRATEGY · CREATIVE · PERFORMANCE
          </span>
        </div>

        {/* Uniform 3-Line H1 Typography with Clear Aspect Ratio & Weight Contrast */}
        <h1 className="display-h1 text-center mb-4 sm:mb-5 max-w-4xl text-[#0F172A]">
          {/* Line 1: Lightweight clean aesthetic */}
          <span className="block font-light text-gray-700 tracking-[-0.025em]">
            The Digital Marketing Agency
          </span>

          {/* Line 2: Bold contrasting punchline */}
          <span className="block font-extrabold text-[#0F172A] tracking-[-0.03em] my-1">
            in Pakistan for Brands That Demand
          </span>

          {/* Line 3: Locked on ONE single line across all screens (No gap before comma) */}
          <span className="block font-extrabold tracking-[-0.03em]">
            <span
              className={`inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] via-[#FF6F3C] to-[#EC4899] drop-shadow-[0_0_25px_rgba(255,92,40,0.20)] transition-all duration-180 ease-out transform ${
                fadeState === "in"
                  ? "opacity-100 translate-y-0 filter-none"
                  : "opacity-0 -translate-y-2 blur-[2px]"
              }`}
            >{ROTATING_WORDS[wordIndex]}</span><span className="text-[#0F172A]">, Not Just Reach.</span>
          </span>
        </h1>

        {/* High-Contrast Subheadline */}
        <p className="text-xs sm:text-sm md:text-base text-gray-600 font-normal max-w-xl mx-auto leading-relaxed mb-6 sm:mb-7">
          <span className="font-semibold text-gray-900">Likes don&apos;t pay salaries. Sales do.</span>{" "}
          Brands Headquarter builds the brand, makes the content, and runs the ads that turn customer attention into revenue.
        </p>

        {/* Centered Dual Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-5 sm:mb-6">
          <button
            onClick={() => onOpenContact("Free Growth Plan")}
            className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 rounded-full text-sm sm:text-base font-bold bg-[#FF5C28] text-white hover:bg-[#e64a19] shadow-lg shadow-[#FF5C28]/25 hover:shadow-xl hover:shadow-[#FF5C28]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            Get My Free Growth Plan
          </button>
          <a
            href="#case-studies"
            className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 rounded-full text-sm sm:text-base font-semibold bg-white/95 backdrop-blur-md border border-gray-300/90 text-gray-800 hover:bg-white hover:border-gray-400 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-2xs"
          >
            See the Results →
          </a>
        </div>

        {/* High-Contrast Social Proof Trust Line */}
        <div className="text-xs sm:text-sm text-gray-700 font-medium tracking-wide flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          <span className="text-[#FF5C28] font-bold">★★★★★</span>
          <span className="font-bold text-gray-900">200+ brands scaled</span>
          <span className="opacity-40">•</span>
          <span className="font-bold text-gray-900">PKR 500M+ ad spend</span>
          <span className="opacity-40">•</span>
          <span>Lahore · Karachi · Islamabad</span>
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
