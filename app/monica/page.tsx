import type { Metadata } from "next";
import Link from "next/link";
import { monicaCentral, siteUrl } from "@/lib/content";

export const metadata: Metadata = {
  title: "Testimonio de Mónica | Ferran Moreno",
  description: "Testimonio completo de Mónica: cómo el trabajo corporal y la regulación del sistema nervioso transformaron su cuerpo y su energía.",
  alternates: {
    canonical: `${siteUrl}/monica`,
    languages: { es: `${siteUrl}/monica`, en: `${siteUrl}/en/monica`, "x-default": `${siteUrl}/monica` },
  },
  openGraph: {
    title: "Testimonio de Mónica | Ferran Moreno",
    description: "Testimonio completo de Mónica: cómo el trabajo corporal y la regulación del sistema nervioso transformaron su cuerpo y su energía.",
    url: `${siteUrl}/monica`,
    siteName: "Ferran Moreno",
    locale: "es_ES",
    type: "article",
  },
};

export default function MonicaPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>

      <header className="sticky top-0 z-30" style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-8 py-5">
          <Link href="/" className="leading-none">
            <div className="text-[17px] font-semibold tracking-[-0.01em]" style={{ color: "var(--text-main)" }}>Ferran Moreno</div>
            <div className="mt-[5px] text-[10px] uppercase tracking-[0.14em]" style={{ color: "var(--text-secondary)", opacity: 0.7 }}>
              Testimonio
            </div>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/blog" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50" style={{ color: "var(--text-secondary)" }}>Blog</Link>
            <Link
              href="/"
              className="rounded-full px-5 py-2 text-sm font-medium transition hover:opacity-60"
              style={{ border: "1px solid var(--border-subtle)", color: "var(--text-main)" }}
            >
              Volver a la home
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section>
          <div className="mx-auto max-w-[660px] px-6 py-[100px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>
              Testimonio destacado
            </div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Un cuerpo que recuerda su orden
            </h1>
            <p className="mt-4 text-base" style={{ color: "var(--text-secondary)" }}>
              — {monicaCentral.name}
            </p>

            <p className="mt-12 whitespace-pre-line text-lg leading-[1.8]">
              {monicaCentral.text}
            </p>
          </div>
        </section>
      </main>

    </div>
  );
}
