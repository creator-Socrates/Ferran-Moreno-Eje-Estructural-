import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Your body isn't broken. It's compensating.",
  description: "When the body has been compensating for years, more technique won't fix it.",
  alternates: {
    canonical: "/en/blog/your-body-isnt-broken-its-compensating",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Your body isn't broken. It's compensating."
        description="When the body has been compensating for years, more technique won't fix it."
        slug="your-body-isnt-broken-its-compensating"
        date="2026-05-15"
        tag="Fundamentals"
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
            Fundamentals
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Your body isn&apos;t broken. It&apos;s compensating.
          </h1>

          <div className="space-y-6">

            <p className="text-[15px] leading-relaxed">
              When the body has been compensating for years, more technique won&apos;t fix it.
            </p>

            <p className="text-[15px] leading-relaxed">
              Your body is extraordinarily good at surviving. That&apos;s not the problem. The problem is the price it pays to keep functioning.
            </p>

            <p className="text-[15px] leading-relaxed">
              Every time something loses mobility or the ability to adapt, another part absorbs the load. A stiff ankle changes the mechanics of the knee. A locked diaphragm alters breathing and tensions the neck. An old scar reorganizes the fascia around it for years without anyone making the connection.
            </p>

            <p className="text-[15px] leading-relaxed">
              The body always finds a way to keep going. Even at its own expense.
            </p>

            <p className="text-[15px] leading-relaxed">
              And at first, it works.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s why many people spend years feeling apparently &ldquo;fine&rdquo; before pain appears. The system still has margin. It can still redistribute tension, shift patterns, absorb load without collapsing.
            </p>

            <p className="text-[15px] leading-relaxed">
              Until it can&apos;t.
            </p>

            <p className="text-[15px] leading-relaxed">
              Then the symptom shows up:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>the back that locks up,</li>
              <li>the neck that never fully releases,</li>
              <li>the constant fatigue,</li>
              <li>the anxiety with no clear cause,</li>
              <li>the insomnia,</li>
              <li>the feeling that the body just doesn&apos;t respond the way it used to.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Most of the time, the problem didn&apos;t start there.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s what I see constantly in my practice. People who&apos;ve spent years treating the wrong spot because it&apos;s the spot that hurts. And where it hurts is almost never where the problem began.
            </p>

            <p className="text-[15px] leading-relaxed">
              The shoulder may be compensating for a rigid thorax. The lower back may be holding up a disorganized pelvis. The neck may be the answer to a breathing pattern that&apos;s been altered for years.
            </p>

            <p className="text-[15px] leading-relaxed">
              The body works as a system. And a system is never understood by looking at isolated pieces.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s why many interventions produce temporary relief but don&apos;t change the pattern. Massage releases tension. An injection reduces inflammation. An adjustment restores mobility. But if the organization producing the compensation stays intact, the body will return to exactly the same place.
            </p>

            <p className="text-[15px] leading-relaxed">
              Not because it&apos;s broken.
Because it&apos;s still trying to survive the only way it knows how.
            </p>

            <p className="text-[15px] leading-relaxed">
              My work isn&apos;t about chasing symptoms. It&apos;s about reading how the body has organized itself around its restrictions. Seeing which structure holds the pattern. Which compensations are still active. Which part of the system lost its ability to adapt first.
            </p>

            <p className="text-[15px] leading-relaxed">
              When you find that, the body changes in a different way.
            </p>

            <p className="text-[15px] leading-relaxed">
              Not because you forced it.
Not because you &ldquo;fixed&rdquo; it.
But because it no longer needs to compensate.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s where real reorganization begins.
            </p>

            <p className="text-[15px] leading-relaxed">
              Your body isn&apos;t broken.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              It&apos;s trying to find order.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If something you read here resonates, write me.
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
