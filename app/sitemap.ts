import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mohallabazaar.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: "https://mohallabazaar.vercel.app/download",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
   
  ];
}
