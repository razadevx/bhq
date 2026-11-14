"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

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
        {/* Layer 1: Dynamic Cursor Follow Spotlight */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            opacity: isHovered ? 1 : 0.65,
            background: `radial-gradient(580px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(255, 92, 40, 0.18) 0%, rgba(236, 72, 153, 0.13) 30%, rgba(255, 182, 193, 0.08) 55%, transparent 75%)`,
          }}
        />

        {/* Layer 2: Main Floating Orange / Coral Aura */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] sm:w-[720px] h-[340px] sm:h-[440px] bg-gradient-to-tr from-[#FF5C28]/18 via-[#FF8A65]/14 to-transparent rounded-full blur-[100px] sm:blur-[130px] animate-float-1 will-change-transform"
          style={{
            transform: `translate3d(calc(-50% + ${parallaxOffset.x * -28}px), calc(-50% + ${parallaxOffset.y * -22}px), 0)`,
          }}
        />

        {/* Layer 3: Vibrant Blossom Pink Glow */}
        <div
          className="absolute top-[28%] right-[8%] sm:right-[15%] w-[420px] sm:w-[560px] h-[380px] sm:h-[480px] bg-gradient-to-bl from-[#EC4899]/16 via-[#F472B6]/12 to-transparent rounded-full blur-[110px] sm:blur-[140px] animate-float-2 will-change-transform"
          style={{
            transform: `translate3d(${parallaxOffset.x * 35}px, ${parallaxOffset.y * 28}px, 0)`,
          }}
        />

        {/* Layer 4: Warm Sunset Peach Mesh */}
        <div
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[580px] sm:w-[760px] h-[300px] sm:h-[380px] bg-gradient-to-t from-[#FF6B35]/15 via-[#FFA07A]/12 to-transparent rounded-full blur-[90px] sm:blur-[120px] animate-pulse-mesh will-change-transform"
          style={{
            transform: `translate3d(calc(-50% + ${parallaxOffset.x * 18}px), ${parallaxOffset.y * 14}px, 0)`,
          }}
        />

        {/* Layer 5: Soft Rose / Pink Upper-Left Accent */}
        <div
          className="absolute top-[18%] -left-16 sm:left-[6%] w-[360px] sm:w-[480px] h-[360px] sm:h-[480px] bg-gradient-to-br from-[#F43F5E]/12 via-[#FB7185]/9 to-transparent rounded-full blur-[100px] sm:blur-[130px] animate-float-3 will-change-transform"
          style={{
            transform: `translate3d(${parallaxOffset.x * -32}px, ${parallaxOffset.y * 26}px, 0)`,
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(255,255,255,0.4)_0%,transparent_70%)]" />
      </div>

      {/* ============================================================ */}
      {/* MAIN CENTERED HERO CONTENT (EXACT PDF HOMEPAGE COPY)         */}
      {/* ============================================================ */}
      <div className="relative my-auto flex flex-col items-center text-center px-4 sm:px-6 max-w-5xl w-full z-10">
        {/* Eyebrow: STRATEGY · CREATIVE · PERFORMANCE (Exact from PDF Page 2) */}
        <div className="mb-3 sm:mb-4">
          <span className="inline-block px-4 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-700 bg-white/80 border border-gray-200/90 shadow-xs">
            STRATEGY · CREATIVE · PERFORMANCE
          </span>
        </div>

        {/* Only One H1 on Homepage (SEO Guideline Page 1 & 8) */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.65rem] tracking-tight leading-[1.06] text-center mb-3 sm:mb-4">
          <span className="block font-light sm:font-normal text-gray-700 tracking-[-0.03em]">
            The Digital Marketing Agency
          </span>
          <span className="block font-extrabold sm:font-black text-gray-900 tracking-[-0.035em] my-0.5 sm:my-1">
            in Pakistan for Brands That Want
          </span>
          <span className="block font-black text-[#FF5C28] tracking-[-0.025em] drop-shadow-[0_0_35px_rgba(255,92,40,0.30)]">
            Revenue, Not Just Reach.
          </span>
        </h1>

        {/* Subheadline (Exact from PDF Page 2) */}
        <p className="text-xs sm:text-sm md:text-base font-normal text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-7">
          <span className="font-semibold text-gray-900">Likes don&apos;t pay salaries. Sales do.</span>{" "}
          Brands Headquarter builds the brand, makes the content, runs the ads and builds the store —{" "}
          <span className="font-semibold text-gray-900 underline decoration-[#FF5C28] decoration-2 underline-offset-4">
            one team, one plan, one number that matters: growth.
          </span>
        </p>

        {/* Centered Dual Action Buttons (Exact Primary CTA & Secondary CTA from PDF Page 2) */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-5 sm:mb-6">
          <button
            onClick={() => onOpenContact("Free Growth Plan")}
            className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#FF5C28] text-white hover:bg-[#e64a19] shadow-lg shadow-[#FF5C28]/30 hover:shadow-[#FF5C28]/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
          >
            Get My Free Growth Plan
          </button>
          <a
            href="#case-studies"
            className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-white/90 backdrop-blur-md border border-gray-300/90 text-gray-800 hover:bg-white hover:border-gray-400 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-xs"
          >
            See the Results →
          </a>
        </div>

        {/* Trust line under buttons (Exact from PDF Page 2) */}
        <div className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-wide flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          <span className="text-[#FF5C28] tracking-tighter font-bold">★★★★★</span>
          <span className="font-semibold text-gray-700">200+ brands scaled</span>
          <span className="opacity-40">•</span>
          <span className="font-semibold text-gray-700">PKR 500M+ in managed ad spend</span>
          <span className="opacity-40">•</span>
          <span>Teams across Pakistan (Lahore, Karachi, Islamabad)</span>
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
