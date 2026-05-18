import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

const parcours = [
  {
    y: "2025",
    t: "Diplôme Éducatrice Canine Comportementaliste",
    d: "Nature de Chien — référence nationale, certifié Qualiopi",
  },
  {
    y: "2025",
    t: "ACACED",
    d: "Attestation officielle de l'État — Nature de Chien · Qualiopi",
  },
  {
    y: "2025",
    t: "Stage pratique",
    d: "Aux côtés de Valérie, « De la main à la patte » · Ahuy",
  },
];

export default function AmandineHome() {
  return (
    <section style={{ padding: "110px 56px", background: "#f1ecdc" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: 72,
            alignItems: "center",
          }}
        >
          {/* Photo */}
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: 28, overflow: "hidden" }}>
              <ImagePlaceholder tone="sage" aspect={1.15} label="Portrait Amandine" />
            </div>
            <div
              style={{
                position: "absolute",
                top: 24,
                left: -24,
                background: "#ffffff",
                padding: "14px 18px",
                borderRadius: 20,
                boxShadow: "0 12px 32px rgba(0,0,0,0.10)",
                display: "flex",
                gap: 12,
                alignItems: "center",
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 99,
                  background: "#9ac96a",
                  boxShadow: "0 0 0 4px rgba(154,201,106,0.2)",
                  flexShrink: 0,
                }}
              />
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: 14,
                    color: "#1c2018",
                  }}
                >
                  Disponible cette semaine
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-manrope), system-ui, sans-serif",
                    fontSize: 12,
                    color: "#7a7f6b",
                  }}
                >
                  Contactez-moi
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <Eyebrow>Bonjour, moi c&apos;est Amandine</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(36px, 4vw, 56px)",
                lineHeight: 1,
                color: "#1c2018",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              Éducatrice canine comportementaliste à Dijon.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontSize: 17,
                lineHeight: 1.7,
                color: "#4a4f3f",
                marginTop: 24,
                maxWidth: 520,
              }}
            >
              Après quelques années dans le commerce, une évidence s&apos;est imposée : j&apos;avais
              besoin de me sentir <strong>profondément utile</strong>. Accompagner les dog parents,
              aider les chiens à s&apos;épanouir, contribuer à faire reculer les abandons évitables.{" "}
              <em style={{ fontStyle: "italic" }}>C&apos;est là que je voulais être.</em>
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                marginTop: 32,
                paddingTop: 24,
                borderTop: "1px solid #e8e4d4",
              }}
            >
              {parcours.map((x, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "56px 1fr",
                    gap: 14,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                      fontWeight: 700,
                      fontSize: 14,
                      color: "#6b7a44",
                      background: "#dde2ce",
                      padding: "6px 10px",
                      borderRadius: 8,
                      textAlign: "center",
                    }}
                  >
                    {x.y}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                        fontWeight: 600,
                        fontSize: 15,
                        color: "#1c2018",
                        lineHeight: 1.25,
                      }}
                    >
                      {x.t}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-manrope), system-ui, sans-serif",
                        fontSize: 13,
                        color: "#7a7f6b",
                        marginTop: 2,
                      }}
                    >
                      {x.d}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/a-propos"
              style={{
                display: "inline-flex",
                gap: 10,
                alignItems: "center",
                marginTop: 28,
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontWeight: 600,
                fontSize: 14,
                color: "#1c2018",
                borderBottom: "2px solid #1c2018",
                paddingBottom: 3,
                textDecoration: "none",
              }}
            >
              Lire mon parcours complet →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
