"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = "hidden";

    // Progress counter animation from 0 to 100 over ~1.3s
    const startTime = performance.now();
    const duration = 1350; // ms

    let animFrame: number;

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progressFraction = Math.min(1, elapsed / duration);

      // Smooth ease-out curve
      const easedProgress = Math.round(
        (1 - Math.pow(1 - progressFraction, 2.5)) * 100
      );

      setProgress(easedProgress);

      if (progressFraction < 1) {
        animFrame = requestAnimationFrame(updateProgress);
      } else {
        // Complete loading
        setTimeout(() => {
          setIsExiting(true);
          // Unlock scroll
          document.body.style.overflow = "";
          if (onComplete) onComplete();

          // Unmount after exit curtain transition finishes
          setTimeout(() => {
            setIsDone(true);
          }, 700);
        }, 150);
      }
    };

    animFrame = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animFrame);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div
      aria-hidden={isExiting}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FAF9F6] text-[#0F172A] select-none transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        isExiting
          ? "opacity-0 -translate-y-8 pointer-events-none scale-[1.02]"
          : "opacity-100 translate-y-0"
      }`}
    >
      {/* Ambient background soft light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-[#FF5C28]/15 via-[#FFA07A]/10 to-[#EC4899]/12 rounded-full blur-3xl pointer-events-none" />

      {/* Main Center Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-md w-full">
        {/* Animated Brand Logo Container */}
        <div className="relative mb-8 flex items-center justify-center group">
          {/* Subtle Orange Glow Aura Behind Logo */}
          <div className="absolute inset-0 w-full h-full bg-[#FF5C28]/20 rounded-full blur-xl animate-pulse pointer-events-none scale-125" />

          {/* Logo with entrance scale & light sweep */}
          <div className="relative overflow-hidden p-2 rounded-2xl">
            <Image
              src="/images/brands-headquarter-logo-dark.png"
              alt="Brands Headquarter"
              width={260}
              height={110}
              priority
              className="h-14 sm:h-16 md:h-18 w-auto object-contain transition-transform duration-700 animate-in fade-in zoom-in-90 drop-shadow-xs"
            />

            {/* Shimmer Light Reflection Sweep Across Logo */}
            <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
              <div className="w-[80%] h-full bg-gradient-to-r from-transparent via-white/70 to-transparent skew-x-[-25deg] animate-shimmer-sweep" />
            </div>
          </div>
        </div>

        {/* Minimal Hairline Progress Bar */}
        <div className="w-48 sm:w-56 h-[2.5px] bg-gray-200/80 rounded-full overflow-hidden relative shadow-2xs mb-3">
          <div
            className="h-full bg-gradient-to-r from-[#FF5C28] via-[#FF8A65] to-[#EC4899] rounded-full transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Minimal Percentage Counter & Brand Tagline */}
        <div className="flex items-center justify-between w-48 sm:w-56 text-[10px] font-mono tracking-widest text-gray-500 mb-2">
          <span className="font-semibold text-gray-700">BHQ GROWTH</span>
          <span className="font-bold text-[#FF5C28]">{progress.toString().padStart(2, "0")}%</span>
        </div>

        <p className="text-[9px] sm:text-[10px] tracking-[0.22em] text-gray-400 font-bold uppercase mt-2">
          We Build Brands · We Engineer Growth
        </p>
      </div>

      {/* Aesthetic bottom corner mark */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-medium text-gray-400 tracking-wider">
        <span>Lahore</span>
        <span className="mx-2 opacity-40">•</span>
        <span>Karachi</span>
        <span className="mx-2 opacity-40">•</span>
        <span>Islamabad</span>
      </div>
    </div>
  );
}
