import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { BUSINESS } from "@/lib/constants";
import { getServiceSchema, getFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Door Ding & Dent Repair Fort Worth",
  description:
    "Professional door ding and dent repair in Fort Worth, Dallas, and DFW. Paintless dent removal starting at $75. Same-day service. Satisfaction guaranteed.",
  alternates: { canonical: "/services/door-ding-dent-repair" },
};

const faqs = [
  {
    question: "How much does door ding repair cost?",
    answer:
      "Small door dings (1-2 inches) typically start at $75-$150. Medium dents (2-4 inches) range from $150-$300. Larger dents or creases may cost $300-$500+. We provide free estimates so you'll know the exact cost before we start.",
  },
  {
    question: "How long does dent repair take?",
    answer:
      "Most single dent repairs take 30-60 minutes. Multiple dents may take a few hours. We offer same-day service for most door ding and dent repairs, and we can come to your home or office.",
  },
  {
    question: "Will PDR work on my dent?",
    answer:
      "PDR works on most dents where the paint hasn't been cracked or chipped. This includes door dings, shopping cart dents, minor collision dents, and body line creases. We'll assess your specific damage during your free estimate.",
  },
  {
    question: "Is PDR better than going to a body shop?",
    answer:
      "For dents without paint damage, PDR is almost always the better choice. It's 40-70% cheaper, preserves your factory paint, doesn't show up on CARFAX, and is typically done same-day versus days or weeks at a body shop.",
  },
  {
    question: "Do you offer mobile service?",
    answer:
      "Yes! For most door dings and minor dents, we come to your home, office, or wherever is convenient. Some larger or more complex repairs may need to be done at our shop for the best results — we'll let you know upfront during your estimate.",
  },
];

export default function DoorDingDentRepairPage() {
  const serviceSchema = getServiceSchema({
    name: "Door Ding & Dent Repair",
    description:
      "Professional paintless door ding and dent repair in Fort Worth and Dallas. Starting at $75. Same-day service available.",
    url: "https://boonepdr.com/services/door-ding-dent-repair",
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
            <span className="inline-block bg-steel/20 text-steel-light text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Starting at $75
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Door Ding &amp; Dent Repair in Fort Worth &amp; Dallas
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Parking lot dings happen to everyone. The good news? PDR removes
              them quickly, affordably, and without affecting your factory paint.
              We come to you — same-day service available.
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

      {/* Why PDR over body shop */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-10 text-center">
            Why PDR Beats the Body Shop — Every Time
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* PDR */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Paintless Dent Repair
              </h3>
              <ul className="space-y-2 text-sm text-green-900">
                {[
                  "Starting at $75 per dent",
                  "Same-day service (30-60 min)",
                  "Factory paint preserved",
                  "No CARFAX record",
                  "Mobile service available",
                  "Satisfaction guaranteed",
                  "No rental car needed",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Body Shop */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Traditional Body Shop
              </h3>
              <ul className="space-y-2 text-sm text-red-900">
                {[
                  "$300-$800+ per dent",
                  "3-7 day turnaround",
                  "Repainted (color match risk)",
                  "Shows on CARFAX report",
                  "Must drop off vehicle",
                  "Limited warranty",
                  "May need a rental car",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Conversion CTA — directly under comparison */}
          <div className="max-w-4xl mx-auto mt-10">
            <div className="bg-gradient-to-br from-accent to-accent-hover rounded-2xl p-8 md:p-10 text-center text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" aria-hidden="true" />
              <div className="relative">
                <div className="inline-block bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs font-bold tracking-wider uppercase mb-4">
                  Dings start at just $75
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Text us a photo — get a quote back fast
                </h3>
                <p className="text-white/90 mb-6 max-w-xl mx-auto">
                  Most door dings are quoted within the hour. Same-day mobile service across DFW.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-white text-accent font-bold px-8 py-3.5 rounded-xl text-base hover:bg-bg-light transition-all hover:shadow-lg"
                  >
                    Get a Free Quote
                  </Link>
                  <a
                    href={`tel:${BUSINESS.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-3.5 rounded-xl text-base transition-all"
                  >
                    Call {BUSINESS.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-8 text-center">
            Before &amp; After
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <BeforeAfterSlider
                beforeColor="#90A4AE"
                afterColor="#C41E3A"
                height="280px"
                beforeLabel="Before"
                afterLabel="After"
              />
              <p className="text-center text-sm text-text-muted mt-3">
                Shopping Cart Dent — Honda Accord
              </p>
            </div>
            <div>
              <BeforeAfterSlider
                beforeColor="#78909C"
                afterColor="#1A1A1A"
                height="280px"
                beforeLabel="Before"
                afterLabel="After"
              />
              <p className="text-center text-sm text-text-muted mt-3">
                Parking Lot Door Ding — Ford Explorer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Transparent Pricing
          </h2>
          <p className="text-text-muted text-lg mb-10">
            Every dent is different, but here are our general ranges. We always
            provide a free, no-obligation estimate before any work begins.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { size: "Small Dent", range: "$75 – $150", desc: "1-2 inches, no crease" },
              { size: "Medium Dent", range: "$150 – $300", desc: "2-4 inches or light crease" },
              { size: "Large Dent", range: "$300 – $500+", desc: "4+ inches or deep crease" },
            ].map((item) => (
              <div
                key={item.size}
                className="bg-bg-light rounded-xl p-6 border border-border"
              >
                <div className="text-sm text-text-muted mb-1">{item.size}</div>
                <div className="text-2xl font-bold text-navy mb-1">
                  {item.range}
                </div>
                <div className="text-xs text-text-muted">{item.desc}</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-text-muted mt-6">
            * Prices are estimates. Actual cost depends on dent size, location,
            and access. Free estimates always available.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-8 text-center">
            Door Ding Repair FAQs
          </h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Got a Ding? Let&apos;s Fix It Today.
          </h2>
          <p className="text-text-muted text-lg mb-8">
            Send us a photo and get a quote in minutes. Same-day mobile service
            available throughout DFW.
          </p>
          <Link
            href="/contact"
            className="inline-flex bg-accent hover:bg-accent-hover text-white font-bold px-10 py-4 rounded-lg text-lg transition-all hover:shadow-lg hover:shadow-accent/25"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>

      <div className="h-16 lg:hidden" />
    </>
  );
}
