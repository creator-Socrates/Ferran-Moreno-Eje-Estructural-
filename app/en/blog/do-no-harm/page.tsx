import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { getBlogAlternates } from "@/lib/blog-helpers";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "First, do no harm",
  description: "The first rule of bodywork is not written in any book. It is not taught in any school. But it changes everything.",
  alternates: getBlogAlternates("en", "do-no-harm"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="First, do no harm"
        description="The first rule of bodywork is not written in any book. It is not taught in any school. But it changes everything."
        slug="do-no-harm"
        date="2026-06-05"
        tag="Foundations"
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
            Foundations
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            First, do no harm
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              The first rule of bodywork is not written in any book.
            </p>

            <p className="text-[15px] leading-relaxed">
              It is not taught in any school.
            </p>

            <p className="text-[15px] leading-relaxed">
              But it changes everything:
            </p>

            <p className="text-[15px] leading-relaxed">
              Do no harm.
            </p>

            <p className="text-[15px] leading-relaxed">
              When I started my Rolfing training, one of the requirements was to receive the ten sessions from a practitioner before entering the school.
            </p>

            <p className="text-[15px] leading-relaxed">
              Two friends of mine from Southeast Asia went to do them in Singapore.
            </p>

            <p className="text-[15px] leading-relaxed">
              The practitioner used his elbow as his main tool.
            </p>

            <p className="text-[15px] leading-relaxed">
              At full force.
            </p>

            <p className="text-[15px] leading-relaxed">
              On the head.
            </p>

            <p className="text-[15px] leading-relaxed">
              On the pubis.
            </p>

            <p className="text-[15px] leading-relaxed">
              The experience was traumatic. Invasive. It caused them injuries.
            </p>

            <p className="text-[15px] leading-relaxed">
              It is not that Rolfing is like that.
            </p>

            <p className="text-[15px] leading-relaxed">
              It is that that practitioner worked like that.
            </p>

            <p className="text-[15px] leading-relaxed">
              A fellow Rolfer spoke with Jan Sultan, trained directly by Ida Rolf. He explained that in the United States there had been confusion for years about whether certain types of touch could be interpreted as harassment.
            </p>

            <p className="text-[15px] leading-relaxed">
              To avoid misunderstandings, many professionals began working with heavy pressure.
            </p>

            <p className="text-[15px] leading-relaxed">
              And that is partly how the reputation of &ldquo;painful Rolfing&rdquo; was born.
            </p>

            <p className="text-[15px] leading-relaxed">
              In Europe the story was different.
            </p>

            <p className="text-[15px] leading-relaxed">
              Here, subtlety was integrated earlier.
            </p>

            <p className="text-[15px] leading-relaxed">
              The French osteopathy of Jean-Pierre Barral and Alain Croibier.
            </p>

            <p className="text-[15px] leading-relaxed">
              Peter Levine&apos;s Somatic Experiencing.
            </p>

            <p className="text-[15px] leading-relaxed">
              Working with the nervous system.
            </p>

            <p className="text-[15px] leading-relaxed">
              The result was a more precise, more subtle and more respectful form of Rolfing.
            </p>

            <p className="text-[15px] leading-relaxed">
              I trained at the European Rolfing School in Munich. I completed all the courses from the Group of Munich: listening techniques, visceral manipulation, peripheral nerves, thorax. With Barral, Croibier, Didier Prat and Peter Schwind.
            </p>

            <p className="text-[15px] leading-relaxed">
              In my work, the intention is never to generate pain.
            </p>

            <p className="text-[15px] leading-relaxed">
              It is to organize.<br />
              To release.<br />
              To restore coherence to the body.
            </p>

            <p className="text-[15px] leading-relaxed">
              There can be intensity. There can be strong sensations.
            </p>

            <p className="text-[15px] leading-relaxed">
              But intensity is not invasion.
            </p>

            <p className="text-[15px] leading-relaxed">
              The difference is simple.
            </p>

            <p className="text-[15px] leading-relaxed">
              When you force, the body defends itself.<br />
              It contracts.<br />
              It closes.<br />
              You achieve the opposite of what you were looking for.
            </p>

            <p className="text-[15px] leading-relaxed">
              When you listen, the body opens.
            </p>

            <p className="text-[15px] leading-relaxed">
              A precise touch, with the right intention, in the exact place, generates more change than ten minutes of brute pressure.
            </p>

            <p className="text-[15px] leading-relaxed">
              The body does not need to be crushed.
            </p>

            <p className="text-[15px] leading-relaxed">
              It needs to be heard.
            </p>

            <p className="text-[15px] leading-relaxed">
              Sometimes people would come from the United States to my practice asking for a very hard massage.
            </p>

            <p className="text-[15px] leading-relaxed">
              Something I do not practice.
            </p>

            <p className="text-[15px] leading-relaxed">
              If you are looking for that style, my approach is not the right one for you.
            </p>

            <p className="text-[15px] leading-relaxed">
              Precision always wins over force.
            </p>

            <p className="text-[15px] leading-relaxed">
              And the first rule &mdash; the one not written anywhere but which holds everything else together &mdash; is very simple:
            </p>

            <p className="text-[15px] leading-relaxed">
              Do no harm.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If something you&apos;ve read resonates, write me.
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
          <RelatedArticles slug="do-no-harm" lang="en" />
        </article>
      </main>
    </div>
  );
}
