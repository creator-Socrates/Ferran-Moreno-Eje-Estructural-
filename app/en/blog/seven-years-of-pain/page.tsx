import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";
import { getBlogAlternates } from "@/lib/blog-helpers";

export const metadata: Metadata = {
  title: "Seven years of pain",
  description: "It all started with pain.",
  alternates: getBlogAlternates("en", "seven-years-of-pain"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Seven years of pain"
        description="It all started with pain."
        slug="seven-years-of-pain"
        date="2026-08-18"
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
            Seven years of pain
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              It all started with pain.
            </p>

            <p className="text-[15px] leading-relaxed">
              Not with spirituality.<br />
              Not with personal development.<br />
              Not with therapeutic curiosity.
            </p>

            <p className="text-[15px] leading-relaxed">
              Real pain.
            </p>

            <p className="text-[15px] leading-relaxed">
              At seventeen I injured myself doing taekwondo. What seemed like just another injury turned into seven years of constant pain. Like a knife lodged in my leg.
            </p>

            <p className="text-[15px] leading-relaxed">
              I couldn&apos;t lift a grocery bag.<br />
              I slept badly.<br />
              I lived exhausted.<br />
              My body wouldn&apos;t respond.
            </p>

            <p className="text-[15px] leading-relaxed">
              I went through countless professionals.<br />
              Physiotherapists.<br />
              Orthopedic surgeons.<br />
              Treatments.<br />
              Tests.
            </p>

            <p className="text-[15px] leading-relaxed">
              Nothing really changed.
            </p>

            <p className="text-[15px] leading-relaxed">
              Until one doctor told me something I still remember perfectly:
            </p>

            <p className="text-[15px] leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>
              &quot;I can&apos;t help you. Don&apos;t come back.&quot;
            </p>

            <p className="text-[15px] leading-relaxed">
              Just like that.<br />
              No alternative.<br />
              No direction.<br />
              No hope.
            </p>

            <p className="text-[15px] leading-relaxed">
              My mother had been insisting for over a year that I go see Jonathan Castellà. I never went.
            </p>

            <p className="text-[15px] leading-relaxed">
              Until one Monday morning, after six weeks of Construmat working without a single weekend off, I found myself with a day off and no one to be with. I went to my parents&apos; house but they were at work. My mother, from the office, told me:
            </p>

            <p className="text-[15px] leading-relaxed">
              &quot;Call Josep.&quot;
            </p>

            <p className="text-[15px] leading-relaxed">
              I called expecting he wouldn&apos;t have an opening.
            </p>

            <p className="text-[15px] leading-relaxed">
              He gave me an appointment two hours later.
            </p>

            <p className="text-[15px] leading-relaxed">
              Jonathan received me. Long hair. Heavy metal. He gave me a massage and said:
            </p>

            <p className="text-[15px] leading-relaxed">
              &quot;The muscle is fine. There&apos;s nothing wrong with you.&quot;
            </p>

            <p className="text-[15px] leading-relaxed">
              I thought: right, after all these years here comes the clever one.
            </p>

            <p className="text-[15px] leading-relaxed">
              And then he added:
            </p>

            <p className="text-[15px] leading-relaxed">
              &quot;But now my father is going to come in and do the corrections.&quot;
            </p>

            <p className="text-[15px] leading-relaxed">
              Josep walked in.
            </p>

            <p className="text-[15px] leading-relaxed">
              Zen-like presence. Extremely calm. Unhurried. He looked at me. Did two flexion tests. And told me my hip and sacrum were displaced and that he was going to put them back.
            </p>

            <p className="text-[15px] leading-relaxed">
              I&apos;d had a bad experience with chiropractic before. I was afraid of adjustments. So the first thing I said, with my analytical mind:
            </p>

            <p className="text-[15px] leading-relaxed">
              &quot;Pros and cons of manipulating.&quot;
            </p>

            <p className="text-[15px] leading-relaxed">
              Josep smiled.
            </p>

            <p className="text-[15px] leading-relaxed">
              &quot;Cons: none. Pros: the pain will go away and you&apos;ll feel good.&quot;
            </p>

            <p className="text-[15px] leading-relaxed">
              His answer went right through me.
            </p>

            <p className="text-[15px] leading-relaxed">
              I could see complete certainty in his words.
            </p>

            <p className="text-[15px] leading-relaxed">
              He did the corrections.
            </p>

            <p className="text-[15px] leading-relaxed">
              When he finished, I was crying.
            </p>

            <p className="text-[15px] leading-relaxed">
              Not from sadness. Not exactly from emotion. Tears of relief. I didn&apos;t fully understand what was happening. There was lightness. I felt strange. Like walking on a cloud. Something had changed but I didn&apos;t quite know what.
            </p>

            <p className="text-[15px] leading-relaxed">
              I talked with Josep after the session. Went to my mother&apos;s house. We went out to shop.
            </p>

            <p className="text-[15px] leading-relaxed">
              I instinctively ran up seven flights of stairs without pain.
            </p>

            <p className="text-[15px] leading-relaxed">
              We bought groceries for the whole week. And suddenly I felt like the Hulk. I could carry two eight-liter jugs and all the shopping by myself.
            </p>

            <p className="text-[15px] leading-relaxed">
              For seven years I couldn&apos;t lift a bag without constant pain.
            </p>

            <p className="text-[15px] leading-relaxed">
              I told Josep I would take every course he told me to. That I was going to learn from him.
            </p>

            <p className="text-[15px] leading-relaxed">
              Josep laughed.
            </p>

            <p className="text-[15px] leading-relaxed">
              For four years I went as an apprentice. They shared their knowledge with me. Josep, Carme, Jonathan. They became family.
            </p>

            <p className="text-[15px] leading-relaxed">
              That day completely changed the direction of my life.
            </p>

            <p className="text-[15px] leading-relaxed">
              Because I stopped asking:
            </p>

            <p className="text-[15px] leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>
              &quot;How do I survive this?&quot;
            </p>

            <p className="text-[15px] leading-relaxed">
              And I started asking:
            </p>

            <p className="text-[15px] leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>
              &quot;What just happened here?&quot;
            </p>

            <p className="text-[15px] leading-relaxed">
              My entire search began there.
            </p>

            <p className="text-[15px] leading-relaxed">
              In seven years of pain.
            </p>

            <p className="text-[15px] leading-relaxed">
              And in one session that made me understand the human body works in a completely different way than we are taught.
            </p>

            <p className="text-[15px] leading-relaxed">
              Grateful, always.
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

          <RelatedArticles slug="seven-years-of-pain" lang="en" />
        </article>
      </main>
    </div>
  );
}
