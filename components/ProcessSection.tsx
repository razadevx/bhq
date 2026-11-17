"use client";

import { Search, Compass, Rocket, Sliders, Flame } from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "1. Discover",
    name: "Discover",
    icon: Search,
    desc: "We audit your brand, ads, website and competitors to find where the money is leaking.",
    tag: "Audit Phase",
  },
  {
    step: "02",
    title: "2. Plan",
    name: "Plan",
    icon: Compass,
    desc: "You get a custom growth roadmap: positioning, channels, creative direction and targets.",
    tag: "Roadmap",
  },
  {
    step: "03",
    title: "3. Launch",
    name: "Launch",
    icon: Rocket,
    desc: "Our creative and media teams go live with content, campaigns and site fixes.",
    tag: "Execution",
  },
  {
    step: "04",
    title: "4. Optimize",
    name: "Optimize",
    icon: Sliders,
    desc: "Weekly testing on creatives, audiences and offers to drive cost per customer down.",
    tag: "Testing",
  },
  {
    step: "05",
    title: "5. Scale",
    name: "Scale",
    icon: Flame,
    desc: "Once we find what wins, we pour fuel on it — more budget, more channels, more cities.",
    tag: "Scale",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-white relative border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gray-200 bg-gray-50 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#fb8e00]" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-700">
              HOW WE WORK
            </span>
          </div>

          {/* Heading */}
          <h2 className="display-h2 text-gray-900">
            <span className="font-light text-gray-700">From First Call to Full Scale </span>
            <span className="font-extrabold gradient-heading-accent-warm">
              in 5 Steps
            </span>
          </h2>
          <p className="mt-4 text-lead text-gray-600">
            A battle-tested scaling framework engineered to eliminate guesswork and deliver predictable, compound revenue.
          </p>
        </div>

        {/* 5-step horizontal cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {STEPS.map((s, index) => {
            const Icon = s.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-gray-50/80 border border-gray-200/80 hover:border-[#fb8e00]/50 hover:bg-white hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
              >
                <div>
                  {/* Step header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#fb8e00] to-[#ffa21a]">
                      {s.step}
                    </span>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white text-gray-600 border border-gray-200/60 shadow-2xs">
                      {s.tag}
                    </span>
                  </div>

                  <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center text-[#fb8e00] mb-4 shadow-xs border border-gray-100 group-hover:bg-[#fb8e00] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#fb8e00] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-gray-200/60 flex items-center gap-1.5 text-[11px] font-bold text-gray-400 group-hover:text-[#fb8e00] transition-colors">
                  <span>Step {s.step}</span>
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
