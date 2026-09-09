"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Media } from "@/components/Media";
import { cn } from "@/lib/utils";
import { blog } from "@/content/copy";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Blog() {
  useGSAP((ctx: gsap.Context) => {
    gsap.context(() => {
      gsap.fromTo(
        ".blog-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".blog-grid",
            start: "top 80%",
          },
        }
      );
    }, ctx);
  }, []);

  return (
    <section
      id="blog"
      className="py-20 md:py-32 lg:py-40 bg-muted/30"
      aria-labelledby="blog-headline"
    >
      <div className="mx-auto max-w-[1400px] px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div className="max-w-3xl">
            <h2 id="blog-headline" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4 animate-in slide-up">
              {blog.headline}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground animate-in slide-up delay-100">
              {blog.subheadline}
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden md:inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-base font-semibold text-foreground transition-all hover:border-primary/50 hover:text-primary hover:bg-primary/5"
          >
            View all posts
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>

        <div className="blog-grid grid md:grid-cols-3 gap-6 md:gap-8">
          {blog.posts.map((post, i) => (
            <article
              key={i}
              className="blog-card group rounded-2xl border border-border/50 bg-background overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
            >
              <Link href={`/blog/${post.slug}`} className="block" aria-label={`Read: ${post.title}`}>
                <div className="relative aspect-video overflow-hidden">
                  <Media
                    slug={post.image.replace("/img/", "")}
                    alt={`${post.title} cover`}
                    width={1}
                    height={1}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-sm font-medium text-muted-foreground">
                        {post.author.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <span className="text-sm font-medium text-foreground">{post.author}</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                      Read more
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="md:hidden mt-8 text-center animate-in slide-up delay-300">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-base font-semibold text-foreground transition-all hover:border-primary/50 hover:text-primary hover:bg-primary/5"
          >
            View all posts
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}