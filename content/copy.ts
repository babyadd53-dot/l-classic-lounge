/* ==========================================================================
   SAAS LANDING PAGE — COPY CONTENT
   Single source of truth for all text content.
   Edit these arrays to customize your landing page.
   ========================================================================== */

export const nav = {
  logo: "Velocity",
  links: [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#blog", label: "Blog" },
  ],
  cta: { href: "#signup", label: "Get Started" },
  ctaSecondary: { href: "#demo", label: "Watch Demo" },
};

export const hero = {
  badge: "Now with AI-powered workflows",
  headline: "Build faster. Ship smarter. Scale effortlessly.",
  subheadline:
    "The development platform that turns weeks of work into hours. Automate your workflow, deploy with confidence, and focus on what matters — building great products.",
  primaryCta: { href: "#signup", label: "Start Free Trial" },
  secondaryCta: { href: "#demo", label: "Watch 2-min Demo" },
  trustIndicators: [
    "14-day free trial",
    "No credit card required",
    "Cancel anytime",
    "SOC 2 Type II certified",
  ],
  stats: [
    { value: "50k+", label: "Developers" },
    { value: "2M+", label: "Deployments" },
    { value: "99.99%", label: "Uptime" },
    { value: "< 50ms", label: "Global Latency" },
  ],
  // Phone mockup images (place in public/img/)
  phoneMockups: {
    left: "/img/hero-phone-left.png",
    right: "/img/hero-phone-right.png",
  },
};

export const marquee = {
  logos: [
    { src: "/img/logo-stripe.svg", alt: "Stripe", width: 120, height: 32 },
    { src: "/img/logo-vercel.svg", alt: "Vercel", width: 120, height: 32 },
    { src: "/img/logo-linear.svg", alt: "Linear", width: 120, height: 32 },
    { src: "/img/logo-notion.svg", alt: "Notion", width: 120, height: 32 },
    { src: "/img/logo-github.svg", alt: "GitHub", width: 120, height: 32 },
    { src: "/img/logo-figma.svg", alt: "Figma", width: 120, height: 32 },
    { src: "/img/logo-slack.svg", alt: "Slack", width: 120, height: 32 },
    { src: "/img/logo-discord.svg", alt: "Discord", width: 120, height: 32 },
  ],
};

export const features = {
  headline: "Everything you need to ship faster",
  subheadline:
    "Powerful features designed for modern development teams. From local development to global deployment.",
  tabs: [
    {
      id: "workflow",
      label: "Workflow",
      icon: "zap",
      features: [
        {
          title: "Instant Environments",
          description:
            "Spin up production-like environments in seconds. Every PR gets its own preview deployment with real data.",
          icon: "github-branch",
        },
        {
          title: "AI Code Reviews",
          description:
            "Automated code reviews powered by AI. Catch bugs, enforce standards, and improve quality before merge.",
          icon: "bot",
        },
        {
          title: "Smart Caching",
          description:
            "Intelligent caching that learns from your patterns. Build times drop 80% after the first run.",
          icon: "database",
        },
      ],
    },
    {
      id: "deploy",
      label: "Deploy",
      icon: "rocket",
      features: [
        {
          title: "Zero-Config Deployments",
          description:
            "Push to main and it's live. Automatic builds, edge deployment, and instant rollbacks built in.",
          icon: "globe",
        },
        {
          title: "Edge Functions",
          description:
            "Run code at the edge in 35+ regions. Sub-50ms latency for your users worldwide.",
          icon: "map-pin",
        },
        {
          title: "Feature Flags",
          description:
            "Launch safely with built-in feature flags. Target users, roll out gradually, kill switch instantly.",
          icon: "flag",
        },
      ],
    },
    {
      id: "observe",
      label: "Observe",
      icon: "activity",
      features: [
        {
          title: "Real-Time Analytics",
          description:
            "See exactly how users interact with your app. Funnels, cohorts, and custom events out of the box.",
          icon: "bar-chart",
        },
        {
          title: "Error Tracking",
          description:
            "Catch every error with full context. Stack traces, user sessions, and breadcrumbs included.",
          icon: "alert-triangle",
        },
        {
          title: "Performance Monitoring",
          description:
            "Core Web Vitals, API latency, and database queries. Know before your users do.",
          icon: "gauge",
        },
      ],
    },
  ],
};

