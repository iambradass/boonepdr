"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HiPhone, HiShieldCheck, HiStar, HiClock } from "react-icons/hi";
import { BUSINESS } from "@/lib/constants";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-navy min-h-[700px] md:min-h-[780px] flex items-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Animated glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-steel/20 rounded-full blur-[120px] hero-float" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/15 rounded-full blur-[100px] hero-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-steel/5 rounded-full blur-[80px]" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Bottom gradient fade — thin edge only */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white/80 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 pb-36 md:pb-44">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8 transition-all duration-700 ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <HiStar key={i} className="w-3.5 h-3.5 text-yellow-400" />
              ))}
            </div>
            <span className="text-white/90 text-sm font-medium">
              {BUSINESS.rating}-Star Rated &middot; {BUSINESS.reviewCount}+ Reviews
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] mb-6 transition-all duration-700 ease-out ${
              loaded ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: loaded ? "100ms" : "0ms" }}
          >
            DFW&apos;s Premier{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-steel-light to-white">
                Paintless Dent Repair
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-accent to-accent/0 rounded-full" />
            </span>{" "}
            Experts
          </h1>

          {/* Subheadline */}
          <p
            className={`text-lg md:text-xl text-white/75 leading-relaxed mb-10 max-w-2xl transition-all duration-700 ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: loaded ? "200ms" : "0ms" }}
          >
            Hail damage? Door dings? We restore your vehicle to perfection
            — without repainting. Save time, save money, and preserve your
            factory finish. Serving Fort Worth, Dallas, and the entire DFW
            metroplex.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-14 transition-all duration-700 ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: loaded ? "300ms" : "0ms" }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:shadow-[0_8px_30px_rgba(232,64,64,0.35)] hover:-translate-y-0.5 active:translate-y-0"
            >
              Get a Free Quote
              <svg
                className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <HiPhone className="w-5 h-5" />
              Call {BUSINESS.phone}
            </a>
          </div>

          {/* Trust indicators */}
          <div
            className={`flex flex-wrap justify-center sm:justify-start gap-x-8 gap-y-3 transition-all duration-700 ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: loaded ? "500ms" : "0ms" }}
          >
            {[
              { icon: HiShieldCheck, text: "Lifetime Warranty" },
              { icon: HiClock, text: "Same-Day Service" },
              { icon: HiShieldCheck, text: "Free Estimates" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2 text-white/60 text-sm"
              >
                <item.icon className="w-4 h-4 text-green-400" />
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
