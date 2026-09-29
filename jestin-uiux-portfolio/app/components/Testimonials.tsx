"use client";

import { useRef } from "react";
import { testimonials } from "../content";
import { Container, ImageSlot, SectionTitle } from "./ui";

export default function Testimonials() {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("article");
    el.scrollBy({ left: dir * ((card?.clientWidth ?? 400) + 24), behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="py-[60px] md:py-[120px]">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle tag="Testimonials" title="What clients say" />
          <div className="flex gap-3">
            {[-1, 1].map((d) => (
              <button
                key={d}
                onClick={() => scroll(d)}
                aria-label={d < 0 ? "Previous testimonial" : "Next testimonial"}
                className="grid h-12 w-12 place-items-center rounded-full border border-line text-xl transition-colors hover:border-accent hover:bg-accent hover:text-accent-ink"
              >
                {d < 0 ? "←" : "→"}
              </button>
            ))}
          </div>
        </div>

        <div
          ref={track}
          className="-mx-4 mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-2 [scrollbar-width:none] md:-mx-10 md:mt-14 md:px-10"
        >
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="flex w-[85%] shrink-0 snap-start flex-col justify-between gap-12 rounded-[2px] border border-line bg-surface p-8 md:w-[calc(50%-12px)] md:p-10 xl:w-[calc(40%-12px)]"
            >
              <div className="flex flex-col gap-6">
                <span className="text-5xl leading-none text-accent">“</span>
                <h3 className="text-xl font-medium leading-[1.5] md:text-2xl md:leading-[1.4]">{t.quote}</h3>
              </div>
              <div className="flex items-center gap-4">
                <ImageSlot src={t.image} alt="" sizes="56px" className="h-14 w-14 shrink-0 rounded-full" />
                <div>
                  <p className="text-lg font-semibold">{t.name}</p>
                  <p className="text-sm text-muted">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
