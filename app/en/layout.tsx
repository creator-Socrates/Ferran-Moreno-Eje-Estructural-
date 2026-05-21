import type { Metadata } from "next";
import { siteUrl } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ferran Moreno | Rolfing · Structural Bodywork · Nervous System Regulation",
    template: "%s | Ferran Moreno",
  },
  description:
    "Rolfing and deep structural bodywork with Ferran Moreno. 20+ years of experience. Online sessions worldwide. In-person in Barcelona. Chronic pain, nervous system dysregulation, performance.",
  alternates: {
    canonical: "/en",
    languages: { "es": "/", "en": "/en", "x-default": "/en" },
  },
  openGraph: {
    title: "Ferran Moreno | Rolfing & Structural Bodywork",
    description:
      "Rolfing and deep structural bodywork. Online sessions worldwide. In-person in Barcelona. 20+ years of experience.",
    url: `${siteUrl}/en`,
    siteName: "Ferran Moreno",
    locale: "en_US",
    type: "website",
  },
  keywords: [
    "Ferran Moreno",
    "Rolfing",
    "structural integration",
    "bodywork",
    "deep bodywork",
    "nervous system regulation",
    "somatic work",
    "structural reorganization",
    "online rolfing",
    "online bodywork",
    "online structural integration",
    "rolfing online sessions",
    "chronic pain bodywork",
    "somatic experiencing",
    "rolfing berlin",
    "rolfing london",
    "rolfing new york",
    "rolfing europe",
    "Barcelona",
    "online worldwide",
  ],
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
