"use client";

import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import PawPattern from "@/components/ui/PawPattern";
import { useState } from "react";

const sections = [
  {
    cat: "Méthodes & éducation",
    items: [
      {
        q: "Est-ce que les méthodes positives fonctionnent vraiment ?",
        rich: true,
        a: "",
      },
      {
        q: "À partir de quel âge peut-on éduquer un chien ?",
        a: "Dès le plus jeune âge ! Un chiot commence à apprendre dès ses premières semaines de vie. Plus tôt on pose des bases solides, plus c'est facile pour lui et pour vous. Mais attention, il n'est jamais trop tard non plus. Un chien adulte ou senior est tout à fait capable d'apprendre et d'évoluer. L'âge n'est pas un obstacle, c'est simplement un contexte dont on tient compte pour adapter l'accompagnement.",
      },
      {
        q: "Mon chien est très têtu, est-ce utile de faire un suivi ?",
        a: "Être « têtu », ça n'existe pas vraiment chez le chien. Ce qu'on perçoit comme de l'entêtement est souvent un manque de motivation, une incompréhension, un besoin non satisfait. Mon rôle est justement de comprendre pourquoi ce comportement se produit, et de trouver un équilibre qui fonctionne pour vous deux. Les chiens les plus « difficiles » ont souvent juste besoin d'être compris.",
      },
      {
        q: "Pourquoi faire appel à un éducateur canin ?",
        a: "Parce que vous n'avez pas à gérer ça seul·e. Avoir un chien, c'est merveilleux — mais ce n'est pas inné. Comprendre son langage, ses besoins, ses émotions… ça s'apprend. Un éducateur canin vous apporte un regard extérieur, des clés concrètes et un accompagnement adapté à votre situation. Faire appel à un professionnel, ce n'est pas un aveu d'échec — c'est un acte d'amour envers votre chien.",
      },
      {
        q: "Travaillez-vous avec toutes les races ?",
        a: "Oui, sans exception. Chaque race a ses particularités, ses instincts, ses besoins spécifiques — et c'est précisément ce dont je tiens compte pour personnaliser chaque accompagnement. Qu'il s'agisse d'un chihuahua ou d'un malinois, d'un bouledogue ou d'un border collie, chaque chien mérite une approche adaptée à ce qu'il est.",
      },
    ],
  },
  {
    cat: "Déroulement & suivi",
    items: [
      {
        q: "Combien de séances faut-il en moyenne ?",
        a: "Cela dépend entièrement de votre situation, de la problématique de votre chien et de votre investissement au quotidien. Certains duos progressent rapidement en quelques séances, d'autres ont besoin d'un accompagnement plus long. C'est pour ça que tout commence par un bilan comportemental : il me permet d'évaluer vos besoins et de vous proposer un programme réaliste et adapté.",
      },
      {
        q: "Est-ce que je dois continuer à travailler entre les séances ?",
        language: true,
        a: "",
      },
      {
        q: "Vous déplacez-vous partout ?",
        a: "J'interviens dans le secteur de Dijon et ses alentours (rayon de 30 km environ). En cas de doute sur votre localisation, n'hésitez pas à me contacter directement — je ferai mon possible pour trouver une solution.",
      },
    ],
  },
];

