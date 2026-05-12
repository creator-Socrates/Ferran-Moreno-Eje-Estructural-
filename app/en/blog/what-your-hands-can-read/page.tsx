import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "What your hands can read",
  description: "Trained hands detect what machines cannot see. Thermal scanning, visceral palpation, manual diagnosis: the craft of listening with your hands.",
  alternates: {
    canonical: "/en/blog/what-your-hands-can-read",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="What your hands can read"
        description="Trained hands detect what machines cannot see. Thermal scanning, visceral palpation, manual diagnosis: the craft of listening with your hands."
        slug="what-your-hands-can-read"
        date="2026-08-11"
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
            What your hands can read
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              During my training I was taught techniques to detect what&apos;s happening in the body without needing a machine. Hands, when properly trained, are an extraordinarily precise diagnostic instrument. They don&apos;t replace medicine. They complement it.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The three-point scan
            </h2>

            <p className="text-[15px] leading-relaxed">
              The first thing I learned was a simple scan: cranium, sternum, abdomen. Three points. Place your hand on the sternum and feel where the tensions lead. Toward the lung, the liver, the spleen, the esophagus. The body has a map of tensions that hands can read if you know what you&apos;re looking for.
            </p>

            <p className="text-[15px] leading-relaxed">
              It&apos;s not intuition. It&apos;s training. Thousands of hours of practice until your hands distinguish densities, temperatures, restrictions, directions of tension. What feels all the same at first becomes legible information over time.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Thermal diagnosis
            </h2>

            <p className="text-[15px] leading-relaxed">
              One of the most useful techniques is the thermal scan. You pass the palm of your hand a few inches from the body, without touching, moving across the surface. When there&apos;s an infection or an injury, the body raises the temperature in that area. Trained hands detect differences of fractions of a degree.
            </p>

            <p className="text-[15px] leading-relaxed">
              Jean-Pierre, one of my teachers, detected kidney stones in a patient through thermal palpation. He sent him to the emergency room. The ultrasound confirmed exactly what his hands had read. It&apos;s not magic. It&apos;s craft.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Practicing at home
            </h2>

            <p className="text-[15px] leading-relaxed">
              My mother was the first one to volunteer for every experiment. When I was learning, I practiced every new technique on her. Thermal scanning, visceral palpation, cranial listening. You need someone who trusts you and lets you make mistakes. That&apos;s how you learn this craft.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Always alongside the medical system
            </h2>

            <p className="text-[15px] leading-relaxed font-medium">
              A mistake can carry a very high cost. That&apos;s why hands don&apos;t replace medical tests. They complement them. When I detect something that doesn&apos;t add up, I refer out. Always. Manual work is powerful, but professional humility is non-negotiable.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you want to know what quality manual work can detect, write me. I&apos;ll explain what hands can read in your case.
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

          <RelatedArticles slug="what-your-hands-can-read" lang="en" />
        </article>
      </main>
    </div>
  );
}
