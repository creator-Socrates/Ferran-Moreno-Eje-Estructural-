import type { Metadata } from "next";
import Link from "next/link";
import { monicaCentralEn } from "@/lib/content.en";
import { siteUrl } from "@/lib/content";

export const metadata: Metadata = {
  title: "Mónica's Testimonial | Ferran Moreno",
  description: "Mónica's full testimonial: how structural bodywork and nervous system regulation transformed her body and energy.",
  alternates: {
    canonical: `${siteUrl}/en/monica`,
    languages: { es: `${siteUrl}/monica`, en: `${siteUrl}/en/monica`, "x-default": `${siteUrl}/monica` },
  },
  openGraph: {
    title: "Mónica's Testimonial | Ferran Moreno",
    description: "Mónica's full testimonial: how structural bodywork and nervous system regulation transformed her body and energy.",
    url: `${siteUrl}/en/monica`,
    siteName: "Ferran Moreno",
    locale: "en_US",
    type: "article",
  },
};

export default function MonicaEnPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>

      <header className="sticky top-0 z-30" style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-8 py-5">
          <Link href="/en" className="leading-none">
            <div className="text-[17px] font-semibold tracking-[-0.01em]" style={{ color: "var(--text-main)" }}>Ferran Moreno</div>
            <div className="mt-[5px] text-[10px] uppercase tracking-[0.14em]" style={{ color: "var(--text-secondary)", opacity: 0.7 }}>
              Testimonial
            </div>
          </Link>
          <nav className="hidden items-center gap-8 md:flex" style={{ color: "var(--text-secondary)" }}>
            <Link href="/en#method" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Method</Link>
            <Link href="/en#cases" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Cases</Link>
            <Link href="/en#who" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Who it&apos;s for</Link>
            <Link href="/en/wall-of-trust" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Wall of trust</Link>
            <Link href="/en/my-story" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">My story</Link>
            <Link href="/en/blog" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Blog</Link>
            <span style={{ color: "var(--border-subtle)" }}>|</span>
            <Link href="/" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">ES</Link>
          </nav>
        </div>
      </header>

      <main>
        <section>
          <div className="mx-auto max-w-[660px] px-6 py-[100px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>
              Featured testimonial
            </div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              A body that remembers its order
            </h1>
            <p className="mt-4 text-base" style={{ color: "var(--text-secondary)" }}>
              — {monicaCentralEn.name}
            </p>

            <p className="mt-12 whitespace-pre-line text-lg leading-[1.8]">
              {monicaCentralEn.text}
            </p>
          </div>
        </section>
      </main>

    </div>
  );
}
