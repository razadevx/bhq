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

// Realistic, professional corporate agency icons (NO AI sparkles/magic wands)
const VALUES = [
  {
    icon: Users2,
    title: "Happiness",
    desc: "Happy, dedicated teams create extraordinary commercial results for your brand",
    iconColor: "text-[#FF5C28]",
    bgColor: "bg-orange-50",
    borderColor: "hover:border-[#FF5C28]/50",
  },
  {
    icon: ShieldCheck,
    title: "Honesty",
    desc: "Transparent communication builds unbreakable, long-term brand trust",
    iconColor: "text-amber-500",
    bgColor: "bg-amber-50",
    borderColor: "hover:border-amber-400/50",
  },
  {
    icon: Target,
    title: "Dedication",
    desc: "Relentless execution focused strictly on achieving your revenue milestones",
    iconColor: "text-purple-500",
    bgColor: "bg-purple-50",
    borderColor: "hover:border-purple-400/50",
  },
  {
    icon: BarChart3,
    title: "Transparency",
    desc: "Clear performance dashboards and straight answers at every step of your funnel",
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-50",
    borderColor: "hover:border-emerald-400/50",
  },
  {
    icon: Compass,
    title: "Empathy",
    desc: "Understanding buyer psychology and crafting offers that truly convert",
    iconColor: "text-sky-500",
    bgColor: "bg-sky-50",
    borderColor: "hover:border-sky-400/50",
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
    <section id="about" className="py-24 bg-white relative overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow: WHO WE ARE */}
        <div className="mb-4">
          <span className="inline-block px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-gray-600 bg-gray-100 border border-gray-200">
            WHO WE ARE
          </span>
        </div>

        {/* H2 Heading & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-[1.08]">
              <span>Not Another Marketing Agency.</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] via-[#EC4899] to-[#8B5CF6] mt-1">
                Your Growth Team.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-4 pt-1">
            <p className="text-base sm:text-lg text-gray-900 font-semibold leading-relaxed">
              Most agencies sell you posts, impressions and monthly reports nobody reads. We sell growth.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              Brands Headquarter is a full-service digital marketing agency in Pakistan where strategists, designers, content creators, media buyers and developers work as one team on your brand. No hand-offs between five vendors. No finger-pointing when numbers drop.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              We start with your business goals — more orders, lower cost per customer, a stronger brand — and work backwards to the content, campaigns and website that get you there. New brand or established name, we bring the plan and the people to move you forward.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#FF5C28] hover:text-[#e64a19] transition-colors group"
              >
                <span>How We Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* 5 Core Values with Realistic Professional Business Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 mb-16">
          {VALUES.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.title}
                className={`relative p-6 sm:p-7 rounded-3xl bg-white border border-gray-200/90 shadow-xs ${val.borderColor} hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-default`}
              >
                {/* Subtle indicator dot */}
                <span className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-[#FF5C28] group-hover:scale-125 transition-all" />

                <div>
                  <div
                    className={`w-11 h-11 rounded-2xl ${val.bgColor} ${val.iconColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-xs`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#FF5C28] transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-normal">
                    {val.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center gap-1 text-[10px] font-bold text-gray-400 group-hover:text-[#FF5C28] transition-colors">
                  <span>Core Value</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Animated Obsidian Dark Stats Banner with Real Number Counters & Dynamic Glow */}
        <div className="rounded-[2.5rem] bg-[#0c0c12] text-white p-8 sm:p-14 border border-white/10 shadow-2xl relative overflow-hidden group">
          {/* Animated Ambient Light Orbs */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#FF5C28]/20 rounded-full blur-[90px] animate-pulse pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-[90px] animate-pulse pointer-events-none" />

          {/* Glowing Top Hairline Accent */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF5C28]/60 to-transparent" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 relative z-10 text-center">
            {/* Stat 1: 9+ */}
            <div className="flex flex-col items-center group/stat">
              <span className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] to-[#EC4899] tracking-tight leading-none mb-3 group-hover/stat:scale-105 transition-transform duration-300">
                <AnimatedStat value={9} suffix="+" duration={1600} />
              </span>
              <span className="text-xs sm:text-sm font-medium text-gray-400">
                Years of Scaling Brands
              </span>
            </div>

            {/* Stat 2: 200+ */}
            <div className="flex flex-col items-center group/stat">
              <span className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] to-[#D946EF] tracking-tight leading-none mb-3 group-hover/stat:scale-105 transition-transform duration-300">
                <AnimatedStat value={200} suffix="+" duration={1800} />
              </span>
              <span className="text-xs sm:text-sm font-medium text-gray-400">
                Brands Scaled Across Pakistan &amp; GCC
              </span>
            </div>

            {/* Stat 3: PKR 500M+ */}
            <div className="flex flex-col items-center group/stat">
              <span className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#8B5CF6] tracking-tight leading-none mb-3 group-hover/stat:scale-105 transition-transform duration-300">
                <AnimatedStat value={500} prefix="PKR " suffix="M+" duration={2000} />
              </span>
              <span className="text-xs sm:text-sm font-medium text-gray-400">
                Managed Ad Spend
              </span>
            </div>

            {/* Stat 4: 93% (Client Retention) */}
            <div className="flex flex-col items-center group/stat">
              <span className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] tracking-tight leading-none mb-3 group-hover/stat:scale-105 transition-transform duration-300">
                <AnimatedStat value={93} suffix="%" duration={1700} />
              </span>
              <span className="text-xs sm:text-sm font-medium text-gray-400">
                Client Retention Rate
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
