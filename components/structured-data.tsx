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
