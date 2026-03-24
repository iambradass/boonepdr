import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Boone | PDR Expert",
  description:
    "Meet Boone — DFW's trusted paintless dent repair expert with 10+ years of experience. Learn about our story, values, and commitment to quality.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            About {BUSINESS.name}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Passionate about the craft. Committed to your vehicle.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo placeholder */}
            <div className="bg-bg-light rounded-2xl aspect-[4/5] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-navy font-bold text-5xl">B</span>
                </div>
                <p className="text-text-muted text-sm">
                  Boone&apos;s professional photo will go here
                </p>
              </div>
            </div>

            {/* Story content */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                Meet Boone
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Boone discovered paintless dent repair the way most
                  people discover their calling — by accident. After a Texas
                  hailstorm left his own truck covered in dents, he watched a
                  PDR technician work and was fascinated by the skill and
                  precision involved. He knew right then this was what he wanted
                  to do.
                </p>
                <p>
                  That was over {BUSINESS.yearsExperience} years ago. Since
                  then, Boone has repaired thousands of vehicles across the
                  Dallas-Fort Worth metroplex — from daily drivers with parking
                  lot dings to luxury vehicles with severe hail damage. Every
                  repair gets the same level of care and attention to detail.
                </p>
                <p>
                  What sets Boone apart isn&apos;t just his technical skill —
                  it&apos;s his approach. He treats every customer&apos;s vehicle
                  like it&apos;s his own. He&apos;s honest about what PDR can
                  and can&apos;t fix, transparent about pricing, and stands
                  behind every repair — your satisfaction is guaranteed.
                </p>
                <p>
                  When he&apos;s not restoring vehicles, you can find Boone
                  spending time with his family, enjoying the Texas outdoors, or
                  keeping up with the latest PDR techniques and tools to deliver
                  even better results for his customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-10 text-center">
            What We Stand For
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Honesty First",
                desc: "If PDR isn't the right solution for your damage, we'll tell you. We'd rather earn your trust than take your money on a repair that won't be perfect.",
              },
              {
                title: "Quality Over Speed",
                desc: "We never rush a repair. Every dent gets the time and attention it needs to achieve a flawless result. That's why we guarantee your satisfaction on every job.",
              },
              {
                title: "Fair, Transparent Pricing",
                desc: "No hidden fees, no surprise charges. We give you an honest quote upfront and stick to it. If we find additional damage, we discuss it with you first.",
              },
              {
                title: "Customer-First Service",
                desc: "We come to you. We work around your schedule. We handle your insurance paperwork. Everything we do is designed to make this easy for you.",
              },
              {
                title: "Continuous Improvement",
                desc: "The PDR industry is always evolving — new tools, new techniques, new approaches. We invest in staying at the top of our craft so your repair is the best it can be.",
              },
              {
                title: "Community Roots",
                desc: "We live and work in DFW. This is our community, and building a reputation we're proud of matters more than anything. Every customer is a neighbor.",
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

      {/* Stats */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: `${BUSINESS.yearsExperience}+`, label: "Years Experience" },
              { stat: "5,000+", label: "Vehicles Repaired" },
              { stat: BUSINESS.rating.toString(), label: "Star Rating" },
              { stat: `${BUSINESS.reviewCount}+`, label: "5-Star Reviews" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-4xl font-bold text-accent mb-1">
                  {item.stat}
                </div>
                <div className="text-text-muted text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Training &amp; Certifications
          </h2>
          <p className="text-text-muted text-lg mb-8">
            Boone has trained under some of the best PDR technicians in the
            country and continues to refine his skills.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "PDR Certified Technician",
              "Advanced Hail Damage Specialist",
              "Insurance Claims Certified",
              "LED Glue Pull Certified",
            ].map((cert) => (
              <span
                key={cert}
                className="bg-white border border-border rounded-lg px-5 py-3 text-sm font-medium text-navy"
              >
                {cert}
              </span>
            ))}
          </div>
          <p className="text-xs text-text-muted mt-6">
            * Specific certifications to be confirmed with Boone and updated
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-text-muted text-lg mb-8">
            Get a free estimate and see why DFW vehicle owners trust{" "}
            {BUSINESS.name} with their repairs.
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
