"use client";

import { ArrowUpRight, MessageCircle } from "lucide-react";

interface CTASectionProps {
  onOpenContact: () => void;
}

export default function CTASection({ onOpenContact }: CTASectionProps) {
  return (
    <section className="py-20 sm:py-28 bg-[#0c0c12] text-white relative overflow-hidden text-center">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#FF5C28]/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -top-24 right-10 w-[350px] h-[350px] bg-[#EC4899]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow Pill */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-orange-300 bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C28] animate-pulse" />
            YOUR NEXT GROWTH CHAPTER STARTS HERE
          </span>
        </div>

        {/* H2 Heading - Moderate, aesthetic proportion */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-[1.15] text-white mb-6">
          <span>Ready to Stop Guessing</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] via-[#EC4899] to-[#8B5CF6] mt-1.5">
            and Start Growing?
          </span>
        </h2>

        {/* Subtitle & Body (Exact from PDF Page 7) */}
        <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed mb-4">
          Building a brand from zero, fixing ads that aren&apos;t converting, or scaling a store to the next level — let&apos;s map out exactly how to get you there.
        </p>
        <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto font-normal leading-relaxed mb-10">
          Book a free 30-minute strategy call. You&apos;ll walk away with clear next steps, whether you work with us or not.
        </p>

        {/* Centered Dual Action Buttons (Primary & Secondary CTA from PDF Page 7) */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold bg-[#FF5C28] text-white hover:bg-[#e64a19] hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl shadow-[#FF5C28]/30 group"
          >
            <span>Book My Free Strategy Call</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <a
            href="https://wa.me/923111173477?text=Hi%20Brands%20Headquarter%2C%20I%20would%20like%20to%20book%20a%20strategy%20call%20for%20my%20brand."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-sm font-bold bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/30 hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-md"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Message Us on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
