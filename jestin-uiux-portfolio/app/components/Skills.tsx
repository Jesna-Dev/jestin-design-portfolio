"use client";

import { useRef, useState } from "react";
import { tools } from "../content";
import { Container, SectionTitle } from "./ui";

export default function Skills() {
  const [active, setActive] = useState(0);
  const [dot, setDot] = useState<{ x: number; y: number } | null>(null);
  const area = useRef<HTMLDivElement>(null);
  const t = tools[active];

  // Green dot trails the pointer while it's over the list (mouse only).
  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !area.current) return;
    const r = area.current.getBoundingClientRect();
    setDot({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <section id="skills" className="scroll-mt-20 py-20 md:py-[140px] xl:py-[160px]">
      <Container>
        <SectionTitle tag="Toolkit & Capabilities" title="Tools & Skills" />

        <div
          ref={area}
          onPointerMove={onMove}
          onPointerLeave={() => setDot(null)}
          className="relative mt-12 md:mt-20"
        >
          <ul className="flex flex-wrap items-baseline gap-x-3 gap-y-1 md:gap-x-5">
            {tools.map((tool, i) => (
              <li key={tool.name} className="flex items-baseline gap-3 md:gap-5">
                <button
                  type="button"
                  onPointerEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                  className={`text-h3 font-bold tracking-[-0.02em] transition-colors duration-300 ${
                    i === active ? "text-foreground" : "text-foreground/35 hover:text-foreground"
                  }`}
                >
                  {tool.name}
                </button>
                {i < tools.length - 1 && (
                  <span aria-hidden className="text-h3 font-light text-foreground/20">
                    /
                  </span>
                )}
              </li>
            ))}
          </ul>

          {dot && (
            <span
              aria-hidden
              className="pointer-events-none absolute left-0 top-0 h-7 w-7 rounded-full bg-accent/90 transition-transform duration-150 ease-out"
              style={{ transform: `translate(${dot.x - 14}px, ${dot.y - 14}px)` }}
            />
          )}
        </div>

        {/* Detail card for the highlighted tool */}
        <div aria-live="polite" className="mt-12 w-full max-w-[460px] rounded-2xl border border-line bg-surface p-6 md:mt-16">
          <div key={t.name} className="flex animate-[fadeUp_0.4s_ease-out] items-start gap-4">
            <span
              className="grid h-12 w-12 shrink-0 place-items-center rounded-xl font-mono text-lg font-bold text-accent-ink"
              style={{ background: t.color }}
            >
              {t.code}
            </span>
            <div className="flex flex-col gap-1.5">
              <p className="flex flex-wrap items-center gap-2">
                <span className="text-h4 font-bold">{t.name}</span>
                <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-xs text-muted">{t.category}</span>
              </p>
              <p className="text-sm leading-[1.5] text-muted">{t.desc}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
