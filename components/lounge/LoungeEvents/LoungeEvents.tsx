"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { events } from "@/content/lounge-copy";
import { Calendar, Clock, Users, MapPin, ChevronRight, Ticket, Music, Flame, UtensilsCrossed } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const typeIcons = {
  tasting: Flame,
  music: Music,
  dining: UtensilsCrossed,
};

const typeLabels = {
  tasting: "Tasting",
  music: "Music",
  dining: "Dining",
};

function EventCard({ event, index }: { event: typeof events.upcoming[0]; index: number }) {
  const Icon = typeIcons[event.type as keyof typeof typeIcons];

  useEffect(() => {
    gsap.fromTo(
      `.event-card-${index}`,
      { x: index % 2 === 0 ? -60 : 60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: `.event-card-${index}`,
          start: "top 85%",
        },
      }
    );
  }, [index]);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return {
      day: date.getDate(),
      month: date.toLocaleString('default', { month: 'short' }).toUpperCase(),
      weekday: date.toLocaleString('default', { weekday: 'short' }).toUpperCase(),
    };
  };

  const date = formatDate(event.date);

  return (
    <article
      className={`event-card-${index} relative flex flex-col md:flex-row gap-6 md:gap-8 rounded-2xl bg-background-card border border-border p-6 md:p-8 transition-all duration-500 hover:border-gold/30 hover:shadow-gold`}
      style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}
    >
      <div className="relative flex-shrink-0 w-24 md:w-28 h-24 md:h-28 flex flex-col items-center justify-center rounded-xl bg-gold/5 border border-gold/10 text-center">
        <span className="font-display text-3xl md:text-4xl font-medium tracking-tight text-gold">{date.day}</span>
        <span className="text-xs tracking-widest uppercase text-gold/70">{date.month}</span>
        <span className="text-[10px] tracking-widest uppercase text-gold/50">{date.weekday}</span>
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={cn(
              "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase",
              event.type === 'tasting' ? "bg-amber/10 text-amber border border-amber/20" :
              event.type === 'music' ? "bg-gold/10 text-gold border border-gold/20" :
              "bg-emerald/10 text-emerald border border-emerald/20"
            )}>
              <Icon className="h-3 w-3" aria-hidden="true" />
              {typeLabels[event.type as keyof typeof typeLabels]}
            </span>
            <span className="text-xs text-foreground-muted flex items-center gap-1">
              <Users className="h-3 w-3" aria-hidden="true" />
              {event.capacity} guests
            </span>
          </div>

          <h3 className="font-display text-xl md:text-2xl font-medium tracking-tight text-foreground mb-3">
            {event.title}
          </h3>

          <p className="text-foreground-muted leading-relaxed mb-6">
            {event.description}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border">
          <div className="flex items-center gap-2 text-sm text-foreground-muted">
            <Clock className="h-4 w-4" aria-hidden="true" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground-muted">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            <span>Main Lounge</span>
          </div>
          <span className="font-mono text-gold font-medium">{event.price === "Complimentary for members" ? "Member Complimentary" : `$${event.price}`}</span>
        </div>
      </div>

      <div className="md:w-48 flex-shrink-0">
        <button className="w-full rounded-lg border border-gold/30 px-6 py-3 text-sm font-medium text-gold transition-all hover:bg-gold/10 hover:border-gold flex items-center justify-center gap-2">
          Request Invite
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

export function LoungeEvents() {
  useGSAP((ctx: gsap.Context) => {
    gsap.context(() => {
      gsap.fromTo(
        ".events-header .reveal-up",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".events-header",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".timeline-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".events-timeline",
            start: "top 80%",
          },
        }
      );
    }, ctx);
  }, []);

  return (
    <section
      id="events"
      className="relative py-24 md:py-32 lg:py-40 px-4 md:px-6 lg:px-8"
      aria-labelledby="events-headline"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-gold/5 blur-[200px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px]">
        <div className="events-header text-center mb-16 md:mb-20">
          <span className="reveal-up inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-gold mb-6">
            <Ticket className="h-4 w-4" aria-hidden="true" />
            {events.subheadline}
          </span>
          <h2 id="events-headline" className="reveal-up font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-foreground">
            {events.headline}
          </h2>
        </div>

        <div className="events-timeline relative">
          <div className="absolute left-12 md:left-[140px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gold/30 to-transparent timeline-line" aria-hidden="true" />

          <div className="space-y-12 md:space-y-16 pl-10 md:pl-[160px]">
            {events.upcoming.map((event, i) => (
              <div key={event.title} className="relative">
                <div className="absolute left-[-10px] md:left-[-170px] top-6 md:top-8 w-5 h-5 md:w-6 md:h-6 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center z-10 transition-all duration-300 group-hover:bg-gold group-hover:border-gold">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gold" />
                </div>
                <EventCard event={event} index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}