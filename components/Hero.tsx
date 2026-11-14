"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, ArrowRight, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenContact: (service?: string) => void;
}

const ROTATING_WORDS = [
  "Revenue",
  "8-Figure Scale",
  "High ROAS",
  "Real Growth",
  "Real Sales",
];

interface Particle {
  x: number;
  y: number;
  radius: number;
  baseRadius: number;
  vx: number;
  vy: number;
  alpha: number;
  baseAlpha: number;
  color: string;
  angle: number;
  spinSpeed: number;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Rotating typography state
  const [wordIndex, setWordIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Smooth cursor tracking with physics interpolation
  const [cursorPos, setCursorPos] = useState({ x: 500, y: 300 });
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const targetCursor = useRef({ x: 500, y: 300 });
  const targetNorm = useRef({ x: 0, y: 0 });

  // Word rotation cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setIsTransitioning(false);
      }, 350); // half-way fade out then fade in
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  // Cursor interpolation loop
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
      // Lerp for 60fps cursor follow
      setCursorPos((prev) => {
        const dx = targetCursor.current.x - prev.x;
        const dy = targetCursor.current.y - prev.y;
        return {
          x: prev.x + dx * 0.08,
          y: prev.y + dy * 0.08,
        };
      });

      // Smooth parallax for ambient blobs
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

  // Canvas floating particles with mouse repulsion & drift
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle palette: coral, peach, blossom pink, soft amber
    const colors = [
      "rgba(255, 92, 40, ",   // BHQ Orange
      "rgba(236, 72, 153, ",  // Blossom Pink
      "rgba(245, 158, 11, ",  // Warm Amber
      "rgba(251, 113, 133, ", // Soft Rose
    ];

    const particleCount = 48;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const baseAlpha = 0.15 + Math.random() * 0.45;
      const baseRadius = 1.4 + Math.random() * 2.6;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: baseRadius,
        baseRadius,
        vx: (Math.random() - 0.5) * 0.45,
        vy: -0.2 - Math.random() * 0.4, // gently drift upwards
        alpha: baseAlpha,
        baseAlpha,
        color: colors[Math.floor(Math.random() * colors.length)],
        angle: Math.random() * Math.PI * 2,
        spinSpeed: 0.01 + Math.random() * 0.02,
      });
    }

    let particleAnimId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const mouseX = targetCursor.current.x;
      const mouseY = targetCursor.current.y;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Sway motion
        p.angle += p.spinSpeed;
        p.x += p.vx + Math.sin(p.angle) * 0.3;
        p.y += p.vy;

        // Wrap around boundaries
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Distance to cursor
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 140;

        // Mouse interaction: gentle repulsion
        if (dist < maxDist) {
          const force = (maxDist - dist) / maxDist;
          p.x -= (dx / dist) * force * 1.5;
          p.y -= (dy / dist) * force * 1.5;
          p.radius = p.baseRadius * (1 + force * 0.6);
          p.alpha = Math.min(0.85, p.baseAlpha + force * 0.4);
        } else {
          p.radius = p.baseRadius;
          p.alpha = p.baseAlpha;
        }

        // Draw soft glowing particle
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowColor = `${p.color}0.4)`;
        ctx.shadowBlur = p.radius * 4;
        ctx.fill();
        ctx.restore();
      }

      particleAnimId = requestAnimationFrame(render);
    };

    particleAnimId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(particleAnimId);
      window.removeEventListener("resize", handleResize);
    };
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
      {/* MULTI-LAYERED AESTHETIC PINK & ORANGE MOVING BACKGROUND      */}
      {/* ============================================================ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Layer 1: Dynamic Cursor Follow Spotlight */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            opacity: isHovered ? 1 : 0.65,
            background: `radial-gradient(600px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(255, 92, 40, 0.20) 0%, rgba(236, 72, 153, 0.14) 30%, rgba(255, 182, 193, 0.08) 55%, transparent 75%)`,
          }}
        />

        {/* Layer 2: Main Floating Orange / Coral Aura */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] sm:w-[740px] h-[340px] sm:h-[460px] bg-gradient-to-tr from-[#FF5C28]/20 via-[#FF8A65]/15 to-transparent rounded-full blur-[100px] sm:blur-[140px] animate-float-1 will-change-transform"
          style={{
            transform: `translate3d(calc(-50% + ${parallaxOffset.x * -28}px), calc(-50% + ${parallaxOffset.y * -22}px), 0)`,
          }}
        />

        {/* Layer 3: Vibrant Blossom Pink Glow */}
        <div
          className="absolute top-[28%] right-[8%] sm:right-[15%] w-[420px] sm:w-[580px] h-[380px] sm:h-[500px] bg-gradient-to-bl from-[#EC4899]/18 via-[#F472B6]/13 to-transparent rounded-full blur-[110px] sm:blur-[150px] animate-float-2 will-change-transform"
          style={{
            transform: `translate3d(${parallaxOffset.x * 35}px, ${parallaxOffset.y * 28}px, 0)`,
          }}
        />

        {/* Layer 4: Warm Sunset Peach Mesh */}
        <div
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[580px] sm:w-[780px] h-[300px] sm:h-[400px] bg-gradient-to-t from-[#FF6B35]/16 via-[#FFA07A]/12 to-transparent rounded-full blur-[90px] sm:blur-[130px] animate-pulse-mesh will-change-transform"
          style={{
            transform: `translate3d(calc(-50% + ${parallaxOffset.x * 18}px), ${parallaxOffset.y * 14}px, 0)`,
          }}
        />

        {/* Layer 5: Soft Rose / Pink Upper-Left Accent */}
        <div
          className="absolute top-[18%] -left-16 sm:left-[6%] w-[360px] sm:w-[500px] h-[360px] sm:h-[500px] bg-gradient-to-br from-[#F43F5E]/14 via-[#FB7185]/10 to-transparent rounded-full blur-[100px] sm:blur-[135px] animate-float-3 will-change-transform"
          style={{
            transform: `translate3d(${parallaxOffset.x * -32}px, ${parallaxOffset.y * 26}px, 0)`,
          }}
        />

        {/* Layer 6: Dynamic Floating Micro-Particles Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />

        {/* Layer 7: Vignette Radial Softener */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(255,255,255,0.35)_0%,transparent_75%)]" />
      </div>

      {/* ============================================================ */}
      {/* MAIN CENTERED HERO CONTENT WITH ANIMATING CHANGING WORD      */}
      {/* ============================================================ */}
      <div className="relative my-auto flex flex-col items-center text-center px-4 sm:px-6 max-w-5xl w-full z-10">
        {/* Eyebrow Pill */}
        <div className="mb-3 sm:mb-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-700 bg-white/85 border border-gray-200/90 shadow-2xs backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C28] animate-pulse" />
            STRATEGY · CREATIVE · PERFORMANCE
          </span>
        </div>

        {/* Single H1 with Dynamic Animating Typography */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.65rem] tracking-tight leading-[1.08] text-center mb-3 sm:mb-4">
          {/* Line 1: Lightweight clean contrast */}
          <span className="block font-light sm:font-normal text-gray-700 tracking-[-0.03em]">
            The Digital Marketing Agency
          </span>

          {/* Line 2: Bold heavy contrast */}
          <span className="block font-extrabold sm:font-black text-gray-900 tracking-[-0.035em] my-0.5 sm:my-1">
            in Pakistan for Brands That Want
          </span>

          {/* Line 3: Animating Changing Word + Accent phrase */}
          <span className="inline-flex flex-wrap items-center justify-center gap-x-2 tracking-[-0.025em]">
            {/* The Animating Keyword Container */}
            <span className="relative inline-flex items-center justify-center min-w-[140px] sm:min-w-[220px] md:min-w-[270px]">
              <span
                className={`inline-block font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] via-[#FF6F3C] to-[#EC4899] drop-shadow-[0_0_30px_rgba(255,92,40,0.30)] transition-all duration-350 transform ${
                  isTransitioning
                    ? "opacity-0 -translate-y-4 scale-95 blur-xs"
                    : "opacity-100 translate-y-0 scale-100 blur-none"
                }`}
              >
                {ROTATING_WORDS[wordIndex]}
              </span>
            </span>

            {/* Static ending phrase */}
            <span className="font-black text-[#FF5C28] drop-shadow-[0_0_30px_rgba(255,92,40,0.25)]">
              , Not Just Reach.
            </span>
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

        {/* Centered Dual Action Buttons */}
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

        {/* Trust line under buttons */}
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
