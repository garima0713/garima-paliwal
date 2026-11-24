"use client";
import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { profile } from "@/data/content";

const links = [
  ["About", "#about"], ["Projects", "#projects"], ["Skills", "#skills"],
  ["Education", "#education"], ["Contact", "#contact"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    document.querySelectorAll("main section[id]").forEach((s) => io.observe(s));
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${scrolled || open ? "border-b border-line bg-navy/75 shadow-[0_10px_40px_-20px_rgba(0,0,0,.8)] backdrop-blur-xl" : "border-b border-transparent"}`}>
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" onClick={() => setOpen(false)} className="font-display text-2xl transition-colors duration-300 hover:text-violet">{profile.name}</a>
        <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} className={`nav-link ${active === href ? "active" : ""}`} aria-current={active === href ? "true" : undefined}>{label}</a>
            </li>
          ))}
          <li>
            <a href={profile.resumeFile} download className="btn btn-ghost btn-sm">Resume <Download size={15} aria-hidden className="arrow-dl" /></a>
          </li>
        </ul>
        <button
          className={`burger flex h-10 w-10 flex-col items-center justify-center md:hidden ${open ? "open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
      </nav>
      <div id="mobile-menu" aria-hidden={!open} className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out md:hidden ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <ul className="min-h-0 overflow-hidden px-5">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} className="block border-b border-line py-4 font-display text-2xl">{label}</a>
            </li>
          ))}
          <li className="py-5">
            <a href={profile.resumeFile} download tabIndex={open ? 0 : -1} className="btn btn-primary">Download resume <Download size={16} aria-hidden /></a>
          </li>
        </ul>
      </div>
    </header>
  );
}
