"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, ArrowUpRight, CheckCircle2 } from "lucide-react";

const STATS = [
  { value: "PKR 500M+", label: "Managed Ad Spend for Brands" },
  { value: "4.1x", label: "Peak Blended ROAS Achieved" },
  { value: "200+", label: "Brands Scaled Nationwide" },
];

const REVIEWS = [
  {
    quote:
      "Brands Headquarter took Atomic Muscles from an ad fatigue plateau to 4.1x ROAS within 90 days. Their UGC scripts and rapid creative testing completely changed our unit economics.",
    author: "Azan Khan",
    role: "Brand Director",
    company: "Atomic Care & Nutrition",
    result: "4.1x ROAS in 90 Days",
  },
  {
    quote:
      "Working with Brands Headquarter transformed our online orders. They redesigned our Shopify store for mobile conversions and scaled our Meta Advantage+ campaigns to 2x monthly volume without burning budget.",
    author: "Hamza Tariq",
    role: "Managing Director",
    company: "Tebeena Wears",
    result: "2x Monthly Orders",
  },
  {
    quote:
      "Their in-house UGC team shot transformation reels and dermatologist reviews that lowered our customer acquisition cost (CPA) by 38%. The transparency in reporting is unmatched.",
    author: "Ashraf Rehman",
    role: "Founder & CEO",
    company: "Ashraf Naturals",
    result: "38% Lower CPA",
  },
  {
    quote:
      "I got our brand identity and digital packaging designed by Brands Headquarter. They take the smallest details seriously and build aesthetics that genuinely resonate with high-end buyers.",
    author: "Ar. Khizra Anjum Saleemi",
    role: "Principal Architect & Founder",
    company: "KAS Living",
    result: "Full Brand Identity",
  },
  {
    quote:
      "From Shopify storefront optimization to multi-channel ad scaling, Brands Headquarter works as an integrated extension of our team. Fast turnaround and zero finger-pointing.",
    author: "Hassan Bin Ali",
    role: "Founder",
    company: "Mezuha Official",
    result: "Seamless Store Scale",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i > 0 ? i - 1 : REVIEWS.length - 1));
  const next = () => setIndex((i) => (i < REVIEWS.length - 1 ? i + 1 : 0));

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow Pill (Exact from PDF Page 6) */}
        <div className="mb-4">
          <span className="inline-block px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-gray-600 bg-gray-100 border border-gray-200">
            CLIENT STORIES
          </span>
        </div>

        {/* Heading & Subtitle Grid */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-3xl">
            <h2 className="display-h2 text-gray-900">
              <span className="font-light text-gray-700">Don&apos;t Take </span>
              <span className="font-extrabold gradient-heading-accent">
                Our Word for It
              </span>
            </h2>
            <p className="mt-4 text-lead text-gray-600">
              The best proof isn&apos;t what we say about ourselves — it&apos;s what our clients say after working with us.
            </p>
          </div>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-700 hover:text-[#FF5C28] transition-colors self-start md:self-end"
          >
            <span>Verified 5.0 Star Google Reviews</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 3 Top Stat Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-16">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="p-7 sm:p-8 rounded-3xl bg-white border border-gray-200/90 shadow-xs text-center hover:border-[#FF5C28]/40 hover:shadow-lg transition-all"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-[#FF5C28] tracking-tight mb-1.5">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel & Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.slice(0, 3).map((rev, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-gray-50/70 border border-gray-200/80 hover:bg-white hover:border-[#FF5C28]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Stars and Result Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-1 text-[#FF5C28]">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-orange-50 text-[#FF5C28] border border-orange-100">
                    {rev.result}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-gray-200 mb-3" />
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic mb-6">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FF5C28] to-[#EC4899] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  {rev.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-gray-900 leading-tight">
                    {rev.author}
                  </h4>
                  <p className="text-[11px] text-gray-500 font-medium">
                    {rev.role} · <span className="text-gray-700 font-semibold">{rev.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
