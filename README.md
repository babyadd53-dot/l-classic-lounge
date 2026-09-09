# Velocity SaaS Landing Page

Production-ready Next.js 16 landing page with GSAP ScrollTrigger + Lenis bidirectional scroll animations. Based on HorizonX Velto template architecture.

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- npm 10+ (or pnpm/yarn)

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
```bash
cp .env.example .env.local
# Edit .env.local with your values
```

### 3. Add Images
Place your images in `public/img/`:
```
public/img/
├── hero-phone-left.png      # 400x800 - Left phone mockup
├── hero-phone-right.png     # 360x720 - Right phone mockup
├── logo-stripe.svg
├── logo-vercel.svg
├── logo-linear.svg
├── logo-notion.svg
├── logo-github.svg
├── logo-figma.svg
├── logo-slack.svg
├── logo-discord.svg
├── step-1-connect.svg
├── step-2-deploy.svg
├── step-3-scale.svg
├── avatar-sarah.jpg
├── avatar-marcus.jpg
├── avatar-emily.jpg
├── avatar-david.jpg
├── avatar-lisa.jpg
├── avatar-james.jpg
├── logo-linear-small.svg
├── logo-vercel-small.svg
├── logo-notion-small.svg
├── logo-github-small.svg
├── logo-figma-small.svg
├── logo-discord-small.svg
├── blog-zero-config.jpg
├── blog-ai-reviews.jpg
├── blog-edge-functions.jpg
├── team-alex.jpg
├── team-maria.jpg
├── team-james.jpg
├── team-priya.jpg
├── og-default.jpg           # 1200x630 - Open Graph image
├── favicon.ico
├── favicon-16x16.png
├── apple-touch-icon.png
└── site.webmanifest
```

### 4. Customize Content
Edit `content/copy.ts` — all text content lives here in plain arrays.

### 5. Run Development Server
```bash
npm run dev
```
Opens at `http://localhost:3000` with Turbopack hot reload.

---

## 📦 Production Build

```bash
npm run build
npm run start
```

### Build Output
- Static pages: Pre-rendered at build time
- API routes: `app/api/sitemap`, `app/api/robots`
- Optimized images: AVIF/WebP via Next.js Image
- Fonts: Self-hosted Geist/Geist Mono
- Bundle analysis: `npm run analyze`

---

## 🎨 Design System

All design tokens in `styles/globals.css` using Tailwind v4 `@theme inline`:

```css
@theme inline {
  --color-primary: #22c55e;        /* Change → entire site updates */
  --color-accent: #f97316;
  --font-sans: "Geist", sans-serif;
  --space-8: 2rem;
  --radius-xl: 0.75rem;
  /* ... 100+ tokens */
}
```

**One change = entire palette updates.**

---

## 🎬 Motion System

GSAP ScrollTrigger + Lenis smooth scrolling:

```tsx
// Bidirectional scrub animation (scrub: 1 = 1:1 scroll progress)
gsap.to(".element", {
  x: 100,
  scrollTrigger: {
    trigger: "#section",
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
  },
});
```

**Key files:**
- `components/hero/Hero.tsx` — Phone drift, headline slide, CTA fade
- `components/features/Features.tsx` — Staggered card entrance
- `components/pricing/Pricing.tsx` — Card stagger
- `components/testimonials/Testimonials.tsx` — Carousel + card entrance

---

## 📝 Content Management

**All copy in one file:** `content/copy.ts`

```typescript
export const hero = {
  headline: "Build faster. Ship smarter. Scale effortlessly.",
  subheadline: "The development platform...",
  primaryCta: { href: "#signup", label: "Start Free Trial" },
  // ...
};

export const pricing = {
  plans: [
    { name: "Pro", monthlyPrice: 29, features: [...] },
    // ...
  ],
};
```

**No JSX hunting. Edit arrays → site updates.**

---

## 🖼️ Image System (Velto Pattern)

Drop files in `public/img/` by slug — zero code changes:

```tsx
// In copy.ts
phoneMockups: {
  left: "/img/hero-phone-left.png",
  right: "/img/hero-phone-right.png",
}

// In component
<Media slug={hero.phoneMockups.left} alt="Dashboard" width={400} height={800} />
```

**Media component** (`components/Media.tsx`) wraps `next/image` with blur placeholders.

---

## 🔧 Customization Checklist

