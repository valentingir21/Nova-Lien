import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — Nova Lien",
  description: "Mentions légales du site Nova Lien, éducatrice canine comportementaliste à Dijon.",
  robots: { index: false },
};

const sectionStyle = {
  marginBottom: 40,
};

const h2Style = {
  fontFamily: "var(--font-quicksand), system-ui, sans-serif",
  fontWeight: 600,
  fontSize: 22,
  color: "#1c2018",
  margin: "0 0 12px",
};

const pStyle = {
  fontFamily: "var(--font-manrope), system-ui, sans-serif",
  fontSize: 15,
  lineHeight: 1.75,
  color: "#4a4f3f",
  margin: "0 0 8px",
};

export default function MentionsLegalesPage() {
  return (
    <section style={{ padding: "80px 56px 120px", background: "#fbfaf4" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div
          style={{
            display: "inline-flex",
            gap: 10,
            alignItems: "center",
            padding: "8px 16px",
            borderRadius: 999,
            background: "#dde2ce",
            fontFamily: "var(--font-manrope), system-ui, sans-serif",
            fontSize: 13,
            fontWeight: 500,
            color: "#4a4f3f",
            marginBottom: 24,
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: 99, background: "#8f9e63", flexShrink: 0 }} />
          Informations légales
        </div>
        <h1
          style={{
            fontFamily: "var(--font-quicksand), system-ui, sans-serif",
            fontWeight: 600,
            fontSize: "clamp(36px, 5vw, 56px)",
            lineHeight: 1.05,
            color: "#1c2018",
            margin: "0 0 48px",
            letterSpacing: "-0.02em",
          }}
        >
          Mentions légales
        </h1>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Éditeur du site</h2>
          <p style={pStyle}><strong>Amandine Pinto</strong></p>
          <p style={pStyle}>Éducatrice canine comportementaliste — Nova Lien</p>
          <p style={pStyle}>Dijon (21000), Bourgogne-Franche-Comté, France</p>
          <p style={pStyle}>Téléphone : 06 13 31 21 47</p>
          <p style={pStyle}>Email : amandine.novalien@gmail.com</p>
          <p style={pStyle}>Activité exercée en tant que micro-entrepreneur</p>
          <p style={pStyle}>N° SIRET : en cours d&apos;immatriculation</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Hébergement</h2>
          <p style={pStyle}>Ce site est hébergé par Vercel Inc.</p>
          <p style={pStyle}>440 N Barranca Ave #4133 — Covina, CA 91723, États-Unis</p>
          <p style={pStyle}>
            <a href="https://vercel.com" style={{ color: "#6b7a44" }}>vercel.com</a>
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Propriété intellectuelle</h2>
          <p style={pStyle}>
            L&apos;ensemble du contenu de ce site (textes, images, logo, structure) est la propriété
            exclusive d&apos;Amandine Pinto — Nova Lien, sauf mention contraire.
          </p>
          <p style={pStyle}>
            Toute reproduction, distribution ou utilisation sans autorisation préalable est interdite.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Limitation de responsabilité</h2>
          <p style={pStyle}>
            Les informations publiées sur ce site sont données à titre indicatif.
            Nova Lien s&apos;efforce de maintenir ces informations à jour mais ne saurait garantir
            leur exactitude ou exhaustivité.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Droit applicable</h2>
          <p style={pStyle}>
            Le présent site et ses mentions légales sont soumis au droit français.
            En cas de litige, les tribunaux français seront seuls compétents.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>Contact</h2>
          <p style={pStyle}>
            Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter
            à l&apos;adresse : <a href="mailto:amandine.novalien@gmail.com" style={{ color: "#6b7a44" }}>amandine.novalien@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}
