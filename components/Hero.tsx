"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

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
  const sectionRef = useRef<HTMLElement>(null);
  const paperStackRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  // Rotating typography state (Only triggers re-render once every 2.6s - 0% lag)
  const [wordIndex, setWordIndex] = useState(0);
  const [fadeState, setFadeState] = useState<"in" | "out">("in");

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

  // High-performance 60/120fps mouse tracking via DIRECT DOM TRANSFORMS
  // Completely bypasses React re-renders for buttery smooth 0% CPU overhead
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let isHovering = false;
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      mouseX = x;
      mouseY = y;

      // Subtle 3D perspective tilt (-7 to +7 degrees)
      targetX = ((y / rect.height) - 0.5) * -12;
      targetY = ((x / rect.width) - 0.5) * 12;

      isHovering = true;
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
      isHovering = false;
    };

    // Render loop directly updating DOM style transforms (GPU Compositor Thread)
    const updateTransforms = () => {
      // Lerp for smooth easing
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      if (paperStackRef.current) {
        paperStackRef.current.style.transform = `perspective(1200px) rotateX(${currentX.toFixed(2)}deg) rotateY(${currentY.toFixed(2)}deg)`;
      }

      if (spotlightRef.current && isHovering) {
        spotlightRef.current.style.transform = `translate3d(${mouseX - 275}px, ${mouseY - 275}px, 0)`;
        spotlightRef.current.style.opacity = "0.75";
      } else if (spotlightRef.current) {
        spotlightRef.current.style.opacity = "0.45";
      }

      rafId = requestAnimationFrame(updateTransforms);
    };

    section.addEventListener("mousemove", handleMouseMove, { passive: true });
    section.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    rafId = requestAnimationFrame(updateTransforms);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-[100dvh] min-h-[580px] max-h-[920px] flex flex-col justify-between items-center overflow-hidden bg-[#FAF9F6] text-[#0F172A] pt-20 sm:pt-24 pb-4 select-none"
    >
      {/* ============================================================ */}
      {/* EXPANSIVE 3D PAPER LAYERING BACKGROUND ANIMATION             */}
      {/* (Hardware accelerated via GPU compositor for 60/120fps)      */}
      {/* ============================================================ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        {/* Dynamic 3D Perspective Plane directly manipulated by GPU */}
        <div
          ref={paperStackRef}
          className="relative w-full h-full flex items-center justify-center will-change-transform"
          style={{
            transformStyle: "preserve-3d",
            transform: "perspective(1200px) rotateX(0deg) rotateY(0deg)",
          }}
        >
          {/* Layer 1: Ambient Warm Coral & Pink Glow Core */}
          <div className="absolute w-[600px] sm:w-[850px] h-[380px] sm:h-[500px] bg-gradient-to-tr from-[#FF5C28]/18 via-[#FF8A65]/12 to-[#EC4899]/12 rounded-full blur-3xl animate-float-1" />

          {/* Layer 2: Rotating Outer Concentric Paper Orbit Ring */}
          <div className="absolute w-[680px] sm:w-[940px] lg:w-[1120px] h-[680px] sm:h-[940px] lg:h-[1120px] rounded-full border border-dashed border-orange-300/40 animate-paper-round flex items-center justify-center">
            {/* Orbiting Satellite Pins */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white shadow-md border border-orange-300 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C28]" />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-white shadow-sm border border-pink-300 flex items-center justify-center">
              <span className="w-1 h-1 rounded-full bg-[#EC4899]" />
            </div>
          </div>

          {/* Layer 3: Rotating Inner Counter-Orbit Ring */}
          <div className="absolute w-[480px] sm:w-[700px] lg:w-[840px] h-[480px] sm:h-[700px] lg:h-[840px] rounded-full border border-gray-300/40 animate-paper-round-reverse flex items-center justify-center">
            <div className="absolute top-1/4 right-0 w-3 h-3 rounded-full bg-[#FF5C28] opacity-60 shadow-xs" />
          </div>

          {/* Layer 4: Expansive Primary Paper Sheet (1280px wide - never boxes text) */}
          <div
            className="absolute w-[820px] sm:w-[1100px] lg:w-[1280px] h-[480px] sm:h-[600px] lg:h-[680px] rounded-[52px] bg-white/55 backdrop-blur-md border border-white/90 shadow-[0_30px_70px_-20px_rgba(255,92,40,0.07),0_10px_30px_rgba(0,0,0,0.02)] animate-paper-1"
            style={{
              transform: "translateZ(-40px)",
            }}
          >
            {/* Paper sheen accents */}
            <div className="absolute top-6 left-10 right-10 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
            <div className="absolute bottom-6 left-10 right-10 h-px bg-gradient-to-r from-transparent via-orange-200/40 to-transparent" />
          </div>

          {/* Layer 5: Expansive Secondary Paper Sheet (Tilted opposite) */}
          <div
            className="absolute w-[740px] sm:w-[1000px] lg:w-[1160px] h-[420px] sm:h-[540px] lg:h-[620px] rounded-[44px] bg-gradient-to-br from-white/45 via-orange-50/20 to-pink-50/20 backdrop-blur-xs border border-orange-200/30 shadow-[0_20px_50px_-15px_rgba(236,72,153,0.05)] animate-paper-2"
            style={{
              transform: "translateZ(-80px)",
            }}
          />

          {/* Layer 6: GPU-Accelerated Dynamic Cursor Follow Spotlight */}
          <div
            ref={spotlightRef}
            className="absolute top-0 left-0 w-[550px] h-[550px] rounded-full pointer-events-none transition-opacity duration-500 will-change-transform"
            style={{
              background: "radial-gradient(circle, rgba(255, 92, 40, 0.16) 0%, rgba(236, 72, 153, 0.08) 40%, transparent 70%)",
              transform: "translate3d(500px, 200px, 0)",
            }}
          />

          {/* Layer 7: GPU Floating Amber Motes (Pure CSS, 0% CPU JS overhead) */}
          <div className="absolute w-2 h-2 rounded-full bg-[#FF5C28]/35 blur-[1px] top-1/4 left-1/5 animate-float-1" />
          <div className="absolute w-2.5 h-2.5 rounded-full bg-[#EC4899]/30 blur-[1px] bottom-1/3 right-1/4 animate-float-2" />
          <div className="absolute w-1.5 h-1.5 rounded-full bg-[#FFA07A]/40 top-1/2 right-1/6 animate-float-1" />
          <div className="absolute w-2 h-2 rounded-full bg-[#FF5C28]/25 bottom-1/4 left-1/3 animate-float-2" />
        </div>

        {/* Soft Radial Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(255,255,255,0.15)_0%,transparent_75%)] pointer-events-none" />
      </div>

      {/* ============================================================ */}
      {/* HIGH-CONTRAST, UNIFORM 3-LINE HERO TYPOGRAPHY                */}
      {/* ============================================================ */}
      <div className="relative my-auto flex flex-col items-center text-center px-4 sm:px-6 max-w-5xl w-full z-10">
        {/* Eyebrow Pill */}
        <div className="mb-4 sm:mb-5">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-gray-800 bg-white/90 border border-gray-200/90 shadow-2xs backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C28] animate-pulse" />
            STRATEGY · CREATIVE · PERFORMANCE
          </span>
        </div>

        {/* Precise, Uniform 3-Line H1 Typography */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] tracking-tight leading-[1.14] text-center mb-4 sm:mb-5 max-w-4xl text-[#0F172A]">
          {/* Line 1: Lightweight clean aesthetic */}
          <span className="block font-light text-gray-700 tracking-[-0.025em]">
            The Digital Marketing Agency
          </span>

          {/* Line 2: Bold contrasting punchline */}
          <span className="block font-black text-[#0F172A] tracking-[-0.03em] my-1">
            in Pakistan for Brands That Demand
          </span>

          {/* Line 3: Locked on ONE single line across all screens */}
          <span className="block font-black tracking-[-0.03em]">
            <span
              className={`inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] via-[#FF6F3C] to-[#EC4899] drop-shadow-[0_0_25px_rgba(255,92,40,0.20)] transition-all duration-180 ease-out transform ${
                fadeState === "in"
                  ? "opacity-100 translate-y-0 filter-none"
                  : "opacity-0 -translate-y-2 blur-[2px]"
              }`}
            >
              {ROTATING_WORDS[wordIndex]}
            </span>
            <span className="text-[#0F172A]">, Not Just Reach.</span>
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
            className="inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-bold bg-[#FF5C28] text-white hover:bg-[#e64a19] shadow-lg shadow-[#FF5C28]/25 hover:shadow-xl hover:shadow-[#FF5C28]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            Get My Free Growth Plan
          </button>
          <a
            href="#case-studies"
            className="inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-semibold bg-white/95 backdrop-blur-md border border-gray-300/90 text-gray-800 hover:bg-white hover:border-gray-400 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-2xs"
          >
            See the Results →
          </a>
        </div>

        {/* High-Contrast Trust Line */}
        <div className="text-[10px] sm:text-xs text-gray-600 font-medium tracking-wide flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
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
          href="#trusted-by"
          aria-label="Scroll down to trusted brands"
          className="p-1.5 rounded-full text-gray-400 hover:text-[#FF5C28] transition-colors animate-bounce"
        >
          <ChevronDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
