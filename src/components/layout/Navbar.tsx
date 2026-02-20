"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const BOOKING_URL =
  "https://link.untapped-revenue.com/widget/booking/wTGfHV6q8ftOpa60t0Mg";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Results", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-[#06040A]/95 backdrop-blur-md border-b border-white/5 shadow-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between h-18 md:h-20">
        {/* Logo */}
        <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center">
          <Image
            src="/logo.png"
            alt="Untapped Revenue"
            width={160}
            height={40}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#E8371B] text-white rounded-full px-6 py-3 text-sm font-semibold hover:bg-[#FF4D2B] transition-all duration-200 shadow-lg shadow-[#E8371B]/20"
          >
            Book a Call
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-px">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 z-50"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-[#06040A] z-40 flex flex-col transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ paddingTop: "5rem" }}
      >
        <div className="flex flex-col gap-2 px-6 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-semibold text-white/80 hover:text-white py-3 border-b border-white/5 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-8">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 bg-[#E8371B] text-white rounded-full px-8 py-4 text-lg font-semibold hover:bg-[#FF4D2B] transition-all duration-200"
            >
              Book a Free Strategy Call
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
