"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }

    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header
      ref={menuRef}
      className="fixed top-0 left-0 right-0 z-100 bg-cream/85 backdrop-blur-[20px] backdrop-saturate-[1.2]"
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-ink focus:text-cream focus:rounded-lg font-mono text-[0.7rem]"
      >
        Skip to main content
      </a>

      <div className="flex items-center justify-between px-14 py-7 max-lg:px-8 max-md:px-5 max-md:py-4">
        <Link
          href="/"
          className="font-mono text-[0.8rem] font-bold text-ink tracking-[-0.01em]"
        >
          Unbound Studios
        </Link>

        <nav className="flex items-center gap-10 max-md:gap-4">
          <Link
            href="/#work"
            className="font-sans text-[0.9rem] font-medium text-text-secondary hover:text-ink transition-colors duration-300 max-md:hidden"
          >
            Work
          </Link>
          <Link
            href="/about"
            className="font-sans text-[0.9rem] font-medium text-text-secondary hover:text-ink transition-colors duration-300 max-md:hidden"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="font-mono text-[0.7rem] font-medium text-cream bg-ink px-5 py-2.5 rounded-pill hover:bg-green hover:text-white hover:-translate-y-px transition-all duration-300 max-md:hidden"
          >
            Get in touch
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="hidden max-md:flex flex-col justify-center items-center gap-[5px] w-8 h-8"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-5 h-[1.5px] bg-ink transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-ink transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-ink transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
            />
          </button>
        </nav>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="hidden max-md:flex flex-col gap-4 px-5 pb-6 border-t border-border bg-cream">
          <Link
            href="/#work"
            onClick={() => setMenuOpen(false)}
            className="font-sans text-[1rem] font-medium text-text-secondary hover:text-ink transition-colors duration-200 py-2"
          >
            Work
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="font-sans text-[1rem] font-medium text-text-secondary hover:text-ink transition-colors duration-200 py-2"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="inline-block text-center font-mono text-[0.7rem] font-medium text-cream bg-ink px-5 py-2.5 rounded-pill hover:bg-green hover:text-white transition-all duration-300"
          >
            Get in touch
          </Link>
        </div>
      )}
    </header>
  );
}
