"use client";

import {
  ShoppingBag,
  Shirt,
  HeartPulse,
  Droplets,
  Building2,
  UtensilsCrossed,
  Stethoscope,
  Smile,
  ArrowUpRight,
} from "lucide-react";

interface IndustriesSectionProps {
  onOpenContact?: (industry?: string) => void;
}

const INDUSTRIES = [
  {
    name: "E-commerce & Retail",
    desc: "Direct-to-consumer store scaling, high AOV bundles, and automated customer retention funnels.",
    icon: ShoppingBag,
    iconColor: "text-[#FF5C28]",
    bgColor: "bg-orange-50",
    badge: "D2C Scaling",
  },
  {
    name: "Fashion & Apparel",
    desc: "Catalog ad architectures, seasonal collections launch, lookbooks, and fashion creator reels.",
    icon: Shirt,
    iconColor: "text-rose-500",
    bgColor: "bg-rose-50",
    badge: "Rapid Drops",
  },
  {
    name: "Health & Wellness",
    desc: "Supplement scaling, trust-building testimonials, repeat subscription models, and compliance ads.",
    icon: HeartPulse,
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-50",
    badge: "High ROAS",
  },
  {
    name: "Beauty & Personal Care",
    desc: "Organic skincare UGC reels, dermatologist reviews, before-and-after proof, and routine bundles.",
    icon: Droplets,
    iconColor: "text-purple-500",
    bgColor: "bg-purple-50",
    badge: "UGC Heavy",
  },
  {
    name: "Real Estate",
    desc: "High-net-worth investor lead generation, luxury video walkthroughs, and multi-city property showcases.",
    icon: Building2,
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50",
    badge: "High-Ticket Leads",
  },
  {
    name: "Food & Beverage",
    desc: "Cloud kitchen ordering funnels, mouthwatering food commercials, local radius ads, and franchise growth.",
    icon: UtensilsCrossed,
    iconColor: "text-amber-500",
    bgColor: "bg-amber-50",
    badge: "Hyperlocal Ads",
  },
  {
    name: "Healthcare",
    desc: "Clinics, specialty centers, patient inquiry workflows, and trustworthy medical professional branding.",
    icon: Stethoscope,
    iconColor: "text-teal-500",
    bgColor: "bg-teal-50",
    badge: "Patient Leads",
  },
  {
    name: "Lifestyle & Consumer Brands",
    desc: "Cultural positioning, omni-channel campaigns, retail shelf velocity, and memorable brand identity.",
    icon: Smile,
    iconColor: "text-pink-500",
    bgColor: "bg-pink-50",
    badge: "Brand Affinity",
  },
];

export default function IndustriesSection({ onOpenContact }: IndustriesSectionProps) {
  return (
    <section id="industries" className="py-24 bg-white relative overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow Pill */}
        <div className="mb-4">
          <span className="badge-eyebrow text-gray-700 bg-gray-100 border border-gray-200">
            INDUSTRIES WE KNOW
          </span>
        </div>

        {/* H2 Heading & Subtitle */}
        <div className="max-w-3xl mb-14">
          <h2 className="display-h2 text-gray-900">
            <span className="font-light text-gray-700 block">Marketing That Speaks Your</span>
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] via-[#EC4899] to-[#8B5CF6] block mt-1">
              Industry&apos;s Language
            </span>
          </h2>
          <p className="mt-4 text-lead text-gray-600">
            A skincare buyer and a property buyer don&apos;t scroll, think or buy the same way. We build strategy around how your customers actually decide.
          </p>
        </div>

        {/* 8 Industry Cards (4x2 on desktop, 2x4 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {INDUSTRIES.map((ind, index) => {
            const Icon = ind.icon;
            return (
              <div
                key={index}
                onClick={() => onOpenContact && onOpenContact(ind.name)}
                className="group relative p-6 sm:p-7 rounded-3xl bg-white border border-gray-200/90 shadow-xs hover:border-[#FF5C28]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-11 h-11 rounded-2xl ${ind.bgColor} ${ind.iconColor} flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-gray-50 text-gray-700 border border-gray-100">
                      {ind.badge}
                    </span>
                  </div>

                  <h3 className="display-h3 text-gray-900 mb-2 group-hover:text-[#FF5C28] transition-colors">
                    {ind.name}
                  </h3>

                  <p className="text-body-standard text-gray-600">
                    {ind.desc}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-gray-100 flex items-center justify-between text-xs sm:text-sm font-bold text-gray-400 group-hover:text-[#FF5C28] transition-colors">
                  <span>Explore playbooks</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
