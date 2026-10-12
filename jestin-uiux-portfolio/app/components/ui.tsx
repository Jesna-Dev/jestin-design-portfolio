import Image from "next/image";
import type { ReactNode } from "react";

// Page-width wrapper: 1280px max, 16px gutters on phone, 40px from tablet up.
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1280px] px-4 md:px-10 ${className}`}>{children}</div>;
}

// "// Label" tag used above every section heading.
export function Tag({ children }: { children: string }) {
  return <p className="font-mono text-base text-accent">{"// "}{children}</p>;
}

export function SectionTitle({ tag, title, className = "" }: { tag: string; title: ReactNode; className?: string }) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <Tag>{tag}</Tag>
      <h2 className="text-[42px] font-semibold leading-[1.2] tracking-[-0.02em] md:text-[56px] xl:text-[72px]">{title}</h2>
    </div>
  );
}

export function Divider({ className = "" }: { className?: string }) {
  return <div className={`h-px w-full bg-line ${className}`} />;
}

// Image slot with a fixed aspect ratio. Renders a neutral placeholder until `src` is set.
export function ImageSlot({
  src,
  alt,
  className = "",
  sizes = "100vw",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden bg-surface ${className}`}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        <div className="absolute inset-0 grid place-items-center bg-[repeating-linear-gradient(135deg,#1c1c1c_0_12px,#191818_12px_24px)]">
          <span className="font-mono text-xs text-muted">{alt}</span>
        </div>
      )}
    </div>
  );
}

export function Badge({ children }: { children: string }) {
  return (
    <span className="rounded-[2px] border border-line px-3 py-1.5 text-sm leading-none text-muted">{children}</span>
  );
}

export function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0Z" />
    </svg>
  );
}

export function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

// "Start a Project" pill + "View My Work" link, shared by the hero and intro.
export function ProjectCtas({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-6 ${className}`}>
      <a
        href="#contact"
        className="group flex items-center gap-4 rounded-full bg-accent py-1.5 pl-6 pr-1.5 text-base font-semibold text-accent-ink transition-transform hover:scale-[1.03]"
      >
        Start a Project
        <span className="grid h-10 w-10 place-items-center rounded-full bg-background text-accent">
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
        </span>
      </a>
      <a href="#works" className="group flex items-center gap-2 text-base font-medium transition-colors hover:text-accent">
        View My Work
        <ArrowUpRight className="h-4 w-4 rotate-90 transition-transform duration-300 group-hover:translate-y-0.5" />
      </a>
    </div>
  );
}
