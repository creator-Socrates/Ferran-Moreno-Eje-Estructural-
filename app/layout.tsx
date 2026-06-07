import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { siteUrl } from "@/lib/content";
import { AnalyticsListener } from "@/components/analytics-listener";
import { CookieConsent } from "@/components/cookie-consent";
import { MobileMenu } from "@/components/mobile-menu";

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
    title: "Cuando el cuerpo pierde eje, no necesita más fuerza. Necesita precisión.",
    description:
      "Reorganización estructural, trabajo corporal y regulación del sistema nervioso con Ferran Moreno. Online y presencial en Lluçà, Barcelona.",
    url: siteUrl,
    siteName: "Ferran Moreno",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cuando el cuerpo pierde eje, no necesita más fuerza. Necesita precisión.",
    description:
      "Reorganización estructural, trabajo corporal y regulación del sistema nervioso con Ferran Moreno. Online y presencial en Lluçà, Barcelona.",
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") ?? "/";
  const lang = pathname.startsWith("/en") ? "en" : "es";

  return (
    <html lang={lang}>
      <body>
        <AnalyticsListener />
        <MobileMenu />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
