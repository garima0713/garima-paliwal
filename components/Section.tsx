import Reveal from "./Reveal";

export default function Section({
  id, title, intro, children, revealContent = true,
}: { id: string; title: string; intro?: string; children: React.ReactNode; revealContent?: boolean }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <h2 id={`${id}-title`} className="font-display text-5xl tracking-tight sm:text-6xl">{title}</h2>
          <span className="rule" aria-hidden />
          {intro && <p className="mt-5 max-w-xl text-lg text-soft">{intro}</p>}
        </Reveal>
        <div className="mt-10 md:mt-12">
          {revealContent ? <Reveal delay={100}>{children}</Reveal> : <div>{children}</div>}
        </div>
      </div>
    </section>
  );
}

export function Todo({ children }: { children: React.ReactNode }) {
  // Placeholders only show while developing, never on the live site.
  if (process.env.NODE_ENV === "production") return null;
  return <span className="rounded bg-violet/30 px-1.5 py-0.5 text-xs text-white">TODO: {children}</span>;
}
