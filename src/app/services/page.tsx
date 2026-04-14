import type { Metadata } from "next";
import Link from "next/link";
import { BsCloudHail, BsCarFront } from "react-icons/bs";
import { IoCarSportOutline } from "react-icons/io5";
import { MdOutlineHomeRepairService } from "react-icons/md";
import ServiceCard from "@/components/ServiceCard";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "PDR Services Fort Worth & Dallas",
  description:
    "Professional paintless dent repair services in DFW. Hail damage repair, door ding removal, lease return dent repair, and dealer/fleet services. Free estimates.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-navy to-navy-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Our PDR Services
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            From minor door dings to severe hail damage, {BUSINESS.name}{" "}
            handles it all. Your satisfaction is guaranteed on every job.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-8">
            <ServiceCard
              icon={BsCloudHail}
              title="Hail Damage Repair"
              description="Texas hailstorms leave behind hundreds — sometimes thousands — of dents. We restore your vehicle to factory condition at our shop and handle your entire insurance claim. Up to $1,000 deductible assistance available."
              href="/services/hail-damage-repair"
            />
            <ServiceCard
              icon={BsCarFront}
              title="Door Ding & Dent Repair"
              description="Parking lot dings, shopping cart dents, and minor collision damage. PDR removes them fast and at a fraction of body shop prices — starting at just $75."
              href="/services/door-ding-dent-repair"
            />
            <ServiceCard
              icon={IoCarSportOutline}
              title="Lease Return / Dealer Services"
              description="Returning a leased vehicle? We fix every ding and dent so you avoid expensive lease-end penalty charges. Dealerships trust us for fast reconditioning."
              href="/services/lease-return"
            />
            <ServiceCard
              icon={MdOutlineHomeRepairService}
              title="Fleet & Commercial Services"
              description="Rental companies, dealerships, and fleet managers rely on us for consistent, high-quality dent repair. Volume pricing and fast turnarounds available."
              href="/services/lease-return"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              How PDR Works
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Paintless dent repair is the smart alternative to expensive body
              shop work. Here&apos;s our simple process:
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Assess",
                desc: "We survey the damage — size, depth, location, and paint condition — to determine the best repair approach.",
              },
              {
                step: "2",
                title: "Access",
                desc: "We carefully remove interior panels or trim to reach behind the damaged area with our specialized tools.",
              },
              {
                step: "3",
                title: "Repair",
                desc: "Using precision LED boards and metal rods, we slowly massage the dent out from behind, restoring the original shape.",
              },
              {
                step: "4",
                title: "Perfect",
                desc: "Fine-tuning with knockdown tools ensures a flawless finish. We reassemble everything and you're done.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-accent text-white font-bold text-xl rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">
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
            Not Sure Which Service You Need?
          </h2>
          <p className="text-text-muted text-lg mb-8">
            No problem — send us photos of your damage and we&apos;ll tell you
            exactly what&apos;s needed and what it&apos;ll cost. Free estimates,
            always.
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
