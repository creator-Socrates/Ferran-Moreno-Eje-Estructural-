import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/content";

const blogSlugsEs = [
  "por-que-tomas-malas-decisiones-cuando-estas-estresado",
  "dolor-cronico-sin-solucion-cuando-el-problema-no-es-donde-duele",
  "que-es-la-regulacion-del-sistema-nervioso",
  "rolfing-duele-la-verdad",
  "cuando-el-cuerpo-compensa-mas-tecnica-no-lo-soluciona",
  "no-necesitas-entender-necesitas-estar-bien",
  "que-esperar-en-tu-primera-sesion",
  "dolor-de-espalda-cronico-origen",
  "rolfing-vs-fisioterapia-diferencia",
  "que-pasa-en-una-sesion",
  "ansiedad-sin-causa-aparente",
  "trabajo-corporal-despues-del-embarazo",
  "el-topo-mecanismo-mental",
  "lesiones-deportivas-que-no-se-curan",
  "tu-cuerpo-no-esta-roto",
  "20-anos-formandome-en-20-paises",
  "trabajo-energetico-no-es-lo-que-piensas",
  "rolfing-europa-vs-usa",
  "diferencia-entre-intensidad-e-invasion",
  "por-que-trabajo-por-proceso",
  "compensar-no-es-curar",
  "por-que-los-ceos-necesitan-trabajo-corporal",
  "rendimiento-sostenible-cuerpo-como-infraestructura",
  "viajes-jet-lag-sistema-nervioso",
];

const blogSlugsEn = [
  "why-you-make-bad-decisions-when-stressed",
  "chronic-pain-when-the-problem-isnt-where-it-hurts",
  "what-is-nervous-system-regulation",
  "does-rolfing-hurt-the-truth",
  "when-your-body-compensates-more-technique-wont-fix-it",
  "you-dont-need-to-understand-you-need-to-be-well",
  "what-to-expect-first-session",
  "chronic-back-pain-origin",
  "rolfing-vs-physiotherapy-difference",
  "what-really-happens-in-a-session",
  "anxiety-without-apparent-cause",
  "bodywork-after-pregnancy",
  "the-mole-mental-mechanism",
  "sports-injuries-that-wont-heal",
  "your-body-isnt-broken",
  "20-years-training-across-20-countries",
  "energy-work-isnt-what-you-think",
  "european-rolfing-vs-american",
  "difference-between-intensity-and-invasion",
  "why-i-work-by-process-not-single-sessions",
  "compensating-isnt-healing",
  "why-ceos-need-bodywork",
  "sustainable-performance-body-as-infrastructure",
  "travel-jet-lag-nervous-system",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/wall-of-trust`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/historia`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/en`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/en/wall-of-trust`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/en/my-story`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/en/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  for (const slug of blogSlugsEs) {
    pages.push({ url: `${siteUrl}/blog/${slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.6 });
  }

  for (const slug of blogSlugsEn) {
    pages.push({ url: `${siteUrl}/en/blog/${slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.6 });
  }

  return pages;
}
