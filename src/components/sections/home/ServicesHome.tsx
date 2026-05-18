import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

const services = [
  { t: "Éducation chiot", d: "Vous venez d'accueillir un chiot ? Pose des bases solides : propreté, rappel, sociabilisation, morsures, premières règles de vie.", f: "Bilan + séances adaptées", p: "À partir de 50€", tag: "Période clé" },
  { t: "Conseils pré-adoption", d: "Choisir le profil de chien adapté à votre mode de vie, préparer votre foyer, anticiper les premières semaines.", f: "Formulaire + séance domicile", p: "À partir de 50€", tag: "Avant l'adoption" },
  { t: "Rééducation comportementale", d: "Réactivité, agressivité, peurs, destructions, aboiements, fugues, anxiété de séparation, protection de ressources.", f: "Bilan + protocole sur mesure", p: "Sur devis", tag: "Cas complexe" },
  { t: "Renforcement du lien humain-chien", d: "Pour les duos qui veulent retrouver une relation sereine, équilibrée, épanouissante — dans les deux sens.", f: "Bilan + protocoles ciblés", p: "À partir de 50€", tag: "Reconnexion" },
];

export default function ServicesHome() {
  return (
    <section style={{ padding: "120px 56px", background: "#f1ecdc" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 56,
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <Eyebrow>Mes prestations</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(44px, 5vw, 64px)",
                lineHeight: 1,
                color: "#1c2018",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              Quatre façons
              <br />
              de cheminer ensemble.
            </h2>
          </div>
          <Link
            href="/tarifs"
            style={{
              fontFamily: "var(--font-manrope), system-ui, sans-serif",
              fontWeight: 600,
              fontSize: 14,
              color: "#1c2018",
              borderBottom: "2px solid #1c2018",
              paddingBottom: 3,
              textDecoration: "none",
            }}
          >
            Voir tous les tarifs &amp; forfaits →
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {services.map((s, i) => (
            <article
              key={i}
              style={{
                background: "#ffffff",
                borderRadius: 28,
                border: "1px solid #e8e4d4",
                padding: 32,
                display: "grid",
                gridTemplateColumns: "130px 1fr",
                gap: 28,
                minHeight: 240,
              }}
            >
              <div style={{ borderRadius: 20, overflow: "hidden" }}>
                <ImagePlaceholder tone={i % 2 === 0 ? "sage" : "cream"} aspect={1.2} />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-manrope), system-ui, sans-serif",
                      fontSize: 10,
                      color: "#6b7a44",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    Nº 0{i + 1}
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-manrope), system-ui, sans-serif",
                      fontSize: 11,
                      color: "#4a4f3f",
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                      background: "#f7f2e3",
                      padding: "4px 10px",
                      borderRadius: 999,
                    }}
                  >
                    {s.tag}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: 22,
                    margin: "10px 0 8px",
                    color: "#1c2018",
                    lineHeight: 1.15,
                  }}
                >
                  {s.t}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-manrope), system-ui, sans-serif",
                    fontSize: 13.5,
                    lineHeight: 1.55,
                    color: "#4a4f3f",
                    margin: 0,
                  }}
                >
                  {s.d}
                </p>
                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: 16,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderTop: "1px solid #e8e4d4",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                        fontWeight: 700,
                        fontSize: 18,
                        color: "#1c2018",
                      }}
                    >
                      {s.p}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-manrope), system-ui, sans-serif",
                        fontSize: 11,
                        color: "#7a7f6b",
                      }}
                    >
                      {s.f}
                    </div>
                  </div>
                  <Link
                    href="/services"
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 99,
                      background: "#8f9e63",
                      color: "#fbfaf4",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-manrope), system-ui, sans-serif",
                      fontWeight: 600,
                      textDecoration: "none",
                      fontSize: 16,
                    }}
                  >
                    →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          style={{
            marginTop: 24,
            background: "#8f9e63",
            color: "#fbfaf4",
            borderRadius: 22,
            padding: "24px 32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-manrope), system-ui, sans-serif",
              fontSize: 15,
              lineHeight: 1.5,
              maxWidth: 720,
            }}
          >
            <strong
              style={{
                fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                fontSize: 17,
              }}
            >
              Pas sûr·e de la prestation dont vous avez besoin&nbsp;?
            </strong>
            <br />
            Pas d&apos;inquiétude — c&apos;est exactement le rôle du{" "}
            <strong>bilan comportemental</strong>. On en parle ensemble.
          </div>
          <Link
            href="/contact"
            style={{
              background: "#fbfaf4",
              color: "#1c2018",
              fontFamily: "var(--font-manrope), system-ui, sans-serif",
              fontWeight: 600,
              fontSize: 14,
              padding: "12px 22px",
              borderRadius: 999,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Me contacter →
          </Link>
        </div>
      </div>
    </section>
  );
}
