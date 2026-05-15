import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Roncesvalles to die, A Coruna to live",
  description: "After a stage that pushed me to the limit, I received a clear sign that I had to walk the Camino de Santiago.",
  alternates: {
    canonical: "/en/blog/roncesvalles-to-die-coruna-to-live",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Roncesvalles to die, A Coruna to live"
        description="After a stage that pushed me to the limit, I received a clear sign that I had to walk the Camino de Santiago."
        slug="roncesvalles-to-die-coruna-to-live"
        date="2026-09-01"
        tag="My story"
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
            My story
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Roncesvalles to die, A Coru&ntilde;a to live
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              After a stage that pushed me to the limit, I received a clear sign that I had to walk the Camino de Santiago.
            </p>

            <p className="text-[15px] leading-relaxed">
              Not as tourism. Not as tradition.
            </p>

            <p className="text-[15px] leading-relaxed">
              As closure.
            </p>

            <p className="text-[15px] leading-relaxed">
              I got rid of everything I could. Gave the laptop to a friend. Left clothes behind. The money I tried to transfer didn&apos;t go through because the account had been closed.
            </p>

            <p className="text-[15px] leading-relaxed">
              I started walking with the bare minimum.
            </p>

            <p className="text-[15px] leading-relaxed">
              Roncesvalles was to die. A Coru&ntilde;a was to live.
            </p>

            <p className="text-[15px] leading-relaxed">
              That was the direction.
            </p>

            <p className="text-[15px] leading-relaxed">
              And I walked.
            </p>

            <p className="text-[15px] leading-relaxed">
              But when I arrived in Santiago, something happened that I didn&apos;t expect.
            </p>

            <p className="text-[15px] leading-relaxed">
              I fell to my knees.
            </p>

            <p className="text-[15px] leading-relaxed">
              And suddenly there was a closure. Something that had been open slammed shut. I stopped being a pilgrim. I no longer had to go anywhere else.
            </p>

            <p className="text-[15px] leading-relaxed">
              I didn&apos;t need to reach A Coru&ntilde;a.
            </p>

            <p className="text-[15px] leading-relaxed">
              The process completed itself earlier than expected.
            </p>

            <p className="text-[15px] leading-relaxed">
              Not because I decided it. Because the body decided that was where it ended.
            </p>

            <p className="text-[15px] leading-relaxed">
              I went back to my parents&apos; house. They always kept the door open for me. All twenty times I went home to start my life over.
            </p>

            <p className="text-[15px] leading-relaxed">
              In Barcelona, my first attempt at getting clients was going to a butcher shop. My mother had told me the butcher was interested. When I told her the price, she practically threw the flyer back in my face.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s how things begin.
            </p>

            <p className="text-[15px] leading-relaxed">
              Not with applause.
            </p>

            <p className="text-[15px] leading-relaxed">
              With a flyer on the floor and everything still to build.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If something you&apos;ve read here resonates, write me.
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

          <RelatedArticles slug="roncesvalles-to-die-coruna-to-live" lang="en" />
        </article>
      </main>
    </div>
  );
}