function SeligmanAnswer() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 16, lineHeight: 1.75, color: "#4a4f3f", margin: 0 }}>
        <strong>Oui, et c&apos;est même scientifiquement prouvé.</strong> Les méthodes positives sont
        basées sur la compréhension du comportement canin et le renforcement de ce que le chien fait
        bien, plutôt que la punition de ce qu&apos;il fait mal.
      </p>
      <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 16, lineHeight: 1.75, color: "#4a4f3f", margin: 0 }}>
        Un chien qui apprend dans un cadre bienveillant est un chien plus motivé, plus confiant, et
        dont les acquis sont bien plus durables. La punition peut stopper un comportement en surface —
        elle n&apos;en traite jamais la cause.
      </p>
      <div style={{ background: "#f1ecdc", borderRadius: 18, padding: "20px 24px", borderLeft: "3px solid #c9b78f" }}>
        <div style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 11, color: "#4a4f3f", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 10 }}>
          L&apos;objection fréquente
        </div>
        <p style={{ fontFamily: "var(--font-lora), Georgia, serif", fontStyle: "italic", fontSize: 16, lineHeight: 1.6, color: "#4a4f3f", margin: 0 }}>
          « Oui mais… quand je tape mon chien, ou que je lui mets un collier électrique, il arrête
          immédiatement. Ça fonctionne ! »
        </p>
      </div>
      <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 16, lineHeight: 1.75, color: "#4a4f3f", margin: 0 }}>
        Effectivement, on observe que le comportement s&apos;arrête — mais à quel prix ? Ce qu&apos;on
        prend pour de l&apos;obéissance s&apos;appelle en réalité de l&apos;
        <strong>inhibition</strong>. Le chien n&apos;a pas compris. Il n&apos;a pas appris. Il a eu
        peur. Il cesse d&apos;agir non parce qu&apos;il a fait un bon choix, mais parce qu&apos;il{" "}
        <em>n&apos;ose plus s&apos;exprimer</em>.
      </p>

      {/* Seligman block */}
      <div
        style={{
          background: "#8f9e63",
          color: "#fbfaf4",
          borderRadius: 24,
          padding: "32px 36px",
          marginTop: 8,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <PawPattern color="rgba(255,255,255,0.10)" density={0.5} />
        <div style={{ position: "relative" }}>
          <div style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", opacity: 0.85, marginBottom: 12 }}>
            Ce que la science nous dit
          </div>
          <h4 style={{ fontFamily: "var(--font-quicksand), system-ui, sans-serif", fontWeight: 600, fontSize: 30, margin: 0, lineHeight: 1.1, letterSpacing: "-0.01em" }}>
            L&apos;expérience de Seligman
          </h4>
          <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 15, lineHeight: 1.7, margin: "14px 0 0", opacity: 0.95 }}>
            Dans les années 1960, le psychologue américain Martin Seligman a mené une expérience
            fondatrice sur le comportement animal face à la contrainte — étudiant l&apos;apprentissage,
            la motivation, et ce qui se passe quand un être vivant perd tout sentiment de contrôle sur
            sa situation.
          </p>

          <div style={{ marginTop: 24, padding: "20px 22px", background: "rgba(255,255,255,0.1)", borderRadius: 16 }}>
            <div style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.85, marginBottom: 14 }}>
              Étape 1 — Trois groupes de chiens observés
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { n: "G1", t: "Groupe témoin", d: "Sans aucune contrainte." },
                { n: "G2", t: "Groupe maîtrise", d: "Attaché et soumis à des décharges, avec un mécanisme pour s'en libérer." },
                { n: "G3", t: "Groupe sans contrôle", d: "Attaché et soumis aux mêmes décharges, sans aucun moyen d'y échapper." },
              ].map((g) => (
                <div key={g.n} style={{ display: "grid", gridTemplateColumns: "40px 1fr", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-quicksand), system-ui, sans-serif", fontWeight: 700, fontSize: 13, flexShrink: 0 }}>
                    {g.n}
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-quicksand), system-ui, sans-serif", fontWeight: 600, fontSize: 15 }}>{g.t}</div>
                    <div style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 13.5, lineHeight: 1.55, opacity: 0.92, marginTop: 2 }}>{g.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 16, padding: "20px 22px", background: "rgba(255,255,255,0.1)", borderRadius: 16 }}>
            <div style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.85, marginBottom: 14 }}>
              Étape 2 — Résultat
            </div>
            <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 14, lineHeight: 1.65, opacity: 0.95, marginBottom: 14 }}>
              Les deux groupes sont placés dans une cage divisée en deux compartiments par un muret : d&apos;un côté le sol est électrifié, de l&apos;autre non. Il suffit de franchir le muret pour échapper aux décharges.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div style={{ padding: "14px 16px", background: "rgba(255,255,255,0.1)", borderRadius: 12 }}>
                <div style={{ fontFamily: "var(--font-quicksand), system-ui, sans-serif", fontWeight: 600, fontSize: 15, marginBottom: 4 }}>Groupe 2</div>
                <div style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 13, lineHeight: 1.55, opacity: 0.92 }}>
                  Ayant appris qu&apos;il pouvait agir — il tente, comprend, saute. <strong>Liberté retrouvée.</strong>
                </div>
              </div>
              <div style={{ padding: "14px 16px", background: "rgba(0,0,0,0.18)", borderRadius: 12 }}>
                <div style={{ fontFamily: "var(--font-quicksand), system-ui, sans-serif", fontWeight: 600, fontSize: 15, marginBottom: 4 }}>Groupe 3</div>
                <div style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 13, lineHeight: 1.55, opacity: 0.92 }}>
                  N&apos;essaie même pas. Il s&apos;allonge et subit. <strong>Il a appris qu&apos;il n&apos;avait aucun pouvoir.</strong>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 24, padding: "20px 24px", background: "#fbfaf4", borderRadius: 16 }}>
            <div style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#6b7a44", marginBottom: 8 }}>
              Le terme scientifique
            </div>
            <h5 style={{ fontFamily: "var(--font-quicksand), system-ui, sans-serif", fontWeight: 600, fontSize: 22, margin: 0, color: "#1c2018" }}>
              La résignation acquise
            </h5>
            <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 14.5, lineHeight: 1.65, color: "#4a4f3f", margin: "10px 0 0" }}>
              Également connue sous le terme d&apos;<strong>impuissance</strong> ou{" "}
              <strong>détresse acquise</strong> : c&apos;est un état psychologique profond dans lequel
              l&apos;individu abandonne toute tentative d&apos;agir sur son environnement. Chez le
              chien comme chez l&apos;humain.
            </p>
            <p style={{ fontFamily: "var(--font-lora), Georgia, serif", fontStyle: "italic", fontSize: 16, color: "#6b7a44", margin: "14px 0 0", fontWeight: 500 }}>
              Pensez-vous toujours que « dominer » son chien est la meilleure solution ? Un chien qui
              vous obéit par peur n&apos;est pas un chien éduqué. C&apos;est un chien qui souffre en
              silence.
            </p>
          </div>
        </div>
      </div>

      <div style={{ background: "#f1ecdc", borderRadius: 18, padding: "24px 28px", borderLeft: "3px solid #6b7a44" }}>
        <p style={{ fontFamily: "var(--font-lora), Georgia, serif", fontStyle: "italic", fontSize: 19, lineHeight: 1.5, color: "#1c2018", margin: 0, fontWeight: 500 }}>
          Pensez-vous toujours que « dominer » son chien est la meilleure solution ?
          <span style={{ fontStyle: "normal", fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 15, color: "#4a4f3f", fontWeight: 400, lineHeight: 1.65, marginTop: 12, display: "block" }}>
            Un chien qui vous obéit par peur n&apos;est pas un chien éduqué. C&apos;est un chien qui
            souffre en silence.
          </span>
        </p>
      </div>
    </div>
  );
}

