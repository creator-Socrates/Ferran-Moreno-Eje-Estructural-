import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Roncesvalles to die, A Coruna to live",
  description: "After a deep crisis I received the instruction to walk the Camino de Santiago. I gave everything away and started walking.",
  alternates: {
    canonical: "/en/blog/roncesvalles-to-die-coruna-to-live",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Roncesvalles to die, A Coruna to live"
        description="After a deep crisis I received the instruction to walk the Camino de Santiago. I gave everything away and started walking."
        slug="roncesvalles-to-die-coruna-to-live"
        date="2026-07-31"
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
              There was a relationship that opened something dark in me. Something I didn&apos;t know was there. I started hiding the kitchen knives. I couldn&apos;t sleep. I slept with the Bible in one hand and incense burning. It wasn&apos;t religion. It was survival.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The church in Malaysia
            </h2>

            <p className="text-[15px] leading-relaxed">
              I was in Malaysia when I walked into a church. I don&apos;t know why I went in. I felt a golden energy touch me and everything opened. There is no other way to describe it. It was physical, it was emotional, it was something that had no name. And in that moment I received the instruction &mdash; clear, without doubt &mdash; that I had to walk the Camino de Santiago.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Give everything away and begin
            </h2>

            <p className="text-[15px] leading-relaxed">
              I gave the laptop to Xavier. I gave away my clothes. I gave away the money I had left. I kept the bare minimum. And there I started. Roncesvalles. The first step. And every step after that was a step further from what I had been and a step closer to something I still didn&apos;t know what it was.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Santiago: the closure
            </h2>

            <p className="text-[15px] leading-relaxed">
              When I arrived in Santiago, I fell to my knees. And suddenly it was as if something closed. Something that had been open shut all at once, and then I stopped being a pilgrim. I didn&apos;t need to continue to A Coru&ntilde;a. I didn&apos;t need anything more. What had to happen had happened.
            </p>

            <p className="text-[15px] leading-relaxed">
              Roncesvalles was to die and A Coru&ntilde;a was to live. But the arrival point was Santiago. Something ended there. Something else began.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Starting over, again
            </h2>

            <p className="text-[15px] leading-relaxed">
              I went back to my parents&apos; house. They always kept the door open for me, all twenty times I went home to start my life over. No judgment. No conditions. The door open.
            </p>

            <p className="text-[15px] leading-relaxed">
              My first days in Barcelona looking for clients: I printed flyers, went door to door. A butcher took the flyer, looked at it, and threw it back in my face. That&apos;s how I started.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              But I was no longer the same person who had left Roncesvalles. What died on the Camino needed to die. And what remained was enough to build everything that came after.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you feel something needs to close before the next thing can begin, write me.
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
