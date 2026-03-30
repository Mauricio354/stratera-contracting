"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const services = [
  { href: "/services/kitchen-renovation-calgary", label: "Kitchen Renovation" },
  { href: "/services/bathroom-renovation-calgary", label: "Bathroom Renovation" },
  { href: "/services/basement-development-calgary", label: "Basement Development" },
  { href: "/services/commercial-renovation-calgary", label: "Commercial Renovation" },
];

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const isActive = (href: string) => pathname === href;
  const isServicesActive = services.some((s) => pathname === s.href);

  return (
    <>
      {/* sticky top-0 keeps the navbar pinned when scrolling */}
      <nav className="sticky top-0 w-full z-50 py-4 bg-primary shadow-[0_2px_20px_rgba(0,0,0,0.15)]">
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 no-underline">
            <svg className="h-10 w-auto" viewBox="0 0 50 50" fill="none">
              <path d="M8 12c4-6 12-10 20-8s14 10 14 18" stroke="rgba(255,255,255,.3)" strokeWidth=".7" fill="none" />
              <path d="M5 18c3-8 14-14 24-10s16 14 12 24" stroke="rgba(255,255,255,.25)" strokeWidth=".7" fill="none" />
              <path d="M4 24c2-10 12-18 24-14s18 16 14 28" stroke="rgba(255,255,255,.2)" strokeWidth=".7" fill="none" />
              <path d="M30 8c-6-1-14 2-16 8-2 7 6 10 12 12s14 4 12 12c-2 7-10 10-18 8" stroke="white" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            </svg>
            <span className="font-serif text-xl font-bold text-white tracking-[2px] uppercase">Statera</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8 list-none">
            {/* Services Dropdown — hover events on the <li> wrapper so the mouse
                never "leaves" when travelling from the button down into the menu */}
            <li
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${isServicesActive ? "text-accent" : "text-white/80 hover:text-white"}`}
              >
                Services
                <svg
                  className={`w-3.5 h-3.5 mt-0.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {/* pt-3 creates an invisible bridge over the gap so the mouse
                  doesn't leave the <li> when moving from button to menu panel */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 min-w-[230px] transition-all duration-150 ${
                  servicesOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-1"
                }`}
              >
                <div className="bg-primary border border-white/10 rounded-card shadow-[0_16px_48px_rgba(0,0,0,0.5)] py-2 overflow-hidden">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setServicesOpen(false)}
                      className={`block px-5 py-3 text-sm transition-colors hover:bg-white/10 ${
                        pathname === s.href ? "text-accent font-semibold" : "text-white/80 hover:text-white"
                      }`}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 ${isActive(link.href) ? "text-white after:w-full" : "text-white/80 hover:text-white after:w-0 hover:after:w-full"}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden lg:inline-flex btn btn-primary text-sm">
              Get a Quote
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-white"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                {menuOpen ? <><path d="M18 6L6 18" /><path d="M6 6l12 12" /></> : <><path d="M3 6h18" /><path d="M3 12h18" /><path d="M3 18h18" /></>}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu — only rendered when open so it never blocks clicks */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-primary flex flex-col items-center justify-center"
          style={{ zIndex: 9999 }}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full border border-white/15 text-white hover:bg-white/10 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18" /><path d="M6 6l12 12" />
            </svg>
          </button>

          {/* Logo inside menu */}
          <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 mb-10">
            <span className="font-serif text-lg font-bold text-white tracking-[2px] uppercase">Statera</span>
          </Link>

          {/* Services label */}
          <p className="text-white/35 text-[10px] font-bold uppercase tracking-[2.5px] mb-3">Services</p>
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              onClick={() => setMenuOpen(false)}
              className={`block text-[1.15rem] font-medium py-2.5 px-8 text-center transition-colors ${
                pathname === s.href ? "text-accent" : "text-white/75 hover:text-white"
              }`}
            >
              {s.label}
            </Link>
          ))}

          <div className="w-12 h-px bg-white/10 my-5" />

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block text-[1.15rem] font-medium py-2.5 px-8 text-center transition-colors ${
                isActive(link.href) ? "text-accent" : "text-white/75 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="btn btn-primary mt-8 text-base px-10"
          >
            Get a Free Quote
          </Link>
        </div>
      )}
    </>
  );
}
