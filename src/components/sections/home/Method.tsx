import Eyebrow from "@/components/ui/Eyebrow";

const principles = [
  { n: "01", t: "Observer", d: "On part de ton chien : son histoire, son langage corporel, ses motivations, ses déclencheurs." },
  { n: "02", t: "Comprendre", d: "On décrypte ensemble. Chaque comportement raconte quelque chose — on le lit avant d'y répondre." },
  { n: "03", t: "Construire", d: "Méthodes positives, exercices progressifs, ajustements en réel. Tu repars avec un plan concret." },
  { n: "04", t: "Renforcer", d: "Le lien se construit dans la durée. On reste en contact, on ajuste, on célèbre les progrès." },
];

export default function Method() {
  return (
    <section style={{ background: "#fbfaf4", padding: "120px 56px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: 64,
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          <div>
            <Eyebrow>Mon approche</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(48px, 5.5vw, 72px)",
                lineHeight: 1,
                color: "#1c2018",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              Quatre temps,
              <br />
              <span style={{ color: "#6b7a44" }}>un seul cap.</span>
            </h2>
          </div>
          <p
            style={{
              fontFamily: "var(--font-manrope), system-ui, sans-serif",
              fontSize: 17,
              color: "#4a4f3f",
              maxWidth: 400,
              margin: 0,
              lineHeight: 1.65,
            }}
          >
            Bienveillance, respect des émotions, méthodes positives. Pas de soumission ni de
            coercition — juste du travail, ensemble.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            borderTop: "1px solid #e8e4d4",
            borderLeft: "1px solid #e8e4d4",
            background: "#ffffff",
            borderRadius: 28,
            overflow: "hidden",
            boxShadow: "0 24px 60px rgba(28,32,24,0.06)",
          }}
        >
          {principles.map((p, i) => (
            <div
              key={i}
              style={{
                padding: "40px 32px",
                borderRight: "1px solid #e8e4d4",
                borderBottom: "1px solid #e8e4d4",
                minHeight: 260,
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "#dde2ce",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: 16,
                    color: "#6b7a44",
                    flexShrink: 0,
                  }}
                >
                  {p.n}
                </div>
                <div style={{ height: 1, flex: 1, background: "#e8e4d4" }} />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: 32,
                  margin: 0,
                  color: "#1c2018",
                  lineHeight: 1.05,
                  letterSpacing: "-0.01em",
                }}
              >
                {p.t}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: "#4a4f3f",
                  margin: 0,
                }}
              >
                {p.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
