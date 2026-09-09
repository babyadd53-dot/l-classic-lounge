"use client";

import { useState, useEffect, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Media } from "@/components/Media";
import { cn } from "@/lib/utils";
import { testimonials } from "@/content/copy";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const items = testimonials.items;

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (touch) setTouchStart(touch.clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touch = e.changedTouches[0];
    if (!touch) return;
    const touchEnd = touch.clientX;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
    setTouchStart(null);
  };

  useGSAP((ctx: gsap.Context) => {
    gsap.context(() => {
      gsap.fromTo(
        ".testimonial-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".testimonials-grid",
            start: "top 80%",
          },
        }
      );
    }, ctx);
  }, []);

  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 lg:py-40 bg-muted/30"
      aria-labelledby="testimonials-headline"
    >
      <div className="mx-auto max-w-[1400px] px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="testimonials-headline" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 animate-in slide-up">
            {testimonials.headline}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground animate-in slide-up delay-100">
            {testimonials.subheadline}
          </p>
        </div>

        <div className="relative">
          <div
            className="testimonials-grid grid md:grid-cols-3 gap-6 md:gap-8"
            role="region"
            aria-label="Testimonials carousel"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {items.map((item, i) => (
              <article
                key={i}
                className={cn(
                  "testimonial-card relative rounded-2xl border border-border/50 bg-background p-6 md:p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10",
                  i === currentIndex ? "ring-2 ring-primary/50" : ""
                )}
              >
                <Quote className="h-8 w-8 text-primary/20 mb-4" aria-hidden="true" />
                <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                  "{item.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden border border-border/50 flex-shrink-0">
                    <Media
                      slug={item.avatar.replace("/img/", "")}
                      alt={`${item.author} avatar`}
                      width={48}
                      height={48}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{item.author}</div>
                    <div className="text-sm text-muted-foreground">{item.role}, {item.company}</div>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <Media
                    slug={item.companyLogo.replace("/img/", "")}
                    alt={`${item.company} logo`}
                    width={80}
                    height={24}
                    className="opacity-60"
                  />
                </div>
              </article>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="rounded-full p-3 border border-border bg-background text-foreground transition-all hover:border-primary/50 hover:text-primary hover:bg-primary/5"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" aria-hidden="true" />
            </button>

            <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
              {items.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === currentIndex}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={cn(
                    "h-2 w-2 rounded-full transition-all",
                    i === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/50 hover:bg-muted-foreground"
                  )}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="rounded-full p-3 border border-border bg-background text-foreground transition-all hover:border-primary/50 hover:text-primary hover:bg-primary/5"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}