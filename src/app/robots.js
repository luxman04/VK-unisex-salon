export default function robots() {
  const baseUrl = "https://vk-unisex-salon.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api/"],
      },
      // Explicitly allow ChatGPT (OpenAI)
      {
        userAgent: ["GPTBot", "ChatGPT-User"],
        allow: ["/", "/llms.txt", "/ai-index.json"],
        disallow: ["/admin"],
      },
      // Explicitly allow Google Gemini & Google AI
      {
        userAgent: ["Google-Extended", "Googlebot", "Googlebot-Image"],
        allow: ["/", "/llms.txt", "/ai-index.json"],
        disallow: ["/admin"],
      },
      // Explicitly allow Anthropic Claude
      {
        userAgent: ["ClaudeBot", "anthropic-ai"],
        allow: ["/", "/llms.txt", "/ai-index.json"],
        disallow: ["/admin"],
      },
      // Explicitly allow Perplexity AI
      {
        userAgent: ["PerplexityBot"],
        allow: ["/", "/llms.txt", "/ai-index.json"],
        disallow: ["/admin"],
      },
      // Explicitly allow Apple Intelligence
      {
        userAgent: ["Applebot", "Applebot-Extended"],
        allow: ["/", "/llms.txt", "/ai-index.json"],
        disallow: ["/admin"],
      },
      // Explicitly allow Cohere and Bytespider AI
      {
        userAgent: ["cohere-ai", "Bytespider"],
        allow: ["/", "/llms.txt", "/ai-index.json"],
        disallow: ["/admin"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
