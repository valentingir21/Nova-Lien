import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import CheckIcon from "@/components/ui/CheckIcon";
import PawPattern from "@/components/ui/PawPattern";
import PawIcon from "@/components/ui/PawIcon";
import Meaning from "@/components/sections/home/Meaning";
import ParcoursSticky from "@/components/sections/about/ParcoursSticky";

export const metadata: Metadata = {
  title: "À propos — Amandine Pinto",
  description:
    "Découvrez le parcours d'Amandine Pinto, éducatrice canine comportementaliste à Dijon. ACACED, diplôme Qualiopi, méthodes positives.",
};

export default function AProposPage() {
  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .ap-section { padding-left: 24px !important; padding-right: 24px !important; }
          .ap-section-tall { min-height: unset !important; }

          /* Hero */
          .ap-hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .ap-hero-photo { display: none !important; }

          /* Principes */
          .ap-principes-grid { grid-template-columns: 1fr !important; }
          .ap-principes-photo { display: none !important; }
          .ap-principes-cards { grid-template-columns: 1fr !important; }

          /* Vision */
          .ap-vision-grid { grid-template-columns: 1fr !important; gap: 32px !important; }

          /* Autonomie */
          .ap-autonomie-grid { grid-template-columns: 1fr !important; gap: 40px !important; }

          /* Transparence */
          .ap-transparence { padding-top: 80px !important; padding-bottom: 80px !important; }
          .ap-transparence-grid { grid-template-columns: 1fr !important; gap: 40px !important; }

          /* Origines */
          .ap-origines-card { grid-template-columns: 1fr !important; }
          .ap-origines-photo { display: none !important; }

          /* CTA */
          .ap-cta-card { grid-template-columns: 1fr !important; padding: 48px 28px !important; gap: 36px !important; }
        }
      `}</style>

      {/* HERO */}
      <section className="ap-section" style={{ padding: "80px 56px 100px", background: "#fbfaf4", minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div className="ap-hero-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr 0.7fr", gap: 80, alignItems: "center" }}>
            <div>
              <h1
                style={{
                  fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(48px, 5.5vw, 80px)",
                  lineHeight: 1.0,
                  margin: "0 0 0",
                  color: "#1c2018",
                  letterSpacing: "-0.03em",
                }}
              >
                Fondatrice,
                <br />
                <span style={{ color: "#6b7a44" }}>Amandine Pinto.</span>
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
                Éducatrice canine comportementaliste – secteur Dijon et ses alentours.
              </p>
            </div>
            <div className="ap-hero-photo" style={{ position: "relative" }}>
              <div
                style={{
                  borderRadius: 28,
                  overflow: "hidden",
                  boxShadow: "0 30px 80px rgba(28,32,24,0.18)",
                }}
              >
                <ImagePlaceholder tone="sage" aspect={1.15} label="Portrait Amandine" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPES */}
      <section className="ap-section" style={{ padding: "64px 56px", background: "#f1ecdc" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div className="ap-principes-grid" style={{ display: "grid", gridTemplateColumns: "1.6fr 0.75fr", gap: 48, alignItems: "center" }}>

            {/* Gauche : eyebrow + titre + 4 cartes */}
            <div>
              <Eyebrow>Ce qui guide mon accompagnement</Eyebrow>
              <h2
                style={{
                  fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(28px, 3vw, 42px)",
                  lineHeight: 1.05,
                  color: "#1c2018",
                  margin: "0 0 24px",
                  letterSpacing: "-0.02em",
                }}
              >
                Quatre principes,{" "}
                <span style={{ color: "#6b7a44" }}>non négociables.</span>
              </h2>
              <div className="ap-principes-cards" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                {[
                  { t: "Méthodes positives et respectueuses", d: "Aucune coercition, aucune violence physique ou psychologique. Le respect du chien est non négociable." },
                  { t: "Prise en compte des émotions et besoins", d: "Ceux du chien… et du dog parent. On travaille à deux, pas l'un contre l'autre." },
                  { t: "Approche basée sur le comportement canin", d: "Sciences du comportement, lecture du langage canin. Ce qui guide mes décisions, c'est la réalité de votre chien." },
                  { t: "Accompagnement personnalisé", d: "Chaque duo est unique. Chaque programme l'est aussi, pas de recette toute faite." },
                ].map((x, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#ffffff",
                      border: "1px solid #e8e4d4",
                      borderRadius: 18,
                      padding: "20px 20px",
                      display: "grid",
                      gridTemplateColumns: "40px 1fr",
                      gap: 14,
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 11,
                        background: "#dde2ce",
                        color: "#6b7a44",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                        fontWeight: 700,
                        fontSize: 14,
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
                          fontSize: 17,
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
                          margin: "7px 0 0",
                        }}
                      >
                        {x.d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Droite : photo */}
            <div className="ap-principes-photo" style={{ borderRadius: 24, overflow: "hidden", boxShadow: "0 24px 64px rgba(28,32,24,0.15)", height: 440 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/main-chien.jpg"
                alt="Main humaine et chien"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center bottom", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* VISION ÉDUCATION */}
      <section className="ap-section ap-section-tall" style={{ padding: "120px 56px", background: "#fbfaf4", minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%" }}>
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
            Éduquer bien au-delà
            <br />
            <span style={{ color: "#6b7a44" }}>des ordres basiques.</span>
          </h2>
          <div className="ap-vision-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, marginTop: 56 }}>
            <div>
              <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 18, lineHeight: 1.75, color: "#4a4f3f", margin: 0 }}>
                Je forme un chien <strong>bien dans ses pattes</strong> : capable de réfléchir, de
                s&apos;adapter, et de faire de bons choix, même sans qu&apos;on le lui demande.
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
      <section className="ap-section ap-section-tall" style={{ padding: "64px 56px", background: "#f1ecdc", minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", width: "100%" }}>
          <div className="ap-autonomie-grid" style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 56, alignItems: "flex-start" }}>
            <div>
              <Eyebrow>Mon objectif</Eyebrow>
              <h2
                style={{
                  fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(32px, 3.5vw, 50px)",
                  lineHeight: 1.05,
                  color: "#1c2018",
                  margin: "0 0 20px",
                  letterSpacing: "-0.02em",
                }}
              >
                Une compréhension
                <br />
                <span style={{ color: "#6b7a44" }}>mutuelle.</span>
              </h2>
              <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 17, lineHeight: 1.65, color: "#4a4f3f", margin: "0 0 14px", maxWidth: 380 }}>
                Qu&apos;il ait confiance en lui, en toi, et en son environnement.
              </p>
              <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 17, lineHeight: 1.65, color: "#4a4f3f", margin: "0 0 14px", maxWidth: 380 }}>
                Et toi en tant que dog parent, je t&apos;accompagne dans l&apos;acquisition des
                connaissances essentielles pour mieux comprendre ton chien, et ne plus jamais te
                sentir seul(e) face aux situations.
              </p>
              <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 17, lineHeight: 1.65, color: "#4a4f3f", margin: 0, maxWidth: 380, fontWeight: 600 }}>
                L&apos;autonomie pour chacun. Un lien entre vous encore plus solide.
              </p>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 12, color: "#6b7a44", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 14 }}>
                Concrètement, je travaille pour que ton chien développe&nbsp;:
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 12 }}>
                {[
                  {
                    t: "Ses autocontrôles",
                    d: "Gérer l'excitation, tolérer la frustration, faire face à l'imprévu sans stress, redescendre après une émotion forte, etc...",
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="1,10 5,10 7,3 9,17 11,10 15,10 19,10" />
                      </svg>
                    ),
                  },
                  {
                    t: "Sa capacité à rester calme",
                    d: "Dans la maison, en balade, face aux imprévus.",
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 2C17 2 17 11 10 14C3 17 2 17 2 17C2 17 2 16 5 10C8 4 17 2 17 2Z" />
                        <line x1="2" y1="17" x2="10" y2="9" />
                      </svg>
                    ),
                  },
                  {
                    t: "Son focus & sa confiance",
                    d: "Te choisir comme repère, même dans le bruit.",
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                        <circle cx="10" cy="10" r="7" />
                        <circle cx="10" cy="10" r="3" />
                        <line x1="10" y1="1" x2="10" y2="4" />
                        <line x1="10" y1="16" x2="10" y2="19" />
                        <line x1="1" y1="10" x2="4" y2="10" />
                        <line x1="16" y1="10" x2="19" y2="10" />
                      </svg>
                    ),
                  },
                  {
                    t: "Sa prise de décisions",
                    d: "Faire les bons choix de lui-même, sans consigne.",
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 2a5 5 0 0 1 3.5 8.5C12 12 12 13 12 14H8c0-1 0-2-1.5-3.5A5 5 0 0 1 10 2Z" />
                        <line x1="8" y1="16" x2="12" y2="16" />
                        <line x1="9" y1="18" x2="11" y2="18" />
                      </svg>
                    ),
                  },
                ].map((x, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: 16,
                      alignItems: "flex-start",
                      background: "#ffffff",
                      border: "1px solid #e8e4d4",
                      borderRadius: 16,
                      padding: "16px 20px",
                    }}
                  >
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: "#dde2ce", color: "#6b7a44", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      {x.icon}
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--font-quicksand), system-ui, sans-serif", fontWeight: 600, fontSize: 16, color: "#1c2018", lineHeight: 1.2 }}>{x.t}</div>
                      <div style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 13, color: "#4a4f3f", marginTop: 5, lineHeight: 1.55 }}>{x.d}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ background: "#8f9e63", color: "#fbfaf4", borderRadius: 18, padding: "22px 26px" }}>
                <div style={{ fontFamily: "var(--font-quicksand), system-ui, sans-serif", fontWeight: 600, fontSize: 18, lineHeight: 1.4 }}>
                  Un chien autonome, c&apos;est un chien en bonne santé mentale. Il comprend le
                  monde qui l&apos;entoure, gère ses émotions, et sait comment réagir, quelles que
                  soient les situations.
                </div>
                <div style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 14, marginTop: 12, opacity: 0.92, fontStyle: "italic" }}>
                  Quand ton chien va bien dans sa tête, vous allez bien tous les deux.{" "}
                  <strong style={{ fontStyle: "normal", fontWeight: 700 }}>C&apos;est ça, le vrai changement.</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARCOURS */}
      <ParcoursSticky />

      {/* TRANSPARENCE */}
      <section
        className="ap-section ap-transparence"
        style={{
          padding: "160px 56px",
          background: "#8f9e63",
          color: "#fbfaf4",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <PawPattern color="rgba(255,255,255,0.10)" density={0.6} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <div className="ap-transparence-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
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
                <span style={{ color: "#ebe2c8" }}>non réglementée.</span>
              </h2>
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 21, lineHeight: 1.7, margin: 0, opacity: 0.95 }}>
                En France, le métier d&apos;éducateur canin est une{" "}
                <strong>profession non réglementée</strong>. N&apos;importe qui peut s&apos;en
                proclamer, sans formation ni diplôme, mais juste avec l&apos;acquisition de
                l&apos;ACACED qui n&apos;apprend pas notre cœur de métier, mais autorise le droit
                d&apos;exercer.
              </p>
              <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 21, lineHeight: 1.7, margin: "24px 0 0", opacity: 0.88 }}>
                C&apos;est une réalité que je trouve importante d&apos;aborder en toute transparence,
                parce que <strong>vous méritez de savoir à qui vous confiez votre chien</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ORIGINES */}
      <section className="ap-section" style={{ padding: "120px 56px", background: "#fbfaf4" }}>
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
              <span style={{ color: "#6b7a44" }}>Trois graines plantées.</span>
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
                photo: "/hasko.png",
                summary: "Le premier déclic. Le mal compris.",
                body: "Adolescente, Hasko, un westie m'a fait réaliser quelque chose que beaucoup de familles vivent sans oser en parler : se sentir dépassé par son chien.",
                body2: "Épuisés par ces aboiements incessants, mes parents ont fait appel à un éducateur canin, sa solution : un collier électrique. « Ça ne fait pas si mal, c'est juste pour lui rappeler d'arrêter d'aboyer », disait-il. Ils lui ont fait confiance. Comme on le ferait avec n'importe quel professionnel. Je ressentais la fragilité émotionnelle qui s'installait en lui. Parce qu'utiliser des outils coercitifs — collier électrique, étrangleurs, laisse lasso… — ont des réelles conséquences sur le chien.",
                callout: "Respecter la sensibilité du chien, lui offrir un apprentissage bienveillant : ce n'était pas juste un choix. C'était une nécessité pour Hasko.",
                callout_label: "Le premier déclic",
              },
              {
                name: "Laska",
                yr: "À 21 ans",
                breed: "Croisée labrador × border collie × husky",
                tone: "sage" as const,
                photo: "/laska.png",
                summary: "La deuxième graine. L'empathie pour les dog parents.",
                body: "À l'âge de 21 ans, Laska entrait dans ma vie. Elle avait 6 ans, lumineuse, et exceptionnelle…. Avec elle, j'ai vécu de l'intérieur ce que vivent tant de dog parents.",
                body2: "Le rappel qui échoue, les interactions compliquées avec d'autres chiens, les moments où l'on veut sincèrement bien faire… sans savoir comment.",
                callout: "Avec tout ce qu'on a vécu ensemble, tout ce qu'elle m'a appris… merci pour tout, ma fille.",
                callout_label: "À Laska",
              },
            ].map((s, i) => (
              <article
                key={i}
                className="ap-origines-card"
                style={{
                  background: s.tone === "sage" ? "#8f9e63" : "#f1ecdc",
                  color: s.tone === "sage" ? "#fbfaf4" : "#1c2018",
                  borderRadius: 32,
                  padding: "32px 40px",
                  display: "grid",
                  gridTemplateColumns: s.name === "Hasko" ? "1.45fr 0.55fr" : "0.55fr 1.45fr",
                  gap: 40,
                  alignItems: "center",
                }}
              >
                <div className="ap-origines-photo" style={{ order: i % 2 === 0 ? 0 : 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ borderRadius: 24, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", width: s.name === "Hasko" ? 340 : "100%" }}>
                    {s.photo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={s.photo}
                        alt={`Photo ${s.name}`}
                        style={{ width: "100%", height: "auto", display: "block" }}
                      />
                    ) : (
                      <ImagePlaceholder
                        tone={s.tone === "sage" ? "cream" : "sage"}
                        aspect={1.1}
                        label={`Photo ${s.name}`}
                      />
                    )}
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
                      fontSize: "clamp(36px, 4vw, 60px)",
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
                      fontSize: 19,
                      lineHeight: 1.4,
                      fontWeight: 500,
                      margin: "8px 0 0",
                      color: s.tone === "sage" ? "#ebe2c8" : "#6b7a44",
                    }}
                  >
                    {s.summary}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 16 }}>
                    <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 16, lineHeight: 1.65, margin: 0, opacity: s.tone === "sage" ? 0.95 : 1 }}>{s.body}</p>
                    {s.body2 && <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 16, lineHeight: 1.65, margin: 0, opacity: s.tone === "sage" ? 0.9 : 1 }}>{s.body2}</p>}
                  </div>
                  {s.callout && (
                    <div
                      style={{
                        marginTop: 16,
                        padding: "14px 18px",
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

          </div>
        </div>
      </section>

      {/* PIVOT */}
      <section className="ap-section ap-section-tall" style={{ minHeight: "100vh", background: "#f1ecdc", display: "flex", alignItems: "center", padding: "120px 56px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%" }}>
          <Eyebrow>Le passage à l&apos;acte</Eyebrow>
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
            Après le commerce,
            <br />
            <span style={{ color: "#6b7a44" }}>l&apos;évidence.</span>
          </h2>
          <div style={{ marginTop: 56, maxWidth: 640 }}>
            <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 18, lineHeight: 1.75, margin: 0, color: "#4a4f3f" }}>
              Après quelques années dans le commerce, une évidence s&apos;est imposée : je
              passais à côté de l&apos;essentiel. Travailler sans sens, sans impact réel…{" "}
              <strong>J&apos;avais besoin de me sentir profondément utile.</strong>
            </p>
            <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 17, lineHeight: 1.75, margin: "20px 0 0", color: "#4a4f3f" }}>
              Chaque année en France, des milliers de chiens sont abandonnés. Des dog parents se
              sont sentis seuls, dépassés, sans clés pour comprendre et agir. Un comportement mal
              compris, une situation qui s&apos;emballe, et tout un lien qui se fragilise…
            </p>
            <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 17, lineHeight: 1.75, margin: "20px 0 0", color: "#4a4f3f" }}>
              C&apos;est exactement là que je voulais être. Il ne manquait plus qu&apos;un nom
              pour tout ça… C&apos;est ainsi qu&apos;est née{" "}
              <strong style={{ fontWeight: 700, color: "#6b7a44" }}>Nova Lien</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* POURQUOI NOVA LIEN */}
      <Meaning />

      {/* CTA */}
      <section className="ap-section" style={{ padding: "110px 56px", background: "#fbfaf4" }}>
        <div
          className="ap-cta-card"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            background: "#f1ecdc",
            color: "#1c2018",
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
          <div style={{ position: "relative" }}>
            <Eyebrow>Tu te reconnais dans tout ça ?</Eyebrow>
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
              <span style={{ color: "#6b7a44" }}>
                Sans engagement.
              </span>
            </h2>
            <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 16, lineHeight: 1.65, margin: "24px 0 0", color: "#4a4f3f", maxWidth: 420 }}>
              Une question, un doute, l&apos;envie d&apos;en savoir plus ? Remplissez le formulaire
              de premier contact, je vous réponds sous 48&nbsp;h.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, position: "relative" }}>
            <Link
              href="/contact"
              style={{
                background: "#8f9e63",
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
              }}
            >
              <span>Demande de premier contact</span>
              <span
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 99,
                  background: "#fbfaf4",
                  color: "#6b7a44",
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
                background: "rgba(143,158,99,0.12)",
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
                border: "1px solid rgba(143,158,99,0.25)",
              }}
            >
              <span>Voir mes prestations</span>
              <span style={{ fontSize: 18, color: "#6b7a44" }}>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
