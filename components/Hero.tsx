"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  onOpenContact: (service?: string) => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);

  // Smooth mouse-follow spotlight
  const [cursorPos, setCursorPos] = useState({ x: 500, y: 300 });
  const [isHovered, setIsHovered] = useState(false);
  const targetCursor = useRef({ x: 500, y: 300 });

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      targetCursor.current = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2.5,
      };
      setCursorPos(targetCursor.current);
    }

    let animationFrameId: number;
    const animateLoop = () => {
      setCursorPos((prev) => ({
        x: prev.x + (targetCursor.current.x - prev.x) * 0.08,
        y: prev.y + (targetCursor.current.y - prev.y) * 0.08,
      }));
      animationFrameId = requestAnimationFrame(animateLoop);
    };

    animationFrameId = requestAnimationFrame(animateLoop);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    targetCursor.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    if (!isHovered) setIsHovered(true);
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-h-[85vh] flex flex-col justify-center items-center overflow-hidden bg-[#FAFAFC] text-[#0B0F1A] pt-[96px] pb-[72px] px-4 sm:px-6 select-none"
    >
      {/* ============================================================ */}
      {/* SOFT PINK / ORANGE BACKGROUND GLOW & 3-4 SUBTLE PARTICLES     */}
      {/* ============================================================ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Cursor-reactive warm spotlight */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            opacity: isHovered ? 0.75 : 0.45,
            background: `radial-gradient(560px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(255, 90, 31, 0.12) 0%, rgba(236, 72, 153, 0.07) 35%, transparent 70%)`,
          }}
        />

        {/* Ambient Center-Left Coral Aura */}
        <div className="absolute top-[35%] left-[20%] -translate-x-1/2 -translate-y-1/2 w-[480px] sm:w-[620px] h-[320px] sm:h-[400px] bg-gradient-to-tr from-[#FF5A1F]/12 via-[#FF8A65]/08 to-transparent rounded-full blur-[110px] sm:blur-[140px] animate-float-1 will-change-transform" />

        {/* Ambient Center-Right Blossom Pink Aura */}
        <div className="absolute top-[40%] right-[15%] w-[400px] sm:w-[520px] h-[320px] sm:h-[400px] bg-gradient-to-bl from-[#EC4899]/10 via-[#F472B6]/06 to-transparent rounded-full blur-[120px] sm:blur-[150px] animate-float-2 will-change-transform" />

        {/* 3-4 Subtle Decorative Ambient Floating Dots */}
        <div className="absolute top-[22%] left-[14%] w-1.5 h-1.5 rounded-full bg-[#FF5A1F]/30 blur-[0.5px] animate-pulse" />
        <div className="absolute top-[34%] right-[18%] w-2 h-2 rounded-full bg-[#EC4899]/25 blur-[0.5px] animate-pulse [animation-delay:1.2s]" />
        <div className="absolute bottom-[28%] left-[22%] w-1.5 h-1.5 rounded-full bg-[#FF8A65]/35 blur-[0.5px] animate-pulse [animation-delay:0.6s]" />
        <div className="absolute bottom-[32%] right-[24%] w-2 h-2 rounded-full bg-[#FF5A1F]/20 blur-[0.5px] animate-pulse [animation-delay:1.8s]" />

        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_45%,rgba(255,255,255,0.4)_0%,transparent_75%)]" />
      </div>

      {/* ============================================================ */}
      {/* CLEAN, MINIMAL, AESTHETIC HERO CONTENT (STAGGERED FADE-UP)    */}
      {/* ============================================================ */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-[820px] w-full mx-auto my-auto">
        {/* Eyebrow Pill: 13px, weight 600, letter-spacing 0.06em, padding 8px 16px, margin-bottom 20px */}
        <div
          className={`mb-5 transition-all duration-600 ease-out motion-reduce:transition-none ${
            mounted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold tracking-[0.06em] text-[#0B0F1A] bg-white border border-gray-200/90 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F]" />
            Digital Marketing Agency in Pakistan
          </span>
        </div>

        {/* H1: clamp(2.5rem, 5vw, 4rem) (max ~64px), weight 700, line-height 1.1, letter-spacing -0.02em, color #0B0F1A */}
        {/* Only "revenue" is orange (#FF5A1F). Max 2 lines. Margin-bottom 20px */}
        <h1
          className={`text-[34px] sm:text-[44px] lg:text-[clamp(2.5rem,5vw,4rem)] font-bold text-[#0B0F1A] leading-[1.1] tracking-[-0.02em] max-w-[820px] mx-auto text-center mb-5 [text-wrap:balance] transition-all duration-600 ease-out motion-reduce:transition-none ${
            mounted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          Brands that want <span className="text-[#FF5A1F]">revenue</span>, not just reach.
        </h1>

        {/* Subheadline: 18–20px, weight 400, line-height 1.6, color #475569, max-width 600px, centered */}
        {/* One weight, no bold fragments. Margin-bottom 32px */}
        <p
          className={`text-[16px] sm:text-[18px] lg:text-[19px] font-normal text-[#475569] leading-[1.6] max-w-[600px] mx-auto text-center mb-8 transition-all duration-600 ease-out motion-reduce:transition-none ${
            mounted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          We build the brand, create the content and scale the ads that turn attention into sales.
        </p>

        {/* Dual Action Buttons: 16px, weight 600, height 52–56px, padding 0 28px, fully rounded, 12–16px gap, margin-bottom 28px */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto mb-7 transition-all duration-600 ease-out motion-reduce:transition-none ${
            mounted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          {/* Primary CTA: Orange, filled (#FF5A1F) */}
          <button
            onClick={() => onOpenContact("Free Growth Plan")}
            className="w-full sm:w-auto h-[52px] sm:h-[54px] px-7 rounded-full text-[16px] font-semibold bg-[#FF5A1F] text-white hover:bg-[#e04810] shadow-md shadow-[#FF5A1F]/25 hover:shadow-lg hover:shadow-[#FF5A1F]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center cursor-pointer"
          >
            Get My Free Growth Plan
          </button>

          {/* Secondary CTA: White / outline */}
          <a
            href="#case-studies"
            className="w-full sm:w-auto h-[52px] sm:h-[54px] px-7 rounded-full text-[16px] font-semibold bg-white text-[#0B0F1A] border border-gray-300 hover:border-gray-400 hover:bg-gray-50/80 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center shadow-2xs"
          >
            See the Results →
          </a>
        </div>

        {/* Trust Row: 14–15px, color #64748B, separated by subtle dividers */}
        <div
          className={`text-[14px] sm:text-[15px] font-normal text-[#64748B] flex flex-wrap items-center justify-center gap-x-2 gap-y-1 max-w-xl mx-auto text-center transition-all duration-600 ease-out motion-reduce:transition-none ${
            mounted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <span className="text-[#FF5A1F] font-bold tracking-tight">★★★★★</span>
          <span>200+ brands scaled</span>
          <span className="text-gray-300 select-none">·</span>
          <span>PKR 500M+ ad spend</span>
          <span className="text-gray-300 select-none">·</span>
          <span>Lahore</span>
          <span className="text-gray-300 select-none">·</span>
          <span>Karachi</span>
          <span className="text-gray-300 select-none">·</span>
          <span>Islamabad</span>
        </div>
      </div>

      {/* Subtle Bottom Scroll Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex justify-center items-center pointer-events-auto">
        <a
          href="#trusted-by"
          aria-label="Scroll down to trusted brands"
          className="p-1 rounded-full text-gray-300 hover:text-[#FF5A1F] transition-colors"
        >
          <ChevronDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
