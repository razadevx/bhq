"use client";

const TRUSTED_CLIENTS = [
  { name: "Atomic Muscles", tag: "Sports Nutrition · 4.1x ROAS", alt: "Atomic Muscles – Brands Headquarter client" },
  { name: "Tebeena Wears", tag: "Fashion & Apparel · 2x Orders", alt: "Tebeena Wears – Brands Headquarter client" },
  { name: "Ashraf Naturals", tag: "Organic Skincare · -38% CPA", alt: "Ashraf Naturals – Brands Headquarter client" },
  { name: "Herbicure Naturals", tag: "Herbal Wellness · 3x Reach", alt: "Herbicure Naturals – Brands Headquarter client" },
  { name: "Bin Dawood", tag: "Enterprise Retail", alt: "Bin Dawood – Brands Headquarter client" },
  { name: "Krave Mart", tag: "Quick Commerce", alt: "Krave Mart – Brands Headquarter client" },
  { name: "Danube Home", tag: "Furniture & Decor", alt: "Danube Home – Brands Headquarter client" },
  { name: "Arabian Oud", tag: "Luxury Fragrances", alt: "Arabian Oud – Brands Headquarter client" },
  { name: "Scents N Stories", tag: "Perfume D2C", alt: "Scents N Stories – Brands Headquarter client" },
  { name: "Simfer Pakistan", tag: "European Built-in Living", alt: "Simfer Pakistan – Brands Headquarter client" },
  { name: "Islam 360", tag: "Mobile Ecosystem", alt: "Islam 360 – Brands Headquarter client" },
  { name: "Manto", tag: "Culture & Apparel", alt: "Manto – Brands Headquarter client" },
  { name: "Bavari", tag: "Ready to Wear", alt: "Bavari – Brands Headquarter client" },
  { name: "Saudi Tourism Authority", tag: "Government Partner", alt: "Saudi Tourism Authority – Brands Headquarter client" },
  { name: "Ministry of Hajj & Umrah", tag: "Government Entity", alt: "Ministry of Hajj & Umrah – Brands Headquarter client" },
  { name: "Senorita", tag: "Women's Footwear", alt: "Senorita – Brands Headquarter client" },
  { name: "Hijab Heaven", tag: "Modest Fashion", alt: "Hijab Heaven – Brands Headquarter client" },
  { name: "JC Buckman", tag: "Wellness & Lifestyle", alt: "JC Buckman – Brands Headquarter client" },
];

export default function FlagshipPartnersSection() {
  return (
    <section id="trusted-by" className="py-20 bg-white relative overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Eyebrow Pill */}
        <div className="mb-4">
          <span className="inline-block px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-gray-600 bg-gray-100 border border-gray-200">
            TRUSTED BY
          </span>
        </div>

        {/* H2 Heading (Exact from PDF Page 2) */}
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 leading-[1.1] mb-4">
          <span>Pakistan&apos;s Fastest-Growing Brands</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] via-[#EC4899] to-[#8B5CF6]">
            Already Trust Us
          </span>
        </h2>

        {/* Subtitle (Exact from PDF Page 2) */}
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed mb-14">
          From D2C startups to established names in fashion, wellness and retail — these brands chose a partner that&apos;s measured on results.
        </p>

        {/* 6-Column Grid of Clean Brand Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {TRUSTED_CLIENTS.map((client, index) => (
            <div
              key={index}
              title={client.alt}
              className="relative p-5 sm:p-6 rounded-2xl bg-white border border-gray-200/90 shadow-xs hover:border-[#FF5C28]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center min-h-[110px] group cursor-default"
            >
              {/* Indicator Dot */}
              <span className="absolute top-2.5 left-2.5 w-1.5 h-1.5 rounded-full bg-rose-400 opacity-60 group-hover:bg-[#FF5C28] group-hover:scale-125 transition-all" />

              <span className="text-xs sm:text-sm font-black text-gray-900 tracking-tight text-center leading-tight group-hover:text-[#FF5C28] transition-colors">
                {client.name}
              </span>
              <span className="text-[10px] text-gray-400 font-medium tracking-tight mt-1 text-center line-clamp-1">
                {client.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
