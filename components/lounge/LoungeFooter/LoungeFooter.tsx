"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { footer } from "@/content/lounge-copy";
import { Instagram, Mail, Phone, ChevronRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function LoungeFooter() {
  useGSAP((ctx: gsap.Context) => {
    gsap.context(() => {
      gsap.fromTo(
        ".footer-brand .reveal-up",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".footer-brand",
            start: "top 90%",
          },
        }
      );

      gsap.fromTo(
        ".footer-nav-column",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".footer-nav",
            start: "top 90%",
          },
        }
      );

      gsap.fromTo(
        ".footer-bottom-item",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".footer-bottom",
            start: "top 95%",
          },
        }
      );
    }, ctx);
  }, []);

  return (
    <footer
      className="relative border-t border-border bg-background"
      role="contentinfo"
      aria-label="Footer"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-gold/3 blur-[300px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-5 gap-10 md:gap-12 lg:gap-16 mb-16 md:mb-20">
          <div className="footer-brand lg:col-span-2 space-y-6">
            <Link href="/" className="inline-flex items-center gap-2 text-2xl md:text-3xl font-display font-medium tracking-widest uppercase text-foreground" aria-label={`${footer.logo} - Home`}>
              {footer.logo}
            </Link>
            <p className="text-foreground-muted leading-relaxed max-w-xs">
              {footer.tagline}
            </p>
            <div className="flex items-center gap-4">
              {footer.social.map((social) => {
                const iconMap = { instagram: Instagram, mail: Mail, phone: Phone } as const;
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-background-card border border-border text-foreground-muted transition-all duration-300 hover:border-gold/30 hover:text-gold hover:shadow-gold"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          <nav className="footer-nav grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10" aria-label="Footer navigation">
            {Object.entries(footer.navigation).map(([key, links]) => (
              <div key={key} className="footer-nav-column">
                <h4 className="font-display text-sm font-medium tracking-widest uppercase text-foreground mb-4">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </h4>
                <ul className="space-y-3" role="list">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-sm text-foreground-muted transition-colors duration-300 hover:text-gold group"
                      >
                        {link.label}
                        <ChevronRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="footer-bottom pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="footer-bottom-item text-foreground-subtle text-sm">
              {footer.copyright}
            </p>
            <div className="footer-bottom-item flex items-center gap-4 text-foreground-subtle text-sm">
              <span>{footer.madeWith}</span>
              <div className="flex h-1 w-12 bg-gradient-to-r from-transparent via-gold/30 to-transparent rounded-full" />
            </div>
            <div className="footer-bottom-item flex flex-wrap items-center gap-4 md:gap-6">
              {footer.navigation.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-foreground-subtle transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}