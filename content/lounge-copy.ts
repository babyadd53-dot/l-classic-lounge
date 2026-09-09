/* ==========================================================================
   L-CLASSIC LOUNGE — COPY CONTENT
   Single source of truth for all lounge text content.
   ========================================================================== */

export const nav = {
  logo: "L-CLASSIC",
  links: [
    { href: "#atmosphere", label: "Atmosphere" },
    { href: "#offerings", label: "Offerings" },
    { href: "#gallery", label: "Gallery" },
    { href: "#events", label: "Events" },
    { href: "#reservation", label: "Reserve" },
  ],
  cta: { href: "#reservation", label: "Reserve a Table" },
};

export const hero = {
  badge: "Est. 2024 · Members Only",
  headline: "L-CLASSIC",
  subheadline: "Where time slows. Where craft speaks. Where strangers become regulars.",
  tagline: "An invitation to the quiet exceptional.",
  scrollHint: "Descend",
};

export const atmosphere = {
  headline: "Atmosphere",
  subheadline: "Not designed. Curated.",
  pillars: [
    {
      title: "The Light",
      description: "Amber pools at 2700K. No overhead glare. Every shadow intentional. The room breathes with you.",
      icon: "sun",
    },
    {
      title: "The Sound",
      description: "Analog vinyl. Curated jazz, soul, late-night classical. Volume set for conversation, never competition.",
      icon: "music",
    },
    {
      title: "The Texture",
      description: "Walnut. Brass. Leather that remembers every hand. Stone cool against the palm. Materials that age into character.",
      icon: "hand",
    },
    {
      title: "The Service",
      description: "Anticipatory, never intrusive. Your second drink arrives before you ask. Your seat remembers your name.",
      icon: "sparkles",
    },
  ],
  philosophy: {
    title: "A Philosophy of Restraint",
    paragraphs: [
      "We don't chase trends. We cultivate permanence. Every bottle on the back bar earned its place through provenance, not marketing. Every cigar in the humidor rested years before meeting your cutter.",
      "This is not a venue. It's a vessel. For conversations that matter. For decisions that change trajectories. For the rare evening where nothing happens — and everything does.",
      "Membership is by invitation or application. Not exclusivity for its own sake. Simply: we protect the atmosphere so you don't have to.",
    ],
  },
};

export const offerings = {
  headline: "Offerings",
  subheadline: "Curated with patience. Served with precision.",
  categories: [
    {
      id: "spirits",
      label: "Rare Spirits",
      description: "Single malts from closed distilleries. Pre-1980s Armagnac. Japanese whiskies allocated by lottery. 200+ selections, each with a story.",
      items: [
        { name: "Macallan 1926 Fine & Rare", description: "The holy grail. Sherry cask. 60 years.", price: "Market" },
        { name: "Yamazaki 55 Year", description: "Mizunara oak. 100 bottles released.", price: "Market" },
        { name: "Hennessy Paradis Imperial", description: "100+ eaux-de-vie. 130 years blending.", price: "450/oz" },
        { name: "Ron Zacapa XO", description: "Solera 23. Guatemalan altitude aging.", price: "85/oz" },
        { name: "Clase Azul Ultra", description: "Tequila. Hand-painted decanter. 500 bottles.", price: "380/oz" },
        { name: "Pappy Van Winkle 23", description: "Bourbon legend. Wheated mash. Impossible.", price: "Market" },
      ],
    },
    {
      id: "cigars",
      label: "Cigar Lounge",
      description: "Walk-in humidor at 69% RH / 70°F. Cuban clásicos. New World limited editions. Aged vintages dating to 1990s.",
      items: [
        { name: "Cohiba Behike 56", description: "Cuba. Medio tiempo leaf. The standard.", price: "180" },
        { name: "Davidoff Oro Blanco", description: "Dominican. 12-year wrapper. 500 boxes/year.", price: "220" },
        { name: "Arturo Fuente Opus X", description: "Dominican. Rosado wrapper. Mythic status.", price: "95" },
        { name: "Padron 1964 Anniversary", description: "Nicaraguan. Box-pressed perfection.", price: "65" },
        { name: "Montecristo No. 2", description: "Cuba. Torpedo. The benchmark.", price: "55" },
        { name: "Liga Privada Unico", description: "CT Broadleaf. Drew Estate masterpiece.", price: "75" },
      ],
    },
    {
      id: "dining",
      label: "Late-Night Dining",
      description: "Small plates. Big flavors. Available until 2 AM. Chef's tasting by reservation only.",
      items: [
        { name: "Wagyu Tartare", description: "A5 Miyazaki. Quail egg. Black truffle. Brioche.", price: "48" },
        { name: "Oyster Selection", description: "Daily rotation. Mignonette. Champagne granita.", price: "MP" },
        { name: "Foie Gras Torchon", description: "Hudson Valley. Fig compote. Pain d'épices.", price: "52" },
        { name: "Caviar Service", description: "Osetra. Traditional accompaniments. 30g.", price: "180" },
        { name: "Truffle Risotto", description: "Carnaroli. Winter black truffle. 36-month Parmigiano.", price: "68" },
        { name: "Chocolate Soufflé", description: "Valrhona 70%. Grand Marnier cream. Made to order.", price: "28" },
      ],
    },
  ],
};

