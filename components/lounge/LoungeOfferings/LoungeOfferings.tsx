"use client";

import { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { offerings } from "@/content/lounge-copy";
import { ChevronRight, Wine, Flame, UtensilsCrossed } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type OfferingItem = {
  name: string;
  description: string;
  price: string;
};

type Category = {
  id: string;
  label: string;
  description: string;
  items: OfferingItem[];
};

const categoryIcons = {
  spirits: Wine,
  cigars: Flame,
  dining: UtensilsCrossed,
};

function OfferingCard({ item, index }: { item: OfferingItem; index: number }) {
  const [hovered, setHovered] = useState(false);

  useGSAP((ctx: gsap.Context) => {
    gsap.context(() => {
      gsap.fromTo(
        ".offering-item",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".offerings-list",
            start: "top 85%",
          },
        }
      );
    }, ctx);
  }, []);

  return (
    <article
      className="offering-item group relative rounded-xl bg-background-card border border-border p-6 transition-all duration-500 hover:border-gold/30 hover:shadow-gold"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h4 className="font-display text-lg font-medium tracking-tight text-foreground">
            {item.name}
          </h4>
        </div>
        <span className="font-mono text-gold font-medium whitespace-nowrap shrink-0">
          ${item.price}
        </span>
      </div>
      <p className="text-foreground-muted text-sm leading-relaxed mb-4">
        {item.description}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-xs tracking-widest uppercase text-gold/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Explore
        </span>
        <ChevronRight className="h-4 w-4 text-gold/60 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300" aria-hidden="true" />
      </div>
    </article>
  );
}

function CategoryTab({ category, isActive, onClick }: { category: Category; isActive: boolean; onClick: () => void }) {
  const Icon = categoryIcons[category.id as keyof typeof categoryIcons];
  
  return (
    <button
      onClick={onClick}
      role="tab"
      className={cn(
        "relative flex flex-col items-center gap-3 px-6 py-5 rounded-xl border transition-all duration-300",
        isActive
          ? "bg-gold/10 border-gold/30 text-gold shadow-gold"
          : "bg-background-card border-border text-foreground-muted hover:border-gold/20 hover:text-foreground"
      )}
      aria-selected={isActive}
    >
      <div className={cn("flex h-10 w-10 items-center justify-center rounded-lg transition-all", isActive ? "bg-gold/20" : "bg-gold/5")}>
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <span className="font-medium tracking-wide">{category.label}</span>
      <span className="text-xs tracking-widest uppercase opacity-60">{category.items.length} selections</span>
    </button>
  );
}

export function LoungeOfferings() {
  const [activeCategory, setActiveCategory] = useState(offerings.categories[0]?.id || "");

  useGSAP((ctx: gsap.Context) => {
    gsap.context(() => {
      gsap.fromTo(
        ".offerings-header .reveal-up",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".offerings-header",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".category-tab",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".categories-tabs",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".category-description",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".category-description",
            start: "top 85%",
          },
        }
      );
    }, ctx);
  }, [activeCategory]);

  const currentCategory = offerings.categories.find(c => c.id === activeCategory)!;

  return (
    <section
      id="offerings"
      className="relative py-24 md:py-32 lg:py-40 px-4 md:px-6 lg:px-8"
      aria-labelledby="offerings-headline"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[300px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px]">
        <div className="offerings-header text-center mb-16 md:mb-20">
          <span className="reveal-up inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-gold mb-6">
            <ChevronRight className="h-4 w-4 rotate-90" aria-hidden="true" />
            {offerings.subheadline}
          </span>
          <h2 id="offerings-headline" className="reveal-up font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-foreground">
            {offerings.headline}
          </h2>
        </div>

        <div className="categories-tabs flex flex-wrap items-center justify-center gap-4 mb-12 md:mb-16">
          {offerings.categories.map((category) => (
            <CategoryTab
              key={category.id}
              category={category}
              isActive={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            />
          ))}
        </div>

        <div className="category-description max-w-2xl mx-auto text-center mb-16 md:mb-20">
          <p className="text-lg md:text-xl text-foreground-muted leading-relaxed">
            {currentCategory.description}
          </p>
        </div>

        <div className="offerings-list grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCategory.items.map((item, i) => (
            <OfferingCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}