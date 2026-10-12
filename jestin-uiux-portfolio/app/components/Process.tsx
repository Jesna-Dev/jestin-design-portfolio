import { process } from "../content";
import { Tag } from "./ui";

export default function Process() {
  return (
    <section id="process" className="bg-surface py-20 md:py-[140px] xl:py-[160px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 md:px-10">
        {/* Title row: tag left, heading in the right half */}
        <div className="grid gap-4 md:grid-cols-2">
          <Tag>Process</Tag>
          <h2 className="text-h2 font-bold tracking-[-0.01em]">
            My Editing &amp; AI
            <br />
            Process
          </h2>
        </div>

        {/* </ ——— > divider */}
        <div className="mt-12 flex items-center gap-2 font-mono text-base text-accent md:mt-16">
          <span>&lt;/</span>
          <span className="h-px flex-1 bg-foreground/30" />
          <span>&gt;</span>
        </div>

        <ol className="mt-12 grid md:mt-20 md:grid-cols-3">
          {process.map((p, i) => (
            <li
              key={p.title}
              className="group flex flex-col border-line py-10 max-md:border-b max-md:first:pt-0 max-md:last:border-b-0 md:border-l md:px-6 md:py-10 md:first:border-l-0 md:first:pl-0"
            >
              {/* Number with its leading 0 cropped on the left; slides fully into view on hover */}
              <div className="overflow-hidden">
                <span className="-ml-[0.34em] block text-[120px] font-bold leading-[0.8] tracking-[-0.02em] text-accent transition-[margin] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:ml-0 md:text-[130px] xl:text-[150px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              {/* Card grows taller on hover by opening up the space under the number */}
              <h4 className="mt-16 text-h4 font-bold transition-[margin] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:mt-24 md:mt-24 md:group-hover:mt-36 xl:mt-[120px] xl:group-hover:mt-[180px]">
                {p.title}
              </h4>
              <p className="mt-4 max-w-[380px] text-sm leading-[1.4] text-foreground/75 transition-colors duration-300 group-hover:text-foreground">
                {p.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
