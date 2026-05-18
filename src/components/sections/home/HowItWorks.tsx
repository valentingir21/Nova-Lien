import Eyebrow from "@/components/ui/Eyebrow";
import CheckIcon from "@/components/ui/CheckIcon";

const lieux = [
  { l: "À votre domicile", d: "Travailler dans l'environnement du quotidien" },
  { l: "En extérieur", d: "Nature, ville, balades structurées" },
  { l: "Sur terrain clôturé", d: 'Ahuy — terrain partenaire « De la main à la patte »' },
];

export default function HowItWorks() {
  return (
    <section style={{ padding: "120px 56px", background: "#fbfaf4" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <Eyebrow>Le déroulé</Eyebrow>
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
            Comment se passe
            <br />
            un accompagnement&nbsp;?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-manrope), system-ui, sans-serif",
              fontSize: 17,
              lineHeight: 1.65,
              color: "#4a4f3f",
              maxWidth: 620,
              margin: "24px auto 0",
            }}
          >
            Je me déplace chez vous, dans votre environnement de tous les jours — c&apos;est là que
            j&apos;analyse votre chien au plus proche de votre quotidien.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {/* Bilan */}
          <div
            style={{
              background: "#8f9e63",
              color: "#fbfaf4",
              borderRadius: 28,
              padding: 36,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                  flexShrink: 0,
                }}
              >
                01
              </div>
              <div
                style={{
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  opacity: 0.85,
                }}
              >
                Point de départ obligatoire
              </div>
            </div>
            <h3
              style={{
                fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                fontWeight: 600,
                fontSize: 38,
                margin: 0,
                lineHeight: 1.05,
                letterSpacing: "-0.01em",
              }}
            >
              Le bilan comportemental
            </h3>
            <p
              style={{
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontSize: 15,
                lineHeight: 1.65,
                opacity: 0.92,
                marginTop: 16,
              }}
            >
              Une rencontre d&apos;environ{" "}
              <strong>1h à votre domicile</strong>, sans jugement, pour échanger en profondeur sur
              votre chien, votre quotidien et vos objectifs. Je pose ensuite un programme entièrement
              personnalisé.
            </p>
            <div
              style={{
                marginTop: 24,
                padding: "16px 20px",
                background: "rgba(255,255,255,0.12)",
                borderRadius: 16,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontSize: 13,
                  opacity: 0.9,
                }}
              >
                Tarif bilan
              </span>
              <span
                style={{
                  fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: 28,
                }}
              >
                50&nbsp;€
              </span>
            </div>
            <div
              style={{
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontSize: 12,
                opacity: 0.75,
                marginTop: 10,
              }}
            >
              Réglé le jour du rendez-vous.
            </div>
          </div>

          {/* Suivi */}
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e8e4d4",
              borderRadius: 28,
              padding: 36,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
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
                02
              </div>
              <div
                style={{
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  color: "#6b7a44",
                }}
              >
                Suivi personnalisé
              </div>
            </div>
            <h3
              style={{
                fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                fontWeight: 600,
                fontSize: 38,
                margin: 0,
                lineHeight: 1.05,
                color: "#1c2018",
                letterSpacing: "-0.01em",
              }}
            >
              Les séances de suivi
            </h3>
            <p
              style={{
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontSize: 15,
                lineHeight: 1.65,
                color: "#4a4f3f",
                marginTop: 16,
              }}
            >
              Au rythme adapté à votre progression. Selon la problématique, j&apos;ajuste le{" "}
              <strong>lieu de travail</strong> pour que chaque séance soit la plus efficace possible.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                marginTop: 20,
              }}
            >
              {lieux.map((x, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "24px 1fr",
                    gap: 12,
                    alignItems: "flex-start",
                    padding: "10px 0",
                    borderBottom: i < 2 ? "1px solid #e8e4d4" : "none",
                  }}
                >
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 8,
                      background: "#dde2ce",
                      color: "#6b7a44",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <CheckIcon size={14} color="#6b7a44" />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                        fontWeight: 600,
                        fontSize: 14,
                        color: "#1c2018",
                      }}
                    >
                      {x.l}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-manrope), system-ui, sans-serif",
                        fontSize: 12,
                        color: "#7a7f6b",
                        marginTop: 1,
                      }}
                    >
                      {x.d}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: 20,
                padding: "16px 20px",
                background: "#f7f2e3",
                borderRadius: 16,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontSize: 13,
                  color: "#4a4f3f",
                }}
              >
                Tarif séance
              </span>
              <span
                style={{
                  fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: 28,
                  color: "#1c2018",
                }}
              >
                50&nbsp;€{" "}
                <span
                  style={{
                    fontSize: 14,
                    color: "#7a7f6b",
                    fontWeight: 500,
                  }}
                >
                  / heure
                </span>
              </span>
            </div>
            <div
              style={{
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontSize: 12,
                color: "#7a7f6b",
                marginTop: 10,
              }}
            >
              Forfaits disponibles — paiement échelonnable.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
