"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  Sparkles,
} from "lucide-react";

interface ContactSectionProps {
  preselectedService?: string;
}

const SERVICE_CHIPS = [
  "Performance Marketing",
  "Branding & Visual Identity",
  "UGC & Creative Video Shoots",
  "Shopify & Web Development",
  "Social Media Marketing",
  "SEO & Organic Traffic",
  "Complete Growth Retainer",
];

const BUDGET_OPTIONS = [
  "PKR 200k – 500k / month",
  "PKR 500k – 1M / month",
  "PKR 1M – 3M / month",
  "PKR 3M+ / month (Enterprise)",
];

export default function ContactSection({ preselectedService }: ContactSectionProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>(
    preselectedService ? [preselectedService] : ["Performance Marketing"]
  );
  const [budget, setBudget] = useState(BUDGET_OPTIONS[1]);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    brandName: "",
    websiteUrl: "",
    message: "",
  });

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== srv));
      }
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#0B0C10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Agency Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#FF5C28]" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                  LET&apos;S TALK GROWTH
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white leading-tight">
                Tell Us About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] to-[#EC4899]">
                  Your Brand.
                </span>
              </h2>
              <p className="mt-4 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                Whether you&apos;re launching a new venture or scaling an existing e-commerce brand to 7 figures, our growth strategists are ready to evaluate your marketing and craft a clear roadmap.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <a
                href="mailto:contact@brandsheadquarter.com"
                className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 dark:bg-[#161B26] border border-gray-200/80 dark:border-white/5 hover:border-[#FF5C28]/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/10 flex items-center justify-center text-[#FF5C28] group-hover:scale-110 transition-transform shadow-xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-400 block">Direct Email</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-[#FF5C28] transition-colors">
                    contact@brandsheadquarter.com
                  </span>
                </div>
              </a>

              <a
                href="https://wa.me/923111173477"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 dark:bg-[#161B26] border border-gray-200/80 dark:border-white/5 hover:border-[#FF5C28]/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/10 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform shadow-xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-400 block">WhatsApp Hotline</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                    +92 311 1173477
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 dark:bg-[#161B26] border border-gray-200/80 dark:border-white/5">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/10 flex items-center justify-center text-[#FF5C28] shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-400 block">Main Headquarters</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">
                    Gulberg III, Lahore, Pakistan · Branches in Karachi & Islamabad
                  </span>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FF5C28]/10 border border-[#FF5C28]/20 flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#FF5C28] shrink-0" />
              <p className="text-xs font-semibold text-gray-800 dark:text-gray-200">
                Average reply time: <span className="font-extrabold text-[#FF5C28]">Under 30 minutes</span> during Pakistan business hours (9am – 7pm PKT).
              </p>
            </div>
          </div>

          {/* Right Column: Lead Intake Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-gray-50/80 dark:bg-[#161B26] border border-gray-200/80 dark:border-white/10 shadow-xl relative">
              {submitted ? (
                <div className="py-16 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white">
                    Strategy Request Received!
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-gray-900 dark:text-white">{formData.fullName || "friend"}</strong>. Our lead strategist will review your brand details and contact you via WhatsApp / email within 30 minutes.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        phone: "",
                        brandName: "",
                        websiteUrl: "",
                        message: "",
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full text-xs font-bold bg-[#11141C] dark:bg-white text-white dark:text-[#11141C]"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Service selector chips */}
                  <div>
                    <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider block mb-3">
                      Select Services You Need (Multi-Select)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {SERVICE_CHIPS.map((chip) => {
                        const isSelected = selectedServices.includes(chip);
                        return (
                          <button
                            type="button"
                            key={chip}
                            onClick={() => toggleService(chip)}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                              isSelected
                                ? "bg-[#FF5C28] text-white shadow-sm"
                                : "bg-white dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10 hover:border-[#FF5C28]/40"
                            }`}
                          >
                            {chip}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-gray-700 dark:text-gray-300 block mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="e.g. Atif Aslam"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#11141C] border border-gray-200 dark:border-white/10 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-[#FF5C28]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-700 dark:text-gray-300 block mb-1.5">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="e.g. atif@yourbrand.com"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#11141C] border border-gray-200 dark:border-white/10 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-[#FF5C28]"
                      />
                    </div>
                  </div>

                  {/* Phone / WhatsApp and Brand */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-gray-700 dark:text-gray-300 block mb-1.5">
                        WhatsApp / Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="e.g. +92 300 1234567"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#11141C] border border-gray-200 dark:border-white/10 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-[#FF5C28]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-700 dark:text-gray-300 block mb-1.5">
                        Brand Name & Website URL
                      </label>
                      <input
                        type="text"
                        value={formData.websiteUrl}
                        onChange={(e) =>
                          setFormData({ ...formData, websiteUrl: e.target.value })
                        }
                        placeholder="e.g. yourbrand.pk"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#11141C] border border-gray-200 dark:border-white/10 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-[#FF5C28]"
                      />
                    </div>
                  </div>

                  {/* Monthly Ad Budget */}
                  <div>
                    <label className="text-xs font-bold text-gray-700 dark:text-gray-300 block mb-1.5">
                      Estimated Monthly Marketing Budget
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#11141C] border border-gray-200 dark:border-white/10 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#FF5C28]"
                    >
                      {BUDGET_OPTIONS.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs font-bold text-gray-700 dark:text-gray-300 block mb-1.5">
                      Tell Us About Your Main Goal or Growing Pains
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="e.g. We currently do PKR 3M/month on Shopify and want to scale to 10M with lower CPA..."
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#11141C] border border-gray-200 dark:border-white/10 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-[#FF5C28]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full text-base font-bold bg-[#FF5C28] text-white hover:bg-[#e64a19] transition-all shadow-lg shadow-[#FF5C28]/25 flex items-center justify-center gap-2 group disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Sending Strategy Request...</span>
                    ) : (
                      <>
                        <span>Get My Free Growth Plan</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
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
