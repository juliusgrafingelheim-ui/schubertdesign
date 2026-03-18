import { Helmet } from "react-helmet-async";

/** LocalBusiness JSON-LD for Schubert Design Steinmetzbetrieb */
export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
        "@id": "https://schubertdesign.de/#business",
        name: "Schubert Design",
        alternateName: "Schubert Design Steinmetzbetrieb",
        description:
          "Steinmetzbetrieb in Ingolstadt, spezialisiert auf exklusive Bäder, Naturstein und Fliesen. Seit 1953 in dritter Generation. 400m² Showroom mit Marken wie Villeroy & Boch, Dornbracht und Agape.",
        url: "https://schubertdesign.de",
        telephone: "+49841-88560",
        email: "info@schubertdesign.de",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Schrobenhausener Str. 132",
          addressLocality: "Ingolstadt",
          postalCode: "85051",
          addressRegion: "Bayern",
          addressCountry: "DE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 48.757,
          longitude: 11.4254,
        },
        areaServed: [
          {
            "@type": "State",
            name: "Bayern",
            containedInPlace: { "@type": "Country", name: "Germany" },
          },
          { "@type": "City", name: "Ingolstadt" },
          { "@type": "City", name: "München" },
          { "@type": "City", name: "Neuburg an der Donau" },
          { "@type": "City", name: "Pfaffenhofen" },
          { "@type": "City", name: "Eichstätt" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Leistungen",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Badgestaltung",
                description:
                  "Komplette Badplanung und -umsetzung mit hochwertigen Natursteinen, Fliesen und Sanitärobjekten. Von der Beratung bis zur Fertigstellung.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Natursteinarbeiten",
                description:
                  "Verarbeitung und Montage von Naturstein für Innen- und Außenbereiche. Küchenarbeitsplatten, Fensterbänke, Treppen und Fassaden.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Fliesenarbeiten",
                description:
                  "Professionelle Fliesenverlegung für Bäder, Küchen, Wohn- und Außenbereiche. Großformate, Mosaike und Sonderformate.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Steinrestaurierung",
                description:
                  "Restaurierung und Sanierung von Natursteinflächen, Denkmalpflege und Grabmale.",
              },
            },
          ],
        },
        priceRange: "€€€",
        currenciesAccepted: "EUR",
        paymentAccepted: "Cash, Bank Transfer, EC Card",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "09:00",
            closes: "13:00",
          },
        ],
        sameAs: [
          "https://www.instagram.com/schubertdesign",
        ],
        knowsLanguage: ["de"],
        founder: [
          {
            "@type": "Person",
            name: "Raphael Schubert",
            jobTitle: "Geschäftsführer",
          },
          {
            "@type": "Person",
            name: "Henry Schubert",
            jobTitle: "Geschäftsführer",
          },
        ],
        foundingDate: "1953",
      },
      {
        "@type": "WebSite",
        "@id": "https://schubertdesign.de/#website",
        url: "https://schubertdesign.de",
        name: "Schubert Design",
        description:
          "Steinmetzbetrieb in Ingolstadt. Spezialisiert auf exklusive Bäder, Naturstein und Fliesen seit 1953.",
        publisher: {
          "@id": "https://schubertdesign.de/#business",
        },
        inLanguage: "de-DE",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Was bietet Schubert Design an?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Schubert Design ist ein Steinmetzbetrieb in Ingolstadt, spezialisiert auf drei Bereiche: BAD (komplette Badgestaltung), NATURSTEIN (Verarbeitung und Montage) und FLIESE (professionelle Verlegung). Seit 1953 in dritter Generation.",
            },
          },
          {
            "@type": "Question",
            name: "Wo ist der Schubert Design Showroom?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Der 400m² große Showroom befindet sich in der Schrobenhausener Str. 132, 85051 Ingolstadt. Hier können Sie Natursteine, Fliesen und komplette Badwelten erleben. Geöffnet Mo–Fr 08–18 Uhr, Sa 09–13 Uhr.",
            },
          },
          {
            "@type": "Question",
            name: "Welche Marken führt Schubert Design?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Schubert Design arbeitet mit Premium-Marken wie Villeroy & Boch, Dornbracht, Agape, Marazzi, Florim und vielen weiteren führenden Herstellern im Bereich Bad, Naturstein und Fliesen.",
            },
          },
          {
            "@type": "Question",
            name: "Seit wann gibt es Schubert Design?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Schubert Design wurde 1953 gegründet und wird heute in dritter Generation von Raphael und Henry Schubert geführt. Der Betrieb verbindet traditionelles Steinmetz-Handwerk mit modernem Design.",
            },
          },
        ],
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
