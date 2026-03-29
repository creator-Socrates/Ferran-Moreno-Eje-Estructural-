import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ferran Moreno | Reorganización estructural · Trabajo corporal · Regulación del sistema nervioso",
    template: "%s | Ferran Moreno",
  },
  description:
    "Trabajo corporal, regulación del sistema nervioso y reorganización estructural desde Lluçà (Barcelona) y online.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ferran Moreno",
    description:
      "Trabajo corporal, regulación del sistema nervioso y reorganización estructural desde Lluçà (Barcelona) y online.",
    url: siteUrl,
    siteName: "Ferran Moreno",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferran Moreno",
    description:
      "Trabajo corporal, regulación del sistema nervioso y reorganización estructural desde Lluçà (Barcelona) y online.",
  },
  icons: {
    icon: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "Ferran Moreno",
    "trabajo corporal",
    "regulación sistema nervioso",
    "reorganización estructural",
    "Lluçà",
    "Barcelona",
    "online",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
