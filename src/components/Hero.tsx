import Link from "next/link";
import { HiPhone, HiShieldCheck, HiStar, HiClock } from "react-icons/hi";
import { BUSINESS } from "@/lib/constants";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy min-h-[100svh] md:min-h-[780px] flex items-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 hero-gradient" aria-hidden="true" />

      {/* Glow orbs — hidden on mobile for performance */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-steel/20 rounded-full blur-[120px] hero-float hidden md:block" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/15 rounded-full blur-[100px] hero-float-delayed hidden md:block" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-steel/5 rounded-full blur-[80px] hidden md:block" aria-hidden="true" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white/80 to-transparent" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 pb-28 md:pb-36 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text content */}
          <div>
            {/* Badge */}
            <div className="hero-enter-1 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8">
              <div className="flex items-center gap-0.5" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <HiStar key={i} className="w-3.5 h-3.5 text-yellow-400" />
                ))}
              </div>
              <span className="text-white/90 text-sm font-medium">
                {BUSINESS.rating}-Star Rated &middot; {BUSINESS.reviewCount}+ Reviews
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-enter-2 text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.08] mb-6">
              DFW&apos;s Premier{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-steel-light to-white">
                  Paintless Dent Repair
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-accent to-accent/0 rounded-full" aria-hidden="true" />
              </span>{" "}
              Experts
            </h1>

            {/* Subheadline */}
            <p className="hero-enter-3 text-lg text-white/80 leading-relaxed mb-10">
              Hail damage? Door dings? We restore your vehicle to perfection
              — without repainting. Save time, save money, and preserve your
              factory finish. Serving Fort Worth, Dallas, and the entire DFW
              metroplex.
            </p>

            {/* CTA Buttons */}
            <div className="hero-enter-4 flex flex-col sm:flex-row gap-4 mb-10">
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
                  aria-hidden="true"
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
                aria-label={`Call us at ${BUSINESS.phone}`}
              >
                <HiPhone className="w-5 h-5" aria-hidden="true" />
                Call {BUSINESS.phone}
              </a>
            </div>

            {/* Trust indicators */}
            <div className="hero-enter-5 flex flex-wrap gap-x-8 gap-y-3">
              {[
                { icon: HiShieldCheck, text: "Lifetime Warranty" },
                { icon: HiClock, text: "Same-Day Service" },
                { icon: HiShieldCheck, text: "Free Estimates" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-white/75 text-sm">
                  <item.icon className="w-4 h-4 text-green-400" aria-hidden="true" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Before/After Slider — desktop only */}
          <div className="hero-enter-3 hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-white/5 rounded-3xl blur-xl" aria-hidden="true" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <BeforeAfterSlider
                  beforeImage="/images/gallery/1.jpeg"
                  afterImage="/images/gallery/2.jpeg"
                  beforeLabel="Before"
                  afterLabel="After"
                  height="420px"
                />
              </div>
              <p className="text-center text-white/50 text-xs mt-3 tracking-wide">
                Real repair · No filters · Drag to compare
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
