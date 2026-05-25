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
      "Executive Performance", "Athletic Performance", "Creative Work",
      "Performance under Pressure", "Burnout Recovery", "Bodywork for Executives",
      "Bodywork for Athletes", "Mental-Emotional Regulation",
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
      { "@type": "City", name: "Buenos Aires" },
      { "@type": "City", name: "Bariloche" },
      { "@type": "City", name: "Santiago de Chile" },
      { "@type": "City", name: "Tel Aviv" },
      { "@type": "City", name: "Reykjavik" },
      { "@type": "City", name: "Oslo" },
      { "@type": "City", name: "Tokyo" },
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "61",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Rodrigo Peñafiel" },
        datePublished: "2019",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "A Ferran lo conocí después de muchos años de un dolor en la rodilla, ya a mis 45, la rodilla era muy débil. En una sola sesión noté un cambio inmediato, lo súper recomiendo es un gran gran especialista! Me sorprendió!",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Victoria Osa" },
        datePublished: "2020",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Después de mi accidente de coche pasé por varias rehabilitaciones y diferentes terapias pero fue cuándo me puse en manos de Ferrán cuándo recuperé mi salud y desaparecieron todos mis Dolores. Lo recomiendo 100%",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Tom Bourdon" },
        datePublished: "2023",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Ferran is a genius! I came to him with strong back pain and stiff shoulders, and although he didn't miraculously cure me, the improvement was incredible. I felt like he unblocked parts of me I didn't know were blocked! He's a very calm and authentic guy; he makes the experience like chatting with an old friend.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Lorena S T" },
        datePublished: "2019",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Las sesiones de Ferran han sido el descubrimiento del verano. Una amiga me lo recomendó y desde la primera sesión he notado mejoría. Mi ansiedad desapareció y tengo una mejor postura corporal y me siento más fuerte, con más seguridad. Gracias Ferran! Estic super bé!",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Aisha Al Said" },
        datePublished: "2022",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Con Ferrán aprendo a quitar el ruido interior. Poco a poco, elimino las capas para encontrar silencio. Me está ayudando mucho.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Neus Ribes" },
        datePublished: "2019",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Me faltan palabras para explicar lo que hace Ferran, ya que a parte de sus conocimientos y técnicas, tiene un don muy especial para interpretar tu cuerpo y tus emociones y así hacer un trabajo más profundo a todos los niveles y ayudarte a recuperar el equilibrio.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Julián Santamaría Hernández" },
        datePublished: "2018",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Después de 10 años con dolor lumbar permanente y pensando que iba vivir toda mi vida con dicho dolor, conocer a Ferran y su método ha sido para mí una experiencia indescriptible. Desde la primera sesión mi dolor físico ha desaparecido. Su trabajo va más allá de lo físico, integrando también lo emocional.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Miguel Guerrero" },
        datePublished: "2024",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Para mi, Ferran es el 'El obrero de las nubes'. Pq me ayuda a apartar todo aquello que impide que luz entre en mi vida. Llevo años haciéndome sesiones con él. Es un profesional, no da puntada sin hilo y su trabajo va muy profundo. Anímate y prueba, no te dejará indiferente.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Anna Diez" },
        datePublished: "2018",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Ferran me ha ayudado a recuperar estabilidad, no sólo física, sino mental y emocional. Quizás incluso espiritual. De forma muy suave y amable, me ha ayudado a volver a equilibrar la parte derecha de mi cuerpo con la izquierda, a la vez que me ha hecho darme cuenta de que llevaba lastre acumulado de todas esas experiencias de vida que no me habían sentado bien.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Quim Clark" },
        datePublished: "2019",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Pocos sabemos la importancia de tener a un profesional que te ayude con las emociones, el cómo te sientes y cómo gestionarlo. Aunque, Ferran es muchísimo más que eso! Soy autónomo y trabajo en el sector de la noche y eventos bajo presión... entré doblado y salí recto, con ganas de comerme el mundo.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Bianca Porcar" },
        datePublished: "2017",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Ferran Moreno es un gran profesional. Acabo de dar a luz y gracias a su método (que para mi es mágico) he notado un cambio en mi cuerpo radical. Lo recomiendo enormemente a todo el mundo, en especial a todas aquellas mujeres que acaban de ser mamis.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Madeleine Cooke" },
        datePublished: "2021",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Ferran's incredible work is hard to describe in words, but the astonishing changes I have experienced, both emotional and physical, have initiated a process of transformation that I know will have a great impact on my life.",
      },
    ],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Structural Reorganization Bodywork",
    serviceType:
      "Bodywork, structural reorganization, nervous system regulation, energy work, mental-emotional integration",
    description:
      "Process-based bodywork for people whose body sustains pressure, responsibility, performance or deep personal process. The work focuses on reorganizing the whole system rather than treating isolated symptoms. Sessions available online worldwide and in-person in Lluçà, Barcelona.",
    provider: person,
    areaServed: [
      { "@type": "City", name: "Barcelona" },
      { "@type": "City", name: "Lluçà" },
      { "@type": "Country", name: "Spain" },
      { "@type": "Place", name: "Europe" },
      { "@type": "Place", name: "Worldwide — online sessions" },
    ],
    audience: {
      "@type": "Audience",
      audienceType:
        "Executives, athletes, musicians and dancers, people under sustained physical pressure, farmers and physical trades, teachers and parents, doctors and therapists, photographers and film/production, creators and founders, people with chronic pain or nervous system dysregulation",
    },
    offers: [
      {
        "@type": "Offer",
        name: "Individual session",
        description:
          "60–90 minute session. Structural reading, nervous system regulation, energy work, mental-emotional layers. Online or in-person in Lluçà, Barcelona.",
        price: "180",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Initial session",
        description:
          "Entry point to the 6-month process. Full assessment + first intervention.",
        price: "360",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "AggregateOffer",
        name: "6-month process (monthly)",
        description:
          "12 sessions over 6 months, typically weekly or biweekly. Paid in advance. At month three we assess whether to continue or close.",
        lowPrice: "360",
        highPrice: "600",
        priceCurrency: "EUR",
        offerCount: "2",
      },
    ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
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
