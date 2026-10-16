export default function manifest() {
  return {
    name: "V.K Unisex Salon — Tibba Road, Ludhiana",
    short_name: "V.K Salon",
    description:
      "Professional hair, beauty and grooming services for men, women and everyone in Tibba Road, Ludhiana.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf8f5",
    theme_color: "#0f3833",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/images/hero-model.jpg",
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "any maskable",
      },
    ],
  };
}
