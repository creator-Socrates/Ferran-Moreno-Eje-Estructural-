import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";
import { getBlogAlternates } from "@/lib/blog-helpers";

export const metadata: Metadata = {
  title: "The mole: the mental mechanism that blocks your body — Ferran Moreno",
  description: "Your mind analyzes before receiving. Judges before feeling. That mechanism is called the mole, and it's the single biggest obstacle to bodily change.",
  alternates: getBlogAlternates("en", "the-mole-mental-mechanism"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="The mole: the mental mechanism that blocks your body — Ferran Moreno"
        description="Your mind analyzes before receiving. Judges before feeling. That mechanism is called the mole, and it's the single biggest obstacle to bodily change."
        slug="the-mole-mental-mechanism"
        date="2026-06-05"
        tag="Process"
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
            Process
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            The mole: the mental mechanism that blocks your body
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Will Chung called it &ldquo;the mole.&rdquo; That mechanism in the mind that pops up the moment the body is about to have a genuine experience. It analyzes before receiving. Judges before feeling. Says: &ldquo;wait, let me understand this first.&rdquo;
            </p>

            <p className="text-[15px] leading-relaxed">
              And in that moment, the experience is lost.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              You can&apos;t feel and analyze at the same time
            </h2>

            <p className="text-[15px] leading-relaxed">
              Different circuits. When one activates, the other shuts down. Direct sensory perception and cognitive analysis compete for the same resources. If your mind is busy trying to understand what&apos;s happening, your body can&apos;t process what it&apos;s receiving.
            </p>

            <p className="text-[15px] leading-relaxed">
              Rub&eacute;n Torres, a gallery owner in Barcelona, put it this way:
            </p>

            <blockquote className="border-l-2 pl-6 my-6 text-[15px] leading-relaxed" style={{ borderColor: "var(--text-secondary)", color: "var(--text-secondary)" }}>
              &ldquo;To describe the sessions and the results you get with Ferran, new terms would need to be invented. I don&apos;t really know what he does, but it works. Even being a very rational person, the results show up both physically and emotionally. Highly recommended for physical, emotional or work-related blocks.&rdquo;
              <span className="block mt-2 text-[13px]">— Rub&eacute;n Torres, Gallery Owner, Barcelona</span>
            </blockquote>

            <p className="text-[15px] leading-relaxed">
              &ldquo;Even being a very rational person.&rdquo; There it is. The mole was there, but Rub&eacute;n let it sit down. He didn&apos;t suppress it. He just didn&apos;t give it the microphone.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The mole is not the enemy
            </h2>

            <p className="text-[15px] leading-relaxed">
              It&apos;s a survival strategy. The nervous system developed that capacity for rapid analysis to protect you. In a dangerous environment, analyzing before acting saves your life. But in bodywork, that same mechanism becomes the single biggest obstacle to change.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ester Subir&agrave;, a teacher in Llu&ccedil;&agrave;, experienced the other side of it:
            </p>

            <blockquote className="border-l-2 pl-6 my-6 text-[15px] leading-relaxed" style={{ borderColor: "var(--text-secondary)", color: "var(--text-secondary)" }}>
              &ldquo;I can&apos;t explain exactly what Ferran does, but after his sessions my body and mind feel completely different.&rdquo;
              <span className="block mt-2 text-[13px]">— Ester Subir&agrave;, Teacher, Llu&ccedil;&agrave; (Barcelona)</span>
            </blockquote>

            <p className="text-[15px] leading-relaxed">
              She didn&apos;t need to explain it to receive it. That&apos;s the key.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Who changes fastest
            </h2>

            <p className="text-[15px] leading-relaxed">
              The people who change fastest aren&apos;t the smartest. They&apos;re the ones who learn to let the mole sit down. Not suppress it &mdash; that&apos;s just another form of control. Simply not give it the microphone every time it shows up.
            </p>

            <p className="text-[15px] leading-relaxed">
              It&apos;s not easy. Our entire culture rewards intellectual understanding. &ldquo;If I understand it, I control it. If I control it, I&apos;m safe.&rdquo; But the body doesn&apos;t work that way. The body changes through experience, not analysis.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Next time your mind wants to understand before feeling, notice that impulse. That&apos;s the mole. And all it needs is for you not to give it the entire stage.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you recognize this pattern in yourself, write me. It&apos;s more common than you think, and it&apos;s completely workable.
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
          <RelatedArticles slug="the-mole-mental-mechanism" lang="en" />
        </article>
      </main>
    </div>
  );
}
