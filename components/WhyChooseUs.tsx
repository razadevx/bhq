"use client";

import {
  Compass,
  Sparkles,
  BarChart3,
  Layers,
  FileCheck2,
  Trophy,
} from "lucide-react";

const SYSTEMS = [
  {
    icon: Compass,
    num: "01",
    title: "Strategy first, always.",
    desc: "No ad goes live until we understand your numbers, your customer and your competition.",
    iconColor: "text-[#FF5C28]",
    bgColor: "bg-orange-50",
  },
  {
    icon: Sparkles,
    num: "02",
    title: "Creative that sells, not just impresses.",
    desc: "Every hook, visual and caption is built on buyer psychology and tested against real data.",
    iconColor: "text-rose-500",
    bgColor: "bg-rose-50",
  },
  {
    icon: BarChart3,
    num: "03",
    title: "Decisions backed by data.",
    desc: "We track every click to every sale, so you know exactly what's working — and what's not.",
    iconColor: "text-purple-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: Layers,
    num: "04",
    title: "One team, every channel.",
    desc: "Brand, content, ads and website under one roof. One plan, one point of contact.",
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-50",
  },
  {
    icon: FileCheck2,
    num: "05",
    title: "Reporting you'll actually read.",
    desc: "Clear dashboards and straight answers. No jargon, no hidden numbers.",
    iconColor: "text-sky-500",
    bgColor: "bg-sky-50",
  },
  {
    icon: Trophy,
    num: "06",
    title: "Paid for growth, not activity.",
    desc: "We measure ourselves on leads, sales and revenue — the numbers that matter to you.",
    iconColor: "text-amber-500",
    bgColor: "bg-amber-50",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-bhq" className="py-24 bg-white relative overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow Pill */}
        <div className="mb-4">
          <span className="inline-block px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-gray-600 bg-gray-100 border border-gray-200">
            THE BRANDS HEADQUARTER DIFFERENCE
          </span>
        </div>

        {/* Heading & Subtitle (Exact from PDF Page 5) */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-[1.05]">
            <span>We Don&apos;t Run Campaigns.</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] via-[#EC4899] to-[#8B5CF6]">
              We Build Growth Systems.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
            Anyone can boost a post. Building something that grows month after month takes a system — here&apos;s ours.
          </p>
        </div>

        {/* 6 Bento Grid Cards (Each Title is an H3 per SEO checklist) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {SYSTEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative p-8 rounded-3xl bg-white border border-gray-200/90 shadow-xs hover:border-[#FF5C28]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl ${item.bgColor} ${item.iconColor} flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-black text-gray-300 tracking-wider">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2.5 group-hover:text-[#FF5C28] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-bold text-gray-400 group-hover:text-[#FF5C28] transition-colors">
                  <span>Growth Principle {item.num}</span>
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
