export default function sitemap() {
  const baseUrl = "https://vk-unisex-salon.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-10-16"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}#about`,
      lastModified: new Date("2026-10-16"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}#services`,
      lastModified: new Date("2026-10-16"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}#gallery`,
      lastModified: new Date("2026-10-16"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}#reviews`,
      lastModified: new Date("2026-10-16"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}#contact`,
      lastModified: new Date("2026-10-16"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
