import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { getBlogAlternates } from "@/lib/blog-helpers";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Your nervous system can't tell the difference between a real threat and an anticipated one",
  description: "Your body can react to an email the same way it would react to a car accident. That's not weakness. That's physiology.",
  alternates: getBlogAlternates("en", "your-nervous-system-cant-tell-the-difference"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Your nervous system can't tell the difference between a real threat and an anticipated one"
        description="Your body can react to an email the same way it would react to a car accident. That's not weakness. That's physiology."
        slug="your-nervous-system-cant-tell-the-difference"
        date="2026-06-15"
        tag="Nervous system"
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
            Nervous system
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Your nervous system can&apos;t tell the difference
          </h1>

          <div className="space-y-6">

            <p className="text-[15px] leading-relaxed">
              Your body can react to an email the same way it would react to a car accident.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s one of the things that most unsettles people when they start understanding how the nervous system actually works.
            </p>

            <p className="text-[15px] leading-relaxed">
              The mind knows there&apos;s no real danger.
The body doesn&apos;t always agree.
            </p>

            <p className="text-[15px] leading-relaxed">
              An unexpected call.
A message from the tax office.
An argument.
A phone notification.
The feeling that something is &ldquo;off.&rdquo;
            </p>

            <p className="text-[15px] leading-relaxed">
              The body responds before you have time to think.
            </p>

            <p className="text-[15px] leading-relaxed">
              Breathing changes.
The stomach contracts.
The jaw clenches.
The chest closes.
The system goes on alert.
            </p>

            <p className="text-[15px] leading-relaxed">
              And most importantly: many times that activation doesn&apos;t disappear when the moment passes.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s where the problem begins.
            </p>

            <p className="text-[15px] leading-relaxed">
              The human nervous system is designed to activate and then return to regulation. The problem appears when the activation stays open for too long.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s what I see constantly:
people functioning for years in a state of low-grade permanent activation.
            </p>

            <p className="text-[15px] leading-relaxed">
              They&apos;re not in panic.
They&apos;re not collapsed.
But they&apos;re not truly regulated either.
            </p>

            <p className="text-[15px] leading-relaxed">
              They sleep but don&apos;t rest.
They eat but don&apos;t digest the same.
They work but with less and less margin.
They live in a kind of constant &ldquo;functional amber.&rdquo;
            </p>

            <p className="text-[15px] leading-relaxed">
              And because the body adapts to almost anything, they end up believing that&apos;s their personality.
            </p>

            <p className="text-[15px] leading-relaxed">
              &ldquo;I don&apos;t know how to relax.&rdquo;
&ldquo;I&apos;ve always been anxious.&rdquo;
&ldquo;That&apos;s just how I am.&rdquo;
            </p>

            <p className="text-[15px] leading-relaxed">
              Many times you&apos;re not &ldquo;just like that.&rdquo;
Many times it&apos;s a system that hasn&apos;t come down in far too long.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s why regulation isn&apos;t a luxury or a therapeutic trend. It&apos;s the physiological foundation on which everything else runs:
            </p>

            <ul className="text-[15px] leading-relaxed space-y-1 list-disc pl-5">
              <li>mental clarity,</li>
              <li>digestion,</li>
              <li>sleep,</li>
              <li>recovery,</li>
              <li>decision-making,</li>
              <li>even pain perception.</li>
            </ul>

            <p className="text-[15px] leading-relaxed">
              A chronically activated nervous system changes how you interpret the world.
            </p>

            <p className="text-[15px] leading-relaxed">
              Everything weighs more.
Everything feels more urgent.
Everything consumes more energy.
            </p>

            <p className="text-[15px] leading-relaxed">
              And from there, even small things become enormous.
            </p>

            <p className="text-[15px] leading-relaxed">
              Most people try to solve this from the mind:
more control,
more discipline,
more analysis,
more willpower.
            </p>

            <p className="text-[15px] leading-relaxed">
              But a body on alert doesn&apos;t need more demand.
It needs safety.
            </p>

            <p className="text-[15px] leading-relaxed">
              Not intellectual safety.
Physiological safety.
            </p>

            <p className="text-[15px] leading-relaxed">
              It needs to receive the signal that it no longer has to keep preparing for something that isn&apos;t happening right now.
            </p>

            <p className="text-[15px] leading-relaxed">
              That&apos;s where real regulation begins.
            </p>

            <p className="text-[15px] leading-relaxed">
              Not when you convince yourself you&apos;re fine.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              When your body starts believing it.
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
          <RelatedArticles slug="your-nervous-system-cant-tell-the-difference" lang="en" />
        </article>
      </main>
    </div>
  );
}
