import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import CheckIcon from "@/components/ui/CheckIcon";
import PawPattern from "@/components/ui/PawPattern";
import PawIcon from "@/components/ui/PawIcon";
import Meaning from "@/components/sections/home/Meaning";

export const metadata: Metadata = {
  title: "À propos — Amandine Pinto",
  description:
    "Découvrez le parcours d'Amandine Pinto, éducatrice canine comportementaliste à Dijon. ACACED, diplôme Qualiopi, méthodes positives.",
};

export default function AProposPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ padding: "80px 56px 100px", background: "#fbfaf4" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 80, alignItems: "center" }}>
            <div>
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
                La fondatrice de Nova Lien
              </div>
              <h1
                style={{
                  fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(64px, 7vw, 96px)",
                  lineHeight: 0.96,
                  margin: "28px 0 0",
                  color: "#1c2018",
                  letterSpacing: "-0.03em",
                }}
              >
                Bonjour,
                <br />
                moi c&apos;est
                <br />
                <span style={{ color: "#6b7a44" }}>Amandine.</span>
              </h1>
              <p
                style={{
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontSize: 19,
                  lineHeight: 1.6,
                  color: "#4a4f3f",
                  marginTop: 28,
                  maxWidth: 520,
                }}
              >
                <strong>Éducatrice canine comportementaliste – secteur Dijon et ses alentours.</strong>{" "}
                J&apos;accompagne les dog parents pour transformer les défis du quotidien en moments
                de complicité et de compréhension mutuelle.
              </p>
            </div>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  borderRadius: 28,
                  overflow: "hidden",
                  boxShadow: "0 30px 80px rgba(28,32,24,0.18)",
                }}
              >
                <ImagePlaceholder tone="sage" aspect={1.15} label="Portrait Amandine" />
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 24,
                  left: -24,
                  background: "#ffffff",
                  padding: "16px 22px",
                  borderRadius: 22,
                  display: "flex",
                  gap: 14,
                  alignItems: "center",
                  boxShadow: "0 16px 40px rgba(0,0,0,0.12)",
                  border: "1px solid #e8e4d4",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "#dde2ce",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <PawIcon size={24} color="#6b7a44" />
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
                    Amandine Pinto
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-manrope), system-ui, sans-serif",
                      fontSize: 12,
                      color: "#7a7f6b",
                    }}
                  >
                    ACACED
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPES */}
      <section style={{ padding: "110px 56px", background: "#f1ecdc" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <Eyebrow>Ce qui guide mon accompagnement</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(44px, 5vw, 68px)",
                lineHeight: 1,
                color: "#1c2018",
                margin: "0 auto",
                letterSpacing: "-0.02em",
                maxWidth: 700,
              }}
            >
              Quatre principes,
              <br />
              <span style={{ color: "#6b7a44" }}>non négociables.</span>
            </h2>
            <div
              style={{
                marginTop: 40,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: 280,
                  borderRadius: 20,
                  overflow: "hidden",
                  boxShadow: "0 12px 32px rgba(28,32,24,0.12)",
                }}
              >
                <ImagePlaceholder tone="sage" aspect={1} label="Patte chien & main humaine" />
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {[
              { t: "Méthodes positives et respectueuses", d: "Aucune coercition, aucune violence — physique ou psychologique. Le respect du chien est non négociable." },
              { t: "Prise en compte des émotions et besoins", d: "Ceux du chien… et du dog parent. On travaille à deux, pas l'un contre l'autre." },
              { t: "Approche basée sur le comportement canin", d: "Sciences du comportement, lecture du langage canin. Ce qui guide mes décisions, c'est la réalité de votre chien — pas les raccourcis ni les idées reçues." },
              { t: "Accompagnement personnalisé", d: "Chaque duo est unique. Chaque programme l'est aussi — pas de recette toute faite." },
            ].map((x, i) => (
              <div
                key={i}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e8e4d4",
                  borderRadius: 24,
                  padding: "32px 32px",
                  display: "grid",
                  gridTemplateColumns: "52px 1fr",
                  gap: 20,
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: "#dde2ce",
                    color: "#6b7a44",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: 18,
                    flexShrink: 0,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                      fontWeight: 600,
                      fontSize: 22,
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
                      fontSize: 15,
                      lineHeight: 1.6,
                      color: "#4a4f3f",
                      margin: "8px 0 0",
                    }}
                  >
                    {x.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION ÉDUCATION */}
      <section style={{ padding: "120px 56px", background: "#fbfaf4" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Eyebrow>Ma vision de l&apos;éducation canine</Eyebrow>
          <h2
            style={{
              fontFamily: "var(--font-quicksand), system-ui, sans-serif",
              fontWeight: 600,
              fontSize: "clamp(44px, 5.5vw, 72px)",
              lineHeight: 1,
              color: "#1c2018",
              margin: 0,
              letterSpacing: "-0.02em",
              maxWidth: 900,
            }}
          >
            Une vraie éducation
            <br />
            va bien{" "}
            <span
              style={{
                color: "#6b7a44",
                fontFamily: "var(--font-lora), Georgia, serif",
                fontStyle: "italic",
                fontWeight: 500,
              }}
            >
              au-delà
            </span>
            <br />
            des ordres basiques.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, marginTop: 56 }}>
            <div>
              <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 18, lineHeight: 1.75, color: "#4a4f3f", margin: 0 }}>
                Elle forme un chien <strong>bien dans ses pattes</strong> : capable de réfléchir, de
                s&apos;adapter, et de faire de bons choix — même sans qu&apos;on le lui demande.
              </p>
              <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 17, lineHeight: 1.7, color: "#4a4f3f", marginTop: 20 }}>
                Un comportement non désiré n&apos;apparaît jamais par hasard. Il est toujours la
                réponse à quelque chose : une émotion, un besoin, une incompréhension…
              </p>
            </div>
            <div
              style={{
                background: "#8f9e63",
                color: "#fbfaf4",
                borderRadius: 24,
                padding: "32px 36px",
                fontFamily: "var(--font-lora), Georgia, serif",
                fontStyle: "italic",
                fontSize: 22,
                lineHeight: 1.5,
                fontWeight: 500,
                alignSelf: "center",
              }}
            >
              « Supprimer un comportement sans en comprendre l&apos;origine, c&apos;est traiter le
              symptôme sans soigner le mal.{" "}
              <strong style={{ fontStyle: "normal", fontWeight: 700, color: "#ebe2c8" }}>
                Mon approche va à la racine.
              </strong>{" "}
              »
            </div>
          </div>
        </div>
      </section>

      {/* AUTONOMIE */}
      <section style={{ padding: "120px 56px", background: "#f1ecdc" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 64, alignItems: "flex-start" }}>
            <div style={{ position: "sticky", top: 100 }}>
              <Eyebrow>Mon objectif</Eyebrow>
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
                Que ton chien soit
                <br />
                <span style={{ color: "#6b7a44" }}>bien dans sa tête.</span>
              </h2>
              <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 17, lineHeight: 1.7, color: "#4a4f3f", marginTop: 24, maxWidth: 420 }}>
                Qu&apos;il développe une vraie autonomie, qu&apos;il ait confiance en lui, en toi,
                et en son environnement.
              </p>
              <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 17, lineHeight: 1.7, color: "#4a4f3f", marginTop: 16, maxWidth: 420 }}>
                Et toi en tant que dog parent, je t&apos;accompagne dans l&apos;acquisition des
                connaissances essentielles pour mieux comprendre ton chien, et ne plus jamais te
                sentir seul(e) face aux situations.
              </p>
              <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 17, lineHeight: 1.7, color: "#4a4f3f", marginTop: 16, maxWidth: 420, fontWeight: 600 }}>
                L&apos;autonomie pour chacun. Un lien entre vous encore plus solide.
              </p>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 12, color: "#6b7a44", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 16 }}>
                Concrètement, je travaille pour que ton chien développe&nbsp;:
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
                {[
                  { t: "Ses autocontrôles", d: "Pas l'obéissance forcée, mais la capacité réelle à se réguler : gérer l'excitation, tolérer la frustration, faire face à l'imprévu sans paniquer, etc …" },
                  { t: "Sa capacité à rester calme", d: "Dans la maison, en balade, face aux imprévus." },
                  { t: "Son focus & sa confiance", d: "Te choisir comme repère, même dans le bruit." },
                  { t: "Ses bonnes décisions", d: "Faire les bons choix de lui-même, sans consigne." },
                ].map((x, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#ffffff",
                      border: "1px solid #e8e4d4",
                      borderRadius: 16,
                      padding: "18px 20px",
                    }}
                  >
                    <div style={{ fontFamily: "var(--font-quicksand), system-ui, sans-serif", fontWeight: 600, fontSize: 17, color: "#1c2018", lineHeight: 1.2 }}>{x.t}</div>
                    <div style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 13, color: "#4a4f3f", marginTop: 6 }}>{x.d}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                {[
                  "Respecter les espaces et les règles de vie",
                  "Interagir correctement avec son environnement",
                  "Faire les bons choix… même en ton absence de consigne",
                ].map((t, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: 14,
                      alignItems: "center",
                      background: "#ffffff",
                      border: "1px solid #e8e4d4",
                      borderRadius: 12,
                      padding: "14px 18px",
                    }}
                  >
                    <div
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: 8,
                        background: "#dde2ce",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <CheckIcon size={14} color="#6b7a44" />
                    </div>
                    <div style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 15, color: "#1c2018", fontWeight: 500 }}>{t}</div>
                  </div>
                ))}
              </div>
              <div style={{ background: "#8f9e63", color: "#fbfaf4", borderRadius: 22, padding: "24px 28px" }}>
                <div style={{ fontFamily: "var(--font-quicksand), system-ui, sans-serif", fontWeight: 600, fontSize: 20, lineHeight: 1.4 }}>
                  Un chien autonome, c&apos;est un chien en bonne santé mentale. Il comprend le
                  monde qui l&apos;entoure, gère ses émotions, et sait comment réagir — quelles que
                  soient les situations.
                </div>
                <div style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 14, marginTop: 14, opacity: 0.92, fontStyle: "italic" }}>
                  Quand ton chien va bien dans sa tête, vous allez bien tous les deux.{" "}
                  <strong style={{ fontStyle: "normal", fontWeight: 700 }}>C&apos;est ça, le vrai changement.</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARCOURS */}
      <section style={{ padding: "120px 56px", background: "#fbfaf4" }}>
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
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: 87, top: 20, bottom: 20, width: 2, background: "#e8e4d4" }} />
            {[
              {
                y: "2025",
                t: "Stage pratique avec Valérie Mouilleseaux-Iches",
                sub: "« De la main à la patte 21 » · Ahuy et alentours",
                d: "Une immersion terrain aux côtés d'une professionnelle expérimentée, dans la réalité du métier. Observation, accompagnement de duos, gestion de cas concrets.",
              },
              {
                y: "2025",
                t: "Diplôme Éducatrice Canine Comportementaliste",
                sub: "Nature de Chien — centre de formation de référence nationale · certifié Qualiopi",
                d: "Une formation professionnelle complète, alliant théorie approfondie, pratique avec de vrais chiens et rendez-vous clients réels. Un cursus exigeant qui m'a permis de construire des bases solides et modernes en comportement canin, en méthodes positives et en accompagnement de l'humain.",
              },
              {
                y: "2025",
                t: "ACACED — Attestation officielle",
                sub: "Nature de Chien · certifié Qualiopi",
                d: "L'Attestation de Connaissances pour les Animaux de Compagnie d'Espèces Domestiques — le document officiel délivré par l'État, qui autorise légalement à exercer auprès des animaux de compagnie.",
              },
            ].map((x, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "88px 1fr 88px",
                  gap: 32,
                  alignItems: "flex-start",
                  marginBottom: 32,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: 22,
                    color: "#6b7a44",
                    background: "#dde2ce",
                    padding: "12px 16px",
                    borderRadius: 12,
                    textAlign: "center",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {x.y}
                </div>
                <div
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e8e4d4",
                    borderRadius: 20,
                    padding: "24px 28px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: -12,
                      top: 24,
                      width: 0,
                      height: 0,
                      borderTop: "10px solid transparent",
                      borderBottom: "10px solid transparent",
                      borderRight: "12px solid #ffffff",
                    }}
                  />
                  <h3 style={{ fontFamily: "var(--font-quicksand), system-ui, sans-serif", fontWeight: 600, fontSize: 22, margin: 0, color: "#1c2018", lineHeight: 1.2 }}>{x.t}</h3>
                  <div style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 13, color: "#7a7f6b", marginTop: 4, fontWeight: 500 }}>{x.sub}</div>
                  <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 15, lineHeight: 1.65, color: "#4a4f3f", margin: "14px 0 0" }}>{x.d}</p>
                </div>
                <div />
              </div>
            ))}
            <div style={{ display: "grid", gridTemplateColumns: "88px 1fr 88px", gap: 32, alignItems: "flex-start", marginTop: 24 }}>
              <div
                style={{
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: 11,
                  color: "#4a4f3f",
                  background: "#f1ecdc",
                  padding: "10px 12px",
                  borderRadius: 12,
                  textAlign: "center",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                En cours
              </div>
              <div
                style={{
                  background: "#f1ecdc",
                  borderRadius: 20,
                  padding: "24px 28px",
                  border: "1px dashed #c9b78f",
                }}
              >
                <h3 style={{ fontFamily: "var(--font-quicksand), system-ui, sans-serif", fontWeight: 600, fontSize: 22, margin: 0, color: "#1c2018", lineHeight: 1.2 }}>En formation continue</h3>
                <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 15, lineHeight: 1.65, color: "#4a4f3f", margin: "12px 0 0" }}>
                  Le comportement canin est un domaine en perpétuelle évolution. Se former en continu
                  n&apos;est pas une option pour moi : c&apos;est une évidence, et un engagement envers
                  vous et vos chiens.
                </p>
              </div>
              <div />
            </div>
          </div>
        </div>
      </section>

      {/* TRANSPARENCE */}
      <section
        style={{
          padding: "110px 56px",
          background: "#8f9e63",
          color: "#fbfaf4",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <PawPattern color="rgba(255,255,255,0.05)" density={0.4} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
            <div>
              <Eyebrow light>En toute transparence</Eyebrow>
              <h2
                style={{
                  fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(36px, 4vw, 56px)",
                  lineHeight: 1,
                  margin: 0,
                  letterSpacing: "-0.02em",
                }}
              >
                Une profession
                <br />
                <span
                  style={{
                    color: "#ebe2c8",
                    fontFamily: "var(--font-lora), Georgia, serif",
                    fontStyle: "italic",
                    fontWeight: 500,
                  }}
                >
                  non réglementée.
                </span>
              </h2>
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 18, lineHeight: 1.7, margin: 0, opacity: 0.95 }}>
                En France, le métier d&apos;éducateur canin est une{" "}
                <strong>profession non réglementée</strong>. N&apos;importe qui peut s&apos;en
                proclamer, sans formation ni diplôme, mais juste avec l&apos;acquisition de
                l&apos;ACACED qui n&apos;apprend pas notre cœur de métier, mais autorise le droit
                d&apos;exercer.
              </p>
              <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 17, lineHeight: 1.7, margin: "20px 0 0", opacity: 0.88 }}>
                C&apos;est une réalité que je trouve importante d&apos;aborder en toute transparence,
                parce que <strong>vous méritez de savoir à qui vous confiez votre chien</strong>.
              </p>
              <div style={{ display: "flex", gap: 10, marginTop: 28, flexWrap: "wrap" }}>
                {["ACACED officiel", "Diplôme Qualiopi", "Méthodes positives", "Formation continue"].map((t, i) => (
                  <span
                    key={i}
                    style={{
                      padding: "8px 14px",
                      borderRadius: 999,
                      background: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      fontFamily: "var(--font-manrope), system-ui, sans-serif",
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ORIGINES */}
      <section style={{ padding: "120px 56px", background: "#fbfaf4" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 72, maxWidth: 800, marginLeft: "auto", marginRight: "auto" }}>
            <Eyebrow>Les origines de ma passion</Eyebrow>
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
              Trois chiens.
              <br />
              <span
                style={{
                  color: "#6b7a44",
                  fontFamily: "var(--font-lora), Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: 500,
                }}
              >
                Trois graines plantées.
              </span>
            </h2>
            <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 17, lineHeight: 1.65, color: "#4a4f3f", marginTop: 24 }}>
              Ce métier n&apos;est pas tombé du ciel. Il s&apos;est construit, à travers trois
              compagnons qui ont chacun planté quelque chose en moi.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              {
                name: "Tango",
                yr: "Enfance",
                breed: "Labrador",
                tone: "sage" as const,
                summary: "Le compagnon des premières années.",
                body: "Enfant, j'ai grandi avec Tango, un labrador adorable. Une présence douce, qui a planté quelque chose de discret mais durable : l'idée que la vie avec un chien, c'est précieux.",
              },
              {
                name: "Hasko",
                yr: "Collège",
                breed: "Westie",
                tone: "cream" as const,
                summary: "Le premier déclic. Le mal compris.",
                body: "Au collège, mes parents ont adopté Hasko, un westie… qu'aujourd'hui je définirais de « mal compris ». Très vite, j'ai observé quelque chose que beaucoup de familles vivent sans oser en parler : se sentir dépassé par son chien.",
                body2: "Les aboiements incessants épuisaient mes parents. Ils ont fait appel à un éducateur canin, sa solution : un collier électrique. « Ça ne fait pas si mal, c'est juste pour lui rappeler d'arrêter d'aboyer », disait-il. Ils lui ont fait confiance. Comme on le ferait avec n'importe quel professionnel. Moi, j'observais Hasko. Je ressentais la fragilité émotionnelle qui s'installait en lui. Parce qu'utiliser des outils coercitifs — collier électrique, étrangleurs, laisse lasso… — ont des réelles conséquences sur le chien.",
                callout: "Respecter la sensibilité du chien, comprendre ses émotions, lui offrir un apprentissage bienveillant : ce n'était pas juste un choix. C'était une nécessité.",
                callout_label: "Le premier déclic",
              },
              {
                name: "Laska",
                yr: "À 21 ans",
                breed: "Croisée labrador × border collie × husky",
                tone: "sage" as const,
                summary: "La deuxième graine. L'empathie pour les dog parents.",
                body: "À l'âge de 21 ans, Laska entrait dans ma vie. Elle avait 6 ans, lumineuse, et exceptionnelle…. Avec elle, j'ai vécu de l'intérieur ce que vivent tant de dog parents.",
                body2: "Le rappel qui échoue, les interactions compliquées avec d'autres chiens, les moments où l'on veut sincèrement bien faire… sans savoir comment.",
                callout: "Avec tout ce qu'on a vécu ensemble, tout ce qu'elle m'a appris… merci pour tout, ma fille. 🐾",
                callout_label: "À Laska",
              },
            ].map((s, i) => (
              <article
                key={i}
                style={{
                  background: s.tone === "sage" ? "#8f9e63" : "#f1ecdc",
                  color: s.tone === "sage" ? "#fbfaf4" : "#1c2018",
                  borderRadius: 32,
                  padding: "48px 56px",
                  display: "grid",
                  gridTemplateColumns: "0.85fr 1.15fr",
                  gap: 56,
                  alignItems: "center",
                }}
              >
                <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                  <div style={{ borderRadius: 24, overflow: "hidden" }}>
                    <ImagePlaceholder
                      tone={s.tone === "sage" ? "cream" : "sage"}
                      aspect={1.1}
                      label={`Photo ${s.name}`}
                    />
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      display: "inline-flex",
                      gap: 8,
                      alignItems: "center",
                      fontFamily: "var(--font-manrope), system-ui, sans-serif",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      opacity: 0.85,
                      marginBottom: 14,
                    }}
                  >
                    <span>{s.yr}</span>
                    <span style={{ opacity: 0.5 }}>·</span>
                    <span>{s.breed}</span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                      fontWeight: 700,
                      fontSize: "clamp(48px, 6vw, 80px)",
                      margin: 0,
                      lineHeight: 0.95,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {s.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-lora), Georgia, serif",
                      fontStyle: "italic",
                      fontSize: 22,
                      lineHeight: 1.4,
                      fontWeight: 500,
                      margin: "12px 0 0",
                      color: s.tone === "sage" ? "#ebe2c8" : "#6b7a44",
                    }}
                  >
                    {s.summary}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 24 }}>
                    <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 16, lineHeight: 1.7, margin: 0, opacity: s.tone === "sage" ? 0.95 : 1 }}>{s.body}</p>
                    {s.body2 && <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 15, lineHeight: 1.7, margin: 0, opacity: s.tone === "sage" ? 0.9 : 1 }}>{s.body2}</p>}
                  </div>
                  {s.callout && (
                    <div
                      style={{
                        marginTop: 28,
                        padding: "20px 24px",
                        background: s.tone === "sage" ? "rgba(255,255,255,0.12)" : "#ffffff",
                        border: s.tone === "sage" ? "1px solid rgba(255,255,255,0.2)" : "1px solid #e8e4d4",
                        borderRadius: 18,
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--font-manrope), system-ui, sans-serif",
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          opacity: 0.8,
                          marginBottom: 10,
                          color: s.tone === "sage" ? "#ebe2c8" : "#6b7a44",
                        }}
                      >
                        {s.callout_label}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-lora), Georgia, serif",
                          fontStyle: "italic",
                          fontSize: 19,
                          lineHeight: 1.5,
                          fontWeight: 500,
                        }}
                      >
                        {s.callout}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}

            {/* Pivot */}
            <div
              style={{
                marginTop: 32,
                background: "#8f9e63",
                color: "#fbfaf4",
                borderRadius: 32,
                padding: "56px 64px",
                display: "grid",
                gridTemplateColumns: "1fr 1.4fr",
                gap: 56,
                alignItems: "center",
              }}
            >
              <div>
                <div style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 11, color: "rgba(255,255,255,0.7)", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 14 }}>
                  Le passage à l&apos;acte
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: 44,
                    margin: 0,
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Après le commerce,
                  <br />
                  <span
                    style={{
                      color: "#ebe2c8",
                      fontFamily: "var(--font-lora), Georgia, serif",
                      fontStyle: "italic",
                      fontWeight: 500,
                    }}
                  >
                    l&apos;évidence.
                  </span>
                </h3>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 17, lineHeight: 1.7, margin: 0, opacity: 0.95 }}>
                  Après quelques années dans le commerce, une évidence s&apos;est imposée : je
                  passais à côté de l&apos;essentiel. Travailler sans sens, sans impact réel…{" "}
                  <strong>J&apos;avais besoin de me sentir profondément utile.</strong>
                </p>
                <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 17, lineHeight: 1.7, margin: "18px 0 0", opacity: 0.88 }}>
                  Chaque année en France, des milliers de chiens sont abandonnés. Des dog parents se
                  sont sentis seuls, dépassés, sans clés pour comprendre et agir. Un comportement mal
                  compris, une situation qui s&apos;emballe, et tout un lien qui se fragilise…
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-lora), Georgia, serif",
                    fontStyle: "italic",
                    fontSize: 19,
                    lineHeight: 1.55,
                    margin: "20px 0 0",
                    color: "#ebe2c8",
                    fontWeight: 500,
                  }}
                >
                  C&apos;est exactement là que je voulais être. Il ne manquait plus qu&apos;un nom
                  pour tout ça… C&apos;est ainsi qu&apos;est née{" "}
                  <strong style={{ fontStyle: "normal", fontWeight: 700, color: "#fbfaf4" }}>
                    Nova Lien
                  </strong>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI NOVA LIEN */}
      <Meaning />

      {/* CTA */}
      <section style={{ padding: "110px 56px", background: "#fbfaf4" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            background: "#8f9e63",
            color: "#fbfaf4",
            borderRadius: 36,
            padding: "72px 64px",
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 56,
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <PawPattern color="rgba(255,255,255,0.04)" density={0.4} />
          <div style={{ position: "relative" }}>
            <Eyebrow light>Tu te reconnais dans tout ça ?</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(36px, 4vw, 56px)",
                lineHeight: 1,
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              On en parle ?
              <br />
              <span
                style={{
                  color: "#dde2ce",
                  fontFamily: "var(--font-lora), Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: 500,
                }}
              >
                Sans engagement.
              </span>
            </h2>
            <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 16, lineHeight: 1.65, margin: "24px 0 0", opacity: 0.88, maxWidth: 420 }}>
              Une question, un doute, l&apos;envie d&apos;en savoir plus ? Remplissez le formulaire
              de premier contact, je vous réponds sous 48&nbsp;h.
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
              <span>Demande de premier contact</span>
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
              href="/services"
              style={{
                background: "rgba(255,255,255,0.12)",
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
              <span>Voir mes prestations</span>
              <span style={{ fontSize: 18 }}>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
