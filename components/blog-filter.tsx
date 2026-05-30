"use client";

import { useState } from "react";
import Link from "next/link";

type Article = {
  slug: string;
  title: string;
  date: string;
  tag: string;
};

type Props = {
  articles: Article[];
  lang: "es" | "en";
  basePath: string;
  allLabel: string;
  readLabel: string;
};

export function BlogFilter({ articles, lang, basePath, allLabel, readLabel }: Props) {
  const [active, setActive] = useState<string | null>(null);

  const tags = Array.from(new Set(articles.map((a) => a.tag)));
  const filtered = active ? articles.filter((a) => a.tag === active) : articles;

  return (
    <>
      {/* Filter pills */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setActive(null)}
          style={{
            fontSize: "10px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            padding: "5px 14px",
            borderRadius: "999px",
            border: "1px solid",
            cursor: "pointer",
            transition: "all 0.15s",
            background: active === null ? "#111" : "transparent",
            color: active === null ? "#fff" : "var(--text-secondary)",
            borderColor: active === null ? "#111" : "rgba(17,24,39,0.2)",
          }}
        >
          {allLabel}
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActive(active === tag ? null : tag)}
            style={{
              fontSize: "10px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              padding: "5px 14px",
              borderRadius: "999px",
              border: "1px solid",
              cursor: "pointer",
              transition: "all 0.15s",
              background: active === tag ? "#111" : "transparent",
              color: active === tag ? "#fff" : "var(--text-secondary)",
              borderColor: active === tag ? "#111" : "rgba(17,24,39,0.2)",
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Article grid */}
      <div className="grid gap-5 sm:grid-cols-2">
        {filtered.map((a, index) => (
          <article
            key={a.slug}
            className="rounded-[1.75rem]"
            style={{
              border: "1px solid rgba(17, 24, 39, 0.08)",
              background: index % 3 === 0 ? "rgba(255, 255, 255, 0.92)" : "rgba(255, 251, 235, 0.88)",
              boxShadow: "0 10px 30px rgba(17, 24, 39, 0.06)",
            }}
          >
            <Link href={`${basePath}/${a.slug}`} className="group block p-6">
              <div className="mb-4 flex items-center justify-between gap-4">
                <span
                  className="rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.15em]"
                  style={{ background: "rgba(249, 115, 22, 0.12)", color: "#9A3412" }}
                >
                  {a.tag}
                </span>
                <span className="text-[11px]" style={{ color: "var(--text-secondary)" }}>
                  {a.date}
                </span>
              </div>
              <h3 className="text-[1.35rem] font-semibold tracking-tight leading-[1.25] transition group-hover:opacity-70">
                {a.title}
              </h3>
              <div className="mt-6 text-sm font-medium" style={{ color: "#9A3412" }}>
                {readLabel} →
              </div>
            </Link>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-[14px] py-8" style={{ color: "var(--text-secondary)" }}>
          {lang === "es" ? "No hay artículos en esta categoría todavía." : "No articles in this category yet."}
        </p>
      )}
    </>
  );
}
