"use client";

import { Search, Compass, Rocket, Sliders, Flame } from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "Discover",
    icon: Search,
    desc: "We audit your brand, previous ads, website speed, funnel drop-offs, and competitor tactics to uncover exactly where money is leaking.",
    tag: "Days 1–7",
  },
  {
    step: "02",
    title: "Plan",
    icon: Compass,
    desc: "You receive a custom growth roadmap: brand positioning, ad channel mix, creative direction, CPA targets, and realistic ROAS milestones.",
    tag: "Days 8–14",
  },
  {
    step: "03",
    title: "Launch",
    icon: Rocket,
    desc: "Our creative and media teams go live simultaneously with new ad angles, UGC shoots, tracking pixels (CAPI), and store CRO enhancements.",
    tag: "Week 3",
  },
  {
    step: "04",
    title: "Optimize",
    icon: Sliders,
    desc: "Weekly agile sprint testing on ad hooks, video formats, audiences, and offers to systematically drive cost per acquisition (CPA) down.",
    tag: "Weeks 4–8",
  },
  {
    step: "05",
    title: "Scale",
    icon: Flame,
    desc: "Once we identify winning creative angles and profitable unit economics, we pour fuel on them — scaling ad spend, launching new channels, and expanding cities.",
    tag: "Month 2+",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-white dark:bg-[#0B0C10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF5C28]" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
              HOW WE WORK
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white leading-tight">
            From First Call to Full Scale{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] to-[#EC4899]">
              in 5 Clear Steps.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400">
            A battle-tested scaling framework engineered to eliminate guesswork and deliver predictable, compound revenue.
          </p>
        </div>

        {/* 5-step horizontal/vertical timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {STEPS.map((s, index) => {
            const Icon = s.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-gray-50/80 dark:bg-[#161B26] border border-gray-200/80 dark:border-white/5 hover:border-[#FF5C28]/50 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div>
                  {/* Step header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] to-[#EC4899]">
                      {s.step}
                    </span>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white dark:bg-white/10 text-gray-500 dark:text-gray-400">
                      {s.tag}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-white/10 flex items-center justify-center text-[#FF5C28] mb-4 shadow-xs group-hover:bg-[#FF5C28] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-200/50 dark:border-white/5 flex items-center gap-1.5 text-[11px] font-bold text-gray-400 group-hover:text-[#FF5C28] transition-colors">
                  <span>Milestone {s.step}</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
