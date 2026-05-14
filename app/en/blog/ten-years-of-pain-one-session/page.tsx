import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Ten years of pain that resolved in one session",
  description: "At 17, a taekwondo injury left me with a decade of chronic pain. One day, a sacral adjustment changed everything.",
  alternates: {
    canonical: "/en/blog/ten-years-of-pain-one-session",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Ten years of pain that resolved in one session"
        description="At 17, a taekwondo injury left me with a decade of chronic pain. One day, a sacral adjustment changed everything."
        slug="ten-years-of-pain-one-session"
        date="2026-07-17"
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
            Ten years of pain that resolved in one session
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              I was 17 when I injured myself doing taekwondo. What looked like just another injury turned into a decade of chronic pain. I couldn&apos;t lift a water jug. I couldn&apos;t sleep properly. I couldn&apos;t function like a normal person.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The doctor who told me not to come back
            </h2>

            <p className="text-[15px] leading-relaxed">
              I went through every kind of practitioner you can imagine. Physiotherapists, orthopedic surgeons, osteopaths. Nothing worked. Until one doctor looked me in the eye and said: &ldquo;I can&apos;t help you. Don&apos;t come back.&rdquo; Just like that. No alternative, no referral, no hope. Simply: don&apos;t come back.
            </p>

            <p className="text-[15px] leading-relaxed">
              I told my mother: &ldquo;We&apos;re going to find a solution.&rdquo; But inside, something was breaking. There was a moment &mdash; brief but real &mdash; when I didn&apos;t want to keep living. It wasn&apos;t a plan. It was the exhaustion of constant suffering. Of seeing no way out. Of nobody being able to do anything.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Jonathan and Josep
            </h2>

            <p className="text-[15px] leading-relaxed">
              My mother had been insisting for a year that I go see Jonathan Castell&agrave;. Eventually I went. Jonathan did the massage. And his father, Josep, did the corrections. I asked him what the pros and cons were. He answered: &ldquo;Pros: it&apos;ll stop hurting. Cons: there are none.&rdquo;
            </p>

            <p className="text-[15px] leading-relaxed">
              Josep made an adjustment on my sacrum. Something that lasted seconds. No force, no cracking, no drama. And when I got off the table, I was crying. Not from pain. From bewilderment. I felt straight. Upright. As if my body had returned to a shape I no longer remembered. Something had shifted. It was like a stillness that had never been there before.
            </p>

            <p className="text-[15px] leading-relaxed">
              It took my brain six hours to register what had happened: for the first time in seven years, I had no pain. My body wasn&apos;t collapsed. I had strength. I had direction.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The Hulk on the stairs
            </h2>

            <p className="text-[15px] leading-relaxed">
              That same day I walked up seven flights of stairs without pain. Seven flights. Me, the guy who couldn&apos;t lift a water jug. I went to the supermarket and carried all the shopping bags plus two jugs of water. I felt like the Hulk. An absurd amount of strength. As if someone had given me back a body I didn&apos;t know I had.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Ten years of pain. One session. That day changed my life. And that day I decided I wanted to understand what had happened on that table. That search still hasn&apos;t ended.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you&apos;ve been living with pain for years and nobody has given you an answer, write me. Sometimes change is closer than you think.
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

          <RelatedArticles slug="ten-years-of-pain-one-session" lang="en" />
        </article>
      </main>
    </div>
  );
}
