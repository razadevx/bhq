"use client";

const BRANDS = [
  { name: "Atomic Muscles", category: "Fitness D2C", stat: "4.1x ROAS" },
  { name: "Scents N Stories", category: "Fragrance", stat: "PKR 40M+" },
  { name: "Tebeena Wears", category: "Fashion & Apparel", stat: "2.4x Orders" },
  { name: "Ashraf Naturals", category: "Organic Skincare", stat: "-38% CPA" },
  { name: "Herbicure Naturals", category: "Health & Wellness", stat: "3.2x Reach" },
  { name: "Simfer Pakistan", category: "Home Appliances", stat: "5.2x Leads" },
  { name: "Islam 360", category: "App Growth", stat: "1M+ Installs" },
  { name: "Manto", category: "Apparel & Culture", stat: "3.8x ROAS" },
  { name: "Arabian Oud", category: "Luxury Perfumes", stat: "+190% Sales" },
  { name: "Krave Mart", category: "Quick Commerce", stat: "CAC Optimized" },
  { name: "Danube Home", category: "Furniture & Decor", stat: "High Intent" },
  { name: "Wearium", category: "Activewear", stat: "Scaling Fast" },
  { name: "Senorita", category: "Women's Fashion", stat: "+220% Revenue" },
  { name: "JC Buckman", category: "Lifestyle & Wellness", stat: "Corporate Scale" },
];

export default function Marquee() {
  return (
    <section id="trusted-by" className="py-12 bg-gray-50/70 dark:bg-[#0E1017] border-y border-gray-200/70 dark:border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-[11px] font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400">
          Pakistan&apos;s Fastest-Growing Brands Already Trust Us
        </p>
      </div>

      {/* Marquee Row 1 */}
      <div className="relative w-full overflow-hidden flex items-center">
        <div className="flex gap-6 animate-marquee whitespace-nowrap py-2">
          {[...BRANDS, ...BRANDS].map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white dark:bg-[#161B26] border border-gray-200/80 dark:border-white/10 shadow-xs hover:border-[#FF5C28]/50 transition-all cursor-default group"
            >
              <div className="w-2 h-2 rounded-full bg-[#FF5C28] group-hover:scale-125 transition-transform" />
              <span className="text-sm font-bold text-gray-900 dark:text-white tracking-tight">
                {brand.name}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400 font-medium">
                {brand.stat}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (Reverse) */}
      <div className="relative w-full overflow-hidden flex items-center mt-3">
        <div className="flex gap-6 animate-marquee-reverse whitespace-nowrap py-2">
          {[...BRANDS.slice().reverse(), ...BRANDS.slice().reverse()].map((brand, index) => (
            <div
              key={`rev-${brand.name}-${index}`}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white dark:bg-[#161B26] border border-gray-200/80 dark:border-white/10 shadow-xs hover:border-[#FF5C28]/50 transition-all cursor-default group"
            >
              <div className="w-2 h-2 rounded-full bg-purple-500 group-hover:scale-125 transition-transform" />
              <span className="text-sm font-bold text-gray-900 dark:text-white tracking-tight">
                {brand.name}
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-500 font-normal">
                {brand.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
