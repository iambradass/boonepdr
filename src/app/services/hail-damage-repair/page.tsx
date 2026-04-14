import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { BUSINESS } from "@/lib/constants";
import { getServiceSchema, getFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hail Damage Repair DFW | Paintless Dent Removal",
  description:
    "Expert hail damage repair in Fort Worth, Dallas, and the DFW metroplex. Insurance claims assistance, up to $1,000 deductible coverage, satisfaction guaranteed. Free estimates.",
  alternates: { canonical: "/services/hail-damage-repair" },
};

const faqs = [
  {
    question: "Does insurance cover hail damage PDR?",
    answer:
      "Yes! Hail damage is covered under the comprehensive portion of your auto insurance policy. Comprehensive claims typically do not raise your rates — unlike collision claims. Plus, we offer up to $1,000 in deductible assistance to help reduce your out-of-pocket cost.",
  },
  {
    question: "How long does hail damage repair take?",
    answer:
      "It depends on the severity. Minor hail with 20-50 dents can often be completed in a single day. Severe hail storms that cause hundreds of dents may take 2-3 days. All hail repairs are performed at our shop to ensure the best possible results. We'll give you an accurate timeline during your free estimate.",
  },
  {
    question: "Will PDR work on my hail damage?",
    answer:
      "PDR is the preferred repair method for hail damage — even insurance companies prefer it because it's faster and more affordable. As long as the paint isn't cracked or chipped, PDR can remove virtually any hail dent. We'll assess your specific damage during your free estimate.",
  },
  {
    question: "Do I need to file a police report for hail damage?",
    answer:
      "No. Hail damage falls under comprehensive coverage and doesn't require a police report. Simply call your insurance company to start a claim, or let us handle the entire process for you — we work directly with adjusters every day.",
  },
  {
    question: "Will a hail claim raise my insurance rates?",
    answer:
      "In most cases, no. Hail damage is covered under comprehensive insurance, which is considered a 'no-fault' claim. Unlike collision claims (which can raise rates), comprehensive claims for weather damage typically do not affect your premiums.",
  },
  {
    question: "Can you help me with the insurance claim process?",
    answer:
      "Absolutely. We handle hail damage claims every day and can guide you through the entire process — from filing the initial claim to working directly with the adjuster. Our goal is to make it as easy as possible for you.",
  },
];

export default function HailDamageRepairPage() {
  const serviceSchema = getServiceSchema({
    name: "Hail Damage Repair",
    description:
      "Professional paintless dent repair for hail damage in the Dallas-Fort Worth area. Insurance claims assistance and up to $1,000 deductible coverage.",
    url: "https://boonepdr.com/services/hail-damage-repair",
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
            <span className="inline-block bg-accent/20 text-accent text-sm font-semibold px-3 py-1 rounded-full mb-4">
              #1 Service in DFW
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Hail Damage Repair in DFW
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Texas hailstorms are brutal — but your vehicle doesn&apos;t have
              to show it. We specialize in removing all hail dents using
              paintless dent repair, and we work directly with your insurance so
              we offer up to $1,000 in deductible assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white font-bold px-8 py-4 rounded-lg text-lg transition-all"
              >
                Get a Free Hail Estimate
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

      {/* Process Steps */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-10 text-center">
            Our Hail Damage Repair Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Free Assessment",
                desc: "We inspect every panel, count every dent, and document the damage for your insurance claim.",
              },
              {
                step: "2",
                title: "Insurance Coordination",
                desc: "We work directly with your insurance adjuster, handle all the paperwork, and ensure full coverage approval.",
              },
              {
                step: "3",
                title: "Expert Repair",
                desc: "Our skilled technicians remove every hail dent using precision PDR tools — no paint, no filler, no shortcuts.",
              },
              {
                step: "4",
                title: "Final Inspection",
                desc: "We do a thorough quality check with LED boards to ensure every dent is gone and your vehicle is perfect.",
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="w-12 h-12 bg-accent text-white font-bold text-lg rounded-full flex items-center justify-center mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">
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

      {/* Insurance Info */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                We Handle Your Insurance Claim
              </h2>
              <p className="text-text-muted leading-relaxed mb-6">
                Hail damage repairs are covered by your comprehensive auto
                insurance. We handle the entire claims process from start to
                finish — and we offer up to $1,000 in deductible assistance
                to help reduce your out-of-pocket cost. Our services include:
              </p>
              <ul className="space-y-3">
                {[
                  "Detailed damage documentation and photos",
                  "Direct communication with your insurance adjuster",
                  "Supplement requests for any additional damage found",
                  "All paperwork and billing handled for you",
                  "Rental car coordination if needed",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-text-dark"
                  >
                    <svg
                      className="w-5 h-5 text-green-500 shrink-0 mt-0.5"
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
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/insurance"
                className="inline-flex items-center gap-2 text-steel font-semibold mt-6 hover:text-navy transition-colors"
              >
                Learn More About Insurance Claims
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
            <div>
              <BeforeAfterSlider
                beforeColor="#78909C"
                afterColor="#1A1A1A"
                height="350px"
                beforeLabel="Before — Hail Damage"
                afterLabel="After — PDR Repair"
              />
              <p className="text-center text-sm text-text-muted mt-3">
                Severe hail damage — fully repaired with PDR
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-8 text-center">
            Hail Damage Repair FAQs
          </h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Hail Damage? Let&apos;s Fix It.
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Get a free estimate and let us handle your insurance claim. We
            offer up to $1,000 in deductible assistance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-accent font-bold px-10 py-4 rounded-lg text-lg hover:bg-bg-light transition-colors"
            >
              Get a Free Estimate
            </Link>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="text-white font-semibold text-lg hover:text-white/80 transition-colors"
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
