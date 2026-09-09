"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Media } from "@/components/Media";
import { cn } from "@/lib/utils";
import { team } from "@/content/copy";
import { Twitter, Github } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Team() {
  useGSAP((ctx: gsap.Context) => {
    gsap.context(() => {
      gsap.fromTo(
        ".team-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".team-grid",
            start: "top 80%",
          },
        }
      );
    }, ctx);
  }, []);

  return (
    <section
      id="team"
      className="py-20 md:py-32 lg:py-40"
      aria-labelledby="team-headline"
    >
      <div className="mx-auto max-w-[1400px] px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="team-headline" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 animate-in slide-up">
            {team.headline}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground animate-in slide-up delay-100">
            {team.subheadline}
          </p>
        </div>

        <div className="team-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {team.members.map((member, i) => (
            <article
              key={i}
              className="team-card text-center group"
            >
              <div className="relative h-40 w-40 mx-auto mb-6 rounded-full overflow-hidden border border-border/50">
                <Media
                  slug={member.avatar.replace("/img/", "")}
                  alt={`${member.name} photo`}
                  width={160}
                  height={160}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-primary font-medium mb-4">{member.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {member.bio}
              </p>
              <div className="flex items-center justify-center gap-4">
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label={`${member.name} on Twitter`}
                >
                  <Twitter className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label={`${member.name} on GitHub`}
                >
                  <Github className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}