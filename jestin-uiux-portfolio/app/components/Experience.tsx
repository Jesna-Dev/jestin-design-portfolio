"use client";

import { useEffect, useRef, useState } from "react";
import { experience } from "../content";
import { Container, SectionTitle, Tag } from "./ui";

const TICKS = 60;
// Rounded so server and browser trig results match during hydration.
const pt = (n: number) => Math.round(n * 100) / 100;

// Line icons for each role, keyed by `icon` in content.ts.
const icons: Record<(typeof experience)[number]["icon"], React.ReactNode> = {
  // Pen tool: design work
  design: (
    <>
      <path d="m12 19 7-7 3 3-7 7-3-3z" />
      <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="m2 2 7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </>
  ),
  // Video camera: video editing
  video: (
    <>
      <rect x="2" y="6" width="14" height="12" rx="2" />
      <path d="m16 10 6-4v12l-6-4" />
    </>
  ),
  // Film strip: film post-production
  film: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 3v18M17 3v18M3 7.5h4M3 12h18M3 16.5h4M17 7.5h4M17 16.5h4" />
    </>
  ),
};

// Circular dial: tick ring that fills with scroll progress, icon for the current role in the middle.
function Dial({ progress, step }: { progress: number; step: number }) {
  const lit = Math.round(progress * TICKS);
  return (
    <div className="relative h-[160px] w-[160px]">
      <svg viewBox="0 0 160 160" className="absolute inset-0 -rotate-90" aria-hidden>
        {Array.from({ length: TICKS }, (_, i) => {
          const a = (i / TICKS) * Math.PI * 2;
          const r1 = 70;
          const r2 = i % 5 === 0 ? 62 : 66;
          return (
            <line
              key={i}
              x1={pt(80 + Math.cos(a) * r1)}
              y1={pt(80 + Math.sin(a) * r1)}
              x2={pt(80 + Math.cos(a) * r2)}
              y2={pt(80 + Math.sin(a) * r2)}
              stroke="currentColor"
              strokeWidth="1.5"
              className={`transition-colors duration-300 ${i < lit ? "text-accent" : "text-foreground/15"}`}
            />
          );
        })}
      </svg>
      {experience.map((e, i) => (
        <div
          key={e.role + e.company}
          className={`absolute inset-0 grid place-items-center transition-all duration-500 ${
            i === step ? "scale-100 opacity-100" : "scale-75 opacity-0"
          }`}
          aria-hidden
        >
          <svg viewBox="0 0 24 24" className="h-11 w-11 text-foreground" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {icons[e.icon]}
          </svg>
        </div>
      ))}
    </div>
  );
}

// Desktop/tablet: section pins to the viewport while you scroll through each role.
function ScrollExperience() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const count = experience.length;
  const active = Math.min(count - 1, Math.floor(progress * count));

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const scrollable = height - window.innerHeight;
      setProgress(Math.min(1, Math.max(0, -top / scrollable)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={ref} className="relative hidden md:block" style={{ height: `${count * 100}vh` }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <Container className="grid grid-cols-[180px_1fr] items-center gap-10 xl:grid-cols-[1fr_1.4fr_1fr]">
          {/* Left: label + dial */}
          <div className="flex flex-col items-start gap-10 xl:flex-row xl:items-center xl:justify-between xl:pr-10">
            <div className="whitespace-nowrap">
              <Tag>Experience</Tag>
            </div>
            <Dial progress={progress} step={active} />
          </div>

          {/* Centre: role titles slide so the active one sits in the middle */}
          <div className="relative h-[70vh] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
            <ol
              className="absolute inset-x-0 top-1/2 flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateY(calc(${-active} * 200px - 100px))` }}
            >
              {experience.map((e, i) => (
                <li key={e.role + e.company} className="flex h-[200px] flex-col justify-center">
                  <h3
                    className={`text-h3 font-bold uppercase tracking-[-0.01em] transition-colors duration-500 ${
                      i === active ? "text-foreground" : "text-foreground/15"
                    }`}
                  >
                    {e.role}
                  </h3>
                  {/* Tablet: details sit under the active title */}
                  <p
                    className={`mt-3 font-mono text-sm text-accent transition-opacity duration-500 xl:hidden ${
                      i === active ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {e.period} · {e.company}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* Right (desktop): details of the active role fade in */}
          <div className="relative hidden h-[260px] xl:block">
            {experience.map((e, i) => (
              <div
                key={e.role + e.company}
                className={`absolute inset-0 flex flex-col gap-4 transition-all duration-500 ${
                  i === active ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
                }`}
                aria-hidden={i !== active}
              >
                <p className="font-mono text-sm text-accent">{e.period}</p>
                <p className="text-base font-semibold">{e.company}</p>
                <ul className="flex flex-col gap-3">
                  {e.points.map((pt) => (
                    <li key={pt} className="text-sm leading-[1.6] text-muted">
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}

// Phone: plain stacked list.
function StackedExperience() {
  return (
    <Container className="md:hidden">
      <SectionTitle tag="Experience" title="Where I've worked" />
      <ol className="mt-12 border-t border-line">
        {experience.map((e) => (
          <li key={e.role + e.company} className="flex flex-col gap-3 border-b border-line py-10">
            <p className="font-mono text-sm text-accent">{e.period}</p>
            <h3 className="text-h4 font-bold uppercase">{e.role}</h3>
            <p className="text-base text-muted">{e.company}</p>
            <ul className="mt-2 flex flex-col gap-3">
              {e.points.map((pt) => (
                <li key={pt} className="flex gap-3 text-base leading-[1.6] text-foreground/80">
                  <span className="text-accent">/</span>
                  {pt}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Container>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-20 md:py-0">
      <StackedExperience />
      <ScrollExperience />
    </section>
  );
}
