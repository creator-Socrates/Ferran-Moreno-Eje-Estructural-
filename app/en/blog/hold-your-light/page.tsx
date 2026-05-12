import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Hold your light: why pushing is the wrong strategy",
  description: "An executive changed the lights in his office and shifted the energy of his entire team. When you hold your light, things fall into place on their own.",
  alternates: {
    canonical: "/en/blog/hold-your-light",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Hold your light: why pushing is the wrong strategy"
        description="An executive changed the lights in his office and shifted the energy of his entire team. When you hold your light, things fall into place on their own."
        slug="hold-your-light"
        date="2026-08-21"
        tag="High performance"
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
            High performance
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Hold your light: why pushing is the wrong strategy
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              I was working with an executive who leads a large team. A capable, resourceful man, used to carrying everything on his shoulders. But something wasn&apos;t working: the harder he pushed, the more resistance he met. More tension in meetings, more silent conflicts, more exhaustion at the end of every day.
            </p>

            <p className="text-[15px] leading-relaxed">
              In the middle of the session I asked him what kind of lighting he had in his office. LED, of course. Cold, powerful, functional. I asked him to notice something: LED lights flicker. You don&apos;t see it consciously, but your nervous system registers it. That constant flickering overstimulates. It keeps the system on low-grade alert at all times. Incandescent light, on the other hand, is continuous. It calms.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The metaphor that changed everything
            </h2>

            <p className="text-[15px] leading-relaxed">
              I said: &ldquo;Can you feel how your rhythm is slowing down right now?&rdquo; He felt it. And then I suggested something concrete: change the lights in his office. It sounds insignificant. It isn&apos;t. Changing the lighting in your space changes the energy of everyone who walks into it. And this applies to much more than light bulbs.
            </p>

            <p className="text-[15px] leading-relaxed">
              You are the light of your team. If you flicker &mdash;if you&apos;re reactive, if you push, if you impose&mdash; the entire system around you overstimulates. If you&apos;re steady, continuous, present, the system regulates with you.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Hold, don&apos;t impose
            </h2>

            <p className="text-[15px] leading-relaxed">
              When you hold your energy from that place, you don&apos;t need to impose yourself. If you hold your light, things will fall into order on their own. I&apos;m not talking about soft leadership. I&apos;m talking about a leadership that doesn&apos;t need force because it has presence. This is something the body understands before the mind does. A team centred around someone who is centred creates an invisible mesh. A frequency that naturally repels what doesn&apos;t fit.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              When boundaries become walls
            </h2>

            <p className="text-[15px] leading-relaxed">
              There&apos;s a common trap among people in positions of power: confusing boundaries with walls. A healthy boundary is clear and permeable. A wall is rigid and isolating. When you lead through imposition, you build walls. When you lead through presence, you set boundaries that people respect naturally &mdash;because they feel them, not because they fear them.
            </p>

            <p className="text-[15px] leading-relaxed">
              You don&apos;t need to shout louder. You don&apos;t need to control more. You need to regulate your own system so that your presence becomes the signal that orders the space. That&apos;s not something you learn in an MBA. You learn it in the body.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Real authority is not imposed. It is emitted. And when you emit it from a regulated place, everything around you falls into order without you having to force a thing.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you lead a team and feel that pushing no longer works, write me. I&apos;ll explain how I work with executives and high-performance profiles.
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

          <RelatedArticles slug="hold-your-light" lang="en" />
        </article>
      </main>
    </div>
  );
}
