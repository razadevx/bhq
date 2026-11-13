"use client";

import { ArrowUpRight } from "lucide-react";

interface CTASectionProps {
  onOpenContact: () => void;
}

export default function CTASection({ onOpenContact }: CTASectionProps) {
  return (
    <section className="py-28 sm:py-36 bg-[#0c0c12] text-white relative overflow-hidden text-center">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#FF5C28]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] text-white mb-10">
          <span>Ready to Make</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] via-[#EC4899] to-[#8B5CF6] mt-2">
            It Happen?
          </span>
        </h2>

        {/* White Pill Button (Exact Match to Page 8) */}
        <div>
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-bold bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl shadow-white/10 group"
          >
            <span>Start Your Project</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
