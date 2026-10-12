"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "../content";
import { ArrowUpRight, Badge, Container, ImageSlot, SectionTitle } from "./ui";

// Panels sit on the inside of a ring, so neighbours angle in toward the viewer.
// With few projects the ring repeats them so there are always panels on both sides.
const SLOTS = projects.length < 6 ? projects.length * 2 : projects.length;
const STEP = 360 / SLOTS;
// Panels further round than this are hidden (they'd swing behind the camera).
const CULL = 70;
// How long each project takes to rotate past.
const SECONDS_PER_PROJECT = 4;

export default function Works() {
  const paused = useRef(false);
  const stage = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);
  const [panelW, setPanelW] = useState(720);

  useEffect(() => {
    const onResize = () => {
      const w = stage.current?.clientWidth ?? 1200;
      setPanelW(Math.min(w < 810 ? w * 0.78 : w * 0.56, 780));
    };
    onResize();
    window.addEventListener("resize", onResize);

    // Continuous, frame-rate independent rotation; paused on hover or reduced motion.
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(now - last, 50);
      last = now;
      if (!paused.current && !still) setRotation((r) => (r + (STEP / SECONDS_PER_PROJECT) * (dt / 1000)) % 360);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const radius = panelW / (2 * Math.tan(Math.PI / SLOTS));
  const active = Math.round(rotation / STEP) % SLOTS % projects.length;
  const p = projects[active];

  return (
    <section id="works" className="scroll-mt-20 overflow-hidden py-20 md:py-[140px] xl:py-[160px]">
      <Container>
        <SectionTitle tag="Works" title="Selected projects" />
      </Container>

      <div
        className="mt-12 flex flex-col items-center gap-10 md:mt-20"
        onPointerEnter={() => (paused.current = true)}
        onPointerLeave={() => (paused.current = false)}
      >
        <div className="flex w-full flex-col items-center gap-10">
          <div
            ref={stage}
            className="relative w-full"
            style={{ height: panelW * 0.62, perspective: radius * 1.7 }}
          >
            <div
              className="absolute left-1/2 top-0 h-full [transform-style:preserve-3d]"
              style={{ width: panelW, marginLeft: -panelW / 2, transform: `translateZ(${radius}px) rotateY(${rotation}deg)` }}
            >
              {Array.from({ length: SLOTS }, (_, i) => {
                const proj = projects[i % projects.length];
                // Angle of this panel relative to the front, folded into -180..180.
                const rel = ((((rotation - i * STEP) % 360) + 540) % 360) - 180;
                const visible = Math.abs(rel) < CULL;
                return (
                  <a
                    key={i}
                    href={proj.href}
                    tabIndex={visible && Math.abs(rel) < STEP / 2 ? 0 : -1}
                    aria-hidden={!visible}
                    className="absolute inset-0 overflow-hidden rounded-xl border border-line bg-surface shadow-[0_30px_80px_rgba(0,0,0,0.5)] [backface-visibility:hidden]"
                    style={{
                      transform: `rotateY(${-i * STEP}deg) translateZ(${-radius}px)`,
                      opacity: visible ? 1 - Math.abs(rel) / (CULL * 1.6) : 0,
                      visibility: visible ? "visible" : "hidden",
                    }}
                  >
                    <ImageSlot src={proj.image} alt={proj.title} sizes="780px" className="h-full w-full" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Details of the project facing the viewer */}
          <Container>
            <div key={p.title} className="flex animate-[fadeUp_0.4s_ease-out] flex-col items-center gap-4 text-center">
              <a href={p.href} className="group flex items-center gap-2 text-h4 font-semibold transition-colors hover:text-accent">
                {p.title}
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
              </a>
              <div className="flex flex-wrap justify-center gap-2">
                {p.tags.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
              <p className="font-mono text-sm text-muted">
                {String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </p>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