function LanguageAnswer() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 16, lineHeight: 1.75, color: "#4a4f3f", margin: 0 }}>
        <strong>Oui, et c&apos;est même essentiel !</strong> Une séance avec moi pose les bases et vous
        donne les outils — mais c&apos;est la <em>pratique régulière au quotidien</em> qui fait vraiment
        la différence.
      </p>
      <div style={{ background: "#f1ecdc", borderRadius: 18, padding: "24px 28px" }}>
        <div style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 11, color: "#6b7a44", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 14 }}>
          Une métaphore
        </div>
        <div style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 15, lineHeight: 1.7, color: "#4a4f3f", marginBottom: 16 }}>
          Vous vous rappelez des cours d&apos;anglais à l&apos;école ? Quelle stratégie est la plus
          efficace ?
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div style={{ background: "#ffffff", border: "1px solid #e8e4d4", borderRadius: 14, padding: "16px 18px" }}>
            <div style={{ fontFamily: "var(--font-quicksand), system-ui, sans-serif", fontWeight: 700, fontSize: 14, color: "#c9b78f", marginBottom: 6 }}>Option 1</div>
            <div style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 14.5, lineHeight: 1.55, color: "#4a4f3f" }}>
              Parler la langue de temps en temps
            </div>
          </div>
          <div style={{ background: "#dde2ce", border: "1px solid #6b7a44", borderRadius: 14, padding: "16px 18px" }}>
            <div style={{ fontFamily: "var(--font-quicksand), system-ui, sans-serif", fontWeight: 700, fontSize: 14, color: "#6b7a44", marginBottom: 6 }}>Option 2 ★</div>
            <div style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 14.5, lineHeight: 1.55, color: "#1c2018", fontWeight: 600 }}>
              Favoriser une immersion régulière
            </div>
          </div>
        </div>
        <div style={{ fontFamily: "var(--font-lora), Georgia, serif", fontStyle: "italic", fontSize: 15, color: "#6b7a44", marginTop: 14, textAlign: "right" }}>
          Do you see the difference? 😉
        </div>
      </div>
    </div>
  );
}

