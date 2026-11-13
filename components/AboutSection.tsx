"use client";

import { Heart, Shield, Target, Eye, Sparkles } from "lucide-react";

interface AboutSectionProps {
  onOpenContact?: () => void;
}

const VALUES = [
  {
    icon: Heart,
    title: "Happiness",
    desc: "Happy teams create extraordinary results for your brand",
    iconColor: "text-rose-500",
    bgColor: "bg-rose-50",
  },
  {
    icon: Shield,
    title: "Honesty",
    desc: "Transparent communication builds unbreakable trust",
    iconColor: "text-amber-500",
    bgColor: "bg-amber-50",
  },
  {
    icon: Target,
    title: "Dedication",
    desc: "Relentless focus on achieving your business goals",
    iconColor: "text-purple-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: Eye,
    title: "Transparency",
    desc: "Clear processes and open reporting at every step",
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-50",
  },
  {
    icon: Sparkles,
    title: "Empathy",
    desc: "Understanding your challenges and crafting solutions that truly resonate",
    iconColor: "text-sky-500",
    bgColor: "bg-sky-50",
  },
];

const STATS = [
  {
    number: "9+",
    label: "Years of Excellence",
    gradient: "from-[#FF5C28] to-[#EC4899]",
  },
  {
    number: "500+",
    label: "Clients Worldwide",
    gradient: "from-[#EC4899] to-[#D946EF]",
  },
  {
    number: "1000+",
    label: "Projects Delivered",
    gradient: "from-[#A855F7] to-[#8B5CF6]",
  },
  {
    number: "93%",
    label: "Client Satisfaction",
    gradient: "from-[#EC4899] to-[#8B5CF6]",
  },
];

export default function AboutSection({ onOpenContact }: AboutSectionProps) {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle ambient light gradient mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-10 -left-32 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow Pill */}
        <div className="mb-4">
          <span className="inline-block px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-gray-600 bg-gray-100 border border-gray-200">
            ABOUT US
          </span>
        </div>

        {/* Header Grid: Title on Left, Narrative on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-6">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-gray-900 leading-[1.05]">
              <span>Ready to</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] via-[#EC4899] to-[#8B5CF6]">
                Grow?
              </span>
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-4 pt-2">
            <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
              Brands Headquarter is a full-service marketing agency dedicated to helping businesses scale through innovative digital strategies, creative design, and data-driven solutions.
            </p>
            <p className="text-base sm:text-lg text-gray-900 font-semibold leading-relaxed">
              Since 2016, we&apos;ve been turning ambitious visions into reality.
            </p>
          </div>
        </div>

        {/* 5 Core Values Cards in a 5-Column Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 mb-16">
          {VALUES.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.title}
                className="p-6 rounded-2xl bg-white border border-gray-200/90 shadow-xs hover:border-[#FF5C28]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div
                    className={`w-10 h-10 rounded-xl ${val.bgColor} ${val.iconColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-normal">
                    {val.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* High-Contrast Obsidian Dark Stats Banner (As seen in Page 1 of reference PDF) */}
        <div className="rounded-[2.5rem] bg-[#0c0c12] text-white p-8 sm:p-14 border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Internal ambient glowing orbs */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#FF5C28]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 relative z-10 text-center">
            {STATS.map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span
                  className={`text-4xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient} tracking-tight leading-none mb-3`}
                >
                  {stat.number}
                </span>
                <span className="text-xs sm:text-sm font-medium text-gray-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
