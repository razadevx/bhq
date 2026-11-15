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
      "We're a full-service digital marketing agency in Pakistan. We handle performance marketing, branding, creative production and UGC, Shopify and website development, social media marketing and SEO — everything a brand needs to grow, under one roof.",
  },
  {
    question: "Do you work with businesses across Pakistan?",
    answer:
      "Yes. We work with brands in every major city, with teams in Karachi, Lahore, Islamabad and remote support everywhere else.",
  },
  {
    question: "Is Brands Headquarter good for e-commerce brands?",
    answer:
      "E-commerce is our specialty. We combine Meta, Google and TikTok ads, UGC creative, Shopify development and conversion optimization to grow online sales.",
  },
  {
    question: "Do you manage Meta and Google Ads?",
    answer:
      "Yes. We plan, launch and optimize Facebook, Instagram and Google Ads campaigns focused on customer acquisition, ROAS and lower cost per sale.",
  },
  {
    question: "Do you create UGC and influencer content?",
    answer:
      "Yes. Our in-house team handles UGC videos, influencer collaborations, product shoots and ad creatives from script to final edit.",
  },
  {
    question: "Do you offer SEO services?",
    answer:
      "Yes. Our SEO services cover technical fixes, on-page optimization, keyword research, content and local SEO to grow your Google rankings and organic traffic.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "It depends on your goals, channels and ad budget. After a free strategy call, we send a custom proposal with clear pricing — no hidden fees.",
  },
  {
    question: "How soon will I see results?",
    answer:
      "Paid ads usually show data within the first 2–4 weeks; SEO and branding build over 3–6 months. We set clear targets for each from day one.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a free strategy call or message us on WhatsApp. We'll review your business and current marketing, then recommend the right growth plan.",
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
    <section id="faq" className="py-24 bg-white relative border-b border-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gray-200 bg-gray-50 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#FF5C28]" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-700">
              GOT QUESTIONS?
            </span>
          </div>

          {/* H2 Heading */}
          <h2 className="display-h2 text-gray-900">
            <span className="font-light text-gray-700">Frequently Asked </span>
            <span className="font-extrabold gradient-heading-accent-warm">
              Questions
            </span>
          </h2>
          <p className="mt-4 text-lead text-gray-600">
            Clear, honest answers about how we partner with brands, manage budgets, and engineer revenue.
          </p>
        </div>

        {/* FAQ Accordion List (Each question is an H3 per SEO checklist) */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-gray-200/90 bg-white transition-all duration-200 overflow-hidden shadow-xs hover:border-[#FF5C28]/40"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#FF5C28] text-white rotate-180"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Card */}
        <div className="mt-12 p-6 rounded-2xl bg-gray-50 border border-gray-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-gray-900">
              Have a question not listed here?
            </h4>
            <p className="text-xs text-gray-500 mt-0.5">
              Chat directly with our senior strategy team on WhatsApp.
            </p>
          </div>
          <a
            href="https://wa.me/923111173477?text=Hi%20Brands%20Headquarter%2C%20I%20have%20a%20question%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-[#25D366] text-white hover:bg-[#20ba59] shadow-xs transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
