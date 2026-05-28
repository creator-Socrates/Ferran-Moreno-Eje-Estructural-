import type { Metadata } from "next";
import { siteUrl } from "@/lib/content";
import ContactoForm from "./contacto-form";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Qué está pasando, desde cuándo y qué has probado. Primera conversación para ver si tu caso encaja.",
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: "Contacto | Ferran Moreno",
    description:
      "Qué está pasando, desde cuándo y qué has probado. Primera conversación para ver si tu caso encaja.",
    url: `${siteUrl}/contacto`,
    siteName: "Ferran Moreno",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | Ferran Moreno",
    description:
      "Qué está pasando, desde cuándo y qué has probado. Primera conversación para ver si tu caso encaja.",
  },
};

export default function ContactoPage() {
  return <ContactoForm />;
}
