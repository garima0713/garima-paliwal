"use client";
import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import Section, { Todo } from "./Section";
import { profile } from "@/data/content";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // No backend needed: this opens the visitor's email app with the message filled in.
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(`Hello from ${name || "your portfolio"}`)}&body=${encodeURIComponent(message)}`;
  const row = "group flex items-center gap-4 rounded-xl p-3 transition-colors duration-300 hover:bg-white/5";
  const icon = "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet/30 to-sky/25 text-violet transition-transform duration-300 group-hover:scale-110";
  const text = "transition-colors duration-300 group-hover:text-violet";

  return (
    <Section id="contact" title="Contact me" intro="Open to internships and front-end roles.">
      <div className="card grid gap-8 p-5 sm:p-8 md:grid-cols-2 md:gap-12 lg:p-10">
        <div>
          <ul className="space-y-1">
            <li><a href={`mailto:${profile.email}`} className={row}><span className={icon}><Mail size={20} aria-hidden /></span><span className={`break-all ${text}`}>{profile.email}</span></a></li>
            <li><a href={`tel:${profile.phone.replace(/\s/g, "")}`} className={row}><span className={icon}><Phone size={20} aria-hidden /></span><span className={text}>{profile.phone}</span></a></li>
            <li className={row}><span className={icon}><MapPin size={20} aria-hidden /></span>{profile.location}</li>
            <li>
              {profile.links.linkedin ? (
                <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className={row} aria-label="Garima Paliwal on LinkedIn (opens in a new tab)"><span className={icon}><Linkedin size={20} aria-hidden /></span><span className={text}>LinkedIn</span></a>
              ) : <div className={row}><span className={icon}><Linkedin size={20} aria-hidden /></span><Todo>add LinkedIn link</Todo></div>}
            </li>
            <li>
              {profile.links.github ? (
                <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className={row}><span className={icon}><Github size={20} aria-hidden /></span><span className={text}>GitHub</span></a>
              ) : <div className={row}><span className={icon}><Github size={20} aria-hidden /></span><Todo>add GitHub link</Todo></div>}
            </li>
          </ul>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); window.location.href = mailto; }}>
          <label className="block text-soft">Your name
            <input className="field" value={name} onChange={(e) => setName(e.target.value)} required autoComplete="name" />
          </label>
          <label className="mt-5 block text-soft">Message
            <textarea className="field" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} required />
          </label>
          <button type="submit" className="btn btn-primary mt-6">
            Send by email <Send size={18} aria-hidden className="arrow-send" />
          </button>
        </form>
      </div>
    </Section>
  );
}
