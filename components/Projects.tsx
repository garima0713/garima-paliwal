import { ArrowUpRight, Download, ExternalLink, Github } from "lucide-react";
import Section from "./Section";
import { projects } from "@/data/content";
import Reveal from "./Reveal";
import ProjectPreview from "./ProjectPreview";

export default function Projects() {
  return (
    <Section id="projects" title="Projects" intro="Two websites I designed and built from scratch." revealContent={false}>
      <div className="space-y-8">
        {projects.map((p, idx) => (
          <Reveal key={p.title}>
            <article className="card card-hover group grid items-center gap-6 p-4 sm:p-6 lg:grid-cols-2 lg:gap-10 lg:p-8">
              <div className={`min-w-0 ${idx % 2 ? "lg:order-2" : ""}`}>
                <ProjectPreview title={p.title} site={p.site} screenshots={p.screenshots} livePreview={p.livePreview} />
              </div>
              <div className="flex min-w-0 flex-col">
                <h3 className="font-display text-3xl leading-tight sm:text-4xl">
                  <a
                    href={p.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-violet"
                    aria-label={`${p.title} (opens the website in a new tab)`}
                  >
                    {p.title}
                    <ArrowUpRight size={24} aria-hidden className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-soft">{p.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                  {p.tech.map((t) => <li key={t} className="chip !py-1 !text-sm">{t}</li>)}
                </ul>
                <p className="mt-4 text-soft"><span className="font-semibold text-white">My contribution: </span>{p.contribution}</p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a href={p.site} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                    <ExternalLink size={16} aria-hidden />View site
                  </a>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
                      <Github size={16} aria-hidden />GitHub
                    </a>
                  )}
                  {p.zip && (
                    <a href={p.zip} rel="noopener noreferrer" className="btn btn-ghost btn-sm">
                      <Download size={16} aria-hidden className="arrow-dl" />Download ZIP
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
