import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import { BUSINESS } from "@/lib/constants";
import { getServiceSchema, getFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Lease Return & Dealer PDR Services DFW",
  description:
    "Lease return dent repair and dealership PDR services in DFW. Avoid expensive lease-end penalties. Dealer reconditioning and fleet services available.",
};

const faqs = [
  {
    question: "How much can I save on lease return penalties?",
    answer:
      "Lease-end penalty charges for dents typically range from $150-$500+ per dent. PDR repairs the same dents for a fraction of that cost — often saving you $500-$2,000+ total. It's one of the smartest investments you can make before turning in your lease.",
  },
  {
    question: "When should I get dents fixed before my lease ends?",
    answer:
      "We recommend scheduling your repair 2-4 weeks before your lease return date. This gives you time to address all damage without rushing. Many lease companies do a pre-inspection — getting repairs done before that inspection means a clean report.",
  },
  {
    question: "Do dealerships use PDR?",
    answer:
      "Absolutely. Most dealerships outsource PDR work to specialists like us for reconditioning used vehicles and fixing lot damage. PDR is the industry standard for maintaining inventory quality without expensive body shop bills.",
  },
  {
    question: "Do you offer volume pricing for dealers and fleets?",
    answer:
      "Yes. We offer competitive volume pricing for dealerships, rental companies, and fleet managers. Contact us to discuss partnership rates and scheduling that works for your operation.",
  },
  {
    question: "Can you fix dents at our dealership location?",
    answer:
      "Yes — we provide on-site mobile service at your dealership or fleet location. No need to transport vehicles anywhere. We work around your schedule to minimize disruption to your business.",
  },
];

export default function LeaseReturnPage() {
  const serviceSchema = getServiceSchema({
    name: "Lease Return & Dealer PDR Services",
    description:
      "Lease return dent repair and dealership reconditioning services in the Dallas-Fort Worth area. Save hundreds on lease penalties.",
    url: "https://boonepdr.com/services/lease-return",
  });
  const faqSchema = getFAQSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Lease Return &amp; Dealer PDR Services
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Turning in your lease? Don&apos;t get hit with expensive penalty
              charges for dents and dings. We fix everything for a fraction of
              what the dealership would charge you. Dealerships and fleet
              managers — we&apos;re your trusted reconditioning partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white font-bold px-8 py-4 rounded-lg text-lg transition-all"
              >
                Get a Free Quote
              </Link>
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all"
              >
                Call {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lease Return Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                Returning Your Lease? Save Hundreds.
              </h2>
              <p className="text-text-muted leading-relaxed mb-6">
                When you return a leased vehicle, the dealership inspects it for
                damage. Every dent, ding, and scratch gets documented — and the
                penalties add up fast. A single door ding can cost you $150-$500
                in lease-end charges.
              </p>
              <p className="text-text-muted leading-relaxed mb-6">
                PDR fixes those same dents for a fraction of the penalty cost.
                Our customers typically save $500-$2,000+ by getting their
                vehicle repaired before the lease return inspection.
              </p>
              <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
                <h3 className="font-bold text-navy mb-2">
                  Real Example: 2023 BMW X5
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-text-muted">Lease Penalties</div>
                    <div className="text-2xl font-bold text-red-600">
                      $1,850
                    </div>
                    <div className="text-text-muted text-xs">
                      For 8 door dings + 2 lot dents
                    </div>
                  </div>
                  <div>
                    <div className="text-text-muted">PDR Repair Cost</div>
                    <div className="text-2xl font-bold text-green-600">
                      $425
                    </div>
                    <div className="text-text-muted text-xs">
                      All 10 dents removed same day
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-accent/20 text-center">
                  <span className="text-accent font-bold text-lg">
                    Customer Saved: $1,425
                  </span>
                </div>
              </div>
            </div>

            {/* Dealer Section */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                Dealer &amp; Fleet Partners
              </h2>
              <p className="text-text-muted leading-relaxed mb-6">
                Dealerships and fleet managers across DFW trust {BUSINESS.name}{" "}
                for fast, high-quality dent reconditioning. We keep your
                inventory looking showroom-ready without the body shop downtime
                or cost.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    title: "On-Site Mobile Service",
                    desc: "We come to your lot — no need to transport vehicles.",
                  },
                  {
                    title: "Volume Pricing",
                    desc: "Competitive rates for dealerships and fleet accounts.",
                  },
                  {
                    title: "Fast Turnaround",
                    desc: "Get vehicles back on the lot or on the road quickly.",
                  },
                  {
                    title: "Consistent Quality",
                    desc: "Reliable, repeatable results you can count on every time.",
                  },
                  {
                    title: "Flexible Scheduling",
                    desc: "We work around your business hours and auction deadlines.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-steel shrink-0 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div>
                      <div className="font-semibold text-navy">
                        {item.title}
                      </div>
                      <div className="text-text-muted text-sm">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-8 text-center">
            Lease Return &amp; Dealer FAQs
          </h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Let&apos;s Talk About Your Needs
          </h2>
          <p className="text-text-muted text-lg mb-8">
            Whether you&apos;re returning a lease or managing a dealership lot,
            we have the right PDR solution for you.
          </p>
          <Link
            href="/contact"
            className="inline-flex bg-accent hover:bg-accent-hover text-white font-bold px-10 py-4 rounded-lg text-lg transition-all hover:shadow-lg hover:shadow-accent/25"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      <div className="h-16 lg:hidden" />
    </>
  );
}
