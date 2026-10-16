import "./globals.css";
import { ServicesProvider } from "@/context/ServicesContext";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  metadataBase: new URL("https://vk-unisex-salon.com"),
  title: {
    default: "V.K Unisex Salon | Style • Care • Confidence | Tibba Road, Ludhiana",
    template: "%s | V.K Unisex Salon",
  },
  description:
    "Professional hair, beauty and grooming services for men, women and everyone in Tibba Road, Ludhiana. Trendy haircuts, hair colouring, keratin, bridal makeover, beard grooming and rejuvenating facials. Call +91 98722 65230.",
  keywords: [
    "V.K Unisex Salon",
    "VK Salon Ludhiana",
    "Unisex Salon Tibba Road Ludhiana",
    "Best salon in Ludhiana",
    "Haircut Ludhiana",
    "Hair Colouring Ludhiana",
    "Keratin Treatment Ludhiana",
    "Hair Spa Ludhiana",
    "Beard Grooming Ludhiana",
    "Facial and Skin Care Ludhiana",
    "Bridal Makeup Tibba Road",
    "Beauty Parlour Ludhiana",
    "Men Grooming Salon Ludhiana",
    "Women Haircut Ludhiana",
  ],
  authors: [{ name: "V.K Unisex Salon", url: "https://vk-unisex-salon.com" }],
  creator: "V.K Unisex Salon",
  publisher: "V.K Unisex Salon",
  category: "Beauty & Personal Grooming",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/images/hero-model.jpg",
  },
  openGraph: {
    title: "V.K Unisex Salon | Style • Care • Confidence | Tibba Road, Ludhiana",
    description:
      "Professional hair, beauty and grooming services for men, women and everyone in Tibba Road, Ludhiana. Book appointment online or call +91 98722 65230.",
    url: "https://vk-unisex-salon.com",
    siteName: "V.K Unisex Salon",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero-model.jpg",
        width: 1200,
        height: 630,
        alt: "V.K Unisex Salon Ludhiana - Style, Care, Confidence",
      },
      {
        url: "/images/salon-interior.jpg",
        width: 1200,
        height: 675,
        alt: "V.K Unisex Salon Modern Setup",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "V.K Unisex Salon | Style • Care • Confidence",
    description:
      "Professional hair, beauty and grooming services for men, women and everyone in Tibba Road, Ludhiana.",
    images: ["/images/hero-model.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0f3833",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Caveat:wght@600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* AI Platforms Index (ChatGPT, Gemini, Claude, Perplexity) */}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="AI Knowledge Index (llms.txt)" />
        <link rel="alternate" type="application/json" href="/ai-index.json" title="AI Structured Knowledge (ai-index.json)" />
        <meta name="ai-content-declaration" content="business, grooming, hair salon, unisex parlour, ludhiana" />
      </head>
      <body>
        <JsonLd />
        <ServicesProvider>{children}</ServicesProvider>
      </body>
    </html>
  );
}