export const stepPanels = {
  headline: "From idea to production in three steps",
  subheadline:
    "No complex setup. No configuration files. Just connect your repo and start shipping.",
  steps: [
    {
      number: "01",
      title: "Connect Repository",
      description:
        "Link your GitHub, GitLab, or Bitbucket account. Select your repo and we'll auto-detect your framework.",
      visual: "/img/step-1-connect.svg",
    },
    {
      number: "02",
      title: "Configure & Deploy",
      description:
        "Review auto-detected settings or customize. Hit deploy and watch your app go live in under 60 seconds.",
      visual: "/img/step-2-deploy.svg",
    },
    {
      number: "03",
      title: "Scale Automatically",
      description:
        "Traffic spikes? We scale instantly. Global edge network, automatic caching, and zero maintenance.",
      visual: "/img/step-3-scale.svg",
    },
  ],
};

export const pricing = {
  headline: "Simple, transparent pricing",
  subheadline:
    "Start free. Scale as you grow. No hidden fees. No surprises.",
  billingToggle: {
    monthly: "Monthly",
    yearly: "Yearly",
    savings: "Save 20%",
  },
  plans: [
    {
      name: "Starter",
      description: "Perfect for side projects and learning",
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        "Up to 3 projects",
        "100 GB bandwidth/month",
        "Custom domains",
        "SSL certificates",
        "Global CDN",
        "Basic analytics",
        "Community support",
      ],
      cta: { label: "Start Free", href: "#signup", variant: "secondary" },
      popular: false,
    },
    {
      name: "Pro",
      description: "For growing teams and production apps",
      monthlyPrice: 29,
      yearlyPrice: 24,
      features: [
        "Unlimited projects",
        "1 TB bandwidth/month",
        "Custom domains",
        "SSL certificates",
        "Global CDN",
        "Advanced analytics",
        "Edge functions included",
        "Feature flags",
        "Priority support",
        "Team collaboration (up to 5)",
      ],
      cta: { label: "Get Started", href: "#signup", variant: "primary" },
      popular: true,
      badge: "Most Popular",
    },
    {
      name: "Enterprise",
      description: "For organizations with advanced needs",
      monthlyPrice: 199,
      yearlyPrice: 169,
      features: [
        "Everything in Pro",
        "Unlimited bandwidth",
        "Dedicated infrastructure",
        "SLA guarantee (99.99%)",
        "Custom contracts",
        "SSO / SAML / SCIM",
        "Audit logs",
        "Dedicated support engineer",
        "Unlimited team members",
        "On-premise deployment option",
      ],
      cta: { label: "Contact Sales", href: "#contact", variant: "outline" },
      popular: false,
    },
  ],
  faq: [
    {
      question: "Can I switch plans later?",
      answer:
        "Yes, you can upgrade or downgrade at any time. Changes take effect immediately, and we'll prorate the difference.",
    },
    {
      question: "What happens after the free trial?",
      answer:
        "After 14 days, you'll be moved to the Starter plan. No charges unless you upgrade to Pro or Enterprise.",
    },
    {
      question: "Do you offer discounts for nonprofits or students?",
      answer:
        "Yes! We offer 50% off Pro for students and 75% off for qualified nonprofits. Contact support to learn more.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, ACH transfers, and wire transfers for Enterprise plans. Invoices available for annual Enterprise contracts.",
    },
  ],
};

