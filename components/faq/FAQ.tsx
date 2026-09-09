"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { faq } from "@/content/copy";

if (typeof window !== undefined) {
  gsap.registerPlugin(ScrollTrigger);
}

export function FAQ() {
  useGSAP((ctx: gsap.Context) => {
    gsap.context(() => {
      gsap.fromTo(
        ".faq-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".faq-list",
            start: "top 80%",
          },
        }
      );
    }, ctx);
  }, []);

  return (
    <section
      id="faq"
      className="py-20 md:py-32 lg:py-40"
      aria-labelledby="faq-headline"
    >
      <div className="mx-auto max-w-[1400px] px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="faq-headline" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 animate-in slide-up">
            {faq.headline}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground animate-in slide-up delay-100">
            {faq.subheadline}
          </p>
        </div>

        <div className="faq-list max-w-3xl mx-auto space-y-4">
          {faq.items.map((item, i) => (
            <details
              key={i}
              className="faq-item group rounded-xl border border-border/50 bg-background overflow-hidden"
            >
              <summary className="flex items-start justify-between gap-4 p-6 cursor-pointer list-none">
                <span className="font-medium text-foreground text-lg">{item.question}</span>
                <svg
                  className="h-6 w-6 text-muted-foreground flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-muted-foreground leading-relaxed animate-in slide-down">
                {item.answer}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center animate-in slide-up delay-200">
          <p className="text-muted-foreground mb-4">
            Didn't find your answer? Our team is here to help.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-all hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/25"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}