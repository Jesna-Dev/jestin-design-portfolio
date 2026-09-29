import Image from "next/image";
import { profile } from "../content";

function Portrait() {
  // Works best with a cut-out portrait (transparent PNG), anchored to the bottom edge.
  return (
    <div className="relative mx-auto aspect-[480/560] w-[min(76.9vw,290px)] md:w-[min(32.96vw,320px)] xl:w-[min(35.83vw,480px)]">
      {profile.heroImage ? (
        <Image
          src={profile.heroImage}
          alt={profile.name}
          fill
          priority
          sizes="(min-width: 1200px) 480px, (min-width: 810px) 320px, 290px"
          className="object-contain object-bottom"
        />
      ) : (
        <div className="absolute inset-x-[12%] bottom-0 top-[8%] grid place-items-center rounded-t-full border border-dashed border-line">
          <span className="font-mono text-xs text-muted">Portrait (transparent PNG)</span>
        </div>
      )}
    </div>
  );
}

function Contact() {
  return (
    <div className="flex flex-col gap-2 text-base font-semibold leading-[1.6]">
      <p>
        E{" "}
        <a href={`mailto:${profile.email}`} className="hover:text-accent">
          {profile.email}
        </a>
      </p>
      <p>
        T{" "}
        <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:text-accent">
          {profile.phone}
        </a>
      </p>
    </div>
  );
}

function Socials() {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-2">
      {profile.socials.map((s) => (
        <li key={s.label}>
          <a href={s.href} className="group flex gap-1 text-base font-medium">
            <span className="text-accent">/</span>
            <span className="transition-colors group-hover:text-accent">{s.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function ScrollCue() {
  return (
    <a href="#about" className="flex flex-col items-center gap-4" aria-label="Scroll down">
      <span className="relative h-20 w-px overflow-hidden bg-foreground/30">
        <span className="absolute inset-x-0 top-0 h-1/2 animate-[scrollLine_1.8s_ease-in-out_infinite] bg-foreground" />
      </span>
      <span className="rotate-180 text-sm font-bold tracking-[0.05em] [writing-mode:vertical-rl]">SCROLL</span>
    </a>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden xl:h-screen xl:min-h-[820px]">
      <div className="relative mx-auto flex h-full w-full max-w-[1600px] flex-col px-4 pt-28 md:px-10 md:pt-32 xl:pt-[140px]">
        {/* Tagline + name */}
        <div className="relative z-10 flex flex-col gap-4 xl:gap-6">
          <p className="flex items-center gap-2 text-xl font-bold leading-[1.4] md:text-2xl">
            Hey,
            <span className="inline-block origin-[70%_70%] animate-[wave_2.4s_ease-in-out_infinite]">👋</span>
            I&apos;m a {profile.role}
          </p>
          <h1 className="text-[64px] font-bold uppercase leading-[0.9] tracking-[-0.02em] text-accent md:text-[110px] xl:text-[158px]">
            {profile.name}
          </h1>
        </div>

        {/* Desktop: portrait centred at the bottom, glow behind it */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden justify-center xl:flex">
          <div
            aria-hidden
            className="absolute bottom-[18%] left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full blur-[90px]"
            style={{ background: "radial-gradient(circle, rgba(122,242,152,0.45) 0%, rgba(122,242,152,0.12) 45%, transparent 70%)" }}
          />
          <div className="relative">
            <Portrait />
          </div>
        </div>

        {/* Desktop: bottom-left contact */}
        <div className="absolute bottom-14 left-10 z-10 hidden xl:block">
          <Contact />
        </div>

        {/* Desktop: right column — scroll cue, description, socials */}
        <div className="absolute bottom-14 right-10 z-10 hidden w-[355px] flex-col xl:flex">
          <div className="mb-16 self-end pr-6">
            <ScrollCue />
          </div>
          <p className="text-base leading-[1.6]">{profile.intro}</p>
          <div className="mt-20 self-end">
            <Socials />
          </div>
        </div>

        {/* Phone + tablet: stacked */}
        <div className="relative z-10 mt-12 flex flex-col gap-10 pb-16 xl:hidden">
          <div className="relative flex justify-center">
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[70px]"
              style={{ background: "radial-gradient(circle, rgba(122,242,152,0.4) 0%, transparent 70%)" }}
            />
            <div className="relative">
              <Portrait />
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <p className="max-w-[420px] text-base leading-[1.6]">{profile.intro}</p>
            <div className="flex flex-col gap-6 md:items-end">
              <Contact />
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
