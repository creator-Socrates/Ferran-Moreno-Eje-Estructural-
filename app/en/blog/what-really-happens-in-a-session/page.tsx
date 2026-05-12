import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "I walked in bent and walked out straight — What really happens in a session",
  description: "What happens in a bodywork session with Ferran Moreno. Real testimonials from people who came in with a problem and left transformed.",
  alternates: {
    canonical: "/en/blog/what-really-happens-in-a-session",
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="I walked in bent and walked out straight — What really happens in a session"
        description="What happens in a bodywork session with Ferran Moreno. Real testimonials from people who came in with a problem and left transformed."
        slug="what-really-happens-in-a-session"
        date="2026-05-26"
        tag="Session"
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
            Session
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            &ldquo;I walked in bent and walked out straight&rdquo; &mdash; what really happens in a session
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Quim Clark, CEO of MQ Events in Barcelona, put it this way:
            </p>

            <blockquote className="border-l-2 pl-6 my-6 text-[15px] leading-relaxed" style={{ borderColor: "var(--text-secondary)", color: "var(--text-secondary)" }}>
              &ldquo;Few of us are aware of how important it is to have a professional who helps you with how you feel and how to manage it. Ferran is much more than that. I work under a lot of pressure in the events industry and I left the session literally different: I walked in bent and walked out straight, ready to take on the world.&rdquo;
              <span className="block mt-2 text-[13px]">— Quim Clark, CEO MQ Events, Barcelona</span>
            </blockquote>

            <p className="text-[15px] leading-relaxed">
              Philip Thompson was visiting Barcelona with his family. During his session, at the end, he mentioned a sprained finger. When he checked it, the pain was gone.
            </p>

            <blockquote className="border-l-2 pl-6 my-6 text-[15px] leading-relaxed" style={{ borderColor: "var(--text-secondary)", color: "var(--text-secondary)" }}>
              &ldquo;We were visiting Barcelona for a few days and a friend recommended Ferran. We went with our three kids and he saw all of us. It was absolutely amazing. At the end of my session he asked if I had any other pain or discomfort. I said actually my finger had a sprain. He said to check it and it was gone! He resolved my strained Achilles tendon, worked on an old back problem and helped correct my posture. This man really knows what he&apos;s doing. Highly recommended, and he was also great with the kids!&rdquo;
              <span className="block mt-2 text-[13px]">— Philip Thompson, USA</span>
            </blockquote>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              These aren&apos;t miracles
            </h2>

            <p className="text-[15px] leading-relaxed">
              Lorena&apos;s anxiety disappeared. Laura Cabr&eacute; arrived with vertigo, bruxism, and chronic pain from a motorcycle accident. In two sessions, all of it resolved.
            </p>

            <blockquote className="border-l-2 pl-6 my-6 text-[15px] leading-relaxed" style={{ borderColor: "var(--text-secondary)", color: "var(--text-secondary)" }}>
              &ldquo;The sessions with Ferran have been the discovery of the summer. A friend recommended him and from the very first session I noticed improvement. My anxiety disappeared, my posture changed and I feel stronger and more confident. Thank you Ferran. I&apos;m doing great.&rdquo;
              <span className="block mt-2 text-[13px]">— Lorena S. T., Civil Servant, Valencia</span>
            </blockquote>

            <blockquote className="border-l-2 pl-6 my-6 text-[15px] leading-relaxed" style={{ borderColor: "var(--text-secondary)", color: "var(--text-secondary)" }}>
              &ldquo;In just two sessions he eliminated vertigo, bruxism and several chronic ailments from a motorcycle accident. On top of that, after every session I leave with a deep sense of inner peace. I can only say thank you.&rdquo;
              <span className="block mt-2 text-[13px]">— Laura Cabr&eacute;, Interior Designer, Barcelona</span>
            </blockquote>

            <p className="text-[15px] leading-relaxed">
              This isn&apos;t magic. It&apos;s what happens when you address the body&apos;s organization instead of chasing symptoms.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              What a typical session looks like
            </h2>

            <p className="text-[15px] leading-relaxed">
              I read the body standing, then on the table. The manual work can be structural, visceral, or energetic. The session follows what the body presents, not a predetermined plan. Every person is different. Every session is different.
            </p>

            <p className="text-[15px] leading-relaxed">
              Most people report feeling taller, lighter, clearer. Some describe it as: &ldquo;I don&apos;t know what you did, but something is different.&rdquo;
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The common thread
            </h2>

            <p className="text-[15px] leading-relaxed">
              What all these cases share is that no one came looking for exactly what they found. Quim came for work pressure and walked out standing straight. Philip came for his back and left without the sprained finger. Lorena came on a recommendation and lost her anxiety.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              When the body reorganizes, symptoms fall away on their own. You don&apos;t need to chase them one by one.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you want to know what would happen in your case, write me. Every body tells a different story.
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
          <RelatedArticles slug="what-really-happens-in-a-session" lang="en" />
        </article>
      </main>
    </div>
  );
}
