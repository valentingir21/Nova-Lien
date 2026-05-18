import Link from "next/link";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import PawIcon from "@/components/ui/PawIcon";

export default function Hero() {
  return (
    <section style={{ padding: "70px 56px 100px", background: "#fbfaf4" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            gap: 10,
            alignItems: "center",
            padding: "8px 16px",
            borderRadius: 999,
            background: "#ffffff",
            border: "1px solid #e8e4d4",
            fontFamily: "var(--font-manrope), system-ui, sans-serif",
            fontSize: 13,
            fontWeight: 500,
            color: "#4a4f3f",
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: 99, background: "#8f9e63", flexShrink: 0 }} />
          Éducatrice canine comportementaliste — Dijon &amp; alentours
        </div>

        {/* H1 */}
        <h1
          style={{
            fontFamily: "var(--font-quicksand), system-ui, sans-serif",
            fontWeight: 600,
            fontSize: "clamp(64px, 8vw, 116px)",
            lineHeight: 0.94,
            margin: "32px 0 0",
            color: "#1c2018",
            letterSpacing: "-0.03em",
            maxWidth: 1100,
          }}
        >
          Comprendre ton chien.
          <br />
          <span style={{ color: "#6b7a44" }}>Renforcer votre lien.</span>
        </h1>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: 64,
            marginTop: 56,
            alignItems: "flex-end",
          }}
        >
          {/* Image */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: 28,
                overflow: "hidden",
                boxShadow: "0 30px 80px rgba(28,32,24,0.18)",
              }}
            >
              <ImagePlaceholder tone="sage" aspect={0.58} label="Amandine + chien" />
            </div>
            {/* Floating badge */}
            <div
              style={{
                position: "absolute",
                bottom: 24,
                left: 24,
                background: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(8px)",
                padding: "14px 18px",
                borderRadius: 20,
                display: "flex",
                gap: 14,
                alignItems: "center",
                boxShadow: "0 12px 28px rgba(0,0,0,0.12)",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "#dde2ce",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <PawIcon size={22} color="#6b7a44" />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: 15,
                    color: "#1c2018",
                  }}
                >
                  Méthodes positives
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-manrope), system-ui, sans-serif",
                    fontSize: 12,
                    color: "#7a7f6b",
                  }}
                >
                  Respect des émotions · zéro coercition
                </div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <p
              style={{
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontSize: 19,
                lineHeight: 1.55,
                color: "#4a4f3f",
                margin: 0,
              }}
            >
              J&apos;accompagne les{" "}
              <strong style={{ fontStyle: "normal", fontWeight: 700, color: "#1c2018" }}>
                dog parents
              </strong>{" "}
              à transformer les défis du quotidien en moments de complicité et de
              compréhension mutuelle.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link
                href="/contact"
                style={{
                  background: "#8f9e63",
                  color: "#fbfaf4",
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: 15,
                  padding: "16px 26px",
                  borderRadius: 999,
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                Demande de premier contact
                <span
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 99,
                    background: "#fbfaf4",
                    color: "#1c2018",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  →
                </span>
              </Link>
              <Link
                href="/services"
                style={{
                  background: "#ffffff",
                  color: "#1c2018",
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: 15,
                  border: "1px solid #e8e4d4",
                  padding: "16px 22px",
                  borderRadius: 999,
                  textDecoration: "none",
                }}
              >
                Découvrir mes prestations
              </Link>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 8 }}>
              {[
                { n: "ACACED", l: "Attestation officielle" },
                { n: "Nature de chien", l: "Diplôme méthodes positives" },
                { n: "Bilan 50€", l: "Point de départ obligatoire" },
                { n: "Dijon · 30 km", l: "Domicile + extérieur + terrain" },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e8e4d4",
                    padding: "14px 16px",
                    borderRadius: 16,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                      fontWeight: 700,
                      fontSize: 18,
                      color: "#1c2018",
                    }}
                  >
                    {s.n}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-manrope), system-ui, sans-serif",
                      fontSize: 12,
                      color: "#7a7f6b",
                      marginTop: 2,
                    }}
                  >
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
