import { footerLinks, profile } from "../content";
import { ArrowUpRight, Container } from "./ui";

function LinkColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-mono text-sm text-muted">{title}</p>
      <ul className="flex flex-col gap-2">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="text-base font-medium transition-colors hover:text-accent">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-line">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[1000px] -translate-x-1/2 translate-y-1/2 rounded-full opacity-20 blur-[140px]"
        style={{ background: "var(--accent)" }}
      />
      <Container className="relative py-20 md:py-[140px] xl:py-[160px]">
        {/* CTA */}
        <p className="mb-6 font-mono text-base text-accent">{"// "}Have a video or design project? I&apos;m available for freelance work.</p>
        <a href={`mailto:${profile.email}`} className="group block">
          <h2 className="text-[48px] font-bold leading-[1.125] tracking-[-0.03em] md:text-[80px] xl:text-[110px]">
            Let&apos;s work
            <br />
            <span className="inline-flex items-center gap-4 text-accent">
              together
              <ArrowUpRight className="h-10 w-10 transition-transform duration-300 group-hover:rotate-45 md:h-16 md:w-16 xl:h-20 xl:w-20" />
            </span>
          </h2>
        </a>

        <div className="mt-16 h-px w-full bg-line md:mt-20" />

        <div className="mt-12 grid gap-12 md:mt-20 md:grid-cols-[2fr_1fr]">
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <LinkColumn title="Quick links" links={footerLinks.quick} />
            <LinkColumn title="Portfolio" links={footerLinks.portfolio} />
            <LinkColumn title="Social" links={profile.socials} />
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-mono text-sm text-muted">Contact</p>
            <a href={`mailto:${profile.email}`} className="text-xl font-semibold hover:text-accent md:text-2xl">
              {profile.email}
            </a>
            <p className="text-base text-muted">{profile.phone}</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-line pt-8 text-sm text-muted md:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p>{profile.roles.join(" · ")}</p>
        </div>
      </Container>
    </footer>
  );
}
