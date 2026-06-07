import Eyebrow from "@/components/ui/Eyebrow";

export default function HowItWorks() {
  return (
    <section
      style={{
        minHeight: "calc(100vh - 96px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "48px 56px",
        background: "#f1ecdc",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", width: "100%" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <Eyebrow>Le déroulé</Eyebrow>
          <h2
            style={{
              fontFamily: "var(--font-quicksand), system-ui, sans-serif",
              fontWeight: 600,
              fontSize: "clamp(44px, 6vw, 80px)",
              lineHeight: 1.02,
              margin: 0,
              letterSpacing: "-0.03em",
            }}
          >
            <span style={{ color: "#1c2018" }}>Comment se passe</span>
            <br />
            <span style={{ color: "#6b7a44" }}>un accompagnement&nbsp;?</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-manrope), system-ui, sans-serif",
              fontSize: 16,
              lineHeight: 1.6,
              color: "#4a4f3f",
              maxWidth: 600,
              margin: "16px auto 0",
            }}
          >
            Je me déplace chez vous, dans votre environnement de tous les jours. C&apos;est là que
            j&apos;analyse votre chien au plus proche de votre quotidien.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {/* Bilan */}
          <div
            style={{
              background: "#8f9e63",
              color: "#fbfaf4",
              borderRadius: 28,
              padding: "34px 28px",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
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
                fontSize: 30,
                margin: 0,
                lineHeight: 1.05,
                letterSpacing: "-0.01em",
              }}
            >
              Bilan comportemental
            </h3>
            <p
              style={{
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontSize: 14,
                lineHeight: 1.6,
                opacity: 0.92,
                marginTop: 16,
                flex: 1,
              }}
            >
              Une rencontre d&apos;environ{" "}
              <strong>1h à votre domicile</strong>, sans jugement, pour échanger en profondeur sur
              votre chien, votre quotidien et vos objectifs. Je pose ensuite un programme entièrement
              personnalisé.
            </p>
            <div
              style={{
                marginTop: 28,
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
              padding: "34px 28px",
              display: "flex",
              flexDirection: "column",
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
                fontSize: 30,
                margin: 0,
                lineHeight: 1.05,
                color: "#1c2018",
                letterSpacing: "-0.01em",
              }}
            >
              Séance individuelle
            </h3>
            <p
              style={{
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontSize: 14,
                lineHeight: 1.6,
                color: "#4a4f3f",
                marginTop: 16,
                flex: 1,
              }}
            >
              Chaque chien est unique, chaque séance l&apos;est aussi. Elle prolonge ce que révèle
              le bilan, et s&apos;ajuste à votre rythme.
            </p>
            <div
              style={{
                marginTop: 28,
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
              Forfaits disponibles – acompte de 30&nbsp;%.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
