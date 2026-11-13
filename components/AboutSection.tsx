"use client";

import { ArrowRight, Heart, Sparkles, Target, Eye, Users } from "lucide-react";

interface AboutSectionProps {
  onOpenContact: () => void;
}

const VALUES = [
  {
    icon: Heart,
    title: "Happiness",
    desc: "Happy, empowered teams create extraordinary breakthrough results for your brand.",
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: Sparkles,
    title: "Honesty",
    desc: "Direct, transparent communication without agency smoke-and-mirrors.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Target,
    title: "Dedication",
    desc: "Relentless execution focused strictly on your bottom-line revenue goals.",
    color: "from-[#FF5C28] to-red-600",
  },
  {
    icon: Eye,
    title: "Transparency",
    desc: "Clear ad accounts, live dashboards, and open reporting at every step.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: Users,
    title: "Empathy",
    desc: "Deeply understanding customer psychology and your business growing pains.",
    color: "from-emerald-500 to-teal-500",
  },
];

const STATS = [
  { number: "9+", label: "Years of Scaling Brands" },
  { number: "200+", label: "Clients Scaled in PK & GCC" },
  { number: "PKR 500M+", label: "Managed Ad Spend" },
  { number: "93%", label: "Client Retention Rate" },
];

export default function AboutSection({ onOpenContact }: AboutSectionProps) {
  return (
    <section id="about" className="py-24 bg-white dark:bg-[#0B0C10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FF5C28]" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                WHO WE ARE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white leading-tight">
              Not Another Marketing Agency.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] to-[#EC4899]">
                Your Dedicated Growth Team.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-5 text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
            <p className="font-semibold text-gray-900 dark:text-white">
              Most agencies sell you posts, impressions, and monthly PDF reports nobody reads. We sell growth.
            </p>
            <p>
              <strong className="text-gray-900 dark:text-white">Brands Headquarter</strong> is a full-service digital marketing agency in Pakistan where strategists, designers, content creators, media buyers, and developers work as one single team on your brand. No hand-offs between five vendors. No finger-pointing when numbers drop.
            </p>
            <p>
              We start with your business goals — more orders, lower cost per customer, a stronger brand — and work backwards to the content, campaigns, and website that get you there. New brand or established name, we bring the plan and the people to move you forward.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#FF5C28] hover:text-[#e64a19] transition-colors group"
              >
                <span>How We Work With You</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* 5 Core Values micro-cards */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
              Our Core Principles
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="p-6 rounded-2xl bg-gray-50 dark:bg-[#161B26] border border-gray-200/70 dark:border-white/5 hover:border-[#FF5C28]/40 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${val.color} text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4-column Stats Counter Strip */}
        <div className="rounded-3xl bg-gradient-to-br from-gray-900 via-[#11141C] to-gray-900 text-white p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#FF5C28]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 text-center">
            {STATS.map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400 tracking-tight">
                  {stat.number}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-gray-400 mt-2">
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
