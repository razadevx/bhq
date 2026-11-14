"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, ArrowRight, Sparkles } from "lucide-react";

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
      }, 200);
    }, 2600);

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
          x: prev.x + dx * 0.05,
          y: prev.y + dy * 0.05,
        };
      });

      animationFrameId = requestAnimationFrame(animateLoop);
    };

    animationFrameId = requestAnimationFrame(animateLoop);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Ambient canvas particles
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

    const colors = ["255, 92, 40", "236, 72, 153", "255, 175, 130"];
    const particleCount = 18;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 1.2 + Math.random() * 2,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -0.15 - Math.random() * 0.2,
        alpha: 0.12 + Math.random() * 0.25,
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
        ctx.shadowColor = `rgba(${p.color}, 0.3)`;
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

    // Gentle 3D perspective tilt
    const normX = ((x / rect.width) - 0.5) * 12;
    const normY = ((y / rect.height) - 0.5) * -12;
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
      className="relative h-[100dvh] min-h-[580px] max-h-[920px] flex flex-col justify-between items-center overflow-hidden bg-[#FBFBFE] text-[#0F172A] pt-20 sm:pt-24 pb-4 select-none"
    >
      {/* ============================================================ */}
      {/* EXPANSIVE 3D PAPER LAYERING BACKGROUND ANIMATION             */}
      {/* (Oversized so it NEVER cuts or bounds the typography)        */}
      {/* ============================================================ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        {/* Dynamic 3D Perspective Canvas */}
        <div
          className="relative w-full h-full flex items-center justify-center transition-transform duration-500 ease-out will-change-transform"
          style={{
            transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Layer 1: Ambient High-Contrast Coral & Pink Warm Aura */}
          <div className="absolute w-[580px] sm:w-[840px] h-[380px] sm:h-[520px] bg-gradient-to-tr from-[#FF5C28]/18 via-[#FF8A65]/12 to-[#EC4899]/12 rounded-full blur-[110px] sm:blur-[150px] animate-float-1" />

          {/* Layer 2: Rotating Outer Concentric Paper Orbit Ring */}
          <div className="absolute w-[680px] sm:w-[920px] lg:w-[1100px] h-[680px] sm:h-[920px] lg:h-[1100px] rounded-full border border-dashed border-orange-300/40 animate-paper-round flex items-center justify-center">
            {/* Orbiting Satellite Pins */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white shadow-md border border-orange-300 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C28]" />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-white shadow-sm border border-pink-300 flex items-center justify-center">
              <span className="w-1 h-1 rounded-full bg-[#EC4899]" />
            </div>
          </div>

          {/* Layer 3: Rotating Inner Counter-Orbit Ring */}
          <div className="absolute w-[480px] sm:w-[680px] lg:w-[820px] h-[480px] sm:h-[680px] lg:h-[820px] rounded-full border border-gray-200/60 animate-paper-round-reverse flex items-center justify-center">
            <div className="absolute top-1/4 right-0 w-3 h-3 rounded-full bg-[#FF5C28] opacity-60 shadow-xs" />
          </div>

          {/* Layer 4: Expansive Primary Paper Layer (Oversized: 1200px wide, no cutoffs) */}
          <div
            className="absolute w-[800px] sm:w-[1080px] lg:w-[1260px] h-[480px] sm:h-[600px] lg:h-[680px] rounded-[48px] sm:rounded-[56px] bg-white/50 backdrop-blur-md border border-white/90 shadow-[0_30px_80px_-25px_rgba(255,92,40,0.08),0_12px_35px_rgba(0,0,0,0.03)] animate-paper-1"
            style={{
              transform: "translateZ(-50px)",
            }}
          >
            {/* Subtle paper watermark sheen */}
            <div className="absolute top-6 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
            <div className="absolute bottom-6 left-8 right-8 h-px bg-gradient-to-r from-transparent via-orange-200/40 to-transparent" />
          </div>

          {/* Layer 5: Expansive Secondary Paper Layer (Tilted opposite) */}
          <div
            className="absolute w-[720px] sm:w-[980px] lg:w-[1140px] h-[420px] sm:h-[540px] lg:h-[620px] rounded-[42px] sm:rounded-[50px] bg-gradient-to-br from-white/45 via-orange-50/20 to-pink-50/20 backdrop-blur-sm border border-orange-200/30 shadow-[0_20px_50px_-15px_rgba(236,72,153,0.05)] animate-paper-2"
            style={{
              transform: "translateZ(-90px)",
            }}
          />

          {/* Layer 6: Dynamic Cursor Radial Glow */}
          <div
            className="absolute inset-0 transition-opacity duration-700 pointer-events-none"
            style={{
              opacity: isHovered ? 0.9 : 0.55,
              background: `radial-gradient(600px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(255, 92, 40, 0.16) 0%, rgba(236, 72, 153, 0.08) 35%, transparent 70%)`,
            }}
          />

          {/* Layer 7: Subtle Canvas Dust Particles */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
          />
        </div>

        {/* Soft Vignette Softener */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(255,255,255,0.2)_0%,transparent_75%)] pointer-events-none" />
      </div>

      {/* ============================================================ */}
      {/* HIGH-CONTRAST, UNIFORM 3-LINE HERO TYPOGRAPHY                */}
      {/* (Never breaks into 4 or 5 lines; crisp readable contrast)   */}
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

          {/* Line 3: Locked on ONE single line across all screens (No wrapping, no cutting!) */}
          <span className="block font-black tracking-[-0.03em]">
            <span
              className={`inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] via-[#FF6F3C] to-[#EC4899] drop-shadow-[0_0_25px_rgba(255,92,40,0.22)] transition-all duration-200 ease-out transform ${
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

        {/* Refined High-Contrast Subheadline */}
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
