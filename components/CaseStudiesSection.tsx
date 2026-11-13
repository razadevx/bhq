"use client";

import { useState } from "react";
import { ArrowUpRight, TrendingUp, Sparkles, X, CheckCircle2 } from "lucide-react";

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
  results: string[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "atomic-muscles",
    brand: "Atomic Muscles",
    industry: "Health & Sports Nutrition",
    highlightMetric: "4.1x ROAS",
    metricLabel: "Achieved in 90 Days",
    service: "E-commerce Growth & Performance Marketing",
    summary:
      "Scaled Pakistan's leading fitness supplements brand by overhauling creative hooks, setting up server-side Meta CAPI, and deploying multi-tier retargeting.",
    challenge:
      "Customer acquisition costs were skyrocketing, and ad fatigue resulted in a low 1.8x ROAS with disjointed creative testing.",
    strategy:
      "Re-engineered UGC video creatives targeting gym-goers, created a high-converting bundle offer on Shopify, and scaled Meta Advantage+ campaigns.",
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
    highlightMetric: "2.4x",
    metricLabel: "Monthly Order Growth",
    service: "Fashion Ad Strategy & Conversion Funnel",
    summary:
      "Transforming high fashion interest into direct checkout orders through mobile-first catalog ads and influencer creator partnerships.",
    challenge:
      "Massive Instagram follower count but very low website conversion rate, leading to cart abandonment and high bounce rate.",
    strategy:
      "Optimized the mobile Shopify experience for under 2.2-second load times, launched lookalike audience targeting, and implemented direct 1-click WhatsApp order options.",
    results: [
      "2.4x increase in completed monthly orders",
      "Cart checkout drop-off decreased by 46%",
      "Achieved average order value (AOV) of PKR 7,500+",
    ],
  },
  {
    id: "ashraf-naturals",
    brand: "Ashraf Naturals",
    industry: "Organic Skincare & Wellness",
    highlightMetric: "-38% CPA",
    metricLabel: "Customer Acquisition Cost",
    service: "Digital Ads & Customer Acquisition",
    summary:
      "Lowered acquisition cost while expanding into nationwide delivery across 40+ Pakistani cities with targeted TikTok & Meta campaigns.",
    challenge:
      "Audience skepticism regarding organic claims was leading to expensive customer acquisition costs.",
    strategy:
      "Shot authentic UGC dermatologist reviews and customer transformation reels focusing on real results and cash-on-delivery trust badges.",
    results: [
      "Customer Acquisition Cost dropped by 38%",
      "TikTok Ads generated 4.8x ROAS on top-selling bundles",
      "Over 12,000 new customers acquired in 6 months",
    ],
  },
  {
    id: "herbicure-naturals",
    brand: "Herbicure Naturals",
    industry: "Herbal Remedies & Personal Care",
    highlightMetric: "3.2x",
    metricLabel: "Instagram Reach & Revenue",
    service: "Brand Growth & Creative Video Marketing",
    summary:
      "Rebranding visual assets and executing high-velocity reel content that turned organic reach into an automated customer acquisition flywheel.",
    challenge:
      "Outdated brand presence and low engagement on social channels with stiff competition in herbal skincare.",
    strategy:
      "Full packaging redesign, aesthetic brand guidelines, and high-frequency lifestyle video content combined with Google Performance Max ads.",
    results: [
      "3.2x organic reach across Instagram and TikTok",
      "Compound +150,000 active social followers",
      "Google Search impression share reached 74% in target categories",
    ],
  },
  {
    id: "scents-n-stories",
    brand: "Scents N Stories",
    industry: "Perfumes & Luxury Fragrances",
    highlightMetric: "PKR 42M",
    metricLabel: "Monthly GMV Scale",
    service: "Omnichannel Paid Media & Black Friday Blitz",
    summary:
      "Executed an aggressive seasonal scaling playbook across Meta, TikTok, and Google search, capturing maximum fragrance market share.",
    challenge:
      "Scaling ad spend beyond PKR 5M/month without eroding target profit margins or saturating core audiences.",
    strategy:
      "Audience segmentation across fragrance scent families, personalized dynamic ads, and high-converting Black Friday landing pages.",
    results: [
      "Peak monthly revenue exceeded PKR 42M GMV",
      "Sustained 4.3x blended ROAS during peak campaign season",
      "Over 25,000 orders fulfilled in one single month",
    ],
  },
  {
    id: "simfer-pakistan",
    brand: "Simfer Pakistan",
    industry: "Home Appliances & Living",
    highlightMetric: "5.2x",
    metricLabel: "Qualified Inquiries & Dealer Footfall",
    service: "Brand Positioning & High-Intent Lead Gen",
    summary:
      "Positioning high-end European built-in kitchen appliances across Pakistan with localized luxury video campaigns and dealer locator tools.",
    challenge:
      "High-ticket appliances require educated decision-making and offline showroom visits rather than impulse buying.",
    strategy:
      "High-production cooking and interior design show reels, geo-targeted showroom campaigns in Karachi, Lahore, and Islamabad.",
    results: [
      "5.2x increase in qualified showroom inquiries",
      "Cost per qualified lead decreased by 54%",
      "Expanded distribution partner network nationwide",
    ],
  },
];

