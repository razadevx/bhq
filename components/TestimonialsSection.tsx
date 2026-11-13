"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const STATS = [
  { value: "PKR 500M+", label: "Revenue generated for brands" },
  { value: "98%", label: "Client retention rate" },
  { value: "45+", label: "Industries served" },
];

const REVIEWS = [
  {
    quote:
      "I made a design for my hair oil with Brands Headquarter and they really did a great job, staff was so cooperative, unlike others they take the smallest of your work so serious, my experience was really good with them.",
    author: "Azan Khan",
    role: "Brand Director",
    company: "Atomic Care",
  },
  {
    quote:
      "I had a great experience with Brands Headquarter. Their team was professional, responsive, and really understood what I wanted. I got my brand identity designed by them, and it's turning out great. Definitely recommended!!",
    author: "Ar. Khizra Anjum Saleemi",
    role: "Architect & Founder",
    company: "KAS Living",
  },
  {
    quote:
      "I had a great experience working with Brands Headquarter on my Shopify website development and Meta Ads. The team was professional, responsive, and understood exactly what I wanted for my brand. They built my store with zero friction.",
    author: "Hassan Bin Ali",
    role: "Founder",
    company: "Mezuha Official",
  },
  {
    quote:
      "The Black Friday scale campaign executed by Brands Headquarter generated record sales while keeping our blended ROAS above 4.2x. Their live communication and dedicated squad make scaling effortless.",
    author: "Hamza Tariq",
    role: "Managing Director",
    company: "Tebeena Wears",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i > 0 ? i - 1 : REVIEWS.length - 1));
  const next = () => setIndex((i) => (i < REVIEWS.length - 1 ? i + 1 : 0));

  return (
    <section id="case-studies" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow Pill */}
        <div className="mb-4">
          <span className="inline-block px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-gray-600 bg-gray-100 border border-gray-200">
            CLIENT REVIEWS
          </span>
        </div>

        {/* Heading */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-gray-900 leading-[1.05]">
            <span>Real Results,</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] via-[#EC4899] to-[#8B5CF6]">
              Real Growth
            </span>
          </h2>
        </div>

        {/* 3 Top Stat Boxes (Matching Page 5 of PDF) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white border border-gray-200/90 shadow-xs text-center hover:border-[#FF5C28]/40 transition-colors"
            >
              <div className="text-4xl sm:text-5xl font-black text-[#FF5C28] tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-gray-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex justify-end gap-2 mb-6">
          <button
            onClick={prev}
            aria-label="Previous review"
            className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:border-gray-400 flex items-center justify-center text-gray-700 shadow-xs transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            aria-label="Next review"
            className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:border-gray-400 flex items-center justify-center text-gray-700 shadow-xs transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {REVIEWS.slice(0, 3).map((rev, i) => (
            <div
              key={i}
              className="p-8 sm:p-9 rounded-[2rem] bg-white border border-gray-200/90 shadow-xs hover:shadow-lg hover:border-[#FF5C28]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Yellow/Orange Quote Icon */}
                <div className="text-amber-400 mb-4 opacity-75">
                  <Quote className="w-7 h-7" />
                </div>

                <p className="text-sm text-gray-600 leading-relaxed font-normal mb-8">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div>
                {/* 5 Yellow Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <h4 className="text-base font-bold text-gray-900">
                  {rev.author}
                </h4>
                <p className="text-xs text-gray-400 font-medium mt-0.5">
                  {rev.role}, {rev.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center items-center gap-1.5 pt-4">
          {[0, 1, 2, 3, 4].map((dot) => (
            <span
              key={dot}
              className={`h-1.5 rounded-full transition-all ${
                dot === 2 ? "w-6 bg-amber-400" : "w-1.5 bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
