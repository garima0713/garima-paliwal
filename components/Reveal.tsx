"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Fades an element in with a slight upward move the first time it enters the viewport.
 * Runs once per element, uses IntersectionObserver, and does nothing when the visitor
 * prefers reduced motion. Content stays visible if JavaScript or IntersectionObserver is unavailable.
 */
export default function Reveal({
  children, className = "", delay = 0,
}: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"idle" | "hidden" | "shown">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    // Already on screen at load: leave it alone so there is no flash.
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.9 && r.bottom > 0) return;

    setState("hidden");
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setState("shown");
          io.disconnect(); // animate only once
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${state === "idle" ? "" : state === "hidden" ? "reveal" : "reveal is-visible"} ${className}`}
      style={delay && state !== "idle" ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
