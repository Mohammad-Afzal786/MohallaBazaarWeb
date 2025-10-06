import { NextResponse } from "next/server";

export async function GET() {
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://mohallabazaar.vercel.app/sitemap-pages.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://mohallabazaar.vercel.app/sitemap-download.xml</loc>
  </sitemap>
  <!-- Agar aur sitemaps hain to yahan add karo -->
</sitemapindex>`;

  return new Response(sitemapIndex, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
