import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "@/lib/content";

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
  },
  openGraph: {
    title: "Ferran Moreno — Rolfing y trabajo corporal | Barcelona, Girona, Lleida",
    description:
      "Rolfing, trabajo corporal profundo y regulación del sistema nervioso. Presencial en Lluçà (Barcelona) y online. Más de 20 años de experiencia.",
    url: siteUrl,
    siteName: "Ferran Moreno",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferran Moreno — Rolfing y trabajo corporal",
    description:
      "Rolfing, trabajo corporal profundo y regulación del sistema nervioso. Barcelona, Girona, Lleida y online.",
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
      <body>{children}</body>
    </html>
  );
}
