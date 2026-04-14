import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import { BUSINESS } from "@/lib/constants";
import { getFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Insurance Claims Help | Hail Damage Claims DFW",
  description:
    "We handle your hail damage insurance claim from start to finish. Up to $1,000 deductible assistance. Step-by-step claims assistance in Fort Worth and Dallas.",
  alternates: { canonical: "/insurance" },
};

const faqs = [
  {
    question: "Will filing a hail claim raise my insurance rates?",
    answer:
      "In most cases, no. Hail damage is covered under comprehensive insurance, which is a 'no-fault' claim for weather events. Unlike at-fault collision claims, comprehensive claims for hail typically do not raise your premiums. This is true across most major insurance carriers in Texas.",
  },
  {
    question: "What is a deductible and will I have to pay it?",
    answer:
      "Your deductible is the amount you pay before insurance covers the rest. For comprehensive claims, deductibles typically range from $250-$2,000. We offer up to $1,000 in deductible assistance to help offset your cost. The insurance company pays everything above the deductible, and for significant hail damage, the insurance payout far exceeds it.",
  },
  {
    question: "What if the insurance adjuster's estimate seems low?",
    answer:
      "This is common and we handle it regularly. Insurance adjusters sometimes miss damage or underestimate repair costs on their initial assessment. We document all damage thoroughly and submit supplements (additional repair requests) to ensure you receive full coverage for all necessary repairs.",
  },
  {
    question: "How long do I have to file a hail claim?",
    answer:
      "In Texas, you typically have up to one year from the date of the hailstorm to file a comprehensive claim. However, we recommend filing as soon as possible — the sooner you document the damage, the smoother the claims process will be.",
  },
  {
    question: "Do I get to choose my own repair shop?",
    answer:
      "Absolutely. Texas law gives you the right to choose any repair facility. Your insurance company may suggest their 'preferred shops,' but you are never required to use them. You have every right to choose a PDR specialist like us for hail damage repair.",
  },
  {
    question: "What insurance companies do you work with?",
    answer:
      "We work with all major insurance carriers including State Farm, USAA, Allstate, Progressive, Geico, Liberty Mutual, Farmers, Nationwide, and many others. We have established relationships with adjusters from most companies operating in the DFW area.",
  },
];

