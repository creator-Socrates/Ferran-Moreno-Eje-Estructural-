import { siteUrl } from "@/lib/content";

export function PersonStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ferran Moreno",
    jobTitle: "Bodywork Specialist",
    description:
      "Especialista en trabajo corporal, regulación del sistema nervioso y reorganización estructural.",
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lluçà (Barcelona)",
      addressCountry: "ES",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
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
