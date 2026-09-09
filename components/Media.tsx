"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface MediaProps {
  slug: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
}

export function Media({
  slug,
  alt,
  width,
  height,
  className,
  priority = false,
  fill = false,
  sizes,
}: MediaProps) {
  const src = `/img/${slug}`;

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes || "100vw"}
        priority={priority}
        className={cn("object-cover", className)}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={cn("object-cover", className)}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
    />
  );
}

export function MediaSlug({
  slug,
  alt,
  className,
  priority = false,
}: {
  slug: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return <Media slug={slug} alt={alt} width={1} height={1} fill className={className} priority={priority} sizes="100%" />;
}