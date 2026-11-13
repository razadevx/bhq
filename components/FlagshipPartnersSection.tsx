"use client";

const FLAGSHIP_CLIENTS = [
  { name: "Bin Dawood", tag: "Enterprise Retail" },
  { name: "Krave Mart", tag: "Quick Commerce" },
  { name: "Danube Home", tag: "Furniture & Decor" },
  { name: "Arabian Oud", tag: "Luxury Fragrances" },
  { name: "Islam 360", tag: "App Ecosystem" },
  { name: "Redefining Living Spaces", tag: "Interior & Living" },
  { name: "Scents N Stories", tag: "Perfume D2C" },
  { name: "Simfer", tag: "European Appliances" },
  { name: "Umrah Companions", tag: "Travel & Hospitality" },
  { name: "JC Buckman", tag: "Wellness & Lifestyle" },
  { name: "Saudi Tourism Authority", tag: "Government Partner" },
  { name: "Manto", tag: "Culture & Apparel" },
  { name: "Bavari", tag: "Fashion Wear" },
  { name: "Qurbani Haramain", tag: "Global Platform" },
  { name: "Ministry of Hajj & Umrah", tag: "Government Entity" },
  { name: "Senorita", tag: "Women's Footwear" },
  { name: "Hijab Heaven", tag: "Modest Fashion" },
  { name: "Prime Point", tag: "Corporate Logistics" },
];

export default function FlagshipPartnersSection() {
  return (
    <section id="clients" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Eyebrow Pill */}
        <div className="mb-4">
          <span className="inline-block px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-gray-600 bg-gray-100 border border-gray-200">
            TOP &amp; INTERNATIONAL CLIENTS
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-gray-900 leading-[1.05] mb-4">
          <span>Our Flagship</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] via-[#EC4899] to-[#8B5CF6]">
            Partners
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto font-normal leading-relaxed mb-16">
          The brands and institutions we scale across borders — a tier of their own.
        </p>

        {/* 6-Column Grid of Clean Brand Cards (Exact Replica of Page 4) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 mb-16">
          {FLAGSHIP_CLIENTS.map((client, index) => (
            <div
              key={index}
              className="relative p-6 sm:p-7 rounded-2xl bg-white border border-gray-200/90 shadow-xs hover:border-[#FF5C28]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center min-h-[120px] group"
            >
              {/* Subtle Red/Orange Indicator Dot in top-left (Matching PDF Page 4) */}
              <span className="absolute top-2.5 left-2.5 w-1.5 h-1.5 rounded-full bg-rose-400 opacity-60 group-hover:bg-[#FF5C28] group-hover:scale-125 transition-all" />

              <span className="text-sm sm:text-base font-black text-gray-900 tracking-tight text-center leading-tight group-hover:text-[#FF5C28] transition-colors">
                {client.name}
              </span>
              <span className="text-[10px] text-gray-400 font-medium tracking-tight mt-1">
                {client.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
