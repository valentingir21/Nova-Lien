import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";

const bullets = [
  "Identifier l'origine du comportement",
  "Développer l'autonomie",
  "Renforcer sa confiance du chien en lui, et en vous",
  "Accompagner le dog parent",
  "Respecter le rythme de chacun",
];

export default function Vision() {
  return (
    <section className="vision-section" style={{ padding: "80px 56px", background: "#f1ecdc" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <div style={{ marginBottom: 40 }}>
          <Eyebrow>Ma vision</Eyebrow>
          <h2
            style={{
              fontFamily: "var(--font-quicksand), system-ui, sans-serif",
              fontWeight: 600,
              fontSize: "clamp(28px, 3vw, 40px)",
              lineHeight: 1.1,
              color: "#1c2018",
              margin: "0 0 16px",
              letterSpacing: "-0.02em",
              maxWidth: 620,
            }}
          >
            Comprendre avant de corriger,{" "}
            <span style={{ color: "#6b7a44" }}>respecter avant d&apos;exiger.</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-manrope), system-ui, sans-serif",
              fontSize: 17,
              lineHeight: 1.6,
              color: "#7a7f6b",
              margin: 0,
              maxWidth: 480,
            }}
          >
            Une approche centrée sur le bien-être réel, pas sur la simple obéissance.
          </p>
        </div>

        <div style={{ borderTop: "1.5px solid #8f9e63" }}>
          {bullets.map((label, i) => (
            <div
              key={i}
              className="vision-item"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "16px 0",
                borderBottom: "1.5px solid #8f9e63",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontWeight: 500,
                  fontSize: 16,
                  color: "#1c2018",
                  lineHeight: 1.3,
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <p style={{ fontFamily: "var(--font-quicksand), system-ui, sans-serif", fontWeight: 600, fontSize: 16, color: "#6b7a44", margin: 0 }}>
            Plus d&apos;équilibre pour votre chien, plus de sérénité pour vous.
          </p>
          <Link
            href="/a-propos"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#8f9e63",
              color: "#fbfaf4",
              fontFamily: "var(--font-manrope), system-ui, sans-serif",
              fontWeight: 600,
              fontSize: 15,
              padding: "12px 24px",
              borderRadius: 50,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            En savoir plus sur moi →
          </Link>
        </div>
      </div>

      <style>{`
        .vision-item:hover span { color: #6b7a44; transition: color 0.2s; }
      `}</style>
    </section>
  );
}
