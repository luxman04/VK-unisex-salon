export default function JsonLd() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["HairSalon", "BeautySalon", "HealthAndBeautyBusiness"],
        "name": "V.K Unisex Salon",
        "alternateName": ["VK Unisex Salon Ludhiana", "VK Salon Tibba Road"],
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
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Where is V.K Unisex Salon located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "V.K Unisex Salon is located at Tibba Road, Ludhiana, Punjab 141007, India."
            }
          },
          {
            "@type": "Question",
            "name": "What are the working hours of V.K Unisex Salon?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "V.K Unisex Salon is open all 7 days a week, from 10:00 AM to 11:00 PM."
            }
          },
          {
            "@type": "Question",
            "name": "What hair and grooming services are available at V.K Unisex Salon?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "V.K Unisex Salon offers Haircut & Styling, Hair Colouring, Keratin & Hair Smoothing, Beard Grooming, Scalp Hair Spa & Treatment, Facials, Skin Care, and Bridal/Party Makeovers for men, women, and kids."
            }
          },
          {
            "@type": "Question",
            "name": "How can I book an appointment at V.K Unisex Salon?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can book directly on the website, call +91 98722 65230, or send an instant WhatsApp message to +91 98722 65230. Walk-ins are also welcome."
            }
          },
          {
            "@type": "Question",
            "name": "Does V.K Unisex Salon offer discounts?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, V.K Unisex Salon provides seasonal and store-wide discounts up to 20% to 50% OFF across all hair and grooming services."
            }
          }
        ]
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
