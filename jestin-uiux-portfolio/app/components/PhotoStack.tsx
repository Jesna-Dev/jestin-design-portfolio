"use client";

import { useEffect, useRef, useState } from "react";
import { aboutImages, profile } from "../content";
import Image from "next/image";

// Final tilt of each photo once it lands on the stack.
const tilts = [-6, 9, -3, 12, 4, -9];

function Asterisk({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" aria-hidden>
      <path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9" />
    </svg>
  );
}

function RoleTicker() {
  const row = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden}>
      {[...profile.roles, ...profile.roles].map((r, i) => (
        <div key={i} className="flex items-center">
          <span className="whitespace-nowrap text-[48px] font-bold uppercase leading-none tracking-[-0.01em] text-[#505559] md:text-[72px] xl:text-[88px]">
            {r}
          </span>
          <Asterisk className="mx-5 h-9 w-9 text-accent/60 md:mx-7 md:h-12 md:w-12" />
        </div>
      ))}
    </div>
  );
  return (
    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden">
      <div className="flex w-max animate-[marquee_40s_linear_infinite]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}

export default function PhotoStack() {
  const wrap = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const el = wrap.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const travel = el.offsetHeight - window.innerHeight;
      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(travel, 1)));
      // First photo is always on the stack; the rest land evenly as you scroll through.
      setShown(1 + Math.min(aboutImages.length - 1, Math.floor(progress * aboutImages.length)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    // Tall wrapper = one screen + ~62vh of scroll per extra photo; the stage stays pinned meanwhile.
    <div ref={wrap} style={{ height: `calc(100vh + ${(aboutImages.length - 1) * 62}vh)` }} className="relative">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <RoleTicker />

        <div className="relative z-10 h-[300px] w-full max-w-[358px] md:h-[478px] md:w-[474px] md:max-w-[474px]">
          {aboutImages.map((img, i) => {
            const landed = i < shown;
            return (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 w-max transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  zIndex: i,
                  opacity: landed ? 1 : 0,
                  transform: landed
                    ? `translate(-50%, -50%) rotate(${tilts[i % tilts.length]}deg)`
                    : `translate(-50%, 40%) rotate(0deg) scale(0.9)`,
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  sizes="(min-width: 1200px) 360px, (min-width: 810px) 320px, 240px"
                  className={`aspect-[4/5] w-[240px] object-cover ${"position" in img && img.position === "top" ? "object-top" : ""} shadow-[0_20px_60px_rgba(0,0,0,0.6)] md:w-[320px] xl:w-[360px]`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
