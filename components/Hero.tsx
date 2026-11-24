import { ArrowDown, Download, GraduationCap, Github, Layers, Linkedin, MapPin, Code2 } from "lucide-react";
import { profile, about, education, projects } from "@/data/content";

const d = (ms: number) => ({ "--d": ms } as React.CSSProperties);

export default function Hero() {
  const edu = education[0];
  const initials = profile.name.split(" ").map((w) => w[0]).join("");
  const rows = [
    { Icon: MapPin, label: "Based in", value: profile.location },
    { Icon: GraduationCap, label: "Studying", value: `B.Sc. Computer Science, ${edu.period}` },
    { Icon: Layers, label: "Built so far", value: `${projects.length} websites from scratch` },
  ];
  return (
    <section id="top" className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-center gap-12 px-5 py-14 lg:grid-cols-[1.25fr_0.75fr] lg:py-20">
      <div>
        <p className="hero-rise inline-flex items-center gap-2.5 rounded-full border border-line bg-white/5 px-4 py-1.5 text-sm text-soft backdrop-blur" style={d(100)}>
          <span className="pulse-dot" aria-hidden />
          Open to internships and front-end roles
        </p>
        <h1 className="mt-6 font-display text-[clamp(3.4rem,10vw,7rem)] leading-[0.95] tracking-tight">
          <span className="hero-rise block" style={d(250)}>{"Hi, I'm"}</span>
          <span className="hero-rise block" style={d(400)}><span className="text-gradient inline-block pb-2">{profile.name}</span></span>
        </h1>
        <p className="hero-rise mt-6 max-w-xl text-xl font-medium text-white sm:text-2xl" style={d(600)}>{profile.headline}</p>
        <p className="hero-rise mt-4 max-w-xl text-lg leading-relaxed text-soft" style={d(750)}>{profile.intro}</p>
        <div className="hero-rise mt-9 flex flex-wrap items-center gap-3" style={d(900)}>
          <a href="#projects" className="btn btn-primary">Explore my work <ArrowDown size={18} aria-hidden className="arrow-down" /></a>
          <a href={profile.resumeFile} download className="btn btn-ghost">Download resume <Download size={18} aria-hidden className="arrow-dl" /></a>
          {profile.links.github && (
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)" className="btn btn-ghost !p-3"><Github size={20} aria-hidden /></a>
          )}
          {profile.links.linkedin && (
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)" className="btn btn-ghost !p-3"><Linkedin size={20} aria-hidden /></a>
          )}
        </div>
      </div>

      <aside className="hero-rise" style={d(700)} aria-label="At a glance">
        <div className="float-soft card mx-auto max-w-sm p-6 sm:p-7">
          <div className="flex items-center gap-4">
            {profile.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={profile.photo} alt={`Portrait of ${profile.name}`} className="h-16 w-16 rounded-full object-cover object-top ring-2 ring-violet/60 ring-offset-2 ring-offset-navy" />
            ) : (
              <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-violet to-sky font-display text-2xl text-navy" role="img" aria-label="Photo placeholder">{initials}</span>
            )}
            <div>
              <p className="font-display text-2xl leading-tight">{profile.name}</p>
              <p className="text-sm text-soft">{profile.role}</p>
            </div>
          </div>
          <ul className="mt-6 space-y-4 border-t border-line pt-5">
            {rows.map(({ Icon, label, value }) => (
              <li key={label} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-violet/15 text-violet"><Icon size={16} aria-hidden /></span>
                <span><span className="block text-xs text-soft">{label}</span><span className="text-[0.95rem]">{value}</span></span>
              </li>
            ))}
            <li className="flex items-start gap-3">
              <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-violet/15 text-violet"><Code2 size={16} aria-hidden /></span>
              <span>
                <span className="block text-xs text-soft">Focus</span>
                <span className="mt-1.5 flex flex-wrap gap-1.5">
                  {about.focus.map((f) => <span key={f} className="rounded-full border border-line bg-white/5 px-2.5 py-0.5 text-xs">{f}</span>)}
                </span>
              </span>
            </li>
          </ul>
        </div>
      </aside>
    </section>
  );
}
