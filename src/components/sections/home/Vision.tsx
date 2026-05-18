import Eyebrow from "@/components/ui/Eyebrow";

const items = [
  { t: "Ses autocontrôles", d: "Savoir attendre, se poser, gérer l'excitation." },
  { t: "Sa capacité à rester calme", d: "Dans la maison, en balade, face aux imprévus." },
  { t: "Son focus & sa confiance", d: "Te choisir comme repère, même dans le bruit." },
  { t: "Sa prise de décisions", d: "Faire les bons choix de lui-même, sans consigne." },
];

export default function Vision() {
  return (
    <section style={{ padding: "120px 56px", background: "#f1ecdc" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 64, alignItems: "flex-start" }}>
          {/* Left sticky */}
          <div style={{ position: "sticky", top: 100 }}>
            <Eyebrow>Ma vision</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(44px, 5vw, 64px)",
                lineHeight: 1,
                color: "#1c2018",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              Apprendre l&apos;autonomie.
              <br />
              <span
                style={{
                  color: "#6b7a44",
                  fontFamily: "var(--font-lora), Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: 500,
                }}
              >
                Pas le contrôle.
              </span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontSize: 18,
                lineHeight: 1.7,
                color: "#4a4f3f",
                marginTop: 28,
                maxWidth: 460,
              }}
            >
              Je ne t&apos;apprendrai pas à contrôler ton chien. Je t&apos;apprendrai à lui apprendre
              l&apos;autonomie — pour ne plus avoir à le surveiller, mais lui faire confiance parce
              qu&apos;il sait agir.
            </p>
            <p
              style={{
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontSize: 15,
                lineHeight: 1.65,
                color: "#4a4f3f",
                marginTop: 16,
                maxWidth: 460,
                fontStyle: "italic",
              }}
            >
              Un comportement non désiré n&apos;apparaît jamais par hasard. Mon approche va à la
              racine, pas au symptôme.
            </p>
          </div>

          {/* Right cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontSize: 12,
                color: "#6b7a44",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 4,
              }}
            >
              Concrètement, je travaille pour que ton chien développe&nbsp;:
            </div>
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
                    color: "#6b7a44",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: 16,
                    flexShrink: 0,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
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
