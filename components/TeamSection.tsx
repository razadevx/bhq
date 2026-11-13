"use client";

import { Linkedin, Award } from "lucide-react";

const LEADERS = [
  {
    name: "Usama Khan",
    role: "Chief Executive Officer & Founder",
    department: "Executive",
    bio: "Pioneering performance marketing and modern brand scaling in Pakistan. Scaled over 200+ brands across Pakistan and the GCC.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Saad Khan",
    role: "Chief Operating Officer",
    department: "Operations",
    bio: "Overseeing agency infrastructure, client satisfaction protocols, and rapid sprint delivery across multi-city branches.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Sheikh Kashan",
    role: "Chief Growth Officer",
    department: "Growth Strategy",
    bio: "Architecting omni-channel media buying funnels and revenue growth systems for high-volume D2C and enterprise retailers.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Kinza Rashid",
    role: "Chief Marketing Officer",
    department: "Brand & Creative",
    bio: "Directing viral content strategies, high-converting video shoots, and brand positioning that commands consumer loyalty.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 bg-white dark:bg-[#0B0C10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF5C28]" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
              LEADERSHIP & TALENT
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white leading-tight">
            The Minds Behind{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] to-[#EC4899]">
              The Scale.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400">
            A disciplined squad of seasoned media buyers, creatives, and technical engineers dedicated to your brand&apos;s compound growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEADERS.map((leader, index) => (
            <div
              key={index}
              className="group p-6 rounded-3xl bg-gray-50/80 dark:bg-[#161B26] border border-gray-200/80 dark:border-white/5 hover:border-[#FF5C28]/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-5 bg-gray-200 dark:bg-white/5">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end p-4">
                    <span className="text-xs text-white font-medium">Connect on LinkedIn</span>
                  </div>
                  {/* Avatar thumbnail placeholder */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-white/5 dark:to-white/10 text-gray-400 font-bold text-2xl group-hover:scale-105 transition-transform">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] to-[#EC4899]">
                      {leader.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white dark:bg-white/10 text-gray-600 dark:text-gray-300">
                    {leader.department}
                  </span>
                  <Award className="w-3.5 h-3.5 text-[#FF5C28]" />
                </div>

                <h3 className="text-lg font-black text-gray-900 dark:text-white">
                  {leader.name}
                </h3>
                <p className="text-xs font-semibold text-[#FF5C28] mb-3">
                  {leader.role}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  {leader.bio}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-200/50 dark:border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-gray-400">Brands Headquarter</span>
                <span className="text-xs text-gray-400 group-hover:text-[#FF5C28] transition-colors">
                  <Linkedin className="w-4 h-4 inline" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
