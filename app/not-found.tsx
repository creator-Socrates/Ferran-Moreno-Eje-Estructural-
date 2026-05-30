import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{ background: "var(--bg-main)", color: "var(--text-main)" }}
    >
      <p
        className="mb-2 text-[11px] uppercase tracking-[0.2em]"
        style={{ color: "var(--text-secondary)" }}
      >
        404
      </p>
      <h1 className="mb-8 text-2xl font-semibold tracking-tight">
        Página no encontrada
      </h1>
      <div className="flex gap-8">
        <Link
          href="/"
          className="text-[11px] uppercase tracking-[0.15em] transition hover:opacity-50"
          style={{ color: "var(--text-secondary)" }}
        >
          ← Inicio
        </Link>
        <Link
          href="/en"
          className="text-[11px] uppercase tracking-[0.15em] transition hover:opacity-50"
          style={{ color: "var(--text-secondary)" }}
        >
          ← Home (EN)
        </Link>
      </div>
    </div>
  );
}
