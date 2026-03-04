"use client";

import { useState } from "react";
import Link from "next/link";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const categories = ["All", "Hail Damage", "Door Dings", "Creases", "Large Dents"] as const;

const galleryItems = [
  { category: "Hail Damage", label: "Hail Damage — 2023 Ford F-150 Hood", beforeColor: "#78909C", afterColor: "#1B3A5C" },
  { category: "Door Dings", label: "Shopping Cart Ding — 2022 Honda Accord", beforeColor: "#90A4AE", afterColor: "#2E75B6" },
  { category: "Hail Damage", label: "Severe Hail — 2023 Toyota Tundra Roof", beforeColor: "#607D8B", afterColor: "#1B3A5C" },
  { category: "Creases", label: "Body Line Crease — 2021 BMW X5", beforeColor: "#78909C", afterColor: "#2E75B6" },
  { category: "Door Dings", label: "Parking Lot Ding — 2023 Chevy Tahoe", beforeColor: "#90A4AE", afterColor: "#1B3A5C" },
  { category: "Large Dents", label: "Large Panel Dent — 2022 Ram 1500", beforeColor: "#607D8B", afterColor: "#2E75B6" },
  { category: "Hail Damage", label: "Hail Storm Damage — 2023 Nissan Altima", beforeColor: "#78909C", afterColor: "#1B3A5C" },
  { category: "Door Dings", label: "Door Edge Ding — 2022 Lexus RX350", beforeColor: "#90A4AE", afterColor: "#2E75B6" },
  { category: "Large Dents", label: "Fallen Branch Dent — 2021 Subaru Outback", beforeColor: "#607D8B", afterColor: "#1B3A5C" },
  { category: "Creases", label: "Fender Crease — 2023 Mercedes GLE", beforeColor: "#78909C", afterColor: "#2E75B6" },
  { category: "Hail Damage", label: "Quarter Panel Hail — 2022 Honda CR-V", beforeColor: "#90A4AE", afterColor: "#1B3A5C" },
  { category: "Door Dings", label: "Deep Door Ding — 2023 Kia Telluride", beforeColor: "#607D8B", afterColor: "#2E75B6" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>("All");

  const filtered =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

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
          {/* Filter tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-navy text-white"
                    : "bg-bg-light text-text-muted hover:bg-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <div key={i} className="group">
                <BeforeAfterSlider
                  beforeColor={item.beforeColor}
                  afterColor={item.afterColor}
                  height="220px"
                />
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-sm text-text-muted">{item.label}</p>
                  <span className="text-xs bg-bg-light text-text-muted px-2 py-0.5 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-12 text-center bg-bg-light rounded-xl p-8">
            <p className="text-text-muted">
              These are placeholder examples. Real before &amp; after photos of
              Boone&apos;s work will replace these when provided. Each slider
              will show actual repair results.
            </p>
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
