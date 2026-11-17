"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [phase, setPhase] = useState<"enter" | "active" | "exit" | "done">("enter");

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = "hidden";

    // Smooth choreographed corporate agency brand reveal
    const timer1 = setTimeout(() => {
      setPhase("active");
    }, 120);

    // Trigger dissolve exit after brand reveal
    const timer2 = setTimeout(() => {
      setPhase("exit");
      document.body.style.overflow = "";
      if (onComplete) onComplete();
    }, 1300);

    // Unmount from DOM completely
    const timer3 = setTimeout(() => {
      setPhase("done");
    }, 1900);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden={phase === "exit"}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white text-[#0F172A] select-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        phase === "exit"
          ? "opacity-0 pointer-events-none scale-[1.02]"
          : "opacity-100 scale-100"
      }`}
    >
      {/* Subtle warm ambient backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[320px] bg-gradient-to-tr from-[#fb8e00]/10 via-[#ffb03a]/06 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Center Brand Identity Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Brand Logo with Gentle Scale & Soft Light Sweep */}
        <div className="relative mb-5 flex items-center justify-center">
          {/* Delicate Orange Halo behind the Logo Dot */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-[#fb8e00]/15 blur-xl transition-all duration-1000 ease-out pointer-events-none ${
              phase === "active" ? "scale-125 opacity-100" : "scale-75 opacity-0"
            }`}
          />

          {/* Logo with Soft Entrance */}
          <div
            className={`relative transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              phase === "active"
                ? "opacity-100 translate-y-0 scale-100 filter-none"
                : "opacity-0 translate-y-2 scale-[0.96] blur-xs"
            }`}
          >
            <Image
              src="/images/brands-headquarter-logo-dark.png"
              alt="Brands Headquarter"
              width={260}
              height={110}
              priority
              className="h-12 sm:h-14 md:h-16 w-auto object-contain drop-shadow-xs"
            />
          </div>
        </div>

        {/* Minimal Delicate Accent Hairline */}
        <div
          className={`h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent transition-all duration-700 ease-out mb-3.5 ${
            phase === "active" ? "w-28 opacity-60" : "w-0 opacity-0"
          }`}
        />

        {/* Corporate Agency Positioning Tagline */}
        <div
          className={`overflow-hidden transition-all duration-700 delay-150 ease-out ${
            phase === "active"
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2"
          }`}
        >
          <p className="text-[10px] sm:text-[11px] font-medium tracking-[0.28em] text-gray-500 uppercase">
            We Build Brands · We Engineer Growth
          </p>
        </div>
      </div>
    </div>
  );
}
