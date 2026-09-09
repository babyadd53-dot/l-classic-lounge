import { headers } from "next/headers";

export async function GET() {
  const headersList = await headers();
  const host = headersList.get("host") || "velocity.dev";
  const protocol = host.includes("localhost") ? "http" : "https";
  const baseUrl = `${protocol}://${host}`;

  const staticRoutes = [
    "",
    "#features",
    "#pricing",
    "#testimonials",
    "#team",
    "#blog",
    "#faq",
    "#signup",
    "#demo",
    "#contact",
  ];

  const blogPosts = [
    "zero-config-deployments",
    "ai-code-reviews",
    "edge-functions-scale",
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${staticRoutes
    .map((route) => {
      const url = route.startsWith("#") ? `${baseUrl}/${route}` : `${baseUrl}${route}`;
      return `
  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === "" ? "1.0" : "0.8"}</priority>
  </url>`;
    })
    .join("")}
  ${blogPosts
    .map((slug) => `
  <url>
    <loc>${baseUrl}/blog/${slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`)
    .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}