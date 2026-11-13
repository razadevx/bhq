"use client";

import { ArrowRight, MessageCircle, Sparkles, CheckCircle2 } from "lucide-react";

interface CTASectionProps {
  onOpenContact: () => void;
}

export default function CTASection({ onOpenContact }: CTASectionProps) {
  return (
    <section className="py-24 bg-[#0B0C10] text-white relative overflow-hidden">
      {/* Ambient background glow orbs inspired by 7figures.pk */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF5C28]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#EC4899]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 mb-6 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#FF5C28]" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-gray-200">
            YOUR NEXT GROWTH CHAPTER STARTS HERE
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight text-white mb-6">
          Ready to Scale Your Brand to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] via-[#EC4899] to-[#8B5CF6]">
            7 Figures?
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
          Building a brand from zero, fixing ads that aren&apos;t converting, or scaling an existing store to the next tier — let&apos;s map out exactly how to get you there. Book a free 30-minute strategy call. You&apos;ll walk away with clear next steps, whether you work with us or not.
        </p>

        {/* Dual Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-5 rounded-full text-base font-extrabold bg-[#FF5C28] text-white hover:bg-[#e64a19] transition-all duration-300 shadow-xl shadow-[#FF5C28]/30 group"
          >
            <span>Book My Free Strategy Call</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="https://wa.me/923111173477?text=Hi%20Brands%20Headquarter%20team,%20I%20would%20like%20to%20discuss%20scaling%20my%20brand."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-5 rounded-full text-base font-extrabold bg-white/10 hover:bg-white/15 border border-white/20 text-white transition-all backdrop-blur-md"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span>Message Us on WhatsApp</span>
          </a>
        </div>

        {/* Trust Badges under CTA */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400 font-semibold">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Zero obligation consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Custom ad audit included</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Direct conversation with growth leads</span>
          </div>
        </div>
      </div>
    </section>
  );
}
