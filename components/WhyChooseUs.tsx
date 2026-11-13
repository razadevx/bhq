"use client";

import {
  Compass,
  Sparkles,
  BarChart3,
  Layers,
  FileCheck,
  TrendingUp,
} from "lucide-react";

const DIFFERENCES = [
  {
    icon: Compass,
    title: "Strategy First, Always",
    desc: "No ad goes live until we understand your unit economics, profit margins, ideal buyer persona, and market competition.",
  },
  {
    icon: Sparkles,
    title: "Creative That Sells, Not Just Impresses",
    desc: "Every hook, visual angle, and caption is engineered on buyer psychology and tested relentlessly against cold audiences.",
  },
  {
    icon: BarChart3,
    title: "Decisions Backed by Real Data",
    desc: "We track every click to every rupee of checkout value via server-side CAPI and GA4 so you know exactly what's working.",
  },
  {
    icon: Layers,
    title: "One Team, Every Channel",
    desc: "Brand identity, video shoots, media buying, Shopify development, and SEO under one unified roof. Zero vendor juggling.",
  },
  {
    icon: FileCheck,
    title: "Reporting You'll Actually Read",
    desc: "Real-time interactive dashboards and plain-English weekly summaries. Straight answers, clear next steps, zero buzzwords.",
  },
  {
    icon: TrendingUp,
    title: "Paid for Growth, Not Busywork",
    desc: "We measure our agency success purely on orders, qualified inquiries, and bottom-line revenue — the only numbers that matter.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-bhq" className="py-24 bg-white dark:bg-[#0B0C10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF5C28]" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
              THE BRANDS HEADQUARTER DIFFERENCE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white leading-tight">
            We Don&apos;t Run Campaigns.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] to-[#EC4899]">
              We Build Growth Systems.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Anyone can boost a post. Building a predictable engine that scales sales month after month takes a disciplined system — here is ours.
          </p>
        </div>

        {/* 6-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFFERENCES.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-3xl bg-gray-50/80 dark:bg-[#161B26] border border-gray-200/80 dark:border-white/5 hover:border-[#FF5C28]/40 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/10 shadow-xs flex items-center justify-center text-[#FF5C28] mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-gray-900 dark:text-white mb-3">
                  {diff.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {diff.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
