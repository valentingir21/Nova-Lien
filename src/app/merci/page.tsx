import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Merci — Nova Lien",
  description: "Votre message a bien été reçu. Amandine vous répondra sous 48h.",
  robots: { index: false },
};

export default function MerciPage() {
  return (
    <section style={{ padding: "120px 56px", background: "#fbfaf4", minHeight: "70vh" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 56, marginBottom: 24 }}>🐾</div>
        <h1
          style={{
            fontFamily: "var(--font-quicksand), system-ui, sans-serif",
            fontWeight: 600,
            fontSize: "clamp(36px, 5vw, 56px)",
            lineHeight: 1.05,
            color: "#1c2018",
            margin: "0 0 24px",
            letterSpacing: "-0.02em",
          }}
        >
          Votre message
          <br />
          <span
            style={{
              color: "#6b7a44",
              fontFamily: "var(--font-lora), Georgia, serif",
              fontStyle: "italic",
              fontWeight: 500,
            }}
          >
            a bien été reçu.
          </span>
        </h1>
        <p
          style={{
            fontFamily: "var(--font-manrope), system-ui, sans-serif",
            fontSize: 18,
            lineHeight: 1.65,
            color: "#4a4f3f",
            marginBottom: 40,
          }}
        >
          Merci de m&apos;avoir contactée. Je vous répondrai dans les meilleurs délais,
          généralement <strong>sous 48h</strong>, pour convenir d&apos;un premier échange.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/"
            style={{
              padding: "14px 32px",
              borderRadius: 999,
              background: "#8f9e63",
              color: "#fbfaf4",
              fontFamily: "var(--font-quicksand), system-ui, sans-serif",
              fontSize: 16,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/faq"
            style={{
              padding: "14px 32px",
              borderRadius: 999,
              background: "#ffffff",
              color: "#4a4f3f",
              border: "1px solid #e8e4d4",
              fontFamily: "var(--font-quicksand), system-ui, sans-serif",
              fontSize: 16,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Voir la FAQ
          </Link>
        </div>
      </div>
    </section>
  );
}
