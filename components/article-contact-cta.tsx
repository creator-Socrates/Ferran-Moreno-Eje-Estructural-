import type { ReactNode } from "react";
import { contactWhatsApp } from "@/lib/content";

type ArticleContactCtaProps = {
  children: ReactNode;
  ctaLabel: string;
};

export function ArticleContactCta({ children, ctaLabel }: ArticleContactCtaProps) {
  return (
    <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
      <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
        {children}
      </p>
      <a
        href={contactWhatsApp}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-[50px] items-center justify-center rounded-full px-7 text-[11px] uppercase tracking-[0.15em] font-medium transition hover:opacity-90"
        style={{
          background: "var(--accent-orange)",
          color: "white",
          boxShadow: "0 16px 36px rgba(233, 117, 46, 0.18)",
        }}
      >
        {ctaLabel}
      </a>
    </div>
  );
}
