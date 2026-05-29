import type { Metadata } from "next";
import { siteUrl } from "@/lib/content";
import ContactFormEn from "./contact-form-en";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "What's happening, how long it has been there, and what you've already tried. First conversation to see whether your case fits.",
  alternates: {
    canonical: "/en/contact",
    languages: { es: "/contacto", en: "/en/contact", "x-default": "/en/contact" },
  },
  openGraph: {
    title: "Contact | Ferran Moreno",
    description:
      "What's happening, how long it has been there, and what you've already tried. First conversation to see whether your case fits.",
    url: `${siteUrl}/en/contact`,
    siteName: "Ferran Moreno",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Ferran Moreno",
    description:
      "What's happening, how long it has been there, and what you've already tried. First conversation to see whether your case fits.",
  },
};

export default function ContactPageEn() {
  return <ContactFormEn />;
}
