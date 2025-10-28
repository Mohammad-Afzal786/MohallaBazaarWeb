"use client";

import React from "react";
import Head from "next/head";

interface SEOHeadProps {
  title: string;
  description: string;
  image?: string;
  url?: string; // added for page-specific canonical URLs
}

export default function SEOHead({ title, description, image, url }: SEOHeadProps) {
  // canonicalUrl will use custom `url` if provided, else default to main domain
  const canonicalUrl = url || "https://mohallabazaar.shop";

  return (
    <Head>
      {/* Basic Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots */}
      <meta name="robots" content="index, follow" />

      {/* Open Graph (Facebook, WhatsApp, etc.) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Mohalla Bazaar" />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter Card */}
      <meta
        name="twitter:card"
        content={image ? "summary_large_image" : "summary"}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: title,
            url: canonicalUrl,
            description,
            publisher: {
              "@type": "Organization",
              name: "Mohalla Bazaar",
              logo: {
                "@type": "ImageObject",
                url: "https://mohallabazaar.shop/og-image.jpg",
              },
            },
          }),
        }}
      />
    </Head>
  );
}
