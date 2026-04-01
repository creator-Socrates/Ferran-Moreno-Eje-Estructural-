import type { Metadata } from "next";
import { siteUrl } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ferran Moreno | Bodywork · Regulation · Energy",
    template: "%s | Ferran Moreno",
  },
  description:
    "Bodywork, nervous system regulation, and structural reorganization from Lluçà (Barcelona) and online worldwide.",
  alternates: {
    canonical: "/en",
    languages: { es: "/", en: "/en" },
  },
  openGraph: {
    title: "Ferran Moreno",
    description:
      "Bodywork, nervous system regulation, and structural reorganization from Lluçà (Barcelona) and online worldwide.",
    url: `${siteUrl}/en`,
    siteName: "Ferran Moreno",
    locale: "en_US",
    type: "website",
  },
  keywords: [
    "Ferran Moreno",
    "bodywork",
    "nervous system regulation",
    "structural reorganization",
    "Rolfing",
    "Lluçà",
    "Barcelona",
    "online",
  ],
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
