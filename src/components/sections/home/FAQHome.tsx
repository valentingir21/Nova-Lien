"use client";

import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import { useState } from "react";

const items = [
  {
    q: "Est-ce que les méthodes positives fonctionnent vraiment ?",
    a: "Oui, et c'est scientifiquement prouvé. Les méthodes positives renforcent ce que le chien fait bien, plutôt que de punir ce qu'il fait mal. Un chien qui apprend dans un cadre bienveillant est plus motivé, plus confiant, et ses acquis sont plus durables. La punition peut stopper un comportement en surface — elle n'en traite jamais la cause.",
  },
  {
    q: "À partir de quel âge peut-on éduquer un chien ?",
    a: "Dès les premières semaines de vie ! Plus tôt on pose des bases solides, plus c'est facile pour lui et pour vous. Mais il n'est jamais trop tard non plus : un chien adulte ou senior est tout à fait capable d'apprendre. L'âge n'est pas un obstacle, juste un contexte qu'on prend en compte.",
  },
  {
    q: "Mon chien est très têtu — est-ce utile de faire un suivi ?",
    a: "Être têtu, ça n'existe pas vraiment chez le chien. Ce qu'on perçoit comme de l'entêtement est souvent un manque de motivation, une incompréhension, un besoin non satisfait. Les chiens les plus « difficiles » ont souvent juste besoin d'être compris.",
  },
  {
    q: "Combien de séances faut-il en moyenne ?",
    a: "Ça dépend de votre situation, de la problématique et de votre investissement. Certains duos progressent rapidement en quelques séances, d'autres ont besoin d'un accompagnement plus long. C'est pour ça que tout commence par un bilan comportemental — pour évaluer vos besoins et proposer un programme réaliste.",
  },
];

export default function FAQHome() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section style={{ padding: "120px 56px", background: "#fbfaf4" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.9fr 1.2fr",
            gap: 64,
            alignItems: "flex-start",
          }}
        >
          <div style={{ position: "sticky", top: 100 }}>
            <Eyebrow>Questions fréquentes</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(38px, 4vw, 56px)",
                lineHeight: 1,
                color: "#1c2018",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              On répond à
              <br />
              vos doutes.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontSize: 16,
                lineHeight: 1.65,
                color: "#4a4f3f",
                marginTop: 24,
                maxWidth: 360,
              }}
            >
              Les questions qui reviennent le plus souvent. Une autre interrogation ?{" "}
              <Link
                href="/contact"
                style={{ color: "#1c2018", fontWeight: 600, borderBottom: "2px solid #1c2018", textDecoration: "none" }}
              >
                Écris-moi
              </Link>
              .
            </p>
            <Link
              href="/faq"
              style={{
                display: "inline-flex",
                gap: 8,
                alignItems: "center",
                marginTop: 24,
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontWeight: 600,
                fontSize: 14,
                color: "#6b7a44",
                textDecoration: "none",
              }}
            >
              Voir la FAQ complète →
            </Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {items.map((x, i) => (
              <div
                key={i}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e8e4d4",
                  borderRadius: 20,
                  padding: "22px 26px",
                  cursor: "pointer",
                }}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div
                  style={{
                    fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: 19,
                    color: "#1c2018",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <span>{x.q}</span>
                  <span
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 99,
                      background: "#dde2ce",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#6b7a44",
                      fontWeight: 700,
                      flexShrink: 0,
                      fontSize: 18,
                      transition: "transform 0.2s",
                      transform: open === i ? "rotate(45deg)" : "none",
                    }}
                  >
                    +
                  </span>
                </div>
                {open === i && (
                  <p
                    style={{
                      fontFamily: "var(--font-manrope), system-ui, sans-serif",
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: "#4a4f3f",
                      marginTop: 14,
                      marginBottom: 0,
                    }}
                  >
                    {x.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
