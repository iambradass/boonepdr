"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HiPhone } from "react-icons/hi";
import { BUSINESS } from "@/lib/constants";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-3">
      <div className="flex items-center gap-2 max-w-lg mx-auto">
        <a
          href={`tel:${BUSINESS.phoneRaw}`}
          className="flex items-center justify-center gap-2 flex-1 bg-navy text-white font-semibold py-3 rounded-lg text-sm transition-colors hover:bg-navy-dark"
        >
          <HiPhone className="w-4 h-4" />
          Call Now
        </a>
        <Link
          href="/contact"
          className="flex items-center justify-center flex-1 bg-accent hover:bg-accent-hover text-white font-semibold py-3 rounded-lg text-sm transition-colors"
        >
          Free Quote
        </Link>
      </div>
    </div>
  );
}
