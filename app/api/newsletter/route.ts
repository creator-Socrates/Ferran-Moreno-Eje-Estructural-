import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const audienceId = process.env.RESEND_NEWSLETTER_AUDIENCE_ID;

  if (!audienceId) {
    return NextResponse.json(
      { error: "Newsletter not configured" },
      { status: 500 }
    );
  }

  const { email, source } = await req.json();

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "Email inválido" }, { status: 400 });
  }

  try {
    await resend.contacts.create({
      email: email.trim().toLowerCase(),
      audienceId,
      unsubscribed: false,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    if (!message.toLowerCase().includes("already exists")) {
      return NextResponse.json(
        { error: "No se ha podido suscribir" },
        { status: 500 }
      );
    }
  }

  try {
    await resend.emails.send({
      from: "Newsletter Ferran <onboarding@resend.dev>",
      to: "fmoreno.bodywork@gmail.com",
      subject: `Nuevo suscriptor newsletter: ${email}`,
      text: `Email: ${email}\nOrigen: ${source || "—"}`,
    });
  } catch {
    // Notificación silenciosa — el contacto ya quedó en Resend
  }

  return NextResponse.json({ ok: true });
}
