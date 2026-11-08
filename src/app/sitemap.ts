import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://anarkan.dev/",
      lastModified: new Date("2026-09-26"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://anarkan.dev/razrabotka-saitov-bishkek",
      lastModified: new Date("2026-11-09"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
