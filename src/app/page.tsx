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
import InstagramFeed from "@/components/InstagramFeed";
import ScrollReveal from "@/components/ScrollReveal";
import { BUSINESS } from "@/lib/constants";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* What is PDR? */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-3">
                The Smart Repair
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">
                What is Paintless Dent Repair?
              </h2>
              <p className="text-text-muted text-lg max-w-2xl mx-auto">
                PDR is the smart way to remove dents without sanding, filling, or
                repainting — preserving your factory finish and your vehicle&apos;s
                value.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: HiOutlineCurrencyDollar,
                title: "Save 40-70% vs. Body Shops",
                desc: "No paint, no bondo, no inflated body shop bills. PDR costs a fraction of traditional repair — and delivers better results.",
                delay: 0,
              },
              {
                icon: HiOutlineClock,
                title: "Same-Day Service",
                desc: "Most repairs are completed in hours, not days or weeks. We come to your home or office — no rental car needed.",
                delay: 100,
              },
              {
                icon: HiOutlineSparkles,
                title: "Factory Finish Preserved",
                desc: "Your original paint stays intact. No color-matching issues, no overspray, no depreciation from repaint records on CARFAX.",
                delay: 200,
              },
            ].map((item) => (
              <ScrollReveal key={item.title} delay={item.delay}>
                <div className="text-center p-8 rounded-2xl hover:bg-bg-light transition-all duration-300 group">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/15 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-steel font-semibold text-sm tracking-wider uppercase mb-3">
                What We Do
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">
                Our Services
              </h2>
              <p className="text-text-muted text-lg max-w-2xl mx-auto">
                From minor door dings to severe hail damage, we handle it all with
                precision and care. Every repair comes with a lifetime warranty.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollReveal delay={0} className="h-full">
              <ServiceCard
                icon={BsCloudHail}
                title="Hail Damage Repair"
                description="Texas hailstorms don't stand a chance. We remove all hail dents and work directly with your insurance — $0 out of pocket."
                href="/services/hail-damage-repair"
              />
            </ScrollReveal>
            <ScrollReveal delay={80} className="h-full">
              <ServiceCard
                icon={BsCarFront}
                title="Door Ding & Dent Repair"
                description="Parking lot dings, shopping cart dents, and minor collision damage removed quickly — starting at just $75."
                href="/services/door-ding-dent-repair"
              />
            </ScrollReveal>
            <ScrollReveal delay={160} className="h-full">
              <ServiceCard
                icon={IoCarSportOutline}
                title="Lease Return Repair"
                description="Returning your lease? We fix every ding and dent so you avoid expensive lease-end penalty charges."
                href="/services/lease-return"
              />
            </ScrollReveal>
            <ScrollReveal delay={240} className="h-full">
              <ServiceCard
                icon={MdOutlineHomeRepairService}
                title="Dealer & Fleet Services"
                description="Dealerships and fleet managers trust us for fast, high-quality reconditioning that keeps inventory moving."
                href="/services/lease-return"
              />
            </ScrollReveal>
          </div>

          <ScrollReveal delay={300}>
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-steel font-semibold hover:text-navy transition-colors"
              >
                View All Services
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
          </ScrollReveal>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-3">
                Real Results
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">
                See the Difference
              </h2>
              <p className="text-text-muted text-lg max-w-2xl mx-auto">
                Drag the slider to see real before &amp; after results.
                These placeholders will be replaced with Boone&apos;s actual repair
                photos.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal delay={0} direction="left">
              <div>
                <BeforeAfterSlider
                  beforeColor="#78909C"
                  afterColor="#1A1A1A"
                  beforeLabel="Before"
                  afterLabel="After"
                  height="280px"
                />
                <p className="text-center text-sm text-text-muted mt-3 font-medium">
                  Hail Damage — 2023 Ford F-150
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150} direction="right">
              <div>
                <BeforeAfterSlider
                  beforeColor="#90A4AE"
                  afterColor="#C41E3A"
                  beforeLabel="Before"
                  afterLabel="After"
                  height="280px"
                />
                <p className="text-center text-sm text-text-muted mt-3 font-medium">
                  Door Ding — 2022 Toyota Camry
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <div className="text-center mt-12">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 bg-navy hover:bg-navy-dark text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                View Full Gallery
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Instagram Feed */}
      <InstagramFeed />

      {/* Trust Badges */}
      <TrustBadges />

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* Service Area CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-navy via-navy-dark to-navy rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
              {/* Decorative orbs */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-steel/10 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-[60px]" />

              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                  Serving the Entire DFW Metroplex
                </h2>
                <p className="text-white/75 text-lg max-w-2xl mx-auto mb-10">
                  From Fort Worth to Dallas, Arlington to Grapevine — we bring
                  professional paintless dent repair directly to your door. Mobile
                  service available throughout the metroplex.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/service-area"
                    className="bg-white text-navy font-semibold px-8 py-3.5 rounded-xl hover:bg-bg-light transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Check Your Area
                  </Link>
                  <Link
                    href="/contact"
                    className="bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Get a Free Quote
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">
              Ready to Remove Those Dents?
            </h2>
            <p className="text-text-muted text-lg mb-10 max-w-2xl mx-auto">
              Get a free, no-obligation estimate in minutes. Upload photos of your
              damage and we&apos;ll give you an honest quote — no surprises, no
              hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group bg-accent hover:bg-accent-hover text-white font-bold px-10 py-4 rounded-xl text-lg transition-all duration-300 hover:shadow-[0_8px_30px_rgba(232,64,64,0.3)] hover:-translate-y-0.5"
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
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom padding for floating CTA on mobile */}
      <div className="h-16 lg:hidden" />
    </>
  );
}
