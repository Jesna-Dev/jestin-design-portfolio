import Image from "next/image";
import { clients } from "../content";
import { Container } from "./ui";

export default function Clients() {
  return (
    <section className="py-[60px] md:py-[120px]">
      <Container>
        <h2 className="mx-auto max-w-[550px] text-center text-2xl font-semibold leading-[1.4] md:text-[32px]">
          Brands and teams I&apos;ve had the pleasure to work with
        </h2>
      </Container>
      <div className="mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] md:mt-14">
        <div className="flex w-max animate-[marquee_30s_linear_infinite]">
          {[0, 1].map((k) => (
            <ul key={k} className="flex items-center" aria-hidden={k === 1}>
              {clients.map((c) => (
                <li key={c.name} className="flex h-20 w-[200px] items-center justify-center px-8 md:w-[240px]">
                  {c.logo ? (
                    <Image src={c.logo} alt={c.name} width={160} height={48} className="h-10 w-auto opacity-70" />
                  ) : (
                    <span className="text-xl font-semibold text-muted">{c.name}</span>
                  )}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
