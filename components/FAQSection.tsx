"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What does Brands Headquarter do?",
    answer:
      "We are a full-service digital marketing agency in Pakistan. We handle performance marketing (Meta, Google, TikTok Ads), branding & positioning, creative production and UGC video shoots, Shopify and custom Next.js website development, social media marketing, and technical SEO — everything an ambitious brand needs to scale revenue under one single roof.",
  },
  {
    question: "Do you work with businesses across Pakistan and internationally?",
    answer:
      "Yes. We partner with fast-growing brands across Pakistan with dedicated team presence in Lahore, Karachi, and Islamabad, alongside international clients across the UAE, Saudi Arabia, the UK, and the US.",
  },
  {
    question: "Is Brands Headquarter specifically built for e-commerce brands?",
    answer:
      "E-commerce scaling is our specialty. We combine high-converting UGC creative production, high-velocity Meta and Google ads, mobile speed-optimized Shopify storefronts, and conversion rate optimization (CRO) to systematically drive up revenue and average order value (AOV).",
  },
  {
    question: "Do you manage Meta (Facebook & Instagram) and Google Ads?",
    answer:
      "Yes. We plan, build, launch, and optimize Facebook, Instagram, Google Search, and Performance Max ad campaigns focused relentlessly on customer acquisition cost (CPA), high return on ad spend (ROAS), and real checkout sales.",
  },
  {
    question: "Do you shoot in-house UGC and creator video content?",
    answer:
      "Yes. We have an extensive in-house production studio and a nationwide network of vetted UGC creators. We handle scriptwriting, creator casting, product filming, direct-response editing, and hook variations from start to finish.",
  },
  {
    question: "Do you offer SEO services for e-commerce and local search?",
    answer:
      "Yes. Our SEO services cover comprehensive technical audits, on-page optimization, high-intent commercial keyword ranking, collection page SEO, and Google Business Profile local SEO for cities across Pakistan.",
  },
  {
    question: "How much do your agency services cost?",
    answer:
      "Pricing is customized based on your current scale, target channels, and media budget. Following an initial free 30-minute growth strategy session, we provide a transparent proposal with clear milestone pricing — no hidden fees or surprise markups.",
  },
  {
    question: "How soon can I expect to see real results?",
    answer:
      "Paid advertising campaigns typically yield actionable conversion data and customer orders within the first 2 to 4 weeks. Creative repositioning and organic SEO build lasting compounding value over 3 to 6 months. We establish strict KPIs on Day 1.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simply click 'Book My Free Strategy Call' or message us directly on WhatsApp (+92 311 1173477). We'll review your current store, audit previous ad performance, and present a clear roadmap for scaling.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Structured Data for FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="py-24 bg-white dark:bg-[#0B0C10] relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#FF5C28]" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white leading-tight">
            Clear Answers to Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] to-[#EC4899]">
              Growth Questions.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Everything you need to know about partnering with Brands Headquarter.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-gray-200/80 dark:border-white/5 bg-gray-50/70 dark:bg-[#161B26] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white dark:bg-white/10 flex items-center justify-center text-gray-700 dark:text-gray-300 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#FF5C28] text-white dark:bg-[#FF5C28]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-white/5 mt-2 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-12 p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200/80 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-gray-900 dark:text-white">
              Have a specific question about your brand?
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              Chat directly with our lead growth strategist on WhatsApp.
            </p>
          </div>
          <a
            href="https://wa.me/923111173477"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