export const gallery = {
  headline: "Gallery",
  subheadline: "Moments suspended in amber light.",
  images: [
    { src: "/img/gallery-1.svg", alt: "Main lounge seating area", width: 1200, height: 800 },
    { src: "/img/gallery-2.svg", alt: "Back bar with rare spirits", width: 800, height: 1200 },
    { src: "/img/gallery-3.svg", alt: "Cigar humidor interior", width: 1200, height: 800 },
    { src: "/img/gallery-4.svg", alt: "Private dining alcove", width: 1200, height: 800 },
    { src: "/img/gallery-5.svg", alt: "Vinyl collection and audio", width: 800, height: 1200 },
    { src: "/img/gallery-6.svg", alt: "Brass and leather detail", width: 1200, height: 800 },
    { src: "/img/gallery-7.svg", alt: "Entrance and reception", width: 1200, height: 800 },
    { src: "/img/gallery-8.svg", alt: "Champagne and caviar service", width: 800, height: 1200 },
  ],
};

export const events = {
  headline: "Events",
  subheadline: "Curated gatherings. Intimate by design.",
  upcoming: [
    {
      date: "2025-01-18",
      time: "19:00",
      title: "Vertical Tasting: Macallan 18–30 Year",
      description: "Six expressions spanning three decades. Guided by brand ambassador. 12 seats.",
      type: "tasting",
      capacity: "12",
      price: "850",
    },
    {
      date: "2025-02-01",
      time: "20:00",
      title: "Vinyl Session: Blue Note Classics",
      description: "Original pressings. Mobile Fidelity. Analog only. Hosted by resident selector.",
      type: "music",
      capacity: "30",
      price: "Complimentary for members",
    },
    {
      date: "2025-02-14",
      time: "18:30",
      title: "Valentine's Chef's Table",
      description: "Seven courses. Champagne pairing. Private alcove. Couples only. 6 tables.",
      type: "dining",
      capacity: "12",
      price: "650/couple",
    },
    {
      date: "2025-03-08",
      time: "19:00",
      title: "Cuban Heritage: Pre-Embargo Vintages",
      description: "Montecristo A (1970s). Partagás Lusitania (1980s). H. Upmann Magnum 50 (1990s).",
      type: "tasting",
      capacity: "10",
      price: "1200",
    },
    {
      date: "2025-03-22",
      time: "20:00",
      title: "Jazz Trio: Late Set",
      description: "Piano, upright bass, brushes. Standards and originals. No cover. Members + 1.",
      type: "music",
      capacity: "40",
      price: "Complimentary for members",
    },
  ],
};

export const reservation = {
  headline: "Reserve",
  subheadline: "Your seat awaits. Your preferences remembered.",
  form: {
    name: { label: "Full Name", placeholder: "James Montgomery" },
    email: { label: "Email", placeholder: "james@domain.com" },
    phone: { label: "Phone", placeholder: "+1 (555) 019-2834" },
    date: { label: "Date", placeholder: "Select date" },
    time: { label: "Time", placeholder: "Select time" },
    partySize: { label: "Party Size", placeholder: "Number of guests" },
    occasion: { label: "Occasion", placeholder: "Anniversary, business, solitude..." },
    preferences: { label: "Preferences", placeholder: "Window seat, specific spirit, dietary..." },
    membership: { label: "Membership Status", options: ["Member", "Guest of Member", "Application Pending", "First Visit"] },
  },
  cta: "Request Reservation",
  note: "Reservations confirmed within 2 hours. Walk-ins welcome at the bar, space permitting.",
  hours: {
    label: "Hours",
    days: [
      { day: "Monday–Wednesday", time: "17:00 - 02:00" },
      { day: "Thursday–Saturday", time: "17:00 - 03:00" },
      { day: "Sunday", time: "Closed" },
    ],
  },
  location: {
    label: "Location",
    address: "1200 Amber Lane, Suite 400",
    city: "Metropolitan District",
    note: "Unmarked entrance. Black door. Brass knocker.",
  },
};

export const footer = {
  logo: "L-CLASSIC",
  tagline: "Where time slows. Where craft speaks.",
  social: [
    { href: "https://instagram.com/lclassic", label: "Instagram", icon: "instagram" },
    { href: "mailto:concierge@lclassic.lounge", label: "Email", icon: "mail" },
    { href: "tel:+15550192834", label: "Phone", icon: "phone" },
  ],
  navigation: {
    experience: [
      { href: "#atmosphere", label: "Atmosphere" },
      { href: "#offerings", label: "Offerings" },
      { href: "#gallery", label: "Gallery" },
      { href: "#events", label: "Events" },
    ],
    membership: [
      { href: "#membership", label: "Become a Member" },
      { href: "#guest-policy", label: "Guest Policy" },
      { href: "#dress-code", label: "Dress Code" },
      { href: "#house-rules", label: "House Rules" },
    ],
    contact: [
      { href: "#reservation", label: "Reservations" },
      { href: "#private-events", label: "Private Events" },
      { href: "#press", label: "Press" },
      { href: "#careers", label: "Careers" },
    ],
    legal: [
      { href: "#privacy", label: "Privacy" },
      { href: "#terms", label: "Terms" },
      { href: "#accessibility", label: "Accessibility" },
    ],
  },
  copyright: "© 2025 L-CLASSIC. All rights reserved.",
  madeWith: "Crafted with restraint.",
};