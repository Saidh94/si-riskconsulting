"use client";

import { useState } from "react";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      <div
        className={`flex flex-col items-end gap-2 transition-all duration-300 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <a
          href="mailto:si-riskconsulting@outlook.com"
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#0a0f1e] border border-white/10 text-white text-sm font-medium shadow-lg hover:border-orange-400/50 transition-colors"
        >
          <svg className="w-4 h-4 text-orange-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="whitespace-nowrap">si-riskconsulting@outlook.com</span>
        </a>

        <a
          href="tel:+33780992417"
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#0a0f1e] border border-white/10 text-white text-sm font-medium shadow-lg hover:border-orange-400/50 transition-colors"
        >
          <svg className="w-4 h-4 text-orange-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          <span>07 80 99 24 17</span>
        </a>

        <a
          href="tel:+33189629492"
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#0a0f1e] border border-white/10 text-white text-sm font-medium shadow-lg hover:border-orange-400/50 transition-colors"
        >
          <svg className="w-4 h-4 text-orange-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>01 89 62 94 92</span>
        </a>
      </div>

      <button
        onClick={() => setOpen(!open)}
        aria-label="Contact"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-105"
        style={{ background: "linear-gradient(135deg, #f97316, #dc2626)" }}
      >
        {open ? (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        )}
      </button>
    </div>
  );
}
