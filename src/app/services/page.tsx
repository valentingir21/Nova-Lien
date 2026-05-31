import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import CheckIcon from "@/components/ui/CheckIcon";
import PawPattern from "@/components/ui/PawPattern";
import HowItWorks from "@/components/sections/home/HowItWorks";

export const metadata: Metadata = {
  title: "Services — Les 4 prestations",
  description:
    "Éducation chiot, conseils pré-adoption, rééducation comportementale, renforcement du lien humain-chien. Tout commence par un bilan comportemental à 50€.",
};

const services = [
  {
    n: "01",
    tag: "Période clé",
    title: "Éducation chiot",
    hook: "Vous venez d'accueillir un chiot ? Félicitations.",
    intro: "C'est une période clé, riche en apprentissages… et en questionnements. Plus tôt les bases sont posées, plus la vie ensemble sera sereine.",
    bullets: [
      "Comprendre le comportement et les besoins de votre chiot",
      "Poser des règles de vie claires et bienveillantes",
      "Gérer les premières situations : morsures, propreté, sociabilisation, rappel, …",
      "Construire une relation de confiance dès le départ",
    ],
    how: "Tout commence par un bilan comportemental à votre domicile, suivi de séances adaptées à l'âge et à l'évolution de votre chiot.",
    tone: "sage" as const,
  },
  {
    n: "02",
    tag: "Avant l'adoption",
    title: "Conseils pré-adoption",
    hook: "Vous envisagez d'adopter un chien ?",
    intro: "Vouloir mettre toutes les chances de votre côté avant l'arrivée d'un chien, c'est la meilleure décision que vous puissiez prendre.",
    bullets: [
      "Choisir le profil de chien adapté à votre mode de vie",
      "Préparer votre foyer et votre famille à cette nouvelle vie",
      "Anticiper les premières semaines et éviter les erreurs courantes",
      "Partir sur de bonnes bases dès le premier jour",
    ],
    how: "En amont du rendez-vous, vous remplissez un formulaire détaillé sur votre situation et votre projet. Nous échangeons ensuite lors d'une séance à votre domicile.",
    tone: "cream" as const,
  },
  {
    n: "03",
    tag: "Réeducation",
    title: "Rééducation comportementale",
    hook: "Un comportement difficile à gérer au quotidien ?",
    intro: "Réactivité, agressivité, peurs, destructions, aboiements, fugues, anxiété de séparation, protection de ressources…",
    bullets: [
      "Identifier l'origine du comportement (émotion, besoin, incompréhension)",
      "Comprendre ce que le chien essaie de dire",
      "Mettre en place un protocole de rééducation adapté",
      "Agir durablement, pas seulement en surface",
    ],
    callout: "Chaque comportement a une origine. Mon rôle est de la comprendre — pour agir durablement, pas seulement en surface.",
    how: "Le bilan comportemental est le point de départ incontournable. Il me permet d'observer, d'analyser et de construire un protocole adapté à votre chien et à votre situation.",
    tone: "sage" as const,
  },
  {
    n: "04",
    tag: "Reconnexion",
    title: "Renforcement du lien humain-chien",
    hook: "Vous aimez votre chien, mais vous ne vous comprenez plus vraiment ?",
    intro: "Vous avez perdu confiance en lui — ou en vous ? Vous sentez que quelque chose coince dans votre relation, sans savoir exactement quoi ?",
    bullets: [
      "Retrouver une communication claire et apaisée",
      "Reconstruire la confiance dans les deux sens",
      "Identifier ce qui vous bloque, et le déjouer",
      "Vivre votre quotidien comme un duo, pas un duel",
    ],
    callout: "Cette prestation s'adresse aux duos qui souhaitent retrouver une relation sereine, équilibrée et épanouissante — dans les deux sens.",
    how: "Par des protocoles adaptés à votre duo, toujours précédés d'un bilan comportemental pour comprendre ce qui se joue entre vous et votre chien.",
    tone: "cream" as const,
  },
];

