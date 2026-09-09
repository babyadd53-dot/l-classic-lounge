"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Media } from "@/components/Media";
import { cn } from "@/lib/utils";
import { stepPanels } from "@/content/copy";

if (typeof window !== undefined) {
  gsap.registerPlugin(ScrollTrigger);
}

export function StepPanels() {
  useGSAP((ctx: gsap.Context) => {
    gsap.context(() => {
      stepPanels.steps.forEach((step, i) => {
        gsap.fromTo(
          `.step-${i}`,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: `.step-${i}`,
              start: "top 80%",
            },
          }
        );
      });
    }, ctx);
  }, []);

  return (
    <section
      id="steps"
      className="py-20 md:py-32 lg:py-40 bg-muted/30"
      aria-labelledby="steps-headline"
    >
      <div className="mx-auto max-w-[1400px] px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="steps-headline" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 animate-in slide-up">
            {stepPanels.headline}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground animate-in slide-up delay-100">
            {stepPanels.subheadline}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stepPanels.steps.map((step, i) => (
            <article
              key={step.number}
              className={cn(
                "relative rounded-2xl border border-border/50 bg-background p-6 md:p-8",
                "step-" + i
              )}
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="text-4xl font-bold text-primary/20">{step.number}</span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {step.description}
              </p>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50">
                <Media
                  slug={step.visual.replace("/img/", "")}
                  alt={`${step.title} illustration`}
                  width={1}
                  height={1}
                  fill
                  className="object-cover"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}