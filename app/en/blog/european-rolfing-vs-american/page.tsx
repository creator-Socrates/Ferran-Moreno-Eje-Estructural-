import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";

export const metadata: Metadata = {
  title: "European Rolfing vs American: two schools, two outcomes | Ferran Moreno",
  description: "Two lineages from the same source. European Rolfing integrated French osteopathy and Somatic Experiencing. The American school stayed closer to the original. What it means for you.",
  alternates: {
    canonical: "/en/blog/european-rolfing-vs-american",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
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
            <Link href="/en#method" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Method</Link>
            <Link href="/en#cases" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Cases</Link>
            <Link href="/en#who" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Who it&apos;s for</Link>
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
            European Rolfing vs American: two schools, two outcomes
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Rolfing was born in the United States with Ida Rolf. But from there it split into two very different lineages. If you&apos;re looking for a Rolfer, understanding this difference can save you a bad experience.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The American school: faithful to the origin
            </h2>

            <p className="text-[15px] leading-relaxed">
              American Rolfing stayed closer to Ida Rolf&apos;s original work. Structural, direct, sometimes intense to the point of being aggressive. The first Rolfers worked with elbows, with sustained pressure, with the idea that fascia needed to be &quot;reorganized&quot; by force. It worked, but at a cost that wasn&apos;t always necessary.
            </p>

            <p className="text-[15px] leading-relaxed">
              That school produced very competent practitioners. But it also created the reputation that Rolfing hurts. Because in many cases, it did.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The European school: evolution and integration
            </h2>

            <p className="text-[15px] leading-relaxed">
              In Europe, Rolfing took a different path. The Munich school integrated early on the French osteopathy of Jean Pierre Barral and Alain Croibier: visceral manipulation, neural work, tissue listening. Techniques that allow surgical precision without the need for force.
            </p>

            <p className="text-[15px] leading-relaxed">
              It also incorporated Peter Levine&apos;s Somatic Experiencing, which brought something fundamental: the understanding that you cannot reorganize a body without accounting for its nervous system. That if the system is in defense mode, any structural intervention will meet resistance.
            </p>

            <p className="text-[15px] leading-relaxed">
              The result is a Rolfing that is more precise, more subtle, and more respectful of the body&apos;s own rhythm. Not softer because it&apos;s weak. More subtle because it&apos;s smarter.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              It&apos;s not about better or worse
            </h2>

            <p className="text-[15px] leading-relaxed">
              It&apos;s not that one school is good and the other bad. It&apos;s that the field evolved. Some practitioners evolved with it. Others stayed where they were. That happens in every discipline.
            </p>

            <p className="text-[15px] leading-relaxed">
              I trained in the European school, in Munich. Then I did every course from the Group of Munich with Barral, Croibier, Didier Prat and Peter Schwind. It wasn&apos;t an ideological choice. It was a practical one: I wanted the tools that delivered the best results at the lowest cost to the patient.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              What matters is not the label. What matters is results. And results depend on who is working, how they listen, and what tools they have.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you want to know how I work and what to expect from a session, write me.
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
        </article>
      </main>
    </div>
  );
}
