"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/expertises", label: "Expertises" },
  { href: "/blog", label: "Blog" },
  { href: "/#secteurs", label: "Secteurs" },
  { href: "/#references", label: "Références" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0f1e]/98 shadow-[0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md"
          : "bg-[#0a0f1e]/90 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <span
              className="flex items-center justify-center w-9 h-9 rounded-lg text-white font-black text-sm select-none"
              style={{ background: "linear-gradient(135deg, #f97316, #dc2626)" }}
            >
              SI
            </span>
            <div className="hidden sm:block">
              <span className="text-white font-black text-sm tracking-tight">
                <span className="text-orange-400">RISK</span>CONSULTING
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-0.5">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === href
                      ? "text-orange-400"
                      : "text-slate-400 hover:text-white hover:bg-white/8"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Phone + CTA + burger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+33780629492"
              className="hidden lg:flex items-center gap-1.5 text-slate-300 hover:text-orange-400 transition-colors text-sm font-semibold"
            >
              <svg className="w-3.5 h-3.5 text-orange-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              07 80 62 94 92
            </a>
            <Link
              href="/devis"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg text-white text-sm font-bold transition-all hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #f97316, #dc2626)" }}
            >
              Demander un devis
            </Link>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              className="md:hidden p-2 rounded-md text-slate-400 hover:text-white hover:bg-white/8 transition-colors"
            >
              {open ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 border-t border-white/8 mt-1">
            <ul className="mt-3 space-y-1">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block px-3 py-2 rounded-md text-sm text-slate-400 hover:text-white hover:bg-white/8 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="tel:+33780629492"
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-orange-400 font-semibold"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  07 80 62 94 92
                </a>
              </li>
              <li>
                <Link
                  href="/devis"
                  className="block mt-2 px-3 py-2.5 rounded-lg text-white text-sm font-bold text-center transition-all hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #f97316, #dc2626)" }}
                >
                  Demander un devis
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
