import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import "../styles/globals.css";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  fallback: ["Georgia", "serif"],
  weight: ["400", "500", "600", "700", "800", "900"],
  preload: true,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "sans-serif"],
  weight: ["400", "500", "600", "700"],
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  fallback: ["monospace"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://l-classic.lounge"),
  title: {
    default: "L-CLASSIC — Where Time Slows. Where Craft Speaks.",
    template: "%s | L-CLASSIC",
  },
  description:
    "An invitation to the quiet exceptional. Rare spirits, aged cigars, late-night dining. Members only. Unmarked entrance.",
  keywords: [
    "private lounge",
    "members club",
    "rare spirits",
    "cigar lounge",
    "fine dining",
    "whiskey bar",
    "luxury nightlife",
    "exclusive venue",
  ],
  authors: [{ name: "L-CLASSIC" }],
  creator: "L-CLASSIC",
  publisher: "L-CLASSIC",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://l-classic.lounge",
    siteName: "L-CLASSIC",
    title: "L-CLASSIC — Where Time Slows. Where Craft Speaks.",
    description:
      "An invitation to the quiet exceptional. Rare spirits, aged cigars, late-night dining. Members only.",
    images: [
      {
        url: "/img/og-lounge.svg",
        width: 1200,
        height: 630,
        alt: "L-CLASSIC Lounge - Amber light, walnut, brass",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lclassic",
    creator: "@lclassic",
    title: "L-CLASSIC — Where Time Slows. Where Craft Speaks.",
    description:
      "An invitation to the quiet exceptional.",
    images: ["/img/og-lounge.svg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased`}>
      <body className="min-h-screen bg-background font-sans text-foreground">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}