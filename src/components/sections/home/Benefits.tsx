import Eyebrow from "@/components/ui/Eyebrow";
import CheckIcon from "@/components/ui/CheckIcon";
import PawPattern from "@/components/ui/PawPattern";

const benefits = [
  "Décrypter visuellement ton chien",
  "Comprendre et respecter ses émotions",
  "Savoir réagir dans chaque situation",
  "Atteindre vos objectifs ensemble",
  "Renforcer durablement votre lien",
];

export default function Benefits() {
  return (
    <section
      style={{
        padding: "120px 56px",
        background: "#8f9e63",
        color: "#fbfaf4",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <PawPattern color="rgba(255,255,255,0.07)" density={0.5} />
      <div style={{ maxWidth: 1240, margin: "0 auto", position: "relative" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: 80,
            alignItems: "center",
          }}
        >
          <div>
            <Eyebrow light>Ce que tu repars avec</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(48px, 5.5vw, 72px)",
                lineHeight: 0.98,
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              Un duo
              <br />
              qui s&apos;écoute.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontSize: 17,
                lineHeight: 1.7,
                marginTop: 24,
                opacity: 0.92,
                maxWidth: 440,
              }}
            >
              Pas un chien « parfaitement obéissant ». Un chien serein, un humain confiant, et le
              plaisir retrouvé d&apos;être ensemble.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {benefits.map((t, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)",
                  borderRadius: 18,
                  padding: "18px 22px",
                  display: "flex",
                  gap: 18,
                  alignItems: "center",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 10,
                    background: "#fbfaf4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <CheckIcon size={20} color="#6b7a44" />
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: 20,
                  }}
                >
                  {t}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
