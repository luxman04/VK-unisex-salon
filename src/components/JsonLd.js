export default function JsonLd() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["HairSalon", "BeautySalon", "HealthAndBeautyBusiness"],
    "name": "V.K Unisex Salon",
    "alternateName": "VK Unisex Salon Ludhiana",
    "description":
      "Professional hair, beauty and grooming services for men, women and everyone in Tibba Road, Ludhiana. Trendy haircuts, hair colouring, keratin, bridal makeover and beard grooming.",
    "url": "https://vk-unisex-salon.com",
    "telephone": "+919872265230",
    "priceRange": "₹₹",
    "image": [
      "https://vk-unisex-salon.com/images/hero-model.jpg",
      "https://vk-unisex-salon.com/images/salon-interior.jpg",
      "https://vk-unisex-salon.com/images/gallery-6.jpg"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tibba Road",
      "addressLocality": "Ludhiana",
      "addressRegion": "Punjab",
      "postalCode": "141007",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 30.9010,
      "longitude": 75.8573
    },
    "hasMap": "https://www.google.com/maps/search/?api=1&query=V.K+Unisex+Salon+Tibba+Road+Ludhiana",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "10:00",
        "closes": "23:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "bestRating": "5",
      "ratingCount": "128",
      "reviewCount": "128"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Haircut & Styling",
          "description": "Trendy haircuts and modern styling for all age groups."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hair Colouring",
          "description": "Global colouring, highlights and fashion colours."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hair Spa & Treatment",
          "description": "Deep nourishment for healthy, stronger hair."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Beard Grooming",
          "description": "Beard cut, shaping and complete grooming."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Facial & Skin Care",
          "description": "Rejuvenating facials for fresh and glowing skin."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Keratin & Smoothing",
          "description": "Smoother, shinier and frizz-free hair."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
