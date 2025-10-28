"use client";

import React from "react";
import Head from "next/head";

interface SEOHeadProps {
  title: string;
  description: string;
  image?: string;
}

export default function SEOHead({ title, description, image }: SEOHeadProps) {
  const canonicalUrl = "https://mohallabazaar.shop"; // 🔥 fixed canonical domain

  return (
    <Head>
      {/* Basic Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots */}
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:site_name" content="Mohalla Bazaar" />

      {/* Twitter Card */}
      <meta name="twitter:card" content={image ? "summary_large_image" : "summary"} />
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
