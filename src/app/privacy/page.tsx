import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${BUSINESS.name}. Learn how we collect, use, and protect your personal information.`,
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy to-navy-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Privacy Policy
          </h1>
          <p className="text-white/80 mt-2">
            Last updated: March 2026
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-neutral">
          <h2 className="text-2xl font-bold text-navy mb-4">
            Information We Collect
          </h2>
          <p className="text-text-muted leading-relaxed mb-6">
            When you use our website or request a quote, we may collect your
            name, phone number, email address, vehicle information, and photos
            of vehicle damage that you voluntarily provide through our contact
            form.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">
            How We Use Your Information
          </h2>
          <p className="text-text-muted leading-relaxed mb-6">
            We use the information you provide solely to respond to your quote
            requests, schedule appointments, coordinate insurance claims, and
            communicate with you about our services. We do not sell, rent, or
            share your personal information with third parties for marketing
            purposes.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">
            Insurance Information
          </h2>
          <p className="text-text-muted leading-relaxed mb-6">
            If you authorize us to work with your insurance company on your
            behalf, we will share necessary repair documentation and vehicle
            information with your insurance adjuster to process your claim.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">
            Cookies & Analytics
          </h2>
          <p className="text-text-muted leading-relaxed mb-6">
            Our website may use cookies and analytics tools to understand how
            visitors use our site and improve the user experience. These tools
            may collect anonymous usage data such as pages visited, time on
            site, and referring URLs.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">
            Data Security
          </h2>
          <p className="text-text-muted leading-relaxed mb-6">
            We take reasonable measures to protect your personal information.
            However, no method of transmission over the internet is 100%
            secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4">
            Contact Us
          </h2>
          <p className="text-text-muted leading-relaxed">
            If you have questions about this privacy policy, contact us at{" "}
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
