import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "@/lib/content";
import { AnalyticsListener } from "@/components/analytics-listener";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ferran Moreno | Rolfing · Trabajo corporal · Regulación del sistema nervioso | Barcelona, Girona, Lleida",
    template: "%s | Ferran Moreno",
  },
  description:
    "Rolfing, trabajo corporal profundo y regulación del sistema nervioso. Más de 20 años de experiencia. Presencial en Lluçà (Barcelona) — clientes de Barcelona, Girona, Lleida, Vic, Berga, Manresa, La Seu d'Urgell y online.",
  alternates: {
    canonical: "/",
    languages: { "es": "/", "en": "/en" },
  },
  openGraph: {
    title: "When the body loses its axis, it doesn't need more force. It needs precision.",
    description:
      "Structural reorganization, bodywork and nervous system regulation with Ferran Moreno. Online worldwide and in-person in Lluçà, Barcelona.",
    url: siteUrl,
    siteName: "Ferran Moreno",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "When the body loses its axis, it doesn't need more force. It needs precision.",
    description:
      "Structural reorganization, bodywork and nervous system regulation with Ferran Moreno. Online worldwide and in-person in Lluçà, Barcelona.",
  },
  icons: {
    icon: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "Rolfing",
    "Rolfing Barcelona",
    "Rolfing Girona",
    "Rolfing Lleida",
    "Rolfing Vic",
    "Rolfing Berga",
    "Rolfing Manresa",
    "Rolfing La Seu d'Urgell",
    "Rolfing Osona",
    "Rolfing Lluçanès",
    "trabajo corporal",
    "trabajo corporal Barcelona",
    "regulación sistema nervioso",
    "reorganización estructural",
    "Ferran Moreno",
    "dolor crónico",
    "osteopatía visceral",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RZKCT72MHX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-RZKCT72MHX');`,
          }}
        />
      </head>
      <body>
        <AnalyticsListener />
        {children}
      </body>
    </html>
  );
}
