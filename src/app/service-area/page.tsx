import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, SERVICE_CITIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Service Area | DFW Metroplex Coverage",
  description:
    "Paintless dent repair serving Fort Worth, Dallas, Arlington, Mansfield, and 35+ cities across the DFW metroplex. Mobile service — we come to you.",
};

export default function ServiceAreaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Serving the Entire DFW Metroplex
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Professional paintless dent repair throughout Dallas-Fort Worth. We
            bring our mobile shop to your home, office, or wherever is
            convenient.
          </p>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-bg-light rounded-2xl overflow-hidden h-96 flex items-center justify-center mb-12">
            <div className="text-center p-8">
              <svg
                className="w-16 h-16 text-text-muted mx-auto mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="text-text-muted text-lg font-medium mb-2">
                Interactive Google Map
              </p>
              <p className="text-text-muted text-sm">
                An embedded Google Map showing our DFW coverage area will be
                placed here
              </p>
            </div>
          </div>

          {/* Mobile Service Banner */}
          <div className="bg-accent rounded-2xl p-8 md:p-10 text-center text-white mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Mobile Service — We Come to You
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              No need to drive across town or sit in a waiting room. Our
              fully-equipped mobile setup comes to your home, office, or
              dealership. Professional results, zero hassle.
            </p>
          </div>

          {/* Cities Grid */}
          <h2 className="text-3xl font-bold text-navy mb-8 text-center">
            Cities We Serve
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {SERVICE_CITIES.map((city) => (
              <div
                key={city}
                className="bg-white border border-border rounded-lg px-4 py-3 text-center hover:border-steel/30 hover:shadow-sm transition-all"
              >
                <span className="text-sm font-medium text-navy">{city}</span>
                <span className="block text-xs text-text-muted">TX</span>
              </div>
            ))}
          </div>

          <p className="text-text-muted text-center mt-8">
            Don&apos;t see your city listed? We likely still serve your area.{" "}
            <Link href="/contact" className="text-steel font-semibold hover:text-navy transition-colors">
              Contact us
            </Link>{" "}
            to confirm coverage in your location.
          </p>
        </div>
      </section>

      {/* Why DFW Needs PDR */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-10 text-center">
            Why DFW Needs a Trusted PDR Specialist
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Hail Alley",
                desc: "Texas is one of the most hail-prone states in the country, and DFW gets hit multiple times per year. When storms roll through, you need a PDR specialist you can trust — not a fly-by-night chaser.",
              },
              {
                title: "7.6 Million People, Lots of Parking Lots",
                desc: "With a metro population of 7.6 million, parking lots are crowded. Door dings, shopping cart dents, and lot damage are a daily reality for DFW drivers.",
              },
              {
                title: "Local, Not a Storm Chaser",
                desc: "After a hailstorm, out-of-state 'storm chasers' flood into DFW. They do the work, leave town, and you can't reach them if there's an issue. We live here. We're not going anywhere.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-border"
              >
                <h3 className="text-xl font-bold text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Need PDR in the DFW Area?
          </h2>
          <p className="text-text-muted text-lg mb-8">
            Get a free estimate and experience the convenience of mobile
            paintless dent repair. We come to you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-hover text-white font-bold px-10 py-4 rounded-lg text-lg transition-all hover:shadow-lg hover:shadow-accent/25"
            >
              Get a Free Quote
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

      <div className="h-16 lg:hidden" />
    </>
  );
}