export default function ServicesPage() {
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
            Mes prestations
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
              maxWidth: 1100,
            }}
          >
            Quatre façons
            <br />
            <span style={{ color: "#6b7a44" }}>de cheminer ensemble.</span>
          </h1>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 1fr",
              gap: 64,
              marginTop: 48,
              alignItems: "flex-end",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontSize: 19,
                lineHeight: 1.6,
                color: "#4a4f3f",
                margin: 0,
                maxWidth: 640,
              }}
            >
              Chaque accompagnement débute par un{" "}
              <strong>bilan comportemental</strong> — point de départ indispensable pour comprendre
              votre duo et construire un programme sur mesure.
            </p>
            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                justifyContent: "flex-end",
              }}
            >
              <a
                href="#prestations"
                style={{
                  background: "#8f9e63",
                  color: "#fbfaf4",
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  padding: "14px 22px",
                  borderRadius: 999,
                  textDecoration: "none",
                }}
              >
                ↓ Voir les 4 prestations
              </a>
              <a
                href="#tarifs"
                style={{
                  background: "#ffffff",
                  color: "#1c2018",
                  border: "1px solid #e8e4d4",
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  padding: "14px 22px",
                  borderRadius: 999,
                  textDecoration: "none",
                }}
              >
                Voir les tarifs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BILAN BANNER */}
      <section style={{ padding: "40px 56px 100px", background: "#fbfaf4" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div
            style={{
              background: "#8f9e63",
              color: "#fbfaf4",
              borderRadius: 32,
              padding: "48px 56px",
              display: "grid",
              gridTemplateColumns: "1fr 1.2fr",
              gap: 56,
              alignItems: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <PawPattern color="rgba(255,255,255,0.05)" density={0.4} />
            <div style={{ position: "relative" }}>
              <div
                style={{
                  display: "inline-flex",
                  gap: 10,
                  alignItems: "center",
                  padding: "8px 14px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  marginBottom: 18,
                }}
              >
                Point de départ obligatoire
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: 48,
                  lineHeight: 1,
                  margin: 0,
                  letterSpacing: "-0.02em",
                }}
              >
                Le bilan
                <br />
                comportemental.
              </h2>
              <div
                style={{
                  marginTop: 32,
                  padding: "20px 24px",
                  background: "rgba(255,255,255,0.12)",
                  borderRadius: 18,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-manrope), system-ui, sans-serif",
                      fontSize: 11,
                      opacity: 0.8,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    Tarif bilan
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                      fontWeight: 700,
                      fontSize: 36,
                      marginTop: 2,
                    }}
                  >
                    50&nbsp;€
                  </div>
                </div>
                <div
                  style={{
                    textAlign: "right",
                    fontFamily: "var(--font-manrope), system-ui, sans-serif",
                    fontSize: 13,
                    opacity: 0.85,
                    maxWidth: 220,
                    lineHeight: 1.4,
                  }}
                >
                  Réglé le jour du rendez-vous · environ 1h à votre domicile
                </div>
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <p
                style={{
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontSize: 17,
                  lineHeight: 1.7,
                  margin: 0,
                  opacity: 0.95,
                }}
              >
                Une rencontre essentielle d&apos;environ 1h durant laquelle nous prenons le temps
                d&apos;échanger en profondeur sur votre chien, votre quotidien et vos objectifs.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontSize: 16,
                  lineHeight: 1.7,
                  margin: "16px 0 0",
                  opacity: 0.88,
                }}
              >
                C&apos;est un moment <strong>sans jugement</strong>, où vous pouvez tout dire : les
                difficultés, les doutes, les tentatives qui n&apos;ont pas fonctionné.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-lora), Georgia, serif",
                  fontStyle: "italic",
                  fontSize: 17,
                  lineHeight: 1.65,
                  margin: "20px 0 0",
                  color: "#ebe2c8",
                  fontWeight: 500,
                }}
              >
                À l&apos;issue de ce bilan, nous définissons un programme d&apos;accompagnement{" "}
                <strong style={{ fontStyle: "normal" }}>entièrement personnalisé</strong>, construit
                sur mesure pour avancer sereinement et efficacement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />

      {/* PRESTATIONS */}
      <section id="prestations" style={{ padding: "0 56px 60px", background: "#fbfaf4" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", flexDirection: "column", gap: 40 }}>
          {services.map((s, i) => (
            <article
              key={i}
              style={{
                background: s.tone === "sage" ? "#f1ecdc" : "#ffffff",
                border: s.tone === "cream" ? "1px solid #e8e4d4" : "none",
                borderRadius: 36,
                padding: "56px 64px",
                display: "grid",
                gridTemplateColumns: "0.9fr 1.1fr",
                gap: 64,
                alignItems: "flex-start",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <div
                    style={{
                      fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                      fontWeight: 700,
                      fontSize: 14,
                      color: "#6b7a44",
                      background: "#dde2ce",
                      padding: "6px 12px",
                      borderRadius: 8,
                      letterSpacing: "0.06em",
                    }}
                  >
                    {s.n}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-manrope), system-ui, sans-serif",
                      fontSize: 11,
                      color: "#4a4f3f",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      padding: "6px 12px",
                      borderRadius: 8,
                      background: "rgba(143,158,99,0.12)",
                    }}
                  >
                    {s.tag}
                  </div>
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: 48,
                    margin: 0,
                    color: "#1c2018",
                    lineHeight: 1.02,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {s.title}
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-lora), Georgia, serif",
                    fontStyle: "italic",
                    fontSize: 20,
                    lineHeight: 1.45,
                    fontWeight: 500,
                    color: "#6b7a44",
                    margin: "14px 0 0",
                  }}
                >
                  {s.hook}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-manrope), system-ui, sans-serif",
                    fontSize: 16,
                    lineHeight: 1.7,
                    color: "#4a4f3f",
                    margin: "20px 0 0",
                  }}
                >
                  {s.intro}
                </p>
                <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 10 }}>
                  <div
                    style={{
                      fontFamily: "var(--font-manrope), system-ui, sans-serif",
                      fontSize: 11,
                      color: "#6b7a44",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                    }}
                  >
                    Je vous accompagne pour&nbsp;:
                  </div>
                  {s.bullets.map((b, j) => (
                    <div
                      key={j}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "24px 1fr",
                        gap: 12,
                        alignItems: "flex-start",
                        padding: "8px 0",
                      }}
                    >
                      <div
                        style={{
                          width: 22,
                          height: 22,
                          borderRadius: 7,
                          background: "#dde2ce",
                          color: "#6b7a44",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: 1,
                          flexShrink: 0,
                        }}
                      >
                        <CheckIcon size={14} color="#6b7a44" />
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-manrope), system-ui, sans-serif",
                          fontSize: 15,
                          lineHeight: 1.55,
                          color: "#1c2018",
                        }}
                      >
                        {b}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ borderRadius: 24, overflow: "hidden" }}>
                  <ImagePlaceholder tone={s.tone === "sage" ? "sage" : "cream"} aspect={0.62} label={s.title} />
                </div>

                {s.callout && (
                  <div
                    style={{
                      background: "#8f9e63",
                      color: "#fbfaf4",
                      borderRadius: 18,
                      padding: "20px 24px",
                      fontFamily: "var(--font-lora), Georgia, serif",
                      fontStyle: "italic",
                      fontSize: 17,
                      lineHeight: 1.5,
                      fontWeight: 500,
                    }}
                  >
                    « {s.callout} »
                  </div>
                )}

                <div
                  style={{
                    background: s.tone === "sage" ? "#ffffff" : "#f7f2e3",
                    border: "1px solid #e8e4d4",
                    borderRadius: 18,
                    padding: "20px 24px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-manrope), system-ui, sans-serif",
                      fontSize: 11,
                      color: "#6b7a44",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      marginBottom: 8,
                    }}
                  >
                    Comment ça se passe&nbsp;?
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-manrope), system-ui, sans-serif",
                      fontSize: 14.5,
                      lineHeight: 1.65,
                      color: "#4a4f3f",
                      margin: 0,
                    }}
                  >
                    {s.how}
                  </p>
                </div>


                <Link
                  href="/contact"
                  style={{
                    marginTop: 4,
                    background: "#8f9e63",
                    color: "#fbfaf4",
                    fontFamily: "var(--font-manrope), system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: 14,
                    padding: "14px 22px",
                    borderRadius: 999,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textDecoration: "none",
                  }}
                >
                  <span>Demander un bilan pour cette prestation</span>
                  <span
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: 99,
                      background: "#fbfaf4",
                      color: "#1c2018",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* LIEUX */}
      <section style={{ padding: "110px 56px", background: "#f1ecdc" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <Eyebrow>Les séances de suivi</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(40px, 4.5vw, 56px)",
                lineHeight: 1,
                color: "#1c2018",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              Trois lieux,
              <br />
              <span style={{ color: "#6b7a44" }}>une seule cohérence.</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontSize: 17,
                lineHeight: 1.65,
                color: "#4a4f3f",
                maxWidth: 660,
                margin: "24px auto 0",
              }}
            >
              Selon la problématique de votre chien, j&apos;adapte le lieu de travail pour que chaque
              séance soit la plus efficace possible.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
            {[
              { n: "01", t: "À votre domicile", d: "Pour travailler directement dans l'environnement du quotidien de votre chien. C'est là que naissent et se résolvent la plupart des situations." },
              { n: "02", t: "En extérieur", d: "En nature, en ville, sur des parcours structurés. Pour travailler la marche en laisse, le rappel, les croisements, la gestion de l'environnement." },
              { n: "03", t: "Sur terrain clôturé privé", d: "Situé à Ahuy (40 Rue du Puits de Bois, 21121), sur le terrain professionnel de Valérie, éducatrice canine « De la main à la patte 21 », avec qui je travaille en collaboration." },
            ].map((x, i) => (
              <div
                key={i}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e8e4d4",
                  borderRadius: 24,
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    background: "#dde2ce",
                    color: "#6b7a44",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: 22,
                    flexShrink: 0,
                  }}
                >
                  {x.n}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: 24,
                    margin: 0,
                    color: "#1c2018",
                    lineHeight: 1.2,
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
                    margin: 0,
                  }}
                >
                  {x.d}
                </p>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: 32,
              padding: "20px 28px",
              background: "#ffffff",
              border: "1px solid #e8e4d4",
              borderRadius: 18,
              fontFamily: "var(--font-manrope), system-ui, sans-serif",
              fontSize: 14,
              lineHeight: 1.6,
              color: "#4a4f3f",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            <div>
              <strong style={{ color: "#1c2018" }}>
                Tarif séance de suivi&nbsp;: 50&nbsp;€ / heure
              </strong>{" "}
              · Paiement échelonnable disponible.
            </div>
            <a
              href="#tarifs"
              style={{
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontWeight: 600,
                fontSize: 14,
                color: "#1c2018",
                borderBottom: "2px solid #1c2018",
                paddingBottom: 3,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Voir les tarifs & forfaits ↓
            </a>
          </div>
        </div>
      </section>

      {/* TARIFS */}
      <section id="tarifs" style={{ padding: "110px 56px 60px", background: "#fbfaf4" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <Eyebrow>Tarifs</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(40px, 4.5vw, 56px)",
                lineHeight: 1,
                color: "#1c2018",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              Des tarifs clairs,
              <br />
              <span style={{ color: "#6b7a44" }}>pour avancer sereinement.</span>
            </h2>
          </div>
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
                Au rythme adapté à votre situation. Lieu de travail ajusté selon la problématique :
                domicile, extérieur, ou terrain clôturé privé.
              </p>
              <div
                style={{
                  marginTop: 20,
                  padding: "12px 16px",
                  background: "#f7f2e3",
                  borderRadius: 12,
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontSize: 13,
                  color: "#4a4f3f",
                }}
              >
                <strong style={{ color: "#1c2018" }}>Forfaits disponibles</strong> — voir ci-dessous.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORFAITS */}
      <section style={{ padding: "80px 56px", background: "#f1ecdc" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <Eyebrow>Forfaits</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(40px, 4.5vw, 56px)",
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
              Chaque séance est à 50&nbsp;€ de l&apos;heure. Paiement en une fois ou échelonné selon
              ce qui vous convient.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 20, alignItems: "stretch" }}>
            {[
              { name: "Découverte", sessions: 3, pop: false, desc: "Pour démarrer ou traiter une problématique ciblée." },
              { name: "Accompagnement", sessions: 5, pop: true, desc: "Le plus choisi — pour un travail de fond, structuré et progressif." },
              { name: "Sérénité", sessions: 8, pop: false, desc: "Pour un suivi complet et progressif dans la durée." },
              { name: "Approfondi", sessions: 10, pop: false, desc: "Pour les cas complexes ou un suivi long terme (chiot, rééducation)." },
            ].map((f, i) => (
              <div
                key={i}
                style={{
                  background: f.pop ? "#8f9e63" : "#ffffff",
                  color: f.pop ? "#fbfaf4" : "#1c2018",
                  border: f.pop ? "none" : "1px solid #e8e4d4",
                  borderRadius: 28,
                  padding: "36px 28px",
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
                      fontSize: 26,
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
                    {f.sessions} séances
                  </div>
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                    <div
                      style={{
                        fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                        fontWeight: 700,
                        fontSize: 48,
                        lineHeight: 1,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {f.sessions * 50}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                        fontWeight: 600,
                        fontSize: 20,
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
                      marginTop: 4,
                      color: f.pop ? "rgba(255,255,255,0.8)" : "#7a7f6b",
                    }}
                  >
                    {f.sessions} × 50&nbsp;€ / séance
                  </div>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-manrope), system-ui, sans-serif",
                    fontSize: 14,
                    lineHeight: 1.6,
                    margin: 0,
                    color: f.pop ? "rgba(255,255,255,0.92)" : "#4a4f3f",
                    flex: 1,
                  }}
                >
                  {f.desc}
                </p>
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
        </div>
      </section>

      {/* MODALITES */}
      <section style={{ padding: "80px 56px", background: "#fbfaf4" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 72, alignItems: "flex-start" }}>
            <div>
              <Eyebrow>Modalités</Eyebrow>
              <h2
                style={{
                  fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(36px, 4vw, 52px)",
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
              {[
                { t: "Paiement", d: "Forfait réglable en une fois ou échelonné en plusieurs mensualités." },
                { t: "Frais de déplacement", d: "Inclus dans le tarif pour Dijon et ses alentours (rayon de 30 km). Au-delà, un supplément peut s'appliquer — on en parle au moment du bilan." },
                { t: "Moyens de paiement", d: "Espèces ou virement bancaire. Reçu fourni sur demande." },
                { t: "Annulation", d: "Possible jusqu'à 24h avant la séance, sans frais. Au-delà, la séance est due." },
              ].map((x, i) => (
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

      {/* DOUBT BANNER */}
      <section style={{ padding: "110px 56px", background: "#fbfaf4" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            background: "#8f9e63",
            color: "#fbfaf4",
            borderRadius: 32,
            padding: "56px 64px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 56,
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <PawPattern color="rgba(255,255,255,0.04)" density={0.4} />
          <div style={{ position: "relative" }}>
            <Eyebrow light>Pas sûr·e ?</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                fontWeight: 600,
                fontSize: 44,
                lineHeight: 1.02,
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              Vous ne savez pas quelle
              <br />
              <span
                style={{
                  color: "#dde2ce",
                  fontFamily: "var(--font-lora), Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: 500,
                }}
              >
                prestation choisir&nbsp;?
              </span>
            </h2>
          </div>
          <div style={{ position: "relative" }}>
            <p
              style={{
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontSize: 17,
                lineHeight: 1.65,
                margin: 0,
                opacity: 0.92,
              }}
            >
              Pas d&apos;inquiétude — c&apos;est{" "}
              <strong>exactement le rôle du bilan comportemental</strong>. Contactez-moi, on en
              parle ensemble, et je vous oriente vers le bon format.
            </p>
            <Link
              href="/contact"
              style={{
                marginTop: 24,
                background: "#fbfaf4",
                color: "#1c2018",
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontWeight: 600,
                fontSize: 15,
                padding: "14px 22px",
                borderRadius: 999,
                display: "inline-flex",
                gap: 10,
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              Me contacter
              <span
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 99,
                  background: "#8f9e63",
                  color: "#fbfaf4",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
