"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { gallery } from "@/content/lounge-copy";
import { Expand, Loader2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function GalleryImage({ image, index }: { image: typeof gallery.images[0]; index: number }) {
  const imgRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (imgRef.current) {
      gsap.fromTo(
        imgRef.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top 90%",
          },
        }
      );
    }
  }, [loaded]);

  const aspectRatio = image.width / image.height;
  const isTall = aspectRatio < 1;

  return (
    <div
      ref={imgRef}
      className={cn(
        "relative overflow-hidden rounded-xl bg-background-card border border-border",
        isTall ? "md:h-[500px] lg:h-[600px]" : "md:h-[350px] lg:h-[400px]"
      )}
      style={{ aspectRatio: `${aspectRatio}` }}
    >
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-background border-border">
          <Loader2 className="h-8 w-8 text-gold/50 animate-spin" aria-hidden="true" />
        </div>
      )}
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out",
          loaded ? "opacity-100 scale-100" : "opacity-0 scale-110"
        )}
        onLoad={() => setLoaded(true)}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
        <button className="rounded-full bg-background/90 backdrop-blur p-3 text-gold transition-all hover:bg-gold/20 hover:scale-110" aria-label="View fullscreen">
          <Expand className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

import { useState } from "react";

export function LoungeGallery() {
  useGSAP((ctx: gsap.Context) => {
    gsap.context(() => {
      gsap.fromTo(
        ".gallery-header .reveal-up",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gallery-header",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".gallery-item",
        { y: 80, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gallery-grid",
            start: "top 85%",
          },
        }
      );
    }, ctx);
  }, []);

  return (
    <section
      id="gallery"
      className="relative py-24 md:py-32 lg:py-40 px-4 md:px-6 lg:px-8"
      aria-labelledby="gallery-headline"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-amber/5 blur-[200px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px]">
        <div className="gallery-header text-center mb-16 md:mb-20">
          <span className="reveal-up inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-gold mb-6">
            <Expand className="h-4 w-4" aria-hidden="true" />
            {gallery.subheadline}
          </span>
          <h2 id="gallery-headline" className="reveal-up font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-foreground">
            {gallery.headline}
          </h2>
        </div>

        <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {gallery.images.map((image, i) => (
            <div
              key={image.src}
              className="gallery-item group relative"
              style={{
                gridColumn: i === 2 || i === 5 ? "span 1" : "span 1",
                gridRow: isTall(image) ? "span 2" : "span 1",
              }}
            >
              <GalleryImage image={image} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function isTall(image: typeof gallery.images[0]) {
  return image.width / image.height < 1;
}