"use client";

const FOUNDERS = [
  {
    name: "Saad Khan",
    role: "COO/Co Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    order: "order-2 lg:order-1",
  },
  {
    name: "Sheikh Kashan",
    role: "CGO/Co Founder",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    order: "order-3 lg:order-2",
  },
  {
    name: "Usama Khan",
    role: "CEO/Co Founder",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    order: "order-1 lg:order-3",
    highlight: true,
  },
  {
    name: "Fahad Khan",
    role: "CFO/Co Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    order: "order-4 lg:order-4",
  },
  {
    name: "Rashid Hussain",
    role: "Head of IT/Co Founder",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    order: "order-5 lg:order-5",
  },
];

const SPECIALISTS = [
  {
    name: "Kinza Rashid",
    role: "CMO / Partner to CEO",
  },
  {
    name: "Rafay Khan",
    role: "Creative Head",
  },
  {
    name: "Maaz Bin Rashid",
    role: "Design Manager",
  },
  {
    name: "Syed Hanzala",
    role: "Development Manager",
  },
  {
    name: "Taha Zafar",
    role: "Asst. Video Manager",
  },
  {
    name: "Asma Adnan",
    role: "Sales Manager",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Eyebrow Pill */}
        <div className="mb-4">
          <span className="badge-eyebrow text-gray-700 bg-gray-100 border border-gray-200">
            OUR PEOPLE
          </span>
        </div>

        {/* Heading */}
        <h2 className="display-h2 text-gray-900 mb-4">
          <span className="font-light text-gray-700">The Minds </span>
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] via-[#EC4899] to-[#8B5CF6]">
            Behind the Scale
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-lead text-gray-600 max-w-xl mx-auto mb-16">
          5 founders, 50+ specialists — a team obsessed with turning ambitious brands into market leaders.
        </p>

        {/* Founders Showcase Header */}
        <div className="text-center mb-8">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
            FOUNDERS
          </span>
        </div>

        {/* 5 Founders Showcase (Matching Page 6 of PDF) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 items-end mb-20">
          {FOUNDERS.map((founder, i) => (
            <div
              key={i}
              className={`flex flex-col items-center group ${founder.order} ${
                founder.highlight ? "scale-105 z-10" : "opacity-90 hover:opacity-100"
              }`}
            >
              <div
                className={`relative w-full aspect-[4/5] rounded-3xl overflow-hidden mb-4 bg-gradient-to-b from-gray-100 to-gray-200 border ${
                  founder.highlight
                    ? "border-[#FF5C28] shadow-2xl shadow-[#FF5C28]/20"
                    : "border-gray-200 shadow-md"
                }`}
              >
                <div className="w-full h-full flex items-center justify-center text-4xl font-black text-transparent bg-clip-text bg-gradient-to-tr from-[#FF5C28] to-[#EC4899] group-hover:scale-110 transition-transform">
                  {founder.name.split(" ").map((n) => n[0]).join("")}
                </div>
              </div>

              <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                {founder.name}
              </h4>
              <p className="text-xs sm:text-sm text-gray-500 font-medium">
                {founder.role}
              </p>
            </div>
          ))}
        </div>

        {/* Department Heads Header */}
        <div className="text-center mb-8">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
            THE TEAM
          </span>
        </div>

        {/* Department Heads Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {SPECIALISTS.map((spec, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-gray-100 to-gray-200 border-2 border-gray-200 flex items-center justify-center text-lg font-black text-gray-700 mb-3 shadow-xs group-hover:border-[#FF5C28] group-hover:scale-105 transition-all">
                {spec.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h5 className="text-xs sm:text-sm font-bold text-gray-900">
                {spec.name}
              </h5>
              <p className="text-[10px] sm:text-[11px] text-gray-400 font-medium mt-0.5">
                {spec.role}
              </p>
            </div>
          ))}
        </div>

        {/* Specialists Footer Count */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-600">
          <span className="w-2 h-2 rounded-full bg-[#FF5C28] animate-pulse" />
          <span>40+ more specialists across design, development, marketing &amp; video</span>
        </div>
      </div>
    </section>
  );
}
