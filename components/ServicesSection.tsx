"use client";

import { useState } from "react";
import {
  TrendingUp,
  Palette,
  Video,
  ShoppingBag,
  Share2,
  Search,
  ArrowRight,
  CheckCircle2,
  Zap,
} from "lucide-react";

interface ServicesSectionProps {
  onOpenContact: (serviceTitle?: string) => void;
}

const SERVICES = [
  {
    id: "performance-marketing",
    number: "01",
    title: "Performance Marketing",
    icon: TrendingUp,
    badge: "High ROAS",
    tagline: "Every rupee of ad spend, accountable.",
    description:
      "We run Meta, Google, and TikTok ads like it's our own money — testing creatives weekly, cutting what doesn't sell and scaling what does. You get lower cost per customer and a ROAS you can actually see.",
    deliverables: [
      "Meta Ads (Facebook & Instagram)",
      "Google Ads & Performance Max",
      "TikTok Ads & Spark Ads",
      "Dynamic Retargeting Funnels",
      "Server-side CAPI, Pixel & GA4 Setup",
      "Weekly Creative Testing & Budget Scaling",
    ],
    metric: "Average 3.8x - 5.2x ROAS",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: "branding-strategy",
    number: "02",
    title: "Branding & Strategy",
    icon: Palette,
    badge: "Brand Equity",
    tagline: "Be the brand people pick — even when you're not the cheapest.",
    description:
      "We define who you are, who you're for and why you win, then turn it into a name, logo, visual identity, and voice that sticks in customer memory and drives repeat loyalty.",
    deliverables: [
      "Brand Strategy & Positioning",
      "Logo & Comprehensive Identity Design",
      "Brand Guidelines & Design Systems",
      "Market & Competitor Positioning",
      "Core Messaging, Tone of Voice & Copy",
      "Packaging & Unboxing Experience",
    ],
    metric: "+65% Higher Brand Recall",
    color: "from-purple-500 to-pink-600",
  },
  {
    id: "creative-production",
    number: "03",
    title: "Creative Production & UGC",
    icon: Video,
    badge: "High Conversion",
    tagline: "Thumb-stopping content, made to sell.",
    description:
      "Your ads are only as good as your creative. Our in-house team shoots UGC videos, high-converting product photography, and reels engineered for the first three seconds — and the checkout.",
    deliverables: [
      "UGC & Influencer Creator Network",
      "High-End Product Photo & Video Shoots",
      "Commercial Production & Scripting",
      "Reels, TikToks & Short-form Video",
      "Direct-Response Ad Creative & Motion",
      "Drone Shoots & Studio Photography",
    ],
    metric: "3x Higher Click-Through Rate",
    color: "from-[#FF5C28] to-amber-500",
  },
  {
    id: "shopify-web-development",
    number: "04",
    title: "Shopify & Web Development",
    icon: ShoppingBag,
    badge: "Fast & Frictionless",
    tagline: "A store that sells while you sleep.",
    description:
      "Fast, mobile-first Shopify stores and Next.js web applications built around one thing: turning visitors into buyers. Clean aesthetic design, frictionless checkout, and instant page speeds.",
    deliverables: [
      "Shopify & Shopify Plus Store Builds",
      "Custom Next.js & Headless Web Apps",
      "High-Converting Landing Pages",
      "Mobile Speed & Core Web Vitals Optimization",
      "Conversion Rate Optimization (CRO)",
      "Checkout Customization & Local Payment Gateways",
    ],
    metric: "+48% Higher Conversion Rate",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "social-media-marketing",
    number: "05",
    title: "Social Media Marketing",
    icon: Share2,
    badge: "Community Growth",
    tagline: "Stay top of mind — and top of feed.",
    description:
      "Consistent, on-brand content across Instagram, Facebook, TikTok, and LinkedIn, backed by an organized content calendar, active community management, and weekly engagement reports.",
    deliverables: [
      "Social Media Growth Strategy",
      "Monthly Curated Content Calendars",
      "High-Fidelity Graphic Design & Copywriting",
      "Active DM & Comment Community Care",
      "Influencer Outreach & Seeding",
      "Detailed Monthly Performance Reports",
    ],
    metric: "Consistent Organic Engagement",
    color: "from-rose-500 to-red-600",
  },
  {
    id: "seo-organic-growth",
    number: "06",
    title: "SEO & Organic Growth",
    icon: Search,
    badge: "Compound Traffic",
    tagline: "Get found by people already looking to buy.",
    description:
      "We help your website rank on Google for the high-intent searches that bring qualified buyers — organic traffic that keeps compounding every month without paying for every single click.",
    deliverables: [
      "Technical SEO Audits & Core Fixes",
      "On-Page SEO & Content Optimization",
      "High-Intent Commercial Keyword Research",
      "Shopify & E-Commerce Category SEO",
      "Local SEO (Google Business Profiles in Lahore/Karachi/ISB)",
      "Authority Building & Digital PR",
    ],
    metric: "100% Organic, Zero Ad Cost",
    color: "from-cyan-500 to-blue-600",
  },
];

export default function ServicesSection({ onOpenContact }: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredServices =
    activeTab === "all"
      ? SERVICES
      : SERVICES.filter((s) => s.id === activeTab);

  return (
    <section id="services" className="py-24 bg-gray-50/60 dark:bg-[#0B0C10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FF5C28]" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                WHAT WE DO · CRAFT
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white leading-tight">
              Digital Marketing Services That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] to-[#EC4899]">
                Pay for Themselves.
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400">
              Six core services. One goal. Every one of them is built to bring you paying customers — and they work even harder together.
            </p>
          </div>

          <div>
            <button
              onClick={() => onOpenContact("Free Audit")}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold bg-[#FF5C28] text-white hover:bg-[#e64a19] transition-all shadow-md shadow-[#FF5C28]/20 group whitespace-nowrap"
            >
              <span>Get a Free Brand Audit</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === "all"
                ? "bg-[#11141C] dark:bg-white text-white dark:text-[#11141C] shadow-sm"
                : "bg-white dark:bg-[#161B26] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/5 hover:border-[#FF5C28]"
            }`}
          >
            All Services (6)
          </button>
          {SERVICES.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === s.id
                  ? "bg-[#11141C] dark:bg-white text-white dark:text-[#11141C] shadow-sm"
                  : "bg-white dark:bg-[#161B26] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/5 hover:border-[#FF5C28]"
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between p-8 rounded-3xl bg-white dark:bg-[#161B26] border border-gray-200/80 dark:border-white/5 hover:border-[#FF5C28]/50 shadow-xs hover:shadow-xl hover:shadow-[#FF5C28]/10 transition-all duration-300"
              >
                <div>
                  {/* Card top */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-white/10 flex items-center justify-center text-gray-900 dark:text-white group-hover:bg-[#FF5C28] group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-black text-gray-400 dark:text-gray-500">
                        {service.number}
                      </span>
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#FF5C28] mb-3">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-gray-100 dark:border-white/5">
                    {service.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 font-medium"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5C28] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card footer CTA */}
                <div className="pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-400">
                    {service.metric}
                  </span>
                  <button
                    onClick={() => onOpenContact(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-900 dark:text-white group-hover:text-[#FF5C28] dark:group-hover:text-[#FF5C28] transition-colors"
                  >
                    <span>Explore & Book</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
