import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";

const items = [
  {
    t: "Ses autocontrôles",
    d: "Gérer l'excitation, tolérer la frustration, faire face à l'imprévu sans stress, redescendre après une émotion forte, etc...",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7a44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    t: "Sa capacité à rester calme",
    d: "Dans la maison, en balade, face aux imprévus.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7a44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
  },
  {
    t: "Son focus & sa confiance",
    d: "Te choisir comme repère, même dans le bruit.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7a44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="2" y1="12" x2="6" y2="12" />
        <line x1="18" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    t: "Sa prise de décisions",
    d: "Faire les bons choix de lui-même, sans consigne.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7a44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="9" y1="18" x2="15" y2="18" />
        <line x1="10" y1="22" x2="14" y2="22" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
      </svg>
    ),
  },
];

export default function Vision() {
  return (
    <section className="vision-section" style={{ padding: "120px 56px", background: "#f1ecdc" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="vision-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 64, alignItems: "flex-start" }}>
          {/* Left sticky */}
          <div className="vision-left" style={{ position: "sticky", top: 100 }}>
            <Eyebrow>Ma vision</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(36px, 4vw, 52px)",
                lineHeight: 1.1,
                color: "#1c2018",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              Comprendre avant de corriger,{" "}
              <span style={{ color: "#6b7a44" }}>respecter avant d&apos;exiger.</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontSize: 18,
                lineHeight: 1.6,
                color: "#7a7f6b",
                marginTop: 24,
                maxWidth: 460,
              }}
            >
              Une approche centrée sur le bien-être réel — pas sur la simple obéissance.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 24, maxWidth: 460 }}>
              {[
                { t: "Identifier la racine", d: "Chaque comportement a une origine. On traite la cause, pas le symptôme." },
                { t: "Développer l'autonomie", d: "Un chien équilibré, stable émotionnellement, qui fait de bons choix seul." },
                { t: "Renforcer la confiance", d: "Une relation construite dans les deux sens — sans coercition ni contrainte." },
                { t: "Accompagner le dog parent", d: "Vous aussi, vous repartez avec les clés pour ne plus jamais vous sentir seul(e)." },
                { t: "À votre rythme", d: "Au sien, dans le respect de ce que vous êtes chacun." },
              ].map((x, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 14,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#8f9e63",
                      flexShrink: 0,
                      marginTop: 7,
                    }}
                  />
                  <div>
                    <span style={{ fontFamily: "var(--font-quicksand), system-ui, sans-serif", fontWeight: 600, fontSize: 17, color: "#1c2018" }}>
                      {x.t}
                    </span>
                    <span style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 16, color: "#7a7f6b", marginLeft: 6 }}>
                      — {x.d}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p
              style={{
                fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                fontWeight: 700,
                fontSize: 17,
                lineHeight: 1.4,
                color: "#1c2018",
                marginTop: 20,
                maxWidth: 460,
              }}
            >
              L&apos;autonomie pour chacun. Un lien entre vous encore plus solide.
            </p>
            <Link
              href="/a-propos"
              style={{
                display: "inline-flex",
                gap: 8,
                alignItems: "center",
                marginTop: 24,
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontWeight: 600,
                fontSize: 14,
                color: "#6b7a44",
                borderBottom: "2px solid #6b7a44",
                paddingBottom: 3,
                textDecoration: "none",
              }}
            >
              En savoir plus sur moi →
            </Link>
          </div>

          {/* Right cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Eyebrow>Concrètement, je travaille pour que ton chien développe&nbsp;:</Eyebrow>
            {items.map((x, i) => (
              <div
                key={i}
                style={{
                  background: "#ffffff",
                  borderRadius: 18,
                  border: "1px solid #e8e4d4",
                  padding: "20px 24px",
                  display: "grid",
                  gridTemplateColumns: "40px 1fr",
                  gap: 18,
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    background: "#dde2ce",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {x.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                      fontWeight: 600,
                      fontSize: 19,
                      color: "#1c2018",
                      lineHeight: 1.2,
                    }}
                  >
                    {x.t}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-manrope), system-ui, sans-serif",
                      fontSize: 14,
                      color: "#4a4f3f",
                      marginTop: 4,
                    }}
                  >
                    {x.d}
                  </div>
                </div>
              </div>
            ))}
            <div
              style={{
                background: "#8f9e63",
                color: "#fbfaf4",
                borderRadius: 18,
                padding: "24px 28px",
                marginTop: 8,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: 20,
                  lineHeight: 1.3,
                }}
              >
                Un chien autonome, c&apos;est un chien en bonne santé mentale. Quand ton chien va
                bien dans sa tête, vous allez bien tous les deux.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
