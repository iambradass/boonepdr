"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
  sublabel?: string;
}

export default function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  duration = 2000,
  label,
  sublabel,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        if (entries[0]?.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out quartic for satisfying deceleration
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(eased * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDone(true);
      }
    };
    requestAnimationFrame(step);
  }, [started, end, duration]);

  return (
    <div
      ref={ref}
      className={`stat-cell text-center relative${done ? " stat-done" : ""}`}
    >
      <div className="flex items-baseline justify-center gap-0.5">
        {prefix && (
          <span className="text-accent text-2xl md:text-3xl font-bold" aria-hidden="true">
            {prefix}
          </span>
        )}
        <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tabular-nums leading-none">
          {count}
        </span>
        {suffix && (
          <span className="text-accent text-2xl md:text-3xl font-bold" aria-hidden="true">
            {suffix}
          </span>
        )}
      </div>
      <div className="text-white/90 font-semibold text-sm mt-2">{label}</div>
      {sublabel && (
        <div className="text-white/40 text-xs mt-0.5">{sublabel}</div>
      )}
    </div>
  );
}
