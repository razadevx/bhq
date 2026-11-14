"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  onOpenContact: (service?: string) => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);

  // Smooth cursor tracking with physics interpolation
  const [cursorPos, setCursorPos] = useState({ x: 500, y: 300 });
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const targetCursor = useRef({ x: 500, y: 300 });
  const targetNorm = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Set initial center position once mounted
    if (typeof window !== "undefined") {
      targetCursor.current = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2.5,
      };
      setCursorPos(targetCursor.current);
    }

    let animationFrameId: number;

    const animateLoop = () => {
      // Linear interpolation (lerp) for buttery 60fps cursor follow
      setCursorPos((prev) => {
        const dx = targetCursor.current.x - prev.x;
        const dy = targetCursor.current.y - prev.y;
        return {
          x: prev.x + dx * 0.08,
          y: prev.y + dy * 0.08,
        };
      });

      // Smooth parallax reaction for ambient mesh blobs
      setParallaxOffset((prev) => {
        const dx = targetNorm.current.x - prev.x;
        const dy = targetNorm.current.y - prev.y;
        return {
          x: prev.x + dx * 0.06,
          y: prev.y + dy * 0.06,
        };
      });

      animationFrameId = requestAnimationFrame(animateLoop);
    };

    animationFrameId = requestAnimationFrame(animateLoop);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    targetCursor.current = { x, y };

    // Normalized coordinates from -1 to 1 for subtle multi-layer parallax
    const normX = ((x / rect.width) - 0.5) * 2;
    const normY = ((y / rect.height) - 0.5) * 2;
    targetNorm.current = { x: normX, y: normY };

    if (!isHovered) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    targetNorm.current = { x: 0, y: 0 };
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative h-[100dvh] min-h-[580px] max-h-[960px] flex flex-col justify-between items-center overflow-hidden bg-[#FAFAFC] text-[#11141C] pt-24 sm:pt-28 pb-3 sm:pb-4 select-none"
    >
      {/* ============================================================ */}
      {/* AESTHETIC & MINIMAL MOVING LIGHT GRADIENT (PINK & ORANGE)    */}
      {/* WITH SMOOTH CURSOR INTERACTION                               */}
      {/* ============================================================ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Layer 1: Interactive Dynamic Cursor Follow Spotlight */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            opacity: isHovered ? 1 : 0.65,
            background: `radial-gradient(580px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(255, 92, 40, 0.18) 0%, rgba(236, 72, 153, 0.13) 30%, rgba(255, 182, 193, 0.08) 55%, transparent 75%)`,
          }}
        />

        {/* Layer 2: Main Floating Orange / Coral Aura (Reacts to cursor) */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] sm:w-[720px] h-[340px] sm:h-[440px] bg-gradient-to-tr from-[#FF5C28]/18 via-[#FF8A65]/14 to-transparent rounded-full blur-[100px] sm:blur-[130px] animate-float-1 will-change-transform"
          style={{
            transform: `translate3d(calc(-50% + ${parallaxOffset.x * -28}px), calc(-50% + ${parallaxOffset.y * -22}px), 0)`,
          }}
        />

        {/* Layer 3: Vibrant Blossom Pink Glow (Parallax drift on cursor) */}
        <div
          className="absolute top-[28%] right-[8%] sm:right-[15%] w-[420px] sm:w-[560px] h-[380px] sm:h-[480px] bg-gradient-to-bl from-[#EC4899]/16 via-[#F472B6]/12 to-transparent rounded-full blur-[110px] sm:blur-[140px] animate-float-2 will-change-transform"
          style={{
            transform: `translate3d(${parallaxOffset.x * 35}px, ${parallaxOffset.y * 28}px, 0)`,
          }}
        />

        {/* Layer 4: Warm Sunset Peach Mesh (Center-bottom breathing light) */}
        <div
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[580px] sm:w-[760px] h-[300px] sm:h-[380px] bg-gradient-to-t from-[#FF6B35]/15 via-[#FFA07A]/12 to-transparent rounded-full blur-[90px] sm:blur-[120px] animate-pulse-mesh will-change-transform"
          style={{
            transform: `translate3d(calc(-50% + ${parallaxOffset.x * 18}px), ${parallaxOffset.y * 14}px, 0)`,
          }}
        />

        {/* Layer 5: Soft Rose / Pink Upper-Left Accent (Gentle opposing drift) */}
        <div
          className="absolute top-[18%] -left-16 sm:left-[6%] w-[360px] sm:w-[480px] h-[360px] sm:h-[480px] bg-gradient-to-br from-[#F43F5E]/12 via-[#FB7185]/9 to-transparent rounded-full blur-[100px] sm:blur-[130px] animate-float-3 will-change-transform"
          style={{
            transform: `translate3d(${parallaxOffset.x * -32}px, ${parallaxOffset.y * 26}px, 0)`,
          }}
        />

        {/* Subtle Ethereal Shimmer Line across center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(255,255,255,0.4)_0%,transparent_70%)]" />
      </div>

      {/* ============================================================ */}
      {/* MAIN CENTERED HERO CONTENT - SCALED FOR LAPTOP VIEWPORT      */}
      {/* ============================================================ */}
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
          {/* Signature Vibrant Glowing Orange Line with subtle drop bloom */}
          <span className="block font-black text-[#FF5C28] tracking-[-0.025em] drop-shadow-[0_0_35px_rgba(255,92,40,0.30)]">
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
            className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#FF5C28] text-white hover:bg-[#e64a19] shadow-lg shadow-[#FF5C28]/30 hover:shadow-[#FF5C28]/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
          >
            Book a Free Strategy Call
          </button>
          <a
            href="#case-studies"
            className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-white/90 backdrop-blur-md border border-gray-300/90 text-gray-800 hover:bg-white hover:border-gray-400 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-xs"
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
          aria-label="Scroll down to explore about section"
          className="p-1.5 rounded-full text-gray-400 hover:text-[#FF5C28] transition-colors animate-bounce"
        >
          <ChevronDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
