import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";

const coords = [
  { l: "Téléphone", v: "06 13 31 21 47" },
  { l: "Email", v: "amandine.novalien@gmail.com" },
  { l: "Instagram", v: "@nova.lien_" },
  { l: "Zone", v: "Dijon & environs (30 km)" },
];

export default function ContactHome() {
  return (
    <section style={{ padding: "120px 56px", background: "#f1ecdc" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            background: "#ffffff",
            borderRadius: 36,
            padding: "56px 48px",
            border: "1px solid #e8e4d4",
            boxShadow: "0 24px 60px rgba(28,32,24,0.06)",
            display: "grid",
            gridTemplateColumns: "1fr 1.1fr",
            gap: 56,
            alignItems: "flex-start",
          }}
        >
          <div>
            <Eyebrow>Premier contact</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(36px, 4vw, 52px)",
                lineHeight: 1,
                color: "#1c2018",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              Demande de premier contact.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontSize: 16,
                lineHeight: 1.65,
                color: "#4a4f3f",
                marginTop: 22,
                maxWidth: 420,
              }}
            >
              Remplissez ce formulaire et je vous recontacte <strong>dans les 48&nbsp;h</strong>{" "}
              pour convenir ensemble d&apos;un rendez-vous. Sans engagement.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                marginTop: 28,
              }}
            >
              {coords.map((x, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "12px 16px",
                    borderRadius: 12,
                    background: "#f7f2e3",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-manrope), system-ui, sans-serif",
                      fontSize: 11,
                      color: "#7a7f6b",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {x.l}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                      fontWeight: 600,
                      fontSize: 14,
                      color: "#1c2018",
                    }}
                  >
                    {x.v}
                  </span>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 28,
                padding: 20,
                background: "#dde2ce",
                borderRadius: 16,
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontSize: 14,
                lineHeight: 1.6,
                color: "#3f4a2c",
              }}
            >
              <strong
                style={{
                  fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                  fontSize: 15,
                  color: "#3f4a2c",
                }}
              >
                Merci 🐾
              </strong>
              <br />
              Faire cette démarche, c&apos;est déjà un grand pas — pour vous, pour votre chien, et
              envers vous-même. À très vite.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontSize: 16,
                lineHeight: 1.65,
                color: "#4a4f3f",
                margin: 0,
              }}
            >
              Pour prendre contact, rendez-vous sur la page dédiée avec le formulaire complet.
              Je vous poserai quelques questions sur vous et votre chien pour préparer au mieux notre
              premier échange.
            </p>
            <Link
              href="/contact"
              style={{
                background: "#8f9e63",
                color: "#fbfaf4",
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontWeight: 600,
                fontSize: 15,
                padding: "18px 28px",
                borderRadius: 999,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <span>Remplir le formulaire de contact</span>
              <span
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 99,
                  background: "#fbfaf4",
                  color: "#1c2018",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
