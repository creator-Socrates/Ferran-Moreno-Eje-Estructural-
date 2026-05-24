import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const rateLimit = new Map<string, { count: number; ts: number }>();

export async function POST(req: NextRequest) {
  // Rate limit: 3 submissions per IP per hour
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (entry && now - entry.ts < 3600_000) {
    if (entry.count >= 3) {
      return NextResponse.json({ error: "too many requests" }, { status: 429 });
    }
    entry.count++;
  } else {
    rateLimit.set(ip, { count: 1, ts: now });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { nombre, email, intereses, mensaje } = await req.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "email required" }, { status: 400 });
  }

  // Input length limits
  const n = String(nombre || "").slice(0, 100);
  const e = email.slice(0, 200);
  const m = String(mensaje || "").slice(0, 2000);
  const interesesSafe = Array.isArray(intereses) ? intereses.slice(0, 15) : [];
  const interesesText = interesesSafe.length ? interesesSafe.join(", ") : "—";

  await resend.emails.send({
    from: "Ferran Moreno <info@ferran-moreno.com>",
    to: "fmoreno.bodywork@gmail.com",
    replyTo: email,
    subject: `Contacto web: ${n || e}`,
    text: `Nombre: ${n || "—"}\nEmail: ${e}\nIntereses: ${interesesText}\n\n${m}`,
  });

  return NextResponse.json({ ok: true });
}
