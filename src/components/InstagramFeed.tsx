"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";
import ScrollReveal from "@/components/ScrollReveal";
import { BUSINESS } from "@/lib/constants";

// Replace this with your Elfsight app ID once configured
// Steps: elfsight.com → sign up free → create Instagram Feed widget → connect IG → copy app ID
const ELFSIGHT_APP_ID = "";

export default function InstagramFeed() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (!ELFSIGHT_APP_ID) return;

    // Check if script already exists
    if (document.querySelector('script[src*="elfsight.com"]')) {
      setScriptLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);

    return () => {
      // Cleanup not needed — Elfsight script should persist
    };
  }, []);

  if (!ELFSIGHT_APP_ID) return null;

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-3">
              Follow Us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">
              See Our Latest Work
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Follow us on Instagram for real-time before &amp; after results,
              behind-the-scenes repairs, and customer transformations.
            </p>
          </div>
        </ScrollReveal>

        {/* Elfsight widget or fallback */}
        <ScrollReveal delay={100}>
          {ELFSIGHT_APP_ID ? (
            <div
              className={`elfsight-app-${ELFSIGHT_APP_ID}`}
              data-elfsight-app-lazy
            />
          ) : (
            /* Fallback: styled CTA to follow on Instagram */
            <div className="text-center py-12">
              <div className="inline-flex flex-col items-center gap-6 bg-white rounded-2xl border border-border p-10 md:p-14 shadow-sm">
                {/* Instagram icon */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center shadow-lg">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">
                    @boonepdr
                  </h3>
                  <p className="text-text-muted text-sm max-w-sm mb-6">
                    Follow us for daily dent repair transformations, tips, and
                    behind-the-scenes content from the DFW metroplex.
                  </p>
                </div>

                <a
                  href={BUSINESS.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-300 hover:shadow-[0_8px_30px_rgba(232,64,64,0.3)] hover:-translate-y-0.5"
                >
                  Follow on Instagram
                  <HiExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          )}
        </ScrollReveal>

        {/* Always show the follow link below the widget */}
        {ELFSIGHT_APP_ID && (
          <ScrollReveal delay={200}>
            <div className="text-center mt-10">
              <a
                href={BUSINESS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-steel font-semibold hover:text-navy transition-colors"
              >
                Follow @boonepdr on Instagram
                <HiExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
