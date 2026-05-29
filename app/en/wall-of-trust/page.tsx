import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl } from "@/lib/content";
import { testimonialsFullEn } from "@/lib/content.en";

export const metadata: Metadata = {
  title: "Wall of trust",
  description: "Selected testimonials in English from Ferran Moreno's clients.",
  alternates: {
    canonical: "/en/wall-of-trust",
    languages: { es: "/wall-of-trust", en: "/en/wall-of-trust", "x-default": "/en/wall-of-trust" },
  },
  openGraph: {
    title: "Wall of trust | Ferran Moreno",
    description: "Selected testimonials in English from Ferran Moreno's clients.",
    url: `${siteUrl}/en/wall-of-trust`,
    siteName: "Ferran Moreno",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wall of trust | Ferran Moreno",
    description: "Selected testimonials in English from Ferran Moreno's clients.",
  },
};

export default function WallOfTrustEnPage() {
  const items = testimonialsFullEn;

  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>

      <header className="sticky top-0 z-30" style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-8 py-5">
          <Link href="/en" className="leading-none">
            <div className="text-[17px] font-semibold tracking-[-0.01em]" style={{ color: "var(--text-main)" }}>Ferran Moreno</div>
            <div className="mt-[5px] text-[10px] uppercase tracking-[0.14em]" style={{ color: "var(--text-secondary)", opacity: 0.7 }}>
              Wall of trust
            </div>
          </Link>
          <nav className="hidden items-center gap-8 md:flex" style={{ color: "var(--text-secondary)" }}>
            <Link href="/en#method" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Method</Link>
            <Link href="/en#cases" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Cases</Link>
            <Link href="/en#who" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Who it&apos;s for</Link>
            <Link href="/en/wall-of-trust" className="text-[11px] uppercase tracking-[0.08em]" style={{ color: "var(--text-main)", textDecoration: "underline", textUnderlineOffset: "4px" }}>Wall of trust</Link>
            <Link href="/en/my-story" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">My story</Link>
            <Link href="/en/blog" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Blog</Link>
            <span style={{ color: "var(--border-subtle)" }}>|</span>
            <Link href="/" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">ES</Link>
          </nav>
        </div>
      </header>

      <main>
        <section style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>
              Wall of trust
            </div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Their words, not mine.
            </h1>
            <p className="mt-6 text-lg leading-8" style={{ color: "var(--text-secondary)" }}>
              A selection of testimonials in English.
            </p>

            <div className="mt-16 columns-1 gap-6 md:columns-2 xl:columns-3 [column-fill:_balance]">
              {items.map((item, i) => (
                <div
                  key={`${item.name}-${i}`}
                  className="mb-6 break-inside-avoid rounded-2xl p-6 shadow-sm"
                  style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}
                >
                  <p>&ldquo;{item.text}&rdquo;</p>
                  <div className="mt-4 text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                    — {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ borderTop: "1px solid var(--border-subtle)" }}>
          <div className="mx-auto max-w-[900px] px-6 py-[100px]">
            <div
              className="grid gap-10 rounded-[2.5rem] p-10 text-white lg:grid-cols-[1fr_auto] lg:items-end lg:p-14"
              style={{ background: "var(--text-main)" }}
            >
              <div>
                <div className="text-sm uppercase tracking-[0.25em] opacity-50">First conversation</div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  If you&apos;ve read this far, you already know enough.<br />Let&apos;s talk.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 opacity-70">
                  In person in Lluçà (Barcelona) or online anywhere in the world.
                </p>
              </div>

              <div className="flex flex-col gap-4 lg:min-w-[260px]">
                <a
                  href="https://wa.me/34679229744?text=Hi%20Ferran%2C"
                  className="rounded-full bg-white px-7 py-3 text-center text-sm font-medium transition hover:opacity-90"
                  style={{ color: "var(--text-main)" }}
                >
                  Start the conversation
                </a>
                <Link
                  href="/en"
                  className="rounded-full px-7 py-3 text-center text-sm font-medium text-white transition hover:opacity-60"
                  style={{ border: "1px solid rgba(255,255,255,0.2)" }}
                >
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
