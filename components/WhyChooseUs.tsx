"use client";

import {
  Rocket,
  BarChart3,
  Users,
  Palette,
  Clock,
  Award,
} from "lucide-react";

const REASONS = [
  {
    icon: Rocket,
    title: "Full-Service, One Team",
    desc: "From strategy to execution — marketing, design, development, and analytics all under one roof. No juggling multiple agencies.",
    iconColor: "text-amber-500",
    bgColor: "bg-amber-50",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Everything",
    desc: "Every decision backed by analytics. We don't guess — we test, measure, and optimize for maximum ROI.",
    iconColor: "text-rose-500",
    bgColor: "bg-rose-50",
  },
  {
    icon: Users,
    title: "200+ Brands Trust Us",
    desc: "From local startups to high-profile organizations like Saudi Tourism & Ministry of Hajj — proven at every scale.",
    iconColor: "text-purple-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: Palette,
    title: "Creative That Converts",
    desc: "Award-worthy design meets performance marketing. We create visuals that don't just look good — they drive sales.",
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-50",
  },
  {
    icon: Clock,
    title: "9+ Years of Excellence",
    desc: "Since 2016, we've navigated every algorithm change and market shift. Experience that money can't buy.",
    iconColor: "text-sky-500",
    bgColor: "bg-sky-50",
  },
  {
    icon: Award,
    title: "Shopify Select Partner",
    desc: "Certified expertise in building and scaling e-commerce stores that generate consistent, scalable revenue.",
    iconColor: "text-amber-600",
    bgColor: "bg-amber-50",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-bhq" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow Pill */}
        <div className="mb-4">
          <span className="inline-block px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-gray-600 bg-gray-100 border border-gray-200">
            WHY BRANDS HEADQUARTER
          </span>
        </div>

        {/* Heading & Subtitle */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-gray-900 leading-[1.05]">
            <span>Why Choose</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] via-[#EC4899] to-[#8B5CF6]">
              Brands Headquarter?
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 font-normal">
            We&apos;re not just another agency. Here&apos;s what makes working with us different.
          </p>
        </div>

        {/* 6 Bento Grid Cards (As seen in Page 2 of reference PDF) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((r, index) => {
            const Icon = r.icon;
            return (
              <div
                key={index}
                className="p-8 sm:p-9 rounded-2xl bg-white border border-gray-200/90 shadow-xs hover:border-[#FF5C28]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div
                  className={`w-11 h-11 rounded-xl ${r.bgColor} ${r.iconColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2.5">
                  {r.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  {r.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
