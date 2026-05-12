import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Does Rolfing hurt? The truth about deep bodywork",
  description: "Rolfing's painful reputation has a history. Good Rolfing doesn't have to hurt.",
  alternates: {
    canonical: "/en/blog/does-rolfing-hurt-the-truth",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Does Rolfing hurt? The truth about deep bodywork"
        description="Rolfing's painful reputation has a history. Good Rolfing doesn't have to hurt."
        slug="does-rolfing-hurt-the-truth"
        date="2026-05-09"
        tag="Rolfing"
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
            Rolfing
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Does Rolfing hurt? The truth about deep bodywork
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              If someone has told you about Rolfing, they probably told you it hurts. That&apos;s the reputation. And that reputation has a history.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Where the painful reputation comes from
            </h2>

            <p className="text-[15px] leading-relaxed">
              Jan Sultan, one of the most senior Rolfers in the world, explains it like this: in the United States, early practitioners worked with elbows and extreme pressure. Rolfing became associated with an intense, sometimes aggressive experience. That image stuck.
            </p>

            <p className="text-[15px] leading-relaxed">
              But in Europe the story was different. European Rolfing integrated early on the influence of French osteopathy: Jean Pierre Barral, Alain Croibier, visceral and neural work. It also incorporated Peter Levine&apos;s Somatic Experiencing, which brought the understanding of the nervous system and trauma. The result was a Rolfing that is far more precise, more subtle, more respectful of the system.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              My training
            </h2>

            <p className="text-[15px] leading-relaxed">
              I trained at the European Rolfing School in Munich. Then I did every course from the Group of Munich: listening techniques, visceral manipulation, peripheral nerves, thorax, urogenital work. With Barral, Croibier, Didier Prat and Peter Schwind I learned to work with a precision that has nothing to do with force.
            </p>

            <p className="text-[15px] leading-relaxed">
              In my work, the intention is never to generate pain. It&apos;s to organize, release, restore coherence to the body. There may be intensity. There may be strong sensations. But intensity is not invasion.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Intensity is not invasion
            </h2>

            <p className="text-[15px] leading-relaxed">
              There&apos;s a fundamental difference between work that is intense because it&apos;s reaching something deep and work that is painful because it&apos;s forcing. The first is therapeutic. The second is counterproductive. When you force, the body defends. It contracts. It closes. You get the opposite of what you&apos;re after.
            </p>

            <p className="text-[15px] leading-relaxed">
              Precision always beats force. A precise contact, with the right intention, in the exact location, produces more change than ten minutes of brute pressure. The body doesn&apos;t need you to crush it. It needs you to listen.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              If your Rolfing experience was too much
            </h2>

            <p className="text-[15px] leading-relaxed">
              If someone did Rolfing on you and the experience was excessive, invasive, or disproportionately painful, it wasn&apos;t the Rolfing. It was the practitioner. The tool is not to blame for the person misusing it.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Good Rolfing doesn&apos;t have to hurt. It can be intense. Never invasive. And the difference comes down to who&apos;s doing it.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you&apos;re curious about Rolfing but held back by what you&apos;ve heard, write me. I&apos;ll tell you how I work.
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
          <RelatedArticles slug="does-rolfing-hurt-the-truth" lang="en" />
        </article>
      </main>
    </div>
  );
}
