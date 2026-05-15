import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "The body wasn\u2019t designed to be always available",
  description: "Your phone buzzes. You look. You enter a meeting. You reply. You leave. Another notification.",
  alternates: {
    canonical: "/en/blog/the-body-wasnt-designed-to-be-always-available",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="The body wasn't designed to be always available"
        description="Your phone buzzes. You look. You enter a meeting. You reply. You leave. Another notification."
        slug="the-body-wasnt-designed-to-be-always-available"
        date="2026-09-29"
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
            The body wasn&apos;t designed to be always available
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Your phone buzzes. You look.
            </p>

            <p className="text-[15px] leading-relaxed">
              You enter a meeting. You reply.
            </p>

            <p className="text-[15px] leading-relaxed">
              You leave. Another notification.
            </p>

            <p className="text-[15px] leading-relaxed">
              Another email.<br />
              Another message.<br />
              Another decision.<br />
              Another urgency.
            </p>

            <p className="text-[15px] leading-relaxed">
              And the body never quite comes down.
            </p>

            <p className="text-[15px] leading-relaxed">
              Most people live in constant availability without realizing the physiological impact it carries.
            </p>

            <p className="text-[15px] leading-relaxed">
              Because the problem is not just working a lot.
            </p>

            <p className="text-[15px] leading-relaxed">
              The problem is that the nervous system never receives a real break from demand.
            </p>

            <p className="text-[15px] leading-relaxed">
              There is always something pending:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>someone waiting for a reply,</li>
              <li>something to resolve,</li>
              <li>something to anticipate,</li>
              <li>something to hold.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              And that keeps the body in a state of continuous vigilance.
            </p>

            <p className="text-[15px] leading-relaxed">
              Even when you are sitting down.<br />
              Even when you are &ldquo;resting.&rdquo;<br />
              Even when you are on holiday.
            </p>

            <p className="text-[15px] leading-relaxed">
              The body stays ready to respond.
            </p>

            <p className="text-[15px] leading-relaxed">
              That burns an enormous amount of energy.
            </p>

            <p className="text-[15px] leading-relaxed">
              Human attention was not designed to live fragmented all day. Nor was the nervous system designed to alternate constant micro-activations for twelve or fourteen hours straight.
            </p>

            <p className="text-[15px] leading-relaxed">
              Each small interruption seems insignificant.
            </p>

            <p className="text-[15px] leading-relaxed">
              But the accumulated cost is enormous:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>shallow breathing,</li>
              <li>jaw tension,</li>
              <li>poorer digestion,</li>
              <li>less mental depth,</li>
              <li>more fatigue,</li>
              <li>less capacity to recover.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              And because there is no visible crisis, it gets normalized.
            </p>

            <p className="text-[15px] leading-relaxed">
              That is where a very modern feeling appears: being tired even when you apparently didn&apos;t do that much.
            </p>

            <p className="text-[15px] leading-relaxed">
              Because much of today&apos;s exhaustion does not come from physical effort alone.
            </p>

            <p className="text-[15px] leading-relaxed">
              It comes from sustaining constant availability.
            </p>

            <p className="text-[15px] leading-relaxed">
              The body needs cycles:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>activation,</li>
              <li>closure,</li>
              <li>recovery,</li>
              <li>silence,</li>
              <li>real pause.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              Not just sleep.
            </p>

            <p className="text-[15px] leading-relaxed">
              Physiological silence.
            </p>

            <p className="text-[15px] leading-relaxed">
              Moments where the system is not ready to respond immediately to something.
            </p>

            <p className="text-[15px] leading-relaxed">
              That is something a huge number of people have completely lost.
            </p>

            <p className="text-[15px] leading-relaxed">
              That is why when someone finally comes down for real, they feel something strange: emptiness.
            </p>

            <p className="text-[15px] leading-relaxed">
              Silence.<br />
              Space.<br />
              The absence of urgency.
            </p>

            <p className="text-[15px] leading-relaxed">
              And often even that creates discomfort at first, because the system has already grown used to living activated.
            </p>

            <p className="text-[15px] leading-relaxed">
              Modern productivity rewards continuous availability.
            </p>

            <p className="text-[15px] leading-relaxed">
              The human body does not.
            </p>

            <p className="text-[15px] leading-relaxed">
              Your nervous system needs moments where it does not have to be on alert for anything.
            </p>

            <p className="text-[15px] leading-relaxed">
              Because a permanently available body ends up living permanently on guard.
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
        </article>
      </main>
    </div>
  );
}
