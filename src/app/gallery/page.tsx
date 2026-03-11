"use client";

import Link from "next/link";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const galleryItems = [
  { label: "PDR Repair — Before & After", beforeImage: "/images/gallery/1.jpeg", afterImage: "/images/gallery/2.jpeg" },
  { label: "PDR Repair — Before & After", beforeImage: "/images/gallery/3.jpeg", afterImage: "/images/gallery/4.jpeg" },
  { label: "PDR Repair — Before & After", beforeImage: "/images/gallery/5.png", afterImage: "/images/gallery/6.png" },
  { label: "PDR Repair — Before & After", beforeImage: "/images/gallery/7.PNG", afterImage: "/images/gallery/8.PNG" },
  { label: "PDR Repair — Before & After", beforeImage: "/images/gallery/9.jpeg", afterImage: "/images/gallery/10.png" },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Before &amp; After Gallery
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            See the difference professional paintless dent repair makes. Drag
            the sliders to compare before and after results.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, i) => (
              <div key={i} className="group">
                <BeforeAfterSlider
                  beforeImage={item.beforeImage}
                  afterImage={item.afterImage}
                  height="260px"
                />
                <div className="mt-3">
                  <p className="text-sm text-text-muted">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want Results Like These?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Send us photos of your damage and get a free quote. We&apos;ll show
            you what PDR can do for your vehicle.
          </p>
          <Link
            href="/contact"
            className="inline-flex bg-accent hover:bg-accent-hover text-white font-bold px-10 py-4 rounded-lg text-lg transition-all"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      <div className="h-16 lg:hidden" />
    </>
  );
}
