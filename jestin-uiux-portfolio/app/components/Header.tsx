"use client";

import { useState } from "react";
import { profile } from "../content";

const links = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Works", href: "#works" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex h-20 w-full max-w-[1600px] items-center justify-between px-4 md:px-10">
        <a href="#top" className="text-lg font-bold uppercase tracking-tight">
          {profile.name}
        </a>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden h-11 items-center rounded-full bg-accent px-5 text-base font-medium text-accent-ink transition-transform hover:scale-[1.03] sm:flex"
          >
            Hire me
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="site-menu"
            className="flex h-11 w-40 items-center justify-between rounded-full bg-foreground px-5 text-base font-medium text-background transition-transform hover:scale-[1.03]"
          >
            <span>{open ? "Close" : "Menu"}</span>
            <svg viewBox="0 0 24 24" className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-90" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="m9 6-6 6 6 6M15 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </nav>

      <div
        id="site-menu"
        className={`absolute inset-x-0 top-0 -z-10 bg-background/95 backdrop-blur transition-all duration-300 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="mx-auto flex max-w-[1600px] flex-col gap-2 px-4 pb-10 pt-24 md:px-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-h2 font-semibold transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