export const testimonials = {
  headline: "Trusted by the world's best teams",
  subheadline:
    "See what developers and companies are saying about Velocity.",
  items: [
    {
      quote:
        "Velocity cut our deployment time from 45 minutes to 30 seconds. Our team ships 10x more often now.",
      author: "Sarah Chen",
      role: "VP Engineering",
      company: "Linear",
      avatar: "/img/avatar-sarah.jpg",
      companyLogo: "/img/logo-linear-small.svg",
    },
    {
      quote:
        "The AI code reviews catch things we'd miss in manual reviews. It's like having a senior engineer on every PR.",
      author: "Marcus Johnson",
      role: "CTO",
      company: "Vercel",
      avatar: "/img/avatar-marcus.jpg",
      companyLogo: "/img/logo-vercel-small.svg",
    },
    {
      quote:
        "Zero-config deployments actually work. We migrated our entire monorepo in an afternoon.",
      author: "Emily Rodriguez",
      role: "Staff Engineer",
      company: "Notion",
      avatar: "/img/avatar-emily.jpg",
      companyLogo: "/img/logo-notion-small.svg",
    },
    {
      quote:
        "Edge functions let us run auth at the edge. Our API latency dropped from 200ms to 40ms globally.",
      author: "David Kim",
      role: "Platform Lead",
      company: "GitHub",
      avatar: "/img/avatar-david.jpg",
      companyLogo: "/img/logo-github-small.svg",
    },
    {
      quote:
        "The analytics are incredible. We finally understand our user funnels without setting up a separate tool.",
      author: "Lisa Wang",
      role: "Product Manager",
      company: "Figma",
      avatar: "/img/avatar-lisa.jpg",
      companyLogo: "/img/logo-figma-small.svg",
    },
    {
      quote:
        "Best developer experience I've had in 15 years. The team clearly cares about the details.",
      author: "James Wilson",
      role: "Founder",
      company: "Discord",
      avatar: "/img/avatar-james.jpg",
      companyLogo: "/img/logo-discord-small.svg",
    },
  ],
};

export const team = {
  headline: "Built by developers, for developers",
  subheadline:
    "We're a team of engineers who've felt the pain of slow deployments, broken builds, and opaque pricing. We built Velocity to fix it.",
  members: [
    {
      name: "Alex Turner",
      role: "Co-founder & CEO",
      bio: "Ex-Vercel, Stripe. Built infrastructure for millions of developers.",
      avatar: "/img/team-alex.jpg",
      twitter: "@alexturner",
      github: "alexturner",
    },
    {
      name: "Maria Santos",
      role: "Co-founder & CTO",
      bio: "Ex-Google, Meta. Distributed systems and developer tools expert.",
      avatar: "/img/team-maria.jpg",
      twitter: "@mariasantos",
      github: "mariasantos",
    },
    {
      name: "James Chen",
      role: "Head of Product",
      bio: "Ex-Linear, Figma. Obsessed with developer experience.",
      avatar: "/img/team-james.jpg",
      twitter: "@jameschen",
      github: "jameschen",
    },
    {
      name: "Priya Patel",
      role: "Head of Engineering",
      bio: "Ex-GitHub, Shopify. Scaling platforms to billions of requests.",
      avatar: "/img/team-priya.jpg",
      twitter: "@priyapatel",
      github: "priyapatel",
    },
  ],
};

export const blog = {
  headline: "Latest from our blog",
  subheadline:
    "Deep dives, tutorials, and insights from the Velocity team.",
  posts: [
    {
      title: "How We Built Zero-Config Deployments",
      excerpt:
        "A deep dive into the architecture behind our automatic framework detection and build optimization.",
      author: "Maria Santos",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Engineering",
      slug: "zero-config-deployments",
      image: "/img/blog-zero-config.jpg",
    },
    {
      title: "AI Code Reviews: Beyond Linting",
      excerpt:
        "How we trained our models to understand context, not just syntax. Real examples from production.",
      author: "Alex Turner",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "AI",
      slug: "ai-code-reviews",
      image: "/img/blog-ai-reviews.jpg",
    },
    {
      title: "Edge Functions at Scale: Lessons Learned",
      excerpt:
        "Running 50M+ edge functions per day taught us a lot about cold starts, memory, and observability.",
      author: "Priya Patel",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Engineering",
      slug: "edge-functions-scale",
      image: "/img/blog-edge-functions.jpg",
    },
  ],
};

