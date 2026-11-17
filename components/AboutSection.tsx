"use client";

import { useState, useEffect, useRef } from "react";
import {
  Users2,
  ShieldCheck,
  Target,
  BarChart3,
  Compass,
  ArrowRight,
} from "lucide-react";

interface AboutSectionProps {
  onOpenContact?: () => void;
}

// Realistic, professional corporate agency icons (NO AI sparkles or generic shapes)
const VALUES = [
  {
    icon: Users2,
    title: "Happiness",
    desc: "Happy, dedicated teams create extraordinary commercial results for your brand",
    iconColor: "text-[#fb8e00]",
    bgColor: "bg-orange-50",
    borderColor: "hover:border-[#fb8e00]/40",
  },
  {
    icon: ShieldCheck,
    title: "Honesty",
    desc: "Transparent communication builds unbreakable, long-term brand trust",
    iconColor: "text-amber-500",
    bgColor: "bg-amber-50",
    borderColor: "hover:border-amber-400/40",
  },
  {
    icon: Target,
    title: "Dedication",
    desc: "Relentless execution focused strictly on achieving your revenue milestones",
    iconColor: "text-[#fb8e00]",
    bgColor: "bg-orange-50",
    borderColor: "hover:border-[#fb8e00]/40",
  },
  {
    icon: BarChart3,
    title: "Transparency",
    desc: "Clear performance dashboards and straight answers at every step of your funnel",
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-50",
    borderColor: "hover:border-emerald-400/40",
  },
  {
    icon: Compass,
    title: "Empathy",
    desc: "Understanding buyer psychology and crafting offers that truly convert",
    iconColor: "text-sky-500",
    bgColor: "bg-sky-50",
    borderColor: "hover:border-sky-400/40",
  },
];

// Smooth count-up animated component triggered when scrolled into view
function AnimatedStat({
  value,
  prefix = "",
  suffix = "",
  duration = 1800,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease-out cubic curve for natural smooth deceleration
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easedProgress * value));

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(value);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={elementRef}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function AboutSection({ onOpenContact }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow: WHO WE ARE */}
        <div className="mb-4">
          <span className="inline-block px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-gray-600 bg-gray-100 border border-gray-200">
            WHO WE ARE
          </span>
        </div>

        {/* H2 Heading & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          <div className="lg:col-span-6">
            <h2 className="display-h2 text-gray-900">
              <span className="font-light text-gray-700 block mb-1.5">Not Another Marketing Agency.</span>
              <span className="font-extrabold gradient-heading-accent">
                Your Growth Team.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-3.5 pt-1">
            <p className="text-lead text-gray-900 font-semibold leading-relaxed">
              Most agencies sell you posts, impressions and monthly reports nobody reads. We sell growth.
            </p>
            <p className="text-body-standard text-gray-600">
              Brands Headquarter is a full-service digital marketing agency in Pakistan where strategists, designers, content creators, media buyers and developers work as one team on your brand. No hand-offs between five vendors. No finger-pointing when numbers drop.
            </p>
            <p className="text-body-standard text-gray-600">
              We start with your business goals — more orders, lower cost per customer, a stronger brand — and work backwards to the content, campaigns and website that get you there. New brand or established name, we bring the plan and the people to move you forward.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#fb8e00] hover:text-[#e07d00] transition-colors group"
              >
                <span>How We Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* 5 Core Values with Realistic Professional Business Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-14">
          {VALUES.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.title}
                className={`relative p-5 sm:p-6 rounded-2xl bg-white border border-gray-200/90 shadow-xs ${val.borderColor} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-default`}
              >
                {/* Indicator dot */}
                <span className="absolute top-3.5 right-3.5 w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-[#fb8e00] group-hover:scale-125 transition-all" />

                <div>
                  <div
                    className={`w-10 h-10 rounded-xl ${val.bgColor} ${val.iconColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-xs`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1.5 group-hover:text-[#fb8e00] transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-normal">
                    {val.desc}
                  </p>
                </div>

                <div className="pt-3.5 mt-3.5 border-t border-gray-100 flex items-center gap-1 text-[10px] font-bold text-gray-400 group-hover:text-[#fb8e00] transition-colors">
                  <span>Core Value</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Animated Obsidian Dark Stats Banner - Moderate & Refined Aesthetic */}
        <div className="rounded-3xl bg-[#010101] text-white p-6 sm:p-8 lg:p-9 border border-white/10 shadow-xl relative overflow-hidden group">
          {/* Animated Ambient Light Orbs */}
          <div className="absolute -top-16 -right-16 w-60 h-60 bg-[#fb8e00]/15 rounded-full blur-[80px] animate-pulse pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-60 h-60 bg-white/5 rounded-full blur-[80px] animate-pulse pointer-events-none" />

          {/* Glowing Top Hairline Accent */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#fb8e00]/50 to-transparent" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10 text-center items-center">
            {/* Stat 1: 9+ */}
            <div className="flex flex-col items-center group/stat">
              <span className="text-3xl sm:text-4xl lg:text-[2.35rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fb8e00] to-[#ffa21a] tracking-tight leading-none mb-2 group-hover/stat:scale-105 transition-transform duration-300">
                <AnimatedStat value={9} suffix="+" duration={1600} />
              </span>
              <span className="text-xs font-medium text-gray-400 max-w-[130px]">
                Years of Scaling Brands
              </span>
            </div>

            {/* Stat 2: 200+ */}
            <div className="flex flex-col items-center group/stat">
              <span className="text-3xl sm:text-4xl lg:text-[2.35rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#e5e7eb] to-[#fb8e00] tracking-tight leading-none mb-2 group-hover/stat:scale-105 transition-transform duration-300">
                <AnimatedStat value={200} suffix="+" duration={1800} />
              </span>
              <span className="text-xs font-medium text-gray-400 max-w-[150px]">
                Brands Scaled Across Pakistan &amp; GCC
              </span>
            </div>

            {/* Stat 3: PKR 500M+ (Clean, inline, non-wrapping aesthetic) */}
            <div className="flex flex-col items-center group/stat">
              <div className="text-3xl sm:text-4xl lg:text-[2.35rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fb8e00] via-[#ffb03a] to-[#ffffff] tracking-tight leading-none mb-2 group-hover/stat:scale-105 transition-transform duration-300 flex items-baseline justify-center whitespace-nowrap">
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-orange-200/90 mr-1.5 uppercase select-none">
                  PKR
                </span>
                <AnimatedStat value={500} suffix="M+" duration={2000} />
              </div>
              <span className="text-xs font-medium text-gray-400 max-w-[130px]">
                Managed Ad Spend
              </span>
            </div>

            {/* Stat 4: 93% (Client Retention) */}
            <div className="flex flex-col items-center group/stat">
              <span className="text-3xl sm:text-4xl lg:text-[2.35rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#d1d5db] to-[#9ca3af] tracking-tight leading-none mb-2 group-hover/stat:scale-105 transition-transform duration-300">
                <AnimatedStat value={93} suffix="%" duration={1700} />
              </span>
              <span className="text-xs font-medium text-gray-400 max-w-[130px]">
                Client Retention Rate
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
