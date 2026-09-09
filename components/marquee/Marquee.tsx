"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { marquee } from "@/content/copy";
import { cn } from "@/lib/utils";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface MarqueeItemProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

function MarqueeItem({ src, alt, width, height }: MarqueeItemProps) {
  return (
    <div className="flex h-full items-center px-8 md:px-12" aria-hidden="true">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="grayscale opacity-60 transition-all duration-300 hover:opacity-100 hover:grayscale-0"
      />
    </div>
  );
}

export function Marquee() {
  const logos = marquee.logos;

  useGSAP((ctx: gsap.Context) => {
    gsap.context(() => {
      const track = document.querySelector(".marquee-track");
      if (!track) return;

      const clone = track.cloneNode(true);
      track.parentNode?.appendChild(clone);

      const trackWidth = track.scrollWidth;

      gsap.to([track, clone], {
        x: -trackWidth,
        ease: "none",
        duration: 30,
        repeat: -1,
      });
    }, ctx);
  }, []);

  return (
    <section className="border-y border-border/50 bg-muted/30 overflow-hidden" aria-label="Trusted by">
      <div className="mx-auto max-w-[1400px] px-4 md:px-6 lg:px-8 py-6 md:py-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Trusted by innovative teams
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="relative" style={{ maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)" }}>
          <div className="marquee-track flex whitespace-nowrap will-change-transform">
            {logos.map((logo, i) => (
              <MarqueeItem key={i} {...logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}