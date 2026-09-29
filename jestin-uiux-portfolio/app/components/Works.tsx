import { projects } from "../content";
import { ArrowUpRight, Badge, Container, Divider, ImageSlot, SectionTitle } from "./ui";

export default function Works() {
  return (
    <section id="works" className="scroll-mt-20 py-[60px] md:py-[120px]">
      <Container>
        <SectionTitle tag="Works" title="Selected projects" />
        <Divider className="my-10 md:my-14" />
        <div className="grid gap-x-6 gap-y-14 md:grid-cols-2">
          {projects.map((p) => (
            <a key={p.title} href={p.href} className="group flex flex-col gap-6">
              <div className="relative">
                <ImageSlot
                  src={p.image}
                  alt={p.title}
                  sizes="(min-width: 810px) calc((min(100vw, 1280px) - 104px) / 2), calc(100vw - 32px)"
                  className="aspect-[4/3] rounded-[2px] [&_img]:transition-transform [&_img]:duration-700 group-hover:[&_img]:scale-105"
                />
                <span className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-accent text-accent-ink opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold leading-[1.4] transition-colors group-hover:text-accent">{p.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
