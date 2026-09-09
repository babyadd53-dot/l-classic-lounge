"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { atmosphere } from "@/content/lounge-copy";
import { Sun, Music, Hand, Sparkles, Quote } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const pillarIcons = {
  sun: Sun,
  music: Music,
  hand: Hand,
  sparkles: Sparkles,
};

export function LoungeAtmosphere() {
  useGSAP((ctx: gsap.Context) => {
    gsap.context(() => {
      gsap.fromTo(
        ".atmosphere-header .reveal-up",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".atmosphere-header",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".pillar-card",
        { y: 80, opacity: 0, rotateX: -10 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".pillars-grid",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".philosophy-text p",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".philosophy-section",
            start: "top 75%",
          },
        }
      );
    }, ctx);
  }, []);

  return (
    <section
      id="atmosphere"
      className="relative py-24 md:py-32 lg:py-40 px-4 md:px-6 lg:px-8"
      aria-labelledby="atmosphere-headline"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[300px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-amber/5 blur-[200px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px]">
        <div className="atmosphere-header text-center mb-20 md:mb-28">
          <span className="reveal-up inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-gold mb-6">
            <Quote className="h-4 w-4" aria-hidden="true" />
            {atmosphere.subheadline}
          </span>
          <h2 id="atmosphere-headline" className="reveal-up font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-foreground mb-6">
            {atmosphere.headline}
          </h2>
        </div>

        <div className="pillars-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-24 md:mb-32">
          {atmosphere.pillars.map((pillar, i) => {
            const Icon = pillarIcons[pillar.icon as keyof typeof pillarIcons];
            return (
              <article
                key={pillar.title}
                className="pillar-card relative rounded-2xl bg-background-card border border-border p-6 md:p-8 transition-all duration-500 hover:border-gold/30 hover:shadow-gold"
                style={{ '--index': i } as React.CSSProperties}
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-2xl" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="font-display text-xl font-medium tracking-tight text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-foreground-muted leading-relaxed">
                  {pillar.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="philosophy-section relative">
          <div className="absolute inset-0 bg-gradient-card rounded-3xl" />
          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="flex items-center gap-3 text-gold mb-8">
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
              <Quote className="h-6 w-6 shrink-0" aria-hidden="true" />
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-8">
              {atmosphere.philosophy.title}
            </h3>
            <div className="philosophy-text prose prose-invert max-w-none text-foreground-muted leading-relaxed">
              {atmosphere.philosophy.paragraphs.map((paragraph, i) => (
                <p key={i} className="mb-6 text-lg md:text-xl">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}