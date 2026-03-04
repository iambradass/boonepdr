"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX, HiPhone, HiChevronDown } from "react-icons/hi";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      {/* Top bar — visible on desktop */}
      <div className="hidden md:block bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9 text-sm">
          <span>{BUSINESS.hours.weekdays} | {BUSINESS.hours.saturday}</span>
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="flex items-center gap-1.5 hover:text-accent transition-colors font-medium"
          >
            <HiPhone className="w-3.5 h-3.5" />
            {BUSINESS.phone}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">BS</span>
            </div>
            <div className="flex flex-col">
              <span className="text-navy font-bold text-lg leading-tight">
                Boone Sanders
              </span>
              <span className="text-text-muted text-xs leading-tight tracking-wide uppercase">
                Paintless Dent Repair
              </span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div
                  key={link.href}
                  className="relative group"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-text-dark hover:text-steel transition-colors rounded-md"
                  >
                    {link.label}
                    <HiChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </Link>
                  {/* Dropdown */}
                  <div
                    className={`absolute top-full left-0 pt-1 transition-all duration-200 ${
                      servicesOpen
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 -translate-y-2 invisible"
                    }`}
                  >
                    <div className="bg-white rounded-lg shadow-xl border border-border py-2 min-w-[240px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-text-dark hover:bg-bg-light hover:text-steel transition-colors"
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
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-steel transition-colors"
            >
              <HiPhone className="w-4 h-4" />
              {BUSINESS.phone}
            </a>
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-hover text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors shadow-sm"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile buttons */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="flex items-center justify-center w-10 h-10 bg-navy text-white rounded-lg"
              aria-label="Call us"
            >
              <HiPhone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex items-center justify-center w-10 h-10 text-navy"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
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

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 top-16 bg-white z-40 lg:hidden transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-6 gap-1">
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
            >
              <HiPhone className="w-5 h-5" />
              {BUSINESS.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
