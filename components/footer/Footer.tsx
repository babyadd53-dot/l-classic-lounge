import Link from "next/link";
import { cn } from "@/lib/utils";
import { footer } from "@/content/copy";
import { Twitter, Github, MessageCircle, Linkedin, Mail } from "lucide-react";

const socialIcons = {
  twitter: Twitter,
  github: Github,
  discord: MessageCircle,
  linkedin: Linkedin,
};

export function Footer() {
  return (
    <footer
      className="border-t border-border/50 bg-muted/30"
      role="contentinfo"
      aria-label="Footer"
    >
      <div className="mx-auto max-w-[1400px] px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2 max-w-xs">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-foreground mb-4">
              <span className="text-primary">{footer.logo}</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {footer.tagline}
            </p>
            <div className="flex gap-4">
              {footer.social.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label={social.label}
                >
                  {(() => {
                    const Icon = socialIcons[social.icon as keyof typeof socialIcons];
                    return <Icon className="h-5 w-5" aria-hidden="true" />;
                  })()}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Product links">
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-3" role="list">
              {footer.navigation.product.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company links">
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3" role="list">
              {footer.navigation.company.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal links">
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3" role="list">
              {footer.navigation.legal.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Resource links">
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3" role="list">
              {footer.navigation.resources.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="rounded-2xl border border-border/50 bg-background p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                {footer.newsletter.headline}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {footer.newsletter.subheadline}
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md" aria-label="Newsletter signup">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={footer.newsletter.placeholder}
                className="flex-1 rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                required
                autoComplete="email"
              />
              <button
                type="submit"
                className="rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-all hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25 whitespace-nowrap"
              >
                {footer.newsletter.button}
              </button>
            </form>
            <p className="text-xs text-muted-foreground text-center md:text-left">
              {footer.newsletter.privacy}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {footer.copyright}
          </p>
          <p className="text-sm text-muted-foreground">
            {footer.madeWith}
          </p>
        </div>
      </div>
    </footer>
  );
}