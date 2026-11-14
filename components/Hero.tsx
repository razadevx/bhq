"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

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
  angle: number;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Rotating typography state
  const [wordIndex, setWordIndex] = useState(0);
  const [fadeState, setFadeState] = useState<"in" | "out">("in");

  // Smooth cursor tracking with physics interpolation
  const [cursorPos, setCursorPos] = useState({ x: 500, y: 300 });
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const targetCursor = useRef({ x: 500, y: 300 });
  const targetNorm = useRef({ x: 0, y: 0 });

  // Rotating word timer with smooth fade transition
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState("out");
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setFadeState("in");
      }, 250);
    }, 2600);

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
      setCursorPos((prev) => {
        const dx = targetCursor.current.x - prev.x;
        const dy = targetCursor.current.y - prev.y;
        return {
          x: prev.x + dx * 0.08,
          y: prev.y + dy * 0.08,
        };
      });

      setParallaxOffset((prev) => {
        const dx = targetNorm.current.x - prev.x;
        const dy = targetNorm.current.y - prev.y;
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

  // Minimalist, subtle ambient dust/glow particles (soft, non-distracting)
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

    // Subtle, ethereal tones (very low opacity, soft blur)
    const colors = [
      "255, 92, 40",   // Coral
      "236, 72, 153",  // Pink
      "255, 170, 120", // Warm Peach
    ];

    // Minimal particle count for an uncluttered, high-end feel
    const particleCount = 20;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 1.5 + Math.random() * 2.5,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -0.15 - Math.random() * 0.2, // very slow drift
        alpha: 0.12 + Math.random() * 0.25,
        color: colors[Math.floor(Math.random() * colors.length)],
        angle: Math.random() * Math.PI * 2,
      });
    }

    let particleAnimId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const mouseX = targetCursor.current.x;
      const mouseY = targetCursor.current.y;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.angle += 0.01;
        p.x += p.vx + Math.sin(p.angle) * 0.2;
        p.y += p.vy;

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Subtle soft glowing circular dust mote
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
      className="relative h-[100dvh] min-h-[560px] max-h-[860px] flex flex-col justify-between items-center overflow-hidden bg-[#FAFAFC] text-[#11141C] pt-20 sm:pt-24 pb-4 select-none"
    >
      {/* ============================================================ */}
      {/* MINIMALIST & AESTHETIC LIGHT GRADIENT MESH BACKGROUND        */}
      {/* ============================================================ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Layer 1: Soft Dynamic Cursor Radial Glow */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            opacity: isHovered ? 0.9 : 0.6,
            background: `radial-gradient(540px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(255, 92, 40, 0.14) 0%, rgba(236, 72, 153, 0.09) 35%, transparent 70%)`,
          }}
        />

        {/* Layer 2: Main Warm Coral Aura */}
        <div
          className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] sm:w-[640px] h-[300px] sm:h-[400px] bg-gradient-to-tr from-[#FF5C28]/14 via-[#FF8A65]/10 to-transparent rounded-full blur-[100px] sm:blur-[130px] animate-float-1 will-change-transform"
          style={{
            transform: `translate3d(calc(-50% + ${parallaxOffset.x * -20}px), calc(-50% + ${parallaxOffset.y * -16}px), 0)`,
          }}
        />

        {/* Layer 3: Soft Blossom Pink Glow */}
        <div
          className="absolute top-[30%] right-[10%] sm:right-[18%] w-[380px] sm:w-[500px] h-[320px] sm:h-[420px] bg-gradient-to-bl from-[#EC4899]/12 via-[#F472B6]/08 to-transparent rounded-full blur-[110px] sm:blur-[140px] animate-float-2 will-change-transform"
          style={{
            transform: `translate3d(${parallaxOffset.x * 24}px, ${parallaxOffset.y * 20}px, 0)`,
          }}
        />

        {/* Layer 4: Minimal Dust Particle Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />

        {/* Layer 5: Clean Vignette Softener */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_45%,rgba(255,255,255,0.45)_0%,transparent_75%)]" />
      </div>

      {/* ============================================================ */}
      {/* CENTERED HERO CONTENT - MINIMAL & PROPORTIONATE              */}
      {/* ============================================================ */}
      <div className="relative my-auto flex flex-col items-center text-center px-4 sm:px-6 max-w-4xl w-full z-10">
        {/* Eyebrow Pill */}
        <div className="mb-3 sm:mb-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-600 bg-white/90 border border-gray-200/80 shadow-2xs backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C28]" />
            STRATEGY · CREATIVE · PERFORMANCE
          </span>
        </div>

        {/* SEO H1 - Sleek, Proportionate, 2-Line Typography */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.85rem] tracking-tight leading-[1.18] text-center mb-3 sm:mb-4 max-w-3xl">
          {/* Line 1: Lightweight clean aesthetic */}
          <span className="block font-normal text-gray-600 tracking-[-0.02em]">
            The Digital Marketing Agency in Pakistan
          </span>

          {/* Line 2: Bold contrasting punchline with inline rotating word */}
          <span className="block font-black text-gray-900 tracking-[-0.025em] mt-1">
            for Brands That Want{" "}
            <span
              className={`inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] via-[#FF6F3C] to-[#EC4899] transition-all duration-250 ease-out transform ${
                fadeState === "in"
                  ? "opacity-100 translate-y-0 filter-none"
                  : "opacity-0 -translate-y-2 blur-[2px]"
              }`}
            >
              {ROTATING_WORDS[wordIndex]}
            </span>
            <span className="text-[#FF5C28]">, Not Just Reach.</span>
          </span>
        </h1>

        {/* Minimal Subtitle: Concise & punchy (1-2 lines) */}
        <p className="text-xs sm:text-sm text-gray-500 font-normal max-w-lg mx-auto leading-relaxed mb-6">
          <span className="font-semibold text-gray-800">Likes don&apos;t pay salaries. Sales do.</span>{" "}
          We build the brand, create the content, and scale the ads that turn customer attention into revenue.
        </p>

        {/* Centered Dual Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
          <button
            onClick={() => onOpenContact("Free Growth Plan")}
            className="inline-flex items-center justify-center px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold bg-[#FF5C28] text-white hover:bg-[#e64a19] shadow-md shadow-[#FF5C28]/25 hover:shadow-lg hover:shadow-[#FF5C28]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            Get My Free Growth Plan
          </button>
          <a
            href="#case-studies"
            className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold bg-white/90 backdrop-blur-md border border-gray-300/80 text-gray-700 hover:bg-white hover:text-gray-900 hover:border-gray-400 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-2xs"
          >
            See the Results →
          </a>
        </div>

        {/* Minimal Trust Line */}
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
          className="p-1 rounded-full text-gray-400 hover:text-[#FF5C28] transition-colors animate-bounce"
        >
          <ChevronDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
