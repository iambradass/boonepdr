import Link from "next/link";
import { HiPhone, HiShieldCheck, HiStar, HiClock } from "react-icons/hi";
import { BUSINESS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-dark to-navy min-h-[600px] md:min-h-[700px] flex items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <HiStar className="w-4 h-4 text-yellow-400" />
            <span className="text-white/90 text-sm font-medium">
              {BUSINESS.rating}-Star Rated | {BUSINESS.reviewCount}+ Reviews
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            DFW&apos;s Premier{" "}
            <span className="text-steel-light">Paintless Dent Repair</span>{" "}
            Experts
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
            Hail damage? Door dings? We restore your vehicle to perfection
            — without repainting. Save time, save money, and preserve your
            factory finish. Serving Fort Worth, Dallas, and the entire DFW
            metroplex.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white font-bold px-8 py-4 rounded-lg text-lg transition-all hover:shadow-lg hover:shadow-accent/25"
            >
              Get a Free Quote
            </Link>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all"
            >
              <HiPhone className="w-5 h-5" />
              Call {BUSINESS.phone}
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <HiShieldCheck className="w-5 h-5 text-green-400" />
              Lifetime Warranty
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <HiShieldCheck className="w-5 h-5 text-green-400" />
              Insurance Approved
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <HiClock className="w-5 h-5 text-green-400" />
              Same-Day Service Available
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <HiShieldCheck className="w-5 h-5 text-green-400" />
              Free Estimates
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
