import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp, siteUrl } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";
import { getBlogAlternates } from "@/lib/blog-helpers";

export const metadata: Metadata = {
  title: "You don't have to be in crisis to come | Ferran Moreno",
  description:
    "A crisis can open the door. But the finest work usually begins when the system is no longer busy putting out a fire.",
  alternates: getBlogAlternates("en", "you-dont-have-to-be-in-crisis-to-come"),
  openGraph: {
    title: "You don't have to be in crisis to come",
    description:
      "A crisis can open the door. But the finest work usually begins when the system is no longer busy putting out a fire.",
    url: `${siteUrl}/en/blog/you-dont-have-to-be-in-crisis-to-come`,
    siteName: "Ferran Moreno",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "You don't have to be in crisis to come",
    description:
      "A crisis can open the door. But the finest work usually begins when the system is no longer busy putting out a fire.",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="You don't have to be in crisis to come"
        description="A crisis can open the door. But the finest work usually begins when the system is no longer busy putting out a fire."
        slug="you-dont-have-to-be-in-crisis-to-come"
        date="2026-05-28"
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
            <Link href="/en#who" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Who it's for</Link>
            <Link href="/en/wall-of-trust" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Wall of trust</Link>
            <Link href="/en/my-story" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">My story</Link>
            <Link href="/en/blog" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Blog</Link>
            <a
              href={contactWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50"
            >
              Contact
            </a>
            <span style={{ color: "var(--border-subtle)" }}>|</span>
            <Link href="/" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">ES</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[700px] px-6 py-24">
        <Link
          href="/en/blog"
          className="mb-12 inline-block text-[11px] uppercase tracking-[0.15em] transition hover:opacity-50"
          style={{ color: "var(--text-secondary)" }}
        >
          &larr; Blog
        </Link>

        <article>
          <span className="mb-4 block text-[10px] uppercase tracking-[0.15em]" style={{ color: "var(--text-secondary)" }}>
            Process
          </span>

          <h1 className="mb-10 text-3xl font-semibold tracking-tight leading-[1.15] lg:text-4xl">
            You don&apos;t have to be in crisis to come
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Most people arrive when something already hurts, locks up, or stops carrying them. That makes sense. When the body shouts, it finally gets heard.
            </p>

            <p className="text-[15px] leading-relaxed">
              And yes, I work there too. A crisis matters. Sometimes we need to relieve, restore range, lower noise, and contain what is urgent.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              But crisis is not the only moment when this work makes sense.
            </p>

            <p className="text-[15px] leading-relaxed">
              In fact, the finest work often begins when the system is no longer busy putting out a fire. When there is more margin. When the body stops doing the minimum to survive and starts showing how it is actually organized.
            </p>

            <p className="text-[15px] leading-relaxed">
              If we only work when something fails, we usually stay in emergency logic: pain, session, relief, back to life, new pain.
            </p>

            <p className="text-[15px] leading-relaxed">
              That model can help. But it rarely reorganizes the pattern that has been sustaining the problem for years.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              A session can open something. A process can reorganize it.
            </p>

            <p className="text-[15px] leading-relaxed">
              When the system is not locked in alarm, it becomes easier to read what it compensates for, what it protects, what it repeats, and what has to change so it does not go back to the same place.
            </p>

            <p className="text-[15px] leading-relaxed">
              That is why you do not have to wait for a major crisis to come. Sometimes the best moment is just before the body has to ask for help by shouting again.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              The goal is not to spend your life putting out fires.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              The goal is for the system to stop living so close to them.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="mb-6 text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              If you want to see whether your case needs containment, process, or simply a clear first reading, write me.
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

          <RelatedArticles slug="you-dont-have-to-be-in-crisis-to-come" lang="en" />
        </article>
      </main>
    </div>
  );
}
