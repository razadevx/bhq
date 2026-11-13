"use client";

import { Star, Quote, CheckCircle } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Hamza Tariq",
    role: "Founder & CEO",
    brand: "Atomic Muscles",
    result: "4.1x ROAS & 310% Revenue Surge",
    quote:
      "Before Brands Headquarter, we were burning cash on Facebook ads with zero accountability. The BHQ team completely rebuilt our creative hooks, revamped our Shopify checkout, and scaled our ROAS to 4.1x in 90 days. They operate like true equity partners.",
  },
  {
    name: "Zainab Malik",
    role: "Creative Director",
    brand: "Tebeena Wears",
    result: "2.4x Monthly Completed Orders",
    quote:
      "Their understanding of Pakistani fashion buyers and mobile shopping behavior is unmatched. Our website speed doubled, checkout drop-offs vanished, and our monthly orders jumped by 2.4x. Working with them has been a complete game changer.",
  },
  {
    name: "Dr. Bilal Ashraf",
    role: "Managing Director",
    brand: "Ashraf Naturals",
    result: "38% Reduction in CPA",
    quote:
      "Most agencies talk about likes and impressions. Brands Headquarter talks about gross profit margins, cost per acquisition, and repeat customer rates. They cut our CPA by 38% while scaling deliveries nationwide.",
  },
  {
    name: "Farhan Siddiqui",
    role: "Head of E-Commerce",
    brand: "Scents N Stories",
    result: "PKR 42M GMV Record Month",
    quote:
      "The Black Friday blitz executed by BHQ generated PKR 42M in GMV while keeping a 4.3x blended ROAS. Their real-time client portal and transparent communication made scaling effortless.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-50/60 dark:bg-[#0E1017] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF5C28]" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
              CLIENT STORIES & REVIEWS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white leading-tight">
            Don&apos;t Take Our Word for It.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] to-[#EC4899]">
              Listen to Our Clients.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400">
            The best proof isn&apos;t what we say about ourselves — it is what founders and CMOs say after scaling with Brands Headquarter.
          </p>
        </div>

        {/* 4 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <div
              key={index}
              className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#161B26] border border-gray-200/80 dark:border-white/5 shadow-xs hover:border-[#FF5C28]/40 hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  {/* 5 Stars */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Verified Result</span>
                  </span>
                </div>

                {/* Highlight Result Pill */}
                <div className="mb-4 inline-block px-3 py-1 rounded-xl bg-[#FF5C28]/10 text-[#FF5C28] text-xs font-extrabold">
                  {t.result}
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed italic mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-6 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="text-base font-black text-gray-900 dark:text-white">
                    {t.name}
                  </h4>
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                    {t.role}, <span className="text-[#FF5C28]">{t.brand}</span>
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-[#FF5C28]">
                  <Quote className="w-5 h-5 opacity-60" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
