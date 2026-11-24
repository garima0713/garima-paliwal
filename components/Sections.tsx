import { Award, GraduationCap, Globe, Terminal, Wrench, Sparkles } from "lucide-react";
import Section, { Todo } from "./Section";
import Reveal from "./Reveal";
import { profile, about, education, skillGroups, experience, achievements, interests } from "@/data/content";

const groupIcons = [Terminal, Globe, Wrench, Sparkles];

export function About() {
  const initials = profile.name.split(" ").map((w) => w[0]).join("");
  return (
    <Section id="about" title="About me" revealContent={false}>
      <div className="grid items-center gap-12 md:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <div className="img-frame mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-navy shadow-[0_30px_60px_-30px_rgba(0,0,0,.8)]">
              {profile.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={profile.photo} alt={`Portrait of ${profile.name}`} className="aspect-[4/5] w-full object-cover object-top" loading="lazy" />
              ) : (
                <div className="grid aspect-[4/5] w-full place-items-center bg-gradient-to-br from-violet/30 to-sky/30 font-display text-8xl" role="img" aria-label="Photo placeholder">{initials}</div>
              )}
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-[#D5DBF0]">
            {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
          </div>
          <ul className="mt-8 flex flex-wrap gap-2.5" aria-label="Focus areas">
            {about.focus.map((f) => <li key={f} className="chip">{f}</li>)}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" title="Skills" intro="What I work with today." revealContent={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((g, i) => {
          const Icon = groupIcons[i % groupIcons.length];
          return (
            <Reveal key={g.title} delay={i * 90} className="h-full">
              <div className="card card-hover h-full p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet/30 to-sky/25 text-violet"><Icon size={19} aria-hidden /></span>
                  <h3 className="font-display text-2xl">{g.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((it) => <li key={it} className="chip">{it}</li>)}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" title="Education">
      <ol className="tl max-w-3xl">
        {education.map((e) => (
          <li key={e.degree} className="relative">
            <span className="tl-dot" aria-hidden />
            <div className="card card-hover p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <GraduationCap className="mt-1 shrink-0 text-violet" size={26} aria-hidden />
                <div>
                  <h3 className="font-display text-2xl leading-snug">{e.degree}</h3>
                  <p className="mt-2 inline-block rounded-full border border-line bg-white/5 px-3 py-0.5 text-sm text-soft">{e.period}</p>
                  <p className="mt-3">{e.institution || <Todo>add your college name</Todo>}</p>
                  <p className="mt-1 text-soft">{e.detail}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      {experience.length === 0 ? (
        <div className="card max-w-2xl p-7 sm:p-8">
          <p className="text-xl leading-relaxed">My hands-on experience so far comes from the projects above, built end to end on my own.</p>
          <p className="mt-3 text-soft">I'm open to internships and entry-level front-end roles.</p>
          <p className="mt-3"><Todo>add internships, volunteering or leadership roles in data/content.ts</Todo></p>
        </div>
      ) : (
        <ol className="tl max-w-3xl space-y-6">
          {experience.map((x) => (
            <li key={x.role + x.org} className="relative">
              <span className="tl-dot" aria-hidden />
              <div className="card card-hover p-6 sm:p-7">
                <h3 className="font-display text-2xl">{x.role}, {x.org}</h3>
                <p className="text-soft">{x.period}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5">{x.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
            </li>
          ))}
        </ol>
      )}
    </Section>
  );
}

export function Achievements() {
  return (
    <Section id="certifications" title="Certifications">
      <ul className="grid gap-5 sm:grid-cols-2">
        {achievements.map((a) => (
          <li key={a.title} className="card card-hover group flex gap-4 p-6">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet/30 to-sky/25 text-violet transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
              <Award size={20} aria-hidden />
            </span>
            <div>
              <h3 className="text-lg font-semibold leading-snug">{a.title}</h3>
              {a.issuer ? <p className="text-soft">{a.issuer}</p> : <Todo>add issuer and year</Todo>}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Interests() {
  return (
    <Section id="interests" title="Interests">
      <ul className="flex flex-wrap gap-3">
        {interests.map((i) => <li key={i} className="chip !px-5 !py-2 !text-base">{i}</li>)}
      </ul>
    </Section>
  );
}
