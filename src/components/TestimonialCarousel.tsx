"use client";

import { useState, useEffect, useCallback, useRef } from "react";
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
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Intersection observer for scroll-reveal
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const transition = useCallback((newIndex: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActive(newIndex);
      setIsAnimating(false);
    }, 200);
  }, []);

  const next = useCallback(() => {
    transition((active + 1) % testimonials.length);
  }, [active, transition]);

  const prev = useCallback(() => {
    transition((active - 1 + testimonials.length) % testimonials.length);
  }, [active, transition]);

  // Auto-rotate
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const t = testimonials[active];

  return (
    <section ref={sectionRef} className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-14 transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
          }}
        >
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

        <div
          className="max-w-3xl mx-auto transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transitionDelay: "150ms",
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="bg-white rounded-3xl shadow-[0_4px_40px_rgba(0,0,0,0.06)] p-8 md:p-12 relative overflow-hidden">
            {/* Decorative accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-steel via-accent to-steel" />

            {/* Quote mark */}
            <div className="absolute top-8 left-8 text-steel/8 text-9xl font-serif leading-none select-none">
              &ldquo;
            </div>

            <div
              className="relative transition-all duration-300 ease-out"
              style={{
                opacity: isAnimating ? 0 : 1,
                transform: isAnimating ? "translateY(10px)" : "translateY(0)",
              }}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <HiStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              {/* Service badge */}
              <span className="inline-block bg-steel/10 text-steel text-xs font-bold px-3 py-1.5 rounded-full mb-5 tracking-wide uppercase">
                {t.service}
              </span>

              {/* Quote */}
              <blockquote className="text-text-dark text-lg md:text-xl leading-relaxed mb-8 font-medium">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-navy/10 to-steel/10 rounded-full flex items-center justify-center">
                  <span className="text-navy font-bold text-lg">
                    {t.name[0]}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-navy">{t.name}</div>
                  <div className="text-text-muted text-sm">{t.vehicle}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center hover:bg-navy hover:text-white hover:border-navy transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <HiChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => transition(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === active
                      ? "bg-steel w-8"
                      : "bg-border hover:bg-text-muted w-2.5"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === active ? "true" : undefined}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center hover:bg-navy hover:text-white hover:border-navy transition-all duration-300"
              aria-label="Next testimonial"
            >
              <HiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
