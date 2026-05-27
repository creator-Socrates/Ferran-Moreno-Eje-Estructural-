import type { Metadata } from "next";
import { siteUrl } from "@/lib/content";
import ContactoForm from "./contacto-form";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Cuéntame qué está pasando y te responderé personalmente. Formulario directo para sesiones, procesos, ciudades, cursos o recomendaciones.",
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: "Contacto | Ferran Moreno",
    description:
      "Cuéntame qué está pasando y te responderé personalmente. Formulario directo para sesiones, procesos, ciudades, cursos o recomendaciones.",
    url: `${siteUrl}/contacto`,
    siteName: "Ferran Moreno",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | Ferran Moreno",
    description:
      "Cuéntame qué está pasando y te responderé personalmente. Formulario directo para sesiones, procesos, ciudades, cursos o recomendaciones.",
  },
};

export default function ContactoPage() {
  return <ContactoForm />;
}
