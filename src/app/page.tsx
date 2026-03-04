import Link from "next/link";
import {
  HiOutlineSparkles,
  HiOutlineCurrencyDollar,
  HiOutlineClock,
} from "react-icons/hi";
import { BsCloudHail, BsCarFront } from "react-icons/bs";
import { IoCarSportOutline } from "react-icons/io5";
import { MdOutlineHomeRepairService } from "react-icons/md";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import TrustBadges from "@/components/TrustBadges";
import { BUSINESS } from "@/lib/constants";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* What is PDR? */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              What is Paintless Dent Repair?
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              PDR is the smart way to remove dents without sanding, filling, or
              repainting — preserving your factory finish and your vehicle&apos;s
              value.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: HiOutlineCurrencyDollar,
                title: "Save 40-70% vs. Body Shops",
                desc: "No paint, no bondo, no inflated body shop bills. PDR costs a fraction of traditional repair — and delivers better results.",
              },
              {
                icon: HiOutlineClock,
                title: "Same-Day Service",
                desc: "Most repairs are completed in hours, not days or weeks. We come to your home or office — no rental car needed.",
              },
              {
                icon: HiOutlineSparkles,
                title: "Factory Finish Preserved",
                desc: "Your original paint stays intact. No color-matching issues, no overspray, no depreciation from repaint records on CARFAX.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-6 rounded-xl hover:bg-bg-light transition-colors"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Our Services
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              From minor door dings to severe hail damage, we handle it all with
              precision and care. Every repair comes with a lifetime warranty.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={BsCloudHail}
              title="Hail Damage Repair"
              description="Texas hailstorms don't stand a chance. We remove all hail dents and work directly with your insurance — $0 out of pocket."
              href="/services/hail-damage-repair"
            />
            <ServiceCard
              icon={BsCarFront}
              title="Door Ding & Dent Repair"
              description="Parking lot dings, shopping cart dents, and minor collision damage removed quickly — starting at just $75."
              href="/services/door-ding-dent-repair"
            />
            <ServiceCard
              icon={IoCarSportOutline}
              title="Lease Return Repair"
              description="Returning your lease? We fix every ding and dent so you avoid expensive lease-end penalty charges."
              href="/services/lease-return"
            />
            <ServiceCard
              icon={MdOutlineHomeRepairService}
              title="Dealer & Fleet Services"
              description="Dealerships and fleet managers trust us for fast, high-quality reconditioning that keeps inventory moving."
              href="/services/lease-return"
            />
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-steel font-semibold hover:text-navy transition-colors"
            >
              View All Services
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              See the Difference
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Drag the slider to see real before &amp; after results.
              These placeholders will be replaced with Boone&apos;s actual repair
              photos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <BeforeAfterSlider
                beforeColor="#78909C"
                afterColor="#1B3A5C"
                beforeLabel="Before"
                afterLabel="After"
                height="280px"
              />
              <p className="text-center text-sm text-text-muted mt-3">
                Hail Damage — 2023 Ford F-150
              </p>
            </div>
            <div>
              <BeforeAfterSlider
                beforeColor="#90A4AE"
                afterColor="#2E75B6"
                beforeLabel="Before"
                afterLabel="After"
                height="280px"
              />
              <p className="text-center text-sm text-text-muted mt-3">
                Door Ding — 2022 Toyota Camry
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* Service Area CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-navy to-navy-dark rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Serving the Entire DFW Metroplex
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              From Fort Worth to Dallas, Arlington to Grapevine — we bring
              professional paintless dent repair directly to your door. Mobile
              service available throughout the metroplex.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/service-area"
                className="bg-white text-navy font-semibold px-8 py-3.5 rounded-lg hover:bg-bg-light transition-colors"
              >
                Check Your Area
              </Link>
              <Link
                href="/contact"
                className="bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-3.5 rounded-lg transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Ready to Remove Those Dents?
          </h2>
          <p className="text-text-muted text-lg mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation estimate in minutes. Upload photos of your
            damage and we&apos;ll give you an honest quote — no surprises, no
            hidden fees.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-hover text-white font-bold px-10 py-4 rounded-lg text-lg transition-all hover:shadow-lg hover:shadow-accent/25"
            >
              Get Your Free Quote
            </Link>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="text-navy font-semibold text-lg hover:text-steel transition-colors"
            >
              or call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Bottom padding for floating CTA on mobile */}
      <div className="h-16 lg:hidden" />
    </>
  );
}
