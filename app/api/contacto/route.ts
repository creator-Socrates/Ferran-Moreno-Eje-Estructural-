import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { nombre, email, intereses, mensaje } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "email required" }, { status: 400 });
  }

  const interesesText = intereses?.length ? intereses.join(", ") : "—";

  await resend.emails.send({
    from: "Web Ferran <onboarding@resend.dev>",
    to: "fmoreno.bodywork@gmail.com",
    replyTo: email,
    subject: `Contacto web: ${nombre || email}`,
    text: `Nombre: ${nombre || "—"}\nEmail: ${email}\nIntereses: ${interesesText}\n\n${mensaje || ""}`,
  });

  return NextResponse.json({ ok: true });
}
