import Eyebrow from "@/components/ui/Eyebrow";

const formations = [
  {
    y: "2025",
    t: "Stage pratique avec Valérie Mouilleseaux-Iches",
    sub: "« De la main à la patte 21 » · Ahuy et alentours",
    d: "Une immersion terrain aux côtés d'une professionnelle expérimentée, dans la réalité du métier. Observation, accompagnement de duos, gestion de cas concrets.",
    ongoing: false,
  },
  {
    y: "2025",
    t: "Diplôme Éducatrice Canine Comportementaliste",
    sub: "Nature de Chien — centre de formation de référence nationale · certifié Qualiopi",
    d: "Une formation complète alliant théorie approfondie, pratique avec de vrais chiens et rendez-vous clients réels.",
    ongoing: false,
  },
  {
    y: "2026",
    t: "ACACED — Attestation officielle",
    sub: "Nature de Chien — centre de formation de référence nationale · certifié Qualiopi",
    d: "Le document officiel délivré par l'État, qui autorise légalement à exercer auprès des animaux de compagnie.",
    ongoing: false,
  },
  {
    y: "En cours",
    t: "En formation continue",
    sub: null,
    d: "Le comportement canin est un domaine en perpétuelle évolution. Se former en continu est un engagement envers vous et vos chiens.",
    ongoing: true,
  },
];

export default function ParcoursSection() {
  return (
    <section style={{ padding: "100px 56px 120px", background: "#fbfaf4" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <Eyebrow>Mon parcours</Eyebrow>
          <h2
            style={{
              fontFamily: "var(--font-quicksand), system-ui, sans-serif",
              fontWeight: 600,
              fontSize: "clamp(40px, 4.5vw, 64px)",
              lineHeight: 1,
              color: "#1c2018",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Une formation exigeante,
            <br />
            <span style={{ color: "#6b7a44" }}>et l&apos;envie d&apos;aller plus loin.</span>
          </h2>
        </div>

        <div style={{ position: "relative", maxWidth: 860, margin: "0 auto" }}>
          <div style={{ position: "absolute", left: 80, top: 20, bottom: 20, width: 2, background: "#e8e4d4" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {formations.map((f, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  gap: 28,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    fontFamily: f.ongoing ? "var(--font-manrope), system-ui, sans-serif" : "var(--font-quicksand), system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: f.ongoing ? 9 : 20,
                    color: f.ongoing ? "#4a4f3f" : "#6b7a44",
                    background: f.ongoing ? "#f1ecdc" : "#dde2ce",
                    padding: "12px 14px",
                    borderRadius: 12,
                    textAlign: "center",
                    letterSpacing: f.ongoing ? "0.08em" : undefined,
                    textTransform: f.ongoing ? "uppercase" : undefined,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {f.y}
                </div>

                <div
                  style={{
                    background: f.ongoing ? "#f1ecdc" : "#ffffff",
                    border: f.ongoing ? "1px dashed #c9b78f" : "1px solid #e8e4d4",
                    borderRadius: 20,
                    padding: "20px 26px",
                    position: "relative",
                  }}
                >
                  {!f.ongoing && (
                    <div style={{ position: "absolute", left: -10, top: 20, width: 0, height: 0, borderTop: "8px solid transparent", borderBottom: "8px solid transparent", borderRight: "10px solid #ffffff" }} />
                  )}
                  <h3 style={{ fontFamily: "var(--font-quicksand), system-ui, sans-serif", fontWeight: 600, fontSize: 20, margin: 0, color: "#1c2018", lineHeight: 1.2 }}>
                    {f.t}
                  </h3>
                  {f.sub && (
                    <div style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 12, color: "#7a7f6b", marginTop: 4, fontWeight: 500 }}>
                      {f.sub}
                    </div>
                  )}
                  <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 15, lineHeight: 1.65, color: "#4a4f3f", margin: "10px 0 0" }}>
                    {f.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
