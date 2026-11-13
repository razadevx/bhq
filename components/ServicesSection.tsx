"use client";

import { useState } from "react";
import {
  Megaphone,
  Palette,
  Globe,
  Layers,
  Video,
  LineChart,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface ServicesSectionProps {
  onOpenContact: (serviceTitle?: string) => void;
}

const SERVICES = [
  {
    num: "01",
    tag: "01 / 06",
    title: "Digital Marketing",
    desc: "SEO, PPC, and social media campaigns that drive measurable ROI and sustainable growth.",
    icon: Megaphone,
    iconColor: "text-amber-500",
    bgColor: "bg-amber-50",
  },
  {
    num: "02",
    tag: "02 / 06",
    title: "Graphics Design",
    desc: "Eye-catching visuals and creative assets that tell your brand story with precision.",
    icon: Palette,
    iconColor: "text-rose-500",
    bgColor: "bg-rose-50",
  },
  {
    num: "03",
    tag: "03 / 06",
    title: "Web Development",
    desc: "Fast, responsive, conversion-optimized websites built with cutting-edge technology.",
    icon: Globe,
    iconColor: "text-purple-500",
    bgColor: "bg-purple-50",
  },
  {
    num: "04",
    tag: "04 / 06",
    title: "Branding & Strategy",
    desc: "Defining who you are, who you're for, and why you win with unforgettable identity systems.",
    icon: Layers,
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-50",
  },
  {
    num: "05",
    tag: "05 / 06",
    title: "Video Editing & UGC",
    desc: "Thumb-stopping content, UGC videos, and reels engineered to convert viewers into buyers.",
    icon: Video,
    iconColor: "text-sky-500",
    bgColor: "bg-sky-50",
  },
  {
    num: "06",
    tag: "06 / 06",
    title: "Consultation & Audits",
    desc: "Comprehensive growth roadmaps, revenue leakage audits, and strategic brand direction.",
    icon: LineChart,
    iconColor: "text-orange-500",
    bgColor: "bg-orange-50",
  },
];

export default function ServicesSection({ onOpenContact }: ServicesSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : SERVICES.length - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev < SERVICES.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow Pill */}
        <div className="mb-4">
          <span className="inline-block px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-gray-600 bg-gray-100 border border-gray-200">
            WHAT WE DO
          </span>
        </div>

        {/* Heading & Subtitle Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end justify-between mb-16">
          <div className="lg:col-span-7">
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-gray-900 leading-[1.05]">
              <span>Services That</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] via-[#EC4899] to-[#8B5CF6]">
                Drive Results
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <p className="text-base sm:text-lg text-gray-600 font-normal max-w-md ml-auto">
              From strategy to execution, we deliver end-to-end solutions that move the needle.
            </p>
          </div>
        </div>

        {/* Services Cards Grid / Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SERVICES.map((srv, index) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.num}
                onClick={() => onOpenContact(srv.title)}
                className="group relative p-8 sm:p-9 rounded-[2rem] bg-white border border-gray-200/90 shadow-xs hover:border-[#FF5C28]/40 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                {/* Large Background Watermark Number (As seen in Page 2 of reference PDF) */}
                <span className="absolute -bottom-8 -right-4 text-[7rem] sm:text-[8rem] font-black text-gray-100/70 select-none pointer-events-none group-hover:text-orange-50/70 transition-colors">
                  {srv.num}
                </span>

                <div className="relative z-10">
                  {/* Top Bar: Icon and Arrow Button */}
                  <div className="flex items-center justify-between mb-16">
                    <div
                      className={`w-12 h-12 rounded-2xl ${srv.bgColor} ${srv.iconColor} flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-[#FF5C28] group-hover:bg-[#FF5C28] group-hover:text-white transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="text-[11px] font-bold text-gray-400 tracking-wider block mb-2">
                    {srv.tag}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-3 group-hover:text-[#FF5C28] transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed font-normal">
                    {srv.desc}
                  </p>
                </div>

                <div className="relative z-10 pt-6 mt-6 border-t border-gray-100 flex items-center gap-1.5 text-xs font-bold text-[#FF5C28] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Explore Service</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Bottom Indicators (Matching Page 2) */}
        <div className="flex items-center justify-between pt-4">
          {/* Progress Pill Bar */}
          <div className="flex items-center gap-2">
            {SERVICES.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "w-8 bg-[#FF5C28]"
                    : "w-3 bg-gray-200 hover:bg-gray-300"
                }`}
              />
            ))}
            <span className="text-xs font-bold text-gray-400 ml-2">
              06 / 06
            </span>
          </div>

          {/* Circular Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous service"
              className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:border-gray-400 flex items-center justify-center text-gray-700 shadow-xs transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next service"
              className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:border-gray-400 flex items-center justify-center text-gray-700 shadow-xs transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
