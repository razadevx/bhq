"use client";

import { useState } from "react";
import { ArrowUpRight, TrendingUp, X, CheckCircle2 } from "lucide-react";

interface CaseStudiesProps {
  onOpenContact: (brandCase?: string) => void;
}

interface CaseStudy {
  id: string;
  brand: string;
  industry: string;
  highlightMetric: string;
  metricLabel: string;
  service: string;
  summary: string;
  challenge: string;
  strategy: string;
  execution: string;
  results: string[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "atomic-muscles",
    brand: "Atomic Muscles",
    industry: "Health & Sports Nutrition",
    highlightMetric: "4.1x ROAS",
    metricLabel: "Achieved in 90 Days",
    service: "E-commerce growth & performance marketing",
    summary:
      "Scaled Pakistan's leading fitness supplements brand by overhauling creative hooks, setting up server-side Meta CAPI, and deploying multi-tier retargeting.",
    challenge:
      "Customer acquisition costs were skyrocketing, and ad fatigue resulted in a low 1.8x ROAS with disjointed creative testing.",
    strategy:
      "Re-engineered UGC video creatives targeting gym-goers, created a high-converting bundle offer on Shopify, and scaled Meta Advantage+ campaigns.",
    execution:
      "Produced 24 direct-response UGC reels with fitness influencers, installed server-side CAPI for zero signal loss, and launched rapid iteration creative sprints.",
    results: [
      "ROAS surged from 1.8x to 4.1x within 90 days",
      "+310% increase in monthly gross order volume",
      "Over 40% repeat order rate driven by automated email flows",
    ],
  },
  {
    id: "tebeena-wears",
    brand: "Tebeena Wears",
    industry: "Fashion & Women's Apparel",
    highlightMetric: "2x",
    metricLabel: "Monthly Orders",
    service: "Fashion ad strategy & campaigns",
    summary:
      "Transforming high fashion interest into direct checkout orders through mobile-first catalog ads and influencer creator partnerships.",
    challenge:
      "Massive Instagram follower count but very low website conversion rate, leading to cart abandonment and high bounce rate.",
    strategy:
      "Optimized the mobile Shopify experience for under 2.2-second load times, launched lookalike audience targeting, and implemented direct 1-click WhatsApp order options.",
    execution:
      "Restructured Facebook Advantage+ catalog ads, revamped product pages with social proof widgets, and introduced limited-time flash discount funnels.",
    results: [
      "2x increase in completed monthly orders in 60 days",
      "Cart checkout drop-off decreased by 46%",
      "Achieved average order value (AOV) of PKR 7,500+",
    ],
  },
  {
    id: "ashraf-naturals",
    brand: "Ashraf Naturals",
    industry: "Organic Skincare & Wellness",
    highlightMetric: "38% Lower CPA",
    metricLabel: "Customer Acquisition Cost",
    service: "Digital ads & customer acquisition",
    summary:
      "Lowered acquisition cost while expanding into nationwide delivery across 40+ Pakistani cities with targeted TikTok & Meta campaigns.",
    challenge:
      "Audience skepticism regarding organic claims was leading to expensive customer acquisition costs.",
    strategy:
      "Shot authentic UGC dermatologist reviews and customer transformation reels focusing on real results and cash-on-delivery trust badges.",
    execution:
      "Deployed high-intent TikTok Spark Ads, launched before/after video hooks, and set up automated SMS abandoned cart recovery sequences.",
    results: [
      "Customer Acquisition Cost (CPA) dropped by 38%",
      "TikTok Ads generated 4.8x ROAS on top-selling bundles",
      "Over 12,000 new verified customers acquired in 6 months",
    ],
  },
  {
    id: "herbicure-naturals",
    brand: "Herbicure Naturals",
    industry: "Herbal Remedies & Personal Care",
    highlightMetric: "3x",
    metricLabel: "Instagram Reach",
    service: "Brand growth & creative marketing",
    summary:
      "Rebranding visual assets and executing high-velocity reel content that turned organic reach into an automated customer acquisition flywheel.",
    challenge:
      "Outdated brand presence and low engagement on social channels with stiff competition in herbal skincare.",
    strategy:
      "Full packaging redesign, aesthetic brand guidelines, and high-frequency lifestyle video content combined with Google Performance Max ads.",
    execution:
      "Created 30 aesthetic lifestyle reels per month, ran influencer product seeding campaigns, and paired viral reels with retargeting ads.",
    results: [
      "3x Instagram organic reach and engagement within 120 days",
      "Compound +150,000 active social followers gained",
      "Google Search impression share reached 74% in target categories",
    ],
  },
];

