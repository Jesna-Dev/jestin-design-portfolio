import Image from "next/image";
import { profile } from "../content";
import { ArrowUpRight, ProjectCtas } from "./ui";

// Fine film-grain overlay (SVG turbulence), tiled over the glow.
const grain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div
        className="absolute -left-[20%] -top-[30%] h-[110%] w-[80%] rounded-full opacity-60 blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(122,242,152,0.55) 0%, rgba(122,242,152,0.12) 45%, transparent 70%)" }}
      />
      <div
        className="absolute -right-[15%] -top-[20%] h-[80%] w-[60%] rounded-full opacity-40 blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(122,242,152,0.4) 0%, transparent 70%)" }}
      />
      <div className="absolute inset-0 opacity-[0.18] mix-blend-overlay" style={{ backgroundImage: grain }} />
    </div>
  );
}

function Portrait() {
  // Cut-out portrait (transparent PNG), anchored to the bottom edge, in front of the name.
  return (
    <div className="relative z-10 mx-auto -mt-[6vw] aspect-[1506/2000] w-[min(82vw,420px)] md:w-[min(56vw,460px)] xl:absolute xl:bottom-0 xl:left-1/2 xl:mt-0 xl:h-[84%] xl:w-auto xl:-translate-x-1/2">
      {profile.heroImage ? (
        <Image
          src={profile.heroImage}
          alt={profile.name}
          fill
          priority
          sizes="(min-width: 1200px) 600px, (min-width: 810px) 460px, 82vw"
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

function Pitch() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-muted">{profile.role}</p>
      <h2 className="max-w-[440px] text-[28px] font-bold leading-[1.1] tracking-[-0.02em] md:text-[34px]">
        {profile.headline}
      </h2>
      <ProjectCtas className="mt-3" />
    </div>
  );
}

function Aside() {
  return (
    <div className="flex flex-col gap-3 text-sm md:items-end">
      <p className="flex items-center gap-2 text-muted">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        {profile.availability}
      </p>
      <ul className="flex gap-6">
        {profile.socials.map((s) => (
          <li key={s.label}>
            <a href={s.href} className="group flex items-center gap-1 font-medium transition-colors hover:text-accent">
              {s.label}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-45" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden xl:h-screen xl:min-h-[820px]">
      <Backdrop />

      <div className="relative mx-auto flex h-full w-full max-w-[1600px] flex-col px-4 pt-28 md:px-10 md:pt-32 xl:pt-[110px]">
        {/* Greeting + oversized name, sitting behind the portrait. Size = content width × 0.205 so it spans edge to edge. */}
        <div className="relative">
          <p className="text-xl font-medium md:text-2xl xl:text-[28px]">Hi, I am</p>
          <h1 className="whitespace-nowrap bg-linear-to-b from-accent from-40% to-accent/25 bg-clip-text text-[calc((100vw-32px)*0.205)] font-bold uppercase leading-[0.9] tracking-[-0.04em] text-transparent md:text-[calc((100vw-80px)*0.205)] min-[1600px]:text-[311px]">
            {profile.name}
          </h1>
        </div>

        <Portrait />

        {/* Fade the bottom of the portrait into the page so the copy stays readable */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[45%] bg-linear-to-t from-background via-background/85 to-transparent"
        />

        {/* Bottom row: pitch + CTAs left, availability + links right */}
        <div className="relative z-30 -mt-20 flex flex-col gap-10 pb-16 md:-mt-28 md:flex-row md:items-end md:justify-between xl:mt-auto xl:pb-14">
          <Pitch />
          <Aside />
        </div>
      </div>
    </section>
  );
}
