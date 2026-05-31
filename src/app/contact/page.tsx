import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import Eyebrow from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Contact — Premier contact",
  description:
    "Prenez contact avec Amandine Pinto, éducatrice canine comportementaliste Nova Lien à Dijon. Réponse sous 48h. Sans engagement.",
};

const coords = [
  { l: "Téléphone", v: "06 13 31 21 47", sub: "Du lundi au samedi", href: "tel:+33613312147" },
  { l: "Email", v: "amandine.novalien@gmail.com", sub: "Réponse sous 48h", href: "mailto:amandine.novalien@gmail.com" },
  { l: "Instagram", v: "@nova.lien_", sub: "", href: "https://www.instagram.com/nova.lien_/" },
  { l: "Facebook", v: "Nova Lien", sub: "", href: "https://www.facebook.com/profile.php?id=61574337772678" },
];

const villes = ["Dijon", "Chenôve", "Quetigny", "Marsannay-la-Côte", "Talant", "Ahuy", "Fontaine-lès-Dijon", "Gevrey-Chambertin", "Genlis", "Is-sur-Tille", "Saulon-la-Chapelle", "Sombernon", "Nuits-Saint-Georges", "Selongey", "Mirebeau-sur-Bèze", "Chevigny-Saint-Sauveur"];

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ padding: "70px 56px 60px", background: "#fbfaf4" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              gap: 10,
              alignItems: "center",
              padding: "8px 16px",
              borderRadius: 999,
              background: "#ffffff",
              border: "1px solid #e8e4d4",
              fontFamily: "var(--font-manrope), system-ui, sans-serif",
              fontSize: 13,
              fontWeight: 500,
              color: "#4a4f3f",
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: 99, background: "#8f9e63", flexShrink: 0 }} />
            Me contacter
          </div>
          <h1
            style={{
              fontFamily: "var(--font-quicksand), system-ui, sans-serif",
              fontWeight: 600,
              fontSize: "clamp(56px, 7.5vw, 108px)",
              lineHeight: 0.96,
              margin: "28px 0 0",
              color: "#1c2018",
              letterSpacing: "-0.03em",
            }}
          >
            Comprendre votre chien,
            <br />
            <span
              style={{
                color: "#6b7a44",
                fontFamily: "var(--font-lora), Georgia, serif",
                fontStyle: "italic",
                fontWeight: 500,
              }}
            >
              renforcer votre lien.
            </span>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-manrope), system-ui, sans-serif",
              fontSize: 19,
              lineHeight: 1.6,
              color: "#4a4f3f",
              marginTop: 24,
              maxWidth: 720,
            }}
          >
            Une question ? Un doute ? Envie d&apos;en savoir plus ? N&apos;hésitez pas à me contacter
            — je vous répondrai dans les meilleurs délais, <strong>sans engagement</strong>.
          </p>
        </div>
      </section>

      {/* COORDINATES */}
      <section style={{ padding: "40px 56px 80px", background: "#fbfaf4" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 16 }}>
            {coords.map((x, i) => (
              <a
                key={i}
                href={x.href}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e8e4d4",
                  borderRadius: 20,
                  padding: "24px 26px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-manrope), system-ui, sans-serif",
                    fontSize: 11,
                    color: "#6b7a44",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                  }}
                >
                  {x.l}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: 18,
                    color: "#1c2018",
                    lineHeight: 1.25,
                    marginTop: 6,
                  }}
                >
                  {x.v}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-manrope), system-ui, sans-serif",
                    fontSize: 12.5,
                    color: "#7a7f6b",
                  }}
                >
                  {x.sub}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ZONE */}
      <section style={{ padding: "80px 56px", background: "#f1ecdc" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
            <div>
              <Eyebrow>Zone d&apos;intervention</Eyebrow>
              <h2
                style={{
                  fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(40px, 4.5vw, 56px)",
                  lineHeight: 1,
                  color: "#1c2018",
                  margin: 0,
                  letterSpacing: "-0.02em",
                }}
              >
                Dijon &amp;
                <br />
                <span style={{ color: "#6b7a44" }}>ses alentours.</span>
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontSize: 17,
                  lineHeight: 1.65,
                  color: "#4a4f3f",
                  marginTop: 24,
                  maxWidth: 460,
                }}
              >
                J&apos;interviens dans un rayon d&apos;environ <strong>30&nbsp;km autour de Dijon</strong>.
                Hors zone ? Contacte-moi quand même.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 24 }}>
                {villes.map((c, i) => (
                  <span
                    key={i}
                    style={{
                      padding: "6px 12px",
                      borderRadius: 999,
                      background: "#ffffff",
                      border: "1px solid #e8e4d4",
                      fontFamily: "var(--font-manrope), system-ui, sans-serif",
                      fontSize: 12.5,
                      color: "#4a4f3f",
                      fontWeight: 500,
                    }}
                  >
                    {c}
                  </span>
                ))}
                <span
                  style={{
                    padding: "6px 12px",
                    borderRadius: 999,
                    background: "#dde2ce",
                    color: "#6b7a44",
                    fontFamily: "var(--font-manrope), system-ui, sans-serif",
                    fontSize: 12.5,
                    fontWeight: 700,
                  }}
                >
                  + alentours
                </span>
              </div>
            </div>

            {/* Map placeholder */}
            <div
              style={{
                position: "relative",
                aspectRatio: "4 / 3",
                borderRadius: 28,
                overflow: "hidden",
                background: "#8f9e63",
                boxShadow: "0 20px 50px rgba(28,32,24,0.15)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(135deg, #3f4a2c, #6b7a44)",
                  opacity: 0.9,
                }}
              />
              <svg
                viewBox="0 0 400 300"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
              >
                <path d="M 0 180 Q 100 160 200 180 T 400 200" stroke="rgba(255,255,255,0.15)" strokeWidth="2" fill="none" />
                <path d="M 100 0 Q 120 80 200 150 T 280 300" stroke="rgba(255,255,255,0.12)" strokeWidth="2" fill="none" />
                <path d="M 50 250 Q 150 200 250 230 T 400 100" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" fill="none" />
                <circle cx="200" cy="170" r="105" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeDasharray="6 4" fill="rgba(143,158,99,0.18)" />
                <circle cx="200" cy="170" r="14" fill="#fbfaf4" />
                <circle cx="200" cy="170" r="6" fill="#6b7a44" />
              </svg>
              <div
                style={{
                  position: "absolute",
                  top: 24,
                  left: 24,
                  background: "rgba(255,255,255,0.95)",
                  padding: "8px 14px",
                  borderRadius: 12,
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontSize: 11,
                  color: "#1c2018",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Carte indicative
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 24,
                  right: 24,
                  background: "#fbfaf4",
                  color: "#1c2018",
                  padding: "10px 16px",
                  borderRadius: 14,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  boxShadow: "0 6px 14px rgba(0,0,0,0.18)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: 22,
                    lineHeight: 1,
                    color: "#6b7a44",
                  }}
                >
                  30 km
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-manrope), system-ui, sans-serif",
                    fontSize: 11,
                    opacity: 0.7,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Rayon
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "38%",
                  left: "46%",
                  transform: "translate(0, -36px)",
                  background: "#fbfaf4",
                  color: "#1c2018",
                  padding: "6px 12px",
                  borderRadius: 999,
                  fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  boxShadow: "0 6px 14px rgba(0,0,0,0.18)",
                }}
              >
                Dijon
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <ContactForm />

      {/* OUTRO */}
      <section style={{ padding: "0 56px 110px", background: "#fbfaf4" }}>
        <div
          style={{
            maxWidth: 800,
            margin: "0 auto",
            background: "#8f9e63",
            color: "#fbfaf4",
            borderRadius: 32,
            padding: "52px 56px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "relative" }}>
            <div
              style={{
                fontFamily: "var(--font-lora), Georgia, serif",
                fontWeight: 400,
                fontSize: 64,
                lineHeight: 1,
                marginBottom: 8,
                opacity: 0.7,
              }}
            >
              &ldquo;
            </div>
            <p
              style={{
                fontFamily: "var(--font-lora), Georgia, serif",
                fontStyle: "italic",
                fontSize: 22,
                lineHeight: 1.55,
                margin: 0,
                fontWeight: 500,
              }}
            >
              Merci d&apos;avoir pris le temps de me partager votre situation. Faire cette démarche,
              c&apos;est déjà un grand pas pour vous, votre chien, et envers vous-même.
            </p>
            <p
              style={{
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontSize: 16,
                lineHeight: 1.65,
                margin: "20px 0 0",
                opacity: 0.92,
              }}
            >
              Je serai ravie d&apos;échanger avec vous et de vous accompagner vers une relation plus
              sereine et une meilleure compréhension de votre duo.
            </p>
            <div
              style={{
                marginTop: 28,
                fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                fontWeight: 600,
                fontSize: 22,
              }}
            >
              À très vite 🐾
            </div>
            <div
              style={{
                marginTop: 4,
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontSize: 13,
                opacity: 0.8,
                letterSpacing: "0.04em",
              }}
            >
              NOVA LIEN · Éducatrice canine comportementaliste · Amandine PINTO
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