export default function InsurancePage() {
  const faqSchema = getFAQSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Insurance Claims Assistance
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            We handle the entire insurance claims process for you — from filing
            to final payment — and we offer up to $1,000 in deductible
            assistance to help reduce your out-of-pocket cost.
          </p>
        </div>
      </section>

      {/* 3-step at-a-glance */}
      <section className="py-14 md:py-16 bg-bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-2">
            Three Simple Steps
          </h2>
          <p className="text-text-muted text-center mb-10 max-w-xl mx-auto">
            Here&apos;s the 30-second version. We do the heavy lifting — you just drive away perfect.
          </p>
          <div className="relative grid md:grid-cols-3 gap-6 md:gap-4">
            {/* Connector line — desktop only */}
            <div className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-accent/0 via-accent/40 to-accent/0" aria-hidden="true" />

            {[
              {
                step: "01",
                title: "Call",
                desc: "Reach out to us or your insurance. We'll guide you through starting the claim.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.5 1.21l-2.26 1.13a11 11 0 005.52 5.52l1.13-2.26a1 1 0 011.21-.5l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z" />
                  </svg>
                ),
              },
              {
                step: "02",
                title: "Inspect",
                desc: "We document every dent and work directly with your adjuster to get full coverage approved.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.04 6.65a7.5 7.5 0 0013.61 10M11 8v3m0 0v3m0-3h3m-3 0H8" />
                  </svg>
                ),
              },
              {
                step: "03",
                title: "Repair",
                desc: "Expert PDR removes every dent — no paint, no filler. Your factory finish stays intact.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.step} className="relative bg-white rounded-2xl p-8 text-center border border-border shadow-sm">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full tracking-wider">
                  {item.step}
                </div>
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-accent">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-step */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-4 text-center">
            How the Claims Process Works
          </h2>
          <p className="text-text-muted text-lg mb-12 text-center max-w-2xl mx-auto">
            Filing a hail damage claim doesn&apos;t have to be complicated. Here&apos;s
            our simple step-by-step process:
          </p>

          <div className="space-y-8">
            {[
              {
                step: 1,
                title: "Call Your Insurance Company",
                desc: "Report the hail damage and open a comprehensive claim. You'll receive a claim number. If you'd prefer, we can guide you through this call or even help you initiate the process.",
                tip: "Have your policy number ready. Mention that you'd like to use a PDR specialist for the repair.",
              },
              {
                step: 2,
                title: "Schedule Your Free Inspection With Us",
                desc: "Contact us to schedule a free damage assessment. We'll inspect every panel, count every dent, and document everything with photos. This creates a comprehensive repair estimate.",
                tip: "We can do this at your home, office, or wherever is convenient for you.",
              },
              {
                step: 3,
                title: "Insurance Adjuster Review",
                desc: "Your insurance company will send an adjuster (or approve a virtual/photo inspection) to verify the damage. We work directly with the adjuster to ensure all damage is accounted for.",
                tip: "We submit detailed documentation to support full coverage. If the initial estimate is low, we handle supplements.",
              },
              {
                step: 4,
                title: "Repair Approval & Scheduling",
                desc: "Once the claim is approved, we schedule your repair at a time that works for you. Most hail repairs take 1-3 days depending on severity.",
                tip: "We can coordinate rental car coverage if your policy includes it.",
              },
              {
                step: 5,
                title: "Expert PDR Repair",
                desc: "Our skilled technicians remove every hail dent using precision PDR tools. No paint, no filler — your factory finish stays intact. Your satisfaction is guaranteed on every repair.",
                tip: "We do a thorough quality check with LED reflection boards to ensure perfection.",
              },
              {
                step: 6,
                title: "Final Inspection & Payment",
                desc: "We do a final walkthrough with you to make sure you're 100% satisfied. Insurance pays us directly — and we offer up to $1,000 toward your deductible.",
                tip: "We help offset your deductible so you keep more money in your pocket. No surprise fees, ever.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-6 items-start"
              >
                <div className="w-12 h-12 bg-accent text-white font-bold text-lg rounded-full flex items-center justify-center shrink-0">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed mb-2">
                    {item.desc}
                  </p>
                  <div className="bg-steel/5 border-l-4 border-steel rounded-r-lg px-4 py-3">
                    <p className="text-sm text-steel font-medium">
                      Pro tip: {item.tip}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key facts */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-10 text-center">
            Important Things to Know
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Comprehensive vs. Collision",
                desc: "Hail damage falls under comprehensive coverage — the 'no-fault' part of your policy. This is different from collision coverage and typically doesn't affect your rates.",
              },
              {
                title: "You Choose Your Shop",
                desc: "Texas law guarantees your right to choose your own repair facility. You are never required to use your insurance company's 'preferred' shops.",
              },
              {
                title: "Up to $1,000 Deductible Help",
                desc: "We offer up to $1,000 in deductible assistance on qualifying hail repairs to help reduce your out-of-pocket cost.",
              },
              {
                title: "We Handle Supplements",
                desc: "If we find additional damage during repair that wasn't on the initial estimate, we file a supplement with your insurance to ensure full coverage.",
              },
              {
                title: "No Time Pressure",
                desc: "In Texas, you have up to a year to file a hail claim. But the sooner you act, the better documented the damage will be.",
              },
              {
                title: "All Insurance Accepted",
                desc: "We work with every major insurance carrier — State Farm, USAA, Allstate, Progressive, Geico, Liberty Mutual, Farmers, and more.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-border"
              >
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-8 text-center">
            Insurance Claims FAQs
          </h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Claim?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            We&apos;ll guide you through every step. Get a free damage
            assessment and let us handle the rest.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-accent font-bold px-10 py-4 rounded-lg text-lg hover:bg-bg-light transition-colors"
            >
              Start Your Claim Process
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
