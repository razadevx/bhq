"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/923111173477?text=Hi%20Brands%20Headquarter%20team,%20I%20would%20like%20to%20discuss%20scaling%20my%20brand."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Direct WhatsApp Chat"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105"
    >
      <div className="relative">
        <MessageCircle className="w-5 h-5" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full flex items-center justify-center">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
        </span>
      </div>
      <span className="hidden sm:inline text-xs font-bold tracking-wide">
        Chat with Growth Team
      </span>
    </a>
  );
}