export const faq = {
  headline: "Frequently asked questions",
  subheadline:
    "Everything you need to know about Velocity. Can't find your answer? Contact our team.",
  items: [
    {
      question: "What frameworks does Velocity support?",
      answer:
        "We support Next.js, React, Vue, Svelte, Astro, Remix, Nuxt, and static sites. Our auto-detection works for 95% of projects. For custom setups, you can provide a build command.",
    },
    {
      question: "How does the AI code review work?",
      answer:
        "Our models analyze your PR diffs in context of your entire codebase. They check for bugs, security issues, performance problems, and style violations. Results appear as inline comments on GitHub/GitLab.",
    },
    {
      question: "Can I use my own domain?",
      answer:
        "Yes! Every plan includes custom domains. We provision SSL certificates automatically via Let's Encrypt. Bring your own certificate if needed.",
    },
    {
      question: "What's included in bandwidth?",
      answer:
        "All HTTP responses, API calls, and asset delivery. We don't count build traffic, health checks, or internal traffic. Overage is $0.10/GB on Pro, included on Enterprise.",
    },
    {
      question: "How do rollbacks work?",
      answer:
        "Instant. Every deployment creates an immutable snapshot. Rollback to any previous deployment in one click. Zero downtime, zero data loss.",
    },
    {
      question: "Is there a limit on team members?",
      answer:
        "Starter: 1 user. Pro: up to 5 users. Enterprise: unlimited. All plans support role-based access control (Admin, Developer, Viewer).",
    },
    {
      question: "Where is my data stored?",
      answer:
        "Choose your region: US East, US West, EU West, or Asia Pacific. Enterprise customers can request dedicated regions. All data encrypted at rest and in transit.",
    },
    {
      question: "What's your uptime guarantee?",
      answer:
        "99.99% SLA for Enterprise. 99.9% for Pro. We publish real-time status at status.velocity.dev. Credits issued automatically for SLA breaches.",
    },
  ],
};

export const footer = {
  logo: "Velocity",
  tagline: "Build faster. Ship smarter. Scale effortlessly.",
  social: [
    { href: "https://twitter.com/velocity", label: "Twitter", icon: "twitter" },
    { href: "https://github.com/velocity", label: "GitHub", icon: "github" },
    { href: "https://discord.gg/velocity", label: "Discord", icon: "discord" },
    { href: "https://linkedin.com/company/velocity", label: "LinkedIn", icon: "linkedin" },
  ],
  navigation: {
    product: [
      { href: "#features", label: "Features" },
      { href: "#pricing", label: "Pricing" },
      { href: "#changelog", label: "Changelog" },
      { href: "#docs", label: "Documentation" },
      { href: "#api", label: "API Reference" },
      { href: "#status", label: "System Status" },
    ],
    company: [
      { href: "#about", label: "About" },
      { href: "#blog", label: "Blog" },
      { href: "#careers", label: "Careers" },
      { href: "#press", label: "Press" },
      { href: "#contact", label: "Contact" },
      { href: "#partners", label: "Partners" },
    ],
    legal: [
      { href: "#privacy", label: "Privacy Policy" },
      { href: "#terms", label: "Terms of Service" },
      { href: "#security", label: "Security" },
      { href: "#cookies", label: "Cookie Policy" },
      { href: "#dpa", label: "Data Processing Addendum" },
    ],
    resources: [
      { href: "#community", label: "Community" },
      { href: "#templates", label: "Templates" },
      { href: "#integrations", label: "Integrations" },
      { href: "#marketplace", label: "Marketplace" },
      { href: "#learning", label: "Learning Center" },
      { href: "#support", label: "Support" },
    ],
  },
  newsletter: {
    headline: "Stay in the loop",
    subheadline:
      "Product updates, engineering posts, and developer tips. No spam. Unsubscribe anytime.",
    placeholder: "Enter your email",
    button: "Subscribe",
    privacy: "By subscribing, you agree to our Privacy Policy.",
  },
  copyright: "© 2024 Velocity, Inc. All rights reserved.",
  madeWith: "Built with Velocity",
};

export const seo = {
  defaultTitle: "Velocity — Build Faster. Ship Smarter. Scale Effortlessly.",
  titleTemplate: "%s | Velocity",
  defaultDescription:
    "The development platform that turns weeks of work into hours. Automate your workflow, deploy with confidence, and focus on building great products.",
  siteUrl: "https://velocity.dev",
  twitterHandle: "@velocity",
  ogImage: "/img/og-default.jpg",
  robots: "index, follow",
};