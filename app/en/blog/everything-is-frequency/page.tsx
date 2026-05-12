import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Everything is frequency: the teachers who taught me to feel",
  description: "A map of 20 years of training. Each teacher corrected something the previous one left incomplete. The result is not a method — it's a toolbox.",
  alternates: {
    canonical: "/en/blog/everything-is-frequency",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Everything is frequency: the teachers who taught me to feel"
        description="A map of 20 years of training. Each teacher corrected something the previous one left incomplete. The result is not a method — it's a toolbox."
        slug="everything-is-frequency"
        date="2026-10-09"
        tag="Training"
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
            Training
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Everything is frequency: the teachers who taught me to feel
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              After 7 years of not being able to find a solution to my own injury, discovering the sheer number of tools available in this world was extraordinary. It wasn&apos;t a linear path. It was a search in which each teacher gave me something the previous one couldn&apos;t. And each one corrected something the previous one had left incomplete.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The beginning: silence and breath
            </h2>

            <p className="text-[15px] leading-relaxed">
              It all started in a public library as a child. I found a book on zazen and Buddhism. Nobody recommended it. I simply picked it up and started sitting. There I learned something I still use: that silence is not absence. It&apos;s the space where everything organizes itself.
            </p>

            <p className="text-[15px] leading-relaxed">
              Then came Chi Kung with an Irish ex-military man in Cambodia. A man who had been through war and found in energy what brute force couldn&apos;t give him. In Kuala Lumpur, yoga. Each place added a layer.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The ones who changed the structure
            </h2>

            <p className="text-[15px] leading-relaxed">
              Will Chung taught me martial arts, movement and mind. With him I understood that the body doesn&apos;t move from the muscles but from intention. Peter Schwind and Christoph Sommer trained me in Rolfing in Munich. With them I learned to feel the layers of the body &mdash; skin, fascia, muscle, viscera, bone &mdash; and to distinguish which layer needs attention and which doesn&apos;t.
            </p>

            <p className="text-[15px] leading-relaxed">
              Jean Pierre Barral was another level. Visceral osteopathy. Organs, emotions, perception. With Barral I understood that a liver can generate shoulder pain, that an intestine can block a lumbar, that the body is a system where everything is connected to everything.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The anchor
            </h2>

            <p className="text-[15px] leading-relaxed">
              And then Reyes &mdash; Rai Sromani. She arrived when I was flying. Too much perception, too much openness, too little grounding. She taught me to come down. To be here. That sensitivity without earth is instability, not virtue.
            </p>

            <p className="text-[15px] leading-relaxed">
              Each teacher corrected something from the previous one. The one who taught me to feel didn&apos;t teach me to land. The one who taught me structure didn&apos;t teach me energy. The one who taught me energy didn&apos;t teach me boundaries. Real training isn&apos;t a straight line. It&apos;s a spiral where each turn integrates what was missing.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Everything is frequency. And when you understand it that way, it makes more sense. What I offer is not a method. It&apos;s a toolbox built over two decades of searching across more than 20 countries. Each tool arrived because I needed it. And each one stayed because it works.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you want to know which tool your body needs right now, write me.
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

          <RelatedArticles slug="everything-is-frequency" lang="en" />
        </article>
      </main>
    </div>
  );
}
