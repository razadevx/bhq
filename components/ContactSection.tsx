"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  Clock,
  Clock3,
  ArrowUpRight,
  CheckCircle2,
  Instagram,
  Facebook,
  Linkedin,
  MessageCircle,
} from "lucide-react";

interface ContactSectionProps {
  preselectedService?: string;
}

const INTERESTS = [
  "Digital Marketing",
  "Graphics Design",
  "Web Development",
  "Consultation",
  "Branding",
  "Video Editing",
  "Business Analysis",
];

export default function ContactSection({ preselectedService }: ContactSectionProps) {
  const [selectedInterests, setSelectedInterests] = useState<string[]>(
    preselectedService ? [preselectedService] : ["Digital Marketing"]
  );
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    website: "",
    message: "",
  });

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      if (selectedInterests.length > 1) {
        setSelectedInterests(selectedInterests.filter((i) => i !== interest));
      }
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow Pill */}
        <div className="mb-4">
          <span className="inline-block px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-gray-600 bg-gray-100 border border-gray-200">
            GET IN TOUCH
          </span>
        </div>

        {/* Heading */}
        <div className="mb-14">
          <h2 className="display-h2 text-gray-900">
            <span className="font-light text-gray-700 block mb-1.5">Let&apos;s Build</span>
            <span className="font-extrabold gradient-heading-accent">
              Something Great
            </span>
          </h2>
        </div>

        {/* 2-Column Grid: Left Contact Info, Right Intake Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info (Matching Page 7 of PDF) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
                    EMAIL
                  </span>
                  <a
                    href="mailto:bdm@brandsheadquarter.com"
                    className="text-lg font-bold text-gray-900 hover:text-[#FF5C28] transition-colors"
                  >
                    bdm@brandsheadquarter.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
                    PHONE
                  </span>
                  <a
                    href="tel:+923111173477"
                    className="text-lg font-bold text-gray-900 hover:text-[#FF5C28] transition-colors"
                  >
                    +92 311 117 3477
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
                    OFFICE HOURS
                  </span>
                  <p className="text-base font-bold text-gray-900">
                    Mon – Sat: 10 AM – 7 PM
                  </p>
                  <p className="text-xs text-gray-400">Pakistan Standard Time (PKT)</p>
                </div>
              </div>

              {/* Response Time */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
                  <Clock3 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
                    RESPONSE TIME
                  </span>
                  <p className="text-base font-bold text-gray-900">Within 24 hours</p>
                  <p className="text-xs text-gray-400">Usually much faster on WhatsApp</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-6 border-t border-gray-100">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-3">
                FOLLOW US
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/brandsheadquarter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-blue-600 hover:scale-105 transition-transform"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/brandsheadquarter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-pink-600 hover:scale-105 transition-transform"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/company/brands-headquarter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-blue-700 hover:scale-105 transition-transform"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/923111173477"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-emerald-500 hover:scale-105 transition-transform"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form (Matching Page 7 & 8 of PDF) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200/90 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-gray-500 max-w-md mx-auto">
                    Thank you, {form.name || "partner"}. Our strategy team will review your project details and reach out within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1.5">
                        NAME
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#FF5C28] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1.5">
                        EMAIL
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#FF5C28] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1.5">
                        PHONE
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-gray-200 bg-gray-100 text-xs font-bold text-gray-700">
                          🇵🇰 +92
                        </span>
                        <input
                          type="tel"
                          required
                          placeholder="324 4518510"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-r-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#FF5C28] focus:bg-white"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1.5">
                        BUSINESS
                      </label>
                      <input
                        type="text"
                        placeholder="Your Business Name"
                        value={form.business}
                        onChange={(e) => setForm({ ...form, business: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#FF5C28] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1.5">
                      WEBSITE
                    </label>
                    <input
                      type="url"
                      placeholder="https://yourbusiness.com"
                      value={form.website}
                      onChange={(e) => setForm({ ...form, website: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#FF5C28] focus:bg-white"
                    />
                  </div>

                  {/* Interested In Chips */}
                  <div>
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-2.5">
                      INTERESTED IN
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {INTERESTS.map((interest) => {
                        const active = selectedInterests.includes(interest);
                        return (
                          <button
                            type="button"
                            key={interest}
                            onClick={() => toggleInterest(interest)}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                              active
                                ? "bg-[#11141C] text-white shadow-xs"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {interest}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1.5">
                      MESSAGE
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your project and goals..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#FF5C28] focus:bg-white"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full text-sm font-bold bg-[#11141C] text-white hover:bg-[#FF5C28] transition-all duration-300 shadow-md shadow-black/10 flex items-center justify-center gap-2 group disabled:opacity-70"
                  >
                    <span>Send Message</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
