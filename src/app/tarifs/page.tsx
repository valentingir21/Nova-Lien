import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import CheckIcon from "@/components/ui/CheckIcon";
import PawPattern from "@/components/ui/PawPattern";

export const metadata: Metadata = {
  title: "Tarifs — Bilan & séances",
  description:
    "Bilan comportemental 50€ · Séance de suivi 50€/h · Forfaits dégressifs 3, 5 ou 10 séances. Paiement échelonnable. Dijon et 30 km.",
};

const forfaits = [
  {
    name: "Découverte",
    sessions: "3 séances",
    price: "140",
    perSession: "46,67 €/séance",
    saving: "Économie de 10 €",
    pop: false,
    desc: "Pour démarrer ou traiter une problématique ciblée.",
    includes: ["3 séances d'1h", "Suivi par email entre séances", "Validité 3 mois"],
  },
  {
    name: "Accompagnement",
    sessions: "5 séances",
    price: "225",
    perSession: "45 €/séance",
    saving: "Économie de 25 €",
    pop: true,
    desc: "Le plus choisi — pour un travail de fond, structuré et progressif.",
    includes: ["5 séances d'1h", "Suivi par email entre séances", "Validité 6 mois", "Récap écrit final"],
  },
  {
    name: "Approfondi",
    sessions: "10 séances",
    price: "420",
    perSession: "42 €/séance",
    saving: "Économie de 80 €",
    pop: false,
    desc: "Pour les cas complexes ou un suivi long terme (chiot, rééducation).",
    includes: ["10 séances d'1h", "Suivi par email illimité", "Validité 12 mois", "Récaps écrits + audio"],
  },
];

const modalites = [
  { t: "Paiement à la séance ou en forfait", d: "Vous choisissez ce qui vous convient le mieux. Le forfait peut être réglé en une fois ou échelonné en plusieurs mensualités." },
  { t: "Pas d'engagement de durée", d: "Vous restez libre. Les forfaits ont une validité dans le temps mais aucune obligation de continuer si la dynamique ne vous convient pas." },
  { t: "Frais de déplacement", d: "Inclus dans le tarif pour Dijon et ses alentours (rayon de 30 km). Au-delà, un supplément peut s'appliquer — on en parle au moment du bilan." },
  { t: "Moyens de paiement", d: "Espèces, chèque, ou virement bancaire. Reçu fourni sur demande." },
  { t: "Annulation", d: "Possible jusqu'à 24h avant la séance, sans frais. Au-delà, la séance est due." },
];

