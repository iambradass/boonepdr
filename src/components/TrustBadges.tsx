import { HiShieldCheck, HiStar, HiClock, HiBadgeCheck, HiCurrencyDollar } from "react-icons/hi";
import { BUSINESS } from "@/lib/constants";

const badges = [
  {
    icon: HiShieldCheck,
    label: "Lifetime Warranty",
    sublabel: "On All Repairs",
  },
  {
    icon: HiStar,
    label: `${BUSINESS.rating}-Star Rated`,
    sublabel: `${BUSINESS.reviewCount}+ Reviews`,
  },
  {
    icon: HiBadgeCheck,
    label: "Insurance Approved",
    sublabel: "We Work With All Carriers",
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
  return (
    <section className="bg-navy py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-3 text-white"
            >
              <badge.icon className="w-8 h-8 text-accent shrink-0" />
              <div>
                <div className="font-semibold text-sm whitespace-nowrap">
                  {badge.label}
                </div>
                <div className="text-white/60 text-xs">{badge.sublabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
