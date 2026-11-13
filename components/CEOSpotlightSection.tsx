"use client";

import { Quote } from "lucide-react";

export default function CEOSpotlightSection() {
  return (
    <section className="py-24 bg-[#0c0c12] text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#FF5C28]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow Pill */}
        <div className="mb-4">
          <span className="inline-block px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-gray-400 bg-white/10 border border-white/10">
            A WORD FROM OUR CEO
          </span>
        </div>

        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.05]">
            <span>Leadership with</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] via-[#EC4899] to-[#8B5CF6]">
              Purpose
            </span>
          </h2>
        </div>

        {/* 2-Column Grid: Portrait on Left, Quote Narrative on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: CEO Portrait with Neon Border (Matching Page 7 of PDF) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative p-1 rounded-3xl bg-gradient-to-tr from-pink-500 via-[#FF5C28] to-purple-600 shadow-2xl shadow-[#FF5C28]/20 max-w-sm w-full">
              <div className="relative aspect-[3/4] rounded-[1.4rem] overflow-hidden bg-gray-900">
                {/* Elegant grayscale speaker image */}
                <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 to-black flex items-center justify-center p-8 text-center">
                  <div className="space-y-4">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#FF5C28] to-[#EC4899] flex items-center justify-center text-3xl font-black text-white mx-auto shadow-lg">
                      UK
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-white">Usama Khan</h4>
                      <p className="text-xs font-semibold text-[#FF5C28]">CEO &amp; Founder</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: CEO Narrative & Five Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-amber-400 opacity-80 mb-2">
              <Quote className="w-8 h-8" />
            </div>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              At Brands Headquarter, we are bound by five core values that define our purpose and our approach: <strong className="text-white font-bold">Happiness, Honesty, Dedication, Transparency,</strong> and <strong className="text-white font-bold">Empathy</strong>. These values are not just words but the guiding principles behind every campaign we create and every brand we transform.
            </p>

            <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-normal">
              We believe in the happiness that comes from meaningful connections, the honesty that builds unbreakable trust, and the dedication that fuels our relentless pursuit of excellence. We remain committed to the transparency that fosters enduring partnerships and the empathy that allows us to truly understand and value the human experience behind every brand and consumer.
            </p>

            <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-normal">
              With these values as our compass, we&apos;ve had the privilege of working with some of the world&apos;s most iconic brands, creating inspiring campaigns, and driving remarkable growth. As we continue this journey together, we remain steadfast in our commitment to these values, knowing they are the cornerstones of our success and the key to forging an even brighter future.
            </p>

            {/* Signature & Designation */}
            <div className="pt-6 border-t border-white/10 flex items-center gap-4">
              <span className="font-serif italic text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-[#FF5C28]">
                Usama Khan
              </span>
              <span className="text-xs uppercase tracking-widest font-bold text-gray-500">
                CEO &amp; FOUNDER
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
