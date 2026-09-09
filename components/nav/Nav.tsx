"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { nav } from "@/content/copy";
import { Menu, X, ChevronDown } from "lucide-react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[300] transition-all duration-300",
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
            className="flex items-center gap-2 text-xl font-bold text-foreground"
            aria-label={`${nav.logo} - Home`}
          >
            <span className="text-primary">{nav.logo}</span>
          </Link>

          <div className="hidden md:flex md:items-center md:gap-8">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex md:items-center md:gap-4">
            <Link
              href={nav.ctaSecondary.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {nav.ctaSecondary.label}
            </Link>
            <Link
              href={nav.cta.href}
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25"
            >
              {nav.cta.label}
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-muted-foreground transition-colors hover:text-foreground"
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
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
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
                className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <Link
                href={nav.ctaSecondary.href}
                className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground text-center"
                onClick={() => setMobileOpen(false)}
              >
                {nav.ctaSecondary.label}
              </Link>
              <Link
                href={nav.cta.href}
                className="rounded-lg bg-primary px-5 py-3 text-base font-semibold text-primary-foreground text-center transition-all hover:bg-primary-hover"
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