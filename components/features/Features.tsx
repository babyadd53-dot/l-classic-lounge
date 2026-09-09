"use client";

import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { features } from "@/content/copy";
import {
  Zap,
  Rocket,
  Activity,
  GitBranch,
  Bot,
  Database,
  Globe,
  MapPin,
  Flag,
  BarChart,
  AlertTriangle,
  Gauge,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const tabIcons = {
  zap: Zap,
  rocket: Rocket,
  activity: Activity,
  "github-branch": GitBranch,
  bot: Bot,
  database: Database,
  globe: Globe,
  "map-pin": MapPin,
  flag: Flag,
  "bar-chart": BarChart,
  "alert-triangle": AlertTriangle,
  gauge: Gauge,
};

export function Features() {
  const [activeTab, setActiveTab] = useState(features.tabs[0]?.id ?? "workflow");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useGSAP((ctx: gsap.Context) => {
    gsap.context(() => {
      gsap.fromTo(
        ".feature-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".features-grid",
            start: "top 80%",
          },
        }
      );
    }, ctx);
  }, [activeTab]);

  const currentTab = features.tabs.find((t) => t.id === activeTab);

  return (
    <section id="features" className="py-20 md:py-32 lg:py-40" aria-labelledby="features-headline">
      <div className="mx-auto max-w-[1400px] px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="features-headline" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 animate-in slide-up">
            {features.headline}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground animate-in slide-up delay-100">
            {features.subheadline}
          </p>
        </div>

        <div className="mb-12" role="tablist" aria-label="Feature categories">
          <div className="inline-flex items-center gap-1 rounded-xl bg-muted p-1">
            {features.tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`${tab.id}-panel`}
                id={`${tab.id}-trigger`}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "relative rounded-lg px-5 py-3 text-sm font-medium transition-all duration-200 flex items-center gap-2",
                  activeTab === tab.id
                    ? "bg-background text-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {(() => {
                  const Icon = tabIcons[tab.icon as keyof typeof tabIcons];
                  return <Icon className="h-5 w-5" aria-hidden="true" />;
                })()}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div id={`${activeTab}-panel`} role="tabpanel" aria-labelledby={`${activeTab}-trigger`}>
          <div className="features-grid grid md:grid-cols-3 gap-6 md:gap-8">
            {currentTab?.features.map((feature, i) => (
              <article
                key={feature.title}
                className="feature-card group rounded-2xl border border-border/50 bg-muted/30 p-6 md:p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {(() => {
                    const Icon = tabIcons[feature.icon as keyof typeof tabIcons];
                    return <Icon className="h-6 w-6" aria-hidden="true" />;
                  })()}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}