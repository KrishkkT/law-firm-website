export function WebsiteStructuredData({ url = "https://jayminthakkerlaw.com" }: { url?: string }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Thakker & Associates",
    url: url,
    logo: `${url}/logo-transparent.png`,
    image: `${url}/grand-legal-hall.png`,
    description:
      "Thakker & Associates is a premier law firm providing exceptional legal services across various practice areas including personal injury, family law, business law, and estate planning.",
    telephone: "+919898241082",
    email: "infojtlaw@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kaveri Complex, Nawapara",
      addressLocality: "Bhavnagar",
      addressRegion: "Gujarat",
      postalCode: "364001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "21.774786361740716",
      longitude: "72.14664987388134",
    },
    openingHours: ["Mo-Fr 10:00-21:00", "Sa 10:00-20:00", "Su 10:00-14:00"],
    sameAs: [
      "https://www.facebook.com/thakkerandassociates",
      "https://www.linkedin.com/company/thakker-and-associates",
    ],
    priceRange: "₹₹",
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "21.774786361740716",
        longitude: "72.14664987388134",
      },
      geoRadius: "50000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Legal Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Personal Injury Law",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Family Law",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business Law",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Estate Planning",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Criminal Defense",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Real Estate Law",
          },
        },
      ],
    },
    areaServed: [
      {
        "@type": "City",
        name: "Bhavnagar",
        containedInPlace: {
          "@type": "State",
          name: "Gujarat",
        },
      },
      {
        "@type": "City",
        name: "Mahuva",
        containedInPlace: {
          "@type": "State",
          name: "Gujarat",
        },
      },
      {
        "@type": "City",
        name: "Botad",
        containedInPlace: {
          "@type": "State",
          name: "Gujarat",
        },
      },
      {
        "@type": "City",
        name: "Ahmedabad",
        containedInPlace: {
          "@type": "State",
          name: "Gujarat",
        },
      },
      {
        "@type": "City",
        name: "Dholera",
        containedInPlace: {
          "@type": "State",
          name: "Gujarat",
        },
      },
      {
        "@type": "City",
        name: "Talaja",
        containedInPlace: {
          "@type": "State",
          name: "Gujarat",
        },
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

export function AttorneyStructuredData({
  name,
  image,
  description,
  url = "https://jayminthakkerlaw.com",
}: {
  name: string
  image: string
  description: string
  url?: string
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Attorney",
    name: name,
    image: `${url}${image}`,
    description: description,
    url: url,
    telephone: "+919898241082",
    email: "infojtlaw@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kaveri Complex, Nawapara",
      addressLocality: "Bhavnagar",
      addressRegion: "Gujarat",
      postalCode: "364001",
      addressCountry: "IN",
    },
    worksFor: {
      "@type": "LegalService",
      name: "Thakker & Associates",
      url: url,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Bhavnagar",
        containedInPlace: {
          "@type": "State",
          name: "Gujarat",
        },
      },
      {
        "@type": "City",
        name: "Mahuva",
        containedInPlace: {
          "@type": "State",
          name: "Gujarat",
        },
      },
      {
        "@type": "City",
        name: "Botad",
        containedInPlace: {
          "@type": "State",
          name: "Gujarat",
        },
      },
      {
        "@type": "City",
        name: "Ahmedabad",
        containedInPlace: {
          "@type": "State",
          name: "Gujarat",
        },
      },
      {
        "@type": "City",
        name: "Dholera",
        containedInPlace: {
          "@type": "State",
          name: "Gujarat",
        },
      },
      {
        "@type": "City",
        name: "Talaja",
        containedInPlace: {
          "@type": "State",
          name: "Gujarat",
        },
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

export function FAQStructuredData({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

export function LocalBusinessStructuredData({
  city,
  region = "Gujarat",
  url = "https://jayminthakkerlaw.com",
  latitude,
  longitude,
}: {
  city: string
  region?: string
  url?: string
  latitude?: string
  longitude?: string
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: `Thakker & Associates - ${city}`,
    url: `${url}/locations/${city.toLowerCase()}`,
    logo: `${url}/logo-transparent.png`,
    image: `${url}/grand-legal-hall.png`,
    description: `Thakker & Associates provides exceptional legal services in ${city}, ${region} across various practice areas including criminal defense, civil litigation, family law, property disputes, and corporate legal services.`,
    telephone: "+919898241082",
    email: "infojtlaw@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kaveri Complex, Nawapara",
      addressLocality: "Bhavnagar",
      addressRegion: region,
      postalCode: "364001",
      addressCountry: "IN",
    },
    geo:
      latitude && longitude
        ? {
            "@type": "GeoCoordinates",
            latitude: latitude,
            longitude: longitude,
          }
        : undefined,
    openingHours: ["Mo-Fr 10:00-21:00", "Sa 10:00-20:00", "Su 10:00-14:00"],
    sameAs: [
      "https://www.facebook.com/thakkerandassociates",
      "https://www.linkedin.com/company/thakker-and-associates",
    ],
    priceRange: "₹₹",
    serviceArea: {
      "@type": "City",
      name: city,
      containedInPlace: {
        "@type": "State",
        name: region,
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Legal Services in ${city}`,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `Criminal Defense in ${city}`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `Civil Litigation in ${city}`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `Family Law in ${city}`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `Property Dispute Resolution in ${city}`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `Corporate Legal Services in ${city}`,
          },
        },
      ],
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
