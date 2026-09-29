import { posts } from "../content";
import { Container, ImageSlot, SectionTitle } from "./ui";

export default function Blog() {
  return (
    <section id="blog" className="scroll-mt-20 py-[60px] md:py-[120px]">
      <Container>
        <SectionTitle tag="Blog" title="Latest notes" />
        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
          {posts.map((p) => (
            <a key={p.title} href={p.href} className="group flex flex-col gap-6">
              <ImageSlot
                src={p.image}
                alt={p.title}
                sizes="(min-width: 1200px) 400px, (min-width: 810px) 50vw, 100vw"
                className="aspect-[16/11] rounded-[2px] [&_img]:transition-transform [&_img]:duration-700 group-hover:[&_img]:scale-105"
              />
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 font-mono text-sm text-muted">
                  <span className="text-accent">{p.tag}</span>
                  <span className="h-3 w-px bg-line" />
                  <span>{p.date}</span>
                </div>
                <h3 className="text-xl font-semibold leading-[1.4] transition-colors group-hover:text-accent md:text-2xl">
                  {p.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
