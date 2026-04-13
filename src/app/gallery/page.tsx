"use client";

import Link from "next/link";
import Image from "next/image";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

type GalleryItem =
  | { type: "slider"; label: string; beforeImage: string; afterImage: string }
  | { type: "single"; label: string; image: string };

const galleryItems: GalleryItem[] = [
  { type: "slider", label: "PDR Repair — Before & After", beforeImage: "/images/gallery/1.jpeg", afterImage: "/images/gallery/2.jpeg" },
  { type: "slider", label: "PDR Repair — Before & After", beforeImage: "/images/gallery/3.jpeg", afterImage: "/images/gallery/4.jpeg" },
  { type: "slider", label: "PDR Repair — Before & After", beforeImage: "/images/gallery/5.jpg", afterImage: "/images/gallery/6.jpg" },
  { type: "slider", label: "PDR Repair — Before & After", beforeImage: "/images/gallery/7.jpg", afterImage: "/images/gallery/8.jpg" },
  { type: "slider", label: "PDR Repair — Before & After", beforeImage: "/images/gallery/9.jpeg", afterImage: "/images/gallery/10.jpg" },
  { type: "slider", label: "PDR Repair — Before & After", beforeImage: "/images/gallery/11.jpg", afterImage: "/images/gallery/12.jpg" },
  { type: "slider", label: "PDR Repair — Before & After", beforeImage: "/images/gallery/13.jpg", afterImage: "/images/gallery/14.jpg" },
  { type: "single", label: "Dent Damage", image: "/images/gallery/15a.jpg" },
  { type: "single", label: "Dent Damage", image: "/images/gallery/15b.jpg" },
  { type: "single", label: "Boone at Work", image: "/images/gallery/16.jpg" },
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
          <div className="flex flex-wrap justify-center gap-6">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="group w-full sm:w-[calc(50%-12px)] lg:w-[calc((100%-48px)/3)]"
              >
                {item.type === "slider" ? (
                  <BeforeAfterSlider
                    beforeImage={item.beforeImage}
                    afterImage={item.afterImage}
                    height="260px"
                  />
                ) : (
                  <div className="relative overflow-hidden rounded-xl bg-navy/5" style={{ height: "260px" }}>
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                )}
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
