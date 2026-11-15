"use client";

import { ArrowRight, CheckCircle2, Clock, MessageSquare } from "lucide-react";

interface ClientPortalSectionProps {
  onOpenContact?: () => void;
}

export default function ClientPortalSection({ onOpenContact }: ClientPortalSectionProps) {
  return (
    <section id="portal" className="py-24 bg-white relative overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-orange-50 via-pink-50 to-purple-50 rounded-full blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Eyebrow Pill */}
        <div className="mb-4">
          <span className="inline-block px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-gray-600 bg-gray-100 border border-gray-200">
            OUR DIFFERENCE
          </span>
        </div>

        {/* Heading */}
        <h2 className="display-h2 text-gray-900 mb-4">
          <span className="font-light text-gray-700 block mb-1.5">Your Work.</span>
          <span className="font-extrabold gradient-heading-accent">
            Your Control.
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-lead text-gray-600 max-w-xl mx-auto mb-12">
          We don&apos;t just work for you — we work <strong className="text-gray-900 font-semibold">with you</strong>.
          <br />
          Everything. Transparent. In your hands.
        </p>

        {/* Phone Mockup (Matching Page 3 of reference PDF) */}
        <div className="relative mx-auto max-w-[340px] sm:max-w-[360px] rounded-[3rem] bg-gray-900 p-3 shadow-2xl border-4 border-gray-800">
          {/* Dynamic Island / Notch */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30" />

          {/* Screen Content */}
          <div className="relative rounded-[2.5rem] bg-white overflow-hidden text-left p-5 pt-8 shadow-inner border border-gray-100">
            {/* Top Bar */}
            <div className="flex items-center justify-between text-[11px] text-gray-400 font-bold mb-4 pt-1">
              <span>9:41</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Live Portal</span>
              </div>
            </div>

            {/* User Greeting */}
            <div className="mb-4">
              <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block">
                Brands Headquarter OS
              </span>
              <h4 className="text-base font-black text-gray-900">
                Good morning, Partner 👋
              </h4>
              <p className="text-[11px] text-gray-500">Here&apos;s what&apos;s happening with your brand</p>
            </div>

            {/* Status Pills */}
            <div className="grid grid-cols-3 gap-2 mb-4 text-center">
              <div className="p-2 rounded-xl bg-orange-50 border border-orange-100">
                <span className="text-xs font-black text-[#FF5C28] block">3</span>
                <span className="text-[9px] font-bold text-gray-500">In Progress</span>
              </div>
              <div className="p-2 rounded-xl bg-purple-50 border border-purple-100">
                <span className="text-xs font-black text-purple-600 block">1</span>
                <span className="text-[9px] font-bold text-gray-500">Approval</span>
              </div>
              <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-100">
                <span className="text-xs font-black text-emerald-600 block">28</span>
                <span className="text-[9px] font-bold text-gray-500">Completed</span>
              </div>
            </div>

            {/* Approval Banner */}
            <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200/80 flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                <span className="text-[10px] font-bold text-amber-900">
                  1 UGC Reel Awaiting Approval
                </span>
              </div>
              <span className="text-[10px] font-bold text-amber-700">Review &rarr;</span>
            </div>

            {/* Team Effort Metrics */}
            <div className="mb-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">
                Your Squad&apos;s Effort This Month
              </span>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-100">
                  <span className="text-lg font-black text-gray-900 block">214</span>
                  <span className="text-[9px] text-gray-500 font-medium">Tasks Delivered</span>
                </div>
                <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-100">
                  <span className="text-lg font-black text-emerald-600 block">&lt;2h</span>
                  <span className="text-[9px] text-gray-500 font-medium">Avg Response Time</span>
                </div>
              </div>
            </div>

            {/* Live Campaign Status */}
            <div className="p-3 rounded-xl bg-gray-50 border border-gray-100 space-y-1.5">
              <div className="flex justify-between text-[10px] font-bold">
                <span className="text-gray-700">Meta Advantage+ Spend</span>
                <span className="text-[#FF5C28]">4.1x ROAS (On Track)</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-gray-200 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#FF5C28] to-[#EC4899] rounded-full w-[75%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text & CTA */}
        <p className="mt-8 text-xs sm:text-sm text-gray-500 font-medium">
          Track tasks, chat with your team, approve deliverables — all from one place.
        </p>

        <div className="mt-5">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#11141C] text-white hover:bg-[#FF5C28] transition-all duration-300 shadow-lg hover:shadow-[#FF5C28]/25"
          >
            <span>Experience It Live</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
