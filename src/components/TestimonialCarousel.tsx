import { HiStar } from "react-icons/hi";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    name: "Sarah M.",
    vehicle: "2023 Toyota Camry",
    text: "After the hailstorm hit Fort Worth, I thought my car was totaled. Boone had it looking brand new in less than a day. You literally can't tell there was ever any damage. Highly recommend!",
    rating: 5,
    service: "Hail Damage Repair",
  },
  {
    name: "Mike T.",
    vehicle: "2022 Ford F-150",
    text: "Got a nasty door ding at the Costco parking lot. Boone came out to my house and had it fixed in under an hour. The price was way less than what the body shop quoted me. Amazing work.",
    rating: 5,
    service: "Door Ding Repair",
  },
  {
    name: "Jennifer K.",
    vehicle: "2021 BMW X3",
    text: "I was dreading my lease return with all the parking lot dings I'd collected. Boone fixed every single one and saved me over $1,200 in lease-end penalties. Worth every penny.",
    rating: 5,
    service: "Lease Return Repair",
  },
];

export default function TestimonialCarousel() {
  return (
    <section className="py-16 md:py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-block text-steel font-semibold text-sm tracking-wider uppercase mb-3">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">
              What Our Customers Say
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what DFW vehicle
              owners have to say about our paintless dent repair services.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 100}>
              <div className="card-glow bg-white rounded-2xl border border-border p-6 md:p-8 relative overflow-hidden h-full flex flex-col hover:-translate-y-1 transition-all duration-300">
                {/* Accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-steel via-accent to-steel" />
                {/* Subtle corner glow */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-accent/5 rounded-full blur-2xl" aria-hidden="true" />

                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-3 mt-1">
                  {[...Array(t.rating)].map((_, j) => (
                    <HiStar key={j} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>

                {/* Service badge */}
                <span className="inline-block bg-steel/10 text-steel text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wide uppercase w-fit">
                  {t.service}
                </span>

                {/* Quote */}
                <blockquote className="text-text-dark leading-relaxed mb-6 flex-1">
                  &ldquo;{t.text}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-navy/10 to-steel/10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-navy font-bold">{t.name[0]}</span>
                  </div>
                  <div>
                    <div className="font-bold text-navy text-sm">{t.name}</div>
                    <div className="text-text-muted text-xs">{t.vehicle}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
