"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { Media } from "@/components/Media";
import { cn } from "@/lib/utils";
import { hero } from "@/content/copy";
import { ArrowRight, CheckCircle } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);
  useGSAP((ctx: gsap.Context) => {
    gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      tl.to(".hero-phone-left", {
        x: -120,
        y: 80,
        scale: 0.9,
        rotate: -5,
        ease: "none",
      })
        .to(
          ".hero-phone-right",
          {
            x: 120,
            y: 80,
            scale: 0.9,
            rotate: 5,
            ease: "none",
          },
          "<"
        )
        .to(
          ".hero-headline .word",
          {
            y: -100,
            opacity: 0,
            stagger: 0.05,
            ease: "none",
          },
          "<"
        )
        .to(
          ".hero-subheadline",
          {
            y: -60,
            opacity: 0,
            ease: "none",
          },
          "<0.2"
        )
        .to(
          ".hero-cta",
          {
            y: -40,
            opacity: 0,
            ease: "none",
          },
          "<0.3"
        );
    }, ctx);
  }, []);

  useGSAP((ctx: gsap.Context) => {
    gsap.context(() => {
      gsap.fromTo(
        ".hero-stats .stat",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".hero-stats",
            start: "top 85%",
          },
        }
      );
    }, ctx);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-headline"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/50 to-background" />

      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[200px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[200px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 md:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6 animate-in slide-up">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-primary animate-ping" />
                <span className="relative rounded-full bg-primary" />
              </span>
              {hero.badge}
            </div>

            <h1
              id="hero-headline"
              className="hero-headline text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-foreground mb-6 animate-in slide-up delay-100"
            >
              {hero.headline.split(" ").map((word, i) => (
                <span key={i} className="word block">
                  {word}
                </span>
              ))}
            </h1>

            <p
              className="hero-subheadline text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-in slide-up delay-200"
            >
              {hero.subheadline}
            </p>

            <div className="hero-cta flex flex-col sm:flex-row gap-4 mb-12 animate-in slide-up delay-300">
              <a
                href={hero.primaryCta.href}
                className="rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/25 flex items-center justify-center gap-2"
              >
                {hero.primaryCta.label}
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={hero.secondaryCta.href}
                className="rounded-lg border border-border bg-background/50 px-8 py-4 text-base font-semibold text-foreground transition-all hover:bg-muted hover:border-primary/50 flex items-center justify-center gap-2"
              >
                {hero.secondaryCta.label}
              </a>
            </div>

            <div className="hero-trust flex flex-wrap items-center gap-4 text-sm text-muted-foreground animate-in slide-up delay-400">
              {hero.trustIndicators.map((indicator, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-primary" aria-hidden="true" />
                  {indicator}
                </span>
              ))}
            </div>
          </div>

          <div className="relative z-10" aria-hidden="true">
            <div className="relative aspect-[4/5] max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-muted to-background border border-border/50" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-primary/10 via-transparent to-transparent" />

              <div className="hero-phone-left relative z-10">
                <Media
                  slug={hero.phoneMockups.left}
                  alt="Velocity dashboard on mobile"
                  width={400}
                  height={800}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
              </div>

              <div className="hero-phone-right absolute top-0 right-0 z-0">
                <Media
                  slug={hero.phoneMockups.right}
                  alt="Velocity analytics on mobile"
                  width={360}
                  height={720}
                  className="rounded-2xl shadow-2xl opacity-80"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="hero-stats mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {hero.stats.map((stat, i) => (
            <div key={i} className="stat text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}