export default function CaseStudiesSection({ onOpenContact }: CaseStudiesProps) {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <section id="case-studies" className="py-24 bg-gray-50/50 relative border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header (Exact from PDF Page 6) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gray-200 bg-white mb-4 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#FF5C28]" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-700">
                PROVEN RESULTS
              </span>
            </div>

            {/* H2 Heading */}
            <h2 className="display-h2 text-gray-900">
              <span className="font-light text-gray-700">Real Brands. Real Numbers. </span>
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] to-[#EC4899]">
                Real Growth.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-lead text-gray-600">
              We&apos;d rather show you than tell you. Here&apos;s what happened when these brands trusted us with their growth.
            </p>
          </div>

          <button
            onClick={() => onOpenContact("All Case Studies")}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#FF5C28] hover:text-[#e64a19] transition-colors group self-start md:self-end"
          >
            <span>See All Case Studies</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* 4 Case Studies Grid (Exact from PDF Page 6 Table) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              onClick={() => setSelectedCase(study)}
              className="group cursor-pointer rounded-3xl bg-white border border-gray-200/90 hover:border-[#FF5C28]/60 p-7 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden"
            >
              <div>
                {/* Result Highlight First (Per PDF Page 6 instructions) */}
                <div className="mb-4">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#FF5C28] tracking-tight block">
                    {study.highlightMetric}
                  </span>
                  <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mt-0.5">
                    {study.metricLabel}
                  </span>
                </div>

                <div className="mb-4">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">
                    {study.industry}
                  </span>
                </div>

                {/* Brand Name as H3 */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-[#FF5C28] transition-colors mb-2">
                  {study.brand}
                </h3>

                <p className="text-xs font-semibold text-gray-500 mb-3">
                  What we did: <span className="text-gray-800">{study.service}</span>
                </p>

                <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed font-normal">
                  {study.summary}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-5 mt-6 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#FF5C28]">
                <span>Challenge → Strategy → Results</span>
                <span className="w-7 h-7 rounded-full bg-orange-50 group-hover:bg-[#FF5C28] group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Row (Exact from PDF Page 6) */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenContact("Custom Case Study Walkthrough")}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#FF5C28] text-white hover:bg-[#e64a19] shadow-lg shadow-[#FF5C28]/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>See All Case Studies →</span>
          </button>
        </div>
      </div>

      {/* Case Study Detail Modal (Challenge -> Strategy -> Execution -> Results) */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-9 shadow-2xl max-h-[90vh] overflow-y-auto border border-gray-100">
            {/* Close Button */}
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-orange-50 text-[#FF5C28]">
                {selectedCase.industry}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mt-3">
                {selectedCase.brand}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-gray-500 mt-1">
                {selectedCase.service}
              </p>
              <div className="mt-4 p-4 rounded-2xl bg-orange-50/60 border border-orange-100 flex items-center justify-between">
                <span className="text-xs font-bold text-gray-700">Key Outcome:</span>
                <span className="text-xl font-black text-[#FF5C28]">
                  {selectedCase.highlightMetric} ({selectedCase.metricLabel})
                </span>
              </div>
            </div>

            {/* Step-by-Step Breakdown */}
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  1. The Challenge
                </h4>
                <p className="text-gray-600 leading-relaxed">{selectedCase.challenge}</p>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  2. Growth Strategy
                </h4>
                <p className="text-gray-600 leading-relaxed">{selectedCase.strategy}</p>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  3. Execution Details
                </h4>
                <p className="text-gray-600 leading-relaxed">{selectedCase.execution}</p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100">
                <h4 className="font-bold text-emerald-900 mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  4. Measurable Results
                </h4>
                <ul className="space-y-1.5">
                  {selectedCase.results.map((res, i) => (
                    <li key={i} className="flex items-start gap-2 text-emerald-800 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal CTA */}
            <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-gray-500">Want similar results for your store?</span>
              <button
                onClick={() => {
                  setSelectedCase(null);
                  onOpenContact(`Case Study: ${selectedCase.brand}`);
                }}
                className="px-5 py-2.5 rounded-full text-xs font-bold bg-[#FF5C28] text-white hover:bg-[#e64a19] shadow-xs transition-colors"
              >
                Discuss My Brand →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
