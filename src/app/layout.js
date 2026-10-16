import "./globals.css";
import { ServicesProvider } from "@/context/ServicesContext";

export const metadata = {
  metadataBase: new URL("https://vk-unisex-salon.com"),
  title: "V.K Unisex Salon | Style • Care • Confidence | Tibba Road, Ludhiana",
  description:
    "Professional hair, beauty and grooming services for men, women and everyone in Tibba Road, Ludhiana. Trendy haircuts, hair colouring, keratin, bridal makeover and beard grooming. Call +91 98722 65230.",
  keywords: [
    "V.K Unisex Salon",
    "VK Salon Ludhiana",
    "Salon Tibba Road Ludhiana",
    "Haircut Ludhiana",
    "Hair Colouring",
    "Keratin & Smoothing",
    "Beard Grooming",
    "Bridal Makeup Ludhiana",
    "Unisex Salon Ludhiana",
  ],
  authors: [{ name: "V.K Unisex Salon" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "V.K Unisex Salon | Style • Care • Confidence",
    description:
      "Professional hair, beauty and grooming services for men, women and everyone in Tibba Road, Ludhiana.",
    url: "https://vk-unisex-salon.com",
    siteName: "V.K Unisex Salon",
    images: [
      {
        url: "/images/hero-model.jpg",
        width: 1200,
        height: 630,
        alt: "V.K Unisex Salon Ludhiana",
      },
    ],
    locale: "en_IN",
    type: "website",
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
      </head>
      <body>
        <ServicesProvider>{children}</ServicesProvider>
      </body>
    </html>
  );
}
