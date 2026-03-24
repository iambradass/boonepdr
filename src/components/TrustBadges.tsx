"use client";

import { useEffect, useRef, useState } from "react";
import { HiShieldCheck, HiStar, HiClock, HiBadgeCheck, HiCurrencyDollar } from "react-icons/hi";
import { BUSINESS } from "@/lib/constants";

const badges = [
  {
    icon: HiShieldCheck,
    label: "Satisfaction Guaranteed",
    sublabel: "On Every Repair",
  },
  {
    icon: HiStar,
    label: `${BUSINESS.rating}-Star Rated`,
    sublabel: `${BUSINESS.reviewCount}+ Reviews`,
  },
  {
    icon: HiBadgeCheck,
    label: "We Work With Insurance",
    sublabel: "All Carriers Welcome",
  },
  {
    icon: HiClock,
    label: `${BUSINESS.yearsExperience}+ Years`,
    sublabel: "Experience",
  },
  {
    icon: HiCurrencyDollar,
    label: "$0 Out of Pocket",
    sublabel: "On Hail Claims",
  },
];

export default function TrustBadges() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-gradient-to-r from-navy-dark via-navy to-navy-dark py-10 relative overflow-hidden">
      {/* Subtle accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {badges.map((badge, i) => (
            <div
              key={badge.label}
              className="flex items-center gap-3.5 text-white transition-all duration-500"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transitionDelay: `${i * 80}ms`,
                transitionDuration: "600ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center">
                <badge.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="font-bold text-sm whitespace-nowrap">
                  {badge.label}
                </div>
                <div className="text-white/65 text-xs font-medium">{badge.sublabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
