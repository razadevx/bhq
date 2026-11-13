"use client";

import { useState } from "react";
import {
  Activity,
  Layers,
  BarChart,
  Eye,
  CheckCircle,
  MessageSquare,
  Lock,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export default function ClientPortalSection() {
  const [activeTab, setActiveTab] = useState<"metrics" | "creatives" | "roadmap">(
    "metrics"
  );

  return (
    <section id="portal" className="py-24 bg-gray-50/60 dark:bg-[#0E1017] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF5C28]" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
              TRANSPARENCY & TECHNOLOGY
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white leading-tight">
            BHQ Growth OS.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] to-[#EC4899]">
              Live 24/7 Client Portal.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400">
            No waiting for monthly PDF reports. Track live ad spend, real-time blended ROAS, UGC production pipelines, and daily Slack communication right from your custom dashboard.
          </p>
        </div>

        {/* Dashboard Mockup Container */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-white dark:bg-[#161B26] border border-gray-200/80 dark:border-white/10 shadow-2xl overflow-hidden">
          {/* Top Mockup Header Bar */}
          <div className="px-6 py-4 bg-gray-100/70 dark:bg-white/5 border-b border-gray-200/80 dark:border-white/5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <span className="text-xs font-mono font-semibold text-gray-500 dark:text-gray-400">
                portal.brandsheadquarter.com/live-insights
              </span>
            </div>

            {/* Portal navigation tabs */}
            <div className="flex items-center gap-1.5 bg-gray-200/60 dark:bg-white/10 p-1 rounded-xl">
              <button
                onClick={() => setActiveTab("metrics")}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "metrics"
                    ? "bg-white dark:bg-[#11141C] text-gray-900 dark:text-white shadow-xs"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900"
                }`}
              >
                Live Metrics
              </button>
              <button
                onClick={() => setActiveTab("creatives")}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "creatives"
                    ? "bg-white dark:bg-[#11141C] text-gray-900 dark:text-white shadow-xs"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900"
                }`}
              >
                Creative Pipeline
              </button>
              <button
                onClick={() => setActiveTab("roadmap")}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "roadmap"
                    ? "bg-white dark:bg-[#11141C] text-gray-900 dark:text-white shadow-xs"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900"
                }`}
              >
                Growth Roadmap
              </button>
            </div>
          </div>

          {/* Interactive Portal Content Area */}
          <div className="p-6 sm:p-8">
            {activeTab === "metrics" && (
              <div className="space-y-6 animate-in fade-in duration-300">
                {/* 4 Quick Metric Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                      30-Day Blended ROAS
                    </span>
                    <span className="text-2xl sm:text-3xl font-black text-[#FF5C28]">
                      4.28x
                    </span>
                    <span className="text-[10px] text-emerald-500 font-bold block mt-1">
                      ↑ +18.4% vs last period
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                      Gross Revenue (PKR)
                    </span>
                    <span className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
                      14.8M
                    </span>
                    <span className="text-[10px] text-emerald-500 font-bold block mt-1">
                      ↑ Target met on Day 22
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                      Avg. Cost Per Order
                    </span>
                    <span className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
                      Rs. 620
                    </span>
                    <span className="text-[10px] text-emerald-500 font-bold block mt-1">
                      ↓ -24% cheaper CPA
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                      Active Ad Creatives
                    </span>
                    <span className="text-2xl sm:text-3xl font-black text-purple-500">
                      34 Live
                    </span>
                    <span className="text-[10px] text-gray-400 font-semibold block mt-1">
                      6 new in A/B test
                    </span>
                  </div>
                </div>

                {/* Channel Breakdown Row */}
                <div className="p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                  <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-4">
                    Active Channel Allocations & Performance
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span className="text-gray-800 dark:text-gray-200">
                          Meta Advantage+ Catalog & UGC Reels
                        </span>
                        <span className="text-[#FF5C28] font-bold">4.4x ROAS (60% Budget)</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden">
                        <div className="h-full rounded-full bg-[#FF5C28]" style={{ width: "60%" }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span className="text-gray-800 dark:text-gray-200">
                          Google Performance Max & Brand Search
                        </span>
                        <span className="text-blue-500 font-bold">5.8x ROAS (25% Budget)</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden">
                        <div className="h-full rounded-full bg-blue-500" style={{ width: "25%" }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span className="text-gray-800 dark:text-gray-200">
                          TikTok Spark Ads & Creator Collaborations
                        </span>
                        <span className="text-pink-500 font-bold">3.2x ROAS (15% Budget)</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden">
                        <div className="h-full rounded-full bg-pink-500" style={{ width: "15%" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "creatives" && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-500 block mb-2">
                      Stage 1: Scripting (3)
                    </span>
                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-white dark:bg-[#11141C] border border-gray-200 dark:border-white/10 font-medium">
                        Hook 01: &quot;Why Pakistan&apos;s dermatologists hate this...&quot;
                      </div>
                      <div className="p-2.5 rounded-xl bg-white dark:bg-[#11141C] border border-gray-200 dark:border-white/10 font-medium">
                        Hook 02: &quot;Gym bag unboxing & 30-day challenge&quot;
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-500 block mb-2">
                      Stage 2: In Production (4)
                    </span>
                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-white dark:bg-[#11141C] border border-gray-200 dark:border-white/10 font-medium">
                        UGC Creator Areeba shoot completed
                      </div>
                      <div className="p-2.5 rounded-xl bg-white dark:bg-[#11141C] border border-gray-200 dark:border-white/10 font-medium">
                        High-speed studio macro product reel
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-500 block mb-2">
                      Stage 3: Live & Scaling (6)
                    </span>
                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-white dark:bg-[#11141C] border border-emerald-500/30 font-medium text-emerald-600 dark:text-emerald-400">
                        Top Winner: &quot;Viral Problem-Agitate-Solve&quot; (4.9x ROAS)
                      </div>
                      <div className="p-2.5 rounded-xl bg-white dark:bg-[#11141C] border border-gray-200 dark:border-white/10 font-medium">
                        COD Guarantee Trust Badge Ad
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "roadmap" && (
              <div className="p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center gap-3 text-xs font-bold text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Phase 1: Brand Foundation & Tracking Pixel Infrastructure (Completed)</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Phase 2: UGC Creative Testing Sprints & Cold Scaling (Active)</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-gray-500 dark:text-gray-400">
                  <div className="w-4 h-4 rounded-full border-2 border-dashed border-gray-400" />
                  <span>Phase 3: Omnichannel GCC / Dubai Expansion & Wholesale Wholesale Launch</span>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Security & Access Bar */}
          <div className="px-6 py-4 bg-gray-50 dark:bg-white/5 border-t border-gray-200/80 dark:border-white/5 flex flex-wrap items-center justify-between text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-emerald-500" />
              <span>Encrypted 256-bit Agency Workspace · Direct Dedicated Slack & WhatsApp Channel</span>
            </div>
            <span className="font-bold text-[#FF5C28]">
              Included Free for All Retainer Clients
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