### Colors & Branding
- [ ] `styles/globals.css` — `--color-primary`, `--color-accent`, gradients
- [ ] `content/copy.ts` — `nav.logo`, company name throughout
- [ ] `public/img/` — Replace all placeholder images

### Content
- [ ] `content/copy.ts` — All headlines, descriptions, features, pricing
- [ ] `content/copy.ts` — Testimonials (quotes, names, companies)
- [ ] `content/copy.ts` — Team members, blog posts, FAQ

### Integrations
- [ ] `.env.local` — Analytics (GA4/Plausible), Sentry, Stripe
- [ ] `app/layout.tsx` — Update metadata, OG image URL
- [ ] `vercel.json` — Configure regions, cron jobs

### SEO
- [ ] `app/layout.tsx` — Default title, description, OG tags
- [ ] `content/copy.ts` — `seo` object for defaults
- [ ] `app/api/sitemap/route.ts` — Auto-generates from routes
- [ ] `app/api/robots/route.ts` — Auto-generates with base URL

---

## 🚀 Deploy to Vercel

### One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/velocity-landing)

### Manual Deploy
```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/velocity-landing.git
git push -u origin main

# 2. Import in Vercel
# - Go to vercel.com/new
# - Import repository
# - Add environment variables from .env.example
# - Deploy

# 3. Custom Domain
# - Settings → Domains → Add
# - Configure DNS (A record @ 76.76.21.21, CNAME www cname.vercel-dns.com)
# - SSL auto-provisioned
```

### Production Checklist
- [ ] All environment variables set in Vercel dashboard
- [ ] Custom domain configured with SSL
- [ ] Analytics verified (GA4/Plausible)
- [ ] Sentry DSN configured
- [ ] Stripe webhooks pointing to `/api/webhooks/stripe`
- [ ] Newsletter form connected (Resend/ConvertKit)
- [ ] Sitemap/robots accessible at `/sitemap.xml` and `/robots.txt`
- [ ] Lighthouse score > 90 (Performance, Accessibility, Best Practices, SEO)

---

## 📁 Project Structure

```
saas-landing-page/
├── app/
│   ├── api/
│   │   ├── robots/route.ts      # robots.txt generator
│   │   └── sitemap/route.ts     # sitemap.xml generator
│   ├── globals.css              # Tailwind v4 + design tokens
│   ├── layout.tsx               # Root layout + metadata
│   └── page.tsx                 # Homepage composition
├── components/
│   ├── Media.tsx                # Image wrapper (slug-based)
│   ├── nav/Nav.tsx              # Sticky nav + mobile menu
│   ├── hero/Hero.tsx            # GSAP animated hero
│   ├── marquee/Marquee.tsx      # Infinite logo scroll
│   ├── features/Features.tsx    # Tabbed feature grid
│   ├── step-panels/StepPanels.tsx
│   ├── pricing/Pricing.tsx      # Toggle + FAQ accordion
│   ├── testimonials/Testimonials.tsx
│   ├── team/Team.tsx
│   ├── blog/Blog.tsx
│   ├── faq/FAQ.tsx
│   └── footer/Footer.tsx
├── content/
│   └── copy.ts                  # ALL text content
├── lib/
│   └── utils.ts                 # cn(), formatters, helpers
├── public/img/                  # Drop images here by slug
├── styles/
│   └── globals.css              # Design tokens + base styles
├── .env.example                 # Environment template
├── next.config.ts               # Next.js 16 config
├── tsconfig.json                # Strict TypeScript
├── vercel.json                  # Vercel deployment config
└── package.json
```

---

## 🛠️ Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server with Turbopack |
| `npm run build` | Production build |
| `npm run start` | Production server |
| `npm run lint` | ESLint |
| `npm run type-check` | TypeScript check |
| `npm run format` | Prettier + Tailwind sort |
| `npm run analyze` | Bundle analyzer |

---

## 🎯 Performance Targets

| Metric | Target |
|--------|--------|
| LCP | < 1.5s |
| INP | < 100ms |
| CLS | < 0.05 |
| Lighthouse Perf | > 95 |
| Lighthouse A11y | 100 |
| Bundle Size (gz) | < 150KB |

---

## 📄 License

MIT — Use for any project, commercial or personal.

---

## 🙏 Credits

- **Architecture**: HorizonX Velto template patterns
- **Animation**: GSAP ScrollTrigger + Lenis
- **Styling**: Tailwind v4 + CSS custom properties
- **Fonts**: Geist by Vercel
- **Icons**: Lucide React
- **Deployment**: Vercel