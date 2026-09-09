"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, Suspense, useState } from "react";
import { cn } from "@/lib/utils";
import { hero } from "@/content/lounge-copy";
import { ArrowDown, Sparkles } from "lucide-react";
import dynamic from "next/dynamic";

const Canvas = dynamic(() => import("@react-three/fiber").then(m => m.Canvas), { ssr: false });
const LoungeAmbientScene = dynamic(() => import("./LoungeAmbientScene").then(m => m.LoungeAmbientScene), { ssr: false });

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function HeroContent() {
  useGSAP((ctx: gsap.Context) => {
    gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      tl.to(".hero-title", {
        y: -100,
        opacity: 0,
        scale: 0.9,
        ease: "none",
      })
        .to(
          ".hero-subheadline",
          {
            y: -60,
            opacity: 0,
            ease: "none",
          },
          "<"
        )
        .to(
          ".hero-tagline",
          {
            y: -40,
            opacity: 0,
            ease: "none",
          },
          "<0.2"
        )
        .to(
          ".hero-cta",
          {
            y: -30,
            opacity: 0,
            ease: "none",
          },
          "<0.3"
        );
    }, ctx);
  }, []);

  useGSAP((ctx: gsap.Context) => {
    gsap.context(() => {
      gsap.fromTo(
        ".hero-badge",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.2,
        }
      );

      gsap.fromTo(
        ".hero-title .word",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.4,
        }
      );

      gsap.fromTo(
        ".hero-subheadline",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.8,
        }
      );

      gsap.fromTo(
        ".hero-tagline",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: 1.1,
        }
      );

      gsap.fromTo(
        ".hero-cta",
        { y: 30, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: 1.4,
        }
      );

      gsap.fromTo(
        ".scroll-indicator",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 2,
        }
      );
    }, ctx);
  }, []);

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:px-6 lg:px-8 pt-16">
      <div className="hero-badge inline-flex items-center gap-2 rounded-full bg-background/80 backdrop-blur border border-gold/20 px-5 py-2 text-xs font-medium tracking-widest uppercase text-gold animate-in slide-up">
        <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
        {hero.badge}
      </div>

      <h1
        id="hero-title"
        className="hero-title text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-display font-medium leading-tight tracking-tight text-foreground text-center mb-6"
      >
        {hero.headline.split(" ").map((word, i) => (
          <span key={i} className="word block">
            {word}
          </span>
        ))}
      </h1>

      <p className="hero-subheadline text-lg md:text-xl lg:text-2xl text-foreground-muted max-w-2xl text-center mb-8 leading-relaxed">
        {hero.subheadline}
      </p>

      <p className="hero-tagline text-base md:text-lg text-gold font-medium tracking-widest uppercase mb-12 text-center">
        {hero.tagline}
      </p>

      <div className="hero-cta flex flex-col sm:flex-row items-center gap-4 mb-16">
        <a
          href="#reservation"
          className="relative rounded-lg bg-gradient-to-r from-gold to-amber px-8 py-4 text-base font-semibold text-background transition-all hover:shadow-gold hover:scale-[1.02] flex items-center justify-center gap-2"
        >
          Reserve a Table
        </a>
        <a
          href="#atmosphere"
          className="rounded-lg border border-gold/30 px-8 py-4 text-base font-medium text-gold transition-all hover:bg-gold/10 hover:border-gold"
        >
          Experience the Atmosphere
        </a>
      </div>

      <div className="scroll-indicator flex flex-col items-center gap-3 text-foreground-subtle animate-in slide-up delay-2000">
        <span className="text-xs tracking-widest uppercase">Descend</span>
        <div className="relative h-10 w-1">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-2 w-1 bg-gold/50 rounded-full animate-pulse-slow" />
        </div>
        <ArrowDown className="h-5 w-5 animate-float" aria-hidden="true" />
      </div>
    </div>
  );
}

function CanvasFallback() {
  return (
    <div className="absolute inset-0 bg-gradient-hero" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-glow" />
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.03) 0%, transparent 70%)' }} />
    </div>
  );
}

export function LoungeHero() {
  const [canvasReady, setCanvasReady] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {!canvasReady ? (
          <CanvasFallback />
        ) : (
          <Canvas
            className="w-full h-full"
            camera={{ position: [0, 0, 5], fov: 50 }}
            gl={{ antialias: true, alpha: true, preserveDrawingBuffer: false }}
            shadows={false}
            dpr={[1, 1.5]}
            onCreated={() => setCanvasReady(true)}
          >
            <LoungeAmbientScene />
          </Canvas>
        )}
      </div>

      <HeroContent />
    </section>
  );
}