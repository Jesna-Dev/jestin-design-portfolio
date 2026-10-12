import { metrics, profile, story } from "../content";
import PhotoStack from "./PhotoStack";
import { Container, ImageSlot, Tag } from "./ui";

export default function About() {
  return (
    <section id="about" className="pb-20 md:pb-[140px] xl:pb-[160px]">
      <PhotoStack />

      <Container className="mt-14 md:mt-20">
        <div className="grid gap-12 md:grid-cols-[minmax(0,460px)_minmax(0,540px)] md:items-center md:justify-between xl:justify-start xl:gap-[90px]">
          <ImageSlot
            src={profile.aboutImage}
            alt={`Photo of ${profile.name}`}
            sizes="(min-width: 810px) 460px, 100vw"
            className="aspect-[4/5] w-full rounded-2xl"
          />
          <div className="flex flex-col items-start gap-8">
            <Tag>About</Tag>
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
              <p className="text-h3 font-bold">{m.value}</p>
              <p className="text-base text-accent">{m.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
