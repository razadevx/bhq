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
  "Real Profit",
  "Market Dominance",
];

interface Particle {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Rotating typography state
  const [wordIndex, setWordIndex] = useState(0);
  const [fadeState, setFadeState] = useState<"in" | "out">("in");

  // Smooth cursor tracking with physics interpolation
  const [cursorPos, setCursorPos] = useState({ x: 500, y: 300 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const targetCursor = useRef({ x: 500, y: 300 });
  const targetTilt = useRef({ x: 0, y: 0 });

  // Rotating word timer with smooth fade transition
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState("out");
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setFadeState("in");
      }, 240);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  // Cursor interpolation loop for smooth 3D tilt & spotlight
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
      setCursorPos((prev) => {
        const dx = targetCursor.current.x - prev.x;
        const dy = targetCursor.current.y - prev.y;
        return {
          x: prev.x + dx * 0.08,
          y: prev.y + dy * 0.08,
        };
      });

      setTilt((prev) => {
        const dx = targetTilt.current.x - prev.x;
        const dy = targetTilt.current.y - prev.y;
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

  // Ethereal ambient canvas particles
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

    const colors = ["255, 92, 40", "236, 72, 153", "255, 180, 140"];
    const particleCount = 22;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 1.2 + Math.random() * 2.2,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -0.15 - Math.random() * 0.2,
        alpha: 0.12 + Math.random() * 0.28,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let particleAnimId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.shadowColor = `rgba(${p.color}, 0.35)`;
        ctx.shadowBlur = p.radius * 3;
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

    // 3D tilt values (-8 to +8 degrees)
    const normX = ((x / rect.width) - 0.5) * 16;
    const normY = ((y / rect.height) - 0.5) * -16;
    targetTilt.current = { x: normY, y: normX };

    if (!isHovered) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    targetTilt.current = { x: 0, y: 0 };
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative h-[100dvh] min-h-[580px] max-h-[920px] flex flex-col justify-between items-center overflow-hidden bg-[#FAFAFC] text-[#11141C] pt-20 sm:pt-24 pb-4 select-none perspective-[1200px]"
    >
      {/* ============================================================ */}
      {/* PAPER LAYERING BACKGROUND THAT ROTATES & FLOATS              */}
      {/* ============================================================ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        {/* Dynamic Interactive 3D Perspective Plane */}
        <div
          className="relative w-full h-full flex items-center justify-center transition-transform duration-300 ease-out will-change-transform"
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Layer 1: Ambient Warm Glow Core */}
          <div className="absolute w-[500px] sm:w-[720px] h-[340px] sm:h-[460px] bg-gradient-to-tr from-[#FF5C28]/16 via-[#FF8A65]/12 to-[#EC4899]/10 rounded-full blur-[100px] sm:blur-[140px] animate-float-1 pointer-events-none" />

          {/* Layer 2: Rotating Round Paper Disc 1 (Outer Orbital Ring) */}
          <div className="absolute w-[540px] sm:w-[740px] md:w-[860px] h-[540px] sm:h-[740px] md:h-[860px] rounded-full border border-dashed border-orange-300/30 dark:border-orange-400/20 animate-paper-round flex items-center justify-center">
            {/* Satellite paper pin */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white shadow-md border border-orange-200 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C28]" />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white shadow-sm border border-pink-200" />
          </div>

          {/* Layer 3: Rotating Round Paper Disc 2 (Inner Counter-Rotating Orbit) */}
          <div className="absolute w-[400px] sm:w-[560px] md:w-[660px] h-[400px] sm:h-[560px] md:h-[660px] rounded-full border border-gray-200/50 animate-paper-round-reverse flex items-center justify-center">
            <div className="absolute top-1/4 right-0 w-3 h-3 rounded-full bg-gradient-to-tr from-[#FF5C28] to-[#EC4899] opacity-70 shadow-xs" />
          </div>

          {/* Layer 4: Dimensional Paper Sheet 1 (Main Tilted Frosted Canvas Sheet) */}
          <div
            className="absolute w-[520px] sm:w-[700px] lg:w-[820px] h-[320px] sm:h-[400px] lg:h-[450px] rounded-[36px] sm:rounded-[44px] bg-white/45 backdrop-blur-md border border-white/80 shadow-[0_20px_50px_-15px_rgba(255,92,40,0.07),0_10px_25px_rgba(0,0,0,0.03)] animate-paper-1"
            style={{
              transformStyle: "preserve-3d",
              transform: "translateZ(-40px)",
            }}
          >
            {/* Subtle paper card corner accent line */}
            <div className="absolute top-4 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 h-px bg-gradient-to-r from-transparent via-orange-200/30 to-transparent" />
          </div>

          {/* Layer 5: Dimensional Paper Sheet 2 (Secondary Tilted Accent Sheet) */}
          <div
            className="absolute w-[440px] sm:w-[600px] lg:w-[720px] h-[280px] sm:h-[350px] lg:h-[390px] rounded-[32px] sm:rounded-[40px] bg-gradient-to-br from-white/40 via-orange-50/20 to-pink-50/20 backdrop-blur-sm border border-orange-200/35 shadow-[0_15px_35px_-10px_rgba(236,72,153,0.06)] animate-paper-2"
            style={{
              transformStyle: "preserve-3d",
              transform: "translateZ(-80px)",
            }}
          />

          {/* Layer 6: Dynamic Cursor Spotlight */}
          <div
            className="absolute inset-0 transition-opacity duration-700 pointer-events-none"
            style={{
              opacity: isHovered ? 0.85 : 0.5,
              background: `radial-gradient(550px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(255, 92, 40, 0.15) 0%, rgba(236, 72, 153, 0.08) 35%, transparent 70%)`,
            }}
          />

          {/* Layer 7: Subtle Canvas Dust Particles */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
          />
        </div>

        {/* Soft Vignette Softener */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(255,255,255,0.3)_0%,transparent_75%)] pointer-events-none" />
      </div>

      {/* ============================================================ */}
      {/* CENTERED HERO CONTENT - BALANCED, MODERATE & IMPACTFUL       */}
      {/* ============================================================ */}
      <div className="relative my-auto flex flex-col items-center text-center px-4 sm:px-6 max-w-5xl w-full z-10">
        {/* Eyebrow Pill */}
        <div className="mb-4 sm:mb-5">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-gray-700 bg-white/85 border border-gray-200/90 shadow-2xs backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C28] animate-pulse" />
            STRATEGY · CREATIVE · PERFORMANCE
          </span>
        </div>

        {/* Moderate, Authoritative 3-Line H1 Typography */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight leading-[1.12] text-center mb-4 sm:mb-5 max-w-4xl">
          {/* Line 1: Lightweight clean aesthetic */}
          <span className="block font-light text-gray-700 tracking-[-0.03em]">
            The Digital Marketing Agency
          </span>

          {/* Line 2: Bold contrasting foundation */}
          <span className="block font-extrabold sm:font-black text-gray-900 tracking-[-0.035em] my-1">
            in Pakistan for Brands That Want
          </span>

          {/* Line 3: Seamless Rotating Word + Accent ending on one line */}
          <span className="inline-flex items-center justify-center flex-wrap gap-x-2 tracking-[-0.03em]">
            <span
              className={`inline-block font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] via-[#FF6F3C] to-[#EC4899] drop-shadow-[0_0_30px_rgba(255,92,40,0.25)] transition-all duration-240 ease-out transform ${
                fadeState === "in"
                  ? "opacity-100 translate-y-0 filter-none"
                  : "opacity-0 -translate-y-2 blur-[2px]"
              }`}
            >
              {ROTATING_WORDS[wordIndex]}
            </span>
            <span className="font-extrabold sm:font-black text-gray-900">
              , Not Just Reach.
            </span>
          </span>
        </h1>

        {/* Refined, Concise Subheadline */}
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
            className="inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-semibold bg-white/90 backdrop-blur-md border border-gray-300/90 text-gray-800 hover:bg-white hover:border-gray-400 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-2xs"
          >
            See the Results →
          </a>
        </div>

        {/* Minimal Social Proof Trust Line */}
        <div className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-wide flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          <span className="text-[#FF5C28] font-bold">★★★★★</span>
          <span className="font-semibold text-gray-700">200+ brands scaled</span>
          <span className="opacity-30">•</span>
          <span className="font-semibold text-gray-700">PKR 500M+ ad spend</span>
          <span className="opacity-30">•</span>
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
