import Link from "next/link";
import { monicaCentralEn } from "@/lib/content.en";

export const metadata = {
  title: "Mónica's Testimonial | Ferran Moreno",
  description: "Full testimonial from Mónica about her experience with Ferran Moreno.",
};

export default function MonicaEnPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>

      <header className="sticky top-0 z-30" style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-8 py-5">
          <Link href="/en" className="leading-none">
            <div className="text-[17px] font-semibold tracking-[-0.01em]" style={{ color: "var(--text-main)" }}>Ferran Moreno</div>
            <div className="mt-[5px] text-[10px] uppercase tracking-[0.14em]" style={{ color: "var(--text-secondary)", opacity: 0.7 }}>
              Testimonial
            </div>
          </Link>
          <Link
            href="/en"
            className="rounded-full px-5 py-2 text-sm font-medium transition hover:opacity-60"
            style={{ border: "1px solid var(--border-subtle)", color: "var(--text-main)" }}
          >
            Back to home
          </Link>
        </div>
      </header>

      <main>
        <section>
          <div className="mx-auto max-w-[660px] px-6 py-[100px]">
            <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>
              Featured testimonial
            </div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              A body that remembers its order
            </h1>
            <p className="mt-4 text-base" style={{ color: "var(--text-secondary)" }}>
              — {monicaCentralEn.name}
            </p>

            <p className="mt-12 whitespace-pre-line text-lg leading-[1.8]">
              {monicaCentralEn.text}
            </p>
          </div>
        </section>
      </main>

    </div>
  );
}
