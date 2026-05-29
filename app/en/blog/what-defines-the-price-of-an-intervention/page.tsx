import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp, siteUrl } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";
import { getBlogAlternates } from "@/lib/blog-helpers";

export const metadata: Metadata = {
  title: "What defines the price of an intervention | Ferran Moreno",
  description:
    "Not every case requires the same level of reading, preparation, and intervention. This is how the price of an intervention is defined.",
  alternates: getBlogAlternates("en", "what-defines-the-price-of-an-intervention"),
  openGraph: {
    title: "What defines the price of an intervention",
    description:
      "Not every case requires the same level of reading, preparation, and intervention. This is how the price of an intervention is defined.",
    url: `${siteUrl}/en/blog/what-defines-the-price-of-an-intervention`,
    siteName: "Ferran Moreno",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "What defines the price of an intervention",
    description:
      "Not every case requires the same level of reading, preparation, and intervention. This is how the price of an intervention is defined.",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="What defines the price of an intervention"
        description="Not every case requires the same level of reading, preparation, and intervention. This is how the price of an intervention is defined."
        slug="what-defines-the-price-of-an-intervention"
        date="2026-05-27"
        tag="Process"
        lang="en"
      />
      <header className="sticky top-0 z-30" style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-8 py-5">
          <Link href="/en" className="leading-none">
            <div className="text-[17px] font-semibold tracking-[-0.01em]" style={{ color: "var(--text-main)" }}>
              Ferran Moreno
            </div>
            <div className="mt-[5px] text-[10px] uppercase tracking-[0.14em]" style={{ color: "var(--text-secondary)", opacity: 0.7 }}>
              BODYWORK · REGULATION · ENERGY
            </div>
          </Link>
          <nav className="hidden items-center gap-8 md:flex" style={{ color: "var(--text-secondary)" }}>
            <Link href="/en#method" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Method</Link>
            <Link href="/en#cases" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Cases</Link>
            <Link href="/en#who" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Who it&apos;s for</Link>
            <Link href="/en/wall-of-trust" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Testimonials</Link>
            <Link href="/en/my-story" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">My story</Link>
            <Link href="/en/blog" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Blog</Link>
            <Link href="/en/contact" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Contact</Link>
            <span style={{ color: "var(--border-subtle)" }}>|</span>
            <Link href="/" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">ES</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[700px] px-6 py-24">
        <Link href="/en/blog" className="mb-12 inline-block text-[11px] uppercase tracking-[0.15em] transition hover:opacity-50" style={{ color: "var(--text-secondary)" }}>
          &larr; Blog
        </Link>

        <article>
          <span className="mb-4 block text-[10px] uppercase tracking-[0.15em]" style={{ color: "var(--text-secondary)" }}>
            Process
          </span>

          <h1 className="mb-10 text-3xl font-semibold tracking-tight leading-[1.15] lg:text-4xl">
            What defines the price of an intervention
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              A standard session starts from a base price of €180 per hour of work. But not every case requires the same level of reading, preparation, and intervention.
            </p>
            <p className="text-[15px] leading-relaxed">
              Some cases are straightforward. The body responds quickly and the work fits within a standard session. Others require more reading, more preparation, more investigation into the origin, and more energy to intervene with precision.
            </p>
            <p className="text-[15px] leading-relaxed">
              When someone arrives after years of not feeling well, after trying many things, or after not being able to turn things around, this is not simply about doing a session.
            </p>
            <p className="text-[15px] leading-relaxed font-medium">
              It&apos;s about reading a complex system.
            </p>
            <p className="text-[15px] leading-relaxed">
              I need to understand what is sustaining the problem, what compensations the body has created, where the origin may be, and what level of intervention can produce a real shift.
            </p>
            <p className="text-[15px] leading-relaxed">
              That&apos;s why, depending on the case, an intervention may be €180, €360, or more.
            </p>
            <p className="text-[15px] leading-relaxed">
              The price is not defined by a label. It is defined by the level of work the case requires.
            </p>
            <p className="text-[15px] leading-relaxed">
              Before we begin, I&apos;ll tell you clearly what format I consider appropriate. If it fits, we work. If it doesn&apos;t, that&apos;s fine.
            </p>
            <p className="text-[15px] leading-relaxed">
              What I don&apos;t do is discuss price during the session. When the focus shifts into negotiation, the work loses precision.
            </p>
            <p className="text-[15px] leading-relaxed font-medium">
              I&apos;m not negotiating an hour.
            </p>
            <p className="text-[15px] leading-relaxed font-medium">
              I&apos;m defining the level of intervention your case requires.
            </p>
            <p className="text-[15px] leading-relaxed font-medium">
              If the case asks for more, the price does too.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="mb-6 text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              If you want to know what format fits your case, write to me.
            </p>
            <a
              href={contactWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[11px] uppercase tracking-[0.15em] font-medium transition hover:opacity-50"
              style={{ color: "var(--text-main)" }}
            >
              Write to me &rarr;
            </a>
          </div>

          <RelatedArticles slug="what-defines-the-price-of-an-intervention" lang="en" />
        </article>
      </main>
    </div>
  );
}
