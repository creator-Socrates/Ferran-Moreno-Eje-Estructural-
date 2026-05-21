import { siteUrl } from "@/lib/content";

export function PersonStructuredData() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ferran Moreno",
    jobTitle: "Certified Rolfer & Bodywork Specialist",
    description:
      "Rolfer certificado y especialista en trabajo corporal, regulación del sistema nervioso y reorganización estructural. Más de 20 años de experiencia. Formado en la Escuela Europea de Rolfing (Múnich), con Jean Pierre Barral, Alain Croibier y Peter Schwind.",
    url: siteUrl,
    knowsAbout: [
      "Rolfing", "Structural Integration", "Nervous System Regulation",
      "Visceral Manipulation", "Somatic Experiencing", "Energy Work",
      "Chronic Pain", "Postural Reorganization", "Osteopathy",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Colldeplana SN",
      addressLocality: "Lluçà",
      addressRegion: "Barcelona",
      postalCode: "08514",
      addressCountry: "ES",
    },
    telephone: "+34679229744",
    sameAs: [
      "https://www.instagram.com/ferran__moreno_/",
    ],
  };

  const business = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: "Ferran Moreno — Rolfing y Trabajo Corporal",
    description: "Rolfing, trabajo corporal profundo y regulación del sistema nervioso. Sesiones presenciales y online.",
    url: siteUrl,
    telephone: "+34679229744",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Colldeplana SN",
      addressLocality: "Lluçà",
      addressRegion: "Barcelona",
      postalCode: "08514",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.8875,
      longitude: 2.0347,
    },
    areaServed: [
      { "@type": "City", name: "Barcelona" },
      { "@type": "City", name: "Girona" },
      { "@type": "City", name: "Lleida" },
      { "@type": "City", name: "Vic" },
      { "@type": "City", name: "Manresa" },
      { "@type": "City", name: "Berga" },
      { "@type": "City", name: "La Seu d'Urgell" },
      { "@type": "City", name: "Solsona" },
      { "@type": "AdministrativeArea", name: "Osona" },
      { "@type": "AdministrativeArea", name: "Lluçanès" },
      { "@type": "AdministrativeArea", name: "Bages" },
      { "@type": "AdministrativeArea", name: "Berguedà" },
      { "@type": "City", name: "Berlin" },
      { "@type": "City", name: "London" },
      { "@type": "City", name: "New York" },
      { "@type": "City", name: "Mexico City" },
      { "@type": "Country", name: "Worldwide — online sessions" },
    ],
    priceRange: "€€",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    founder: person,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }}
      />
    </>
  );
}

const author = {
  "@type": "Person",
  name: "Ferran Moreno",
  url: siteUrl,
  jobTitle: "Bodywork & Nervous System Regulation Specialist",
  knowsAbout: [
    "Rolfing", "Structural Integration", "Nervous System Regulation",
    "Visceral Manipulation", "Somatic Experiencing", "Energy Work",
    "Chronic Pain", "Postural Reorganization",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lluçà, Barcelona",
    addressCountry: "ES",
  },
};

export function ArticleStructuredData({
  title,
  description,
  slug,
  date,
  tag,
  lang = "es",
}: {
  title: string;
  description: string;
  slug: string;
  date: string;
  tag: string;
  lang?: "es" | "en";
}) {
  const prefix = lang === "es" ? "/blog" : "/en/blog";
  const articleUrl = `${siteUrl}${prefix}/${slug}`;
  const blogUrl = `${siteUrl}${prefix}`;
  const homeUrl = lang === "es" ? siteUrl : `${siteUrl}/en`;
  const homeLabel = lang === "es" ? "Inicio" : "Home";

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    author,
    publisher: author,
    datePublished: date,
    dateModified: date,
    mainEntityOfPage: articleUrl,
    inLanguage: lang === "es" ? "es-ES" : "en",
    about: {
      "@type": "Thing",
      name: tag,
    },
    isPartOf: {
      "@type": "Blog",
      name: "Blog — Ferran Moreno",
      url: blogUrl,
    },
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: homeLabel,
        item: homeUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: blogUrl,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: articleUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
    </>
  );
}
