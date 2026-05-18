import Eyebrow from "@/components/ui/Eyebrow";

const situations = [
  { n: "01", t: "Tire en laisse", d: "Toutes les balades virent au bras de fer.", tag: "Travaillable" },
  { n: "02", t: "Saute sur les gens", d: "L'accueil tourne au chaos systématique.", tag: "Travaillable" },
  { n: "03", t: "Aboiements excessifs", d: "Voisins, livreurs, passants — tout déclenche.", tag: "Travaillable" },
  { n: "04", t: "Malpropreté, destructions", d: "Bêtises quand tu n'es pas là, dégâts au quotidien.", tag: "Travaillable" },
  { n: "05", t: "Rappel difficile ou inexistant", d: "En extérieur, c'est lui qui décide.", tag: "Travaillable" },
  { n: "06", t: "Réagit face à certaines situations", d: "Objets, bruits, étrangers, vétérinaire…", tag: "Travaillable" },
  { n: "07", t: "Conflits avec d'autres chiens", d: "Chaque croisement vire au drame.", tag: "Travaillable" },
  { n: "08", t: "Anxiété de séparation, fugues", d: "Vocalises, destructions, panique au départ.", tag: "Travaillable" },
  { n: "09", t: "Protection de ressources", d: "Jouets, gamelle, panier, canapé.", tag: "Travaillable" },
];

const tags = ["Sans jugement", "Méthodes positives", "Approche personnalisée", "À ton rythme"];

export default function Emotional() {
  return (
    <section style={{ background: "#fbfaf4", padding: "110px 56px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: 72,
            alignItems: "flex-start",
          }}
        >
          {/* Left sticky */}
          <div style={{ position: "sticky", top: 100 }}>
            <Eyebrow>Tu te reconnais ?</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(40px, 4.5vw, 60px)",
                lineHeight: 1,
                color: "#1c2018",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              Tu viens d&apos;adopter, ou tu rencontres des difficultés au quotidien&nbsp;?
            </h2>
            <p
              style={{
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontSize: 17,
                lineHeight: 1.65,
                color: "#4a4f3f",
                marginTop: 28,
                maxWidth: 380,
              }}
            >
              Je suis là pour t&apos;aider, <strong>sans jugement</strong>. Chaque comportement
              raconte quelque chose — on apprend à le lire avant d&apos;y répondre.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 24, flexWrap: "wrap" }}>
              {tags.map((t, i) => (
                <span
                  key={i}
                  style={{
                    padding: "7px 14px",
                    borderRadius: 999,
                    background: "#ffffff",
                    border: "1px solid #e8e4d4",
                    fontFamily: "var(--font-manrope), system-ui, sans-serif",
                    fontSize: 12,
                    color: "#4a4f3f",
                    fontWeight: 600,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right list */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
              borderTop: "1px solid #e8e4d4",
            }}
          >
            {situations.map((x, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "60px 1fr auto",
                  gap: 24,
                  alignItems: "center",
                  padding: "20px 0",
                  borderBottom: "1px solid #e8e4d4",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: 22,
                    color: "#c9b78f",
                    letterSpacing: "0.04em",
                  }}
                >
                  {x.n}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                      fontWeight: 600,
                      fontSize: 21,
                      color: "#1c2018",
                      lineHeight: 1.15,
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
                <div
                  style={{
                    fontFamily: "var(--font-manrope), system-ui, sans-serif",
                    fontSize: 11,
                    color: "#6b7a44",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    background: "#dde2ce",
                    padding: "6px 12px",
                    borderRadius: 999,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    whiteSpace: "nowrap",
                  }}
                >
                  {x.tag}
                  <span>↗</span>
                </div>
              </div>
            ))}
            <div
              style={{
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontStyle: "italic",
                fontSize: 14,
                color: "#7a7f6b",
                textAlign: "right",
                paddingTop: 14,
              }}
            >
              … ou d&apos;autres soucis ? On en parle.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
