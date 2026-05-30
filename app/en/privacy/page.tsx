import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl, contactWhatsApp } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy | Ferran Moreno",
  description: "Privacy policy for ferran-moreno.com — analytics, newsletter, and your rights.",
  alternates: {
    canonical: `${siteUrl}/en/privacy`,
    languages: { es: `${siteUrl}/privacidad`, en: `${siteUrl}/en/privacy`, "x-default": `${siteUrl}/privacidad` },
  },
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <header className="sticky top-0 z-30" style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-8 py-5">
          <Link href="/en" className="leading-none">
            <div className="text-[17px] font-semibold tracking-[-0.01em]" style={{ color: "var(--text-main)" }}>
              Ferran Moreno
            </div>
            <div className="mt-[5px] text-[10px] uppercase tracking-[0.14em]" style={{ color: "var(--text-secondary)", opacity: 0.7 }}>
              BODYWORK · REGULATION · ENERGY
            </div>
          </Link>
          <nav className="hidden items-center gap-8 md:flex" style={{ color: "var(--text-secondary)" }}>
            <Link href="/en/blog" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Blog</Link>
            <Link href="/en" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Home</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[700px] px-6 py-24">
        <Link href="/en" className="mb-12 inline-block text-[11px] uppercase tracking-[0.15em] transition hover:opacity-50" style={{ color: "var(--text-secondary)" }}>
          &larr; Home
        </Link>

        <h1 className="mb-10 text-3xl font-semibold tracking-tight leading-[1.15]">
          Privacy Policy
        </h1>

        <div className="space-y-8 text-[15px] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-[13px] uppercase tracking-[0.1em] font-medium" style={{ color: "var(--text-secondary)" }}>Responsible</h2>
            <p>Ferran Moreno — <a href={`mailto:fmoreno.bodywork@gmail.com`} className="underline">fmoreno.bodywork@gmail.com</a></p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[13px] uppercase tracking-[0.1em] font-medium" style={{ color: "var(--text-secondary)" }}>Analytics cookies</h2>
            <p>
              This site uses Google Analytics 4 (ID: G-RZKCT72MHX) to measure traffic — pages visited, geographic origin, and device type.
              No personal data is shared with third parties for advertising purposes.
            </p>
            <p>
              Cookies are only loaded after explicit consent. You can withdraw consent at any time by clearing your browser&apos;s local storage
              or by using the browser&apos;s cookie management tools.
            </p>
            <p>
              Google&apos;s privacy policy:{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">
                policies.google.com/privacy
              </a>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[13px] uppercase tracking-[0.1em] font-medium" style={{ color: "var(--text-secondary)" }}>Newsletter</h2>
            <p>
              If you subscribe to the newsletter, your email address is stored with Resend (resend.com).
              It is used exclusively to send articles and updates related to bodywork and the nervous system.
              You can unsubscribe at any time via the link included in every email.
            </p>
            <p>
              Resend&apos;s privacy policy:{" "}
              <a href="https://resend.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">
                resend.com/privacy
              </a>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[13px] uppercase tracking-[0.1em] font-medium" style={{ color: "var(--text-secondary)" }}>Your rights</h2>
            <p>
              Under GDPR you have the right to access, rectify, delete, and port your data, as well as to object to or restrict its processing.
              To exercise these rights, write to{" "}
              <a href="mailto:fmoreno.bodywork@gmail.com" className="underline">fmoreno.bodywork@gmail.com</a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[13px] uppercase tracking-[0.1em] font-medium" style={{ color: "var(--text-secondary)" }}>Contact</h2>
            <p>
              For any privacy-related question:{" "}
              <a href={contactWhatsApp} target="_blank" rel="noopener noreferrer" className="underline">
                WhatsApp
              </a>{" "}
              or{" "}
              <a href="mailto:fmoreno.bodywork@gmail.com" className="underline">fmoreno.bodywork@gmail.com</a>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
