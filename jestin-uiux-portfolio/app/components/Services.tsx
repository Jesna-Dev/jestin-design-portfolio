"use client";

import { useState } from "react";
import { profile, services } from "../content";
import { ArrowUpRight, Container, ImageSlot, SectionTitle } from "./ui";

export default function Services() {
  const [open, setOpen] = useState(0);

  return (
    <section id="services" className="scroll-mt-20 py-20 md:py-[140px] xl:py-[160px]">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle tag="Services" title="What I can do for you" />
          <p className="max-w-[400px] text-lg leading-[1.5] text-muted">
            Editing craft and AI tools under one roof, so your videos look sharp, hold attention and ship on time.
          </p>
        </div>

        <ul className="mt-12 border-t border-line md:mt-20">
          {services.map((s, i) => {
            const isOpen = open === i;
            return (
              <li key={s.title} className="border-b border-line">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center gap-6 py-8 text-left md:gap-10"
                >
                  <span className="font-mono text-base text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <h3
                    className={`flex-1 text-2xl font-semibold leading-[1.2] transition-colors md:text-[42px] ${
                      isOpen ? "text-foreground" : "text-muted group-hover:text-foreground"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <span className={`text-3xl text-accent transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>

                <div className={`grid transition-[grid-template-rows] duration-500 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <div className="grid gap-8 pb-10 md:grid-cols-[1fr_auto] md:pl-[72px]">
                      <div className="flex max-w-[540px] flex-col gap-6">
                        <p className="text-lg leading-[1.5] text-muted">{s.body}</p>
                        <a
                          href={`mailto:${profile.email}`}
                          className="flex w-fit items-center gap-2 rounded-[2px] bg-accent px-5 py-3 text-base font-semibold text-accent-ink transition-opacity hover:opacity-85"
                        >
                          Hire me <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </div>
                      <div className="flex gap-4">
                        {s.images.map((src, k) => (
                          <ImageSlot
                            key={k}
                            src={src}
                            alt={`${s.title} ${k + 1}`}
                            sizes="220px"
                            className="aspect-[4/3] w-[160px] rounded-[2px] md:w-[220px]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
