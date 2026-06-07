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
            <span style={{ color: "#6b7a44" }}>
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

            {/* Map */}
            <div
              style={{
                position: "relative",
                aspectRatio: "4 / 3",
                borderRadius: 28,
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(28,32,24,0.15)",
              }}
            >
              <svg
                viewBox="-42 -42 84 84"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", display: "block", border: "1px solid #e8e4d4", background: "#f7f2e3" }}
                aria-label="Zone d'intervention : Dijon et 30 km alentours"
              >
                {/* Background */}
                <rect x="-42" y="-36" width="90" height="74" fill="#f7f2e3" />

                {/* 30km zone */}
                <circle cx="0" cy="0" r="30" fill="none" stroke="#8f9e63" strokeWidth="0.3" strokeDasharray="2 2" strokeOpacity="0.4" />
                <text x="22" y="-22" fontSize="1.9" fill="#8f9e63" fontWeight="600" fontFamily="system-ui, sans-serif">rayon 30 km</text>

                {/* Dijon */}
                <circle cx="0" cy="0" r="3.5" fill="rgba(143,158,99,0.2)" />
                <circle cx="0" cy="0" r="2" fill="#8f9e63" />
                <text x="0" y="-4" textAnchor="middle" fontSize="3.2" fontWeight="700" fill="#1c2018" fontFamily="system-ui, sans-serif">Dijon</text>

                {/* Nord */}
                <circle cx="0" cy="-27" r="1.2" fill="#6b7a44" />
                <text x="1.8" y="-26" fontSize="1.9" fill="#4a4f3f" fontFamily="system-ui, sans-serif">Is-sur-Tille</text>

                <circle cx="1" cy="-11" r="0.8" fill="#6b7a44" />
                <text x="2.5" y="-10.2" fontSize="1.6" fill="#7a7f6b" fontFamily="system-ui, sans-serif">Ahuy</text>

                {/* Nord-Est */}
                <circle cx="14" cy="-17" r="1.2" fill="#6b7a44" />
                <text x="15.5" y="-16.2" fontSize="1.9" fill="#4a4f3f" fontFamily="system-ui, sans-serif">Mirebeau</text>

                <circle cx="5" cy="-6" r="0.8" fill="#6b7a44" />
                <text x="6.5" y="-5.2" fontSize="1.6" fill="#7a7f6b" fontFamily="system-ui, sans-serif">St-Apollinaire</text>

                {/* Est */}
                <circle cx="29" cy="0" r="1.2" fill="#6b7a44" />
                <text x="30.5" y="0.8" fontSize="1.9" fill="#4a4f3f" fontFamily="system-ui, sans-serif">Auxonne</text>

                <circle cx="17" cy="1" r="1.2" fill="#6b7a44" />
                <text x="18.5" y="1.8" fontSize="1.9" fill="#4a4f3f" fontFamily="system-ui, sans-serif">Genlis</text>

                <circle cx="7" cy="2" r="0.8" fill="#6b7a44" />
                <text x="8.5" y="2.8" fontSize="1.6" fill="#7a7f6b" fontFamily="system-ui, sans-serif">Quetigny</text>

                {/* Sud-Est */}
                <circle cx="22" cy="11" r="1.2" fill="#6b7a44" />
                <text x="23.5" y="11.8" fontSize="1.9" fill="#4a4f3f" fontFamily="system-ui, sans-serif">Brazey</text>

                <circle cx="3" cy="5" r="0.8" fill="#6b7a44" />
                <text x="4.5" y="5.8" fontSize="1.6" fill="#7a7f6b" fontFamily="system-ui, sans-serif">Longvic</text>

                {/* Sud */}
                <circle cx="2" cy="14" r="1.2" fill="#6b7a44" />
                <text x="3.5" y="14.8" fontSize="1.9" fill="#4a4f3f" fontFamily="system-ui, sans-serif">Gevrey-Chbtn.</text>

                <circle cx="1" cy="22" r="1.2" fill="#6b7a44" />
                <text x="2.5" y="22.8" fontSize="1.9" fill="#4a4f3f" fontFamily="system-ui, sans-serif">Nuits-St-G.</text>

                <circle cx="0" cy="9" r="0.8" fill="#6b7a44" />
                <text x="-1.5" y="10" textAnchor="end" fontSize="1.6" fill="#7a7f6b" fontFamily="system-ui, sans-serif">Marsannay</text>

                <circle cx="-2" cy="6" r="0.8" fill="#6b7a44" />
                <text x="-3.5" y="7" textAnchor="end" fontSize="1.6" fill="#7a7f6b" fontFamily="system-ui, sans-serif">Chenôve</text>

                {/* Nord-Ouest */}
                <circle cx="-9" cy="-10" r="1.2" fill="#6b7a44" />
                <text x="-10.5" y="-9.2" textAnchor="end" fontSize="1.9" fill="#4a4f3f" fontFamily="system-ui, sans-serif">Norges</text>

                <circle cx="-15" cy="-20" r="1.2" fill="#6b7a44" />
                <text x="-16.5" y="-19.2" textAnchor="end" fontSize="1.9" fill="#4a4f3f" fontFamily="system-ui, sans-serif">Vitteaux</text>

                {/* Ouest */}
                <circle cx="-6" cy="-4" r="0.8" fill="#6b7a44" />
                <text x="-7.5" y="-3.2" textAnchor="end" fontSize="1.6" fill="#7a7f6b" fontFamily="system-ui, sans-serif">Hauteville</text>

                <circle cx="-8" cy="3" r="1.2" fill="#6b7a44" />
                <text x="-9.5" y="3.8" textAnchor="end" fontSize="1.9" fill="#4a4f3f" fontFamily="system-ui, sans-serif">Plombières</text>

                <circle cx="-22" cy="0" r="1.2" fill="#6b7a44" />
                <text x="-23.5" y="0.8" textAnchor="end" fontSize="1.9" fill="#4a4f3f" fontFamily="system-ui, sans-serif">Sombernon</text>

                {/* Sud-Ouest */}
                <circle cx="-18" cy="22" r="1.2" fill="#6b7a44" />
                <text x="-19.5" y="22.8" textAnchor="end" fontSize="1.9" fill="#4a4f3f" fontFamily="system-ui, sans-serif">Bligny-s-O.</text>
              </svg>
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
            background: "#f1ecdc",
            color: "#1c2018",
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