export default function TarifsPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ padding: "70px 56px 80px", background: "#fbfaf4" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
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
            Tarifs &amp; modalités
          </div>
          <h1
            style={{
              fontFamily: "var(--font-quicksand), system-ui, sans-serif",
              fontWeight: 600,
              fontSize: "clamp(64px, 8vw, 108px)",
              lineHeight: 0.96,
              margin: "28px 0 0",
              color: "#1c2018",
              letterSpacing: "-0.03em",
            }}
          >
            Des tarifs clairs,
            <br />
            <span style={{ color: "#6b7a44" }}>pour avancer sereinement.</span>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-manrope), system-ui, sans-serif",
              fontSize: 19,
              lineHeight: 1.6,
              color: "#4a4f3f",
              marginTop: 24,
              maxWidth: 720,
            }}
          >
            Tout commence par un bilan comportemental. Ensuite, vous choisissez la formule qui vous
            correspond — séance à la demande ou forfait dégressif.
          </p>
        </div>
      </section>

      {/* CARTES TARIFS */}
      <section style={{ padding: "40px 56px 60px", background: "#fbfaf4" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {/* Bilan */}
            <div
              style={{
                background: "#8f9e63",
                color: "#fbfaf4",
                borderRadius: 28,
                padding: "40px 44px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  padding: "6px 14px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                Point de départ obligatoire
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: 38,
                  margin: 0,
                  lineHeight: 1.05,
                }}
              >
                Bilan comportemental
              </h3>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginTop: 24 }}>
                <div
                  style={{
                    fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: 72,
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  50
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: 24,
                    opacity: 0.85,
                  }}
                >
                  €
                </div>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontSize: 15,
                  lineHeight: 1.65,
                  opacity: 0.92,
                  marginTop: 16,
                  maxWidth: 380,
                }}
              >
                Environ 1h à votre domicile · réglé le jour du rendez-vous. Échange en profondeur sur
                votre chien, votre quotidien, vos objectifs.
              </p>
              <div
                style={{
                  marginTop: 20,
                  padding: "12px 16px",
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: 12,
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontSize: 13,
                  lineHeight: 1.5,
                  opacity: 0.9,
                }}
              >
                <strong>Inclus&nbsp;:</strong> programme d&apos;accompagnement personnalisé livré après le
                bilan.
              </div>
            </div>

            {/* Séance */}
            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e8e4d4",
                borderRadius: 28,
                padding: "40px 44px",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  padding: "6px 14px",
                  borderRadius: 999,
                  background: "#dde2ce",
                  border: "1px solid #dde2ce",
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#6b7a44",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                Suivi personnalisé
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: 38,
                  margin: 0,
                  lineHeight: 1.05,
                  color: "#1c2018",
                }}
              >
                Séance de suivi
              </h3>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginTop: 24 }}>
                <div
                  style={{
                    fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: 72,
                    lineHeight: 1,
                    color: "#1c2018",
                    letterSpacing: "-0.02em",
                  }}
                >
                  50
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: 24,
                    color: "#7a7f6b",
                  }}
                >
                  € / heure
                </div>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontSize: 15,
                  lineHeight: 1.65,
                  color: "#4a4f3f",
                  marginTop: 16,
                  maxWidth: 380,
                }}
              >
                Au rythme adapté à votre progression. Lieu de travail ajusté selon la problématique :
                domicile, extérieur, ou terrain clôturé d&apos;Ahuy.
              </p>
              <div
                style={{
                  marginTop: 20,
                  padding: "12px 16px",
                  background: "#f7f2e3",
                  borderRadius: 12,
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontSize: 13,
                  lineHeight: 1.5,
                  color: "#4a4f3f",
                }}
              >
                <strong style={{ color: "#1c2018" }}>Forfaits dégressifs disponibles</strong> · voir
                ci-dessous.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORFAITS */}
      <section style={{ padding: "110px 56px", background: "#f1ecdc" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <Eyebrow>Forfaits dégressifs</Eyebrow>
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
              Plus on chemine,
              <br />
              <span
                style={{
                  color: "#6b7a44",
                  fontFamily: "var(--font-lora), Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: 500,
                }}
              >
                plus c&apos;est doux.
              </span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontSize: 16,
                lineHeight: 1.65,
                color: "#4a4f3f",
                maxWidth: 640,
                margin: "24px auto 0",
              }}
            >
              Les forfaits débloquent un tarif dégressif et un suivi renforcé. Paiement en une fois ou
              échelonné selon ce qui vous convient.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 20,
              alignItems: "stretch",
            }}
          >
            {forfaits.map((f, i) => (
              <div
                key={i}
                style={{
                  background: f.pop ? "#8f9e63" : "#ffffff",
                  color: f.pop ? "#fbfaf4" : "#1c2018",
                  border: f.pop ? "none" : "1px solid #e8e4d4",
                  borderRadius: 28,
                  padding: "36px 32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  position: "relative",
                  boxShadow: f.pop ? "0 24px 60px rgba(28,32,24,0.18)" : "none",
                  transform: f.pop ? "scale(1.02)" : "none",
                }}
              >
                {f.pop && (
                  <div
                    style={{
                      position: "absolute",
                      top: -12,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "#fbfaf4",
                      color: "#6b7a44",
                      padding: "6px 14px",
                      borderRadius: 999,
                      fontFamily: "var(--font-manrope), system-ui, sans-serif",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      border: "1px solid #e8e4d4",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Le + choisi ★
                  </div>
                )}
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-manrope), system-ui, sans-serif",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: f.pop ? "rgba(255,255,255,0.8)" : "#6b7a44",
                      marginBottom: 6,
                    }}
                  >
                    Forfait
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                      fontWeight: 600,
                      fontSize: 28,
                      margin: 0,
                      color: f.pop ? "#fbfaf4" : "#1c2018",
                      lineHeight: 1.1,
                    }}
                  >
                    {f.name}
                  </h3>
                  <div
                    style={{
                      fontFamily: "var(--font-manrope), system-ui, sans-serif",
                      fontSize: 14,
                      marginTop: 4,
                      color: f.pop ? "rgba(255,255,255,0.85)" : "#7a7f6b",
                    }}
                  >
                    {f.sessions}
                  </div>
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                    <div
                      style={{
                        fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                        fontWeight: 700,
                        fontSize: 56,
                        lineHeight: 1,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {f.price}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                        fontWeight: 600,
                        fontSize: 22,
                        opacity: 0.85,
                      }}
                    >
                      €
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-manrope), system-ui, sans-serif",
                      fontSize: 12,
                      marginTop: 6,
                      color: f.pop ? "rgba(255,255,255,0.8)" : "#7a7f6b",
                    }}
                  >
                    {f.perSession} · {f.saving}
                  </div>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-manrope), system-ui, sans-serif",
                    fontSize: 14,
                    lineHeight: 1.6,
                    margin: 0,
                    color: f.pop ? "rgba(255,255,255,0.92)" : "#4a4f3f",
                  }}
                >
                  {f.desc}
                </p>
                <div
                  style={{
                    height: 1,
                    background: f.pop ? "rgba(255,255,255,0.2)" : "#e8e4d4",
                    margin: "4px 0",
                  }}
                />
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {f.includes.map((it, j) => (
                    <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <div
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: 6,
                          marginTop: 1,
                          background: f.pop ? "rgba(255,255,255,0.2)" : "#dde2ce",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <CheckIcon size={12} color={f.pop ? "#fbfaf4" : "#6b7a44"} />
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-manrope), system-ui, sans-serif",
                          fontSize: 13.5,
                          lineHeight: 1.5,
                        }}
                      >
                        {it}
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  style={{
                    marginTop: "auto",
                    background: f.pop ? "#fbfaf4" : "#1c2018",
                    color: f.pop ? "#1c2018" : "#fbfaf4",
                    fontFamily: "var(--font-manrope), system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: 14,
                    padding: "13px 18px",
                    borderRadius: 999,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textDecoration: "none",
                  }}
                >
                  <span>Choisir ce forfait</span>
                  <span>→</span>
                </Link>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 28,
              padding: "16px 22px",
              background: "#c9b78f33",
              border: "1px dashed #c9b78f",
              borderRadius: 14,
              fontFamily: "var(--font-manrope), system-ui, sans-serif",
              fontSize: 13,
              lineHeight: 1.5,
              color: "#4a4f3f",
              textAlign: "center",
            }}
          >
            ⓘ Forfaits proposés à titre indicatif — les montants finaux seront ajustés avec Amandine
            selon les formules retenues.
          </div>
        </div>
      </section>

      {/* MODALITES */}
      <section style={{ padding: "110px 56px", background: "#fbfaf4" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 72, alignItems: "flex-start" }}>
            <div>
              <Eyebrow>Modalités</Eyebrow>
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
                Une approche
                <br />
                <span style={{ color: "#6b7a44" }}>souple et claire.</span>
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {modalites.map((x, i) => (
                <div
                  key={i}
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e8e4d4",
                    borderRadius: 18,
                    padding: "20px 24px",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                      fontWeight: 600,
                      fontSize: 18,
                      margin: 0,
                      color: "#1c2018",
                      lineHeight: 1.25,
                    }}
                  >
                    {x.t}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-manrope), system-ui, sans-serif",
                      fontSize: 14.5,
                      lineHeight: 1.65,
                      color: "#4a4f3f",
                      margin: "6px 0 0",
                    }}
                  >
                    {x.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "90px 56px 110px", background: "#fbfaf4" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            background: "#8f9e63",
            color: "#fbfaf4",
            borderRadius: 36,
            padding: "64px 64px",
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 56,
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <PawPattern color="rgba(255,255,255,0.07)" density={0.4} />
          <div style={{ position: "relative" }}>
            <Eyebrow light>Pas sûr·e du bon forfait ?</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                fontWeight: 600,
                fontSize: 52,
                lineHeight: 1,
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              Commençons par le bilan.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontSize: 17,
                lineHeight: 1.65,
                margin: "20px 0 0",
                opacity: 0.92,
                maxWidth: 460,
              }}
            >
              On verra ensemble ce dont votre duo a besoin — et la formule sera évidente à la fin du
              rendez-vous.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, position: "relative" }}>
            <Link
              href="/contact"
              style={{
                background: "#fbfaf4",
                color: "#1c2018",
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontWeight: 600,
                fontSize: 15,
                padding: "18px 28px",
                borderRadius: 999,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <span>Réserver le bilan — 50&nbsp;€</span>
              <span
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 99,
                  background: "#8f9e63",
                  color: "#fbfaf4",
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
              href="/faq"
              style={{
                background: "rgba(255,255,255,0.15)",
                color: "#fbfaf4",
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontWeight: 600,
                fontSize: 15,
                padding: "18px 28px",
                borderRadius: 999,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <span>Lire la FAQ</span>
              <span style={{ fontSize: 18 }}>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
