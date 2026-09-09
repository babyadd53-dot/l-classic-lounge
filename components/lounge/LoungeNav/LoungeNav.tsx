"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { nav } from "@/content/lounge-copy";
import { Menu, X, ChevronDown, MousePointer } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function LoungeNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoHover, setLogoHover] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP((ctx: gsap.Context) => {
    gsap.context(() => {
      gsap.fromTo(
        ".nav-link",
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.6,
          ease: "power3.out",
          delay: 0.3,
        }
      );

      gsap.fromTo(
        ".nav-cta",
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
          delay: 0.6,
        }
      );
    }, ctx);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[300] transition-all duration-500",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
      role="banner"
    >
      <nav
        className="mx-auto max-w-[1400px] px-4 md:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link
            href="/"
            className="relative flex items-center gap-2 text-xl md:text-2xl font-display font-medium text-foreground"
            aria-label={`${nav.logo} - Home`}
            onMouseEnter={() => setLogoHover(true)}
            onMouseLeave={() => setLogoHover(false)}
          >
            <span className="tracking-widest uppercase">{nav.logo}</span>
            {logoHover && (
              <span className="absolute -right-8 top-1/2 -translate-y-1/2 text-gold text-sm font-sans tracking-widest uppercase opacity-0 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                Est. 2024
              </span>
            )}
          </Link>

          <div className="hidden md:flex md:items-center md:gap-10">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link relative text-sm font-medium text-foreground-muted transition-colors hover:text-gold after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex md:items-center md:gap-4">
            <Link
              href={nav.cta.href}
              className="nav-cta relative rounded-lg bg-transparent border border-gold/30 px-6 py-2.5 text-sm font-medium text-gold transition-all hover:bg-gold/10 hover:border-gold hover:shadow-gold"
            >
              {nav.cta.label}
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-foreground-muted transition-colors hover:text-gold"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={cn(
            "md:hidden overflow-hidden transition-all duration-500 ease-in-out",
            mobileOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"
          )}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-4">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-foreground-muted transition-colors hover:text-gold"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              <Link
                href={nav.cta.href}
                className="rounded-lg border border-gold/30 px-5 py-3 text-base font-medium text-gold text-center transition-all hover:bg-gold/10 hover:border-gold"
                onClick={() => setMobileOpen(false)}
              >
                {nav.cta.label}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}