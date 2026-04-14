"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { HiMenu, HiX, HiPhone, HiChevronDown } from "react-icons/hi";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";
import Logo from "@/components/Logo";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 20;
      setScrolled((prev) => (prev !== next ? next : prev));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Mobile menu: lock scroll + Escape key
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      const handleKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMobileOpen(false);
      };
      document.addEventListener("keydown", handleKey);
      return () => {
        document.body.style.overflow = "";
        document.removeEventListener("keydown", handleKey);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="shrink-0 group">
            <Logo size={160} className="group-hover:opacity-90 transition-opacity duration-300" />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.href)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <div className="flex items-center">
                    <Link
                      href={link.href}
                      className="px-3 py-2 text-sm font-medium text-text-dark hover:text-steel transition-colors rounded-md"
                    >
                      {link.label}
                    </Link>
                    <button
                      onClick={() => {
                        const next = openDropdown === link.href ? null : link.href;
                        setOpenDropdown(next);
                        if (next) {
                          requestAnimationFrame(() => {
                            const first = dropdownRef.current?.querySelector<HTMLAnchorElement>(
                              `[data-submenu="${link.href}"] [role="menuitem"]`
                            );
                            first?.focus();
                          });
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Escape") setOpenDropdown(null);
                        if (e.key === "ArrowDown") {
                          e.preventDefault();
                          setOpenDropdown(link.href);
                          requestAnimationFrame(() => {
                            const first = dropdownRef.current?.querySelector<HTMLAnchorElement>(
                              `[data-submenu="${link.href}"] [role="menuitem"]`
                            );
                            first?.focus();
                          });
                        }
                      }}
                      aria-expanded={openDropdown === link.href}
                      aria-haspopup="menu"
                      aria-label={`${link.label} submenu`}
                      className="p-1 text-text-dark hover:text-steel transition-colors rounded focus:outline-none focus:ring-2 focus:ring-steel/30"
                    >
                      <HiChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openDropdown === link.href ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Dropdown */}
                  <div
                    role="menu"
                    data-submenu={link.href}
                    className={`absolute top-full left-0 pt-1 transition-all duration-200 ${
                      openDropdown === link.href
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 -translate-y-2 invisible"
                    }`}
                  >
                    <div className="bg-white rounded-lg shadow-xl border border-border py-2 min-w-[240px]">
                      {link.children.map((child, idx) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          role="menuitem"
                          className="block px-4 py-2.5 text-sm text-text-dark hover:bg-bg-light hover:text-steel transition-colors focus:outline-none focus:bg-bg-light focus:text-steel"
                          onClick={() => setOpenDropdown(null)}
                          onKeyDown={(e) => {
                            if (e.key === "Escape") {
                              e.preventDefault();
                              setOpenDropdown(null);
                            }
                            if (e.key === "ArrowDown") {
                              e.preventDefault();
                              const items = dropdownRef.current?.querySelectorAll<HTMLAnchorElement>(
                                `[data-submenu="${link.href}"] [role="menuitem"]`
                              );
                              if (items) items[(idx + 1) % items.length]?.focus();
                            }
                            if (e.key === "ArrowUp") {
                              e.preventDefault();
                              const items = dropdownRef.current?.querySelectorAll<HTMLAnchorElement>(
                                `[data-submenu="${link.href}"] [role="menuitem"]`
                              );
                              if (items) items[(idx - 1 + items.length) % items.length]?.focus();
                            }
                          }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-text-dark hover:text-steel transition-colors rounded-md"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="flex items-center gap-1.5 text-sm font-bold text-navy hover:text-steel transition-colors duration-300"
              aria-label={`Call ${BUSINESS.phone}`}
            >
              <HiPhone className="w-4 h-4" aria-hidden="true" />
              {BUSINESS.phone}
            </a>
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-hover text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-all duration-300 shadow-sm hover:shadow-[0_4px_16px_rgba(232,64,64,0.3)] hover:-translate-y-0.5 active:translate-y-0"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile buttons */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="flex items-center justify-center w-10 h-10 bg-navy text-white rounded-lg"
              aria-label={`Call us at ${BUSINESS.phone}`}
            >
              <HiPhone className="w-5 h-5" aria-hidden="true" />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex items-center justify-center w-10 h-10 text-navy"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 top-16 z-30 bg-black/40 lg:hidden"
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`fixed top-16 left-0 right-0 z-40 lg:hidden transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundColor: "var(--bg-white)", height: "calc(100dvh - 4rem)" }}
        aria-hidden={!mobileOpen}
      >
        <nav aria-label="Mobile navigation" className="flex flex-col p-6 gap-1 overflow-y-auto h-full">
          {NAV_LINKS.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                className="block px-4 py-3 text-lg font-medium text-text-dark hover:text-steel hover:bg-bg-light rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="ml-4 border-l-2 border-border pl-2">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2.5 text-base text-text-muted hover:text-steel hover:bg-bg-light rounded-lg transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-6 pt-6 border-t border-border">
            <Link
              href="/contact"
              className="block w-full bg-accent hover:bg-accent-hover text-white font-semibold py-3.5 rounded-lg text-center text-lg transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Get a Free Quote
            </Link>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="flex items-center justify-center gap-2 mt-3 w-full bg-navy text-white font-semibold py-3.5 rounded-lg text-lg"
              aria-label={`Call us at ${BUSINESS.phone}`}
            >
              <HiPhone className="w-5 h-5" aria-hidden="true" />
              {BUSINESS.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
