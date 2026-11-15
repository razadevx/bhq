"use client";

import { Award, ArrowUpRight, ArrowRight, ShieldCheck, Star } from "lucide-react";

interface PartnersSectionProps {
  onOpenContact?: () => void;
}

export default function PartnersSection({ onOpenContact }: PartnersSectionProps) {
  return (
    <section id="partners" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow Pill */}
        <div className="mb-4">
          <span className="inline-block px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-gray-600 bg-gray-100 border border-gray-200">
            CERTIFICATIONS
          </span>
        </div>

        {/* Heading */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 leading-[1.15]">
            <span>Certified</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] via-[#EC4899] to-[#8B5CF6] mt-1">
              Partners
            </span>
          </h2>
        </div>

        {/* Side-by-side Dual Certified Partner Cards (Matching Page 3 & 4 of PDF) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Google Premier Partner 2026 */}
          <div className="p-8 sm:p-10 rounded-[2.5rem] bg-white border border-gray-200/90 shadow-xs hover:shadow-xl hover:border-blue-400/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Partner Brand Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-black text-gray-900 tracking-tight">
                    <span className="text-blue-500">G</span>
                    <span className="text-red-500">o</span>
                    <span className="text-amber-500">o</span>
                    <span className="text-blue-500">g</span>
                    <span className="text-emerald-500">l</span>
                    <span className="text-red-500">e</span>
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-[11px] font-bold text-blue-700">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>Premier Partner 2026</span>
                </div>
              </div>

              <h3 className="text-2xl font-black text-gray-900 mb-3">
                Google Premier Partner 2026
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed font-normal mb-8">
                As a Google Premier Partner, we are among the top 3% of Google Partners recognized for maximizing campaign success, driving client growth, and demonstrating advanced Google Ads expertise across the platform.
              </p>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["Google Ads", "Analytics", "Search", "Display", "Performance Max"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
              >
                <span>View Certifications</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Shopify Select Partner */}
          <div className="p-8 sm:p-10 rounded-[2.5rem] bg-white border border-gray-200/90 shadow-xs hover:shadow-xl hover:border-emerald-400/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Partner Brand Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-black text-gray-900 tracking-tight flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-emerald-600 flex items-center justify-center text-white text-xs font-black">
                      S
                    </span>
                    <span>SHOPIFY SELECT PARTNER</span>
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 text-[11px] font-bold text-emerald-700">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Select Partner</span>
                </div>
              </div>

              <h3 className="text-2xl font-black text-gray-900 mb-3">
                Shopify Select Partner
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed font-normal mb-8">
                We build, customize, and optimize Shopify stores that convert visitors into loyal customers. From theme development to full custom storefronts, we make eCommerce extraordinary.
              </p>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["Store Setup", "Custom Themes", "App Integration", "CRO Optimization"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                <span>Build Your Store</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
