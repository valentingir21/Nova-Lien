import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  fullName: z.string().min(2),
  phone: z.string(),
  email: z.string().email(),
  address: z.string().min(2),
  dogName: z.string().optional(),
  dogBreed: z.string().optional(),
  dogAge: z.string().optional(),
  dogSex: z.enum(["male", "female"]).optional(),
  dogNeutered: z.boolean().optional(),
  servicesInterest: z.array(z.string()).min(1),
  description: z.string().min(30),
  availability: z.array(z.object({ date: z.string(), timeOfDay: z.string() })).min(1),
  rgpdConsent: z.literal(true),
});

const serviceLabels: Record<string, string> = {
  chiot: "Éducation chiot",
  "pre-adoption": "Pré-adoption",
  reeducation: "Rééducation comportementale",
  "renforcement-lien": "Renforcement du lien",
  autre: "Autre",
};

const timeLabels: Record<string, string> = {
  morning: "Matin",
  afternoon: "Après-midi",
  evening: "Soir",
};

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation error", details: parsed.error.flatten() }, { status: 422 });
  }

  const d = parsed.data;

  const availabilityRows = d.availability
    .map((a) => `<li>${a.date} — ${timeLabels[a.timeOfDay] ?? a.timeOfDay}</li>`)
    .join("");

  const servicesRows = d.servicesInterest
    .map((s) => `<li>${serviceLabels[s] ?? s}</li>`)
    .join("");

  const toAmandine = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8"/></head>
<body style="font-family: sans-serif; color: #1c2018; max-width: 640px; margin: 0 auto; padding: 24px;">
  <div style="background:#8f9e63; color:#fbfaf4; padding:16px 24px; border-radius:12px; margin-bottom:24px;">
    <strong style="font-size:18px;">Nouvelle demande de contact — Nova Lien</strong>
  </div>

  <h2 style="font-size:16px; margin-bottom:4px;">Coordonnées</h2>
  <table style="width:100%; border-collapse:collapse; margin-bottom:24px;">
    <tr><td style="padding:6px 0; color:#7a7f6b; width:140px;">Nom</td><td><strong>${d.fullName}</strong></td></tr>
    <tr><td style="padding:6px 0; color:#7a7f6b;">Téléphone</td><td>${d.phone}</td></tr>
    <tr><td style="padding:6px 0; color:#7a7f6b;">Email</td><td>${d.email}</td></tr>
    <tr><td style="padding:6px 0; color:#7a7f6b;">Commune</td><td>${d.address}</td></tr>
  </table>

  <h2 style="font-size:16px; margin-bottom:4px;">Le chien</h2>
  <table style="width:100%; border-collapse:collapse; margin-bottom:24px;">
    <tr><td style="padding:6px 0; color:#7a7f6b; width:140px;">Nom</td><td>${d.dogName || "—"}</td></tr>
    <tr><td style="padding:6px 0; color:#7a7f6b;">Race</td><td>${d.dogBreed || "—"}</td></tr>
    <tr><td style="padding:6px 0; color:#7a7f6b;">Âge</td><td>${d.dogAge || "—"}</td></tr>
    <tr><td style="padding:6px 0; color:#7a7f6b;">Sexe</td><td>${d.dogSex === "male" ? "Mâle" : d.dogSex === "female" ? "Femelle" : "—"}</td></tr>
    <tr><td style="padding:6px 0; color:#7a7f6b;">Stérilisé(e)</td><td>${d.dogNeutered ? "Oui" : "Non"}</td></tr>
  </table>

  <h2 style="font-size:16px; margin-bottom:4px;">Services demandés</h2>
  <ul style="margin:0 0 24px; padding-left:20px;">${servicesRows}</ul>

  <h2 style="font-size:16px; margin-bottom:4px;">Description</h2>
  <p style="background:#f1ecdc; padding:16px; border-radius:8px; margin-bottom:24px; line-height:1.6;">${d.description.replace(/\n/g, "<br/>")}</p>

  <h2 style="font-size:16px; margin-bottom:4px;">Disponibilités</h2>
  <ul style="margin:0 0 24px; padding-left:20px;">${availabilityRows}</ul>

  <p style="font-size:12px; color:#7a7f6b;">Envoyé via le formulaire novalien.fr</p>
</body>
</html>`;

  const toClient = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8"/></head>
<body style="font-family: sans-serif; color: #1c2018; max-width: 640px; margin: 0 auto; padding: 24px;">
  <div style="background:#8f9e63; color:#fbfaf4; padding:24px; border-radius:16px; margin-bottom:32px; text-align:center;">
    <div style="font-size:36px; margin-bottom:8px;">🐾</div>
    <strong style="font-size:20px;">Merci, ${d.fullName} !</strong>
    <p style="margin:8px 0 0; opacity:0.9; font-size:15px;">Votre message a bien été reçu.</p>
  </div>

  <p style="font-size:16px; line-height:1.65; margin-bottom:16px;">
    Je vous recontacterai dans les meilleurs délais, généralement <strong>sous 48h</strong>,
    pour convenir d'un premier échange.
  </p>
  <p style="font-size:16px; line-height:1.65; margin-bottom:32px;">
    En attendant, n'hésitez pas à consulter mes <a href="https://novalien.fr/faq" style="color:#6b7a44;">questions fréquentes</a>
    ou à me contacter directement au <strong>06 13 31 21 47</strong>.
  </p>

  <p style="font-size:14px; color:#7a7f6b; border-top:1px solid #e8e4d4; padding-top:16px;">
    Amandine Pinto · Éducatrice canine comportementaliste<br/>
    Nova Lien · Dijon &amp; alentours
  </p>
</body>
</html>`;

  try {
    await Promise.all([
      resend.emails.send({
        from: "Nova Lien <contact@novalien.fr>",
        to: "amandine.novalien@gmail.com",
        replyTo: d.email,
        subject: `Nouvelle demande — ${d.fullName} (${d.address})`,
        html: toAmandine,
      }),
      resend.emails.send({
        from: "Amandine · Nova Lien <contact@novalien.fr>",
        to: d.email,
        subject: "Votre demande a bien été reçue — Nova Lien",
        html: toClient,
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Email send failed" }, { status: 500 });
  }
}
