"use client";

import { useState, useEffect, useCallback } from "react";
import { HiChevronLeft, HiChevronRight, HiStar } from "react-icons/hi";

interface Testimonial {
  name: string;
  vehicle: string;
  text: string;
  rating: number;
  service: string;
}

const testimonials: Testimonial[] = [
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
  {
    name: "David R.",
    vehicle: "2023 Honda Accord",
    text: "Boone handled my entire insurance claim for hail damage. Zero out of pocket, zero hassle. He even dealt with the adjuster directly. This is how every service should work.",
    rating: 5,
    service: "Insurance Claim",
  },
  {
    name: "Lisa W.",
    vehicle: "2022 Chevy Tahoe",
    text: "I manage a fleet of 30+ vehicles for a rental company. Boone is our go-to for all dent repairs. Fast turnaround, fair pricing, and the quality is consistently perfect.",
    rating: 5,
    service: "Fleet Services",
  },
];

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setActive(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  // Auto-rotate
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const t = testimonials[active];

  return (
    <section className="py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            What Our Customers Say
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what DFW vehicle
            owners have to say about our paintless dent repair services.
          </p>
        </div>

        <div
          className="max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 relative">
            {/* Quote mark */}
            <div className="absolute top-6 left-8 text-steel/10 text-8xl font-serif leading-none select-none">
              &ldquo;
            </div>

            <div className="relative">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <HiStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              {/* Service badge */}
              <span className="inline-block bg-steel/10 text-steel text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {t.service}
              </span>

              {/* Quote */}
              <blockquote className="text-text-dark text-lg leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center">
                  <span className="text-navy font-bold text-lg">
                    {t.name[0]}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-navy">{t.name}</div>
                  <div className="text-text-muted text-sm">{t.vehicle}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center hover:bg-bg-light transition-colors"
              aria-label="Previous testimonial"
            >
              <HiChevronLeft className="w-5 h-5 text-navy" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === active
                      ? "bg-steel w-6"
                      : "bg-border hover:bg-text-muted"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center hover:bg-bg-light transition-colors"
              aria-label="Next testimonial"
            >
              <HiChevronRight className="w-5 h-5 text-navy" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
