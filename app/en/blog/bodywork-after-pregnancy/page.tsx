import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";
import { getBlogAlternates } from "@/lib/blog-helpers";

export const metadata: Metadata = {
  title: "Bodywork after pregnancy: real postpartum recovery",
  description: "Pregnancy reorganizes the entire body. Real postpartum recovery isn't isolated abs and pelvic floor work — it's reorganizing the whole system.",
  alternates: getBlogAlternates("en", "bodywork-after-pregnancy"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Bodywork after pregnancy: real postpartum recovery"
        description="Pregnancy reorganizes the entire body. Real postpartum recovery isn't isolated abs and pelvic floor work — it's reorganizing the whole system."
        slug="bodywork-after-pregnancy"
        date="2026-06-02"
        tag="Postpartum"
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
            Postpartum
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Bodywork after pregnancy: why abs and pelvic floor aren&apos;t enough
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Pregnancy reorganizes the entire body. Pelvis, diaphragm, pelvic floor, abdominals, ribcage, hormones. Everything shifts to create space and sustain life. The question is what happens after.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The standard approach and its limits
            </h2>

            <p className="text-[15px] leading-relaxed">
              Most postpartum recovery programs focus on abs and pelvic floor. Hypopressives, Kegels, activation drills. That&apos;s not wrong, but it&apos;s incomplete. The body is a system, not a collection of isolated parts.
            </p>

            <p className="text-[15px] leading-relaxed">
              If the ribcage hasn&apos;t returned to its pre-pregnancy position, the abs won&apos;t recover properly. The ribcage is the upper anchor of the rectus abdominis. If that anchor is displaced, the muscle works at a mechanical disadvantage. You can do hypopressives for months and plateau.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              The pelvis sets the foundation
            </h2>

            <p className="text-[15px] leading-relaxed">
              If the pelvis shifted during pregnancy or birth &mdash; and it almost always does &mdash; the pelvic floor can&apos;t stabilize properly. The pelvic floor depends on the position of the bones it anchors to. If those bones are displaced, the pelvic floor works with altered geometry. No exercise compensates for that.
            </p>

            <p className="text-[15px] leading-relaxed">
              The same applies to the sacrum, coccyx, and sacroiliac joints. Birth mobilizes them, sometimes significantly. If they don&apos;t reorganize afterwards, everything built on top remains unstable.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Reorganize, don&apos;t &ldquo;bounce back&rdquo;
            </h2>

            <p className="text-[15px] leading-relaxed">
              This isn&apos;t about getting your pre-pregnancy body back. Your body changed. It did something extraordinary. The goal is to reorganize the system for its new reality. A centered pelvis. A diaphragm that moves well. A ribcage with its full mobility. A pelvic floor with the structural foundation it needs to function.
            </p>

            <p className="text-[15px] leading-relaxed">
              In my work, I address all of this as a system. Ribcage, diaphragm, pelvis, sacrum, pelvic floor, abdominal and pelvic viscera. Not separately. In relationship.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              From someone who experienced it
            </h2>

            <p className="text-[15px] leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>
              &ldquo;Ferran Moreno is a great professional. I just gave birth and thanks to his method... I noticed a radical change in my body.&rdquo;
            </p>
            <p className="text-[13px] mb-6" style={{ color: "var(--text-secondary)" }}>
              &mdash; Bianca Porcar
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Real postpartum recovery doesn&apos;t start with exercises. It starts with reorganizing the structure that supports them.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              If you&apos;re postpartum and something still doesn&apos;t feel right, write me. We look at the whole system.
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
          <RelatedArticles slug="bodywork-after-pregnancy" lang="en" />
        </article>
      </main>
    </div>
  );
}
