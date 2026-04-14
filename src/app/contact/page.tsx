import type { Metadata } from "next";
import { HiPhone, HiMail, HiLocationMarker, HiClock } from "react-icons/hi";
import QuoteForm from "@/components/QuoteForm";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Get a Free Quote | Contact Us",
  description:
    "Request a free paintless dent repair estimate. Upload photos of your damage and get a quote within hours. Serving Fort Worth, Dallas, and the entire DFW metroplex.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-navy to-navy-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Get a Free Quote
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Upload photos of your damage and we&apos;ll get you an honest
            estimate — usually within a few hours. No obligation, no pressure.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Form — takes 2 columns */}
            <div className="lg:col-span-2">
              <QuoteForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info Card */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-navy mb-6">
                  Contact Information
                </h3>
                <ul className="space-y-5">
                  <li>
                    <a
                      href={`tel:${BUSINESS.phoneRaw}`}
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                        <HiPhone className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="text-sm text-text-muted">Phone</div>
                        <div className="font-semibold text-navy group-hover:text-steel transition-colors">
                          {BUSINESS.phone}
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${BUSINESS.email}`}
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                        <HiMail className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="text-sm text-text-muted">Email</div>
                        <div className="font-semibold text-navy group-hover:text-steel transition-colors">
                          {BUSINESS.email}
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                      <HiLocationMarker className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-text-muted">Location</div>
                      <div className="font-semibold text-navy">
                        {BUSINESS.address}
                      </div>
                      <div className="text-sm text-text-muted">
                        Mobile Service — We Come to You
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                      <HiClock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-text-muted">Hours</div>
                      <div className="font-semibold text-navy text-sm space-y-0.5">
                        <div>{BUSINESS.hours.weekdays}</div>
                        <div>{BUSINESS.hours.saturday}</div>
                        <div>{BUSINESS.hours.sunday}</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Why Choose Us Card */}
              <div className="bg-navy rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  {[
                    "Satisfaction guaranteed on every repair",
                    "Free, no-obligation estimates",
                    "Insurance claims assistance",
                    "Up to $1,000 deductible assistance on hail claims",
                    "Same-day service available",
                    "Mobile service — we come to you",
                    `${BUSINESS.yearsExperience}+ years of experience`,
                    "Locally owned and operated in DFW",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <svg
                        className="w-5 h-5 text-accent shrink-0 mt-0.5"
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
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* DFW Service Area Map */}
              <div className="bg-bg-light rounded-2xl overflow-hidden h-64 relative">
                <iframe
                  title="Boone PDR DFW service area"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d429957.5!2d-97.13!3d32.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1712000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom padding for floating CTA on mobile */}
      <div className="h-16 lg:hidden" />
    </>
  );
}
