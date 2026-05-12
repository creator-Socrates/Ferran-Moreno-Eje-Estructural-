import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "When technique becomes the limit: why I stopped forcing after 20 years",
  description: "After 20 years learning techniques, I discovered that technique itself can be the biggest obstacle. Observing and allowing produces more change than forcing.",
  alternates: {
    canonical: "/en/blog/when-technique-becomes-the-limit",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="When technique becomes the limit: why I stopped forcing after 20 years"
        description="After 20 years learning techniques, I discovered that technique itself can be the biggest obstacle. Observing and allowing produces more change than forcing."
        slug="when-technique-becomes-the-limit"
        date="2026-08-14"
        tag="Process"
        lang="en"
      />
      <header className="sticky top-0 z-30" style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-8 py-5">
          <Link href="/en" className="leading-none">
            <div className="text-[17px] font-semibold tracking-[-0.01em]" style={{ color: "var(--text-main)" }}>Ferran Moreno</div>
            <div className="mt-[5px] text-[10px] uppercase tracking-[0.14em]" style={{ color: "var(--text-secondary)", opacity: 0.7 }}>
              BODYWORK · REGULATION · ENERGY
            </div>
          </Link>

          <Link href="/" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50 md:hidden" style={{ color: "var(--text-secondary)" }}>ES</Link>

          <nav className="hidden items-center gap-8 md:flex" style={{ color: "var(--text-secondary)" }}>
            <Link href="/en" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Home</Link>
            <Link href="/en/wall-of-trust" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Wall of trust</Link>
            <Link href="/en/my-story" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">My story</Link>
            <Link href="/en/blog" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Blog</Link>
            <a href={contactWhatsApp} target="_blank" rel="noopener noreferrer" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Contact</a>
            <span style={{ color: "var(--border-subtle)" }}>|</span>
            <Link href="/" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">ES</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[700px] px-6 py-24">
        <Link href="/en/blog" className="text-[11px] uppercase tracking-[0.15em] mb-12 inline-block transition hover:opacity-50" style={{ color: "var(--text-secondary)" }}>
          &larr; Blog
        </Link>

        <article>
          <span className="text-[10px] uppercase tracking-[0.15em] mb-4 block" style={{ color: "var(--text-secondary)" }}>
            Process
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            When technique becomes the limit: why I stopped forcing after 20 years
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              I don&apos;t think I want to keep doing sessions the same way. That&apos;s what I told myself. After two decades learning techniques, training across 20 countries, accumulating tools, I felt something I didn&apos;t expect: friction.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The friction of having to do
            </h2>

            <p className="text-[15px] leading-relaxed">
              I anticipate having to do something, and my body creates friction. I have to make them better. I have to make it work. I have to make them change. That urgency to produce a result, to justify the session with a visible effect, was generating exactly the opposite of what I was after: tension.
            </p>

            <p className="text-[15px] leading-relaxed">
              It wasn&apos;t a lack of tools. It was excess. Whenever I discovered a technique I&apos;d dive deep until I realized the technique was limiting me. It happened with Rolfing. It happened with visceral osteopathy. It happened with cranial work. Each system gives you a framework, and that framework eventually becomes a cage.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              I am none of those things
            </h2>

            <p className="text-[15px] leading-relaxed">
              I haven&apos;t been an acupuncturist, I haven&apos;t been an osteopath, I&apos;m not a shaman. I&apos;ve studied all of that. I&apos;ve practiced all of that. But every time someone tried to put a label on me, it felt like the label was shrinking me. Because what I do doesn&apos;t fit in any of those boxes. It&apos;s the sum of everything, filtered through 20 years of direct experience with real bodies.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Allowing instead of forcing
            </h2>

            <p className="text-[15px] leading-relaxed">
              The evolution was learning to allow instead of force. I don&apos;t need to do anything. Be there, feel her, observe, notice behaviors, notice tension, notice axes, notice relationships. And from there the system&apos;s inherent solutions begin to emerge.
            </p>

            <p className="text-[15px] leading-relaxed">
              The body already knows what it needs. My job is not to impose a correction. It&apos;s to create the space for the system to reorganize itself. It looks like less. It&apos;s infinitely more.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              After 20 years accumulating techniques, the most powerful thing I learned was to let go of the need to use them. It&apos;s not passivity. It&apos;s presence without an agenda.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you&apos;re looking for someone who works from listening rather than imposition, write me.
            </p>
            <a
              href={contactWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[11px] uppercase tracking-[0.15em] font-medium transition hover:opacity-50"
              style={{ color: "var(--text-main)" }}
            >
              Write me &rarr;
            </a>
          </div>

          <RelatedArticles slug="when-technique-becomes-the-limit" lang="en" />
        </article>
      </main>
    </div>
  );
}
