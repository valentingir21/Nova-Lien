import Eyebrow from "@/components/ui/Eyebrow";
import PawPattern from "@/components/ui/PawPattern";

export default function Meaning() {
  return (
    <section
      style={{
        background: "#8f9e63",
        padding: "120px 56px",
        position: "relative",
        overflow: "hidden",
        color: "#fbfaf4",
      }}
    >
      <PawPattern color="rgba(255,255,255,0.11)" density={0.7} />
      <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center", position: "relative" }}>
        <Eyebrow light>Pourquoi Nova Lien ?</Eyebrow>
        <div
          style={{
            display: "inline-flex",
            alignItems: "baseline",
            gap: 28,
            marginBottom: 36,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(80px, 10vw, 144px)",
                color: "#fbfaf4",
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}
            >
              Nova
            </div>
            <div
              style={{
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontSize: 14,
                color: "rgba(255,255,255,0.85)",
                marginTop: 6,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              du latin · « nouveau »
            </div>
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(80px, 10vw, 144px)",
                color: "#ebe2c8",
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}
            >
              Lien
            </div>
            <div
              style={{
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontSize: 14,
                color: "rgba(255,255,255,0.85)",
                marginTop: 6,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              relation · connexion
            </div>
          </div>
        </div>
        <p
          style={{
            fontFamily: "var(--font-manrope), system-ui, sans-serif",
            fontSize: 20,
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.95)",
            maxWidth: 980,
            margin: "0 auto",
          }}
        >
          En astronomie, une{" "}
          <strong style={{ fontWeight: 700, color: "#fbfaf4" }}>nova</strong>{" "}désigne une étoile
          qui s&apos;illumine soudainement avant de retrouver progressivement son éclat. Un symbole
          de{" "}
          <em style={{ fontStyle: "italic" }}>renouveau, de révélation, de renaissance</em>.
        </p>
        <div
          style={{
            marginTop: 36,
            height: 1,
            width: 80,
            background: "rgba(255,255,255,0.35)",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <p
          style={{
            fontFamily: "var(--font-manrope), system-ui, sans-serif",
            fontSize: 17,
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.85)",
            maxWidth: 700,
            margin: "32px auto 0",
          }}
        >
          Nova Lien, c&apos;est la promesse d&apos;un renouveau — pour les dog parents qui
          construisent un quotidien serein, pour les chiens qui s&apos;épanouissent dans le respect
          de leurs besoins, et pour une société qui gagne en conscience face au bien-être animal.
        </p>
      </div>
    </section>
  );
}
