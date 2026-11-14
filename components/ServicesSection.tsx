"use client";

import { useState } from "react";
import {
  TrendingUp,
  Palette,
  Video,
  ShoppingBag,
  Share2,
  Search,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

interface ServicesSectionProps {
  onOpenContact: (serviceTitle?: string) => void;
}

const SERVICES = [
  {
    num: "01",
    tag: "01 / 06",
    id: "performance-marketing",
    title: "Performance Marketing",
    body: "Every rupee of ad spend, accountable. We run Meta, Google and TikTok ads like it's our own money — testing creatives weekly, cutting what doesn't sell and scaling what does. You get lower cost per customer and a ROAS you can actually see.",
    pills: [
      "Meta Ads (Facebook & Instagram)",
      "Google Ads & Performance Max",
      "TikTok Ads",
      "Retargeting",
      "Pixel, CAPI & GA4 tracking",
    ],
    ctaText: "Explore Performance Marketing →",
    icon: TrendingUp,
    iconColor: "text-[#FF5C28]",
    bgColor: "bg-orange-50",
    borderColor: "hover:border-[#FF5C28]/50",
  },
  {
    num: "02",
    tag: "02 / 06",
    id: "branding",
    title: "Branding & Strategy",
    body: "Be the brand people pick — even when you're not the cheapest. We define who you are, who you're for and why you win, then turn it into a name, logo, visual identity and voice that sticks.",
    pills: [
      "Brand strategy & positioning",
      "Logo & identity design",
      "Brand guidelines",
      "Market & competitor research",
      "Brand messaging",
    ],
    ctaText: "Explore Branding →",
    icon: Palette,
    iconColor: "text-rose-500",
    bgColor: "bg-rose-50",
    borderColor: "hover:border-rose-400/50",
  },
  {
    num: "03",
    tag: "03 / 06",
    id: "creative-production",
    title: "Creative Production & UGC",
    body: "Thumb-stopping content, made to sell. Your ads are only as good as your creative. Our in-house team shoots UGC videos, product photography and reels engineered for the first three seconds — and the checkout.",
    pills: [
      "UGC & influencer videos",
      "Product photo & video shoots",
      "Commercial production",
      "Reels & TikToks",
      "Ad creative & editing",
      "Drone & corporate shoots",
    ],
    ctaText: "Explore Creative Production →",
    icon: Video,
    iconColor: "text-purple-500",
    bgColor: "bg-purple-50",
    borderColor: "hover:border-purple-400/50",
  },
  {
    num: "04",
    tag: "04 / 06",
    id: "web-development",
    title: "Shopify & Website Development",
    body: "A store that sells while you sleep. Fast, mobile-first Shopify stores and websites built around one thing: turning visitors into buyers. Clean design, quick checkout, zero friction.",
    pills: [
      "Shopify store development",
      "Custom websites",
      "Landing pages",
      "Speed optimization",
      "Conversion rate optimization (CRO)",
    ],
    ctaText: "Explore Web Development →",
    icon: ShoppingBag,
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-50",
    borderColor: "hover:border-emerald-400/50",
  },
  {
    num: "05",
    tag: "05 / 06",
    id: "social-media-marketing",
    title: "Social Media Marketing",
    body: "Stay top of mind — and top of feed. Consistent, on-brand content across Instagram, Facebook, TikTok and LinkedIn, backed by a content calendar, community management and monthly reporting.",
    pills: [
      "Social strategy",
      "Content calendars",
      "Design & copywriting",
      "Community management",
      "Performance reports",
    ],
    ctaText: "Explore Social Media Marketing →",
    icon: Share2,
    iconColor: "text-sky-500",
    bgColor: "bg-sky-50",
    borderColor: "hover:border-sky-400/50",
  },
  {
    num: "06",
    tag: "06 / 06",
    id: "seo",
    title: "SEO & Organic Growth",
    body: "Get found by people already looking to buy. We help your website rank on Google for the searches that bring customers — traffic that keeps coming without paying for every click.",
    pills: [
      "Technical SEO",
      "On-page SEO",
      "Keyword research",
      "SEO content",
      "Shopify & e-commerce SEO",
      "Local SEO",
    ],
    ctaText: "Explore SEO Services →",
    icon: Search,
    iconColor: "text-amber-500",
    bgColor: "bg-amber-50",
    borderColor: "hover:border-amber-400/50",
  },
];

export default function ServicesSection({ onOpenContact }: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="py-24 bg-gray-50/50 relative overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow Pill */}
        <div className="mb-4">
          <span className="inline-block px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-gray-600 bg-white border border-gray-200 shadow-xs">
            WHAT WE DO
          </span>
        </div>

        {/* Heading & Subtitle Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end justify-between mb-16">
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-[1.05]">
              <span>Digital Marketing Services</span>{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] via-[#EC4899] to-[#8B5CF6]">
                That Pay for Themselves
              </span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600 font-normal max-w-2xl leading-relaxed">
              Six services. One goal. Every one of them is built to bring you customers — and they work even harder together.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end items-center">
            <button
              onClick={() => onOpenContact("Free Audit")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-white text-gray-900 border border-gray-200 hover:border-[#FF5C28] hover:text-[#FF5C28] shadow-xs hover:shadow-md transition-all duration-300"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FF5C28]" />
              <span>Not sure where to start? Get a free audit →</span>
            </button>
          </div>
        </div>

        {/* 6 Clean High-Converting Service Cards (3x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`relative p-8 rounded-3xl bg-white border border-gray-200/90 shadow-xs ${service.borderColor} hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group`}
              >
                {/* Large Subtle Watermark Number */}
                <span className="absolute top-5 right-6 text-4xl sm:text-5xl font-black text-gray-100/80 group-hover:text-gray-200/90 transition-colors select-none pointer-events-none">
                  {service.num}
                </span>

                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl ${service.bgColor} ${service.iconColor} flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-gray-400 tracking-wider">
                      {service.tag}
                    </span>
                  </div>

                  {/* Service Title as H3 (SEO Requirement) */}
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-3 tracking-tight group-hover:text-[#FF5C28] transition-colors">
                    {service.num}. {service.title}
                  </h3>

                  {/* Body Copy (Exact from PDF) */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-6">
                    {service.body}
                  </p>

                  {/* Specific Deliverables / Capabilities Pills */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-8">
                    {service.pills.map((pill, pIdx) => (
                      <span
                        key={pIdx}
                        className="text-[10px] sm:text-[11px] font-medium px-2.5 py-1 rounded-lg bg-gray-100/80 text-gray-700 border border-gray-200/60"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Link */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => onOpenContact(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-900 group-hover:text-[#FF5C28] transition-colors"
                  >
                    <span>{service.ctaText}</span>
                  </button>
                  <button
                    onClick={() => onOpenContact(service.title)}
                    aria-label={`Open consultation for ${service.title}`}
                    className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 group-hover:bg-[#FF5C28] group-hover:text-white flex items-center justify-center transition-colors shadow-xs"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom Banner CTA (Exact from PDF Page 4) */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-gray-900">
              Not sure which service is right for your growth stage?
            </h4>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              We audit your ad account, store funnel, and competitors for free before pitching any package.
            </p>
          </div>
          <button
            onClick={() => onOpenContact("Free Growth Audit")}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-[#FF5C28] text-white hover:bg-[#e64a19] shadow-md shadow-[#FF5C28]/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Get a Free Audit →</span>
          </button>
        </div>
      </div>
    </section>
  );
}
