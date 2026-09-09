"use client";

import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { pricing } from "@/content/copy";
import { Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  useGSAP((ctx: gsap.Context) => {
    gsap.context(() => {
      gsap.fromTo(
        ".pricing-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".pricing-grid",
            start: "top 80%",
          },
        }
      );
    }, ctx);
  }, [yearly]);

  return (
    <section
      id="pricing"
      className="py-20 md:py-32 lg:py-40"
      aria-labelledby="pricing-headline"
    >
      <div className="mx-auto max-w-[1400px] px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 id="pricing-headline" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 animate-in slide-up">
            {pricing.headline}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground animate-in slide-up delay-100">
            {pricing.subheadline}
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-16 animate-in slide-up delay-200">
          <span className={cn("text-sm font-medium", !yearly ? "text-foreground" : "text-muted-foreground")}>
            {pricing.billingToggle.monthly}
          </span>
          <button
            role="switch"
            aria-checked={yearly}
            onClick={() => setYearly(!yearly)}
            className={cn(
              "relative inline-flex h-7 w-12 items-center rounded-full transition-colors",
              yearly ? "bg-primary" : "bg-muted"
            )}
            aria-label={yearly ? "Switch to monthly billing" : "Switch to yearly billing"}
          >
            <span
              className={cn(
                "inline-block h-5 w-5 transform rounded-full bg-background shadow-md transition-transform duration-200",
                yearly ? "translate-x-5" : "translate-x-0"
              )}
              aria-hidden="true"
            />
          </button>
          <span className={cn("text-sm font-medium relative", yearly ? "text-foreground" : "text-muted-foreground")}>
            {pricing.billingToggle.yearly}
            {yearly && (
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-semibold text-primary-foreground bg-primary px-1.5 py-0.5 rounded whitespace-nowrap">
                {pricing.billingToggle.savings}
              </span>
            )}
          </span>
        </div>

        <div className="pricing-grid grid md:grid-cols-3 gap-6 md:gap-8">
          {pricing.plans.map((plan, i) => (
            <article
              key={plan.name}
              className={cn(
                "pricing-card relative rounded-2xl border p-6 md:p-8 flex flex-col",
                plan.popular
                  ? "border-primary bg-primary/5 shadow-xl shadow-primary/10"
                  : "border-border/50 bg-background"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-foreground">
                    {yearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                {yearly && plan.yearlyPrice > 0 && (
                  <p className="text-sm text-muted-foreground mt-1">
                    Billed yearly ({formatCurrency((yearly ? plan.yearlyPrice : plan.monthlyPrice) * 12)}/yr)
                  </p>
                )}
              </div>

              <ul className="mb-8 flex-1 space-y-3" role="list">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <Check
                      className={cn(
                        "h-5 w-5 flex-shrink-0",
                        plan.popular ? "text-primary" : "text-muted-foreground"
                      )}
                      aria-hidden="true"
                    />
                    <span className={cn(plan.popular ? "text-foreground" : "text-muted-foreground")}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.cta.href}
                className={cn(
                  "rounded-lg px-6 py-3.5 text-base font-semibold text-center transition-all",
                  plan.cta.variant === "primary"
                    ? "bg-primary text-primary-foreground hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/25"
                    : plan.cta.variant === "secondary"
                    ? "border border-border bg-background text-foreground hover:bg-muted hover:border-primary/50"
                    : "border border-border bg-transparent text-foreground hover:bg-muted"
                )}
              >
                {plan.cta.label}
              </a>
            </article>
          ))}
        </div>

        <details className="mt-16 w-full max-w-3xl mx-auto animate-in slide-up delay-300">
          <summary className="flex items-center justify-between cursor-pointer text-lg font-medium text-foreground">
            <span>Have more questions?</span>
            <span className="text-muted-foreground">View all FAQs</span>
          </summary>
          <div className="mt-6 space-y-4" role="list">
            {pricing.faq.map((faq, i) => (
              <details key={i} className="group rounded-xl border border-border/50 bg-background p-6">
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                  <span className="font-medium text-foreground">{faq.question}</span>
                  <svg
                    className="h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}