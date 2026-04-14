import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${BUSINESS.name}. Review the terms and conditions for using our website and services.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy to-navy-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Terms of Service
          </h1>
          <p className="text-white/80 mt-2">
            Last updated: March 2026
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-neutral">
          <h2 className="text-2xl font-bold text-navy mb-4">
            Services
          </h2>
          <p className="text-text-muted leading-relaxed mb-6">
            {BUSINESS.name} provides paintless dent repair (PDR) services in
            the Dallas-Fort Worth metroplex. All repair work is performed by
            trained technicians. We stand behind our work and guarantee your
            satisfaction on every repair.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">
            Estimates & Pricing
          </h2>
          <p className="text-text-muted leading-relaxed mb-6">
            All estimates provided through our website or in person are
            free and non-binding. Final pricing is determined upon physical
            inspection of the vehicle. Insurance claim repairs are billed
            directly to the insurance company per the approved estimate.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">
            Warranty
          </h2>
          <p className="text-text-muted leading-relaxed mb-6">
            We stand behind our work with a satisfaction guarantee on all paintless
            dent repairs. If you&apos;re not completely satisfied with the quality of our
            repair, we&apos;ll make it right. This guarantee covers the specific dents
            repaired and does not cover new damage, paint damage, or damage
            caused by subsequent events.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">
            Insurance Claims
          </h2>
          <p className="text-text-muted leading-relaxed mb-6">
            When we assist with insurance claims, we act as your authorized
            repair facility and communicate directly with your insurance
            adjuster. You are responsible for any deductible amount required
            by your policy. We do not guarantee insurance approval or coverage
            amounts.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">
            Website Use
          </h2>
          <p className="text-text-muted leading-relaxed mb-6">
            This website is provided for informational purposes and to
            facilitate quote requests. Content on this site, including text,
            images, and design, is the property of {BUSINESS.name} and may
            not be reproduced without permission.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">
            Limitation of Liability
          </h2>
          <p className="text-text-muted leading-relaxed mb-6">
            {BUSINESS.name} is not liable for any indirect, incidental, or
            consequential damages arising from the use of our website or
            services. Our total liability is limited to the amount paid for
            the specific repair service in question.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">
            Contact Us
          </h2>
          <p className="text-text-muted leading-relaxed">
            Questions about these terms? Contact us at{" "}
            <a
              href={`mailto:${BUSINESS.email}`}
              className="text-steel hover:text-navy transition-colors font-medium"
            >
              {BUSINESS.email}
            </a>{" "}
            or call{" "}
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="text-steel hover:text-navy transition-colors font-medium"
            >
              {BUSINESS.phone}
            </a>
            .
          </p>
        </div>
      </section>

      <div className="h-16 lg:hidden" />
    </>
  );
}
