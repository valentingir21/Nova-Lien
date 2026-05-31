import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import PawIcon from "@/components/ui/PawIcon";

const situations = [
  { t: "Tire en laisse", d: "Toutes les balades virent au bras de fer." },
  { t: "Saute sur les gens", d: "L'accueil tourne au chaos systématique." },
  { t: "Aboiements excessifs", d: "Voisins, livreurs, passants — tout déclenche." },
  { t: "Malpropreté, destructions", d: "Bêtises quand tu n'es pas là, dégâts au quotidien." },
  { t: "Rappel difficile ou inexistant", d: "En extérieur, c'est lui qui décide." },
  { t: "Réagit face à certaines situations", d: "Objets, bruits, étrangers, vétérinaire…" },
  { t: "Conflits avec d'autres chiens", d: "Chaque croisement vire au drame." },
  { t: "Anxiété de séparation, fugues", d: "Vocalises, destructions, panique au départ." },
  { t: "Protection de ressources", d: "Jouets, gamelle, panier, canapé." },
];

const tags = ["Sans jugement", "Méthodes positives", "Approche personnalisée", "À votre rythme"];

const half = Math.ceil(situations.length / 2);
const left = situations.slice(0, half);
const right = situations.slice(half);

function SituationItem({ x }: { x: { t: string; d: string } }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "40px 1fr",
        gap: 16,
        alignItems: "center",
        padding: "18px 0",
        borderBottom: "1px solid #e8e4d4",
      }}
    >
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 10,
          background: "#dde2ce",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <PawIcon size={18} color="#6b7a44" />
      </div>
      <div>
        <div
          style={{
            fontFamily: "var(--font-quicksand), system-ui, sans-serif",
            fontWeight: 600,
            fontSize: 18,
            color: "#1c2018",
            lineHeight: 1.15,
          }}
        >
          {x.t}
        </div>
        <div
          style={{
            fontFamily: "var(--font-manrope), system-ui, sans-serif",
            fontSize: 13,
            color: "#4a4f3f",
            marginTop: 3,
          }}
        >
          {x.d}
        </div>
      </div>
    </div>
  );
}

export default function Emotional() {
  return (
    <section className="emotional-section" style={{ background: "#fbfaf4", padding: "110px 56px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <Eyebrow>Tes défis</Eyebrow>
          <div
            className="emotional-header"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 48,
              alignItems: "center",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(28px, 3vw, 40px)",
                lineHeight: 1.05,
                color: "#1c2018",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              Tu rencontres des difficultés{" "}
              <span style={{ color: "#6b7a44" }}>au quotidien&nbsp;?</span>
            </h2>
            <div className="emotional-tags" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {tags.map((t, i) => (
                <span
                  key={i}
                  style={{
                    padding: "12px 16px",
                    borderRadius: 999,
                    background: "#ffffff",
                    border: "1px solid #e8e4d4",
                    fontFamily: "var(--font-manrope), system-ui, sans-serif",
                    fontSize: 14,
                    color: "#4a4f3f",
                    fontWeight: 600,
                    textAlign: "center",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Two-column list */}
        <div className="emotional-list" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
          <div className="emotional-left-col" style={{ borderTop: "1px solid #e8e4d4", paddingRight: 40 }}>
            {left.map((x, i) => (
              <SituationItem key={i} x={x} />
            ))}
          </div>
          <div className="emotional-right-col" style={{ borderTop: "1px solid #e8e4d4", paddingLeft: 40, borderLeft: "1px solid #e8e4d4", display: "flex", flexDirection: "column" }}>
            {right.map((x, i) => (
              <SituationItem key={i} x={x} />
            ))}
            <div
              style={{
                display: "flex",
                gap: 16,
                alignItems: "center",
                paddingTop: 24,
                flexWrap: "wrap",
                flex: 1,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontStyle: "italic",
                  fontSize: 14,
                  color: "#7a7f6b",
                }}
              >
                … ou d&apos;autre soucis ? On en parle.
              </span>
              <Link
                href="/contact"
                style={{
                  padding: "8px 18px",
                  borderRadius: 999,
                  background: "#8f9e63",
                  color: "#fbfaf4",
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: 13,
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                Me contacter →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