function FAQItem({ q, a, rich, language }: { q: string; a: string; rich?: boolean; language?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid #e8e4d4",
        borderRadius: 20,
        padding: "22px 28px",
        cursor: "pointer",
      }}
      onClick={() => setOpen(!open)}
    >
      <div
        style={{
          fontFamily: "var(--font-quicksand), system-ui, sans-serif",
          fontWeight: 600,
          fontSize: 20,
          color: "#1c2018",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
        }}
      >
        <span>{q}</span>
        <span
          style={{
            width: 30,
            height: 30,
            borderRadius: 99,
            background: "#dde2ce",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#6b7a44",
            fontWeight: 700,
            fontSize: 16,
            flexShrink: 0,
            transition: "transform 0.2s",
            transform: open ? "rotate(45deg)" : "none",
          }}
        >
          +
        </span>
      </div>
      {open && (
        <div style={{ marginTop: 18 }}>
          {rich ? (
            <SeligmanAnswer />
          ) : language ? (
            <LanguageAnswer />
          ) : (
            <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 16, lineHeight: 1.75, color: "#4a4f3f", margin: 0 }}>
              {a}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
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
            Foire aux questions
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
            Vos questions,
            <br />
            <span style={{ color: "#6b7a44" }}>mes réponses.</span>
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
            Les questions qui reviennent le plus souvent. Si vous en avez d&apos;autres, n&apos;hésitez
            pas à{" "}
            <Link
              href="/contact"
              style={{
                color: "#1c2018",
                fontWeight: 600,
                borderBottom: "2px solid #1c2018",
                textDecoration: "none",
              }}
            >
              m&apos;écrire
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ LIST */}
      <section style={{ padding: "40px 56px 80px", background: "#fbfaf4" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {sections.map((sec, si) => (
            <div key={si} style={{ marginBottom: si < sections.length - 1 ? 48 : 0 }}>
              <div
                style={{
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontSize: 12,
                  color: "#6b7a44",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  marginBottom: 20,
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <span>{sec.cat}</span>
                <span style={{ flex: 1, height: 1, background: "#e8e4d4" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {sec.items.map((item, qi) => (
                  <FAQItem
                    key={qi}
                    q={item.q}
                    a={item.a}
                    rich={"rich" in item ? item.rich : false}
                    language={"language" in item ? item.language : false}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "90px 56px 110px", background: "#f1ecdc" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <Eyebrow>Une autre question ?</Eyebrow>
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
            Ne reste pas avec un doute.
            <br />
            <span
              style={{
                color: "#6b7a44",
                fontFamily: "var(--font-lora), Georgia, serif",
                fontStyle: "italic",
                fontWeight: 500,
              }}
            >
              Écris-moi.
            </span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-manrope), system-ui, sans-serif",
              fontSize: 16,
              lineHeight: 1.65,
              color: "#4a4f3f",
              marginTop: 24,
              maxWidth: 540,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Je réponds à chaque message personnellement, sous 48&nbsp;h. Sans jugement, sans
            engagement.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              gap: 12,
              alignItems: "center",
              marginTop: 32,
              background: "#8f9e63",
              color: "#fbfaf4",
              fontFamily: "var(--font-manrope), system-ui, sans-serif",
              fontWeight: 600,
              fontSize: 15,
              padding: "16px 26px",
              borderRadius: 999,
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
        </div>
      </section>
    </>
  );
}
