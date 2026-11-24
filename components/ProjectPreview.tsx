"use client";

import { useEffect, useRef, useState } from "react";
import type { Screenshot } from "@/data/content";

type Props = { title: string; site: string; screenshots?: Screenshot[]; livePreview?: string };

/** Browser-style frame with a fixed 16:10 area, so every project preview has the same size and no blank space. */
export default function ProjectPreview({ title, site, screenshots, livePreview }: Props) {
  const [active, setActive] = useState(0);
  const [scale, setScale] = useState(0.4);
  const box = useRef<HTMLDivElement>(null);
  const shots = screenshots ?? [];
  const current = shots[active] ?? shots[0];

  useEffect(() => {
    const el = box.current;
    if (!el || current || !livePreview) return;
    const update = () => setScale(el.clientWidth / 1280);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [current, livePreview]);

  return (
    <figure className="min-w-0">
      <div className="overflow-hidden rounded-xl border border-white/10 bg-deep shadow-[0_24px_50px_-24px_rgba(0,0,0,.9)] transition-shadow duration-500 group-hover:shadow-[0_24px_60px_-16px_rgba(99,110,255,.45)]">
        <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-white/25" /><span className="h-2 w-2 rounded-full bg-white/25" /><span className="h-2 w-2 rounded-full bg-violet/70" />
          <span className="ml-3 truncate rounded bg-white/10 px-3 py-0.5 text-xs text-soft">
            {current ? `${current.label.toLowerCase()}.html` : "index.html"}
          </span>
        </div>
        <div ref={box} className="relative aspect-[16/10] w-full overflow-hidden bg-deep">
          {current ? (
            <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transform-none">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={current.src}
                src={current.src}
                alt={current.alt}
                width={1280}
                height={800}
                loading="lazy"
                className="img-swap absolute inset-0 h-full w-full object-cover object-top"
              />
            </div>
          ) : livePreview ? (
            <>
              {/* Real running site, scaled to fit. Clicks go to the link on top. */}
              <iframe
                src={livePreview}
                title={`Live preview of ${title}`}
                loading="lazy"
                tabIndex={-1}
                aria-hidden
                className="pointer-events-none absolute left-0 top-0 origin-top-left border-0 bg-white"
                style={{ width: "1280px", height: "800px", transform: `scale(${scale})` }}
              />
              <a href={site} target="_blank" rel="noopener noreferrer" aria-label={`Open ${title} in a new tab`} className="absolute inset-0 cursor-pointer" />
            </>
          ) : null}
        </div>
      </div>
      {shots.length > 1 && (
        <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label={`${title} screenshots`}>
          {shots.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              className={i === active ? "btn btn-primary btn-sm !px-4 !py-1.5" : "chip !py-1 !text-sm"}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}
    </figure>
  );
}
