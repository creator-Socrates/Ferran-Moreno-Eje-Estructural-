import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "The day I stopped being Pinocchio",
  description: "My body felt like a block of wood. Until a hand showed me that vertebrae move and pain can disappear.",
  alternates: {
    canonical: "/en/blog/the-day-i-stopped-being-pinocchio",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="The day I stopped being Pinocchio"
        description="My body felt like a block of wood. Until a hand showed me that vertebrae move and pain can disappear."
        slug="the-day-i-stopped-being-pinocchio"
        date="2026-07-28"
        tag="My story"
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
            My story
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            The day I stopped being Pinocchio
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Before I met Josep Castella, my relationship with my body was mechanical. To me the hip was like a block of wood, as if I were Pinocchio. The idea that there could be movement inside didn&apos;t register. It was like a car part. A bolt that&apos;s out of place and you put it back. That&apos;s how I understood my own body.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The knife in the sternum
            </h2>

            <p className="text-[15px] leading-relaxed">
              I had chronic pain in my sternum. Like a knife lodged there. Constant. I had lived with it for years. I had normalized it the way you normalize the background noise of a city. It was always there, but I had stopped expecting it to go away.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The revelation
            </h2>

            <p className="text-[15px] leading-relaxed">
              And then, during a session with Josep, something happened. When I suddenly felt for the first time that he was touching the vertebra and I could feel that the vertebra was rotated... that was a revelation. It wasn&apos;t theory. It wasn&apos;t a diagram in a textbook. It was my body telling me something I had never heard it say.
            </p>

            <p className="text-[15px] leading-relaxed">
              Without causing any harm, without cracking, without any kind of aggression, doing it extremely subtly, the pain disappeared and never came back. A paradigm shift. Everything I had understood about the body &mdash; that it was mechanical, that you had to force it, that pain was inevitable &mdash; collapsed in that instant.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              From wood to living body
            </h2>

            <p className="text-[15px] leading-relaxed">
              I stopped being Pinocchio that day. My body stopped being an object and became a living system, with layers, with intelligence, with a capacity to reorganize itself that I didn&apos;t know existed.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              It&apos;s something magnificent that most people have never had the chance to feel. Discovering that your body isn&apos;t a machine that breaks down, but a system that can find its own order when someone knows where and how to touch.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If your body feels rigid and unresponsive, maybe it just needs someone to listen to it differently.
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

          <RelatedArticles slug="the-day-i-stopped-being-pinocchio" lang="en" />
        </article>
      </main>
    </div>
  );
}