export default function CaseStudiesSection({ onOpenContact }: CaseStudiesProps) {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <section id="case-studies" className="py-24 bg-gray-50/60 dark:bg-[#0E1017] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FF5C28]" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                PROVEN RESULTS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white leading-tight">
              Real Brands. Real Numbers.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] to-[#EC4899]">
                Real Growth.
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400">
              We&apos;d rather show you than tell you. Here is what happened when these brands trusted us with their scaling.
            </p>
          </div>

          <button
            onClick={() => onOpenContact("Case Study Discussion")}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#FF5C28] hover:text-[#e64a19] transition-colors group"
          >
            <span>See How We Can Scale Your Brand</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              onClick={() => setSelectedCase(study)}
              className="group cursor-pointer flex flex-col justify-between p-8 rounded-3xl bg-white dark:bg-[#161B26] border border-gray-200/80 dark:border-white/5 hover:border-[#FF5C28]/60 shadow-xs hover:shadow-xl hover:shadow-[#FF5C28]/10 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300">
                    {study.industry}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-gray-700 dark:text-gray-300 group-hover:bg-[#FF5C28] group-hover:text-white transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Big Metric Box */}
                <div className="mb-6 p-5 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100/70 dark:from-white/5 dark:to-transparent border border-gray-200/50 dark:border-white/5">
                  <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] to-[#EC4899] tracking-tight">
                    {study.highlightMetric}
                  </div>
                  <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mt-1">
                    {study.metricLabel}
                  </div>
                </div>

                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2 group-hover:text-[#FF5C28] transition-colors">
                  {study.brand}
                </h3>
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-3">
                  {study.service}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                  {study.summary}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-xs font-bold text-[#FF5C28]">
                <span>View Full Case Breakdown</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#161B26] rounded-3xl border border-gray-200 dark:border-white/10 p-8 shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-gray-400 hover:text-gray-700 dark:hover:text-white bg-gray-100 dark:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FF5C28]/15 text-[#FF5C28]">
                {selectedCase.industry}
              </span>
              <span className="text-xs text-gray-400">Verified Case Study</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-2">
              {selectedCase.brand}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-6">
              {selectedCase.service}
            </p>

            {/* Metric pill */}
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 mb-6 flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-semibold block">
                  Top Achievement
                </span>
                <span className="text-2xl sm:text-3xl font-black text-[#FF5C28]">
                  {selectedCase.highlightMetric}
                </span>
              </div>
              <span className="text-xs font-bold text-gray-600 dark:text-gray-300">
                {selectedCase.metricLabel}
              </span>
            </div>

            {/* Challenge & Strategy */}
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                  The Challenge
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {selectedCase.challenge}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                  Our Growth Strategy
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {selectedCase.strategy}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Key Delivered Results
                </h4>
                <div className="space-y-2">
                  {selectedCase.results.map((res, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-gray-800 dark:text-gray-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#FF5C28] shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal CTA */}
            <div className="pt-6 border-t border-gray-100 dark:border-white/10 flex items-center justify-between">
              <button
                onClick={() => {
                  const bName = selectedCase.brand;
                  setSelectedCase(null);
                  onOpenContact(`Case: ${bName}`);
                }}
                className="w-full py-3.5 rounded-full bg-[#FF5C28] text-white font-bold text-sm hover:bg-[#e64a19] transition-colors shadow-lg shadow-[#FF5C28]/25"
              >
                Scale My Business Like {selectedCase.brand}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
