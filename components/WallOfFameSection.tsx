"use client";

import { Trophy } from "lucide-react";

const HONOREES = [
  {
    name: "Rafay Khan",
    role: "Creative Head",
    gradient: "from-blue-600 to-indigo-900",
  },
  {
    name: "Malak Hanzala",
    role: "Web Development Head",
    gradient: "from-purple-600 to-violet-900",
  },
  {
    name: "Kinza Khan",
    role: "Chief Marketing Officer",
    gradient: "from-[#FF5C28] to-rose-900",
  },
  {
    name: "M. Jameel Khan",
    role: "Senior Designer",
    gradient: "from-emerald-600 to-teal-900",
  },
  {
    name: "M. Umer Khan",
    role: "Video Editor & Animator",
    gradient: "from-amber-600 to-orange-900",
  },
];

export default function WallOfFameSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Eyebrow Pill */}
        <div className="mb-4">
          <span className="inline-block px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-gray-600 bg-gray-100 border border-gray-200">
            RECOGNITION
          </span>
        </div>

        {/* Heading */}
        <h2 className="display-h2 text-gray-900 mb-4">
          <span className="font-light text-gray-700">Wall of </span>
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] via-[#EC4899] to-[#8B5CF6]">
            Fame
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-lead text-gray-600 max-w-xl mx-auto mb-16">
          The people who go beyond the brief — celebrated for the standards they set and the results they deliver.
        </p>

        {/* 5 Wall of Fame Cards (Matching Page 6 & 7 of reference PDF) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {HONOREES.map((honoree, index) => (
            <div
              key={index}
              className="group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between p-5 text-left border border-gray-200"
            >
              {/* Background Gradient / Image placeholder */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${honoree.gradient} opacity-90 group-hover:scale-105 transition-transform duration-500`}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />

              {/* Top Badge: 🏆 WALL OF FAME */}
              <div className="relative z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-bold tracking-wider uppercase border border-white/20 shadow-xs">
                  <Trophy className="w-3 h-3 text-amber-300" />
                  <span>WALL OF FAME</span>
                </span>
              </div>

              {/* Bottom Info */}
              <div className="relative z-10 text-white">
                <h4 className="text-lg sm:text-xl font-bold leading-tight drop-shadow-sm">
                  {honoree.name}
                </h4>
                <p className="text-xs text-white/80 font-medium mt-0.5">
                  {honoree.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
