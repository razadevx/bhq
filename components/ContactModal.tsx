"use client";

import { useState } from "react";
import { X, Send, CheckCircle2, ShieldCheck } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

const SERVICE_CHIPS = [
  "Performance Marketing",
  "Branding & Identity",
  "UGC & Video Shoots",
  "Shopify & Web Dev",
  "Social Media Growth",
  "SEO & Organic Traffic",
];

export default function ContactModal({
  isOpen,
  onClose,
  preselectedService,
}: ContactModalProps) {
  const [selectedService, setSelectedService] = useState<string>(
    preselectedService || "Performance Marketing"
  );
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    brand: "",
    budget: "PKR 500k – 1M / month",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto bg-white dark:bg-[#161B26] rounded-3xl border border-gray-200 dark:border-white/10 p-6 sm:p-8 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 dark:hover:text-white bg-gray-100 dark:bg-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-500 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 dark:text-white">
              Strategy Session Booked!
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              We&apos;ve assigned a growth strategist to analyze {formData.brand || "your brand"}. You will receive a direct WhatsApp message / invitation within 30 minutes.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-full text-xs font-bold bg-[#fb8e00] text-white"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fb8e00]/10 text-[#fb8e00] text-[11px] font-bold uppercase mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Confidential Growth Audit</span>
              </div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white">
                Book Your Free Strategy Call
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Walk away with a clear 90-day scaling plan, whether you hire us or not.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service chip selection */}
              <div>
                <label className="text-[11px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider block mb-2">
                  Primary Focus
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {SERVICE_CHIPS.map((chip) => (
                    <button
                      type="button"
                      key={chip}
                      onClick={() => setSelectedService(chip)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                        selectedService === chip
                          ? "bg-[#fb8e00] text-white"
                          : "bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5"
                      }`}
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300 block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Usama"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-[#11141C] border border-gray-200 dark:border-white/10 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-[#fb8e00]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300 block mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="usama@store.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-[#11141C] border border-gray-200 dark:border-white/10 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-[#fb8e00]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300 block mb-1">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+92 300 0000000"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-[#11141C] border border-gray-200 dark:border-white/10 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-[#fb8e00]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300 block mb-1">
                    Brand Name / Website
                  </label>
                  <input
                    type="text"
                    value={formData.brand}
                    onChange={(e) =>
                      setFormData({ ...formData, brand: e.target.value })
                    }
                    placeholder="mybrand.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-[#11141C] border border-gray-200 dark:border-white/10 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-[#fb8e00]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300 block mb-1">
                  Monthly Ad Spend Bracket
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) =>
                    setFormData({ ...formData, budget: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-[#11141C] border border-gray-200 dark:border-white/10 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-[#fb8e00]"
                >
                  <option value="PKR 200k – 500k / month">PKR 200k – 500k / month</option>
                  <option value="PKR 500k – 1M / month">PKR 500k – 1M / month</option>
                  <option value="PKR 1M – 3M / month">PKR 1M – 3M / month</option>
                  <option value="PKR 3M+ / month">PKR 3M+ / month (Enterprise)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300 block mb-1">
                  Current Biggest Challenge
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  placeholder="e.g. High CAC, ads not converting, needing fresh UGC video hooks..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-[#11141C] border border-gray-200 dark:border-white/10 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-[#fb8e00]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-full text-sm font-bold bg-[#fb8e00] text-white hover:bg-[#e07d00] transition-all shadow-md shadow-[#fb8e00]/25 flex items-center justify-center gap-2 group disabled:opacity-70 mt-2"
              >
                {loading ? (
                  <span>Reserving Calendar Slot...</span>
                ) : (
                  <>
                    <span>Confirm My Free Growth Session</span>
                    <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
