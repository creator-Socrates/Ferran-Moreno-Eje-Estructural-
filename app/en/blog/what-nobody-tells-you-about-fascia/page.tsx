import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";
import { getBlogAlternates } from "@/lib/blog-helpers";

export const metadata: Metadata = {
  title: "What nobody tells you about fascia",
  description: "The fascia you see in textbooks is dead tissue. Real fascia is a living, transparent fluid that constantly reorganizes itself.",
  alternates: getBlogAlternates("en", "what-nobody-tells-you-about-fascia"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="What nobody tells you about fascia"
        description="The fascia you see in textbooks is dead tissue. Real fascia is a living, transparent fluid that constantly reorganizes itself."
        slug="what-nobody-tells-you-about-fascia"
        date="2026-08-04"
        tag="Bodywork"
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
            Bodywork
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            What nobody tells you about fascia
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Most people who talk about fascia don&apos;t actually know what it is. That&apos;s not a provocation. It&apos;s the consequence of a historical error that nobody has bothered to correct.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Anatomy was studied on cadavers
            </h2>

            <p className="text-[15px] leading-relaxed">
              When the first anatomical dissections were performed, the bodies were dry. Dead. Preserved in formaldehyde. The fascia those anatomists saw was a dry, fibrous, whitish tissue. The leftover material once you removed muscles, bones and organs. Fascia was literally what got in the way.
            </p>

            <p className="text-[15px] leading-relaxed">
              That image stuck. And from it comes nearly everything taught today in physiotherapy schools, yoga trainings, Pilates certifications: fascia as a rigid wrapping that needs to be stretched, broken or released with foam rollers.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              What Chinese medicine already knew 4,000 years ago
            </h2>

            <p className="text-[15px] leading-relaxed">
              Classical Chinese medicine texts described a transparent fluid that connected all tissues in the body and carried chi. They weren&apos;t talking about dry tendons or fibrous sheets. They were describing something alive, fluid, that served as a transport medium for vital energy. Four thousand years ago they already had a more accurate description of fascia than most 20th-century anatomy textbooks.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Guimberteau filmed it in 2003
            </h2>

            <p className="text-[15px] leading-relaxed">
              Jean-Claude Guimberteau, a French hand surgeon, did something nobody had done before: he placed an endoscopic camera under the skin of a living patient during surgery. What he filmed changed everything.
            </p>

            <p className="text-[15px] leading-relaxed">
              Fascia wasn&apos;t a dry wrapping. It was a transparent, luminous fluid that moved, reorganized and adapted in real time. A living, three-dimensional network connecting absolutely everything. Fascia is something alive, with the capacity to constantly reorganize itself.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Why this matters
            </h2>

            <p className="text-[15px] leading-relaxed">
              If you work with a dead-fascia model, your solutions will be mechanical: stretch, press, break adhesions. If you understand that fascia is a living system, your approach changes radically. You stop forcing. You start a dialogue. You stop breaking. You reorganize.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Most physios, osteopaths and yoga practitioners still talk about fascia based on cadavers. Real fascia is visible, material, and alive. And when you touch it with the right intention, it responds.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you want to understand how I work with living fascia, write me. I&apos;ll tell you what a session looks like.
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

          <RelatedArticles slug="what-nobody-tells-you-about-fascia" lang="en" />
        </article>
      </main>
    </div>
  );
}
