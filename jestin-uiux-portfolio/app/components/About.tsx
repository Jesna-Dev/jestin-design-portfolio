import { metrics, profile, skillGroups, story } from "../content";
import PhotoStack from "./PhotoStack";
import { Container, Tag } from "./ui";

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="m7 8-4 4 4 4M17 8l4 4-4 4M14 5l-4 14" />
    </svg>
  );
}

function Skills() {
  return (
    <div className="flex flex-col">
      {skillGroups.map((g) => (
        <div key={g.title} className="flex flex-col gap-3 border-b border-line py-5 first:pt-0">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold leading-[1.4]">{g.title}</h3>
            <CodeIcon />
          </div>
          <ul className="flex flex-wrap gap-x-3 gap-y-1">
            {g.items.map((s) => (
              <li key={s} className="text-sm leading-[1.4] text-foreground/80">
                {s}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="pb-20 md:pb-[140px] xl:pb-[160px]">
      <PhotoStack />

      <Container className="mt-14 md:mt-20">
        <div className="grid gap-12 md:grid-cols-[minmax(0,550px)_minmax(0,540px)] md:justify-between xl:grid-cols-[550px_540px] xl:justify-start xl:gap-[90px]">
          <div className="flex flex-col gap-5">
            <Tag>Skills</Tag>
            <Skills />
          </div>
          <div className="flex flex-col items-start gap-8 md:pt-10">
            <p className="text-base leading-[1.6]">{story}</p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-accent px-7 py-3 text-base font-medium leading-none text-accent-ink transition-opacity hover:opacity-85"
              >
                Hire me
              </a>
              <a
                href={profile.resume}
                className="rounded-full border border-line px-7 py-3 text-base font-medium leading-none transition-colors hover:border-accent"
              >
                My Resume
              </a>
            </div>
          </div>
        </div>

        <div className="mt-24 grid gap-10 sm:grid-cols-3 md:mt-[120px] md:gap-16">
          {metrics.map((m) => (
            <div key={m.label} className="flex flex-col gap-2 border-b border-line pb-6">
              <p className="text-[40px] font-bold leading-[1.2] md:text-[48px]">{m.value}</p>
              <p className="text-base text-accent">{m.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
