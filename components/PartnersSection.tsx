"use client";

import { Award, ShieldCheck, CheckCircle2 } from "lucide-react";

const PARTNERS = [
  {
    name: "Google Premier Partner",
    badge: "Top 3% in Pakistan",
    desc: "Certified in Google Search, Performance Max, Display, and YouTube Video advertising.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Shopify Partner Agency",
    badge: "Official Development Experts",
    desc: "Custom storefront architecture, liquid theme customization, and Shopify Plus checkout optimization.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "Meta Certified Company",
    badge: "Media Buying & Creative",
    desc: "Direct access to Meta agency account support, server-side CAPI integration, and beta ad formats.",
    color: "from-[#FF5C28] to-pink-600",
  },
  {
    name: "TikTok Marketing Partner",
    badge: "Fast-Growing Video Ads",
    desc: "High-velocity Spark Ads, creator licensing, and TikTok Shop conversion funnels.",
    color: "from-purple-500 to-pink-500",
  },
];

export default function PartnersSection() {
  return (
    <section className="py-20 bg-white dark:bg-[#0B0C10] border-t border-gray-100 dark:border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FF5C28]" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
              OFFICIAL ACCREDITATIONS
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-gray-900 dark:text-white">
            Certified Partner of the Platforms That Drive Modern Commerce
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PARTNERS.map((partner, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gray-50/70 dark:bg-[#161B26] border border-gray-200/80 dark:border-white/5 hover:border-[#FF5C28]/40 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${partner.color} text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform`}
                >
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white dark:bg-white/10 text-gray-600 dark:text-gray-300">
                  {partner.badge}
                </span>
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                {partner.name}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                {partner.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
