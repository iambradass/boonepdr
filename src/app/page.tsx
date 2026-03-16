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
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-16">
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
      <section className="py-16 md:py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-16">
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
                href="/services"
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

      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-16">
              <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-3">
                Simple Process
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">
                How It Works
              </h2>
              <p className="text-text-muted text-lg max-w-2xl mx-auto">
                Three steps from damaged to perfect. No body shop, no rental car,
                no hassle.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector line — desktop only */}
            <div className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden="true" />

            {[
              {
                step: "01",
                title: "Send Us Photos",
                desc: "Text or upload photos of your damage. We'll review and send you a free, honest quote — usually within the hour.",
                delay: 0,
              },
              {
                step: "02",
                title: "We Come to You",
                desc: "We bring our tools to your home, office, or anywhere in DFW. No drop-off, no rental car, no wasted time.",
                delay: 100,
              },
              {
                step: "03",
                title: "Drive Away Perfect",
                desc: "Most repairs are done same-day. Your factory paint stays intact, your warranty is preserved, and your car looks flawless.",
                delay: 200,
              },
            ].map((item) => (
              <ScrollReveal key={item.step} delay={item.delay}>
                <div className="text-center relative">
                  <div className="w-20 h-20 bg-navy rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <span className="text-accent font-extrabold text-2xl">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                  <p className="text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-16">
              <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-3">
                Real Results
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">
                See the Difference
              </h2>
              <p className="text-text-muted text-lg max-w-2xl mx-auto">
                Drag the slider to reveal the transformation. Real repairs,
                real results — no filters, no tricks.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal delay={0} direction="left">
              <div>
                <BeforeAfterSlider
                  beforeImage="/images/gallery/1.jpeg"
                  afterImage="/images/gallery/2.jpeg"
                  beforeLabel="Before"
                  afterLabel="After"
                  height="280px"
                />
                <p className="text-center text-sm text-text-muted mt-3 font-medium">
                  PDR Repair — Real Results
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150} direction="right">
              <div>
                <BeforeAfterSlider
                  beforeImage="/images/gallery/3.jpeg"
                  afterImage="/images/gallery/4.jpeg"
                  beforeLabel="Before"
                  afterLabel="After"
                  height="280px"
                />
                <p className="text-center text-sm text-text-muted mt-3 font-medium">
                  PDR Repair — Real Results
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

      {/* Final CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-navy via-navy-dark to-navy rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
              {/* Decorative orbs */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-steel/10 rounded-full blur-[80px]" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-[60px]" aria-hidden="true" />

              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                  Ready to Remove Those Dents?
                </h2>
                <p className="text-white/75 text-lg max-w-2xl mx-auto mb-4">
                  Get a free, no-obligation estimate in minutes. Upload photos of your
                  damage and we&apos;ll give you an honest quote — no surprises, no
                  hidden fees.
                </p>
                <p className="text-white/50 text-sm mb-10">
                  Mobile service throughout Fort Worth, Dallas, Arlington, and the entire DFW metroplex.{" "}
                  <Link href="/service-area" className="underline underline-offset-2 hover:text-white/70 transition-colors">
                    Check your area
                  </Link>
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="group bg-accent hover:bg-accent-hover text-white font-bold px-10 py-4 rounded-xl text-lg transition-all duration-300 hover:shadow-[0_8px_30px_rgba(232,64,64,0.35)] hover:-translate-y-0.5"
                  >
                    Get Your Free Quote
                  </Link>
                  <a
                    href={`tel:${BUSINESS.phoneRaw}`}
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:-translate-y-0.5 border border-white/20"
                  >
                    Call {BUSINESS.phone}
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom padding for floating CTA on mobile */}
      <div className="h-16 lg:hidden" />
    </>
  );
}
